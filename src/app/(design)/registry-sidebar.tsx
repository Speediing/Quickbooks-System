"use client";

import {
  Blocks,
  ChevronDown,
  Home,
  Menu,
  Search,
  ToyBrick,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { RegistryLogo } from "@/app/(design)/registry-logo";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

export const componentItems = [
  { name: "Accordion", path: "/components/accordion" },
  { name: "Alert", path: "/components/alert" },
  { name: "Avatar", path: "/components/avatar" },
  { name: "Badge", path: "/components/badge" },
  { name: "Breadcrumb", path: "/components/breadcrumb" },
  { name: "Button", path: "/components/button" },
  { name: "Calendar", path: "/components/calendar" },
  { name: "Card", path: "/components/card" },
  { name: "Chart", path: "/components/chart" },
  { name: "Checkbox", path: "/components/checkbox" },
  { name: "Date Picker", path: "/components/date-picker" },
  { name: "Data Table", path: "/components/data-table" },
  { name: "Dialog", path: "/components/dialog" },
  { name: "Dropdown Menu", path: "/components/dropdown-menu" },
  { name: "Input", path: "/components/input" },
  { name: "Menu Bar", path: "/components/menu-bar" },
  { name: "Select", path: "/components/select" },
  { name: "Separator", path: "/components/separator" },
  { name: "Skeleton", path: "/components/skeleton" },
  { name: "Slider", path: "/components/slider" },
  { name: "Switch", path: "/components/switch" },
  { name: "Table", path: "/components/table" },
  { name: "Tabs", path: "/components/tabs" },
  { name: "Toggle Group", path: "/components/toggle-group" },
  { name: "Tooltip", path: "/components/tooltip" },
];

export const blockItems = [
  { name: "Hero", path: "/blocks/hero" },
  { name: "Login", path: "/blocks/login" },
  { name: "Promo", path: "/blocks/promo" },
];

export const gettingStartedItems = [
  { name: "Home", path: "/" },
  { name: "Design Tokens", path: "/tokens" },
  { name: "Starter Kit", path: "/starter" },
];

export function RegistrySidebar() {
  const pathname = usePathname();

  const { setOpenMobile } = useSidebar();

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredComponents, setFilteredComponents] = useState(componentItems);
  const [filteredBlocks, setFilteredBlocks] = useState(blockItems);

  useEffect(() => {
    if (searchTerm) {
      setFilteredComponents(
        componentItems.filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      setFilteredBlocks(
        blockItems.filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredComponents(componentItems);
      setFilteredBlocks(blockItems);
    }
  }, [searchTerm]);

  return (
    <>
      {/* MOBILE MENU TRIGGER */}
      <div className="fixed top-4 left-4 z-50 flex items-center justify-start rounded-md p-4 md:hidden">
        <Button aria-label="Open menu" onClick={() => setOpenMobile(true)}>
          <Menu className="size-5" />
        </Button>
      </div>

      {/* SIDEBAR */}
      <Sidebar
        collapsible="icon"
        className="relative h-screen bg-muted text-muted-foreground border-r border-accent shadow-xl"
      >
        <SidebarHeader className="border-b border-accent bg-muted/80 backdrop-blur">
          <div className="flex items-center justify-between px-4 py-3">
            <Link href="/" className="flex min-w-0 items-center gap-2">
              <RegistryLogo />
            </Link>

            <Button
              variant="ghost"
              className="md:hidden text-muted-foreground hover:bg-accent/20"
              onClick={() => setOpenMobile(false)}
            >
              <X />
            </Button>
          </div>
          <div className="px-4 py-2">
            <div className="relative">
              <Search className="absolute top-2.5 left-3 size-4 text-accent" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-9 bg-background/80 text-primary border border-accent rounded-md focus:ring-accent placeholder:text-muted-foreground"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <Collapsible defaultOpen={true} className="group/collapsible">
            <SidebarGroup>
              <CollapsibleTrigger className="w-full">
                <SidebarGroupLabel className="flex cursor-pointer items-center justify-between px-4 py-2 text-xs font-bold text-accent tracking-wider uppercase">
                  <div className="flex min-w-0 items-center">
                    <Home className="size-4 flex-shrink-0 text-accent" />
                    <span className="ml-2">Getting Started</span>
                  </div>
                  <ChevronDown className="size-4 flex-shrink-0 group-data-[state=open]/collapsible:rotate-180 text-accent" />
                </SidebarGroupLabel>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {gettingStartedItems.map((item) => (
                      <SidebarMenuItem key={item.path}>
                        <SidebarMenuButton
                          asChild
                          isActive={pathname === item.path}
                          className="rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/10 hover:text-accent-foreground data-[active=true]:bg-accent data-[active=true]:text-accent-foreground"
                        >
                          <Link href={item.path} className="flex items-center">
                            <span className="ml-2">{item.name}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>

          <Collapsible defaultOpen={true} className="group/collapsible">
            <SidebarGroup>
              <CollapsibleTrigger className="w-full">
                <SidebarGroupLabel className="flex cursor-pointer items-center justify-between px-4 py-2 text-xs font-bold text-accent tracking-wider uppercase">
                  <div className="flex min-w-0 items-center">
                    <Blocks className="size-4 flex-shrink-0 text-accent" />
                    <span className="ml-2">Blocks</span>
                  </div>
                  <ChevronDown className="size-4 flex-shrink-0 group-data-[state=open]/collapsible:rotate-180 text-accent" />
                </SidebarGroupLabel>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {filteredBlocks.map((item) => (
                      <SidebarMenuItem key={item.path}>
                        <SidebarMenuButton
                          asChild
                          isActive={pathname === item.path}
                          className="rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/10 hover:text-accent-foreground data-[active=true]:bg-accent data-[active=true]:text-accent-foreground"
                        >
                          <Link href={item.path}>{item.name}</Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>

          <Collapsible defaultOpen={true} className="group/collapsible">
            <SidebarGroup>
              <CollapsibleTrigger className="w-full">
                <SidebarGroupLabel className="flex cursor-pointer items-center justify-between px-4 py-2 text-xs font-bold text-accent tracking-wider uppercase">
                  <div className="flex min-w-0 items-center">
                    <ToyBrick className="size-4 flex-shrink-0 text-accent" />
                    <span className="ml-2">Components</span>
                  </div>
                  <ChevronDown className="size-4 flex-shrink-0 group-data-[state=open]/collapsible:rotate-180 text-accent" />
                </SidebarGroupLabel>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {filteredComponents.map((item) => (
                      <SidebarMenuItem key={item.path}>
                        <SidebarMenuButton
                          asChild
                          isActive={pathname === item.path}
                          className="rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/10 hover:text-accent-foreground data-[active=true]:bg-accent data-[active=true]:text-accent-foreground"
                        >
                          <Link href={item.path}>{item.name}</Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        </SidebarContent>
      </Sidebar>
    </>
  );
}
