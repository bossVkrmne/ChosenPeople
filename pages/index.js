import { useState, useEffect } from "react";

const featuredPeople = [
  {
    name: "Александр",
    photo: "https://i.pravatar.cc/150?img=1",
    socials: {
      instagram: "https://instagram.com/alexander",
      telegram: "https://t.me/alexander",
    },
  },
  {
    name: "Марина",
    photo: "https://i.pravatar.cc/150?img=2",
    socials: {
      instagram: "https://instagram.com/marina",
      telegram: "https://t.me/marina",
    },
  },
  {
    name: "Дмитрий",
    photo: "https://i.pravatar.cc/150?img=3",
    socials: {
      instagram: "https://instagram.com/dmitry",
      telegram: "https://t.me/dmitry",
    },
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredPeople.length);
    }, 3000); // меняем каждые 3 секунды

    return () => clearInterval(interval);
  }, []);

  const person = featuredPeople[currentIndex];

  return (
    <div style={{ fontFamily: "sans-serif", padding: 20 }}>
      <h1 style={{ textAlign: "center" }}>ChosenPeople</h1>

      <div
        style={{
          margin: "30px auto",
          width: 200,
          textAlign: "center",
          borderRadius: 12,
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          padding: 15,
          background: "#fff",
        }}
      >
        <img
          src={person.photo}
          alt={person.name}
          style={{ width: 150, height: 150, borderRadius: "50%" }}
        />
        <h3>{person.name}</h3>
        <div style={{ display: "flex", justifyContent: "center", gap: 15 }}>
          <a
            href={person.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#E1306C", fontWeight: "bold" }}
          >
            Instagram
          </a>
          <a
            href={person.socials.telegram}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#0088cc", fontWeight: "bold" }}
          >
            Telegram
          </a>
        </div>
      </div>
    </div>
  );
}
