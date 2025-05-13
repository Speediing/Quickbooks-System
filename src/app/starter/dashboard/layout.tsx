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
    <div className="min-h-screen bg-background">
      <SidebarProvider>
        <BrandHeader />
        <div className="flex">
          <BrandSidebar />
          <main className="mt-16 flex-1 bg-background ml-0 md:ml-[16rem]">
            <div className="container p-6">{children}</div>
          </main>
        </div>
        <Toaster />
      </SidebarProvider>
    </div>
  );
}
