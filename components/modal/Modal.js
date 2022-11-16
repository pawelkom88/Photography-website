import Backdrop from "./Backdrop";
import Portal from "./Portal";
import CloseBtn from "@components/close-button/CloseBtn";
import FocusLock from "react-focus-lock";
import { motion } from "framer-motion";
import styles from "./modal.module.css";

export default function Modal({ children, setToggleModal }) {
  return (
    <Portal>
      <Backdrop setToggleModal={setToggleModal}>
        <FocusLock>
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.container}
            onClick={e => {
              // do not close modal if anything inside modal content is clicked
              e.stopPropagation();
            }}>
            <CloseBtn onClick={() => setToggleModal(false)} />
            {children}
          </motion.div>
        </FocusLock>
      </Backdrop>
    </Portal>
    // </>
  );
}
