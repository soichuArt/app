import React from "react";

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

const consciousEvents = [
  { title: "Art as Ritual - Monthly Gathering", url: "/events/art-as-ritual" },
  { title: "Conscious Movement Workshop", url: "/events/conscious-movement" },
];

const books = [
  { title: "The Art Spirit by Robert Henri", url: "https://www.goodreads.com/book/show/132721.The_Art_Spirit" },
  { title: "Waking Up by Sam Harris", url: "https://www.goodreads.com/book/show/18774981-waking-up" },
];

const videos = [
  { title: "The Creative Brain (Netflix)", url: "https://www.netflix.com/title/81090166" },
  { title: "Becoming Nobody (Documentary)", url: "https://becomingnobody.com/" },
];

const podcasts = [
  { title: "On Being with Krista Tippett", url: "https://onbeing.org/series/podcast/" },
  { title: "The Tim Ferriss Show", url: "https://tim.blog/podcast/" },
];

const Section = ({ title, items }) => (
  <section className="mb-8">
    <h2 className="text-xl font-semibold mb-3">{title}</h2>
    <ul className="list-disc list-inside space-y-1">
      {items.map((item, i) =>
        <li key={i}>
          <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">
            {item.title}
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
    <Section title="Conscious Events" items={consciousEvents} />
    <Section title="Books" items={books} />
    <Section title="Videos & Movies" items={videos} />
    <Section title="Podcasts" items={podcasts} />
  </div>
);

export default Resources;
