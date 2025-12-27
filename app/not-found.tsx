"use client";

import { Button } from "@/app/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route");
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-6">
        <h1 className="text-6xl md:text-8xl font-serif text-foreground mb-6">404</h1>
        <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto">
          We couldn't find the page you're looking for.
        </p>
        <Button variant="brown" size="lg" asChild>
          <a href="/" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Return Home
          </a>
        </Button>
      </div>
    </div>
  );
}
