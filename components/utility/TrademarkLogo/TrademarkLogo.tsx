import type { ReactElement } from 'react';
import styles from './TrademarkLogo.module.css';
import Image from 'next/image';
import HackSC22LogoPNG from '../../../public/images/hacksc22-flower.png';

export interface TrademarkLogoProps {}

export default function TrademarkLogo(props: TrademarkLogoProps): ReactElement {
  return (
    <div id={styles.logoContainer}>
      <Image
        src={HackSC22LogoPNG}
        layout="fill"
        objectFit="fill"
        priority={true} // should load first
        alt="HackSC Logo"
      />
    </div>
  );
}
