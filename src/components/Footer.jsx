export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* FakeBank branding */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">
              Swift Bank
            </h2>

            <p className="text-sm text-neutral-400">
              A fictional banking experience built for educational
              and portfolio purposes.
            </p>
          </div>

          {/* Banking */}
          <div>
            <h3 className="font-bold text-white mb-4">
              Banking
            </h3>

            <ul className="space-y-2 text-sm">
              <li>Checking Accounts</li>
              <li>Savings Accounts</li>
              <li>Credit Cards</li>
              <li>Loans</li>
              <li>Online Banking</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-white mb-4">
              Resources
            </h3>

            <ul className="space-y-2 text-sm">
              <li>Help Center</li>
              <li>Security & Privacy</li>
              <li>Financial Education</li>
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-white mb-4">
              Company
            </h3>

            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Careers</li>
              <li>Newsroom</li>
              <li>Accessibility</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-neutral-700 my-8"></div>

        {/* Disclaimer */}
        <div className="text-xs text-neutral-500 leading-relaxed">
          <p>
            FakeBank is a fictional financial institution created solely
            for educational, demonstration, and portfolio purposes. This
            website is part of a web development project and does not
            provide real banking or financial services.
          </p>

          <p className="mt-3">
            FakeBank is not a real bank, is not FDIC insured, and is not
            affiliated with any real financial institution. Any names,
            account balances, transactions, card numbers, or other financial
            information displayed on this website are fictional and used for
            demonstration purposes only.
          </p>

          <p className="mt-5">
            © 2026 FakeBank — Educational Web Development Project.
          </p>
        </div>

      </div>
    </footer>
  );
}