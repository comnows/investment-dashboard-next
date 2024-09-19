import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type OverviewCardProps = {
  title: string;
  children: React.ReactNode;
};

function OverviewCard({ title, children }: OverviewCardProps) {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between items-end">
        {children}
      </CardContent>
    </Card>
  );
}

export default OverviewCard;
