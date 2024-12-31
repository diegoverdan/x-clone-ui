"use client";

import { IKImage } from "imagekitio-next";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

type ImageType = {
  path: string;
  w?: number;
  h?: number;
  alt: string;
  className?: string;
};

function Image({ path, w, h, alt, className }: ImageType) {
  return (
    <IKImage
      className={className}
      urlEndpoint={urlEndpoint}
      path={path}
      width={w}
      height={h}
      alt={alt}
    />
  );
}

export default Image;
