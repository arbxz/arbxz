'use client';
import React from 'react';
import { useEffect, useRef, useState } from 'react';

import { cva, VariantProps } from 'class-variance-authority';
import { motion, useDragControls, useMotionValue } from 'framer-motion';
import { X } from 'lucide-react';

const alertStyles = cva(
  'flex items-center justify-start py-2 px-4 gap-2 text-white rounded-lg',
  {
    variants: {
      intent: {
        danger: 'bg-danger',
        warning: 'bg-warning',
        info: 'bg-form-active',
        dismiss: 'hidden',
      },
      defaultVariants: {
        intent: 'info',
      },
    },
  }
);

interface AlertProps extends VariantProps<typeof alertStyles> {
  text: string;
  Icon?: React.ReactNode;
}

const Alert = ({ intent, text, Icon }: AlertProps) => {
  const x = useMotionValue(0);
  const [isVisible, setIsVisible] = useState(true);
  const ref = useRef(null);
  const controls = useDragControls();

  useEffect(() => {
    x.onChange(() => {
      if (x.get() > 200 || x.get() < -200) {
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
        isVisible ? alertStyles({ intent }) : alertStyles({ intent: 'dismiss' })
      }
      ref={ref}
    >
      {Icon && Icon}
      <span className="mt-1">{text}</span>
      <button className="ml-auto flex h-6 w-6 items-center justify-center rounded-full border-2 bg-transparent text-white transition-colors duration-300">
        <X />
      </button>
    </motion.div>
  );
};

export default Alert;
