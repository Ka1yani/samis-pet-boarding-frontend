import { ServiceGrid } from './ServiceGrid';
import { useTheme } from '../../contexts/ThemeContext'; // Import the useTheme hook

export function ServicesSection() {
  const { theme } = useTheme(); // Use the theme from the context

  return (
    <section id="services" className={`py-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold sm:text-4xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Our Pet Care Services
          </h2>
          <p className={`mt-4 text-xl max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Professional care services tailored to your pet's needs. Choose from our range of 
            premium boarding and grooming options.
          </p>
        </div>
        <ServiceGrid />
      </div>
    </section>
  );
}