import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Opportunity } from '../data/opportunities';

interface OpportunityCardProps {
  opportunity: Opportunity;
}

export function OpportunityCard({ opportunity }: OpportunityCardProps) {
  return (
    <Link
      to={`/opportunity/${opportunity.id}`}
      className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Header Image */}
      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
        <img
          src={opportunity.logoUrl}
          alt={opportunity.organization}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-gray-700">
            {opportunity.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
          {opportunity.title}
        </h3>
        
        <p className="text-gray-600 mb-4">{opportunity.organization}</p>

        <p className="text-gray-600 mb-4 line-clamp-2">{opportunity.description}</p>

        {/* Footer Info */}
        <div className="flex items-center gap-4 mb-4 text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{opportunity.deadline}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>{opportunity.mode}</span>
          </div>
        </div>

        {/* View Button */}
        <div className="flex items-center gap-2 text-blue-600 group-hover:gap-3 transition-all">
          <span>View Opportunity</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
}
