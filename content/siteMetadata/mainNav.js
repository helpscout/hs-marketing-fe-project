const FeaturesOptions = [
  {
    link: '#',
    title: 'Shared Inbox',
    icon: 'IconHelpDesk',
    description: 'Manage conversations at scale',
  },
  {
    link: '#',
    title: 'Reporting',
    icon: 'IconReports',
    description: 'Real-time data at your fingertips'
  },
  {
    link: '#',
    title: 'Knowledge Base',
    icon: 'IconDocs',
    description: 'Instant answers for customers'
  },
  {
    link: '#',
    title: 'Live Chat',
    icon: 'IconBeacon',
    description: 'Make your website more useful'
  },
  {
    link: '#',
    title: 'In-app Messaging',
    icon: 'IconMessages',
    description: 'Engage people on your website'
  },
  {
    link: '#',
    title: 'Integrations',
    icon: 'IconIntegrations',
    description: 'Connect the tools you already use',
  },
  {
    link: '#',
    title: 'Customer Management',
    icon: 'IconCustomers',
    description: 'Know your VIPs'
  },
];

const DesktopNavItems = [
  {
    title: 'Features',
    useTwoColumns: true,
    options: [
      ...FeaturesOptions,
      {
        link: '#',
        title: 'Company Plan',
        description: 'Designed to grow with teams of 25+',
        isButton: true,
      }
    ]
  },
  {
    title: 'Resources',
    options: [
      {
        link: '#',
        title: 'Success Stories',
        description: 'See how other teams use Help Scout'
      },
      {
        link: '#',
        title: 'Attend a Live Class',
        description: 'Help Scout tips, best practices, and Q&A'
      },
      {
        link: '#',
        title: 'Help Center',
        description: 'How-to articles about using Help Scout',
        isExternal: true
      },
      {
        link: '#',
        title: 'Contact Us',
        description: 'Get in touch with our team',
      }
    ]
  },
  {
    link: '#',
    title: 'Blog',
  },
  {
    title: 'Pricing',
    link: '#',
  },
];

const MobileNavItems = {
  primary: FeaturesOptions,
  secondary: [
    {
      link: '#',
      title: 'Company Plan',
    },
    {
      title: 'Pricing',
      link: '#',
    },
    {
      link: '#',
      title: 'Success Stories',
    },
    {
      link: '#',
      title: 'Blog',
    }
  ],
};

module.exports = {
  desktopItems: DesktopNavItems,
  mobileItems: MobileNavItems,
};
