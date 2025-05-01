import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import { HomePage } from "../pages/HomePage";

export default function Layout() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  return (
    <div className="flex">
      <Sidebar onHoverChange={setSidebarExpanded} />
      <main
        className={`transition-all duration-300 w-full ${
          sidebarExpanded ? "ml-72" : "ml-20"
        }`}
      >
        <HomePage />
      </main>
    </div>
  );
}
