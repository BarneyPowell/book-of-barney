import React, { useState } from "react";

export default function LazyImage ({ alt, src }) {
    const [imageLoaded, setImageLoaded] = useState(false);

    const styles = {
      lqip: {
        filter: "blur(10px)",
      },
    };

    // Hide preview when image has loaded.
    if (imageLoaded) {
      styles.lqip.opacity = 0;
    }

    return (
      <div className="relative">
        <img
          className="absolute top-0 left-0 z-10 w-full transition-opacity duration-500 ease-in opacity-100"
          src={require(`../../../../content/assets/${src}?lqip`)}
          alt={alt}
          style={styles.lqip}
        />

        <img
          className="w-full"
          src={require(`../../../../content/assets/${src}`)}
          alt={alt}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
    );
  };
