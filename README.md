# Ignite Stage

Ignite State is a platform for listing events and speakers from around the world. Find your next event or help the community by contributing with events in the repository.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

To contribute to events, simply access the `events/` directory and add the event to the respective file based on the year. The files respect an array of objects (representing the month) with a list of events.

For example, if I want to add some 2025 event, just access the file `events/event-2025.ts` and add the following data as example:

```typescript
 FEBRUARY: [
    {
      title: "Unhacked International CyberSecurity",
      days: "10-12",
      country: "Austria",
      state: "Vienna",
      callForPapersUrl:
        "https://momentera.org/conferences/unhacked-conference/abstract.php",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD44T7MPbrAoFR6Af-ULFzrHsXKIpU7b4iOA&s",
      format: "Online",
      eventUrl: "https://momentera.org/conferences/unhacked-conference/",
      tags: ["networking"],
    },
  ],
```

## Contribution

The project is completely open source and open to the community to keep the events alive. To start a contribution, simply `Fork` the project and open a PR for the repository.
Or if you encounter a problem, open an issue and it will be responded to shortly.
The author of the project is Kevin Uehara and you can call him if you need it.
