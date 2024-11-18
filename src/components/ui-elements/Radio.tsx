'use client';
import { motion } from 'framer-motion';

interface RadioProps {
  id: string;
  ariaLabel: string;
  value: string | number;
  label: string;
  subLabel?: string;
}

const Radio = ({ id, value, ariaLabel, label, subLabel }: RadioProps) => {
  return (
    <motion.div whileTap={{ scale: 0.95 }} className="mb-4 flex items-start">
      <div className="flex h-5 items-center pl-[24px]">
        <input
          id={id}
          aria-describedby={ariaLabel}
          type="radio"
          value={value}
          className="relative -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-form-active checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-form-active checked:after:bg-form-active checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-form-active checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
        />
      </div>
      <div className="ms-2 text-sm">
        <label htmlFor={id} className="font-medium">
          {label}
        </label>
        {subLabel && (
          <p id={id} className="text-xs font-normal">
            {subLabel}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default Radio;
