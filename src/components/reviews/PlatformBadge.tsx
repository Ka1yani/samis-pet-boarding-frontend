import { Instagram } from 'lucide-react';
import { Platform } from '../../types/review';

interface PlatformBadgeProps {
  platform: Platform;
}

export function PlatformBadge({ platform }: PlatformBadgeProps) {
  const getPlatformIcon = () => {
    switch (platform) {
      case 'instagram':
        return <Instagram className="h-4 w-4" />;
      case 'google':
        return (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
            alt="Google"
            className="h-4 w-4"
          />
        );
      default:
        return null;
    }
  };

  const getPlatformColor = () => {
    switch (platform) {
      case 'instagram':
        return 'bg-pink-50 text-pink-600';
      case 'google':
        return 'bg-blue-50 text-blue-600';
      default:
        return 'bg-gray-50 text-gray-600';
    }
  };

  return (
    <a
      href={`https://${platform}.com`}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getPlatformColor()}`}
    >
      {getPlatformIcon()}
      <span className="capitalize">{platform}</span>
    </a>
  );
}