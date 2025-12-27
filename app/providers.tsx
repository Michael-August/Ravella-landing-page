"use client";

import { TooltipProvider } from "@/app/components/ui/tooltip";
import { Toaster } from "@/app/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/app/components/ui/sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider>
      <Toaster />
      <SonnerToaster />
      {children}
    </TooltipProvider>
  );
}
