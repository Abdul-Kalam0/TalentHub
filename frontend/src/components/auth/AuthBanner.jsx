import { Link } from "react-router-dom";

import careerGrowth from "../../assets/auth/career-growth.png";

const AuthBanner = ({ footerText, footerLink, footerLinkText }) => {
  return (
    <section className="relative hidden min-h-screen overflow-hidden lg:flex lg:w-1/2">
      {/* Background Image */}

      <img
        src={careerGrowth}
        alt="Career Growth"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40" />

      {/* Content */}

      <div className="relative z-10 flex h-full w-full flex-col justify-between p-12 text-white">
        {/* Top */}

        <div>
          {/* Logo */}

          <h1 className="text-4xl font-bold tracking-tight drop-shadow-lg">
            TalentHub
          </h1>

          {/* Badge */}

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-5 py-2 backdrop-blur-md">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

            <span className="text-sm font-medium tracking-wide">
              AI Recruitment Platform
            </span>
          </div>
        </div>

        {/* Bottom */}

        <div>
          <p className="text-lg text-white/90">{footerText}</p>

          <Link
            to={footerLink}
            className="
              mt-3
              inline-block
              text-2xl
              font-semibold
              underline
              underline-offset-4
              transition-all
              duration-200
              hover:text-blue-200
            "
          >
            {footerLinkText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AuthBanner;
