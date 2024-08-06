"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

interface NavLinkProps {
  links: {
    url: string;
    title: string;
    icon?: JSX.Element;
  }[];
}

const NavLink = ({ links }: NavLinkProps) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      {links.map((link) => (
        <motion.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          key={link.title}
        >
          <Link
            href={link.url}
            className={cn(
              "flex gap-1 items-center justify-between relative",
              pathname === link.url && "text-primary"
            )}
          >
            {link.icon}
            {link.title}
            {pathname === link.url ? (
              <motion.div
                className="h-[2px] w-full rounded-full absolute bg-primary z-0 left-0 -bottom-1"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                layoutId="underline"
                transition={{ type: "spring", stiffness: 35 }}
              />
            ) : null}
          </Link>
        </motion.li>
      ))}
    </AnimatePresence>
  );
};

export default NavLink;
