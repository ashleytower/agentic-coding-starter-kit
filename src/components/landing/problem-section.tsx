import { Clock, FileSpreadsheet, Mic } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const problems = [
  {
    icon: Clock,
    title: "Inventory Takes Too Long",
    description:
      "Manual counting and data entry waste hours of valuable time that could be spent growing your business.",
  },
  {
    icon: FileSpreadsheet,
    title: "Spreadsheets Are Tedious",
    description:
      "Typing numbers into cells is repetitive, error-prone, and frustrating. There has to be a better way.",
  },
  {
    icon: Mic,
    title: "Voice Would Be Faster",
    description:
      "You can speak 3-4x faster than you can type. Why not use your voice to update inventory instantly?",
  },
];

export function ProblemSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The problem you know too well
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Managing inventory shouldn&apos;t feel like a chore. But with traditional
            methods, it often does.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <Card
                key={index}
                className="bg-card border border-border rounded-2xl p-6 sm:p-8 hover:border-primary/50 transition-all"
              >
                <CardHeader className="p-0 space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Title */}
                  <CardTitle className="text-xl sm:text-2xl font-bold text-foreground">
                    {problem.title}
                  </CardTitle>

                  {/* Description */}
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {problem.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
