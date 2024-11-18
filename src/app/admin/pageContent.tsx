import { ChartLine, DollarSign, Eye } from 'lucide-react';

import Card from '@/components/shared/Card';
import Chat from '@/components/shared/Chat';

const PageContent = () => {
  return (
    <div className="no-scrollbar flex flex-col gap-4 overflow-y-auto pb-4">
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <Card background="glass" styles="bg-foreground flex-grow w-full">
              <div className="flex flex-col gap-1 p-4 text-background">
                <span className="glass flex h-8 w-8 items-center justify-center rounded-full bg-background text-center text-foreground shadow-sm">
                  <Eye className="text-sm" />
                </span>
                <span className="flex items-center text-2xl">+ 15%</span>
                <span className="text-sm">Views this month</span>
                <span className="ml-auto text-xs text-success">+ 15</span>
              </div>
            </Card>
            <Card background="glass" styles="bg-foreground flex-grow w-full">
              <div className="flex flex-col gap-1 p-4 text-background">
                <span className="glass flex h-8 w-8 items-center justify-center rounded-full bg-background text-center text-foreground shadow-sm">
                  <DollarSign className="text-sm" />
                </span>
                <span className="flex items-center text-2xl">$ 2799</span>
                <span className="text-sm">Net Income</span>
                <span className="ml-auto text-xs text-success">+ $ 350</span>
              </div>
            </Card>
            <Card background="glass" styles="bg-foreground flex-grow w-full">
              <div className="flex flex-col gap-1 p-4 text-background">
                <span className="glass flex h-8 w-8 items-center justify-center rounded-full bg-background text-center text-foreground shadow-sm">
                  <ChartLine className="text-sm" />
                </span>
                <span className="flex items-center text-2xl">$ 350.00</span>
                <span className="text-sm">Share prices</span>
                <span className="ml-auto text-xs text-danger">- 5%</span>
              </div>
            </Card>
          </div>
          <Card styles="p-4 w-full" background="glass">
            <h1 className="gradient-text text-4xl font-bold">Welcome !</h1>
            <br />
            <h2 className="text-2xl font-semibold">
              This ia a work in progress I will be constantly adding elements to
              this poject every week or so!
            </h2>
            <br />
            <h3 className="inline-block rounded-xl bg-background p-4 shadow">
              Be sure to check it out.
            </h3>
          </Card>
        </div>
        <Card background="glass" styles="w-full p-4">
          <div className="flex flex-col gap-4">
            <h3>Inbox</h3>
            <Chat />
            <Chat />
            <Chat />
            <Chat />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PageContent;
