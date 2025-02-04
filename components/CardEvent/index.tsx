"use client";

import { CardEventProps } from "@/app/types/type";
import { PillTag } from "../TagPill";
import { RxOpenInNewWindow } from "react-icons/rx";
import { MdCoPresent } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

export const CardEvent = ({
  title,
  days,
  country,
  state,
  city,
  callForPapersUrl,
  imageUrl,
  format,
  eventUrl,
  tags,
}: CardEventProps) => {
  const location = [city, state, country].filter(Boolean);
  return (
    <div className="card  shadow-lg overflow-hidden rounded-lg w-64 mr-3 mt-2 flex-col flex justify-between">
      {imageUrl && (
        <img
          src={imageUrl}
          className="object-fill w-full h-36"
          alt={`${title} event`}
        />
      )}
      <div className="containerData">{days}</div>
      <div className="p-4 w-100">
        <p className="font-bold mt-2 text-center">{title}</p>
        <p className="text-center mt-2 text-xs uppercase flex justify-center align-center gap-2">
          {!!location.length && <FaMapMarkerAlt />}
          {location.join(" - ")}
        </p>
        <p className="text-center mt-2 text-xs">
          <span className="font-bold ">{format}</span>
        </p>
        <div className="flex flex-col w-full items-center justify-center">
          <div className="flex mt-2 flex-wrap">
            {tags &&
              tags.length &&
              tags.map((tag) => <PillTag text={tag} key={`${title}-${tag}`} />)}
          </div>
        </div>
        {callForPapersUrl && (
          <button
            onClick={() => window.open(callForPapersUrl, "_blank")}
            className="bg-violet-500 hover:bg-violet-700 w-full text-white font-bold py-2 px-4 rounded mt-2 flex justify-center gap-3 items-center"
          >
            <MdCoPresent />
            Call for Papers
          </button>
        )}
        <button
          onClick={() => window.open(eventUrl, "_blank")}
          className="bg-emerald-200 hover:brightness-90 transition-all w-full text-emerald-950 py-2 px-4 rounded mt-2 flex justify-center gap-3 items-center"
        >
          <RxOpenInNewWindow />
          See more
        </button>
      </div>
    </div>
  );
};
