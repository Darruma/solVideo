import { createContext, useState } from 'react';

import Room from '@app/index';
import { Lobby } from '@components/index';
import { useMediaStream } from '@hooks/index';
import { NextPage, GetServerSidePropsContext, PreviewData } from 'next';

import { LoaderError } from '@common/components';
import { FAILURE_MSG, LOADER_STREAM_MSG } from '@common/constants';
import { useWallet } from '@solana/wallet-adapter-react';
import Link from 'next/link';

export const QoraContext = createContext<any>({});

const Qora: NextPage = () => {
  const { wallet } = useWallet();
  const [isLobby, setIsLobby] = useState(true);
  const { stream, isLoading } = useMediaStream();

  if (isLoading) return <LoaderError msg={LOADER_STREAM_MSG} />;
  if (!stream) return <LoaderError msg={FAILURE_MSG} />;

  if (!wallet)
    return (
      <div
        className="flex flex-col items-center justify-center h-screen w-screen bg-gray-900 text-white text-4xl"
        onClick={() => {
          window.location.href = '/';
        }}
      >
        <LoaderError msg="Go back to the home page and connect your wallet"></LoaderError>
      </div>
    );

  if (isLobby)
    return <Lobby stream={stream} onJoinRoom={() => setIsLobby(false)} />;

  return <Room stream={stream} />;
};

export default Qora;
