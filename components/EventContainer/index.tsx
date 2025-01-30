import { CardEventProps } from "@/app/types/type";
import React from "react";
import { CardEvent } from "../CardEvent";

interface EventContainerProps {
  data: CardEventProps[];
  title: string;
}

export const EventContainer = ({ data, title }: EventContainerProps) => {
  return (
    <section className="m-auto max-w-[1096px] w-full flex-1">
      <h2 className="mt-5 text-2xl  font-bold">{title}</h2>
      <div className="flex mt-5 gap-2 flex-wrap">
        {data.map((event) => (
          <CardEvent {...event} key={event.title} />
        ))}
      </div>
    </section>
  );
};
