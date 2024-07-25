import React, { lazy, Suspense } from 'react';

const LazyParticleRingBackground = lazy(() => import('./ParticleRingBackground'));

const ParticleRingBackground = props => (
  <Suspense fallback={null}>
    <LazyParticleRingBackground {...props} />
  </Suspense>
);

export default ParticleRingBackground;
