// =============================
// 1. Navbar.js (Komponen Navigasi)
// =============================
// Komponen ini berfungsi sebagai toolbar navigasi yang konsisten di semua halaman.
// - "My Project" di kiri
// - Menu navigasi di kanan (About, Skills, dll)
// - Hamburger menu muncul di kanan untuk tampilan mobile

// app/components/Navbar.js
"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Icon hamburger & close dari lucide-react

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Fungsi untuk toggle menu mobile
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`toolbar ${menuOpen ? 'open' : ''}`}>
      {/* Logo / Nama Project */}
      <div className="logo">My Project</div>

      {/* Hamburger icon untuk mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Menu navigasi */}
      <ul className={`menu ${menuOpen ? 'show' : ''}`}>
        <li><Link href="/home">Home</Link></li> 
        <li><Link href="/about">About</Link></li>
        <li><Link href="/skills">Skills</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/portofolio">Portofolio</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
