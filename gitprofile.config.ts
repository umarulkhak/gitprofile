// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'umarulkhak', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['umarulkhak/si-sdm', 'umarulkhak/edomphb-lstm', 'umarulkhak/sambang-frontend', 'umarulkhak/sikisqu-app'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Achievement',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: '🏆 Finalis TECHCOMFES SOFTWARE DEVELOPMENT COMPETITION.',
          description:
            'Issued by Politeknik Negeri Semarang (February 2021)',
          imageUrl:
            'https://img.freepik.com/free-vector/trophy-award-laurel-wreath-composition-with-realistic-image-golden-cup-decorated-with-garland-with-reflection_1284-32301.jpg?t=st=1723149808~exp=1723153408~hmac=6a7f23d5dbb671a4680661d106e3bdd463ed918c579440cae97749e46af3fd48&w=740',
          link: '',
        },
        {
          title: '🏆 2nd Place Winner of the Apps Competition at UBP TECHNO DAY 5.0.',
          description:
            'Issued by Universitas Buana Perjuangan Karawang (February 2021)',
          imageUrl:
            'https://img.freepik.com/free-vector/trophy-award-laurel-wreath-composition-with-realistic-image-golden-cup-decorated-with-garland-with-reflection_1284-32301.jpg?t=st=1723149808~exp=1723153408~hmac=6a7f23d5dbb671a4680661d106e3bdd463ed918c579440cae97749e46af3fd48&w=740',
          link: '',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Umar Ulkhak',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'umar-ulkhak',
    twitter: 'ulkhak24',
    researchGate: '',
    facebook: '',
    instagram: 'ulkhak24',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'ulkhak24',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    phone: '',
    email: 'alkhak24@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1wMA9Yp_uPZP9R0lbshRgI1wOUbQB3TfZ/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'HTML',
    'JavaScript',
    'Python',
    'Flask',
    'Golang',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'PHPUnit',
    'CSS',
    'Antd',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'PT. Seger Agro Nusantara',
      position: 'Software Engineer',
      from: 'February 2023',
      to: 'December 2023',
      companyLink: 'https://www.seger.co.id/id/',
    },
    {
      company: 'PT Huawei Tech Investment',
      position: 'Artificial Intelligence',
      from: 'September 2021',
      to: 'February 2022',
      companyLink: 'https://www.huawei.com/en/corporate-information',
    },
    {
      company: 'PT.Hensindo Tama, adv',
      position: 'Graphic Designer',
      from: 'October 2019',
      to: 'December 2020',
      companyLink: 'https://www.huawei.com/en/corporate-information',
    },
  ],
  certifications: [
    {
      name: 'Golang for Back End Developer',
      body: 'Hacktiv8 Indonesia',
      year: 'July 2024',
      link: '',
    },
    {
      name: 'UI/UX Aplikasi Mobile',
      body: 'GeTI Incubator',
      year: 'May 2024',
      link: '',
    },
    {
      name: 'Database Design and Programming with SQL',
      body: 'Oracle',
      year: 'February 2019',
      link: '',
    },
    {
      name: 'Linux Essentials',
      body: 'Linux Professional Institute (LPI)',
      year: 'June 2018',
      link: '',
    },
    {
      name: 'IT Essentials',
      body: 'Cisco Networking Academy',
      year: 'February 2018',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'Politeknik Harapan Bersama',
      degree: 'Degree',
      from: '2017',
      to: '2022',
    },
    {
      institution: 'SMA N 01 Larangan',
      degree: 'Senior High School',
      from: '2014',
      to: '2017',
    },
  ],
  publications: [
    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'ulkhak24', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  enablePWA: true,
};

export default CONFIG;
