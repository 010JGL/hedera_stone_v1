"use client";

import React from "react";
import ReactPlayer from 'react-player'

export default function VideoPlayer(props) {
  const currentUrl = props.url.url;
  const currentHeight = props.url.height;
  const currentWidth = props.url.width;
  console.log(`props:`, props)
  return (
    <div>
      <>
        <ReactPlayer url={currentUrl} width={currentWidth} height={currentHeight} />
      </>
    </div>
  );
}
