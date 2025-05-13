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
      <div className="relative flex min-h-screen grow flex-col md:flex-row">
        <RegistrySidebar />

        <SidebarInset>
          <div className="flex flex-col">{children}</div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
