import type { NextPage } from "next";
import CustomHead from "../components/utility/CustomHead";

import styles from "../styles/Home.module.css";
import GenericButton from "../components/utility/GenericButton/GenericButton";
import TrademarkLogo from "../components/utility/TrademarkLogo/TrademarkLogo";

const Home: NextPage = () => {
  const designRecruitmentLink = "/design"; // make this relative if you redirect to somewhere on website; make it a url to redirect to external site

  return (
    <>
      <CustomHead />

      <div className={styles.main}>
        <TrademarkLogo />
        <code style={{ backgroundColor: "dimgray", padding: "0.5rem" }}>
          {"2023 == Promise {<pending>}"}
        </code>
        <p style={{ marginTop: "2rem" }}>Meanwhile check out:</p>
        <GenericButton href={designRecruitmentLink} passHref target="_blank">
          Spring{`'`}22 Design Recruitment!
        </GenericButton>
      </div>
    </>
  );
};

export default Home;
