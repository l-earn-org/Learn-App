import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { OpportunityCard } from '../components/OpportunityCard';
import { opportunities } from '../data/opportunities';
import { Search, Filter } from 'lucide-react';

export function Opportunities() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedMode, setSelectedMode] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredOpportunities = useMemo(() => {
    return opportunities.filter(opp => {
      const matchesSearch = searchQuery === '' || 
        opp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        opp.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
        opp.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || opp.category === selectedCategory;
      const matchesMode = selectedMode === 'all' || opp.mode === selectedMode;

      return matchesSearch && matchesCategory && matchesMode;
    });
  }, [searchQuery, selectedCategory, selectedMode]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams({ search: searchQuery, category: selectedCategory });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-gray-900 mb-6">All Opportunities</h1>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by title, organization, or keyword..."
                  className="flex-1 outline-none bg-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <button
                type="button"
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden flex items-center gap-2 px-6 py-3 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
              >
                <Filter className="w-5 h-5" />
                <span>Filters</span>
              </button>
            </div>
          </form>

          {/* Filters */}
          <div className={`${showFilters ? 'block' : 'hidden'} md:block`}>
            <div className="flex flex-wrap gap-4">
              <select
                className="px-4 py-2 rounded-xl border border-gray-200 outline-none cursor-pointer hover:border-blue-500 transition-colors"
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

              <select
                className="px-4 py-2 rounded-xl border border-gray-200 outline-none cursor-pointer hover:border-blue-500 transition-colors"
                value={selectedMode}
                onChange={(e) => setSelectedMode(e.target.value)}
              >
                <option value="all">All Modes</option>
                <option value="Remote">Remote</option>
                <option value="On-site">On-site</option>
                <option value="Hybrid">Hybrid</option>
              </select>

              {(selectedCategory !== 'all' || selectedMode !== 'all' || searchQuery) && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setSelectedMode('all');
                    setSearchParams({});
                  }}
                  className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6">
            <p className="text-gray-600">
              Showing {filteredOpportunities.length} {filteredOpportunities.length === 1 ? 'opportunity' : 'opportunities'}
            </p>
          </div>
        </div>
      </div>

      {/* Opportunities Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredOpportunities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredOpportunities.map(opportunity => (
              <OpportunityCard key={opportunity.id} opportunity={opportunity} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-gray-900 mb-2">No opportunities found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters or search query
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedMode('all');
                setSearchParams({});
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
