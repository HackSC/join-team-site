import { GetServerSideProps } from "next";
import Image from "next/image";
import type { ReactElement } from "react";

interface Props {}

export default function DesignTeamRecruitmentPage(props: Props): ReactElement {
  return <div className="main"></div>;
}

export const getServerSideProps: GetServerSideProps = async () => {
  // redirect to the notion page for now
  const notionInfoPageURL =
    "https://hacksc23.notion.site/Design-HackSC-Team-Spring-Recruitment-2022-9919181231c246f9a10f804cfdbe30b4";
  return {
    redirect: {
      destination: notionInfoPageURL,
      permanent: false,
    },
  };
};
