import { VideoCameraIcon, MicrophoneIcon } from '@heroicons/react/solid';
import { useMediaStream } from '@hooks/index';
import Tooltip from 'react-tooltip';

import { CrossLineDiv } from '@common/components';
import { MYSELF } from '@common/constants';

import { PeerVideo, VideoContainer } from '..';

export default function Lobby({
  stream,
  onJoinRoom,
}: {
  stream: MediaStream;
  onJoinRoom: () => void;
}) {
  const { muted, visible, toggle, toggleVideo } = useMediaStream(stream);

  return (
    <div className="h-screen w-auto md:grid md:grid-cols-2 md:gap-4 md:place-content-center md:place-items-center flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="text-white text-2xl underline">Lobby</div>
        <VideoContainer
          id="me"
          muted={muted}
          visible={visible}
          stream={stream}
          userPicture={
            'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI='
          }
        >
          <PeerVideo key="me" stream={stream} name={MYSELF} isMe={true} />
        </VideoContainer>

        <div className="flex justify-end gap-2">
          <button
            onClick={toggleVideo}
            data-for="visibility"
            data-tip={`${!visible ? 'switch on' : 'switch off'}`}
            className="p-3 rounded-xl text-white bg-slate-800 hover:bg-indigo-700 relative"
          >
            <VideoCameraIcon className="h-6 w-6" />
            {!visible && <CrossLineDiv />}
          </button>
          <Tooltip id="visibility" effect="solid" />

          <button
            onClick={() => toggle('audio')(stream)}
            data-for="audio"
            data-tip={`${muted ? 'unmute' : 'mute'}`}
            className="p-3 rounded-xl text-white bg-slate-800 hover:bg-indigo-700 relative"
          >
            <MicrophoneIcon className="h-6 w-6" />
            {muted && <CrossLineDiv />}
          </button>
          <Tooltip id="audio" effect="solid" />
        </div>
      </div>

      <button
        onClick={onJoinRoom}
        type="button"
        className="p-2 text-sm font-medium rounded-md text-emerald-800 bg-emerald-300 hover:bg-indigo-200"
      >
        Join room
      </button>
    </div>
  );
}
