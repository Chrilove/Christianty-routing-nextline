// app/contact/page.js
export default function Contact() {
  return (
    <div className="page-content">
      <h1>Saya selalu terbuka untuk diskusi atau kerja sama. Hubungi saya melalui:</h1>

      <ul>
        <li>📧 Email: chrilove@gmail.com</li>
        <li>📷 Instagram: @fhadilah8</li>
        <li>💬 WhatsApp: +62 8953 3087 6659</li>
        <li>🐱 GitHub: github.com/chrilove</li>
      </ul>
     
      <p>Atau kirim pesan langsung lewat form di bawah ini! 👇</p>

      <form className="contact-form">
        <label htmlFor="name">Nama:</label>
        <input type="text" id="name" placeholder="Masukkan nama Anda" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Masukkan email Anda" />

        <label htmlFor="message">Pesan:</label>
        <textarea id="message" placeholder="Tulis pesan Anda..." rows="4"></textarea>

        <button type="submit">🚀 Kirim Pesan</button>
      </form>
    </div>
  );
}
