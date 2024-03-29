// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nazLgTEW7V6FTXLkGvtboX
// Component: 7gGZxN9wXqQ

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
import Button2 from "../../Button2"; // plasmic-import: mY87X3S2UUL/component
import { Reveal } from "@plasmicpkgs/react-awesome-reveal"; // plasmic-import: R6s1FdhksG/codeComponent
import Tilt from "@plasmicpkgs/react-parallax-tilt"; // plasmic-import: PfY466VIuq/codeComponent

import { useScreenVariants as useScreenVariantszpgDFsEUbio } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: __zpgDFsEUbio/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_red_panda_media_website.module.css"; // plasmic-import: nazLgTEW7V6FTXLkGvtboX/projectcss
import sty from "./PlasmicComics.module.css"; // plasmic-import: 7gGZxN9wXqQ/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: -8WdXkfhmn7/icon
import Icon38Icon from "./icons/PlasmicIcon__Icon38"; // plasmic-import: gCQki7ZDykM/icon

createPlasmicElementProxy;

export type PlasmicComics__VariantMembers = {};
export type PlasmicComics__VariantsArgs = {};
type VariantPropType = keyof PlasmicComics__VariantsArgs;
export const PlasmicComics__VariantProps = new Array<VariantPropType>();

export type PlasmicComics__ArgsType = {};
type ArgPropType = keyof PlasmicComics__ArgsType;
export const PlasmicComics__ArgProps = new Array<ArgPropType>();

export type PlasmicComics__OverridesType = {
  root?: p.Flex<"div">;
  navBar2?: p.Flex<"div">;
  button?: p.Flex<"button">;
  button2?: p.Flex<typeof Button2>;
  reveal?: p.Flex<typeof Reveal>;
  tilt?: p.Flex<typeof Tilt>;
};

export interface DefaultComicsProps {}

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicComics__RenderFunc(props: {
  variants: PlasmicComics__VariantsArgs;
  args: PlasmicComics__ArgsType;
  overrides: PlasmicComics__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantszpgDFsEUbio()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <title key="title">{PlasmicComics.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicComics.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicComics.pageMetadata.title}
        />
        <meta
          key="description"
          name="description"
          content={PlasmicComics.pageMetadata.description}
        />
        <meta
          key="og:description"
          property="og:description"
          content={PlasmicComics.pageMetadata.description}
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={PlasmicComics.pageMetadata.description}
        />
        <meta
          key="og:image"
          property="og:image"
          content={PlasmicComics.pageMetadata.ogImageSrc}
        />
        <meta
          key="twitter:image"
          name="twitter:image"
          content={PlasmicComics.pageMetadata.ogImageSrc}
        />
        <link ref="canonical" href={PlasmicComics.pageMetadata.canonical} />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <p.Stack
            as={"div"}
            data-plasmic-name={"navBar2"}
            data-plasmic-override={overrides.navBar2}
            hasGap={true}
            className={classNames(projectcss.all, sty.navBar2)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__yQqEg)}
            >
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__isHjd)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"343px"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"100%"}
                src={{
                  src: "/plasmic/red_panda_studios_website/images/rpsLogo2023Png.png",
                  fullWidth: 2421,
                  fullHeight: 532,
                  aspectRatio: undefined
                }}
              />

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__f4ZPx)}
              >
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__uskl9
                  )}
                  component={Link}
                  href={`/`}
                  platform={"nextjs"}
                  title={"Home"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__dwrvS
                    )}
                  >
                    {"Home"}
                  </div>
                </p.PlasmicLink>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__ySnYw
                  )}
                  component={Link}
                  href={`/about`}
                  platform={"nextjs"}
                  title={"About Us"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ra9LQ
                    )}
                  >
                    {"About Us"}
                  </div>
                </p.PlasmicLink>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__mzFnI
                  )}
                  component={Link}
                  href={`/comics`}
                  platform={"nextjs"}
                  target={undefined}
                  title={"Comics"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__wtgCc
                    )}
                  >
                    {"Comics"}
                  </div>
                </p.PlasmicLink>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__xJjyn
                  )}
                  component={Link}
                  href={`/newsletter`}
                  platform={"nextjs"}
                  title={"Newsletter"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__vWomI
                    )}
                  >
                    {"Newsletter"}
                  </div>
                </p.PlasmicLink>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__zr4Ge
                  )}
                  component={Link}
                  href={`/radio`}
                  platform={"nextjs"}
                  title={"Newsletter"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ghPm5
                    )}
                  >
                    {"Radio"}
                  </div>
                </p.PlasmicLink>
              </p.Stack>
              {false ? (
                <div
                  className={classNames(projectcss.all, sty.freeBox___1Tqbl)}
                >
                  <button
                    data-plasmic-name={"button"}
                    data-plasmic-override={overrides.button}
                    className={classNames(
                      projectcss.all,
                      projectcss.button,
                      projectcss.__wab_text,
                      sty.button
                    )}
                  >
                    {"Sign up"}
                  </button>
                  <Button2
                    data-plasmic-name={"button2"}
                    data-plasmic-override={overrides.button2}
                    className={classNames("__wab_instance", sty.button2)}
                    color={"clear"}
                    endIcon={
                      <Icon38Icon
                        className={classNames(projectcss.all, sty.svg___1CeH1)}
                        role={"img"}
                      />
                    }
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg__zZwnl)}
                        role={"img"}
                      />
                    }
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__tm5Ss
                      )}
                    >
                      {"Log in"}
                    </div>
                  </Button2>
                </div>
              ) : null}
            </p.Stack>
          </p.Stack>
          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__whvpZ)}
            displayHeight={"153px"}
            displayMaxHeight={"none"}
            displayMaxWidth={
              hasVariant(globalVariants, "screen", "mobileOnly")
                ? "80%"
                : "100%"
            }
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={
              hasVariant(globalVariants, "screen", "mobileOnly")
                ? "100%"
                : "auto"
            }
            loading={"lazy"}
            src={{
              src: "/plasmic/red_panda_media_website/images/terriversepng.png",
              fullWidth: 882,
              fullHeight: 268,
              aspectRatio: undefined
            }}
          />

          <Reveal
            data-plasmic-name={"reveal"}
            data-plasmic-override={overrides.reveal}
            cascade={false}
            className={classNames("__wab_instance", sty.reveal)}
            effect={"jackinthebox"}
            reverse={false}
            triggerOnce={true}
          >
            <Tilt
              data-plasmic-name={"tilt"}
              data-plasmic-override={overrides.tilt}
              className={classNames("__wab_instance", sty.tilt)}
              tiltReverse={true}
            >
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link___7SBSq
                )}
                component={Link}
                href={"https://terriverse.com"}
                platform={"nextjs"}
                target={"_blank"}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__skKQr)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={
                    hasVariant(globalVariants, "screen", "mobileOnly")
                      ? "90%"
                      : "100%"
                  }
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"478px"}
                  loading={"eager"}
                  src={{
                    src: "/plasmic/red_panda_media_website/images/comicBookpng2.png",
                    fullWidth: 853,
                    fullHeight: 1133,
                    aspectRatio: undefined
                  }}
                />
              </p.PlasmicLink>
            </Tilt>
          </Reveal>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "navBar2", "button", "button2", "reveal", "tilt"],
  navBar2: ["navBar2", "button", "button2"],
  button: ["button"],
  button2: ["button2"],
  reveal: ["reveal", "tilt"],
  tilt: ["tilt"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navBar2: "div";
  button: "button";
  button2: typeof Button2;
  reveal: typeof Reveal;
  tilt: typeof Tilt;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicComics__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicComics__VariantsArgs;
    args?: PlasmicComics__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicComics__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicComics__ArgsType,
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
          internalArgPropNames: PlasmicComics__ArgProps,
          internalVariantPropNames: PlasmicComics__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicComics__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicComics";
  } else {
    func.displayName = `PlasmicComics.${nodeName}`;
  }
  return func;
}

export const PlasmicComics = Object.assign(
  // Top-level PlasmicComics renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navBar2: makeNodeComponent("navBar2"),
    button: makeNodeComponent("button"),
    button2: makeNodeComponent("button2"),
    reveal: makeNodeComponent("reveal"),
    tilt: makeNodeComponent("tilt"),

    // Metadata about props expected for PlasmicComics
    internalVariantProps: PlasmicComics__VariantProps,
    internalArgProps: PlasmicComics__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Comics🐾",
      description:
        "~Red Panda Studios~\nGames, Music, Comics\nDigital Artist Collective",
      ogImageSrc:
        "https://site-assets.plasmic.app/a2c33f01c1400c74a999e4a32898279d.png",
      canonical: "https://redpandastudios.net/comics/"
    }
  }
);

export default PlasmicComics;
/* prettier-ignore-end */
