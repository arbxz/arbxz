import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faChartLine, faDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Card from "@/components/shared/Card";
import Chat from "@/components/shared/Chat";

const PageContent = () => {
  return (
    <div className="flex flex-col gap-4 no-scrollbar overflow-y-auto pb-4">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <Card background="glass" styles="bg-foreground flex-grow w-full">
              <div className="flex flex-col gap-1 p-4 text-background">
                <span className="w-8 h-8 flex items-center justify-center text-center bg-background glass text-foreground shadow-sm rounded-full">
                  <FontAwesomeIcon className="text-sm" icon={faEye} />
                </span>
                <span className="flex items-center text-2xl">+ 15%</span>
                <span className="text-sm">Views this month</span>
                <span className="text-xs text-success ml-auto">+ 15</span>
              </div>
            </Card>
            <Card background="glass" styles="bg-foreground flex-grow w-full">
              <div className="flex flex-col gap-1 p-4 text-background">
                <span className="w-8 h-8 flex items-center justify-center text-center bg-background glass text-foreground shadow-sm rounded-full">
                  <FontAwesomeIcon className="text-sm" icon={faDollar} />
                </span>
                <span className="flex items-center text-2xl">$ 2799</span>
                <span className="text-sm">Net Income</span>
                <span className="text-xs text-success ml-auto">+ $ 350</span>
              </div>
            </Card>
            <Card background="glass" styles="bg-foreground flex-grow w-full">
              <div className="flex flex-col gap-1 p-4 text-background">
                <span className="w-8 h-8 flex items-center justify-center text-center bg-background glass text-foreground shadow-sm rounded-full">
                  <FontAwesomeIcon className="text-sm" icon={faChartLine} />
                </span>
                <span className="flex items-center text-2xl">$ 350.00</span>
                <span className="text-sm">Share prices</span>
                <span className="text-xs text-danger ml-auto">- 5%</span>
              </div>
            </Card>
          </div>
          <Card styles="p-4 w-full" background="glass">
            <h1 className="text-4xl font-bold gradient-text">Welcome !</h1>
            <br />
            <h2 className="text-2xl font-semibold">
              This ia a work in progress I will be constantly adding elements to
              this poject every week or so!
            </h2>
            <br />
            <h3 className="inline-block bg-background p-4 shadow rounded-xl">
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
