"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: Implement waitlist signup logic
    // Analytics or API call will go here
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
    }, 1000);
  };

  return (
    <section className="py-20 sm:py-24 lg:py-32 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Badge */}
          <Badge
            variant="outline"
            className="text-xs uppercase font-semibold tracking-wider px-4 py-2 rounded-full"
          >
            Our Pre-Launch Waitlist
          </Badge>

          {/* Hero Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight">
            Inventory at the speed of speech.
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Say goodbye to tedious manual entry. Stockly transforms your voice
            into instant inventory updates, syncing seamlessly with your Google
            Sheets.
          </p>

          {/* Email Waitlist Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md flex flex-col sm:flex-row gap-3"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email address"
              className="flex-1"
            />
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="sm:w-auto w-full"
            >
              {isSubmitting ? "Joining..." : "Get on the waitlist"}
            </Button>
          </form>

          {/* Optional: Trust indicator */}
          <p className="text-sm text-muted-foreground">
            Join 500+ businesses waiting for early access
          </p>
        </div>
      </div>
    </section>
  );
}
