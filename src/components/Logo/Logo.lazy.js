import React, { lazy, Suspense } from 'react';

const LazyLogo = lazy(() => import('./Logo'));

const Logo = props => (
  <Suspense fallback={null}>
    <LazyLogo {...props} />
  </Suspense>
);

export default Logo;
