// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/csi/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/csi/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Selected research and publications from the Cognitive Science Initiative at the University of Mannheim",
          section: "Navigation",
          handler: () => {
            window.location.href = "/csi/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Here are the projects of the group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/csi/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "respositories of the CSI members",
          section: "Navigation",
          handler: () => {
            window.location.href = "/csi/repositories/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "information about our activities like guest lectures, talks, workshops",
          section: "Navigation",
          handler: () => {
            window.location.href = "/csi/activities/";
          },
        },{id: "nav-people",
          title: "people",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/csi/people/";
          },
        },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/csi/books/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/csi/blog/";
              },
            },{id: "post-meeting-9-working-on-representations",
        
          title: "Meeting 9: working on representations",
        
        description: "Working on representations",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/csi/blog/2026/meeting10-reps/";
          
        },
      },{id: "post-meeting-9-working-on-representations",
        
          title: "Meeting 9: working on representations",
        
        description: "Working on representations",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/csi/blog/2026/meeting9-reps/";
          
        },
      },{id: "post-meeting-8-working-on-representations",
        
          title: "Meeting 8: working on representations",
        
        description: "Working on representations",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/csi/blog/2026/meeting8-reps/";
          
        },
      },{id: "post-meeting-7-working-on-representations",
        
          title: "Meeting 7: working on representations",
        
        description: "Working on representations",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/csi/blog/2026/meeting7-reps/";
          
        },
      },{id: "post-meeting-6-working-on-representations",
        
          title: "Meeting 6: working on representations",
        
        description: "Working on representations",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/csi/blog/2026/meeting6-reps/";
          
        },
      },{id: "post-meeting-5-final-steps-to-submitting-the-joint-proposal-before-the-deadline",
        
          title: "Meeting 5: final steps to submitting the joint proposal before the deadline",
        
        description: "Working on the nomination proposal with Charles",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/csi/blog/2026/meeting5-reps/";
          
        },
      },{id: "post-meeting-4-working-on-our-joint-proposal",
        
          title: "Meeting 4: working on our joint proposal",
        
        description: "Working on the nomination proposal with Charles",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/csi/blog/2026/meeting4-reps/";
          
        },
      },{id: "post-meeting-3-working-on-representations",
        
          title: "Meeting 3: working on representations",
        
        description: "Discussing representations and the nomination proposal with Charles",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/csi/blog/2026/meeting3-reps/";
          
        },
      },{id: "post-meeting-2-working-on-representations",
        
          title: "Meeting 2: working on representations",
        
        description: "Discussing representations",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/csi/blog/2026/meeting2-reps/";
          
        },
      },{id: "post-launching-the-cognitive-science-initiative-at-mannheim",
        
          title: "Launching the Cognitive Science Initiative at Mannheim",
        
        description: "A new home for interdisciplinary research in Cognitive Science.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/csi/blog/2026/welcome-to-cogsci-mannheim/";
          
        },
      },{id: "post-meeting-1-working-on-representations",
        
          title: "Meeting 1: working on representations",
        
        description: "Discussing representations",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/csi/blog/2026/meeting1-reps/";
          
        },
      },{id: "books-representation-of-language-philosophical-issues-in-a-chomskyan-linguistics",
          title: 'Representation of Language: Philosophical Issues in a Chomskyan Linguistics',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/csi/books/rey-representations/";
            },},{id: "books-the-illusion-engine-the-quest-for-machine-consciousness",
          title: 'The Illusion Engine: The Quest for Machine Consciousness',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/csi/books/sekrst-illustion-engine/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/csi/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'Project 1',
          description: "Representations in cognitive science",
          section: "Projects",handler: () => {
              window.location.href = "/csi/projects/1_project/";
            },},{id: "teachings-lecture-unwrapping-the-mind-knowledge-cognition-and-ai",
          title: 'Lecture Unwrapping the mind: knowledge, cognition and AI',
          description: "In this lecture series, experts in cognitive science explored what makes human cognition exceptional (if at all), how AI challenges our understanding of intelligence, and what we can gain from integrating AI into cognitive research. We will also address how insights from human cognition can help develop more efficient, interpretable AI models and examine the ethical considerations that come with their use.",
          section: "Teachings",handler: () => {
              window.location.href = "/csi/teachings/lecture-unwrapping-the-mind/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/csi/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/csi/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
