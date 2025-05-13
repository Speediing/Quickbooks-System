import type React from "react";
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
    <div
      data-theme="quickbooks"
      data-colorscheme="dark"
      className="min-h-screen bg-[var(--color-page-background-primary)]"
    >
      <SidebarProvider>
        <BrandHeader />
        <BrandSidebar />
        <main className="mt-16 flex w-full justify-center bg-[var(--color-page-background-primary)]">
          <div className="container p-6">{children}</div>
        </main>
        <Toaster />
      </SidebarProvider>
    </div>
  );
}
