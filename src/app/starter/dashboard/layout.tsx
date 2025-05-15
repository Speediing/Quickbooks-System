import type React from "react";
import type { Metadata } from "next";
import ClientRootLayout from "@/components/clientLayout";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "QuickBooks Theme",
  description: "QuickBooks theme with shadcn/ui",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientRootLayout children={children} />;
}
