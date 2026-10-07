import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Phone, Mail, MapPin, User, Menu, X, FileCheck } from "lucide-react";
import acmeLogoBlue from "../assets/acme_logo_official_blue.svg";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <header className="site-header">
      {/* Main Navigation Bar (Deep Navy & Emerald Glow matching Footer) */}
      <nav className="main-nav-navy">
        <div className="nav-container-navy">
          {/* Official Blue Brand Logo with Transparent Background */}
          <Link to="/" className="navbar-brand-link">
            <img src={acmeLogoBlue} alt="ACME" className="navbar-logo-img" />
          </Link>

          {/* Desktop Nav Links */}
          <ul className="nav-links-navy desktop-menu">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? "nav-link-navy active" : "nav-link-navy"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link-navy active" : "nav-link-navy"
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sectors"
                className={({ isActive }) =>
                  isActive ? "nav-link-navy active" : "nav-link-navy"
                }
              >
                Our Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shutdown-epic"
                className={({ isActive }) =>
                  isActive ? "nav-link-navy active" : "nav-link-navy"
                }
              >
                Industrial Turnarounds
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/clients"
                className={({ isActive }) =>
                  isActive ? "nav-link-navy active" : "nav-link-navy"
                }
              >
                Our Clients
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sister-concerns"
                className={({ isActive }) =>
                  isActive ? "nav-link-navy active" : "nav-link-navy"
                }
              >
                Our Sister Concern
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link-navy active" : "nav-link-navy"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="nav-actions-navy">
            <Link to="/contact" className="btn-navbar-cta">
              <User size={15} />
              <span>Get a Quote</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="mobile-toggle-btn-navy"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer (Deep Navy & Emerald) */}
        <div className={`mobile-drawer-navy ${isOpen ? "open" : ""}`}>
          <div className="mobile-drawer-header-navy">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="mobile-drawer-brand-link"
            >
              <img
                src={acmeLogoBlue}
                alt="ACME"
                className="mobile-drawer-logo"
              />
            </Link>
            <button
              type="button"
              className="drawer-close-btn-navy"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <div className="mobile-drawer-body-navy">
            <ul className="mobile-nav-links-navy">
              <li>
                <NavLink to="/" end onClick={() => setIsOpen(false)}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={() => setIsOpen(false)}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/sectors" onClick={() => setIsOpen(false)}>
                  Our Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/shutdown-epic" onClick={() => setIsOpen(false)}>
                  Industrial Turnaround
                </NavLink>
              </li>
              <li>
                <NavLink to="/clients" onClick={() => setIsOpen(false)}>
                  Our Clients
                </NavLink>
              </li>
              <li>
                <NavLink to="/sister-concerns" onClick={() => setIsOpen(false)}>
                  Our Sister Concerns
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={() => setIsOpen(false)}>
                  Contact
                </NavLink>
              </li>
            </ul>

            <div className="mobile-drawer-footer-navy">
              <Link
                to="/contact"
                className="btn-navbar-cta full-width"
                onClick={() => setIsOpen(false)}
              >
                <User size={16} />
                <span>Get a Quote</span>
              </Link>

              <div className="mobile-contact-info-navy">
                <div className="navbar-license-pill mobile-lic">
                  <FileCheck size={12} />
                  <span>LIC No. RA 8283 MEA Approved</span>
                </div>
                <p>
                  <Phone size={13} /> +91 8291 05 3466
                </p>
                <p>
                  <Mail size={13} /> info@acmeofc.com
                </p>
                <p>
                  <MapPin size={13} /> Mumbai HQ & Kerala Branch
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Backdrop for mobile drawer */}
        {isOpen && (
          <div
            className="drawer-backdrop-navy"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
