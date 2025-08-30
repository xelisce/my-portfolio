export type Block =
  | { type: "image"; src: string; alt?: string; caption?: string }
  | { type: "paragraph"; text: string }
  | { type: "quote"; text: string; author?: string }
  | { type: "video"; src: string; caption?: string }
  | { type: "list"; items: string[] }
  | { type: "header1"; text: string }
  | { type: "header2"; text: string }
  | { type: "header3"; text: string }
  | { type: "link"; href: string; text: string }
  | { type: "files"; files: { name: string; href: string }[] }
  | { type: "embedLink"; href: string; text: string; description?: string; icon?: string; image?: string };

