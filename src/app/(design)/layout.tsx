import type { Metadata } from "next";
import type { ReactNode } from "react";

import { RegistrySidebar } from "@/app/(design)/registry-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export const metadata: Metadata = {
  title: "Quickbooks Design System",
  description:
    "Starter to help build a Quickbooks Design System using Tailwind v4",
  icons: [{ rel: "icon", url: "/favicon.svg", type: "image/svg+xml" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen min-w-full">
        <div className="hidden md:block">
          <RegistrySidebar />
        </div>
        <SidebarInset className="flex-1">{children}</SidebarInset>
      </div>
    </SidebarProvider>
  );
}
