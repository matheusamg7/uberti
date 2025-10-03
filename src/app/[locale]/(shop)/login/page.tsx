import Link from 'next/link';
import Image from 'next/image';

interface LoginPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function LoginPage({ params }: LoginPageProps) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;

  const content = {
    welcome: {
      en: 'Welcome',
      pt: 'Bem-vindo',
      es: 'Bienvenido',
      fr: 'Bienvenue',
    },
    subtitle: {
      en: 'Enter your account',
      pt: 'Entre na sua conta',
      es: 'Ingresa a tu cuenta',
      fr: 'Connectez-vous à votre compte',
    },
    email: {
      en: 'Email',
      pt: 'Email',
      es: 'Correo',
      fr: 'Email',
    },
    password: {
      en: 'Password',
      pt: 'Senha',
      es: 'Contraseña',
      fr: 'Mot de passe',
    },
    forgot: {
      en: 'Forgot your password?',
      pt: 'Esqueceu a senha?',
      es: '¿Olvidaste tu contraseña?',
      fr: 'Mot de passe oublié?',
    },
    signIn: {
      en: 'SIGN IN',
      pt: 'ENTRAR',
      es: 'INGRESAR',
      fr: 'SE CONNECTER',
    },
    or: {
      en: 'or',
      pt: 'ou',
      es: 'o',
      fr: 'ou',
    },
    google: {
      en: 'Continue with Google',
      pt: 'Continuar com Google',
      es: 'Continuar con Google',
      fr: 'Continuer avec Google',
    },
    noAccount: {
      en: "Don't have an account?",
      pt: 'Não tem conta?',
      es: '¿No tienes cuenta?',
      fr: "Vous n'avez pas de compte?",
    },
    createAccount: {
      en: 'Create account',
      pt: 'Criar conta',
      es: 'Crear cuenta',
      fr: 'Créer un compte',
    },
  };

  return (
    <div className="min-h-screen bg-[#FEFDFE] flex items-center justify-center py-12 sm:py-16 lg:py-20 px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <Image
            src="/logo/logo_marrom.svg"
            alt="UBERTI"
            width={180}
            height={70}
            className="h-20 w-auto"
            priority
          />
        </div>

        {/* Title */}
        <div className="text-center mb-10">
          <h1
            className="text-3xl md:text-4xl font-light tracking-tight mb-3"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            {content.welcome[locale as keyof typeof content.welcome]}
          </h1>
          <p
            className="text-base text-gray-600"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {content.subtitle[locale as keyof typeof content.subtitle]}
          </p>
        </div>

        {/* Form */}
        <div className="space-y-6">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-light text-gray-700 mb-2"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {content.email[locale as keyof typeof content.email]}
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
              placeholder="seu@email.com"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-light text-gray-700 mb-2"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {content.password[locale as keyof typeof content.password]}
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
              placeholder="••••••••"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              href={`/${locale}/forgot-password`}
              className="text-sm text-gray-600 hover:text-black underline transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {content.forgot[locale as keyof typeof content.forgot]}
            </Link>
          </div>

          {/* Submit Button */}
          <button className="w-full py-4 bg-black text-white hover:bg-gray-800 transition-colors text-sm uppercase tracking-wider">
            {content.signIn[locale as keyof typeof content.signIn]}
          </button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-[#FEFDFE] text-gray-500">
                {content.or[locale as keyof typeof content.or]}
              </span>
            </div>
          </div>

          {/* Google Button */}
          <button className="w-full py-4 border border-gray-300 hover:border-gray-400 transition-colors text-sm flex items-center justify-center gap-3">
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            {content.google[locale as keyof typeof content.google]}
          </button>

          {/* Create Account Link */}
          <p className="text-center text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
            {content.noAccount[locale as keyof typeof content.noAccount]}{' '}
            <Link
              href={`/${locale}/register`}
              className="text-black underline hover:text-gray-700 transition-colors font-medium"
            >
              {content.createAccount[locale as keyof typeof content.createAccount]}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
