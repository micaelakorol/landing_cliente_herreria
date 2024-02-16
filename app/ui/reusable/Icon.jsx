import React from "react";

import Image from "next/image";

const Icon = ({ alt, src, className, width, height }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default Icon;
