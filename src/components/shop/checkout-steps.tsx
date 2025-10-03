interface CheckoutStepsProps {
  currentStep: 1 | 2 | 3;
  locale: 'en' | 'pt' | 'es' | 'fr';
}

export function CheckoutSteps({ currentStep, locale }: CheckoutStepsProps) {
  const steps = {
    en: ['Cart', 'Checkout', 'Confirmation'],
    pt: ['Carrinho', 'Checkout', 'Confirmação'],
    es: ['Carrito', 'Checkout', 'Confirmación'],
    fr: ['Panier', 'Checkout', 'Confirmation'],
  };

  return (
    <div className="flex items-center justify-center gap-4 mb-12">
      {steps[locale].map((step, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isCompleted = stepNumber < currentStep;

        return (
          <div key={index} className="flex items-center gap-4">
            {/* Step Circle */}
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-black text-white'
                    : isCompleted
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {isCompleted ? '✓' : stepNumber}
              </div>
              <span
                className={`text-xs mt-2 ${isActive ? 'text-black font-medium' : 'text-gray-500'}`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {step}
              </span>
            </div>

            {/* Connector Line */}
            {index < steps[locale].length - 1 && (
              <div
                className={`w-16 h-[2px] ${
                  stepNumber < currentStep ? 'bg-green-600' : 'bg-gray-200'
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
