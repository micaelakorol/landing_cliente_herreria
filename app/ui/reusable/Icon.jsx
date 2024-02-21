import React from "react";

import Image from "next/image";

const Icon = ({ alt, src, className, width, height, sizes }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      sizes={sizes}
    />
  );
};

export default Icon;
