"use client";

import {
  AlertTriangle,
  BarChart2,
  Clock,
  Database,
  Home,
  LayoutGrid,
  MessageSquareText,
  MoreHorizontal,
  Plus,
  Table,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

interface NavItem {
  title: string;
  href: string;
  icon: React.ReactNode;
  badge?: {
    text: string;
  };
}

interface SidebarProps {
  collapsed?: boolean;
  onToggle?: () => void;
  className?: string;
}

export function BrandSidebar({
  collapsed = false,
  onToggle,
  className,
}: SidebarProps) {
  const pathname = usePathname();
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  const mainNavItems: NavItem[] = [
    {
      title: "Dashboard",
      href: "#",
      icon: <Home className="size-4" />,
    },
    {
      title: "Sales",
      href: "#sales",
      icon: <BarChart2 className="size-4" />,
    },
    {
      title: "Expenses",
      href: "#expenses",
      icon: <Database className="size-4" />,
    },
    {
      title: "Banking",
      href: "#banking",
      icon: <Table className="size-4" />,
    },
    {
      title: "Reports",
      href: "#reports",
      icon: <MessageSquareText className="size-4" />,
    },
  ];

  const toolsNavItems: NavItem[] = [
    {
      title: "Taxes",
      href: "#taxes",
      icon: <AlertTriangle className="size-4" />,
    },
    {
      title: "Payroll",
      href: "#payroll",
      icon: <BarChart2 className="size-4" />,
    },
    {
      title: "Accounting",
      href: "#accounting",
      icon: <Clock className="size-4" />,
    },
    {
      title: "Settings",
      href: "#settings",
      icon: <MoreHorizontal className="size-4" />,
    },
  ];

  return (
    <Sidebar className="mt-16 bg-muted border-r border-border">
      <SidebarHeader>
        <div className={cn(isCollapsed ? "py-2" : "p-2")}>
          <Button
            className={cn(
              isCollapsed ? "h-8 w-8 p-0" : "w-full",
              "bg-primary text-primary-foreground hover:bg-primary/90"
            )}
          >
            <Plus className={cn("size-4", !isCollapsed && "mr-1")} />
            {!isCollapsed && <span>Create</span>}
          </Button>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                    tooltip={item.title}
                    className="text-foreground hover:bg-muted data-[active=true]:bg-muted/80 data-[active=true]:text-foreground"
                  >
                    <Link href={item.href}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  {item.badge && (
                    <SidebarMenuBadge
                      className={cn(
                        "border border-border bg-muted text-foreground"
                      )}
                    >
                      {item.badge.text}
                    </SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator className="border-border/50" />

        {/* Tools Nav Items */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {toolsNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                    tooltip={item.title}
                    className="text-foreground hover:bg-muted data-[active=true]:bg-muted/80 data-[active=true]:text-foreground"
                  >
                    <Link href={item.href}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  {item.badge && (
                    <SidebarMenuBadge
                      className={cn(
                        "border border-border bg-muted text-foreground"
                      )}
                    >
                      {item.badge.text}
                    </SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
