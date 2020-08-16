import React from "react";

export default function Image ({ alt, src }) {

    return (
      <div className="relative">
        <img
          className="w-full"
          src={require(`../../../../content/assets/${src}`)}
          alt={alt}
        />
      </div>
    );
  };
