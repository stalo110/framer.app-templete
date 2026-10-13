import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Camera,
  ChefHat,
  Clapperboard,
  Crown,
  MoveUpRight,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { EventList } from "../components/EventList";
import { SectionHeading } from "../components/SectionHeading";

const divisions = [
  {
    icon: Crown,
    number: "01",
    title: "Pageantry",
    text: "Confidence, poise and a platform built around purpose.",
  },
  {
    icon: Camera,
    number: "02",
    title: "Talent scouting",
    text: "A thoughtful first step from raw potential to real opportunity.",
  },
  {
    icon: ChefHat,
    number: "03",
    title: "Creative enterprise",
    text: "Baking contracts and practical pathways to sustainable work.",
  },
  {
    icon: Sparkles,
    number: "04",
    title: "Beauty & makeover",
    text: "Creative transformation, personal style and artistry.",
  },
];

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-image" role="img" aria-label="Zam talent portrait">
          <img
            src="/images/WhatsApp Image 2026-10-10 at 06.28.00 (1).jpeg"
            alt="A Zam talent in a pageant look"
          />
        </div>
        <div className="hero-shade" />
        <div className="hero-content">
          <span className="eyebrow">LAGOS · AWKA · EVERYWHERE</span>
          <h1>
            Talent deserves
            <br />
            <em>a bigger stage.</em>
          </h1>
          <p>
            We discover, develop and project the next generation of African
            talent, with the care and craft their ambition deserves.
          </p>
          <div className="hero-actions">
            <Link className="button button-gold" to="/audition">
              Register for audition <ArrowUpRight size={17} />
            </Link>
            <Link className="button button-outline" to="/contact">
              Partner with us <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
        <div className="hero-caption">
          <span>01 — DISCOVER</span>
          <span>THE NEXT CHAPTER IS YOURS</span>
        </div>
        <a className="hero-scroll" href="#intro">
          <ArrowDown size={16} /> SCROLL TO DISCOVER
        </a>
      </section>
      <section className="intro-section" id="intro">
        <div className="intro-index">
          ZAM
          <br />
          <span>01 / 04</span>
        </div>
        <div className="intro-copy">
          <span className="eyebrow">A PLATFORM FOR WHAT'S POSSIBLE</span>
          <h2>
            We don't just find talent.
            <br />
            <em>We help it become.</em>
          </h2>
        </div>
        <div className="intro-aside">
          <p>
            From the runway to the recording room, from a first audition to a
            lasting career: we create the training, visibility and connections
            that help young people move forward.
          </p>
          <Link className="text-link" to="/about">
            Meet Zam <ArrowRight size={15} />
          </Link>
        </div>
      </section>
      <section className="divisions-section" id="divisions">
        <SectionHeading
          eyebrow="WHAT WE DO"
          title="One platform. Many possibilities."
          text="A connected home for creative talent, practical skills and the opportunities that bring them together."
        />
        <div className="division-grid">
          {divisions.map(({ icon: Icon, number, title, text }) => (
            <article className="division-item" key={number}>
              <div className="division-top">
                <span>{number}</span>
                <Icon size={23} strokeWidth={1.5} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              <Link to="/about" aria-label={`Explore ${title}`}>
                <MoveUpRight size={19} />
              </Link>
            </article>
          ))}
        </div>
        <div className="division-note">
          <Clapperboard size={18} />
          <span>
            Also developing workshops, seminars, reality formats and talent
            trade fairs.
          </span>
          <Link to="/contact">
            Explore a collaboration <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
      <section className="vision-section">
        <div className="vision-photo">
          <img
            src="/images/WhatsApp Image 2026-10-10 at 06.27.57.jpeg"
            alt="A young creative talent looking toward the camera"
            loading="lazy"
          />
        </div>
        <div className="vision-copy">
          <span className="eyebrow">OUR FIVE-YEAR VISION</span>
          <h2>
            1,000 young people.
            <br />
            <em>More open doors.</em>
          </h2>
          <p>
            Our vision is to develop at least 1,000 young people over five
            years, equipping them with the confidence, craft and global outlook
            to compete anywhere.
          </p>
          <Link className="button button-dark" to="/about">
            The story behind the vision <ArrowUpRight size={16} />
          </Link>
          <span className="vision-footnote">
            A commitment to grow, one person at a time.
          </span>
        </div>
      </section>
      <section className="events-section">
        <div className="events-heading">
          <SectionHeading
            eyebrow="GATHER. GROW. GO FURTHER."
            title="The next big moment."
            text="Auditions, pageants, workshops and experiences in the making."
          />
          <Link className="text-link desktop-only" to="/events">
            All events <ArrowUpRight size={15} />
          </Link>
        </div>
        <EventList compact />
      </section>
      <section className="partner-band">
        <div>
          <span className="eyebrow">BETTER, TOGETHER</span>
          <h2>
            Good talent needs
            <br />
            <em>good partners.</em>
          </h2>
        </div>
        <p>
          We welcome organisations, brands and individuals who believe in
          building meaningful creative futures. Corporate partners will be
          featured here as collaborations are confirmed.
        </p>
        <Link className="button button-outline" to="/contact">
          Start a conversation <ArrowUpRight size={17} />
        </Link>
      </section>
    </>
  );
}
