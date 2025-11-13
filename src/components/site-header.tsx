"use client";

import Link from "next/link";
import { useState } from "react";
import { UserProfile } from "@/components/auth/user-profile";
import { ModeToggle } from "./ui/mode-toggle";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "./ui/sheet";
import { Menu } from "lucide-react";
import { useSession } from "@/lib/auth-client";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: session, isPending } = useSession();

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How it works" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const isAuthenticated = !!session;

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link
          href={isAuthenticated ? "/home" : "/"}
          className="text-2xl font-bold text-foreground hover:text-foreground/80 transition-colors"
        >
          stockly.
        </Link>

        {/* Desktop Navigation - Only show for unauthenticated users after auth state loads */}
        {!isPending && !isAuthenticated && (
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}

        <div className="flex items-center gap-4">
          {/* CTA Button - Only show for unauthenticated users after auth state loads */}
          {!isPending && !isAuthenticated && (
            <Button size="lg" className="hidden md:inline-flex">
              Get in touch
            </Button>
          )}
          <div className="hidden md:flex items-center gap-4">
            <UserProfile />
            <ModeToggle />
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
              <SheetTitle className="text-left mb-8">Menu</SheetTitle>
              <nav className="flex flex-col space-y-6">
                {/* Only show landing page links for unauthenticated users after auth state loads */}
                {!isPending && !isAuthenticated && (
                  <>
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={handleNavClick}
                        className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                    <Button size="lg" className="w-full" onClick={handleNavClick}>
                      Get in touch
                    </Button>
                  </>
                )}
                <div className="flex items-center gap-4 pt-6 border-t">
                  <UserProfile />
                  <ModeToggle />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
