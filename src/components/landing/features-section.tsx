import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Mic, Zap, RefreshCw, Users, Bell } from "lucide-react";

const features = [
  {
    id: "voice-commands",
    icon: Mic,
    title: "Voice Commands",
    description:
      "Speak naturally to update your inventory. Our AI understands context, handles multiple items at once, and even corrects common speech errors. Perfect for hands-free operation in busy warehouses or retail environments.",
  },
  {
    id: "fuzzy-matching",
    icon: Zap,
    title: "Fuzzy Matching",
    description:
      "Don't worry about exact product names. Say 'blue widget' instead of 'SKU-12345-BLU-Widget-Large' and Stockly will figure it out. Our intelligent matching system learns your inventory and gets smarter over time.",
  },
  {
    id: "google-sheets-sync",
    icon: RefreshCw,
    title: "Google Sheets Sync",
    description:
      "Seamlessly integrates with your existing Google Sheets. Changes sync in real-time, so your team always has the latest data. No migration required—keep using the tools you already know.",
  },
  {
    id: "multi-user-access",
    icon: Users,
    title: "Multi-User Access",
    description:
      "Grant access to your entire team. Multiple users can update inventory simultaneously without conflicts. Track who made what changes and when with our built-in audit log.",
  },
  {
    id: "low-stock-alerts",
    icon: Bell,
    title: "Low Stock Alerts",
    description:
      "Never run out of critical items again. Set custom thresholds for each product and receive instant notifications when stock levels drop. Configure alerts via email, SMS, or in-app notifications.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 sm:py-20 lg:py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage inventory faster and smarter.
          </p>
        </div>

        {/* Accordion of Features */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <AccordionItem
                key={feature.id}
                value={feature.id}
                className="bg-card border border-border rounded-2xl px-6 overflow-hidden"
              >
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-lg sm:text-xl font-semibold text-foreground text-left">
                      {feature.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-14 pb-6">
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}
