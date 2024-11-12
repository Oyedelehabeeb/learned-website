import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-darkGray text-beige">
      <div className=" max-w-4xl mx-auto px-4">
        <p className="text-sm mb-4">
          &copy; {new Date().getFullYear()} Your E-Learning Platform. All rights
          reserved.
        </p>
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition duration-300"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition duration-300"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition duration-300"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition duration-300"
          >
            <FaInstagram size={20} />
          </a>
        </div>
        <p className="text-xs">
          Your trusted platform for online learning and professional
          development.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
