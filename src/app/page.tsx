import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";
import Summery from "@/components/summery";
import DataChart from "@/components/data-chart";
import RecentOrders from "@/components/recent-orders";
import RecentSales from "@/components/recent-sales";
import Users from "@/components/users";
import Notifications from "@/components/notifications";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-gray-100/10 dark:bg-zinc-900">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Navbar />
        <div className="p-4 sm:px-6">
          <Summery />
        </div>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            <DataChart />
            <RecentOrders />
          </div>
          <div>
            <RecentSales />
            <div className="mt-8">
              <Users />
            </div>
            <Notifications />
          </div>
        </main>
      </div>
    </div>
  );
};
export default Dashboard;
