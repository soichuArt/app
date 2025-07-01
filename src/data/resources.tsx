import React from "react";

// Example data for each section - you can replace with your actual resource data or fetch from your backend
const pdfs = [
  { title: "Artistry Guide", url: "/pdfs/artistry-guide.pdf" },
  { title: "Mindful Living", url: "/pdfs/mindful-living.pdf" },
];

const meditations = [
  { title: "Morning Meditation", url: "https://example.com/morning" },
  { title: "Evening Calm", url: "https://example.com/evening" },
];

const playlists = [
  { title: "Creative Flow", url: "https://open.spotify.com/creative-flow" },
  { title: "Peaceful Presence", url: "https://open.spotify.com/peaceful-presence" },
];

const guides = [
  { title: "Beginner's Guide to Rituals", url: "/pdfs/rituals.pdf" },
  { title: "Daily Presence Practices", url: "/pdfs/presence-practices.pdf" },
];

const coaches = [
  { name: "Anna Rivera", url: "/coaches/anna-rivera" },
  { name: "Liam Chen", url: "/coaches/liam-chen" },
];

const tools = [
  { name: "Breath Timer", url: "/tools/breath-timer" },
  { name: "Affirmation Generator", url: "/tools/affirmation-generator" },
];

const Section = ({ title, items, keyName = "title" }) => (
  <section className="mb-8">
    <h2 className="text-xl font-semibold mb-3">{title}</h2>
    <ul className="list-disc list-inside space-y-1">
      {items.map((item, i) =>
        <li key={i}>
          <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">
            {item.title || item.name}
          </a>
        </li>
      )}
    </ul>
  </section>
);

const Resources: React.FC = () => (
  <div className="max-w-3xl mx-auto py-10 px-4">
    <h1 className="text-3xl font-bold mb-8">Free Resources</h1>
    <Section title="PDFs" items={pdfs} />
    <Section title="Meditations" items={meditations} />
    <Section title="Playlists" items={playlists} />
    <Section title="Guides" items={guides} />
    <Section title="Coaches" items={coaches} keyName="name" />
    <Section title="Tools" items={tools} keyName="name" />
  </div>
);

export default Resources;
