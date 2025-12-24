import { Briefcase, GraduationCap, Award, DollarSign, Gift, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const categories = [
	{ name: 'Internships', icon: Briefcase, color: 'from-blue-500 to-blue-600' },
	{ name: 'Jobs', icon: Briefcase, color: 'from-green-500 to-green-600' },
	{ name: 'Fellowships', icon: Award, color: 'from-purple-500 to-purple-600' },
	{ name: 'Scholarships', icon: GraduationCap, color: 'from-pink-500 to-pink-600' },
	{ name: 'Grants', icon: DollarSign, color: 'from-orange-500 to-orange-600' },
	{ name: 'Events', icon: Calendar, color: 'from-indigo-500 to-indigo-600' },
];

export function Categories() {
	const navigate = useNavigate();

	const handleCategoryClick = (categoryName: string) => {
		navigate(`/opportunities?category=${categoryName}`);
	};

	return null;
}
