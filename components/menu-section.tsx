"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const menuItems = [
  {
    id: 1,
    name: "Masala Chai",
    description: "Traditional spiced tea with cardamom, ginger, cinnamon & cloves",
    price: "₹60",
    image: "/images/menu-masala-chai.jpg",
    category: "Chai",
    isVeg: true,
  },
  {
    id: 2,
    name: "Filter Coffee",
    description: "Authentic South Indian decoction with chicory, served in davara set",
    price: "₹80",
    image: "/images/menu-filter-coffee.jpg",
    category: "Coffee",
    isVeg: true,
  },
  {
    id: 3,
    name: "Samosa",
    description: "Crispy pastry with spiced potato filling, served with chutneys",
    price: "₹45",
    image: "/images/menu-samosa.jpg",
    category: "Snacks",
    isVeg: true,
  },
  {
    id: 4,
    name: "Vada Pav",
    description: "Mumbai's iconic batata vada in soft pav with garlic chutney",
    price: "₹50",
    image: "/images/menu-vadapav.jpg",
    category: "Street Food",
    isVeg: true,
  },
  {
    id: 5,
    name: "Poha",
    description: "Flattened rice with peanuts, curry leaves, pomegranate & lime",
    price: "₹70",
    image: "/images/menu-poha.jpg",
    category: "Breakfast",
    isVeg: true,
  },
  {
    id: 6,
    name: "Cold Coffee",
    description: "Creamy iced coffee with vanilla ice cream, chocolate drizzle",
    price: "₹120",
    image: "/images/menu-coldbrew.jpg",
    category: "Coffee",
    isVeg: true,
  },
];

function MenuItem({
  item,
  index,
}: {
  item: (typeof menuItems)[0];
  index: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <article
      ref={ref}
      className={`group overflow-hidden rounded-sm border border-border bg-card transition-all duration-500 hover:shadow-xl ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute right-3 top-3 flex items-center gap-2">
          {item.isVeg && (
            <span className="flex h-5 w-5 items-center justify-center rounded-sm border border-green-600 bg-background/90 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-green-600" />
            </span>
          )}
          <span className="rounded-sm bg-background/90 px-2 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
            {item.category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-lg font-medium text-foreground transition-colors group-hover:text-accent">
            {item.name}
          </h3>
          <span className="shrink-0 font-semibold text-accent">{item.price}</span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>
      </div>
    </article>
  );
}

export function MenuSection() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeaderVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="menu" className="bg-background px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`mb-16 text-center transition-all duration-700 ${
            isHeaderVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Hamare Pakwaan
          </span>
          <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Featured Menu
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            From the streets of Mumbai to the hills of Coorg, curated flavours 
            crafted with love and authentic recipes passed down through generations
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item, index) => (
            <MenuItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
