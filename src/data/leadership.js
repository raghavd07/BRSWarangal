import kcrImg from '../assets/images/KCR.png';
import ktrImg from '../assets/images/KTR.png';
import vinayBhaskarImg from '../assets/images/Vinay Bhaskar.png';

export const leadershipData = [
  {
    id: 'vinay-bhaskar',
    name: 'D. Vinay Bhaskar',
    teluguName: 'దాస్యం వినయ్ భాస్కర్',
    role: 'Constituency Leader & Former MLA',
    designation: 'Former Government Chief Whip & MLA, Warangal',
    constituency: 'Warangal East Constituency',
    image: vinayBhaskarImg,
    isPrimary: true,
    tagline: 'Committed to the grassroots development and citizen welfare of Warangal East.',
    bio: 'A seasoned public servant dedicated to advancing urban infrastructure, public amenities, healthcare access, and youth opportunities across all wards of Warangal East.',
    initiatives: [
      'Constituency Grievance Redressal Program',
      'Urban Road & Drainage Modernization',
      'Community Halls & Sports Facilities',
      'Youth & Women Skill Development Programs'
    ],
    badge: 'Constituency Leadership'
  },
  {
    id: 'ktr',
    name: 'K. T. Rama Rao',
    teluguName: 'కల్వకుంట్ల తారక రామారావు',
    role: 'Working President, BRS Party',
    designation: 'Former Minister for IT, E&C, MA&UD and Industries',
    constituency: 'Telangana State Leadership',
    image: ktrImg,
    isPrimary: false,
    tagline: 'Driving technological innovation, sustainable urban planning, and industrial growth.',
    bio: 'Pioneered progressive industrial policies, world-class IT hubs, and comprehensive municipal infrastructure transformations throughout Telangana.',
    initiatives: [
      'Kakatiya Mega Textile Park Development',
      'IT Towers & Regional Innovation Ecosystems',
      'Strategic Road Development Plan (SRDP)',
      'Mission Bhagiratha Urban Potable Water'
    ],
    badge: 'Working President'
  },
  {
    id: 'kcr',
    name: 'K. Chandrashekar Rao',
    teluguName: 'కల్వకుంట్ల చంద్రశేఖర్ రావు',
    role: 'Founder & President, BRS Party',
    designation: 'Former Chief Minister of Telangana',
    constituency: 'Founder & Visionary Leader',
    image: kcrImg,
    isPrimary: false,
    tagline: 'The architect of Telangana Statehood and leader of transformative welfare missions.',
    bio: 'Led the historic 14-year statehood agitation with steadfast resolve and governed Telangana through unprecedented rural, irrigation, and social security revolutions.',
    initiatives: [
      'Telangana Statehood Movement Leadership',
      'Kaleshwaram Lift Irrigation Scheme',
      'Rythu Bandhu & Rythu Bima Farmer Support',
      'KCR Kit & Welfare Safety Net Infrastructure'
    ],
    badge: 'Party President & Founder'
  }
];
