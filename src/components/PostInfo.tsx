import Image from "./Image";

function PostInfo() {
  return (
    <div className="cursor-pointer w-4 h-4 relative">
      <Image path="icons/infoMore.svg" alt="Info" w={16} h={16} />
    </div>
  );
}

export default PostInfo;
