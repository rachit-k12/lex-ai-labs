'use client';

import {
  QueryClient,
  QueryClientProvider,
  defaultShouldDehydrateQuery,
} from '@tanstack/react-query';
import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

type ProvidersProps = {
  children: React.ReactNode;
  session: Session | null;
};

export default function Providers({ children, session }: ProvidersProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      dehydrate: {
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) || query.state.status === 'pending',
      },
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        staleTime: 5 * 60 * 1000,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>{children}</SessionProvider>
    </QueryClientProvider>
  );
}
