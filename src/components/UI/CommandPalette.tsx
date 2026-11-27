import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Copy, FileText, Github, Linkedin, Mail, Search } from "lucide-react";
import { profile, projects, socials } from "../../data/portfolio";
import { OPEN_COMMAND_PALETTE_EVENT as OPEN_EVENT } from "../../utils/nav";


type Action = {
  id: string;
  group: string;
  label: string;
  icon: React.ReactNode;
  run: () => void;
};

/** ⌘K / Ctrl+K quick menu: jump to sections, open projects, copy email. */
const CommandPalette: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const [toast, setToast] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setIndex(0);
  }, []);

  const actions: Action[] = useMemo(() => {
    const go = (path: string) => () => navigate(path);
    const ext = (url: string) => () => window.open(url, "_blank", "noopener,noreferrer");
    return [
      { id: "work", group: "Navigate", label: "Work", icon: <ArrowRight size={14} />, run: go("/#projects") },
      { id: "services", group: "Navigate", label: "Services", icon: <ArrowRight size={14} />, run: go("/#services") },
      { id: "skills", group: "Navigate", label: "Skills", icon: <ArrowRight size={14} />, run: go("/#skills") },
      { id: "about", group: "Navigate", label: "About", icon: <ArrowRight size={14} />, run: go("/#about") },
      { id: "contact", group: "Navigate", label: "Contact", icon: <ArrowRight size={14} />, run: go("/#contact") },
      ...projects.map((p) => ({
        id: `p-${p.slug}`,
        group: "Projects",
        label: `${p.title} — ${p.tagline}`,
        icon: <ArrowRight size={14} />,
        run: go(`/projects/${p.slug}`),
      })),
      {
        id: "copy",
        group: "Actions",
        label: "Copy email address",
        icon: <Copy size={14} />,
        run: () => {
          navigator.clipboard?.writeText(profile.email).then(
            () => setToast("Email copied"),
            () => setToast(profile.email),
          );
        },
      },
      { id: "mail", group: "Actions", label: "Send an email", icon: <Mail size={14} />, run: () => (window.location.href = socials.email) },
      { id: "cv", group: "Actions", label: "Open résumé", icon: <FileText size={14} />, run: ext(profile.resume) },
      { id: "gh", group: "Links", label: "GitHub", icon: <Github size={14} />, run: ext(socials.github) },
      { id: "li", group: "Links", label: "LinkedIn", icon: <Linkedin size={14} />, run: ext(socials.linkedin) },
    ];
  }, [navigate]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? actions.filter((a) => `${a.group} ${a.label}`.toLowerCase().includes(q)) : actions;
  }, [actions, query]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_EVENT, onOpen);
    };
  }, []);

  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(null), 2000);
    return () => window.clearTimeout(t);
  }, [toast]);

  const runAt = (i: number) => {
    const action = filtered[i];
    if (!action) return;
    close();
    action.run();
  };

  const onInputKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      runAt(index);
    } else if (e.key === "Escape") {
      close();
    }
  };

  let lastGroup = "";

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-start justify-center px-4 pt-[15vh] bg-black/30 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={close}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Command menu"
              initial={{ y: -12, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: -12, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onMouseDown={(e) => e.stopPropagation()}
              className="w-full max-w-lg bg-background border border-foreground shadow-2xl"
            >
              <div className="flex items-center gap-3 border-b border-border px-4">
                <Search size={16} className="text-neutral-500" />
                <input
                  ref={inputRef}
                  autoFocus
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setIndex(0);
                  }}
                  onKeyDown={onInputKey}
                  placeholder="Type a command or search…"
                  className="flex-1 bg-transparent py-4 outline-none font-mono text-sm placeholder:text-neutral-400"
                  aria-label="Search commands"
                />
                <kbd className="font-mono text-[10px] text-neutral-500 border border-border px-1.5 py-0.5">ESC</kbd>
              </div>
              <ul className="max-h-[50vh] overflow-y-auto py-2" role="listbox">
                {filtered.length === 0 && (
                  <li className="px-4 py-6 text-center font-mono text-xs text-neutral-500">No results</li>
                )}
                {filtered.map((a, i) => {
                  const header = a.group !== lastGroup;
                  lastGroup = a.group;
                  return (
                    <React.Fragment key={a.id}>
                      {header && (
                        <li className="px-4 pt-3 pb-1 font-mono text-[10px] tracking-widest uppercase text-neutral-400">
                          {a.group}
                        </li>
                      )}
                      <li
                        role="option"
                        aria-selected={i === index}
                        onMouseEnter={() => setIndex(i)}
                        onClick={() => runAt(i)}
                        className={`mx-2 flex items-center gap-3 px-3 py-2.5 cursor-pointer text-sm ${
                          i === index ? "bg-foreground text-background" : "text-foreground"
                        }`}
                      >
                        {a.icon}
                        {a.label}
                      </li>
                    </React.Fragment>
                  );
                })}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {toast && (
          <motion.div
            role="status"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[210] bg-foreground text-background font-mono text-xs tracking-widest uppercase px-4 py-2.5"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CommandPalette;
