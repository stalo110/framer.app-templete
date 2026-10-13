import { useEffect, useState } from "react";

function remaining(target: string) {
  const distance = Math.max(0, new Date(target).getTime() - Date.now());
  return [
    Math.floor(distance / 86400000),
    Math.floor(distance / 3600000) % 24,
    Math.floor(distance / 60000) % 60,
  ];
}

export function Countdown({ target }: { target: string }) {
  const [time, setTime] = useState(() => remaining(target));
  useEffect(() => {
    const timer = window.setInterval(() => setTime(remaining(target)), 60_000);
    return () => window.clearInterval(timer);
  }, [target]);
  return (
    <div className="countdown" aria-label={`${time[0]} days until event`}>
      {time.map((value, index) => (
        <span key={index}>
          <strong>{String(value).padStart(2, "0")}</strong>
          <small>{["days", "hours", "minutes"][index]}</small>
        </span>
      ))}
    </div>
  );
}
