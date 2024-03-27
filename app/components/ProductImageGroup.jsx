"use client";
import Image from "next/image";
import { useState } from "react";

export default function ProductImageGroup({ images }) {
  const [cover, setCover] = useState(images[0]);

  return (
    <div className="w-full lg:w-7/12 border border-slate-500/20 p-4">
      <Image
        src={cover}
        className="w-[400px] h-[500px] mx-auto object-cover"
        alt="product"
        width={1000}
        height={600}
      />

      <div className="flex gap-4 mt-4 overflow-x-scroll">
        {images.map((img, index) => (
          <Image
            key={index}
            src={images[index]}
            className="w-[100px] h-[100px] mx-auto border object-cover cursor-pointer"
            alt="product"
            width={200}
            height={20}
            onClick={() => setCover(images[index])}
          />
        ))}
      </div>
    </div>
  );
}
