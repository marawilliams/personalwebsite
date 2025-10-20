import { FunctionComponent } from "react";
import styles from "../styles/NavButton.module.css";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  iconSrc?: string;
}

const Button: FunctionComponent<ButtonProps> = ({ text, onClick, iconSrc }) => {
  return (
    <div className={styles.button} onClick={onClick}>
      <div className={styles.buttonSimpleAnimations}>
        <div className={styles.base}>
          <div className={styles.curtain} />
          {iconSrc && <img className={styles.iconPlaceholder} src={iconSrc} alt="" />}
          <div className={styles.text}>{text}</div>
        </div>
      </div>
    </div>
  );
};

export default Button;
