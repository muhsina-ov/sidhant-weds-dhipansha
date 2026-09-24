import { CalendarPlus, Clock, MapPin, ExternalLink } from "lucide-react";
import { invitation } from "@/config/invitation";
import { formatEventFullDate, formatEventTime, googleCalendarUrl } from "@/lib/invite-utils";
import { Reveal } from "./Reveal";

export function Events() {
  const allEvents = invitation.events;

  return (
    <section id="events" className="relative px-5 py-16">
      <Reveal className="mx-auto mb-10 max-w-md text-center">
        <p className="font-kicker text-gold text-[0.68rem] tracking-[0.42em] uppercase">
          Celebrations
        </p>
        <h2 className="font-display text-maroon mt-3 text-3xl sm:text-4xl">
          Wedding Festivities
        </h2>
        <p className="font-body text-ink/70 mt-2 text-sm leading-relaxed">
          We invite you to grace each occasion<br />with your presence and blessings
        </p>
      </Reveal>

      <div className="mx-auto grid max-w-lg gap-6">
        {allEvents.map((event, i) => (
          <Reveal key={event.key} delay={i * 0.05}>
            <article className="border-gold/30 bg-paper/85 rounded-3xl border px-6 py-6 shadow-[0_18px_40px_-30px_var(--shadow-gold)] backdrop-blur-sm">
              <div className="flex items-center justify-between gap-2 border-b border-gold/20 pb-3">
                <p className="font-kicker text-gold text-[0.68rem] tracking-[0.25em] uppercase font-semibold">
                  {formatEventFullDate(event.startsAt)}
                </p>
                {event.dressCode ? (
                  <span className="font-kicker text-ink/60 text-[0.6rem] tracking-wider uppercase">
                    {event.dressCode}
                  </span>
                ) : null}
              </div>

              <h3 className="font-display text-maroon mt-3 text-2xl sm:text-3xl">{event.name}</h3>

              <div className="mt-3 space-y-2">
                <p className="font-body text-ink/80 flex items-center gap-2 text-sm">
                  <Clock className="text-gold size-4 shrink-0" aria-hidden />
                  <span>{formatEventTime(event.startsAt)} onwards</span>
                </p>
                <p className="font-body text-ink/80 flex items-start gap-2 text-sm">
                  <MapPin className="text-gold mt-0.5 size-4 shrink-0" aria-hidden />
                  <span>
                    <strong className="font-medium text-ink">{event.venue}</strong>
                    <br />
                    <span className="text-ink/65 text-xs sm:text-sm">{event.address}</span>
                  </span>
                </p>
              </div>

              {event.note ? (
                <p className="font-body text-ink/60 mt-3 border-t border-gold/15 pt-2 text-xs italic">
                  {event.note}
                </p>
              ) : null}

              <div className="mt-5 flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={googleCalendarUrl({
                    title: `${event.name} — Siddhant & Dipansha Wedding`,
                    startsAt: event.startsAt,
                    durationMinutes: event.durationMinutes,
                    location: `${event.venue}, ${event.address}`,
                    description: `${event.name} celebration for Siddhant Sharma & Dipansha Grover. ${event.note ?? ""}`,
                  })}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-gold inline-flex items-center gap-1.5 px-4 py-2 text-xs"
                >
                  <CalendarPlus className="size-3.5" aria-hidden />
                  Add to Calendar
                </a>

                {event.mapUrl ? (
                  <a
                    href={event.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline inline-flex items-center gap-1.5 px-4 py-2 text-xs"
                  >
                    <ExternalLink className="size-3.5" aria-hidden />
                    View Venue Map
                  </a>
                ) : null}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
