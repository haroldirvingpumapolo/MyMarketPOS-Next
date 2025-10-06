import {
  ChartNoAxesCombined,
  Receipt,
  Barcode,
  Settings,
  Bug,
  MonitorDown,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

// Menu items.
const items = [
  {
    title: "Cash Register",
    url: "cash-register",
    icon: MonitorDown,
  },
  {
    title: "Products",
    url: "products",
    icon: Barcode,
  },
  {
    title: "Receipts",
    url: "receipts",
    icon: Receipt,
  },
  {
    title: "Analytics",
    url: "analytics",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Reports",
    url: "reports",
    icon: Bug,
  },
  {
    title: "Settings",
    url: "settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg h-14 justify-end">
            Application
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild size={"lg"}>
                    <Link href={item.url}>
                      <item.icon className="w-5! h-5!"/>
                      <span className="text-base">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
