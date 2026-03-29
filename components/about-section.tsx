"use client";

import { Leaf, Coffee, Heart, Users } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const values = [
  {
    icon: Leaf,
    title: "Farm Fresh",
    description: "Tea from Assam estates, spices from Kerala, produce from local mandis",
  },
  {
    icon: Coffee,
    title: "Authentic Recipes",
    description: "Time-honoured family recipes with no shortcuts or compromises",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every dish prepared fresh with the warmth of Indian hospitality",
  },
  {
    icon: Users,
    title: "Community Hub",
    description: "A gathering place for chai lovers, families, and friends",
  },
];

const stats = [
  { number: "50K+", label: "Cups of Chai Served" },
  { number: "6+", label: "Years of Legacy" },
  { number: "15+", label: "Authentic Recipes" },
];

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counterStarted, setCounterStarted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setCounterStarted(true), 500);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-secondary px-6 py-20 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div
            className={`relative aspect-[4/5] overflow-hidden rounded-sm transition-all duration-700 lg:aspect-auto lg:h-[600px] ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-8 opacity-0"
            }`}
          >
            <Image
              src="/images/about-cafe.jpg"
              alt="Inside Chai & Chaat cafe"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Floating Stats Card */}
            <div className="absolute bottom-6 left-6 right-6 rounded-sm bg-background/95 p-4 shadow-lg backdrop-blur-sm md:left-auto md:right-6 md:w-auto">
              <div className="flex items-center justify-around gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`text-center transition-all duration-500 ${
                      counterStarted
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="font-serif text-xl font-semibold text-accent md:text-2xl">
                      {stat.number}
                    </div>
                    <div className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground md:text-xs">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all delay-200 duration-700 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-8 opacity-0"
            }`}
          >
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Hamari Kahani
            </span>
            <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
              <span className="text-balance">Born from Passion,</span>
              <br />
              <span className="text-balance">Brewed with Heart</span>
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Chai & Chaat started as a small dream in Bandra, Mumbai — to create a space 
                where the authentic flavours of India could be savoured without compromise. 
                Today, we&apos;re proud to be your neighbourhood adda for the perfect cutting chai 
                and crispy samosas.
              </p>
              <p>
                We source our tea leaves directly from gardens in Assam, our coffee beans 
                from plantations in Coorg, and our spices from the hills of Kerala. Every 
                ingredient tells a story of Indian craftsmanship and tradition.
              </p>
            </div>

            {/* Values */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className={`group transition-all duration-500 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-background transition-colors group-hover:bg-accent">
                      <value.icon className="h-5 w-5 text-accent transition-colors group-hover:text-accent-foreground" />
                    </div>
                    <h3 className="font-medium text-foreground">{value.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
