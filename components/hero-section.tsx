"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-chai.jpg"
          alt="Traditional masala chai being poured"
          fill
          priority
          className="object-cover transition-transform duration-[2s]"
          style={{ transform: isLoaded ? "scale(1)" : "scale(1.1)" }}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
      </div>

      {/* Navigation */}
      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-foreground/95 py-4 shadow-lg backdrop-blur-md"
            : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12 lg:px-20">
          <div
            className={`font-serif text-xl font-medium tracking-wide transition-all duration-300 md:text-2xl ${
              scrolled ? "text-primary-foreground" : "text-primary-foreground"
            }`}
          >
            Chai & Chaat
          </div>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 text-sm font-medium text-primary-foreground/90 md:flex">
            <button
              onClick={() => scrollToSection("menu")}
              className="transition-colors hover:text-primary-foreground"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="transition-colors hover:text-primary-foreground"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="transition-colors hover:text-primary-foreground"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-primary-foreground md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute left-0 right-0 top-full overflow-hidden bg-foreground/95 backdrop-blur-md transition-all duration-300 md:hidden ${
            isMenuOpen ? "max-h-60 py-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col items-center gap-4 text-sm font-medium text-primary-foreground">
            <button
              onClick={() => scrollToSection("menu")}
              className="py-2 transition-colors hover:text-primary-foreground/70"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="py-2 transition-colors hover:text-primary-foreground/70"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="py-2 transition-colors hover:text-primary-foreground/70"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <span
          className={`mb-4 text-xs font-medium uppercase tracking-[0.3em] text-primary-foreground/80 transition-all duration-700 md:text-sm ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          Mumbai&apos;s Finest Since 2018
        </span>
        <h1
          className={`max-w-4xl font-serif text-4xl font-medium leading-tight tracking-tight text-primary-foreground transition-all delay-200 duration-700 md:text-6xl lg:text-7xl ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <span className="block text-balance">Where Traditions</span>
          <span className="block text-balance">Meet Modern Taste</span>
        </h1>
        <p
          className={`mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80 transition-all delay-300 duration-700 md:text-lg ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          Authentic masala chai, South Indian filter coffee, and beloved street food classics. 
          Experience the warmth of India in every sip and bite.
        </p>
        <Button
          onClick={scrollToMenu}
          size="lg"
          className={`mt-10 bg-primary-foreground px-8 py-6 text-sm font-medium tracking-wide text-foreground transition-all delay-500 duration-700 hover:scale-105 hover:bg-primary-foreground/90 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          View Menu & Location
        </Button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-5 w-5 text-primary-foreground/60" />
        </div>
      </div>
    </section>
  );
}
