// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nazLgTEW7V6FTXLkGvtboX
// Component: jM_qgBDxgy

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { Embed } from "@plasmicpkgs/plasmic-basic-components"; // plasmic-import: PKldDYkH42/codeComponent
import Tilt from "@plasmicpkgs/react-parallax-tilt"; // plasmic-import: PfY466VIuq/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "../red_panda_media_website/plasmic_red_panda_media_website.module.css"; // plasmic-import: nazLgTEW7V6FTXLkGvtboX/projectcss
import sty from "./PlasmicSecret.module.css"; // plasmic-import: jM_qgBDxgy/css

export type PlasmicSecret__VariantMembers = {};
export type PlasmicSecret__VariantsArgs = {};
type VariantPropType = keyof PlasmicSecret__VariantsArgs;
export const PlasmicSecret__VariantProps = new Array<VariantPropType>();

export type PlasmicSecret__ArgsType = {};
type ArgPropType = keyof PlasmicSecret__ArgsType;
export const PlasmicSecret__ArgProps = new Array<ArgPropType>();

export type PlasmicSecret__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  embedHtml?: p.Flex<typeof Embed>;
  tilt?: p.Flex<typeof Tilt>;
};

export interface DefaultSecretProps {}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSecret__RenderFunc(props: {
  variants: PlasmicSecret__VariantsArgs;
  args: PlasmicSecret__ArgsType;
  overrides: PlasmicSecret__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        {true ? (
          <div
            data-plasmic-name={"root"}
            data-plasmic-override={overrides.root}
            data-plasmic-root={true}
            data-plasmic-for-node={forNode}
            className={classNames(
              projectcss.all,
              projectcss.root_reset,
              projectcss.plasmic_default_styles,
              projectcss.plasmic_mixins,
              projectcss.plasmic_tokens,
              sty.root
            )}
          >
            <div
              data-plasmic-name={"freeBox"}
              data-plasmic-override={overrides.freeBox}
              className={classNames(projectcss.all, sty.freeBox)}
            >
              <Embed
                data-plasmic-name={"embedHtml"}
                data-plasmic-override={overrides.embedHtml}
                className={classNames("__wab_instance", sty.embedHtml)}
                code={
                  '<script src="https://cdn.commoninja.com/sdk/latest/commonninja.js" defer></script>\r\n<div class="commonninja_component pid-d12750fd-b04d-4e98-a4c4-1926d4b61802"></div>' as const
                }
              />

              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__quWk)}
                displayHeight={"258px" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"auto" as const}
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/red_panda_studios_website/images/ddsLogopng.png",
                  fullWidth: 2075,
                  fullHeight: 963,
                  aspectRatio: undefined
                }}
              />

              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img___2Qiqv)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"597px" as const}
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/red_panda_studios_website/images/datepng.png",
                  fullWidth: 512,
                  fullHeight: 152,
                  aspectRatio: undefined
                }}
              />

              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__n5UGf)}
                displayHeight={"768px" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"auto" as const}
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/red_panda_studios_website/images/disukoBaseAnimepng.png",
                  fullWidth: 768,
                  fullHeight: 768,
                  aspectRatio: undefined
                }}
              />

              <Tilt
                data-plasmic-name={"tilt"}
                data-plasmic-override={overrides.tilt}
                className={classNames("__wab_instance", sty.tilt)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__w3RGv)}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"none" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"auto" as const}
                  src={"https://placekitten.com/300/200" as const}
                />
              </Tilt>

              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__eqzuJ)}
                displayHeight={"768px" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"auto" as const}
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/red_panda_studios_website/images/shikuBasepng.png",
                  fullWidth: 768,
                  fullHeight: 768,
                  aspectRatio: undefined
                }}
              />
            </div>
          </div>
        ) : null}
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "embedHtml", "tilt"],
  freeBox: ["freeBox", "embedHtml", "tilt"],
  embedHtml: ["embedHtml"],
  tilt: ["tilt"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  embedHtml: typeof Embed;
  tilt: typeof Tilt;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSecret__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSecret__VariantsArgs;
    args?: PlasmicSecret__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSecret__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSecret__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicSecret__ArgProps,
          internalVariantPropNames: PlasmicSecret__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSecret__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSecret";
  } else {
    func.displayName = `PlasmicSecret.${nodeName}`;
  }
  return func;
}

export const PlasmicSecret = Object.assign(
  // Top-level PlasmicSecret renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    embedHtml: makeNodeComponent("embedHtml"),
    tilt: makeNodeComponent("tilt"),

    // Metadata about props expected for PlasmicSecret
    internalVariantProps: PlasmicSecret__VariantProps,
    internalArgProps: PlasmicSecret__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicSecret;
/* prettier-ignore-end */
