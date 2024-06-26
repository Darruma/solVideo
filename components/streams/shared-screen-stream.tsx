import { useContext } from 'react';

import SharedScreen from '@components/shared-screen';
import { UsersStateContext } from 'contexts/users-settings';

import { Nullable } from '@common/types';


export default function SharedScreenStream({
  sharedScreen,
  fullscreen,
}: {
  sharedScreen: Nullable<MediaStreamTrack>;
  fullscreen: boolean;
}) {
  const { sharedScreenTrack } = useContext(UsersStateContext);
  const screenTrack = sharedScreen ?? sharedScreenTrack;

  return screenTrack ? (
    <div
      className={`flex justify-center ${
        fullscreen ? 'basis-6/6' : 'basis-5/6'
      }`}
    >
      <SharedScreen sharedScreenTrack={screenTrack} />
    </div>
  ) : null;
}
