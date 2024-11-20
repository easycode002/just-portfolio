import { motion, AnimatePresence } from "framer-motion";
import React from "react";
interface IProps {
  open?: boolean;
}
const ResponsiveNavbar: React.FC<IProps> = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex top-0 left-0 w-full h-full bg-black z-10"
        >
          <div className="bg-orange-300">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Service</li>
              <li>Contatct</li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveNavbar;
