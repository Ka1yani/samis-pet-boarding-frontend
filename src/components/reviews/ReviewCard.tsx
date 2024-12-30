import  { useState } from 'react';
import { Star } from 'lucide-react';
import { Review } from '../../types/review';
import { PlatformBadge } from './PlatformBadge';

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-start gap-4">
        <img
          src={review.avatarUrl}
          alt={review.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-900">{review.name}</h3>
            <PlatformBadge platform={review.platform} />
          </div>
          
          {review.rating && (
            <div className="flex items-center mt-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < (review.rating ?? 5) 
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
          )}
          
          <div className="mt-2">
            <p className={`text-gray-600 ${!isExpanded && 'line-clamp-3'}`}>
              {review.text}
            </p>
            {review.text.length > 150 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-1 text-purple-600 hover:text-purple-700 text-sm font-medium"
              >
                {isExpanded ? 'Show less' : 'Read more'}
              </button>
            )}
          </div>
          
          {review.petPhotoUrl && (
            <img
              src={review.petPhotoUrl}
              alt="Pet"
              className="mt-4 rounded-lg w-full h-48 object-cover"
            />
          )}
        </div>
      </div>
    </div>
  );
}