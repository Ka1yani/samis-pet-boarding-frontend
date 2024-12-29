import { MapPin } from 'lucide-react';

export function LocationMap() {
  const address = "123 Pet Haven Lane, Pawsville, CA 90210";
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(address)}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 h-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Our Location</h3>
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors"
        >
          <MapPin className="h-5 w-5" />
          <span>Get Directions</span>
        </a>
      </div>
      
      <div className="aspect-video w-full rounded-lg overflow-hidden">
        <iframe
          title="Sami's Pet Boarding Location"
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      
      <p className="mt-4 text-gray-600">{address}</p>
    </div>
  );
}