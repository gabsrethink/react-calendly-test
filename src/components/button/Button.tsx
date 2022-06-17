import styles from "./Button.module.css";

interface Props {
  onClick?: () => void;
  text?: string;
  image?: any;
  height?: string;
  width?: string;
  color?: any;
}

const Button: React.FC<Props> = ({
  onClick,
  text,
  height,
  width,
  color,
  image,
}) => {
  return (
    <button
      onClick={onClick}
      className={styles.Button}
      style={{ height, width, backgroundColor: color }}
    >
      {image}
      {text}
    </button>
  );
};

export default Button;
