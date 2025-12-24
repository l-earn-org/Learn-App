import { useParams, Link } from 'react-router-dom';
import { opportunities } from '../data/opportunities';
import { Calendar, MapPin, ExternalLink, ArrowLeft, Tag } from 'lucide-react';

export function OpportunityDetails() {
  const { id } = useParams();
  const opportunity = opportunities.find(opp => opp.id === id);

  if (!opportunity) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-gray-900 mb-4">Opportunity Not Found</h2>
          <Link to="/opportunities" className="text-blue-600 hover:text-blue-700">
            ← Back to Opportunities
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/opportunities"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Opportunities</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {/* Header Image */}
          <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200">
            <img
              src={opportunity.logoUrl}
              alt={opportunity.organization}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Category Badge */}
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full">
                <Tag className="w-4 h-4" />
                {opportunity.category}
              </span>
            </div>

            {/* Title & Organization */}
            <h1 className="text-gray-900 mb-2">{opportunity.title}</h1>
            <p className="text-gray-600 mb-6">{opportunity.organization}</p>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b">
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-5 h-5" />
                <div>
                  <p className="text-gray-500">Deadline</p>
                  <p className="text-gray-900">{opportunity.deadline}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-5 h-5" />
                <div>
                  <p className="text-gray-500">Location</p>
                  <p className="text-gray-900">{opportunity.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Tag className="w-5 h-5" />
                <div>
                  <p className="text-gray-500">Mode</p>
                  <p className="text-gray-900">{opportunity.mode}</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-gray-900 mb-4">About This Opportunity</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {opportunity.fullDescription || opportunity.description}
              </p>
            </div>

            {/* Requirements */}
            {opportunity.requirements && opportunity.requirements.length > 0 && (
              <div className="mb-8">
                <h3 className="text-gray-900 mb-4">Requirements</h3>
                <ul className="space-y-2">
                  {opportunity.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Benefits */}
            {opportunity.benefits && opportunity.benefits.length > 0 && (
              <div className="mb-8">
                <h3 className="text-gray-900 mb-4">Benefits</h3>
                <ul className="space-y-2">
                  {opportunity.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Apply Button */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
              <h3 className="text-gray-900 mb-4">Ready to Apply?</h3>
              <a
                href={opportunity.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all"
              >
                <span>Apply on Official Website</span>
                <ExternalLink className="w-5 h-5" />
              </a>
              <p className="text-gray-600 mt-4">
                You'll be redirected to the official application page
              </p>
            </div>
          </div>
        </div>

        {/* Related Opportunities */}
        <div className="mt-12">
          <h2 className="text-gray-900 mb-6">More Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {opportunities
              .filter(opp => opp.id !== opportunity.id && opp.category === opportunity.category)
              .slice(0, 3)
              .map(opp => (
                <Link
                  key={opp.id}
                  to={`/opportunity/${opp.id}`}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all"
                >
                  <h3 className="text-gray-900 mb-2 line-clamp-2">{opp.title}</h3>
                  <p className="text-gray-600 mb-2">{opp.organization}</p>
                  <p className="text-gray-500">{opp.deadline}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
