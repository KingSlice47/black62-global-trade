import { Link } from "react-router-dom";
import logo from "@/assets/black62-logo.png";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border" role="contentinfo">
      <div className="container-x py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={logo} alt="Black62 Commodities" className="h-14 w-auto mb-4" width={140} height={56} />
          <p className="text-sm text-platinum/70 max-w-xs">
            Moving Africa's Commodities. Globally.
          </p>
        </div>

        <div>
          <h3 className="font-display font-semibold text-platinum mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
          <ul className="space-y-2 text-sm text-platinum/70">
            <li><a href="/#about" className="hover:text-primary transition-colors">About</a></li>
            <li><a href="/#commodities" className="hover:text-primary transition-colors">Commodities</a></li>
            <li><a href="/#logistics" className="hover:text-primary transition-colors">Logistics</a></li>
            <li><a href="/#contact" className="hover:text-primary transition-colors">Contact</a></li>
            <li><Link to="/company-profile" className="hover:text-primary transition-colors">Company Profile</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-platinum mb-4 text-sm uppercase tracking-wider">Contact</h3>
          <ul className="space-y-3 text-sm text-platinum/70">
            <li className="flex gap-2"><MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />22 Bedien Street, Culembeeck AH, Roodepoort, 1724</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 text-primary mt-0.5 shrink-0" />+27 (0) 00 000 0000</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 text-primary mt-0.5 shrink-0" />info@black62.co.za</li>
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-platinum mb-4 text-sm uppercase tracking-wider">Legal</h3>
          <ul className="space-y-2 text-sm text-platinum/70">
            <li>Reg No: 2015/115352/07</li>
            <li>VAT: 4870279298</li>
            <li><span className="text-gold">B-BBEE Compliant</span></li>
            <li><Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-platinum/50">
          <p>© {new Date().getFullYear()} Black62 Commodities (Pty) Ltd. All rights reserved.</p>
          <p>Trading as Black62 Commodities · Tsogang Brands (Pty) Ltd</p>
        </div>
      </div>
    </footer>
  );
}
