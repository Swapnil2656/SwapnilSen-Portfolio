export const NAV_LINKS = [
  { label: "Work", id: "projects" },
  { label: "Services", id: "services" },
  { label: "Skills", id: "skills" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export const OPEN_COMMAND_PALETTE_EVENT = "open-command-palette";
export const openCommandPalette = () => window.dispatchEvent(new Event(OPEN_COMMAND_PALETTE_EVENT));
