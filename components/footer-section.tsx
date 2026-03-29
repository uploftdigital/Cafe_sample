"use client";

import { Instagram, MapPin, Clock, Phone, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const hours = [
  { day: "Monday - Friday", time: "7:00 AM - 10:00 PM" },
  { day: "Saturday", time: "8:00 AM - 11:00 PM" },
  { day: "Sunday", time: "8:00 AM - 10:00 PM" },
];

export function FooterSection() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      id="contact"
      className="bg-foreground px-6 py-16 text-primary-foreground md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Map */}
          <div
            className={`order-2 transition-all duration-700 lg:order-1 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-primary-foreground/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0026277844856!2d72.8317!3d19.0596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c91e8b9c0001%3A0x1234567890abcdef!2sBandra%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Chai & Chaat Location - Bandra, Mumbai"
                className="absolute inset-0 grayscale transition-all duration-300 hover:grayscale-0"
              />
            </div>
          </div>

          {/* Info */}
          <div
            className={`order-1 transition-all delay-200 duration-700 lg:order-2 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="font-serif text-2xl font-medium tracking-wide md:text-3xl">
              Chai & Chaat
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/70">
              Your neighbourhood adda for authentic chai, filter kaapi, and beloved 
              Indian street food. Aao, chai pe charcha karein!
            </p>

            {/* Contact Details */}
            <div className="mt-8 space-y-4">
              <div className="group flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-foreground/60 transition-colors group-hover:text-accent" />
                <div>
                  <p className="text-sm text-primary-foreground">
                    Shop 12, Hill Road
                  </p>
                  <p className="text-sm text-primary-foreground/70">
                    Bandra West, Mumbai 400050
                  </p>
                </div>
              </div>

              <div className="group flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary-foreground/60 transition-colors group-hover:text-accent" />
                <a
                  href="tel:+919876543210"
                  className="text-sm text-primary-foreground transition-colors hover:text-accent"
                >
                  +91 98765 43210
                </a>
              </div>

              <div className="group flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary-foreground/60 transition-colors group-hover:text-accent" />
                <a
                  href="mailto:hello@chaiandchaat.in"
                  className="text-sm text-primary-foreground transition-colors hover:text-accent"
                >
                  hello@chaiandchaat.in
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-8">
              <div className="mb-3 flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-xs font-medium uppercase tracking-wider text-primary-foreground/60">
                  Timings
                </span>
              </div>
              <div className="space-y-2">
                {hours.map((schedule, index) => (
                  <div
                    key={schedule.day}
                    className={`flex justify-between text-sm transition-all duration-500 ${
                      isVisible
                        ? "translate-x-0 opacity-100"
                        : "translate-x-4 opacity-0"
                    }`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    <span className="text-primary-foreground/70">
                      {schedule.day}
                    </span>
                    <span className="text-primary-foreground">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://instagram.com/chaiandchaat"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-sm bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground/70 transition-all hover:bg-accent hover:text-accent-foreground"
              >
                <Instagram className="h-4 w-4" />
                <span>@chaiandchaat</span>
              </a>
              <a
                href="https://zomato.com/chaiandchaat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground/70 transition-all hover:bg-accent hover:text-accent-foreground"
              >
                Order on Zomato
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 text-xs text-primary-foreground/50 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Chai & Chaat. Made with chai in
            Mumbai.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="transition-colors hover:text-primary-foreground/70"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="transition-colors hover:text-primary-foreground/70"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
