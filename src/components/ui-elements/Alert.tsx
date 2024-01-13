"use client";

import { useEffect, useRef, useState } from "react";

import { faClose, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cva, VariantProps } from "class-variance-authority";
import {
  motion,
  useDragControls,
  useInView,
  useMotionValue,
} from "framer-motion";

const alertStyles = cva(
  "flex items-center justify-start py-2 px-4 gap-2 text-white rounded-lg",
  {
    variants: {
      intent: {
        danger: "bg-danger",
        warning: "bg-warning",
        info: "bg-form-active",
        dismiss: "hidden",
      },
      defaultVariants: {
        intent: "info",
      },
    },
  }
);

interface AlertProps extends VariantProps<typeof alertStyles> {
  text: string;
  icon?: IconDefinition;
  // action: () => void;
}

const Alert = ({
  intent,
  text,
  icon,
}: // action,
AlertProps) => {
  const x = useMotionValue(0);
  const [isVisible, setIsVisible] = useState(true);
  const ref = useRef(null);
  const controls = useDragControls();

  useEffect(() => {
    x.onChange(() => {
      console.log("x.get", x.get);
      if (x.get() > 100 || x.get() < -100) {
        console.log("im in");
        setIsVisible(false);
      }
    });
  }, [x]);

  return (
    <motion.div
      drag="x"
      style={{ x }}
      dragControls={controls}
      dragConstraints={{ left: 0, right: 0 }}
      className={
        isVisible ? alertStyles({ intent }) : alertStyles({ intent: "dismiss" })
      }
      ref={ref}>
      {icon && <FontAwesomeIcon icon={icon} />}
      <span className="mt-1">{text}</span>
      <button className="rounded-full ml-auto h-6 w-6 flex items-center justify-center border-2 bg-transparent text-white duration-300 transition-colors">
        <FontAwesomeIcon icon={faClose} />
      </button>
    </motion.div>
  );
};

export default Alert;
