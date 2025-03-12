import Link from "next/link";
import Container from "../ui/Container";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-50 text-primary-800 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold primary-800 mb-4">
              <span className="text-xl font-bold text-primary-600">
                Apex<span className="text-primary-800">Plast</span>
              </span>
            </h3>
            <p className="text-primary-800 mb-4">
              Transforming plastic waste into high-quality recycled pellets for
              a sustainable future.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-primary-800 hover:primary-800 transition-colors"
              >
                <FaFacebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-primary-800 hover:primary-800 transition-colors"
              >
                <FaTwitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-primary-800 hover:primary-800 transition-colors"
              >
                <FaLinkedin className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-primary-800 hover:primary-800 transition-colors"
              >
                <FaInstagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold primary-800 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#features"
                  className="text-primary-800 hover:primary-800 transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#applications"
                  className="text-primary-800 hover:primary-800 transition-colors"
                >
                  Applications
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="text-primary-800 hover:primary-800 transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-primary-800 hover:primary-800 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-primary-800 hover:primary-800 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold primary-800 mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-primary-800 hover:primary-800 transition-colors"
                >
                  Technical Specs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-primary-800 hover:primary-800 transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-primary-800 hover:primary-800 transition-colors"
                >
                  Certifications
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-primary-800 hover:primary-800 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-primary-800 hover:primary-800 transition-colors"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold primary-800 mb-4">
              Contact Us
            </h4>
            <ul className="space-y-2 text-primary-800">
              <li>No.1 Kogun Street</li>
              <li>Trade Fair Layout, Kaduna</li>
              <li>info@apexplast.shop</li>
              <li>+2340138838204</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-primary-700 text-center text-primary-800">
          <p>© {year} ApexPlast. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
