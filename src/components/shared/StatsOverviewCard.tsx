import { Eye } from "lucide-react";

import Card from "./Card";

const StatsOverviewCard = () => {
  return (
    <Card background="glass" styles="bg-foreground flex-grow w-40">
      <div className="flex flex-col gap-1 p-4 text-background">
        <span className="w-8 h-8 flex items-center justify-center text-center bg-background glass shadow-sm rounded-full">
          <Eye className="text-sm" />
        </span>
        <span className="flex items-center text-2xl">+ 15%</span>
        <span className="text-sm">Views this month</span>
        <span className="text-xs text-success ml-auto">+ 15</span>
      </div>
    </Card>
  );
};

export default StatsOverviewCard;
