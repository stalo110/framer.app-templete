import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <Link className="footer-brand" to="/">
            ZAM<span>.</span>
          </Link>
          <p>
            Talent, with intention.
            <br />
            Discovering what the world has yet to see.
          </p>
        </div>
        <div className="footer-links">
          <span className="eyebrow">EXPLORE</span>
          <Link to="/about">Our story</Link>
          <Link to="/events">Events &amp; programmes</Link>
          <Link to="/audition">Audition registration</Link>
        </div>
        <div className="footer-links">
          <span className="eyebrow">FIND US</span>
          <span>
            <MapPin size={14} /> Lagos &amp; Awka, Nigeria
          </span>
          <Link to="/contact">
            <Mail size={14} /> Send an enquiry <ArrowUpRight size={12} />
          </Link>
          <span>Social links to be confirmed</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Zam Models and Signatures</span>
        <span>Registered in Nigeria · Established 2024</span>
      </div>
    </footer>
  );
}
