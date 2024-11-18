import { Eye } from 'lucide-react';

import Card from './Card';

const StatsOverviewCard = () => {
  return (
    <Card background="glass" styles="bg-foreground flex-grow w-40">
      <div className="flex flex-col gap-1 p-4 text-background">
        <span className="glass flex h-8 w-8 items-center justify-center rounded-full bg-background text-center shadow-sm">
          <Eye className="text-sm" />
        </span>
        <span className="flex items-center text-2xl">+ 15%</span>
        <span className="text-sm">Views this month</span>
        <span className="ml-auto text-xs text-success">+ 15</span>
      </div>
    </Card>
  );
};

export default StatsOverviewCard;
