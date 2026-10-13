import { useEffect, useState, type FormEvent } from "react";
import { ArrowUpRight, CalendarDays, LoaderCircle, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { request } from "../lib/api";
import { Countdown } from "./Countdown";

type EventItem = {
  id: number;
  title: string;
  description: string;
  eventDate: string;
  location: string;
  venue?: string | null;
  imagePath?: string | null;
  isSample: boolean;
  registrationFeeKobo?: number | null;
  category?: { name: string } | null;
};
type EventResponse = { data: EventItem[] };

export function EventList({ compact = false }: { compact?: boolean }) {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    request<EventResponse>("/events")
      .then((result) => setEvents(result.data))
      .catch((reason: Error) => setError(reason.message));
  }, []);
  const visible = compact ? events.slice(0, 1) : events;
  if (error)
    return (
      <p className="inline-note">
        Events are temporarily unavailable. Please check back soon.
      </p>
    );
  if (!visible.length)
    return (
      <p className="inline-note">
        New programme dates are being prepared. Follow us for announcements.
      </p>
    );
  return (
    <div className={compact ? "event-list compact" : "event-list"}>
      {visible.map((event) => (
        <article className="event-row" key={event.id}>
          <div className="event-date">
            <span>
              {new Date(event.eventDate).toLocaleString("en", {
                month: "short",
              })}
            </span>
            <strong>{new Date(event.eventDate).getDate()}</strong>
            <small>{new Date(event.eventDate).getFullYear()}</small>
          </div>
          <div className="event-copy">
            <span className="eyebrow">
              {event.category?.name ?? "ZAM PROGRAMME"}
              {event.isSample && " · SAMPLE"}
            </span>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <div className="event-meta">
              <span>
                <MapPin size={14} /> {event.venue || event.location}
              </span>
              <span>
                <CalendarDays size={14} />{" "}
                {event.location === "LAGOS" ? "Lagos" : "Awka"}
              </span>
            </div>
          </div>
          <div className="event-action">
            {new Date(event.eventDate).getTime() > Date.now() && (
              <Countdown target={event.eventDate} />
            )}
            {event.registrationFeeKobo && event.registrationFeeKobo > 0 ? (
              <PayForEvent event={event} />
            ) : (
              <Link to="/audition" aria-label={`Register for ${event.title}`}>
                <ArrowUpRight size={20} />
              </Link>
            )}
          </div>
        </article>
      ))}
      {compact && (
        <Link className="text-link" to="/events">
          View all events <ArrowUpRight size={15} />
        </Link>
      )}
    </div>
  );
}

function PayForEvent({ event }: { event: EventItem }) {
  const [email, setEmail] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function initialize(eventTarget: FormEvent<HTMLFormElement>) {
    eventTarget.preventDefault();
    setLoading(true);
    setError("");
    try {
      const result = await request<{
        data: { authorizationUrl: string; reference: string };
      }>("/payments/initialize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventId: event.id, email }),
      });
      window.location.assign(result.data.authorizationUrl);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Could not start checkout.");
      setLoading(false);
    }
  }

  if (!expanded) {
    return (
      <button
        className="event-pay-button"
        onClick={() => setExpanded(true)}
        aria-label={`Pay registration for ${event.title}`}
      >
        Pay ₦{(event.registrationFeeKobo! / 100).toLocaleString("en-NG")}
        <ArrowUpRight size={15} />
      </button>
    );
  }

  return (
    <form className="event-checkout" onSubmit={initialize}>
      <input
        type="email"
        required
        aria-label="Email for Paystack receipt"
        placeholder="Email for receipt"
        value={email}
        onChange={(change) => setEmail(change.target.value)}
      />
      <button type="submit" disabled={loading} aria-label="Continue to Paystack">
        {loading ? <LoaderCircle className="spin" size={16} /> : <ArrowUpRight size={17} />}
      </button>
      <button type="button" onClick={() => { setExpanded(false); setError(""); }} aria-label="Close checkout">×</button>
      {error && <span role="alert">{error}</span>}
    </form>
  );
}
