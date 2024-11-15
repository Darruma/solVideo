import { useState } from 'react';

import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { ROOM_NAME } from 'common/constants';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import { createRoomId, createHost } from '@common/utils';

import { Header, WelcomeContainer } from '../components';

const Home: NextPage = () => {
  const router = useRouter();
  const [roomId, setRoomId] = useState('');
  const { connected } = useWallet();
  function createRoom() {
    const roomId = createRoomId();

    createHost(roomId);
    router.push(`/${ROOM_NAME}/${roomId}`);
  }

  function joinRoom() {
    router.push(`/${ROOM_NAME}/${roomId}`);
  }

  return (
    <>
      <Header />

      <WelcomeContainer>
        {connected && (
          <>
            <button
              onClick={createRoom}
              className="p-3 bg-emerald-300 hover:bg-indigo-200 rounded-md text-emerald-800 text-sm founded-medium"
            >
              Create Room
            </button>

            <input
              onChange={(e: any) => setRoomId(e.target.value)}
              placeholder="Enter or paste room id"
              className="px-4 py-1 w-80 rounded-md"
            />

            <button
              onClick={joinRoom}
              disabled={roomId.length == 0}
              className="p-3 bg-emerald-500 hover:bg-indigo-300 rounded-md text-emerald-800 text-sm founded-medium disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Join
            </button>
          </>
        )}
        {!connected && (
          <WalletMultiButton>
            Connect your Solana Wallet to use Sol Meet
          </WalletMultiButton>
        )}
      </WelcomeContainer>
    </>
  );
};

export default Home;
