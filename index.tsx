// 'use client'
// import { motion, useScroll, useTransform } from 'framer-motion'
// import { useRef } from 'react'

// export default function Page() {
//   const containerRef = useRef<HTMLDivElement>(null)
//   const { scrollYProgress } = useScroll()

//   // Transform values for staggered scroll effects
//   const fastY = useTransform(scrollYProgress, [0, 0.5], [0, -100])
//   const easyY = useTransform(scrollYProgress, [0.3, 0.8], [200, 0])

//   return (
//     <div ref={containerRef} className="min-h-screen bg-white">
      
//       <div className="flex items-center justify-between max-w-6xl mx-auto px-8 py-20">
//         <motion.div
//           className="w-1/2 space-y-4"
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           style={{ y: fastY }}
//         >
//           <h2 className="text-6xl font-bold text-black">Fast</h2>
//           <p className="text-xl text-gray-600">
//             You've never made a website this fast before.
//           </p>
//           <motion.button
//             className="px-6 py-2 bg-black text-white rounded-lg"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Read More
//           </motion.button>
//         </motion.div>

//         <motion.div
//           className="w-1/2"
//           initial={{ opacity: 0, x: 200 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           style={{ y: fastY }}
//         >
//           <div className="bg-gray-200 w-full aspect-square rounded-xl" />
//         </motion.div>
//       </div>

//       {/* Second Section - Easy */}
//       <div className="flex items-center justify-between max-w-6xl mx-auto px-8 py-20">
//         <motion.div
//           className="w-1/2"
//           initial={{ opacity: 0, x: -500 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           style={{ y: easyY }}
//         >
//           <div className="bg-gray-200 w-full aspect-square rounded-xl" />
//         </motion.div>

//         <motion.div
//           className="w-1/2 space-y-4 pl-16"
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           style={{ y: easyY }}
//         >
//           <h2 className="text-6xl font-bold text-black">Easy</h2>
//           <p className="text-xl text-gray-600">
//             Works like the canvas tools you're familiar with.
//           </p>
//           <motion.button
//             className="px-6 py-2 bg-black text-white rounded-lg"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Read More
//           </motion.button>
//         </motion.div>
//       </div>

//       {/* Footer */}
//       <div className="fixed bottom-0 left-0 right-0 p-4 flex justify-between items-center bg-white border-t">
//         <div className="flex gap-4">
//           <button className="px-4 py-2 bg-black text-white rounded-lg">Edit in Framer</button>
//           <button className="px-4 py-2 bg-white text-black border border-gray-200 rounded-lg">Login</button>
//           <button className="px-4 py-2 bg-white text-black border border-gray-200 rounded-lg">Sign Up</button>
//         </div>
//         <div>
//           <span className="text-sm text-gray-600">Made in Framer</span>
//         </div>
//       </div>
//     </div>
//   )
// }



'use client'
import { motion } from 'framer-motion'

export default function Page() {
  // Container variants for orchestrating children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Delay between each child animation
        delayChildren: 0.3,   // Initial delay before starting
      }
    }
  }

  // Variants for the individual sections
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div 
      className="min-h-screen bg-white"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* First Section - Fast */}
      <motion.div 
        variants={itemVariants}
        className="flex items-center justify-between max-w-6xl mx-auto px-8 py-20"
      >
        <div className="w-1/2 space-y-4">
          <h2 className="text-6xl font-bold text-black">Fast</h2>
          <p className="text-xl text-gray-600">
            You've never made a website this fast before.
          </p>
          <motion.button
            className="px-6 py-2 bg-black text-white rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Read More
          </motion.button>
        </div>

        <div className="w-1/2">
          <div className="bg-gray-100 w-full aspect-square rounded-xl" />
        </div>
      </motion.div>

      {/* Second Section - Easy */}
      <motion.div 
        variants={itemVariants}
        className="flex items-center justify-between max-w-6xl mx-auto px-8 py-20"
      >
        <div className="w-1/2">
          <div className="bg-gray-100 w-full aspect-square rounded-xl" />
        </div>

        <div className="w-1/2 space-y-4 pl-16">
          <h2 className="text-6xl font-bold text-black">Easy</h2>
          <p className="text-xl text-gray-600">
            Works like the canvas tools you're familiar with.
          </p>
          <motion.button
            className="px-6 py-2 bg-black text-white rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Read More
          </motion.button>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.div 
        variants={itemVariants}
        className="fixed bottom-0 left-0 right-0 p-4 flex justify-between items-center bg-white border-t"
      >
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-black text-white rounded-lg">Edit in Framer</button>
          <button className="px-4 py-2 bg-white text-black border border-gray-200 rounded-lg">Login</button>
          <button className="px-4 py-2 bg-white text-black border border-gray-200 rounded-lg">Sign Up</button>
        </div>
        <div>
          <span className="text-sm text-gray-600">Made in Framer</span>
        </div>
      </motion.div>
    </motion.div>
  )
}
