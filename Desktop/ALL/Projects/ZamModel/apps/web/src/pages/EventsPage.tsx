import { CalendarDays, Sparkles } from "lucide-react";
import { EventList } from "../components/EventList";

export function EventsPage() {
  return (
    <div className="inner-page">
      <section className="page-intro compact-intro">
        <span className="eyebrow">WHAT'S HAPPENING</span>
        <h1>
          Make room for
          <br />
          <em>the moment.</em>
        </h1>
        <p>
          Pageants, auditions, workshops and talent experiences, gathered in one
          place.
        </p>
      </section>
      <section className="events-page-list">
        <div className="listing-toolbar">
          <span>
            <CalendarDays size={16} /> PROGRAMMES &amp; EVENTS
          </span>
          <span>
            <Sparkles size={16} /> NEW DATES ADDED AS CONFIRMED
          </span>
        </div>
        <EventList />
      </section>
    </div>
  );
}
