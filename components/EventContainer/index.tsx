import { CardEventProps } from "@/app/types/type";
import React from "react";
import { CardEvent } from "../CardEvent";

interface EventContainerProps {
  data: CardEventProps[];
  title: string;
}

export const EventContainer = ({ data, title }: EventContainerProps) => {
  return (
    <>
      <h1 className="text-center mt-5 text-2xl font-bold">{title}</h1>
      <div className="flex mt-5 ml-2 mr-2 flex-wrap">
        {data.map((event) => (
          <CardEvent {...event} key={event.title} />
        ))}
      </div>
    </>
  );
};
