import type { FC } from "react";
import { Button } from "../components/ui/button";
// This file defines the Sidebar component for a school admin dashboard.
// It includes navigation tabs for different sections of the admin panel.
// The Sidebar component accepts an array of tab names, the currently active tab,
// and a function to set the active tab. It uses the Button component for navigation.
// The sidebar is styled with Tailwind CSS classes for layout and appearance.
// src/components/sidebar.tsx
interface SidebarProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Sidebar: FC<SidebarProps> = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <aside className="w-64 bg-white border-r min-h-screen p-4 shadow-sm">
      <h2 className="text-xl font-semibold mb-6">School Admin</h2>
      <nav className="flex flex-col gap-2">
        {tabs.map((tab) => (
          <Button
            key={tab}
            variant={activeTab === tab ? "default" : "outline"}
            onClick={() => setActiveTab(tab)}
            className="justify-start"
          >
            {tab}
          </Button>
        ))}
      </nav>
    </aside>
  );
};
