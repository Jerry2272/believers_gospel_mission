import React, { useState } from "react";
import { Hero_section_component } from "../../components/Hero_section_component";
import hero_banner from "../../assets/upcoming-event.jpg"
import event1 from "../../assets/upcoming-event.jpg";
import event2 from "../../assets/upcoming-event.jpg";
import event3 from "../../assets/upcoming-event.jpg";
import event4 from "../../assets/upcoming-event.jpg";

export const Event: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const events = [
    {
      id: 1,
      title: "Annual Believers Convention",
      date: "December 5th - 8th, 2025",
      location: "BGM Headquarters, Port Harcourt, Nigeria",
      description:
        "Our yearly gathering of believers across the globe to worship, pray, and receive the Word with power. Experience divine transformation and fellowship like never before!",
      img: event1,
    },
    {
      id: 2,
      title: "Monthly Prayer Retreat",
      date: "Every First Saturday of the Month",
      location: "All BGM Centers Nationwide",
      description:
        "A time of intense intercession and worship, seeking revival and breakthroughs for individuals, families, and the nation.",
      img: event2,
    },
    {
      id: 3,
      title: "Youth Fire Conference",
      date: "August 10th - 12th, 2025",
      location: "BGM Youth Camp, Lagos, Nigeria",
      description:
        "A dynamic conference for young believers to be equipped and empowered to live for Christ in their generation.",
      img: event3,
    },
    {
      id: 4,
      title: "Christmas Carol & Outreach",
      date: "December 22nd, 2025",
      location: "BGM Main Auditorium",
      description:
        "Join us as we celebrate the birth of Christ with hymns, drama, and charity outreaches to communities in need.",
      img: event4,
    },
    {
      id: 5,
      title: "Christmas Carol & Outreach",
      date: "December 22nd, 2025",
      location: "BGM Main Auditorium",
      description:
        "Join us as we celebrate the birth of Christ with hymns, drama, and charity outreaches to communities in need.",
      img: event4,
    },
    {
      id: 6,
      title: "Christmas Carol & Outreach",
      date: "December 22nd, 2025",
      location: "BGM Main Auditorium",
      description:
        "Join us as we celebrate the birth of Christ with hymns, drama, and charity outreaches to communities in need.",
      img: event4,
    },
  ];

  return (
    <>
      <Hero_section_component
        title="UPCOMING EVENTS"
        hero_banner={hero_banner}
        description="Stay informed about our upcoming programs and gatherings that strengthen faith and build fellowship."
        className="h-[80vh]"
      />

      <section className="py-20 bg-white sm:py-24 lg:py-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#e41e26]">Church Events</h2>
          <p className="text-[#050505] mt-3 max-w-xl mx-auto">
            Don’t miss out on what’s happening at Believers Gospel Mission — join us in worship, learning, and impact.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6 placeholder-orange-50 lg:pl-0">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl overflow-hidden   transition"
            >
              <div className="h-56">
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="p-6 pl-0">
                <h3 className="text-xl font-semibold text-[#e41e26] mb-2">
                  {event.title}
                </h3>
                <p className="text-[#050505] text-sm mb-2">{event.date}</p>
                <p className="text-[#1e5254] text-sm mb-2">{event.location}</p>
                <p className="text-[#050505] text-sm mb-1 mt-3 line-clamp-3">
                  {event.description}
                </p>
                <button
                  onClick={() => setSelectedEvent(event)}
                  className="mt-5 border-l border-b border-[#e41e26] text-[#050505] px-3 py-1   transition-colors"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal Section */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-8 relative shadow-xl">
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-3 right-3 text-[#050505] hover:text-gray-800 text-2xl font-bold"
            >
              &times;
            </button>

            <div className="mb-4 h-56 overflow-hidden rounded-lg">
              <img
                src={selectedEvent.img}
                alt={selectedEvent.title}
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-[#050505] mb-3">
              {selectedEvent.title}
            </h2>
            <p className="text-sm text-[#050505] mb-1">
              <strong>Date:</strong> {selectedEvent.date}
            </p>
            <p className="text-sm text-[#050505] mb-4">
              <strong>Location:</strong> {selectedEvent.location}
            </p>
            <p className="text-[#050505] leading-relaxed">{selectedEvent.description}</p>

            <div className="mt-6 text-right">
              <button
                onClick={() => setSelectedEvent(null)}
                className="bg-[#e41e26] text-white px-5 py-2 rounded-lg hover:bg-red-800 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
