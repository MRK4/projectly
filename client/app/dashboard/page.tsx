"use client";

import { useState, useEffect } from "react";
import axiosInstance from "../../lib/axiosInstance";
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
import { User } from "@/types/user";

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null); // Type `User` ou `null` si pas encore chargé

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get<User>("/users/me");
        setUser(response.data); // Type de `response.data` est automatiquement inféré comme `User`
      } catch (error) {
        console.error(
          "Erreur lors de la récupération de l'utilisateur:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

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
                "Utilisateur non trouvé"
              )}
            </CardContent>
          </Card>
        )}
      </main>
    </SidebarProvider>
  );
}
