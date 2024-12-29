import { useState, useEffect } from 'react';
import { Review } from '../types/review';

export function useReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Simulated API call - replace with actual API integration
    const fetchReviews = async () => {
      try {
        // Simulated data
        const mockReviews: Review[] = [
          {
            id: '1',
            name: 'Sarah Johnson',
            avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
            text: 'Amazing experience! My dog Luna had the best time here. The staff was incredibly caring and sent us updates throughout her stay. The facilities are clean and spacious. Highly recommend!',
            rating: 5,
            platform: 'google',
            petPhotoUrl: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb',
            date: '2024-03-15'
          },
          {
            id: '2',
            name: 'Mike Peters',
            avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
            text: 'Best pet boarding service in town! My cat Oliver is usually anxious at other places, but he settled right in here. The daily photos on Instagram were a lovely touch.',
            rating: 5,
            platform: 'instagram',
            date: '2024-03-10'
          },
          {
            id: '3',
            name: 'Emily Chen',
            avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
            text: 'Professional, caring, and attentive staff. They took excellent care of my pets during our vacation. The facility is modern and well-maintained. Will definitely use their services again!',
            rating: 5,
            platform: 'google',
            petPhotoUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba',
            date: '2024-03-05'
          }
        ];

        setReviews(mockReviews);
        setIsLoading(false);
      } catch (err) {
        setError(err as Error);
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return { reviews, isLoading, error };
}