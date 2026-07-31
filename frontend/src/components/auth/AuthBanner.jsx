import { Link } from "react-router-dom";

const AuthBanner = ({ footerText, footerLink, footerLinkText }) => {
  return (
    <section className="flex w-2/5 flex-col justify-between bg-blue-600 px-14 py-16 text-white">
      <div>
        {/* Logo */}
        <h2 className="text-4xl font-bold tracking-tight">TalentHub</h2>

        {/* Hero Content */}
        <div className="mt-20">
          <h1 className="text-6xl font-bold leading-tight">
            Find Your
            <br />
            Dream Job
          </h1>

          <p className="mt-6 max-w-md text-lg leading-8 text-blue-100">
            Connect with top companies, showcase your skills, and build your
            future with TalentHub.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16">
          <p className="text-blue-100">{footerText}</p>

          <Link
            to={footerLink}
            className="mt-3 inline-block font-semibold underline underline-offset-4 hover:text-blue-200 transition-colors"
          >
            {footerLinkText}
          </Link>
        </div>
      </div>

      {/* Illustration */}
      <div className="flex justify-center pt-10">
        <div className="flex h-56 w-full max-w-sm items-center justify-center rounded-2xl border border-blue-400/40 bg-blue-500/20">
          <span className="text-blue-100">Illustration</span>
        </div>
      </div>
    </section>
  );
};

export default AuthBanner;
