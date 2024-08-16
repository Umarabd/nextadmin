"use client";
import React from "react";
import Link from "next/link";
import style from "./menuLink.module.css";
import { amp } from "@/next.config";
import { usePathname } from "next/navigation";

const MenuLink = ({ a }) => {
  const pathname = usePathname();

  return (
    <div>
      <Link
        href={a.path}
        className={`${style.container} ${pathname === a.path && style.active}`}
      >
        {a.icon}
        {a.title}
      </Link>
    </div>
  );
};

export default MenuLink;
