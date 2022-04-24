import type { ReactElement } from "react";
import styles from "./TrademarkLogo.module.css";
import Image from "next/image";

export interface TrademarkLogoProps {}

export default function TrademarkLogo(props: TrademarkLogoProps): ReactElement {
  return (
    <div id={styles.logoContainer}>
      <Image
        src="/images/hacksc22-flower.png"
        layout="fill"
        objectFit="fill"
        loading="eager"
        alt="HackSC Logo"
      />
    </div>
  );
}
