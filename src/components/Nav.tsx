import { ReactNode, FC } from "react";
import styles from "../styles/Nav.module.css";

interface NavigationProps {
  children?: ReactNode;
  className?: string;  // <-- allow optional className
}

const Navigation: FC<NavigationProps> = ({ children, className }) => {
  return (
    <nav className={`${styles.navigation} ${className || ""}`}>
      {children}
    </nav>
  );
};

export default Navigation;
