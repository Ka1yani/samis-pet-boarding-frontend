import { useTheme } from '../../contexts/ThemeContext'; 
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  imageUrl: string;
  price: string;
  href: string;
}

export function ServiceCard({ title, description, icon: Icon, imageUrl, price, href }: ServiceCardProps) {
  const { theme } = useTheme(); // Use the theme from the context

  return (
    <div className={`rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02] ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'}`}>
      <div className="relative h-48">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className={`absolute top-4 right-4 p-2 rounded-full shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
          <Icon className={`h-6 w-6 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`} />
        </div>
      </div>
      <div className="p-6">
        <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
        <p className={`mt-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className={`font-semibold ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`}>{price}</span>
          <a
            href={href}
            className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white ${theme === 'dark' ? 'bg-purple-500 hover:bg-purple-600' : 'bg-purple-600 hover:bg-purple-700'}`}
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}