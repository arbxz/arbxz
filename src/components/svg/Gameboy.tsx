interface SVGProps {
  children?: Element;
  color?: string;
  colorShade?: string;
}

const GameboySVG = ({ colorShade, color }: SVGProps) => {
  return (
    <svg
      className="flex mx-auto w-full"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      height={"100%"}
      width={"auto"}
      viewBox="0 0 342 600"
      enableBackground="new 0 0 342 600"
      xmlSpace="preserve">
      <style type="text/css">{`
       	.st0{fill:${color ? color : "#FFFFFF"};
        stroke:#000000;strokeWidth:1.7096;stroke-miterlimit:10;}
           .st1{fill:${color ? color : "#FFFFFF"};}
           .st3{fill:#FFFFFF;}
           .st4{fill:${colorShade ? colorShade : "#FFFFFF"};}
           .st2{fill:none;stroke:#000000;strokeWidth:0.8548;stroke-miterlimit:10;}
      `}</style>
      <path
        id="Top_frame"
        className="st0"
        d="M324.9,291H17.6c-9.5,0-17.3-7.7-17.3-17.3V35.5C0.4,16.5,15.8,1,34.9,1h272.7
	c19.1,0,34.5,15.5,34.5,34.5v238.2C342.1,283.3,334.4,291,324.9,291z"
      />
      <path
        id="Bottom_frame"
        className="st0"
        d="M307.1,599H34.3c-19.1,0-34.5-15.5-34.5-34.5V326.3c0-9.5,7.7-17.3,17.3-17.3h307.3
	c9.5,0,17.3,7.7,17.3,17.3v238.2C341.6,583.5,326.2,599,307.1,599z"
      />
      <path
        id="Screen"
        className="st0"
        d="M302.4,263.4H40.1c-7.6,0-13.8-6.2-13.8-13.8V39c0-7.6,6.2-13.8,13.8-13.8h262.4
	c7.6,0,13.8,6.2,13.8,13.8v210.6C316.3,257.2,310.1,263.4,302.4,263.4z"
      />
      <path
        id="Joint"
        className="st0 st4"
        d="M322.5,306.5H18.3c-4,0-3.2-2.2-3.2-6s-0.8-7.8,3.2-7.8h304.2c4,0,3.2,4,3.2,7.8
	S326.5,306.5,322.5,306.5z"
      />
      <circle id="Dpad_wrap" className="st4" cx="91.4" cy="426.1" r="65.2" />
      <path
        id="Wrap"
        className="st4"
        d="M278.6,360.7l-69.4,16c-16.7,3.9-27.1,20.5-23.3,37.3l0,0.1c3.9,16.7,20.5,27.1,37.3,23.3l69.4-16
	c16.7-3.9,27.1-20.5,23.3-37.3l0-0.1C312,367.3,295.3,356.9,278.6,360.7z"
      />
      <circle id="b" className="st0" cx="216.8" cy="408" r="21.6" />
      <circle id="A" className="st0" cx="284.5" cy="392.2" r="21.6" />
      <path
        id="Dpad"
        className="st0"
        d="M108.4,412.5c-1.9,0-3.5-1.5-3.5-3.5v-1.2v-25.8c0-1.9-1.5-3.5-3.5-3.5H81.3c-1.9,0-3.5,1.5-3.5,3.5
	v27c0,1.9-1.5,3.5-3.5,3.5h-27c-1.9,0-3.5,1.5-3.5,3.5v20.2c0,1.9,1.5,3.5,3.5,3.5h27c1.9,0,3.5,1.5,3.5,3.5v27
	c0,1.9,1.5,3.5,3.5,3.5h20.2c1.9,0,3.5-1.5,3.5-3.5v-27c0-1.9,1.5-3.5,3.5-3.5h27c1.9,0,3.5-1.5,3.5-3.5V416c0-1.9-1.5-3.5-3.5-3.5
	H109H108.4z"
      />
      <path
        id="Screen_1_"
        className="st3"
        d="M295.1,244.4H47.4c-6.9,0-12.5-5.6-12.5-12.5V49.7c0-6.9,5.6-12.5,12.5-12.5h247.8
	c6.9,0,12.5,5.6,12.5,12.5v182.2C307.6,238.8,302,244.4,295.1,244.4z"
      />
      <circle id="Power" className="st4" cx="173" cy="346.2" r="8.6" />
      <circle id="Select" className="st4" cx="155.7" cy="555.1" r="8.6" />
      <circle id="Start" className="st4" cx="190.2" cy="555.1" r="8.6" />
      <path
        id="Joint_2"
        className="st0"
        d="M178.2,308.3H57.3c-1.9,0-3.5-1.5-3.5-3.5v-10.4c0-1.9,1.5-3.5,3.5-3.5h120.8
	c1.9,0,3.5,1.5,3.5,3.5v10.4C181.6,306.7,180.1,308.3,178.2,308.3z"
      />
      <path
        id="Joint_1"
        className="st0"
        d="M297.9,307.4h-25.4c-1.6,0-2.8-1.3-2.8-2.8v-9.9c0-1.6,1.3-2.8,2.8-2.8h25.4
	c1.6,0,2.8,1.3,2.8,2.8v9.9C300.7,306.1,299.4,307.4,297.9,307.4z"
      />
      <g>
        <path
          className="st1"
          d="M203.2,526.1c0,6-4.9,10.9-10.9,10.9h-37c-6,0-10.9-4.9-10.9-10.9v-37c0-6,4.9-10.9,10.9-10.9h37
		c6,0,10.9,4.9,10.9,10.9V526.1z"
        />
        <path
          className="st2"
          d="M203.2,526.1c0,6-4.9,10.9-10.9,10.9h-37c-6,0-10.9-4.9-10.9-10.9v-37c0-6,4.9-10.9,10.9-10.9h37
		c6,0,10.9,4.9,10.9,10.9V526.1z"
        />
      </g>
    </svg>
  );
};

export default GameboySVG;
