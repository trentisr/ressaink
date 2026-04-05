import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-12 text-gray-400">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <Link
            href="https://instagram.com/your-instagram-handle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaInstagram size={30} />
          </Link>
          {/* Add more social media icons if needed */}
        </div>
        <p className="mb-2">
          Email:{" "}
          <Link
            href="mailto:Reesaink@gmail.com"
            className="hover:text-white transition-colors"
          >
            Reesaink@gmail.com
          </Link>
        </p>
        <p>&copy; {currentYear} Reesa Ink. All rights reserved.</p>
      </div>
    </footer>
  );
}
