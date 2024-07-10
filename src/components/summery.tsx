import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Summery = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-5">
      <Card x-chunk="dashboard-05-chunk-1">
        <CardHeader className="pb-2">
          <CardDescription>Subcom Revenue</CardDescription>
          <CardTitle className="text-4xl">$2,732</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-green-400">+33% from this week</div>
        </CardContent>
      </Card>
      <Card x-chunk="dashboard-05-chunk-1">
        <CardHeader className="pb-2">
          <CardDescription>New Customers</CardDescription>
          <CardTitle className="text-4xl">629</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-red-400">-9.33% from this month</div>
        </CardContent>
      </Card>
      <Card x-chunk="dashboard-05-chunk-1">
        <CardHeader className="pb-2">
          <CardDescription>Repeat Purchase Rete</CardDescription>
          <CardTitle className="text-4xl">29.66%</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-green-400">+8% from this week</div>
        </CardContent>
      </Card>
      <Card x-chunk="dashboard-05-chunk-1">
        <CardHeader className="pb-2">
          <CardDescription>Average Order Value</CardDescription>
          <CardTitle className="text-4xl">$142,914</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-green-400">+32.4% from this week</div>
        </CardContent>
      </Card>
      <Card
        x-chunk="dashboard-05-chunk-2"
        className="md:col-span-2 xl:col-span-1"
      >
        <CardHeader className="pb-2">
          <CardDescription>Conversion Rate</CardDescription>
          <CardTitle className="text-4xl">34.64%</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-red-400">-12.42% from this month</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Summery;
