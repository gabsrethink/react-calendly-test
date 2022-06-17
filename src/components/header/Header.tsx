import React from "react";
import { handleScroll } from "../../screens/home/Home";
import Button from "../button/Button";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header_inner}>
      <div className={styles.header_text}>
        Alan <strong>Souza</strong>
      </div>
      <div>
        <Button
          text="Agendar horário"
          height="37px"
          width="153px"
          color="var(--color-dark)"
          onClick={handleScroll}
        />
      </div>
    </div>
  );
};

export default Header;
