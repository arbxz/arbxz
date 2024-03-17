import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useTranslations } from "next-intl";

import Card from "../shared/Card";
import Moji from "../svg/Moji";

const ArtSection = () => {
  const t = useTranslations("Art");
  return (
    <div id="art">
      <div className="group flex flex-col justify-center h-64 w-64 text-center bg-arbxz-accent shadow-xl text-white rounded-3xl mx-auto p-4 md:p-8">
        <div className="relative flex justify-center w-40 mx-auto border border-white text-sm text-white rounded-3xl px-4 py-1 mb-4 before:content-[''] before:h-full before:w-full before:absolute group-hover:text-arbxz-accent before:top-0 before:-left-60 group-hover:before:left-0 before:-z-0 overflow-hidden before:duration-700 before:transition-all before:bg-white">
          <span className="relative inline-block z-10">{t("tag")}</span>
        </div>
        <h2 className="font-semibold text-4xl md:text-4xl">{t("title")}</h2>
      </div>
      <div>
        <div>
          <div className="relative">
            <div className="absolute top-20 -left-36 w-full h-full rotate-45">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 800 800">
                <g
                  strokeWidth="10"
                  stroke="hsl(227, 71%, 57%)"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path
                    d="M265.44680976867676 249.7407989501953Q133.44680976867676 562.7407989501953 565.4468097686768 549.7407989501953 "
                    markerEnd="url(#SvgjsMarker1311)"></path>
                </g>
                <defs>
                  <marker
                    markerWidth="5"
                    markerHeight="5"
                    refX="2.5"
                    refY="2.5"
                    viewBox="0 0 5 5"
                    orient="auto"
                    id="SvgjsMarker1311">
                    <polygon
                      points="0,5 1.6666666666666667,2.5 0,0 5,2.5"
                      fill="hsl(227, 71%, 57%)"></polygon>
                  </marker>
                </defs>
              </svg>
            </div>
            <Moji />
          </div>
          <div className="relative flex items-center gap-4">
            <div className="flex text-center p-4 rounded items-center">
              <div className="sm:max-w-[150px]">{t("text")}</div>
            </div>
            <Link
              href="https://www.instagram.com/wulver.bd/?hl=en"
              target="_blank"
              prefetch={false}>
              <Card
                background="bg-form-active"
                styles="flex w-fit justify-between shadow-lg flex-col gap-4 px-4 py-2">
                <div className="flex gap-4 items-center text-white">
                  <FontAwesomeIcon className="text-3xl" icon={faInstagram} />
                  <span>Insta</span>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtSection;
