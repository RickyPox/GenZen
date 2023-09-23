import React from 'react';

export default function ArtworkModal({ isOpen, onClose, imgmodalsrc }:any) {

  return (
      <div className={` ${isOpen === true ? "opacity-1 pointer-events-auto" : "opacity-0 pointer-events-none"} absolute flex justify-center items-center w-screen h-screen cursor-pointer backdrop-blur-[100px] z-[90] transition-all duration-200`} onClick={onClose}>
          <img src={imgmodalsrc} alt="Artwork" />
      </div>
  );
} 