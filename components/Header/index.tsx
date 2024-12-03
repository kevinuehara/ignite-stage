export const Header = () => {
  return (
    <header className="flex justify-center flex-col items-center">
      <div className="flex flex-row items-center md:justify-start justify-center w-screen h-28 bg-gradient-to-t from-violet-600 to-purple-900">
        <div className="flex flex-col text-center md:text-start">
          <h1 className="text-3xl md:ml-5 ml-0">Ignite Stage</h1>
          <p className="mt-2 md:ml-5 ml-0">Platform for events and speakers</p>
        </div>
      </div>
    </header>
  );
};
