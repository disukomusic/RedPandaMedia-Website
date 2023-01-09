// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NetworksvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NetworksvgIcon(props: NetworksvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "icon icon-tabler icon-tabler-network"
      )}
      strokeWidth={"2"}
      stroke={"currentColor"}
      fill={"none"}
      strokeLinecap={"round"}
      strokeLinejoin={"round"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M0 0h24v24H0z"} fill={"none"} stroke={"none"}></path>

      <circle cx={"12"} cy={"9"} r={"6"}></circle>

      <path
        d={
          "M12 3c1.333.333 2 2.333 2 6s-.667 5.667-2 6m0-12c-1.333.333-2 2.333-2 6s.667 5.667 2 6M6 9h12M3 19h7m4 0h7"
        }
      ></path>

      <circle cx={"12"} cy={"19"} r={"2"}></circle>

      <path d={"M12 15v2"}></path>
    </svg>
  );
}

export default NetworksvgIcon;
/* prettier-ignore-end */
