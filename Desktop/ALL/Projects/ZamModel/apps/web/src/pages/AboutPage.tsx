import {
  ArrowUpRight,
  Eye,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeading } from "../components/SectionHeading";

const values = [
  {
    icon: ShieldCheck,
    name: "Transparency",
    text: "Clear communication and honest expectations at every step.",
  },
  {
    icon: Lightbulb,
    name: "Talent development",
    text: "Practical training that turns potential into lasting capability.",
  },
  {
    icon: HeartHandshake,
    name: "Opportunity with care",
    text: "People first: creating a supportive space to learn and be seen.",
  },
];

export function AboutPage() {
  return (
    <div className="inner-page">
      <section className="page-intro">
        <span className="eyebrow">OUR STORY · ESTABLISHED 2024</span>
        <h1>
          Built around people.
          <br />
          <em>Made for possibility.</em>
        </h1>
        <p>
          Zam Models and Signatures is a Nigerian talent development and
          creative platform, registered on April 1, 2024, with a growing
          presence in Lagos and Awka.
        </p>
      </section>
      <section className="about-image">
        <img
          src="/images/WhatsApp Image 2026-10-10 at 06.28.02.jpeg"
          alt="Talent featured by Zam Models and Signatures"
        />
      </section>
      <section className="story-grid">
        <div>
          <span className="eyebrow">WHY WE EXIST</span>
          <h2>
            Talent is everywhere.
            <br />
            <em>Access is not.</em>
          </h2>
        </div>
        <div>
          <p>
            We believe young people deserve more than a moment in the spotlight.
            They deserve training, trusted guidance, real-world connections and
            the confidence to build a future on their own terms.
          </p>
          <p>
            Our work spans pageantry, entertainment, creative skills and
            enterprise. We bring these disciplines together so that talent can
            be seen, strengthened and connected to possibility.
          </p>
        </div>
      </section>
      <section className="mission-band">
        <div>
          <span className="eyebrow">OUR MISSION</span>
          <HeartHandshake size={30} strokeWidth={1.3} />
          <h2>
            Discover honestly.
            <br />
            Develop deliberately.
            <br />
            Project confidently.
          </h2>
        </div>
        <div>
          <span className="eyebrow">OUR VISION</span>
          <Eye size={30} strokeWidth={1.3} />
          <h2>
            1,000 young people developed for global competitiveness within five
            years.
          </h2>
          <p>
            A long-term ambition, built through consistent work and meaningful
            opportunity.
          </p>
        </div>
      </section>
      <section className="values-section">
        <SectionHeading
          eyebrow="WHAT GUIDES US"
          title="The way we work matters."
        />
        <div className="values-grid">
          {values.map(({ icon: Icon, name, text }) => (
            <article key={name}>
              <Icon size={23} />
              <h3>{name}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="locations-band">
        <div>
          <span className="eyebrow">ROOTED IN NIGERIA</span>
          <h2>
            Two cities.
            <br />
            <em>One open door.</em>
          </h2>
        </div>
        <div className="locations-list">
          <p>
            <span>01</span>
            <strong>Lagos</strong>
            <small>Office location · Lagos, Nigeria</small>
          </p>
          <p>
            <span>02</span>
            <strong>Awka</strong>
            <small>Office location · Awka, Anambra State</small>
          </p>
          <small>
            Contact us to confirm current visiting arrangements and street
            addresses.
          </small>
        </div>
      </section>
      <section className="about-cta">
        <div>
          <span className="eyebrow">YOUR NEXT CHAPTER</span>
          <h2>
            There is room for
            <br />
            <em>your kind of talent.</em>
          </h2>
        </div>
        <Link className="button button-gold" to="/audition">
          Take your first step <ArrowUpRight size={17} />
        </Link>
      </section>
    </div>
  );
}
