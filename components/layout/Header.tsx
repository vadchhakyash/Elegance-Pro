import { useState } from "react";
import { Button } from "../ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between relative">
        <div className="text-2xl font-bold tracking-tight text-foreground">
          Elegance Pro
        </div>
        <div className="hidden md:flex gap-8 items-center"></div>
        {/* Desktop nav (unchanged) */}
        <div className="hidden md:flex gap-8 items-center">
          {/* existing desktop nav items */}
          <div className="hidden md:flex gap-8 items-center">
            <a
              href="#features"
              className="text-sm text-foreground hover:text-accent transition"
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="text-sm text-foreground hover:text-accent transition"
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="text-sm text-foreground hover:text-accent transition"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="text-sm text-foreground hover:text-accent transition"
            >
              Contact
            </a>
            <Button className="ml-4 bg-primary text-primary-foreground hover:bg-primary/90">
              Get Started
            </Button>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-muted"
          aria-label="Toggle menu"
          onClick={() => setMobileMenuOpen((s) => !s)}
        >
          {mobileMenuOpen ? (
            /* close icon */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            /* hamburger icon */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Mobile menu panel */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute left-4 right-4 top-full mt-2 bg-card border border-border rounded-lg p-4 z-50 shadow-lg">
            {" "}
            <nav className="flex flex-col gap-3">
              <a href="#features" className="px-3 py-2 rounded hover:bg-muted">
                Features
              </a>
              <a href="#pricing" className="px-3 py-2 rounded hover:bg-muted">
                Pricing
              </a>
              <a
                href="#testimonials"
                className="px-3 py-2 rounded hover:bg-muted"
              >
                Testimonials
              </a>
            </nav>
          </div>
        )}
      </nav>
    </header>
  );
}
