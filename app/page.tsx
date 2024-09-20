import OverviewCard from "@/components/card/OverviewCard";
import AllocationChart from "@/components/chart/AllocationChart";
import PortfolioChart from "@/components/chart/PortfolioChart";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="mt-6 px-20">
      <div className="grid grid-cols-12 gap-x-4 gap-y-6">
        <OverviewCard title="Total investment">
          <p className="text-2xl font-bold">$123,456.12</p>
        </OverviewCard>
        <OverviewCard title="Total profits">
          <p className="text-2xl font-bold">$1,234.12</p>
          <p className="text-xs text-green-500">+12.34%</p>
        </OverviewCard>
        <OverviewCard title="# of Holdings">
          <p className="text-2xl font-bold">12</p>
        </OverviewCard>
        <OverviewCard title="Current Yields">
          <p className="text-2xl font-bold">$1.23</p>
          <p className="text-xs text-green-500">1.23%</p>
        </OverviewCard>

        <Card className="col-start-1 col-end-8 lg:col-end-9">
          <CardHeader>
            <CardTitle className="text-[22px]">Portfolio</CardTitle>
          </CardHeader>
          <CardContent>
            <PortfolioChart />
          </CardContent>
        </Card>
        <Card className="col-start-1 col-end-8 lg:col-end-9">
          <CardHeader>
            <CardTitle className="text-[22px]">Positions</CardTitle>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
        <Card className="col-start-1 col-end-8 lg:col-end-9">
          <CardHeader className="flex-row justify-between items-center">
            <CardTitle className="text-[22px]">Transactions</CardTitle>
            <Button size={"sm"} className="!m-0">
              + Transaction
            </Button>
          </CardHeader>
          <CardContent></CardContent>
        </Card>

        <div className="row-start-2 row-end-10 col-start-8 col-end-13 lg:col-start-9 lg:col-end-13">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-[22px]">Allocation</CardTitle>
            </CardHeader>
            <CardContent>
              <AllocationChart />
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader className="flex-row justify-between items-center">
              <CardTitle className="text-[22px]">Watchlist</CardTitle>
              <Button size={"sm"} className="!m-0">
                + Watchlist
              </Button>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
