import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useTheme } from "next-themes";

import Card from "../shared/Card";
import MojiDark from "../svg/MojiDark";
import MojiLight from "../svg/MojiLight";
import Button from "../ui-elements/Button";

const ArtSection = () => {
  const { resolvedTheme } = useTheme();
  return (
    <div id="art">
      <div className="group flex flex-col justify-center h-64 w-64 text-center bg-accent shadow-xl text-white rounded-3xl mx-auto p-4 md:p-8">
        <div className="relative flex justify-center w-40 mx-auto border border-white text-sm text-white rounded-3xl px-4 py-1 mb-4 before:content-[''] before:h-full before:w-full before:absolute group-hover:text-accent before:top-0 before:-left-60 group-hover:before:left-0 before:-z-0 overflow-hidden before:duration-700 before:transition-all before:bg-white">
          <span className="relative inline-block z-10">creative</span>
        </div>
        <h2 className="font-semibold text-4xl md:text-6xl">artwork.</h2>
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
            {resolvedTheme === "dark" ? <MojiDark /> : <MojiLight />}
          </div>
          <div className="relative flex gap-4">
            <div className="flex text-center p-4 rounded-3xl items-center">
              <div>
                I am also a <span className="text-accent">digital artist</span>
                <br /> with experience in
                <br /> comic and anime style art.
              </div>
            </div>
            <Card
              background="bg-form-active"
              styles="flex w-1/2 md:w-40 justify-between shadow-lg flex-col gap-4 p-4">
              <div className="flex gap-4 items-center text-white">
                <FontAwesomeIcon className="text-3xl" icon={faInstagram} />
                <span>Insta</span>
              </div>
              <Link
                href="https://www.instagram.com/wulver.bd/?hl=en"
                target="_blank"
                prefetch={false}>
                <Button intent="secondary" text="here!" />
              </Link>
            </Card>
          </div>
        </div>
        {/* <div>
          <motion.div
            className="cursor-grab"
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50,
            }}
            dragControls={controls}>
            <div className="w-20 h-20 bg-danger">
              <Image
                src={"/images/art/sketch.webp"}
                width={500}
                height={500}
                alt="illustraton of my artwork"
                className="select-none"
              />
            </div>
          </motion.div>
        </div> */}
      </div>
    </div>
  );
};

export default ArtSection;
