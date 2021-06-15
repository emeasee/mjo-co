import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import AppProvider from 'store/provider';
import wrapPageElementWithTransition from 'helpers/wrapPageElement';

export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  // React Context in SSR/build
  const ConnectedBody = () => <AppProvider>{bodyComponent}</AppProvider>;
  replaceBodyHTMLString(renderToString(<ConnectedBody />));

  // Add styled-components in SSR/build
  const sheet = new ServerStyleSheet();
  const bodyHTML = renderToString(sheet.collectStyles(<ConnectedBody />));
  const styleElement = sheet.getStyleElement();
  setHeadComponents(styleElement);
};

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script 
      key="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TweenMax.min.js"
      src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TweenMax.min.js"
    />,
    <script 
      key="https://cdn.rawgit.com/MAKIO135/73e5cb2c456084a9c356f9c3f89f8803/raw/3f4d08bf3c88c326702eff34bb621019b1ae5581/gfont.min.js"
      src="https://cdn.rawgit.com/MAKIO135/73e5cb2c456084a9c356f9c3f89f8803/raw/3f4d08bf3c88c326702eff34bb621019b1ae5581/gfont.min.js"
    />
  ]);
}

// Page Transitions
export const wrapPageElement = wrapPageElementWithTransition;
