const Footer = () => {
  return (
    <footer
      className="text-white"
      style={{ backgroundColor: "rgba(33, 113, 139)" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Company */}
          <div>
            <h3 className="text-2xl font-semibold mb-1">
              Aakash (India)
            </h3>
            <p className="text-sm text-white/80 mb-4">
              Projects & Builders Pvt. Ltd
            </p>

            <p className="text-sm text-white/90 leading-relaxed">
              Payal Cinema Complex, Mango<br />
              Jamshedpur – 831012
            </p>

            <p className="text-xs text-white/70 mt-4">
              Building dreams and creating landmarks with trust and excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {["About", "Amenities", "Gallery", "Contact"].map((item, i) => (
                <li key={i}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white/85 hover:text-white transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-medium mb-4">
              Get in Touch
            </h4>

            <div className="space-y-2 text-sm text-white/90">
              <a
                href="https://www.aakashindia.in"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:underline"
              >
                www.aakashindia.in
              </a>

              <a
                href="mailto:sales@aakashindia.in"
                className="block hover:underline"
              >
                sales@aakashindia.in
              </a>

              <div>
                +91 70798 29999<br />
                +91 95700 00202
              </div>

              <div className="mt-3 text-xs">
                <strong>Aakash Skyline</strong><br />
                Near Chepapul, Mango<br />
                <a
                  href="https://www.google.com/maps?q=Aakash+Skyline+Mango+Jamshedpur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="my-8 border-t border-white/30"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/80">
          <p>
            © {new Date().getFullYear()} Aakash (India) Projects & Builders Pvt. Ltd. All Rights Reserved.
          </p>

          <p>
            Designed & Developed with <span className="text-red-300">❤</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
