import Link from 'next/link';
import Image from 'next/image';

interface RegisterPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function RegisterPage({ params }: RegisterPageProps) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;

  const content = {
    title: {
      en: 'Create Account',
      pt: 'Criar Conta',
      es: 'Crear Cuenta',
      fr: 'Créer un Compte',
    },
    subtitle: {
      en: 'Join the Helena Uberti family',
      pt: 'Junte-se à família Helena Uberti',
      es: 'Únete a la familia Helena Uberti',
      fr: 'Rejoignez la famille Helena Uberti',
    },
    fullName: {
      en: 'Full Name',
      pt: 'Nome Completo',
      es: 'Nombre Completo',
      fr: 'Nom Complet',
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
    confirmPassword: {
      en: 'Confirm Password',
      pt: 'Confirmar Senha',
      es: 'Confirmar Contraseña',
      fr: 'Confirmer le Mot de passe',
    },
    terms: {
      en: 'I accept the terms of service',
      pt: 'Aceito os termos de serviço',
      es: 'Acepto los términos de servicio',
      fr: "J'accepte les conditions de service",
    },
    createAccount: {
      en: 'CREATE ACCOUNT',
      pt: 'CRIAR CONTA',
      es: 'CREAR CUENTA',
      fr: 'CRÉER UN COMPTE',
    },
    hasAccount: {
      en: 'Already have an account?',
      pt: 'Já tem conta?',
      es: '¿Ya tienes cuenta?',
      fr: 'Vous avez déjà un compte?',
    },
    signIn: {
      en: 'Sign in',
      pt: 'Entrar',
      es: 'Ingresar',
      fr: 'Se connecter',
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
            {content.title[locale as keyof typeof content.title]}
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
          {/* Full Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-light text-gray-700 mb-2"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {content.fullName[locale as keyof typeof content.fullName]}
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
              placeholder="Maria Silva"
            />
          </div>

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

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-light text-gray-700 mb-2"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {content.confirmPassword[locale as keyof typeof content.confirmPassword]}
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
              placeholder="••••••••"
            />
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="terms"
              className="mt-1 w-4 h-4 border-gray-300 rounded focus:ring-black"
            />
            <label
              htmlFor="terms"
              className="text-sm text-gray-600 font-light"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {content.terms[locale as keyof typeof content.terms]}
            </label>
          </div>

          {/* Submit Button */}
          <button className="w-full py-4 bg-black text-white hover:bg-gray-800 transition-colors text-sm uppercase tracking-wider">
            {content.createAccount[locale as keyof typeof content.createAccount]}
          </button>

          {/* Sign In Link */}
          <p className="text-center text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
            {content.hasAccount[locale as keyof typeof content.hasAccount]}{' '}
            <Link
              href={`/${locale}/login`}
              className="text-black underline hover:text-gray-700 transition-colors font-medium"
            >
              {content.signIn[locale as keyof typeof content.signIn]}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
