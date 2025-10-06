import type { Metadata } from "next";
import "./globals.css";
import {
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export const metadata: Metadata = {
  title: "MyMarketPOS",
  description: "MyMarketPOS from Next",
  icons: {
    icon: "/file.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <SidebarTrigger className="fixed top-6 left-3 z-50 rounded-full" />
          <AppSidebar />
          <main className="p-3">{children}</main>
        </SidebarProvider>
      </body>
    </html>
  );
}
