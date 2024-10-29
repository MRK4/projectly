"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Sidebar";
import { useUser } from "@/context/UserContext";

export default function DashboardPage() {
  const { user, loading } = useUser();

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="min-h-screen flex flex-col w-full items-center justify-center gap-4">
        {loading ? (
          <p className="text-4xl font-bold text-center">Chargement...</p>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Tableau de bord</CardTitle>
            </CardHeader>
            <CardContent>
              {user ? (
                <>
                  <p>Bienvenue, {user.username} !</p>
                  <p>Email: {user.email}</p>
                  <p>
                    Créé le: {new Date(user.createdAt).toLocaleDateString()}
                  </p>
                </>
              ) : (
                <p>Utilisateur non trouvé</p>
              )}
            </CardContent>
          </Card>
        )}
      </main>
    </SidebarProvider>
  );
}
