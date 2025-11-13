"use client"

import { Button } from "@/components/ui/button"
import { Mic, MicOff } from "lucide-react"
import { useState } from "react"

export default function AgentPage() {
  const [isListening, setIsListening] = useState(false)

  return (
    <div className="container mx-auto max-w-2xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Voice Agent</h1>
        <p className="text-muted-foreground mt-2">
          Ask about your inventory using your voice
        </p>
      </div>

      {/* Chat History */}
      <div className="space-y-4 mb-8 min-h-[300px]">
        {/* User Message */}
        <div className="flex justify-end">
          <div className="rounded-lg bg-primary text-primary-foreground px-4 py-2 max-w-[80%]">
            <p className="text-sm">How much vodka do I have left?</p>
          </div>
        </div>

        {/* AI Response */}
        <div className="flex justify-start">
          <div className="rounded-lg bg-muted px-4 py-2 max-w-[80%]">
            <p className="text-sm">
              You have 8 bottles of vodka in stock. Grey Goose: 3 bottles,
              Absolut: 5 bottles. Everything looks good!
            </p>
          </div>
        </div>

        {/* User Message */}
        <div className="flex justify-end">
          <div className="rounded-lg bg-primary text-primary-foreground px-4 py-2 max-w-[80%]">
            <p className="text-sm">Record usage of 2 Grey Goose bottles</p>
          </div>
        </div>

        {/* AI Response */}
        <div className="flex justify-start">
          <div className="rounded-lg bg-muted px-4 py-2 max-w-[80%]">
            <p className="text-sm">
              Recorded! You used 2 bottles of Grey Goose vodka. Current stock:
              1 bottle remaining. I&apos;ve added it to your pickup list since
              it&apos;s running low.
            </p>
          </div>
        </div>
      </div>

      {/* Example Prompts */}
      <div className="mb-6">
        <p className="text-sm text-muted-foreground mb-3">Try asking:</p>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm">
            What&apos;s low in stock?
          </Button>
          <Button variant="outline" size="sm">
            Record 3 limes used
          </Button>
          <Button variant="outline" size="sm">
            How much tequila do I have?
          </Button>
          <Button variant="outline" size="sm">
            What&apos;s on my pickup list?
          </Button>
        </div>
      </div>

      {/* Microphone Button */}
      <div className="fixed bottom-20 left-0 right-0 flex justify-center">
        <Button
          size="lg"
          className="h-16 w-16 rounded-full shadow-lg"
          onClick={() => setIsListening(!isListening)}
          variant={isListening ? "destructive" : "default"}
        >
          {isListening ? (
            <MicOff className="h-6 w-6" />
          ) : (
            <Mic className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Status Text */}
      <div className="fixed bottom-4 left-0 right-0 flex justify-center">
        <p className="text-sm text-muted-foreground">
          {isListening ? "Listening..." : "Tap to speak"}
        </p>
      </div>
    </div>
  )
}
