import { useRef } from 'react';

import { motion } from 'framer-motion';

import { useAppContext } from '@/context/appContext';
import { useDimensions } from '@/hooks/useDimensions';

import { AsideNavigation } from '../navigation/AsideNavigation';
import { sidebar } from '../shared/Animations';

const Aside = () => {
  const { isAsideOpen } = useAppContext();
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={true}
      animate={isAsideOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <motion.aside
        className={` ${
          isAsideOpen
            ? 'w-full lg:w-72 lg:translate-x-0 lg:pr-4'
            : 'lg:w-0 lg:-translate-x-80'
        } no-scrollbar fixed left-0 top-0 z-50 h-screen w-full origin-top-left overflow-hidden overflow-y-auto bg-background-secondary p-4 pt-20 transition-all duration-300 lg:relative lg:h-full lg:bg-transparent lg:p-0 lg:pt-24`}
        variants={sidebar}
      >
        <AsideNavigation />
      </motion.aside>
    </motion.nav>
  );
};

export default Aside;
