"use client";

import { CardEventProps } from "@/app/types/type";
import { PillTag } from "../TagPill";

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
  return (
    <div className="bg-violet-900 p-2 rounded-md w-64 mr-3 mt-2 flex-col flex justify-between">
      {imageUrl && (
        <img
          src={imageUrl}
          className="object-fill w-full h-36"
          alt={`${title} event`}
        />
      )}
      <p className="font-bold mt-2 text-center">{title}</p>
      {country && (
        <p className="ml-2 mt-2">
          <span className="font-bold">Country:</span> {country}
        </p>
      )}
      {state && (
        <p className="ml-2">
          <span className="font-bold">State:</span> {state}
        </p>
      )}
      {city && (
        <p className="ml-2">
          <span className="font-bold">City:</span> {city}
        </p>
      )}

      <p className="ml-2">Days: {days}</p>
      <p className="ml-2">Format: {format}</p>
      <div className="flex flex-col w-full">
        <div className="flex mt-2 flex-wrap">
          {tags &&
            tags.length &&
            tags.map((tag) => <PillTag text={tag} key={`${title}-${tag}`} />)}
        </div>

        {callForPapersUrl && (
          <button
            onClick={() => window.open(callForPapersUrl, "_blank")}
            className="bg-violet-500 hover:bg-violet-700 w-full text-white font-bold py-2 px-4 rounded mt-2"
          >
            Call for Papers
          </button>
        )}
        <button
          onClick={() => window.open(eventUrl, "_blank")}
          className="bg-violet-500 hover:bg-violet-700 w-full text-white font-bold py-2 px-4 rounded mt-2"
        >
          Event
        </button>
      </div>
    </div>
  );
};
