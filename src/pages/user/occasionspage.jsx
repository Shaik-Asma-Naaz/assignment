import { useState } from 'react';
import { Search, Cake, Heart, Gift, Sparkles, Music, Utensils, GraduationCap } from 'lucide-react';
import Navbar from '../../components/user/navbar/navbar';
import { Helmet } from "react-helmet";

const occasions = [
  { id: 1, title: 'Birthdays', Icon: Cake },
  { id: 2, title: 'Weddings', Icon: Heart },
  { id: 3, title: 'Holidays', Icon: Gift },
  { id: 4, title: 'Anniversaries', Icon: Sparkles },
  { id: 5, title: 'Parties', Icon: Music },
  { id: 6, title: 'Dinner Events', Icon: Utensils },
  { id: 7, title: 'Graduations', Icon: GraduationCap },
  { id: 8, title: 'Other Occasions', Icon: Gift },
];

export default function OccasionsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOccasions = occasions.filter((occasion) =>
    occasion.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Occasions | SaiFashionZone</title>
      </Helmet>
      <Navbar />
      <div className="min-h-screen bg-blue-50 py-12 px-4 sm:px-6 lg:px-8 animate-fadeIn">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-10 animate-slideUp">
            Shop by Occasion
          </h1>

          <div className="flex justify-center mb-8">
            <SearchInput value={searchTerm} onChange={setSearchTerm} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredOccasions.map((occasion) => (
              <OccasionCard
                key={occasion.id}
                title={occasion.title}
                Icon={occasion.Icon}
                className="transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:bg-blue-100"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function SearchInput({ value, onChange }) {
  return (
    <div className="relative w-full max-w-md animate-slideDown">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-6 py-3 border-2 border-blue-300 rounded-lg shadow-sm focus:ring-4 focus:ring-blue-300 focus:outline-none transition-all"
        placeholder="Search occasions..."
      />
      <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
    </div>
  );
}

function OccasionCard({ title, Icon, className }) {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-md text-center transition-all ${className}`}>
      <div className="icon-container animate-bounce">
        <Icon className="w-16 h-16 text-blue-500 mx-auto mb-4 transition-all duration-300 transform hover:scale-110" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
  );
}
