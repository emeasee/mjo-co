import React from 'react';
import loadable from '@loadable/component';

export const loadableP5 = loadable(() => import('react-p5-wrapper'), {
  fallback: <div>Loading...</div>,
});
