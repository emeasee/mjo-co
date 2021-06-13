import { createGlobalStyle } from 'styled-components';
import * as Theme from 'constants/theme';
import MEDIA from 'helpers/mediaTemplates';

export default createGlobalStyle`
  *,
  :after,
  :before {
    box-sizing: border-box;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  html {
    font-size: ${Theme.fontSize_root};
  }

  body {
    font-family: ${Theme.fontFamily_sans};
    line-height: ${Theme.lineHeight_none};
    font-size: ${Theme.fontSize_3};
    color: #000;
    background-color: #fff;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-font-feature-settings: "pnum";
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;
  }

  hr{
    background: ${Theme.color_accent};
    height: 1px;
    border: 0;
  }

  /* Heading */

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${Theme.font_heading};
    margin-top: ${Theme.spacing_12};
    margin-bottom: ${Theme.spacing_6};
    line-height: ${Theme.lineHeight_tight};
    letter-spacing: -0.025em;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${Theme.fontWeight_normal};
    color: ${Theme.color_heading};
  }

  h1 {
    font-weight: ${Theme.fontWeight_normal};
    font-size: ${Theme.fontSize_6};
    color: ${Theme.color_heading_black};
  }

  h2 {
    font-size: ${Theme.fontSize_5};
  }

  h3 {
    font-size: ${Theme.fontSize_4};
  }

  h4 {
    font-size: ${Theme.fontSize_3};
  }

  h5 {
    font-size: ${Theme.fontSize_2};
  }

  h6 {
    font-size: ${Theme.fontSize_1};
  }

  h1 > a {
    color: inherit;
    text-decoration: none;
  }

  h2 > a,
  h3 > a,
  h4 > a,
  h5 > a,
  h6 > a {
    text-decoration: none;
    color: inherit;
  }

  /* Prose */

  p {
    line-height: ${Theme.lineHeight_normal};
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;
    margin: ${Theme.spacing_0} ${Theme.spacing_0} ${Theme.spacing_8} ${Theme.spacing_0};
    padding: ${Theme.spacing_0};
  }

  ul,
  ol {
    margin-left: ${Theme.spacing_0};
    margin-right: ${Theme.spacing_0};
    padding: ${Theme.spacing_0};
    margin-bottom: ${Theme.spacing_8};
    list-style-position: outside;
    list-style-image: none;
  }

  ul li,
  ol li {
    padding-left: ${Theme.spacing_0};
    margin-bottom: ${Theme.spacing_8 / 2};
  }

  li > p {
    margin-bottom: ${Theme.spacing_8 / 2};
  }

  li *:last-child {
    margin-bottom: ${Theme.spacing_0};
  }

  li > ul {
    margin-left: ${Theme.spacing_8};
    margin-top: ${Theme.spacing_8 / 2};
  }

  blockquote {
    color: ${Theme.color_text_light};
    margin-left: ${-1 * Theme.spacing_6};
    margin-right: ${Theme.spacing_8};
    padding: ${Theme.spacing_0} ${Theme.spacing_0} ${Theme.spacing_0} ${Theme.spacing_6};
    border-left: ${Theme.spacing_1} solid ${Theme.color_primary};
    font-size: ${Theme.fontSize_2};
    font-style: italic;
    margin-bottom: ${Theme.spacing_8};
  }

  blockquote > :last-child {
    margin-bottom: ${Theme.spacing_0};
  }

  blockquote > ul,
  blockquote > ol {
    list-style-position: inside;
  }

  ${MEDIA.TABLET`
    blockquote {
      padding: ${Theme.spacing_0} ${Theme.spacing_0} ${Theme.spacing_0} ${Theme.spacing_4};
      margin-left: ${Theme.spacing_0};
    }
    ul,
    ol {
      list-style-position: inside;
    }
  `};

  table {
    width: 100%;
    margin-bottom: ${Theme.spacing_8};
    border-collapse: collapse;
    border-spacing: 0.25rem;
  }

  table thead tr th {
    border-bottom: 1px solid ${Theme.color_accent};
  }

  table tr {
    margin: ${Theme.spacing_6}
  }

  a {
    color: ${Theme.color_accent};
  }

  a:hover,
  a:focus {
    text-decoration: none;
  }

  pre {
    display: block;
    padding: ${Theme.spacing_8};
    margin-top: 4rem;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    border-radius: 5px;
    color: ${Theme.color_accent};
    border: 1px solid #ddd;
    font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;
  }

  video {
    max-width: 100%;
  }
`;
