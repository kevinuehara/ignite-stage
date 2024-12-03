import { EventContainer } from "@/components/EventContainer";
import { Header } from "@/components/Header";
import { Events2024 } from "@/events/event-2024";
import { Events2025 } from "@/events/event-2025";
export default function Home() {
  return (
    <>
      <Header />

      <EventContainer title="December 2024" data={Events2024.DECEMBER} />
      <EventContainer title="January 2025" data={Events2025.JANUARY} />
      <EventContainer title="February 2025" data={Events2025.FEBRUARY} />

      <footer className="flex justify-center flex-col items-center">
        <div className="flex flex-row items-center md:justify-start justify-center w-screen h-20 mt-5 bg-gradient-to-t from-violet-600 to-purple-900">
          <div className="flex flex-col text-center md:text-start">
            <p className="mt-2 md:ml-5 ml-0">
              Created by Kevin Uehara and Community 2025
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
