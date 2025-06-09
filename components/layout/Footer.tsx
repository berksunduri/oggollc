import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link
              href="/"
              className="text-2xl font-bold flex items-center mb-4"
            >
              <span className="text-primary font-plagiata">
                OGGO<span className="text-chart-1">•LLC</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-6">
              Providing premium steel manufacturing services across Europe since
              2023.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                "Home",
                "Services",
                "Industries",
                "About",
                "Projects",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`/#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                "Galvanizing",
                "Welding",
                "Steel Manufacturing",
                "Metal Fabrication",
                "Precision Machining",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#services"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-chart-1 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Innovation & Training Park, 20000 Ukë Bytyçi, Prizren / Kosovo
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-chart-1 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-muted-foreground">+383 48 353 508</span>
                  <span className="text-muted-foreground">+383 38 712 080</span>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-chart-1 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-muted-foreground">
                    saleseu@oggollc.com
                  </span>
                  <span className="text-muted-foreground">
                    sales@oggollc.com
                  </span>
                  <span className="text-muted-foreground">
                    production@oggollc.com
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>
            &copy; {new Date().getFullYear()} Pixel
            <span className="text-green-500">On</span>. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
}
