import React from 'react';

interface PriceTagProps {
  amount: string;
  period?: string;
  className?: string;
}

export function PriceTag({ amount, period, className = '' }: PriceTagProps) {
  return (
    <div className={`inline-flex items-baseline ${className}`}>
      <span className="text-2xl font-semibold text-gray-900">{amount}</span>
      {period && (
        <span className="ml-1 text-gray-500">/{period}</span>
      )}
    </div>
  );
}