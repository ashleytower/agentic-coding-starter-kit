"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function FooterCtaSection() {
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
    <section id="contact" className="py-16 sm:py-20 lg:py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Ready to speed up your inventory?
          </h2>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Join our waitlist and be among the first to experience voice-powered
            inventory management. Early access coming soon.
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

          {/* Privacy Note */}
          <p className="text-sm text-muted-foreground">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
