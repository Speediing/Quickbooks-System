import { ArrowRight, Blocks, ToyBrick } from "lucide-react";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const componentItems = [
  { name: "Accordion", path: "/components/accordion" },
  { name: "Button", path: "/components/button" },
  { name: "Card", path: "/components/card" },
  { name: "Dialog", path: "/components/dialog" },
  { name: "Dropdown Menu", path: "/components/dropdown-menu" },
];

const blockItems = [
  { name: "Headers", path: "/blocks/headers" },
  { name: "Hero Sections", path: "/blocks/hero-sections" },
  { name: "Feature Sections", path: "/blocks/feature-sections" },
  { name: "Pricing Tables", path: "/blocks/pricing-tables" },
  { name: "Contact Forms", path: "/blocks/contact-forms" },
];

export default function Home() {
  return (
    <main className="flex-1 p-6 md:p-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-2">
          <h1 className="font-bold text-3xl tracking-tight md:text-4xl">
            Quickbooks Design System
          </h1>
          <p className="text-muted-foreground">
            A collection of components and blocks for your design system
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader className="space-y-1">
              <div className="flex items-center justify-between">
                <CardTitle>Starter Kit</CardTitle>
                <div className="rounded-md bg-primary p-1">
                  <ToyBrick className="size-5 text-secondary" />
                </div>
              </div>
              <CardDescription>
                Get started with our Quickbooks dashboard
              </CardDescription>
            </CardHeader>

            <CardContent>
              <Link
                href="/starter"
                className="flex items-center justify-between text-sm hover:underline"
              >
                <span>View Starter Kit</span>
                <ArrowRight className="size-4 text-muted-foreground" />
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="space-y-1">
              <div className="flex items-center justify-between">
                <CardTitle>Components</CardTitle>
                <div className="rounded-md bg-primary p-1">
                  <ToyBrick className="size-5 text-secondary" />
                </div>
              </div>
              <CardDescription>
                Reusable UI components for your application
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="space-y-2">
                {componentItems.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between"
                  >
                    <Link href={item.path} className="text-sm hover:underline">
                      {item.name}
                    </Link>
                    <ArrowRight className="size-4 text-muted-foreground" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* <Card>
            <CardHeader className="space-y-1">
              <div className="flex items-center justify-between">
                <CardTitle>Blocks</CardTitle>
                <div className="rounded-md bg-foreground p-1">
                  <Blocks className="size-5 text-secondary" />
                </div>
              </div>
              <CardDescription>
                Pre-built UI blocks for common patterns
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="space-y-2">
                {blockItems.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between"
                  >
                    <Link href={item.path} className="text-sm hover:underline">
                      {item.name}
                    </Link>
                    <ArrowRight className="size-4 text-muted-foreground" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card> */}
        </div>

        <div className="rounded-lg border bg-card p-6">
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-xl">Quickbooks v0 Registry</h2>
            <p className="text-muted-foreground">
              This is Quickbooks' initial set of design templates and
              guidelines. We're opening up our component library and design
              patterns to help teams build consistent, high-quality Quickbooks
              experiences.
            </p>
            <p className="mt-2 text-muted-foreground">
              The v0 release includes our core UI components, templates, and
              design guidelines. These resources are designed to help you
              quickly implement Quickbooks' design language in your
              applications.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
