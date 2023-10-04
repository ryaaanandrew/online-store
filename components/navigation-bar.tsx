"use client";

import React from "react";
import { Button } from "./ui/button";
import { useSidebar } from "@/hooks/use-sidebar";

const NavigationBar = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  return (
    <nav
      className={
        "border-2 border-slate-200 flex justify-between items-center p-4"
      }
    >
      <ul className="flex [&>li]:pr-2">
        <li>collections</li>
        <li>mens</li>
        <li>womens</li>
        <li>sale</li>
      </ul>

      <div>
        <h1>Logo</h1>
      </div>

      <ul className="flex [&>li]:pl-2">
        <li>locations</li>
        <li>account</li>
        <li>
          <Button onClick={() => toggleSidebar(!isSidebarOpen)}>Cart</Button>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
