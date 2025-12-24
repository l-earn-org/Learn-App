import { Search } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Hero() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/opportunities?search=${searchQuery}&category=${selectedCategory}`);
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="max-w-3xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4 bg-white rounded-2xl shadow-lg p-2">
            <div className="flex-1 flex items-center gap-3 px-4">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search opportunities..."
                className="flex-1 outline-none bg-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2">
              <select
                className="px-4 py-3 rounded-xl border-0 bg-gray-50 outline-none cursor-pointer"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                <option value="Internships">Internships</option>
                <option value="Jobs">Jobs</option>
                <option value="Fellowships">Fellowships</option>
                <option value="Scholarships">Scholarships</option>
                <option value="Grants">Grants</option>
                <option value="Events">Events</option>
              </select>
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all"
              >
                Search
              </button>
            </div>
          </div>
        </form>
          
        <div className="text-center">
          {/* Title */}
          <h1 className="text-gray-900 mb-6 max-w-4xl mx-auto">
            ✨ Discover Life-Changing Opportunities for Students & Youth
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Curated internships, fellowships, jobs, grants & scholarships—posted by us, updated daily.
          </p>

          
        </div>
      </div>
    </div>
  );
}
