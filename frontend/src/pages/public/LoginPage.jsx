import AuthBanner from "../../components/auth/AuthBanner";
import LoginForm from "../../components/auth/LoginForm";

const LoginPage = () => {
  return (
    <main className="flex min-h-[calc(100vh-80px)] bg-white">
      <AuthBanner
        footerText="Don't have an account?"
        footerLink="/signup"
        footerLinkText="Create Account"
      />

      <LoginForm />
    </main>
  );
};

export default LoginPage;
