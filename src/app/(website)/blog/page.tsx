// "use client";

import BlogPage from './PageContent';

// import { motion, useScroll, useTransform } from "framer-motion";

// import BlogPage from "./PageContent";

// const Page = () => {
//   const { scrollYProgress } = useScroll();
//   const y = useTransform(scrollYProgress, (latest) => latest * -600);

//   return (
//     <>
//       <motion.div
//         className="background-grid"
//         style={{
//           position: "absolute",
//           left: 0,
//           top: y,
//           width: "100%",
//           height: "100%",
//           zIndex: 0,
//         }}
//       />
//       <BlogPage />
//     </>
//   );
// };

// export default Page;

const Page = () => {
  return <BlogPage />;
};

export default Page;
