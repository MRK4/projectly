import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const LoginForm = () => {
  return (
    <Tabs defaultValue="login" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="register">Register</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Login with your username and password.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <div className="gap-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="" placeholder="test" />
            </div>
            <div className="gap-1">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                defaultValue={""}
                placeholder="**********"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Login</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="register">
        <Card>
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>
              Register with your email and password.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <div className="gap-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" defaultValue="" placeholder="test@mail.com" />
            </div>
            <div className="gap-1">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                defaultValue=""
                placeholder="**********"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Create an account</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};
