import AuthBanner from "../../components/auth/AuthBanner";
import RegisterForm from "../../components/auth/RegisterForm";

const SignupPage = () => {
  return (
    <main className="flex min-h-[calc(100vh-80px)] bg-white">
      <AuthBanner
        footerText="Already have an account?"
        footerLink="/login"
        footerLinkText="Login"
      />

      <RegisterForm />
    </main>
  );
};

export default SignupPage;
