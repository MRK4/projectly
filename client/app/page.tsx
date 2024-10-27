import { ThemeToggler } from "@/components/ThemeToggler";
import { LoginForm } from "@/components/LoginForm";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col w-full items-center justify-center gap-4">
      <ThemeToggler />
      <h1 className="text-4xl font-bold text-center">
        Welcome to your Next.js app
      </h1>
      <LoginForm />
    </main>
  );
}
