import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { CopyButton } from '../shared/CopyButton';

export function ContactInfo() {
  const email = 'contact@samispetboarding.com';
  const phone = '+1-800-555-PAWS';

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
      
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="bg-purple-100 p-2 rounded-full">
            <Mail className="h-6 w-6 text-purple-600" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-500">Email</p>
            <div className="mt-1 flex items-center space-x-2">
              <a
                href={`mailto:${email}`}
                className="text-gray-900 hover:text-purple-600 transition-colors"
              >
                {email}
              </a>
              <CopyButton text={email} />
            </div>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="bg-purple-100 p-2 rounded-full">
            <Phone className="h-6 w-6 text-purple-600" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-500">Phone</p>
            <div className="mt-1 flex items-center space-x-2">
              <a
                href={`tel:${phone.replace(/\D/g, '')}`}
                className="text-gray-900 hover:text-purple-600 transition-colors"
              >
                {phone}
              </a>
              <CopyButton text={phone} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}