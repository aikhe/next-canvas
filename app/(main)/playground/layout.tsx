import Link from "next/link";

const links = [
  {
    Link: "/",
    Text: "root",
  },
  {
    Link: "/playground/",
    Text: "initial",
  },
  {
    Link: "/playground/rtf-play",
    Text: "rtf-play",
  },
  {
    Link: "/playground/fm-play",
    Text: "fm-play",
  },
  {
    Link: "/playground/db-play",
    Text: "db-play",
  },
];

export default function PlaygroundLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className="absolute left-[50%] top-5 z-[1] flex max-w-fit -translate-x-[50%] gap-2 whitespace-nowrap">
        {links.map((link) => {
          return (
            <Link key={link.Text} href={link.Link}>
              {link.Text}
            </Link>
          );
        })}
      </div>
      {children}
    </main>
  );
}
