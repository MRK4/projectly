import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useUser } from "@/context/UserContext";
import { Briefcase, Users, BarChart, Calendar } from "lucide-react";

export const DashboardHeader = () => {
  const { user, loading } = useUser();

  const stats = [
    { title: "Total Projects", value: "12", icon: Briefcase },
    { title: "Team Members", value: "24", icon: Users },
    { title: "Tasks Completed", value: "128", icon: BarChart },
    { title: "Upcoming Deadlines", value: "6", icon: Calendar },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
