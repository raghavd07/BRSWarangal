export const navLinks = [
  {
    name: 'Home',
    href: '#top',
    hasDropdown: false
  },
  {
    name: 'About',
    href: '#about',
    hasDropdown: true,
    sublinks: [
      { name: 'Warangal West Overview', href: '#about', desc: 'Geography, demographics & heritage' },
      { name: 'Constituency Leadership', href: '#leadership', desc: 'Profiles of constituency leaders' },
      { name: 'Historical Heritage', href: '#about', desc: 'Kakatiya dynasty roots and significance' }
    ]
  },
  {
    name: 'Media',
    href: '#media-strip',
    hasDropdown: true,
    sublinks: [
      { name: 'Latest News & Circulars', href: '#news', desc: 'Official press statements & updates' },
      { name: 'Photo Gallery', href: '#photos', desc: 'High-resolution photo coverage' },
      { name: 'Video Archive', href: '#videos', desc: 'Speeches and recorded sessions' }
    ]
  },
  {
    name: 'Downloads',
    href: '#downloads',
    hasDropdown: true,
    sublinks: [
      { name: 'Party Constitution', href: '#downloads', desc: 'Ideology and guiding principles' },
      { name: 'Grievance Application Form', href: '#downloads', desc: 'Downloadable citizen form (PDF)' },
      { name: 'Membership Guidelines', href: '#downloads', desc: 'Cadre registration details' }
    ]
  },
  {
    name: 'Contact Us',
    href: '#contact',
    hasDropdown: false
  },
  {
    name: 'Manifesto / Documents',
    href: '#manifesto',
    hasDropdown: true,
    sublinks: [
      { name: 'BRS Party Manifesto', href: '#manifesto', desc: 'Core policies & public commitments' },
      { name: 'Warangal West Development Vision', href: '#manifesto', desc: 'Strategic local infrastructure plan' },
      { name: 'Annual Welfare Report', href: '#manifesto', desc: 'Progress and achievement summaries' }
    ]
  },
  {
    name: 'Poll Information',
    href: '#poll-info',
    hasDropdown: true,
    sublinks: [
      { name: 'Voter Registration Guide', href: '#poll-info', desc: 'How to register on NVSP / EC portal' },
      { name: 'Polling Station Locator', href: '#poll-info', desc: 'Find your local polling booth' },
      { name: 'Election Commission Helpline', href: '#poll-info', desc: 'Toll-free 1950 assistance' }
    ]
  }
];

export const socialLinks = [
  { name: 'Facebook', url: 'https://facebook.com', icon: 'facebook', label: 'BRS Facebook Page' },
  { name: 'X / Twitter', url: 'https://x.com', icon: 'x', label: 'BRS Twitter / X Profile' },
  { name: 'Instagram', url: 'https://instagram.com', icon: 'instagram', label: 'BRS Instagram' },
  { name: 'YouTube', url: 'https://youtube.com', icon: 'youtube', label: 'BRS Official YouTube Channel' }
];
