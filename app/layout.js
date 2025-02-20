// app/layout.js
import './styles.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'My Project',
  description: 'Personal CV Website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Navbar selalu muncul di setiap halaman */}
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
