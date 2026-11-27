import { useEffect } from "react";

const DEFAULT_TITLE = "Swapnil Sen — Software Engineer · AI & ML · Full Stack";

/** Sets the page title and meta description for client-side routes. */
export function useDocumentMeta(title?: string, description?: string) {
  useEffect(() => {
    document.title = title ? `${title} — Swapnil Sen` : DEFAULT_TITLE;
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previous = meta?.content;
    if (meta && description) meta.content = description;
    return () => {
      document.title = DEFAULT_TITLE;
      if (meta && previous) meta.content = previous;
    };
  }, [title, description]);
}
