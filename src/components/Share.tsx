"use client";

import { shareAction } from "@/actions";
import React, { useState } from "react";
import Image from "./Image";

function Share() {
  const [media, setMedia] = useState<File | null>(null);

  function handleMediaChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      setMedia(e.target.files[0]);
    }
  }

  const previewURL = media ? URL.createObjectURL(media) : null;

  return (
    <form className="p-4 flex gap-4" action={shareAction}>
      {/* AVATAR */}
      <div className="relative w-10 h-10 rounded-full overflow-hidden">
        <Image path="general/avatar.png" alt="" w={100} h={100} tr={true} />
      </div>

      {/* OTHERS */}
      <div className="flex-1 flex flex-col gap-4">
        <input
          className="bg-transparent outline-none placeholder:text-textGray text-xl"
          type="text"
          name="desc"
          placeholder="What is happening?"
        />
        <div className="flex justify-between items-center gap-4 flex-wrap">
          {/* ICONS */}
          <div className="flex gap-4 flex-wrap">
            <input
              className="hidden"
              id="file"
              name="file"
              type="file"
              onChange={handleMediaChange}
            />
            <label htmlFor="file">
              <Image
                path="icons/image.svg"
                alt=""
                w={20}
                h={20}
                className="cursor-pointer"
              />
            </label>
            <Image
              path="icons/gif.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="icons/poll.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="icons/emoji.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="icons/schedule.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="icons/location.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
          </div>

          {/* BUTTON */}
          <button className="bg-white text-black font-bold px-4 py-2 rounded-full">
            Post
          </button>
        </div>
      </div>
    </form>
  );
}

export default Share;
