// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MusicsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MusicsvgIcon(props: MusicsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "icon icon-tabler icon-tabler-music"
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

      <path
        d={"M3 17a3 3 0 106 0 3 3 0 10-6 0m10 0a3 3 0 106 0 3 3 0 10-6 0"}
      ></path>

      <path d={"M9 17V4h10v13M9 8h10"}></path>
    </svg>
  );
}

export default MusicsvgIcon;
/* prettier-ignore-end */
