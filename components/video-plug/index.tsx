export default function VideoPlug({ userPicture }: { userPicture: string }) {
  return (
    <div className="w-96 aspect-video relative">
      <img
        className="rounded-[12px] absolute top-0 left-0 w-full h-full object-cover"
        src={
          userPicture ||
          'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI='
        }
        alt="User image"
      />
      <div className="rounded-[12px] bg-black/10 border border-gray-500 backdrop-blur-2xl absolute top-0 left-0 w-full h-full" />
      <img
        className="w-24 h-24 rounded-full absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
        src={
          userPicture ||
          'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI='
        }
        alt="User image"
      />
    </div>
  );
}
