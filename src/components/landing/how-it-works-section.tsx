import { Mic, Brain, Sheet } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Mic,
    title: "Just speak",
    description:
      "Simply say your inventory updates out loud. No typing, no clicking, no hassle.",
    note: "Example: 'Add 12 units of blue widgets to warehouse A'",
  },
  {
    number: 2,
    icon: Brain,
    title: "AI understands",
    description:
      "Our advanced AI processes your speech, understands context, and extracts the data you need.",
    note: "Fuzzy matching means you don't need exact product names",
  },
  {
    number: 3,
    icon: Sheet,
    title: "Sheets sync",
    description:
      "Your Google Sheets updates automatically in real-time. Everything stays organized and accessible.",
    note: "Works with your existing spreadsheet setup",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to transform your inventory management workflow.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4"
              >
                {/* Numbered Circle with Icon */}
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg">
                    <Icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-base text-muted-foreground leading-relaxed max-w-sm">
                  {step.description}
                </p>

                {/* Step Note */}
                <p className="text-sm text-muted-foreground/80 italic max-w-sm">
                  {step.note}
                </p>

                {/* Connector Line (hidden on last item and on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-border -z-10" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
