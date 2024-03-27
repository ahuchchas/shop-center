"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CustomLink({ children, path }) {
  const pathname = usePathname();
  const active = pathname === path;

  return (
    <Link
      className={`${active ? "text-blue-400" : ""}`}
      href={path}
      scroll={false}
    >
      {children}
    </Link>
  );
}
