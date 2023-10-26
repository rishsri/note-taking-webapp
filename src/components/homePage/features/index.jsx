import React from "react";

const featuresData = [
  {
    id: 1,
    icon: "https://webstockreview.net/images/chat-icon-png-10.png",
    title: "Simple Todo Lists",
    description: "Easily create todo lists to organize your tasks and to-dos."
  },
  {
    id: 2,
    icon: "https://clipground.com/images/date-logo-clipart-3.png",
    title: "Due Dates",
    description: "Set due dates for your tasks to better schedule and prioritize."
  },
  {
    id: 3,
    icon: "https://static.vecteezy.com/system/resources/previews/000/442/359/original/notification-vector-icon.jpg",
    title: "Notifications",
    description: "Get reminders and notifications to stay on top of upcoming due dates."
  },
  {
    id: 4,
    icon: "https://pluspng.com/img-png/png-tag-big-image-png-2400.png",
    title: "Tagging",
    description: "Organize and filter tasks using tags and categories."
  },
  {
    id: 5,
    icon: "https://api.icons8.com/download/4419d1ec1dca6b200e6fb61ddefbe620131d2b66/iOS7/PNG/512/Very_Basic/search-512.png",
    title: "Search",
    description: "Quickly find tasks and to-dos with full-text search."
  },
  {
    id: 6,
    icon: "https://icon-library.com/images/sharing-icon-png/sharing-icon-png-0.jpg",
    title: "Collaboration",
    description: "Share todo lists for seamless collaboration."
  }
];

const Features = () => {
  return (
    <section className="bg-alice-blue p-8">
      <div className="flex justify-center">
        <h2 className="text-5xl font-bold text-gray-800">Features</h2>
      </div>

      <div className="flex flex-wrap mt-8">
        {featuresData.map((feature) => (
          <div key={feature.id} className="w-full md:w-1/3 p-4">
            <div className="bg-white rounded shadow p-6">
              <img src={feature.icon} alt={feature.title} className="w-8 h-8 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
