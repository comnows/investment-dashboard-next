import OverviewCard from "@/components/card/OverviewCard";
import AllocationChart from "@/components/chart/AllocationChart";
import PortfolioChart from "@/components/chart/PortfolioChart";
import DataTable from "@/components/position/DataTable";
import TransactionDataTable from "@/components/transaction/TransactionDataTable";
import TransactionDialog from "@/components/transaction/TransactionDialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StockCard from "@/components/watchlist/StockCard";
import WatchlistDialog from "@/components/watchlist/WatchlistDialog";

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
          <CardContent>
            <DataTable />
          </CardContent>
        </Card>
        <Card className="col-start-1 col-end-8 lg:col-end-9">
          <CardHeader className="flex-row justify-between items-center">
            <CardTitle className="text-[22px]">Transactions</CardTitle>
            <TransactionDialog />
          </CardHeader>
          <CardContent>
            <TransactionDataTable />
          </CardContent>
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
              <WatchlistDialog />
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <StockCard />
              <StockCard />
              <StockCard />
              <StockCard />
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
