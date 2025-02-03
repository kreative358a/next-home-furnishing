"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const themeList = ["system"];

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  // console.log('theme: ', theme);
  React.useEffect(() => {
    themeList[0] = theme || "system";
  }, [theme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="bg-muted/80">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="text-base 2xl:text:lg bg-muted/80"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="border-2 border-foreground/20 hover:border-foreground/40 m-0.5 rounded-sm hover:bg-muted/80"
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="border-2 border-foreground/20 hover:border-foreground/40 m-0.5 rounded-sm hover:bg-muted/80"
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="border-2 border-foreground/20 hover:border-foreground/40 m-0.5 rounded-sm hover:bg-muted/80"
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
