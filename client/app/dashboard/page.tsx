"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Sidebar";
import { useUser } from "@/context/UserContext";
import { DashboardHeader } from "./(components)/DashboardHeader";

export default function DashboardPage() {
  const { user, loading } = useUser();

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="p-2 min-h-screen flex flex-col w-full items-center justify-center gap-4">
        {loading ? (
          <div className="h-full w-full flex items-center justify-center">
            <p className="text-4xl font-bold text-center">Chargement...</p>
          </div>
        ) : (
          <section className="h-full flex flex-col w-full gap-4">
            <div className="flex flex-col h-fit w-fit gap-2">
              <h2>
                Bonjour <span className="text-primary">{user?.username}</span>
              </h2>
              <p>
                This is your dashboard. <br /> Here you can see all your teams
                and projects.
              </p>
            </div>
            <DashboardHeader />
          </section>
        )}
      </main>
    </SidebarProvider>
  );
}
