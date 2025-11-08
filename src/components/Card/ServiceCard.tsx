"use client";

import { useEffect, useState } from "react";
import type { MouseEvent } from "react";

function ServiceCardEnter(e: MouseEvent<HTMLDivElement>): void {
  const card = e.currentTarget;
  card.classList.add("hover");
}

function ServiceCardLeave(e: MouseEvent<HTMLDivElement>): void {
  const card = e.currentTarget;
  card.classList.remove("hover");
}

const services = [
  {
    title: "Front End",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam adipisci vel error magnam quam modi natus eveniet minus ea deleniti sunt dignissimos non pariatur neque dolorem tenetur ratione illum a.",
    "box-icon": "bx bxs-palette",
  },
  {
    title: "Back End",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam adipisci vel error magnam quam modi natus eveniet minus ea deleniti sunt dignissimos non pariatur neque dolorem tenetur ratione illum a.",
    "box-icon": "bx bx-git-compare",
  },
  {
    title: "VPS Management",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam adipisci vel error magnam quam modi natus eveniet minus ea deleniti sunt dignissimos non pariatur neque dolorem tenetur ratione illum a.",
    "box-icon": "bx bx-server",
  },
];

export const ServiceCard = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center align-center mb-30 gap-10">
      {services.map((idx, key) => (
        <div
          className="service-card w-[25vw] shadow-lg backdrop-blur p-5 rounded-xl flex flex-col"
          key={key}
          onMouseEnter={ServiceCardEnter}
          onMouseLeave={ServiceCardLeave}
        >
          <div className="service-title font-(family-name:--font-dm-serif-display) mb-3 flex flex-col gap-10">
            <i
              className={
                idx["box-icon"] + " bx-lg text-(--secondary) text-shadow-lg"
              }
            ></i>
            <h3 className="text-shadow-2xs text-shadow-[#b17457] m-0">
              {idx.title}
            </h3>
          </div>
          <div className="service-description text-justify text-stone-400">
            {idx.description}
          </div>
        </div>
      ))}
    </div>
  );
};
