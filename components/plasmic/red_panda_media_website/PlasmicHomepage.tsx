// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nazLgTEW7V6FTXLkGvtboX
// Component: riKg8GIR57uE

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
import NavBar2 from "../../NavBar2"; // plasmic-import: CIy-AvfP5yL/component
import { Embed } from "@plasmicpkgs/plasmic-basic-components"; // plasmic-import: PKldDYkH42/codeComponent
import { TimelineWrapper } from "@plasmicpkgs/react-twitter-widgets"; // plasmic-import: x2j0abJR_t/codeComponent
import { Reveal } from "@plasmicpkgs/react-awesome-reveal"; // plasmic-import: R6s1FdhksG/codeComponent
import Tilt from "@plasmicpkgs/react-parallax-tilt"; // plasmic-import: PfY466VIuq/codeComponent

import { useScreenVariants as useScreenVariantszpgDFsEUbio } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: __zpgDFsEUbio/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_red_panda_media_website.module.css"; // plasmic-import: nazLgTEW7V6FTXLkGvtboX/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: riKg8GIR57uE/css

import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 20vkZ39fVK/icon
import BrandInstagramsvgIcon from "./icons/PlasmicIcon__BrandInstagramsvg"; // plasmic-import: FPnuh-tu2Q/icon
import BrandFacebooksvgIcon from "./icons/PlasmicIcon__BrandFacebooksvg"; // plasmic-import: 1x1GOS4HV3/icon

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  navBar2?: p.Flex<typeof NavBar2>;
  embedHtml?: p.Flex<typeof Embed>;
  timeline?: p.Flex<typeof TimelineWrapper>;
  disukoDatingSim?: p.Flex<"div">;
  grooveMachines?: p.Flex<"div">;
  microcosm2?: p.Flex<"div">;
  eggRanger2?: p.Flex<"div">;
};

export interface DefaultHomepageProps {}

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

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantszpgDFsEUbio()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <title key="title">{PlasmicHomepage.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicHomepage.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicHomepage.pageMetadata.title}
        />
        <meta
          key="description"
          name="description"
          content={PlasmicHomepage.pageMetadata.description}
        />
        <meta
          key="og:description"
          property="og:description"
          content={PlasmicHomepage.pageMetadata.description}
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={PlasmicHomepage.pageMetadata.description}
        />
        <meta
          key="og:image"
          property="og:image"
          content={PlasmicHomepage.pageMetadata.ogImageSrc}
        />
        <meta
          key="twitter:image"
          name="twitter:image"
          content={PlasmicHomepage.pageMetadata.ogImageSrc}
        />
        <link ref="canonical" href={PlasmicHomepage.pageMetadata.canonical} />
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
          <NavBar2
            data-plasmic-name={"navBar2"}
            data-plasmic-override={overrides.navBar2}
            className={classNames("__wab_instance", sty.navBar2)}
          />

          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__uKxYv)}>
              <div className={classNames(projectcss.all, sty.columns__ic8T)}>
                {(
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? true
                    : true
                ) ? (
                  <div
                    className={classNames(projectcss.all, sty.column__s61Wh)}
                  >
                    {(
                      hasVariant(globalVariants, "screen", "mobileOnly")
                        ? true
                        : true
                    ) ? (
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox___80AHz
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__xkr20
                          )}
                        >
                          <React.Fragment>
                            <span
                              className={
                                "plasmic_default__all plasmic_default__span"
                              }
                              style={{ color: "#F47D31" }}
                            >
                              {"Latest Newsletter"}
                            </span>
                          </React.Fragment>
                        </div>

                        <Embed
                          data-plasmic-name={"embedHtml"}
                          data-plasmic-override={overrides.embedHtml}
                          className={classNames(
                            "__wab_instance",
                            sty.embedHtml
                          )}
                          code={
                            '<iframe src="https://mailchi.mp/73959a8b0951/red-panda-studios-newsletter-febuary" style="border:0px #ffffff none;" name="Newsletter" scrolling="yes" frameborder="1" marginheight="0px" marginwidth="0px" height="500px" width="100%" allowfullscreen></iframe>' as const
                          }
                        />

                        {true ? (
                          <TimelineWrapper
                            data-plasmic-name={"timeline"}
                            data-plasmic-override={overrides.timeline}
                            className={classNames(
                              "__wab_instance",
                              sty.timeline
                            )}
                            theme={"dark" as const}
                            tweetLimit={1 as const}
                            url={"https://twitter.com/redpandamedia_" as const}
                          />
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                ) : null}

                <div className={classNames(projectcss.all, sty.column__pcMc6)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___37G9D
                    )}
                  >
                    <React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ color: "#F47D31" }}
                      >
                        {"Welcome!"}
                      </span>
                    </React.Fragment>
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__oI6G
                    )}
                  >
                    {
                      "We’re Red Panda Studios, an indie digital media group focusing on games, music, and more.  On this site you can check out our games and other digital content, as well as information about the members of our crew and blog posts."
                    }
                  </div>

                  <Reveal
                    cascade={true}
                    className={classNames("__wab_instance", sty.reveal__gfZv)}
                    direction={"up" as const}
                    effect={"bounce" as const}
                    triggerOnce={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___2TLeu
                      )}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__tRrBj
                        )}
                      >
                        <React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#F47D31" }}
                          >
                            {"In Development"}
                          </span>
                        </React.Fragment>
                      </div>

                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.columns__f6WLu
                        )}
                      >
                        <div
                          data-plasmic-name={"disukoDatingSim"}
                          data-plasmic-override={overrides.disukoDatingSim}
                          className={classNames(
                            projectcss.all,
                            sty.disukoDatingSim
                          )}
                        >
                          <Tilt
                            className={classNames(
                              "__wab_instance",
                              sty.tilt__rl9Eo
                            )}
                            glareEnable={false}
                            tiltMaxAngleX={20 as const}
                            tiltMaxAngleY={20 as const}
                            tiltReverse={true}
                          >
                            <p.PlasmicLink
                              className={classNames(
                                projectcss.all,
                                projectcss.a,
                                sty.link__vzKUg
                              )}
                              component={Link}
                              href={
                                "https://www.youtube.com/watch?v=fgJZq3t5ewI" as const
                              }
                              platform={"nextjs"}
                              target={"_blank" as const}
                            >
                              <p.PlasmicImg
                                alt={""}
                                className={classNames(sty.img__nlcyl)}
                                displayHeight={"auto" as const}
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
                            </p.PlasmicLink>
                          </Tilt>

                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text___0GclI
                            )}
                          >
                            <React.Fragment>
                              <span
                                className={
                                  "plasmic_default__all plasmic_default__span"
                                }
                                style={{ color: "#F47D31" }}
                              >
                                {"Disuko Dating Simulator"}
                              </span>
                            </React.Fragment>
                          </div>

                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__s6Icj
                            )}
                          >
                            {
                              "Join Disuko for a visual novel adventure filled with music, humor, and romance! Coming soon."
                            }
                          </div>
                        </div>

                        <div
                          data-plasmic-name={"grooveMachines"}
                          data-plasmic-override={overrides.grooveMachines}
                          className={classNames(
                            projectcss.all,
                            sty.grooveMachines
                          )}
                        >
                          <Tilt
                            className={classNames(
                              "__wab_instance",
                              sty.tilt__dJgQx
                            )}
                            tiltMaxAngleX={20 as const}
                            tiltMaxAngleY={20 as const}
                            tiltReverse={true}
                          >
                            <p.PlasmicLink
                              className={classNames(
                                projectcss.all,
                                projectcss.a,
                                sty.link__qgoOa
                              )}
                              component={Link}
                              href={
                                "https://www.youtube.com/watch?v=0MVvdh-E7vI" as const
                              }
                              platform={"nextjs"}
                              target={"_blank" as const}
                            >
                              <p.PlasmicImg
                                alt={""}
                                className={classNames(sty.img___2BJn)}
                                displayHeight={"auto" as const}
                                displayMaxHeight={"none" as const}
                                displayMaxWidth={"100%" as const}
                                displayMinHeight={"0" as const}
                                displayMinWidth={"0" as const}
                                displayWidth={"auto" as const}
                                loading={"lazy" as const}
                                src={{
                                  src: "/plasmic/red_panda_studios_website/images/logopng.png",
                                  fullWidth: 952,
                                  fullHeight: 377,
                                  aspectRatio: undefined
                                }}
                              />
                            </p.PlasmicLink>
                          </Tilt>

                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__jixCa
                            )}
                          >
                            <React.Fragment>
                              <span
                                className={
                                  "plasmic_default__all plasmic_default__span"
                                }
                                style={{ color: "#F47D31" }}
                              >
                                {"Groove Machines"}
                              </span>
                            </React.Fragment>
                          </div>

                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__p4Tor
                            )}
                          >
                            {
                              "Groove Machines is a card game with a twist- any card you play is powered by music! Expand your collection and battle others online with 100+ unique Machines to master your skills in rhythm and strategy."
                            }
                          </div>
                        </div>
                      </p.Stack>
                    </div>

                    <div
                      className={classNames(projectcss.all, sty.freeBox__p7T0B)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___5I5Gc
                        )}
                      >
                        <React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "#F47D31" }}
                          >
                            {"Game Jam Projects"}
                          </span>
                        </React.Fragment>
                      </div>

                      <div
                        className={classNames(
                          projectcss.all,
                          sty.columns___2Gq2Z
                        )}
                      >
                        <div
                          data-plasmic-name={"microcosm2"}
                          data-plasmic-override={overrides.microcosm2}
                          className={classNames(projectcss.all, sty.microcosm2)}
                        >
                          <Tilt
                            className={classNames(
                              "__wab_instance",
                              sty.tilt__lmGka
                            )}
                            glareEnable={false}
                            tiltMaxAngleX={20 as const}
                            tiltMaxAngleY={20 as const}
                            tiltReverse={true}
                          >
                            <p.PlasmicLink
                              className={classNames(
                                projectcss.all,
                                projectcss.a,
                                sty.link__tGeh
                              )}
                              component={Link}
                              href={
                                "https://red-panda-studios.itch.io/microcosm" as const
                              }
                              platform={"nextjs"}
                              target={"_blank" as const}
                            >
                              <p.PlasmicImg
                                alt={""}
                                className={classNames(sty.img__upMtI)}
                                displayHeight={"auto" as const}
                                displayMaxHeight={"none" as const}
                                displayMaxWidth={"100%" as const}
                                displayMinHeight={"0" as const}
                                displayMinWidth={"0" as const}
                                displayWidth={"auto" as const}
                                loading={"lazy" as const}
                                src={{
                                  src: "/plasmic/red_panda_media_website/images/image2.png",
                                  fullWidth: 461,
                                  fullHeight: 76,
                                  aspectRatio: undefined
                                }}
                              />
                            </p.PlasmicLink>
                          </Tilt>

                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__wFt7
                            )}
                          >
                            <React.Fragment>
                              <span
                                className={
                                  "plasmic_default__all plasmic_default__span"
                                }
                                style={{ color: "#F47D31" }}
                              >
                                {"Made during SHOWTIME Event"}
                              </span>
                            </React.Fragment>
                          </div>

                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__lmXl2
                            )}
                          >
                            {
                              "microcosm is a Lovecraft-inspired pet simulation game. Feed, nurture, and make sacrifices to your own being of horror (and also cuteness)!"
                            }
                          </div>
                        </div>

                        <div
                          data-plasmic-name={"eggRanger2"}
                          data-plasmic-override={overrides.eggRanger2}
                          className={classNames(projectcss.all, sty.eggRanger2)}
                        >
                          <Tilt
                            className={classNames(
                              "__wab_instance",
                              sty.tilt___0ENuj
                            )}
                            tiltMaxAngleX={20 as const}
                            tiltMaxAngleY={20 as const}
                            tiltReverse={true}
                          >
                            <p.PlasmicLink
                              className={classNames(
                                projectcss.all,
                                projectcss.a,
                                sty.link__cgSp
                              )}
                              component={Link}
                              href={
                                "https://www.newgrounds.com/portal/view/807191?updated=1627282135" as const
                              }
                              platform={"nextjs"}
                              target={"_blank" as const}
                            >
                              <p.PlasmicImg
                                alt={""}
                                className={classNames(sty.img__u5Dc8)}
                                displayHeight={"auto" as const}
                                displayMaxHeight={"none" as const}
                                displayMaxWidth={"100%" as const}
                                displayMinHeight={"0" as const}
                                displayMinWidth={"0" as const}
                                displayWidth={"auto" as const}
                                loading={"lazy" as const}
                                src={{
                                  src: "/plasmic/red_panda_media_website/images/image3.png",
                                  fullWidth: 441,
                                  fullHeight: 114,
                                  aspectRatio: undefined
                                }}
                              />
                            </p.PlasmicLink>
                          </Tilt>

                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__mY8A
                            )}
                          >
                            <React.Fragment>
                              <span
                                className={
                                  "plasmic_default__all plasmic_default__span"
                                }
                                style={{ color: "#F47D31" }}
                              >
                                {"Made for Newgrounds Egg Jam"}
                              </span>
                            </React.Fragment>
                          </div>

                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text___9Fo0Z
                            )}
                          >
                            {
                              "Egg Ranger is a top down bullet hell game. Zip through other worlds in a futuristic aircraft in search of exotic eggs! Prove your worth by shooting and weaving through waves of enemies. This omlette better be damn worth it."
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </div>

                <div className={classNames(projectcss.all, sty.column___7KFxr)}>
                  {(
                    hasVariant(globalVariants, "screen", "mobileOnly")
                      ? true
                      : true
                  ) ? (
                    <Reveal
                      cascade={true}
                      className={classNames(
                        "__wab_instance",
                        sty.reveal___5U8X1
                      )}
                      direction={"right" as const}
                      effect={"bounce" as const}
                      triggerOnce={true}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__e4Mmr
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__xEmfa
                          )}
                        >
                          <React.Fragment>
                            <span
                              className={
                                "plasmic_default__all plasmic_default__span"
                              }
                              style={{ color: "#F47D31" }}
                            >
                              {"Social Links"}
                            </span>
                          </React.Fragment>
                        </div>

                        <p.PlasmicLink
                          className={classNames(
                            projectcss.all,
                            projectcss.a,
                            sty.link___4Fhva
                          )}
                          component={Link}
                          href={"https://twitter.com/RedPandaStudios" as const}
                          platform={"nextjs"}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__xTMln
                            )}
                          >
                            <IconIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg___6GMw3
                              )}
                              role={"img"}
                            />

                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__rIhZz
                              )}
                            >
                              {"Twitter"}
                            </div>
                          </div>
                        </p.PlasmicLink>

                        <p.PlasmicLink
                          className={classNames(
                            projectcss.all,
                            projectcss.a,
                            sty.link__zB4Mc
                          )}
                          component={Link}
                          href={
                            "https://www.instagram.com/redpandastudios_/" as const
                          }
                          platform={"nextjs"}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__luykD
                            )}
                          >
                            <BrandInstagramsvgIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg___1Va8Y
                              )}
                              role={"img"}
                            />

                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__n17Yf
                              )}
                            >
                              {"Instagram"}
                            </div>
                          </div>
                        </p.PlasmicLink>

                        <p.PlasmicLink
                          className={classNames(
                            projectcss.all,
                            projectcss.a,
                            sty.link__jKmhG
                          )}
                          component={Link}
                          href={
                            "https://www.facebook.com/redpandastudio2/" as const
                          }
                          platform={"nextjs"}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__sCJ
                            )}
                          >
                            <BrandFacebooksvgIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__gz0We
                              )}
                              role={"img"}
                            />

                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__l99Ma
                              )}
                            >
                              {"Facebook"}
                            </div>
                          </div>
                        </p.PlasmicLink>
                      </div>
                    </Reveal>
                  ) : null}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navBar2",
    "embedHtml",
    "timeline",
    "disukoDatingSim",
    "grooveMachines",
    "microcosm2",
    "eggRanger2"
  ],
  navBar2: ["navBar2"],
  embedHtml: ["embedHtml"],
  timeline: ["timeline"],
  disukoDatingSim: ["disukoDatingSim"],
  grooveMachines: ["grooveMachines"],
  microcosm2: ["microcosm2"],
  eggRanger2: ["eggRanger2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navBar2: typeof NavBar2;
  embedHtml: typeof Embed;
  timeline: typeof TimelineWrapper;
  disukoDatingSim: "div";
  grooveMachines: "div";
  microcosm2: "div";
  eggRanger2: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
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
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navBar2: makeNodeComponent("navBar2"),
    embedHtml: makeNodeComponent("embedHtml"),
    timeline: makeNodeComponent("timeline"),
    disukoDatingSim: makeNodeComponent("disukoDatingSim"),
    grooveMachines: makeNodeComponent("grooveMachines"),
    microcosm2: makeNodeComponent("microcosm2"),
    eggRanger2: makeNodeComponent("eggRanger2"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Home 🐾",
      description:
        "~Red Panda Studios~\nGames, Music, Comics\nDigital Artist Collective",
      ogImageSrc:
        "https://site-assets.plasmic.app/d58a47bfe90ae5acd650ca29bcce987f.png",
      canonical: "https://redpandamedia.net"
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
