import Navbar from "./Navbar";
import Container from "../ui/Container";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white py-4 shadow-sm sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/apex-logo.svg"
              alt="EcoPellets Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-xl font-bold text-primary-600">
              Apex<span className="text-primary-800">Plast</span>
            </span>
          </Link>
          <Navbar />
        </div>
      </Container>
    </header>
  );
}
