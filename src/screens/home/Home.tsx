import React from "react";
import Images from "../../assets/indext";
import Button from "../../components/button/Button";
import Calendly from "../../components/calendly/Calendly";
import Header from "../../components/header/Header";
import Wrapper from "../../components/wrapper/Wrapper";
import styles from "./Home.module.css";

export function handleScroll() {
  window.scroll({
    top: document.body.offsetHeight,
    left: 0,
    behavior: "smooth",
  });
}

const Home = () => {
  return (
    <div>
      <div className={styles.home_container}>
        <Wrapper>
          <Header />
          <div className={styles.home_presentation_container}>
            <div className={styles.home_info_container}>
              <div className={styles.info_greetings}>
                👋🏻 <p> E aí!</p>
              </div>
              <div className={styles.info_container_title}>
                <h1>
                  Me chamo <strong> Alan Souza. </strong>
                </h1>
              </div>
              <div className={styles.info_container_buttons}>
                <Button
                  text="UI Designer"
                  height="28px"
                  width="105px"
                  color="var(--color-purple-button)"
                />
                <Button
                  text="UX Designer"
                  height="28px"
                  width="111px"
                  color="var(--color-green-button)"
                />
                <Button
                  text="UI Motion"
                  height="28px"
                  width="91px"
                  color="var(--color-yellow-button)"
                />
              </div>
              <div className={styles.info_container_text}>
                <p>
                  Designer Senior há 20 anos, formado em Design de Produto, Pós
                  Graduado em UX e Mestre em Design.
                </p>
                <p>
                  Apaixonado por solucionar problemas através de produtos
                  digitais.
                </p>
              </div>
              <Button
                image={<img src={Images.icon.default} alt="Backgroud" />}
                text="Quero uma mentoria"
                height="56px"
                width="244px"
                color="var(--color-detail)"
                onClick={handleScroll}
              />
            </div>
            <div className={styles.home_image}>
              <img src={Images.image.default} alt="" />
            </div>
          </div>
        </Wrapper>
      </div>
      <div className={styles.calendly_container}>
        <Wrapper>
          <div className={styles.calendly_icon}>
            <img src={Images.icon.pageIcon} alt="" />
          </div>
          <div className={styles.calendly_text}>
            <h1>Agenda de mentorias</h1>
          </div>
          <div className={styles.calendly_main}>
            <Calendly />
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default Home;
