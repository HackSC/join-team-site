import { LinkProps } from "next/link";
import type { ReactElement } from "react";
import React from "react";
import styles from "./GenericButton.module.css";
import Link from "next/link";
import { UrlObject } from "url";

// imagine not declaring in your library
declare type Url = string | UrlObject;

// overrides the LinkProps styles
type OptionalLinkProps = Omit<LinkProps, "href"> & { href?: Url };
type GenericButtonProps =
  | React.ButtonHTMLAttributes<any> &
      React.PropsWithChildren<OptionalLinkProps>;

/**
 *  Prefer using this over a normal button; this has accessibility built into it
 *  When `href` is passed in, this functions like the custom button and a NextLink
 */
export function GenericButton(props: GenericButtonProps): ReactElement {
  const CustomButtonElement = () => (
    <button {...props} className={styles.generic__button}>
      {props.children}
    </button>
  );

  if (props.href)
    return (
      <Link href={props.href} passHref={props.passHref}>
        <a>
          <CustomButtonElement />
        </a>
      </Link>
    );

  return <CustomButtonElement />;
}
