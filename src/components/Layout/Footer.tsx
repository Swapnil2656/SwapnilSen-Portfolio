import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import { profile, socials } from "../../data/portfolio";
import { NAV_LINKS } from "../../utils/nav";

function useLocalTime(timeZone: string) {
  const fmt = () =>
    new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone }).format(new Date());
  const [time, setTime] = useState(fmt);
  useEffect(() => {
    const id = window.setInterval(() => setTime(fmt()), 30_000);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeZone]);
  return time;
}

const Footer: React.FC = () => {
  const time = useLocalTime(profile.timezone);
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-16">
          <div className="col-span-2">
            <p className="font-mono text-[11px] tracking-widest uppercase text-background/50 mb-4">
              Have a project in mind?
            </p>
            <a
              href={socials.email}
              className="font-grotesk font-bold text-[clamp(1.5rem,3.5vw,2.5rem)] leading-tight tracking-tight break-all hover:opacity-70 transition-opacity"
            >
              {profile.email}
            </a>
          </div>

          <div>
            <p className="font-mono text-[11px] tracking-widest uppercase text-background/50 mb-4">Sitemap</p>
            <ul className="space-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <Link to={`/#${l.id}`} className="hover:opacity-60 transition-opacity">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] tracking-widest uppercase text-background/50 mb-4">Elsewhere</p>
            <ul className="space-y-2">
              <li><a href={socials.github} target="_blank" rel="noopener noreferrer" className="hover:opacity-60">GitHub</a></li>
              <li><a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:opacity-60">LinkedIn</a></li>
              <li><a href={socials.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:opacity-60">WhatsApp</a></li>
              <li><a href={profile.resume} target="_blank" rel="noopener noreferrer" className="hover:opacity-60">Résumé</a></li>
            </ul>
          </div>
        </div>

        <p
          aria-hidden="true"
          className="font-grotesk font-bold uppercase leading-[0.8] tracking-tighter text-[clamp(3rem,13.5vw,13rem)] whitespace-nowrap text-background/10 select-none -mb-2"
        >
          Swapnil Sen
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between border-t border-background/15 pt-6 font-mono text-[11px] tracking-widest uppercase text-background/60">
          <span>© {year} Swapnil Sen. Design &amp; code by Swapnil Sen.</span>
          <span>{profile.location} · {time} IST</span>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 hover:text-background transition-colors"
          >
            Back to top <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
