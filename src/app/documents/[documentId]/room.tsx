"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { useParams } from "next/navigation";

export function Room({ children }: { children: ReactNode }) {
    const params=useParams();

  return (
    <LiveblocksProvider publicApiKey={"pk_dev_ja5FONcanH8mSy_pekXj6WiV16fst3KiJkr_vaVLHjsFl4KRcu6Al-31r_ciUo1m"}>
      <RoomProvider id={params.documentId as string}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}