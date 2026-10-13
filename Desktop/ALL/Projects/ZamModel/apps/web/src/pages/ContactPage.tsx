import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { request } from "../lib/api";

export function ContactPage() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);
    const form = new FormData(event.currentTarget);
    const data = Object.fromEntries(form.entries());
    try {
      await request("/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSent(true);
    } catch (reason) {
      setError(
        reason instanceof Error
          ? reason.message
          : "Your message could not be sent.",
      );
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="inner-page contact-page">
      <section className="page-intro compact-intro">
        <span className="eyebrow">LET'S TALK</span>
        <h1>
          Good things
          <br />
          <em>start with hello.</em>
        </h1>
        <p>
          For auditions, partnerships, programmes or just to learn more, send us
          a note.
        </p>
      </section>
      <section className="contact-grid">
        <div className="contact-details">
          <div>
            <span className="eyebrow">COME FIND US</span>
            <h2>
              Rooted in two
              <br />
              Nigerian cities.
            </h2>
          </div>
          <article>
            <MapPin size={19} />
            <div>
              <strong>Lagos</strong>
              <p>
                Lagos, Nigeria
                <br />
                Contact us to confirm current visiting arrangements.
              </p>
            </div>
          </article>
          <article>
            <MapPin size={19} />
            <div>
              <strong>Awka</strong>
              <p>
                Awka, Anambra State
                <br />
                Contact us to confirm current visiting arrangements.
              </p>
            </div>
          </article>
          <article>
            <Mail size={19} />
            <div>
              <strong>Official contact details</strong>
              <p>
                Email, phone and social channels will be listed once confirmed.
              </p>
            </div>
          </article>
          <div className="contact-note">
            <Phone size={16} />
            <span>
              Use the inquiry form to reach the Zam team in the meantime.
            </span>
          </div>
        </div>
        <div className="contact-form-wrap">
          {sent ? (
            <div className="success-state">
              <span className="success-icon">
                <Check size={26} />
              </span>
              <span className="eyebrow">MESSAGE SENT</span>
              <h2>Thanks for reaching out.</h2>
              <p>Your enquiry has been received. Our team will be in touch.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={submit}>
              <label>
                Your name
                <input
                  required
                  name="fullName"
                  minLength={2}
                  maxLength={160}
                  placeholder="Full name"
                />
              </label>
              <label>
                Email address
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                />
              </label>
              <label>
                Phone number <span>(optional)</span>
                <input
                  name="phone"
                  maxLength={32}
                  placeholder="Include your country code"
                />
              </label>
              <label>
                What is this about?
                <input
                  required
                  name="subject"
                  minLength={3}
                  maxLength={180}
                  placeholder="Partnership, programme, general enquiry..."
                />
              </label>
              <label>
                Your message
                <textarea
                  required
                  name="message"
                  minLength={10}
                  maxLength={5000}
                  rows={5}
                  placeholder="How can we help?"
                />
              </label>
              {error && (
                <p className="form-error" role="alert">
                  {error}
                </p>
              )}
              <button
                className="button button-dark"
                type="submit"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send your enquiry"}{" "}
                <ArrowUpRight size={17} />
              </button>
            </form>
          )}
        </div>
      </section>
      <section className="contact-partner">
        <span className="eyebrow">PARTNER WITH ZAM</span>
        <p>
          We’re open to conversations with sponsors, creative organisations,
          venues and people building the future of talent.
        </p>
        <Link to="/contact">
          Explore a partnership <ArrowUpRight size={15} />
        </Link>
      </section>
    </div>
  );
}
