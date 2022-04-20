import type { NextPage } from "next";
import CustomHead from "../components/utility/CustomHead";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import { GenericButton } from "../components/utility/GenericButton/GenericButton";
import Link from "next/link";

const Home: NextPage = () => {
  const designRecruitmentLink = "/design"; // make this relative if you redirect to somewhere on website; make it a url to redirect to external site

  return (
    <>
      <CustomHead />

      <div className={styles.main}>
        <Image
          src="/images/hacksc22-flower.svg"
          width={400}
          height={400}
          loading="eager"
          alt="HackSC 2022 Logo"
        />
        <code style={{ backgroundColor: "dimgray", padding: "0.5rem" }}>
          {"2023 == Promise {<pending>}"}
        </code>
        <p style={{ marginTop: "2rem" }}>Meanwhile check out:</p>
        <GenericButton href={designRecruitmentLink} passHref>
          Spring{`'`}22 Design Recruitment!
        </GenericButton>
      </div>
    </>
  );
};

export default Home;
