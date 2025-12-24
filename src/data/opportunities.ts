export interface Opportunity {
  id: string;
  title: string;
  organization: string;
  category: 'Internships' | 'Jobs' | 'Fellowships' | 'Scholarships' | 'Grants' | 'Events';
  description: string;
  deadline: string;
  location: string;
  mode: 'Remote' | 'On-site' | 'Hybrid';
  logoUrl: string;
  externalLink: string;
  requirements?: string[];
  benefits?: string[];
  fullDescription?: string;
  featured?: boolean;
}

export const opportunities: Opportunity[] = [
  {
    id: '1',
    title: 'Software Engineering Internship',
    organization: 'Google',
    category: 'Internships',
    description: 'Join Google as a Software Engineering Intern and work on cutting-edge technologies that impact billions of users worldwide.',
    deadline: 'Dec 31, 2025',
    location: 'Mountain View, CA',
    mode: 'Hybrid',
    logoUrl: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=400&h=400&fit=crop',
    externalLink: 'https://careers.google.com',
    featured: true,
    requirements: [
      'Currently pursuing a Bachelor\'s or Master\'s degree in Computer Science',
      'Strong programming skills in one or more languages',
      'Problem-solving and analytical thinking abilities',
      'Excellent communication skills'
    ],
    benefits: [
      'Competitive compensation and benefits',
      'Mentorship from industry leaders',
      'Access to Google\'s resources and tools',
      'Networking opportunities with professionals'
    ],
    fullDescription: 'Google\'s Software Engineering Internship program offers students the opportunity to work on real projects that impact billions of users. You\'ll collaborate with talented engineers, receive mentorship, and gain hands-on experience with cutting-edge technologies. This internship is designed to provide meaningful work experience and help you develop your technical and professional skills.'
  },
  {
    id: '2',
    title: 'Mastercard Foundation Scholars Program',
    organization: 'Mastercard Foundation',
    category: 'Scholarships',
    description: 'Full scholarship for African students to pursue undergraduate and graduate studies at partner universities worldwide.',
    deadline: 'Jan 15, 2026',
    location: 'Various Countries',
    mode: 'On-site',
    logoUrl: 'https://images.unsplash.com/photo-1633158829875-e5316a358c6f?w=400&h=400&fit=crop',
    externalLink: 'https://mastercardfdn.org',
    featured: true,
    requirements: [
      'African citizen with demonstrated financial need',
      'Strong academic record',
      'Leadership potential and commitment to giving back',
      'English proficiency'
    ],
    benefits: [
      'Full tuition coverage',
      'Living expenses and accommodation',
      'Travel costs',
      'Leadership development programs',
      'Mentorship and career support'
    ],
    fullDescription: 'The Mastercard Foundation Scholars Program provides comprehensive support for academically talented yet economically disadvantaged African students. Beyond financial assistance, the program offers leadership development, mentorship, and a commitment to transforming communities across Africa.'
  },
  {
    id: '3',
    title: 'UN Youth Leadership Fellowship',
    organization: 'United Nations',
    category: 'Fellowships',
    description: 'A prestigious fellowship program for emerging leaders to work on sustainable development goals and global initiatives.',
    deadline: 'Feb 28, 2026',
    location: 'New York, USA',
    mode: 'Hybrid',
    logoUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=400&fit=crop',
    externalLink: 'https://www.un.org',
    featured: true,
    requirements: [
      'Age 21-30 years',
      'Bachelor\'s degree in relevant field',
      'Demonstrated leadership experience',
      'Fluency in English (other UN languages a plus)'
    ],
    benefits: [
      'Monthly stipend',
      'Professional development workshops',
      'Networking with global leaders',
      'Certificate of completion',
      'Career advancement opportunities'
    ],
    fullDescription: 'The UN Youth Leadership Fellowship brings together young leaders from around the world to work on critical global challenges. Fellows engage with UN agencies, participate in high-level meetings, and develop solutions for sustainable development.'
  },
  {
    id: '4',
    title: 'Data Analyst Position',
    organization: 'Microsoft',
    category: 'Jobs',
    description: 'Entry-level data analyst role focusing on business intelligence and data-driven decision making.',
    deadline: 'Dec 20, 2025',
    location: 'Remote',
    mode: 'Remote',
    logoUrl: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&h=400&fit=crop',
    externalLink: 'https://careers.microsoft.com',
    requirements: [
      'Bachelor\'s degree in Data Science, Statistics, or related field',
      'Proficiency in SQL and data visualization tools',
      'Strong analytical and problem-solving skills',
      '1-2 years of experience preferred'
    ],
    benefits: [
      'Competitive salary and benefits',
      'Remote work flexibility',
      'Professional development opportunities',
      'Health and wellness programs'
    ],
    fullDescription: 'Join Microsoft\'s data analytics team to help drive business decisions through data insights. You\'ll work with cross-functional teams to analyze data, create visualizations, and provide actionable recommendations.'
  },
  {
    id: '5',
    title: 'Innovation Grant for Young Entrepreneurs',
    organization: 'African Development Bank',
    category: 'Grants',
    description: 'Funding opportunity for innovative projects addressing social and economic challenges in Africa.',
    deadline: 'Mar 15, 2026',
    location: 'Africa',
    mode: 'Remote',
    logoUrl: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=400&fit=crop',
    externalLink: 'https://www.afdb.org',
    requirements: [
      'Age 18-35 years',
      'African citizen or resident',
      'Innovative project proposal',
      'Clear social or economic impact plan'
    ],
    benefits: [
      'Grant funding up to $50,000',
      'Mentorship and business support',
      'Access to investor networks',
      'Technical assistance'
    ],
    fullDescription: 'This grant program supports young African entrepreneurs with innovative solutions to pressing challenges. Successful applicants receive funding, mentorship, and access to networks that can help scale their impact.'
  },
  {
    id: '6',
    title: 'Global Tech Summit 2026',
    organization: 'TechCrunch',
    category: 'Events',
    description: 'Annual gathering of tech innovators, investors, and entrepreneurs from around the world.',
    deadline: 'Jan 10, 2026',
    location: 'San Francisco, CA',
    mode: 'Hybrid',
    logoUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=400&fit=crop',
    externalLink: 'https://techcrunch.com',
    requirements: [
      'Student or early-career professional',
      'Interest in technology and innovation',
      'Application with motivation statement'
    ],
    benefits: [
      'Free or discounted attendance',
      'Networking opportunities',
      'Access to workshops and panels',
      'Meet potential employers and investors'
    ],
    fullDescription: 'The Global Tech Summit brings together the brightest minds in technology for three days of learning, networking, and innovation. Attendees can participate in workshops, hear from industry leaders, and connect with peers from around the world.'
  },
  {
    id: '7',
    title: 'Marketing Internship',
    organization: 'Meta',
    category: 'Internships',
    description: 'Help shape marketing campaigns for products used by billions of people worldwide.',
    deadline: 'Jan 30, 2026',
    location: 'London, UK',
    mode: 'Hybrid',
    logoUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=400&fit=crop',
    externalLink: 'https://www.metacareers.com',
    requirements: [
      'Pursuing degree in Marketing, Business, or related field',
      'Strong communication skills',
      'Creative thinking and analytical mindset',
      'Familiarity with social media platforms'
    ],
    benefits: [
      'Hands-on marketing experience',
      'Mentorship from marketing professionals',
      'Competitive pay and perks',
      'Potential for full-time conversion'
    ],
    fullDescription: 'Meta\'s Marketing Internship offers exposure to global marketing campaigns and strategies. You\'ll work on real projects, collaborate with cross-functional teams, and learn from some of the best marketers in the industry.'
  },
  {
    id: '8',
    title: 'Chevening Scholarships',
    organization: 'UK Government',
    category: 'Scholarships',
    description: 'Fully-funded scholarships for outstanding emerging leaders to pursue one-year master\'s degrees in the UK.',
    deadline: 'Nov 7, 2025',
    location: 'United Kingdom',
    mode: 'On-site',
    logoUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=400&fit=crop',
    externalLink: 'https://www.chevening.org',
    requirements: [
      'Citizen of a Chevening-eligible country',
      'Undergraduate degree',
      'At least 2 years of work experience',
      'Leadership and networking skills'
    ],
    benefits: [
      'Full tuition fees',
      'Monthly living allowance',
      'Travel costs to and from the UK',
      'Access to exclusive events',
      'Global Chevening alumni network'
    ],
    fullDescription: 'Chevening Scholarships enable outstanding emerging leaders from around the world to pursue one-year master\'s degrees in the UK. The program seeks individuals with leadership potential who can demonstrate how they will contribute to positive change in their home countries.'
  },
  {
    id: '9',
    title: 'Research Fellowship in AI Ethics',
    organization: 'MIT Media Lab',
    category: 'Fellowships',
    description: 'Research position exploring ethical implications of artificial intelligence and machine learning.',
    deadline: 'Feb 15, 2026',
    location: 'Cambridge, MA',
    mode: 'On-site',
    logoUrl: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=400&h=400&fit=crop',
    externalLink: 'https://www.media.mit.edu',
    requirements: [
      'Master\'s or PhD in Computer Science, Philosophy, or related field',
      'Research experience in AI or ethics',
      'Strong publication record',
      'Collaborative mindset'
    ],
    benefits: [
      'Research stipend',
      'Access to MIT resources and facilities',
      'Collaboration with leading researchers',
      'Publication opportunities',
      'Conference travel support'
    ],
    fullDescription: 'This fellowship at MIT Media Lab focuses on the ethical dimensions of AI development and deployment. Fellows conduct original research, publish findings, and engage with the broader academic and tech communities on critical questions about AI\'s role in society.'
  }
];
