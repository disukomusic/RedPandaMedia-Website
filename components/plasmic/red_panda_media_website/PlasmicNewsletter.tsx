// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nazLgTEW7V6FTXLkGvtboX
// Component: m2EsWeirD3y

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
import { Embed } from "@plasmicpkgs/plasmic-basic-components"; // plasmic-import: PKldDYkH42/codeComponent

import { useScreenVariants as useScreenVariantszpgDFsEUbio } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: __zpgDFsEUbio/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_red_panda_media_website.module.css"; // plasmic-import: nazLgTEW7V6FTXLkGvtboX/projectcss
import sty from "./PlasmicNewsletter.module.css"; // plasmic-import: m2EsWeirD3y/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: -8WdXkfhmn7/icon
import Icon38Icon from "./icons/PlasmicIcon__Icon38"; // plasmic-import: gCQki7ZDykM/icon

export type PlasmicNewsletter__VariantMembers = {};
export type PlasmicNewsletter__VariantsArgs = {};
type VariantPropType = keyof PlasmicNewsletter__VariantsArgs;
export const PlasmicNewsletter__VariantProps = new Array<VariantPropType>();

export type PlasmicNewsletter__ArgsType = {};
type ArgPropType = keyof PlasmicNewsletter__ArgsType;
export const PlasmicNewsletter__ArgProps = new Array<ArgPropType>();

export type PlasmicNewsletter__OverridesType = {
  root?: p.Flex<"div">;
  navBar?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  button?: p.Flex<"button">;
  button2?: p.Flex<typeof Button2>;
  columns?: p.Flex<"div">;
  h6?: p.Flex<"h6">;
  embedHtml?: p.Flex<typeof Embed>;
};

export interface DefaultNewsletterProps {}

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

function PlasmicNewsletter__RenderFunc(props: {
  variants: PlasmicNewsletter__VariantsArgs;
  args: PlasmicNewsletter__ArgsType;
  overrides: PlasmicNewsletter__OverridesType;
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
        <title key="title">{PlasmicNewsletter.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicNewsletter.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicNewsletter.pageMetadata.title}
        />
        <meta
          key="description"
          name="description"
          content={PlasmicNewsletter.pageMetadata.description}
        />
        <meta
          key="og:description"
          property="og:description"
          content={PlasmicNewsletter.pageMetadata.description}
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={PlasmicNewsletter.pageMetadata.description}
        />
        <meta
          key="og:image"
          property="og:image"
          content={PlasmicNewsletter.pageMetadata.ogImageSrc}
        />
        <meta
          key="twitter:image"
          name="twitter:image"
          content={PlasmicNewsletter.pageMetadata.ogImageSrc}
        />
        <link ref="canonical" href={PlasmicNewsletter.pageMetadata.canonical} />
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
            data-plasmic-name={"navBar"}
            data-plasmic-override={overrides.navBar}
            hasGap={true}
            className={classNames(projectcss.all, sty.navBar)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__uaiim)}
            >
              <p.PlasmicImg
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(sty.img)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"343px" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"100%" as const}
                src={{
                  src: "/plasmic/red_panda_media_website/images/rpsLogopng.png",
                  fullWidth: 1266,
                  fullHeight: 269,
                  aspectRatio: undefined
                }}
              />

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___8Kreq)}
              >
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__a65K
                  )}
                  component={Link}
                  href={`/`}
                  platform={"nextjs"}
                  title={"Home" as const}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ycfcF
                    )}
                  >
                    {"Home"}
                  </div>
                </p.PlasmicLink>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__gbBik
                  )}
                  component={Link}
                  href={`/about`}
                  platform={"nextjs"}
                  title={"About Us" as const}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__azsiY
                    )}
                  >
                    {"About Us"}
                  </div>
                </p.PlasmicLink>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__rU4Ub
                  )}
                  component={Link}
                  href={`/comics`}
                  platform={"nextjs"}
                  target={undefined}
                  title={"Comics" as const}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___1Je8Z
                    )}
                  >
                    {"Comics"}
                  </div>
                </p.PlasmicLink>
                {(
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? true
                    : true
                ) ? (
                  <p.PlasmicLink
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__zXjr
                    )}
                    component={Link}
                    href={`/newsletter`}
                    platform={"nextjs"}
                    title={"Newsletter" as const}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__r5Lic
                      )}
                    >
                      {"Newsletter"}
                    </div>
                  </p.PlasmicLink>
                ) : null}
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link___3SfGz
                  )}
                  component={Link}
                  href={`/radio`}
                  platform={"nextjs"}
                  title={"Newsletter" as const}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__sPynD
                    )}
                  >
                    {"Radio"}
                  </div>
                </p.PlasmicLink>
              </p.Stack>
              {true ? (
                <div className={classNames(projectcss.all, sty.freeBox__oiOia)}>
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
                  {true ? (
                    <Button2
                      data-plasmic-name={"button2"}
                      data-plasmic-override={overrides.button2}
                      className={classNames("__wab_instance", sty.button2)}
                      color={"clear" as const}
                      endIcon={
                        <Icon38Icon
                          className={classNames(projectcss.all, sty.svg__mrB1)}
                          role={"img"}
                        />
                      }
                      startIcon={
                        <ChecksvgIcon
                          className={classNames(projectcss.all, sty.svg__c6Ame)}
                          role={"img"}
                        />
                      }
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__ehj1N
                        )}
                      >
                        {"Log in"}
                      </div>
                    </Button2>
                  ) : null}
                </div>
              ) : null}
            </p.Stack>
          </p.Stack>
          <div
            data-plasmic-name={"columns"}
            data-plasmic-override={overrides.columns}
            className={classNames(projectcss.all, sty.columns)}
          >
            {(
              hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
            ) ? (
              <div className={classNames(projectcss.all, sty.column__xx8Y3)} />
            ) : null}
            <div className={classNames(projectcss.all, sty.column__fGjGs)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__uDkIq
                )}
              >
                {"Sign up to our Newsletter for Updates!"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__gRxdf
                )}
              >
                <React.Fragment>
                  <React.Fragment>{""}</React.Fragment>
                  {
                    <h6
                      data-plasmic-name={"h6"}
                      data-plasmic-override={overrides.h6}
                      className={classNames(
                        projectcss.all,
                        projectcss.h6,
                        projectcss.__wab_text,
                        sty.h6
                      )}
                    >
                      {""}
                    </h6>
                  }
                  <React.Fragment>{""}</React.Fragment>
                </React.Fragment>
              </div>
              <Embed
                data-plasmic-name={"embedHtml"}
                data-plasmic-override={overrides.embedHtml}
                className={classNames("__wab_instance", sty.embedHtml)}
                code={
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? ('<!-- Begin Mailchimp Signup Form -->\r\n<link href="//cdn-images.mailchimp.com/embedcode/classic-071822.css" rel="stylesheet" type="text/css">\r\n<style type="text/css">\r\n\t#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif;  width:100%;}\r\n\t/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.\r\n\t   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */\r\n</style>\r\n<div id="mc_embed_signup">\r\n    <form action="https://redpandamedia.us21.list-manage.com/subscribe/post?u=5a8108f71213626646884cfba&amp;id=407b9777fc&amp;f_id=0024dbe1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>\r\n        <div id="mc_embed_signup_scroll">\r\n        <h2>Subscribe</h2>\r\n        <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>\r\n<div class="mc-field-group">\r\n\t<label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>\r\n</label>\r\n\t<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" required>\r\n\t<span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>\r\n</div>\r\n<div class="mc-field-group">\r\n\t<label for="mce-FNAME">First Name </label>\r\n\t<input type="text" value="" name="FNAME" class="" id="mce-FNAME">\r\n\t<span id="mce-FNAME-HELPERTEXT" class="helper_text"></span>\r\n</div>\r\n<div class="mc-field-group">\r\n\t<label for="mce-LNAME">Last Name </label>\r\n\t<input type="text" value="" name="LNAME" class="" id="mce-LNAME">\r\n\t<span id="mce-LNAME-HELPERTEXT" class="helper_text"></span>\r\n</div>\r\n<div class="mc-field-group size1of2">\r\n\t<label for="mce-BIRTHDAY-month">Birthday </label>\r\n\t<div class="datefield">\r\n\t\t<span class="subfield monthfield">\r\n\t\t\t<input class="birthday " type="text" pattern="[0-9]*" value="" placeholder="MM" size="2" maxlength="2" name="BIRTHDAY[month]" id="mce-BIRTHDAY-month">\r\n\t\t</span> / \r\n\t\t<span class="subfield dayfield">\r\n\t\t\t<input class="birthday " type="text" pattern="[0-9]*" value="" placeholder="DD" size="2" maxlength="2" name="BIRTHDAY[day]" id="mce-BIRTHDAY-day">\r\n\t\t</span> \r\n\t\t<span class="small-meta nowrap">( mm / dd )</span>\r\n\t</div>\r\n\t<span id="mce-BIRTHDAY-HELPERTEXT" class="helper_text"></span>\r\n</div>\t<div id="mce-responses" class="clear foot">\r\n\t\t<div class="response" id="mce-error-response" style="display:none"></div>\r\n\t\t<div class="response" id="mce-success-response" style="display:none"></div>\r\n\t</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\r\n    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_5a8108f71213626646884cfba_407b9777fc" tabindex="-1" value=""></div>\r\n        <div class="optionalParent">\r\n            <div class="clear foot">\r\n                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">\r\n                <p class="brandingLogo"><a href="http://eepurl.com/ihNcXT" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"></a></p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n</div>\r\n<script type=\'text/javascript\' src=\'//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js\'></script><script type=\'text/javascript\'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]=\'EMAIL\';ftypes[0]=\'email\';fnames[1]=\'FNAME\';ftypes[1]=\'text\';fnames[2]=\'LNAME\';ftypes[2]=\'text\';fnames[3]=\'ADDRESS\';ftypes[3]=\'address\';fnames[4]=\'PHONE\';ftypes[4]=\'phone\';fnames[5]=\'BIRTHDAY\';ftypes[5]=\'birthday\';}(jQuery));var $mcj = jQuery.noConflict(true);</script>\r\n<!--End mc_embed_signup-->' as const)
                    : ('<!-- Begin Mailchimp Signup Form -->\r\n<link href="//cdn-images.mailchimp.com/embedcode/classic-071822.css" rel="stylesheet" type="text/css">\r\n<style type="text/css">\r\n\t#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif;  width:600px;}\r\n\t/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.\r\n\t   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */\r\n</style>\r\n<div id="mc_embed_signup">\r\n    <form action="https://redpandamedia.us21.list-manage.com/subscribe/post?u=5a8108f71213626646884cfba&amp;id=407b9777fc&amp;f_id=0024dbe1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>\r\n        <div id="mc_embed_signup_scroll">\r\n        <h2>Subscribe</h2>\r\n        <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>\r\n<div class="mc-field-group">\r\n\t<label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>\r\n</label>\r\n\t<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" required>\r\n\t<span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>\r\n</div>\r\n<div class="mc-field-group">\r\n\t<label for="mce-FNAME">First Name </label>\r\n\t<input type="text" value="" name="FNAME" class="" id="mce-FNAME">\r\n\t<span id="mce-FNAME-HELPERTEXT" class="helper_text"></span>\r\n</div>\r\n<div class="mc-field-group">\r\n\t<label for="mce-LNAME">Last Name </label>\r\n\t<input type="text" value="" name="LNAME" class="" id="mce-LNAME">\r\n\t<span id="mce-LNAME-HELPERTEXT" class="helper_text"></span>\r\n</div>\r\n<div class="mc-field-group size1of2">\r\n\t<label for="mce-BIRTHDAY-month">Birthday </label>\r\n\t<div class="datefield">\r\n\t\t<span class="subfield monthfield">\r\n\t\t\t<input class="birthday " type="text" pattern="[0-9]*" value="" placeholder="MM" size="2" maxlength="2" name="BIRTHDAY[month]" id="mce-BIRTHDAY-month">\r\n\t\t</span> / \r\n\t\t<span class="subfield dayfield">\r\n\t\t\t<input class="birthday " type="text" pattern="[0-9]*" value="" placeholder="DD" size="2" maxlength="2" name="BIRTHDAY[day]" id="mce-BIRTHDAY-day">\r\n\t\t</span> \r\n\t\t<span class="small-meta nowrap">( mm / dd )</span>\r\n\t</div>\r\n\t<span id="mce-BIRTHDAY-HELPERTEXT" class="helper_text"></span>\r\n</div>\t<div id="mce-responses" class="clear foot">\r\n\t\t<div class="response" id="mce-error-response" style="display:none"></div>\r\n\t\t<div class="response" id="mce-success-response" style="display:none"></div>\r\n\t</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\r\n    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_5a8108f71213626646884cfba_407b9777fc" tabindex="-1" value=""></div>\r\n        <div class="optionalParent">\r\n            <div class="clear foot">\r\n                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">\r\n                <p class="brandingLogo"><a href="http://eepurl.com/ihNcXT" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"></a></p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n</div>\r\n<script type=\'text/javascript\' src=\'//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js\'></script><script type=\'text/javascript\'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]=\'EMAIL\';ftypes[0]=\'email\';fnames[1]=\'FNAME\';ftypes[1]=\'text\';fnames[2]=\'LNAME\';ftypes[2]=\'text\';fnames[3]=\'ADDRESS\';ftypes[3]=\'address\';fnames[4]=\'PHONE\';ftypes[4]=\'phone\';fnames[5]=\'BIRTHDAY\';ftypes[5]=\'birthday\';}(jQuery));var $mcj = jQuery.noConflict(true);</script>\r\n<!--End mc_embed_signup-->' as const)
                }
              />
            </div>
            <div className={classNames(projectcss.all, sty.column__cn4Qb)} />
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navBar",
    "img",
    "button",
    "button2",
    "columns",
    "h6",
    "embedHtml"
  ],
  navBar: ["navBar", "img", "button", "button2"],
  img: ["img"],
  button: ["button"],
  button2: ["button2"],
  columns: ["columns", "h6", "embedHtml"],
  h6: ["h6"],
  embedHtml: ["embedHtml"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navBar: "div";
  img: typeof p.PlasmicImg;
  button: "button";
  button2: typeof Button2;
  columns: "div";
  h6: "h6";
  embedHtml: typeof Embed;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNewsletter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNewsletter__VariantsArgs;
    args?: PlasmicNewsletter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNewsletter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNewsletter__ArgsType,
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
          internalArgPropNames: PlasmicNewsletter__ArgProps,
          internalVariantPropNames: PlasmicNewsletter__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNewsletter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNewsletter";
  } else {
    func.displayName = `PlasmicNewsletter.${nodeName}`;
  }
  return func;
}

export const PlasmicNewsletter = Object.assign(
  // Top-level PlasmicNewsletter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navBar: makeNodeComponent("navBar"),
    img: makeNodeComponent("img"),
    button: makeNodeComponent("button"),
    button2: makeNodeComponent("button2"),
    columns: makeNodeComponent("columns"),
    h6: makeNodeComponent("h6"),
    embedHtml: makeNodeComponent("embedHtml"),

    // Metadata about props expected for PlasmicNewsletter
    internalVariantProps: PlasmicNewsletter__VariantProps,
    internalArgProps: PlasmicNewsletter__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Newsletter🐾",
      description:
        "~Red Panda Media~\nGames, Music, Comics\nDigital Artist Collective",
      ogImageSrc:
        "https://site-assets.plasmic.app/d58a47bfe90ae5acd650ca29bcce987f.png",
      canonical: "https://redpandamedia.net/newsletter/"
    }
  }
);

export default PlasmicNewsletter;
/* prettier-ignore-end */
