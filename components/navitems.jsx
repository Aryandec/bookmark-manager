"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";

const NavItems = () => {
  const pathname = usePathname();
  const { isSignedIn } = useUser(); // 👈 Clerk hook

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Dashboard",
      href: isSignedIn ? "/dashboard" : "/sign-in", // 👈 Redirect based on auth state
    },
  ];

  return (
    <nav className="flex items-center gap-4">
      {navItems.map(({ label, href }) => (
        <Link
          href={href}
          key={label}
          className={cn(
            pathname === href && "text-primary font-semibold"
          )}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default NavItems;
