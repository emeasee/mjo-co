import React from 'react';
import 'prismjs/themes/prism.css';
import AppProvider from 'store/provider';
import wrapPageElementWithTransition from 'helpers/wrapPageElement';

const addScript = url => {
  const script = document.createElement("script")
  script.src = url
  script.async = true
  document.body.appendChild(script)
}

export const onClientEntry = () => {
  window.onload = () => {
    addScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TweenMax.min.js');
    addScript('https://cdn.rawgit.com/MAKIO135/73e5cb2c456084a9c356f9c3f89f8803/raw/3f4d08bf3c88c326702eff34bb621019b1ae5581/gfont.min.js');
  }
}

// React Context in Browser
// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>;
};

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  // transition duration from `transition.js` * 1000 to get time in ms
  const TRANSITION_DELAY = 0.3 * 1000 * 2;

  // if it's a "normal" route
  if (location.action === 'PUSH') {
    window.setTimeout(() => window.scrollTo(0, 0), TRANSITION_DELAY);
  }

  // if we used the browser's forwards or back button
  else {
    const savedPosition = getSavedScrollPosition(location);
    window.setTimeout(
      () => window.scrollTo(...(savedPosition || [0, 0])),
      TRANSITION_DELAY
    );
  }

  return false;
};

// Page Transitions
export const wrapPageElement = wrapPageElementWithTransition;
