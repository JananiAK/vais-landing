import React, { lazy, Suspense } from 'react';

const LazyChatFooter = lazy(() => import('./ChatFooter'));

const ChatFooter = props => (
  <Suspense fallback={null}>
    <LazyChatFooter {...props} />
  </Suspense>
);

export default ChatFooter;
