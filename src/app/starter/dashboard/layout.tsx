import React from "react";
import { Toaster } from "sonner";

import { BrandHeader } from "@/components/brand-header";
import { BrandSidebar } from "@/components/brand-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

import "@/app/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SidebarProvider>
        <BrandHeader />
        <div className="flex w-full">
          <BrandSidebar />
          <main className="mt-16 flex-1 bg-card text-card-foreground ml-0 md:ml-[16rem] w-full">
            <div className="h-[calc(100vh-4rem)] w-full overflow-auto">
              {children}
            </div>
          </main>
        </div>
        <Toaster />
      </SidebarProvider>
    </div>
  );
}
