import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/about", label: "Our story" },
  { to: "/#divisions", label: "Divisions" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <Link
        className="wordmark"
        to="/"
        aria-label="Zam Models and Signatures home"
      >
        <span className="wordmark-icon">Z</span>
        <span>
          ZAM <small>MODELS &amp; SIGNATURES</small>
        </span>
      </Link>
      <button
        className="icon-button menu-toggle"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav
        className={open ? "main-nav is-open" : "main-nav"}
        aria-label="Main navigation"
      >
        {links.map((link) => (
          <NavLink key={link.label} to={link.to} onClick={() => setOpen(false)}>
            {link.label}
          </NavLink>
        ))}
        <Link className="nav-cta" to="/audition" onClick={() => setOpen(false)}>
          Join the movement <ArrowUpRight size={15} />
        </Link>
      </nav>
    </header>
  );
}
