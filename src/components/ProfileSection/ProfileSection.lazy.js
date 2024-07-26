import React, { lazy, Suspense } from 'react';

const LazyProfileSection = lazy(() => import('./ProfileSection'));

const ProfileSection = props => (
  <Suspense fallback={null}>
    <LazyProfileSection {...props} />
  </Suspense>
);

export default ProfileSection;
