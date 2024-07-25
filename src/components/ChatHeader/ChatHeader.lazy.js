import React, { lazy, Suspense } from 'react';

const LazyChatHeader = lazy(() => import('./ChatHeader'));

const ChatHeader = props => (
  <Suspense fallback={null}>
    <LazyChatHeader {...props} />
  </Suspense>
);

export default ChatHeader;
