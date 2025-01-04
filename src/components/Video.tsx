"use client";

import { IKVideo } from "imagekitio-next";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

type VideoType = {
  path: string;
  className?: string;
  controls?: boolean;
};

function Video({ path, className, controls }: VideoType) {
  return (
    <IKVideo
      className={className}
      urlEndpoint={urlEndpoint}
      path={path}
      controls={controls}
      transformation={[{ width: "1920", height: "1080", q: "90" }]}
    />
  );
}

export default Video;
