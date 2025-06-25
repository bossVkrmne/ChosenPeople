import { useState, useEffect } from "react";

const people = [
  {
    name: "Александр",
    photo:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&h=711",
    socials: {
      instagram: "https://instagram.com/alexander",
      telegram: "https://t.me/alexander",
    },
  },
  {
    name: "Марина",
    photo:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&h=711",
    socials: {
      instagram: "https://instagram.com/marina",
      telegram: "https://t.me/marina",
    },
  },
  {
    name: "Дмитрий",
    photo:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&h=711",
    socials: {
      instagram: "https://instagram.com/dmitry",
      telegram: "https://t.me/dmitry",
    },
  },
  {
    name: "Екатерина",
    photo:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&h=711",
    socials: {
      instagram: "https://instagram.com/ekaterina",
      telegram: "https://t.me/ekaterina",
    },
  },
];

const InstagramIcon = () => (
  <svg
    style={{ width: 24, height: 24, fill: "#E1306C" }}
    viewBox="0 0 24 24"
  >
    <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm5 2a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.5a1 1 0 11-2 0 1 1 0 012 0z" />
  </svg>
);

const TelegramIcon = () => (
  <svg
    style={{ width: 24, height: 24, fill: "#0088cc" }}
    viewBox="0 0 24 24"
  >
    <path d="M22 2L2 12l5 2 2 6 3-4 5 4 5-20z" />
  </svg>
);

export default function Home() {
  const [current, setCurrent] = useState(0);

  // Автопрокрутка каждые 3 секунды
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % people.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // helper: предыдущий и следующий индексы с циклом
  const prevIndex = (current - 1 + people.length) % people.length;
  const nextIndex = (current + 1) % people.length;

  return (
    <>
      <style>{`
        .slider {
          display: flex;
          justify-content: center;
          align-items: center;
          perspective: 1200px;
          margin: 40px 0;
        }
        .slide {
          width: 120px;
          height: 213px; /* 9:16 */
          margin: 0 10px;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.6s ease, opacity 0.6s ease;
          opacity: 0.5;
          transform-style: preserve-3d;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          background: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          user-select: none;
        }
        .slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 20px;
          flex-shrink: 0;
        }
        .slide.active {
          width: 200px;
          height: 356px;
          opacity: 1;
          transform: translateZ(0) rotateY(0deg);
          z-index: 10;
          box-shadow: 0 12px 24px rgba(0,0,0,0.2);
        }
        .slide.prev {
          transform: translateX(-60px) rotateY(25deg);
          opacity: 0.6;
          z-index: 5;
        }
        .slide.next {
          transform: translateX(60px) rotateY(-25deg);
          opacity: 0.6;
          z-index: 5;
        }
        .info {
          position: absolute;
          bottom: 12px;
          width: 100%;
          text-align: center;
          color: #222;
          font-weight: 600;
          font-size: 1rem;
          background: rgba(255 255 255 / 0.8);
          border-radius: 0 0 20px 20px;
          padding: 8px 0;
          user-select: text;
        }
        .socials {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 8px;
        }
        .socials a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #f0f0f0;
          transition: background-color 0.3s;
          text-decoration: none;
        }
        .socials a:hover {
          background-color: #ddd;
        }

        @media (max-width: 480px) {
          .slide {
            width: 90px;
            height: 160px;
          }
          .slide.active {
            width: 150px;
            height: 267px;
          }
          .info {
            font-size: 0.8rem;
          }
        }
      `}</style>

      <div style={{ fontFamily: "Arial, sans-serif", padding: 20 }}>
        <h1 style={{ textAlign: "center" }}>ChosenPeople</h1>

        <div className="slider">
          {people.map((person, i) => {
            let className = "slide";
            if (i === current) className += " active";
            else if (i === prevIndex) className += " prev";
            else if (i === nextIndex) className += " next";

            return (
              <div
                key={person.name}
                className={className}
                onClick={() => setCurrent(i)}
                style={{ position: "relative" }}
              >
                <img src={person.photo} alt={person.name} />
                {i === current && (
                  <div className="info">
                    <div>{person.name}</div>
                    <div className="socials">
                      <a
                        href={person.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                      >
                        <InstagramIcon />
                      </a>
                      <a
                        href={person.socials.telegram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Telegram"
                      >
                        <TelegramIcon />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
