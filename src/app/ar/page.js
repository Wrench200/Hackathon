"use client"
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Script from "next/script";

export default function ARPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Indicate that the component has mounted on the client
    setIsClient(true);
  }, []);

  return (
    <>
      <Head>
        <title>AR Image Recognition</title>
        <style>{`
                    body { margin: 0; overflow: hidden; }
                `}</style>
      </Head>
      <Script
        src="https://aframe.io/releases/1.2.0/aframe.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://rawgit.com/jeromeetienne/ar.js/master/aframe/build/aframe-ar.js"
        strategy="beforeInteractive"
      />

      {isClient && (
        <a-scene embedded arjs>
          <a-box position="0 0.5 -1" material="color: yellow;"></a-box>
          <a-marker preset="hiro">
            <a-box position="0 0.5 0" material="color: blue;"></a-box>
          </a-marker>
          <a-entity camera></a-entity>
        </a-scene>
      )}
    </>
  );
}
