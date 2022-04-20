import type { ReactElement } from "react";
import Head from "next/head";

export interface CustomHeadProps {
  title?: string;
  description?: string;
  iconPath?: string;
  children?: React.ReactNode;
}

/**
 * Prefer this over the default NextJS Head because it has default metas and
 * titles that's good for accessibility
 */
export default function CustomHead({
  title = "Join our organizing team! - HackSC",
  description = "Join our team!",
  iconPath = "/images/favicon_64.png",
  children = null,
}: CustomHeadProps): ReactElement {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href={iconPath} />
      {children}
    </Head>
  );
}
