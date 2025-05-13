"use client";

import {
  Bell,
  HelpCircle,
  Menu,
  Plus,
  Search,
  Settings,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSidebar } from "@/components/ui/sidebar";

import { Logo } from "./logo";

export function BrandHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { state, toggleSidebar } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <header className="fixed z-50 w-full border-b border-border bg-background">
      <div className="flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="hidden size-8 md:flex text-foreground hover:bg-muted"
            onClick={toggleSidebar}
          >
            {isCollapsed ? (
              <Menu className="size-4" />
            ) : (
              <X className="size-4" />
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="size-8 md:hidden text-foreground hover:bg-muted"
            onClick={toggleSidebar}
          >
            <Menu className="size-4" />
          </Button>

          <Link href="/" className="flex items-center">
            <Logo />
          </Link>
        </div>

        <div className="hidden items-center space-x-4 md:flex">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search (Ctrl + /)"
              className="h-9 w-96 pl-9 bg-background border-input text-foreground placeholder:text-muted-foreground"
            />
            <Search className="absolute top-2.5 left-3 size-4 text-muted-foreground" />
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="text-foreground hover:bg-muted"
          >
            <Plus className="mr-2 size-4" />
            New
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="text-foreground hover:bg-muted"
          >
            <Bell className="mr-2 size-4" />
            Notifications
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="text-foreground hover:bg-muted"
          >
            <HelpCircle className="mr-2 size-4" />
            Help
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="text-foreground hover:bg-muted"
          >
            <Settings className="mr-2 size-4" />
            Settings
          </Button>

          <Avatar className="size-8">
            <AvatarFallback className="bg-primary text-primary-foreground">
              <span className="text-xs">ME</span>
            </AvatarFallback>
          </Avatar>
        </div>

        <div className="flex gap-2 md:hidden">
          <Button
            variant="ghost"
            size="sm"
            className="text-foreground hover:bg-muted"
          >
            <Search className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-foreground hover:bg-muted"
          >
            <Bell className="h-5 w-5" />
          </Button>
          <Avatar className="size-8">
            <AvatarFallback className="bg-primary text-primary-foreground">
              <span className="text-xs">ME</span>
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
