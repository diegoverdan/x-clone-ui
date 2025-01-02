"use client";

import { shareAction } from "@/actions";
import NextImage from "next/image";
import React, { useState } from "react";
import Image from "./Image";
import ImageEditor from "./ImageEditor";

function Share() {
  const [media, setMedia] = useState<File | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [settings, setSettings] = useState<{
    type: "original" | "wide" | "square";
    sensitive: boolean;
  }>({
    type: "original",
    sensitive: false,
  });

  function handleMediaChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      setMedia(e.target.files[0]);
    }
  }

  const previewURL = media ? URL.createObjectURL(media) : null;

  return (
    <form
      className="p-4 flex gap-4"
      action={(formData) => shareAction(formData, settings)}
    >
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

        {/* PREVIEW IMAGE */}
        {previewURL && (
          <div className="relative rounded-xl overflow-hidden">
            <NextImage
              alt="preview"
              src={previewURL}
              width={600}
              height={600}
              className={`w-full ${
                settings.type === "original"
                  ? "h-full object-contain"
                  : settings.type === "square"
                  ? "aspect-square object-cover"
                  : "aspect-video object-cover"
              }`}
            />
            <div
              onClick={() => setIsEditorOpen(true)}
              className="absolute top-2 left-2 bg-black bg-opacity-50 text-white px-4 py-1 rounded-full font-bold text-sm cursor-pointer"
            >
              Edit
            </div>
          </div>
        )}

        {isEditorOpen && previewURL && (
          <ImageEditor
            onClose={() => setIsEditorOpen(false)}
            previewURL={previewURL}
            settings={settings}
            setSettings={setSettings}
          />
        )}

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
