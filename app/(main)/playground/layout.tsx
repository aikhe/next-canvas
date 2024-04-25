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
];

export default function PlaygroundLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className="absolute left-[50%] top-5 z-[1] flex -translate-x-[50%] gap-2">
        {links.map((link) => {
          return <Link href={link.Link}>{link.Text}</Link>;
        })}
      </div>
      {children}
    </main>
  );
}
