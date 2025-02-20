// app/home/page.js
import Image from 'next/image';

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome to My CV Website!</h1>

      <div className="profile-container">
        <Image 
          src="/foto.jpeg" 
          alt="Profile Picture" 
          width={150} 
          height={150} 
          className="profile-pic" 
        />
      </div>

      <p>
        Hi, Aku Christianty! 👋 Seorang mahasiswa yang penuh semangat dan tertarik 
        dengan pengembangan web serta desain. Passionate dalam belajar hal 
        baru dan berusaha memberikan yang terbaik dalam setiap proyek yang 
        dikerjakan. "Believe in yourself, and you can achieve anything!" 🌟
      </p>

      <p>
        📥 <a href="/cv.pdf" download>Download CV</a> | 📧 <a href="/contact">Contact Me</a>
      </p>
    </div>
  );
}
