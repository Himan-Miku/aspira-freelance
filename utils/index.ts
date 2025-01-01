const teamLeadInfo = [
  {
    id: 1,
    name: "Vineet Babar",
    title: "Product Designer",
    desc: "With 2+ years of experience, he designs strategic, impactful products, working with US startups and Indian agencies.",
    linkedInSrc: "https://www.linkedin.com/in/himan-miku/",
    profilePicSrc: "/lead_pic.png",
  },
  {
    id: 2,
    name: "Deepanshu Sharma",
    title: "Application Developer",
    desc: "With 2+ years of experience, he designs strategic, impactful products, working with US startups and Indian agencies.",
    linkedInSrc: "https://www.linkedin.com/in/himan-miku/",
    profilePicSrc: "/lead_pic.png",
  },
  {
    id: 3,
    name: "Suyog Angaj",
    title: "Web Developer",
    desc: "With 2+ years of experience, he designs strategic, impactful products, working with US startups and Indian agencies.",
    linkedInSrc: "https://www.linkedin.com/in/himan-miku/",
    profilePicSrc: "/lead_pic.png",
  },
  {
    id: 4,
    name: "Himanshu Jagdale",
    title: "Deployment Engineer",
    desc: "With 2+ years of experience, he designs strategic, impactful products, working with US startups and Indian agencies.",
    linkedInSrc: "https://www.linkedin.com/in/himan-miku/",
    profilePicSrc: "/lead_pic.png",
  },
];

const projectsInfo = [
  {
    id: 1,
    thumbnail: "/vineet1thumbnail.png",
    title: "Healify - Secure Health, Simplified",
    isMobile: true,
    description:
      "Healify is a health records management app designed to revolutionize the way we handle and share medical data, built using Flutter for a seamless user experience.",
    tags: ["Web Development", "Design", "Deployment"],
    author: "Deepanshu Sharma",
    tech: ["Android", "Flutter", "Docker", "AWS", "Solidity"],
    timeRequired: "5 Weeks",
    images: ["/deep-final.png", "/deep1.png", "/deep2.png", "/deep3.png"],
    problems: [
      "Decentralized Storage : Users lack a single platform to securely store and organize their diverse health records.",
      "Data Security and Integrity : Sharing sensitive medical records with healthcare providers, friends, or family often involves insecure methods, raising concerns about privacy and data tampering.",
      "Absence of Health Insights : Without actionable insights, raw medical data fails to empower users to take proactive steps toward disease prevention or better health management.",
      "Cumbersome User Experience : Existing solutions often have clunky interfaces, making it tedious for users to upload, retrieve, and share their records easily.",
      "Lack of Flexibility in Use : Users need a solution that they can independently manage, free of dependencies on hospitals or other healthcare systems.",
    ],
    keyFeat: [
      "Comprehensive Health Records : Users can store a variety of medical documents—prescriptions, reports, diagnosis details, treatment history, and media (videos/images)—all in one place.",
      "Blockchain for Secure Sharing : Built with Solidity, the app ensures tamper less data sharing using blockchain, guaranteeing medical record integrity. This feature enables users to safely share records with healthcare providers, friends, or family.",
      "AI-Powered Health Insights : By integrating Gemini API, Healify analyzes health data and suggests personalized precautions to help prevent potential diseases, turning raw data into actionable insights.",
      "Powerful Backend Architecture : A Golang backend, fully Dockerized, ensures scalability and performance, while deployment on AWS EKS brings cloud-native advantages.",
      "Seamless Cloud Storage : Files and images are stored securely on AWS S3, ensuring data durability and accessibility anytime, anywhere.",
      "Optimized Data Management : With Prisma and MongoDB, Healify offers fast and efficient data retrieval and management, ensuring a smooth user experience even with large datasets.",
    ],
    approaches: [
      {
        heading: "Single-App Architecture:",
        content:
          "Initially, I considered implementing all features directly within the app to avoid using a separate backend. However, this approach was not scalable and became difficult to maintain, especially for handling large datasets and advanced features.",
      },
      {
        heading: "Full Blockchain Implementation:",
        content:
          "I initially thought of leveraging blockchain for all app functionalities, including storage and AI integration. However, this approach was overly complex and not practical for features requiring fast data retrieval and processing.",
      },
      {
        heading: "Backend Separation:",
        content:
          "To address scalability and maintainability, I introduced a dedicated backend using GoLang. This allowed for modular implementation, better performance, and seamless integration with third-party services like AWS S3 and Gemini API.",
      },
      {
        heading: "Hybrid Data Management:",
        content:
          "Instead of fully relying on blockchain for storage, I used a hybrid approach—blockchain for secure data sharing and AWS S3 for scalable and cost-effective storage of medical records.",
      },
    ],
    githubRepo: "https://github.com/Himan-Miku/elgoog-drive",
  },
  {
    id: 2,
    thumbnail: "/vineet1thumbnail.png",
    title: "Healify - Secure Health, Simplified",
    isMobile: true,
    description:
      "Healify is a health records management app designed to revolutionize the way we handle and share medical data, built using Flutter for a seamless user experience.",
    tags: ["Web Development", "Design", "Deployment"],
    author: "Deepanshu Sharma",
    tech: ["Android", "Flutter", "Docker", "AWS", "Solidity"],
    timeRequired: "5 Weeks",
    images: ["/deep1.png", "/deep2.png", "/deep3.png"],
    problems: [
      "Decentralized Storage : Users lack a single platform to securely store and organize their diverse health records.",
      "Data Security and Integrity : Sharing sensitive medical records with healthcare providers, friends, or family often involves insecure methods, raising concerns about privacy and data tampering.",
      "Absence of Health Insights : Without actionable insights, raw medical data fails to empower users to take proactive steps toward disease prevention or better health management.",
      "Cumbersome User Experience : Existing solutions often have clunky interfaces, making it tedious for users to upload, retrieve, and share their records easily.",
      "Lack of Flexibility in Use : Users need a solution that they can independently manage, free of dependencies on hospitals or other healthcare systems.",
    ],
    keyFeat: [
      "Comprehensive Health Records : Users can store a variety of medical documents—prescriptions, reports, diagnosis details, treatment history, and media (videos/images)—all in one place.",
      "Blockchain for Secure Sharing : Built with Solidity, the app ensures tamper less data sharing using blockchain, guaranteeing medical record integrity. This feature enables users to safely share records with healthcare providers, friends, or family.",
      "AI-Powered Health Insights : By integrating Gemini API, Healify analyzes health data and suggests personalized precautions to help prevent potential diseases, turning raw data into actionable insights.",
      "Powerful Backend Architecture : A Golang backend, fully Dockerized, ensures scalability and performance, while deployment on AWS EKS brings cloud-native advantages.",
      "Seamless Cloud Storage : Files and images are stored securely on AWS S3, ensuring data durability and accessibility anytime, anywhere.",
      "Optimized Data Management : With Prisma and MongoDB, Healify offers fast and efficient data retrieval and management, ensuring a smooth user experience even with large datasets.",
    ],
    approaches: [
      {
        heading: "Single-App Architecture:",
        content:
          "Initially, I considered implementing all features directly within the app to avoid using a separate backend. However, this approach was not scalable and became difficult to maintain, especially for handling large datasets and advanced features.",
      },
      {
        heading: "Full Blockchain Implementation:",
        content:
          "I initially thought of leveraging blockchain for all app functionalities, including storage and AI integration. However, this approach was overly complex and not practical for features requiring fast data retrieval and processing.",
      },
      {
        heading: "Backend Separation:",
        content:
          "To address scalability and maintainability, I introduced a dedicated backend using GoLang. This allowed for modular implementation, better performance, and seamless integration with third-party services like AWS S3 and Gemini API.",
      },
      {
        heading: "Hybrid Data Management:",
        content:
          "Instead of fully relying on blockchain for storage, I used a hybrid approach—blockchain for secure data sharing and AWS S3 for scalable and cost-effective storage of medical records.",
      },
    ],
    githubRepo: "https://github.com/Himan-Miku/elgoog-drive",
  },
  {
    id: 3,
    thumbnail: "/vineet1thumbnail.png",
    title: "Healify - Secure Health, Simplified",
    isMobile: true,
    description:
      "Healify is a health records management app designed to revolutionize the way we handle and share medical data, built using Flutter for a seamless user experience.",
    tags: ["Web Development", "Design", "Deployment"],
    author: "Deepanshu Sharma",
    tech: ["Android", "Flutter", "Docker", "AWS", "Solidity"],
    timeRequired: "5 Weeks",
    images: ["/deep1.png", "/deep2.png", "/deep3.png"],
    problems: [
      "Decentralized Storage : Users lack a single platform to securely store and organize their diverse health records.",
      "Data Security and Integrity : Sharing sensitive medical records with healthcare providers, friends, or family often involves insecure methods, raising concerns about privacy and data tampering.",
      "Absence of Health Insights : Without actionable insights, raw medical data fails to empower users to take proactive steps toward disease prevention or better health management.",
      "Cumbersome User Experience : Existing solutions often have clunky interfaces, making it tedious for users to upload, retrieve, and share their records easily.",
      "Lack of Flexibility in Use : Users need a solution that they can independently manage, free of dependencies on hospitals or other healthcare systems.",
    ],
    keyFeat: [
      "Comprehensive Health Records : Users can store a variety of medical documents—prescriptions, reports, diagnosis details, treatment history, and media (videos/images)—all in one place.",
      "Blockchain for Secure Sharing : Built with Solidity, the app ensures tamper less data sharing using blockchain, guaranteeing medical record integrity. This feature enables users to safely share records with healthcare providers, friends, or family.",
      "AI-Powered Health Insights : By integrating Gemini API, Healify analyzes health data and suggests personalized precautions to help prevent potential diseases, turning raw data into actionable insights.",
      "Powerful Backend Architecture : A Golang backend, fully Dockerized, ensures scalability and performance, while deployment on AWS EKS brings cloud-native advantages.",
      "Seamless Cloud Storage : Files and images are stored securely on AWS S3, ensuring data durability and accessibility anytime, anywhere.",
      "Optimized Data Management : With Prisma and MongoDB, Healify offers fast and efficient data retrieval and management, ensuring a smooth user experience even with large datasets.",
    ],
    approaches: [
      {
        heading: "Single-App Architecture:",
        content:
          "Initially, I considered implementing all features directly within the app to avoid using a separate backend. However, this approach was not scalable and became difficult to maintain, especially for handling large datasets and advanced features.",
      },
      {
        heading: "Full Blockchain Implementation:",
        content:
          "I initially thought of leveraging blockchain for all app functionalities, including storage and AI integration. However, this approach was overly complex and not practical for features requiring fast data retrieval and processing.",
      },
      {
        heading: "Backend Separation:",
        content:
          "To address scalability and maintainability, I introduced a dedicated backend using GoLang. This allowed for modular implementation, better performance, and seamless integration with third-party services like AWS S3 and Gemini API.",
      },
      {
        heading: "Hybrid Data Management:",
        content:
          "Instead of fully relying on blockchain for storage, I used a hybrid approach—blockchain for secure data sharing and AWS S3 for scalable and cost-effective storage of medical records.",
      },
    ],
    githubRepo: "https://github.com/Himan-Miku/elgoog-drive",
  },
  {
    id: 4,
    thumbnail: "/vineet1thumbnail.png",
    title: "Healify - Secure Health, Simplified",
    isMobile: true,
    description:
      "Healify is a health records management app designed to revolutionize the way we handle and share medical data, built using Flutter for a seamless user experience.",
    tags: ["Web Development", "Design", "Deployment"],
    author: "Deepanshu Sharma",
    tech: ["Android", "Flutter", "Docker", "AWS", "Solidity"],
    timeRequired: "5 Weeks",
    images: ["/deep1.png", "/deep2.png", "/deep3.png"],
    problems: [
      "Decentralized Storage : Users lack a single platform to securely store and organize their diverse health records.",
      "Data Security and Integrity : Sharing sensitive medical records with healthcare providers, friends, or family often involves insecure methods, raising concerns about privacy and data tampering.",
      "Absence of Health Insights : Without actionable insights, raw medical data fails to empower users to take proactive steps toward disease prevention or better health management.",
      "Cumbersome User Experience : Existing solutions often have clunky interfaces, making it tedious for users to upload, retrieve, and share their records easily.",
      "Lack of Flexibility in Use : Users need a solution that they can independently manage, free of dependencies on hospitals or other healthcare systems.",
    ],
    keyFeat: [
      "Comprehensive Health Records : Users can store a variety of medical documents—prescriptions, reports, diagnosis details, treatment history, and media (videos/images)—all in one place.",
      "Blockchain for Secure Sharing : Built with Solidity, the app ensures tamper less data sharing using blockchain, guaranteeing medical record integrity. This feature enables users to safely share records with healthcare providers, friends, or family.",
      "AI-Powered Health Insights : By integrating Gemini API, Healify analyzes health data and suggests personalized precautions to help prevent potential diseases, turning raw data into actionable insights.",
      "Powerful Backend Architecture : A Golang backend, fully Dockerized, ensures scalability and performance, while deployment on AWS EKS brings cloud-native advantages.",
      "Seamless Cloud Storage : Files and images are stored securely on AWS S3, ensuring data durability and accessibility anytime, anywhere.",
      "Optimized Data Management : With Prisma and MongoDB, Healify offers fast and efficient data retrieval and management, ensuring a smooth user experience even with large datasets.",
    ],
    approaches: [
      {
        heading: "Single-App Architecture:",
        content:
          "Initially, I considered implementing all features directly within the app to avoid using a separate backend. However, this approach was not scalable and became difficult to maintain, especially for handling large datasets and advanced features.",
      },
      {
        heading: "Full Blockchain Implementation:",
        content:
          "I initially thought of leveraging blockchain for all app functionalities, including storage and AI integration. However, this approach was overly complex and not practical for features requiring fast data retrieval and processing.",
      },
      {
        heading: "Backend Separation:",
        content:
          "To address scalability and maintainability, I introduced a dedicated backend using GoLang. This allowed for modular implementation, better performance, and seamless integration with third-party services like AWS S3 and Gemini API.",
      },
      {
        heading: "Hybrid Data Management:",
        content:
          "Instead of fully relying on blockchain for storage, I used a hybrid approach—blockchain for secure data sharing and AWS S3 for scalable and cost-effective storage of medical records.",
      },
    ],
    githubRepo: "https://github.com/Himan-Miku/elgoog-drive",
  },
  {
    id: 5,
    thumbnail: "/vineet1thumbnail.png",
    title: "Healify - Secure Health, Simplified",
    isMobile: true,
    description:
      "Healify is a health records management app designed to revolutionize the way we handle and share medical data, built using Flutter for a seamless user experience.",
    tags: ["Web Development", "Design", "Deployment"],
    author: "Deepanshu Sharma",
    tech: ["Android", "Flutter", "Docker", "AWS", "Solidity"],
    timeRequired: "5 Weeks",
    images: ["/deep1.png", "/deep2.png", "/deep3.png"],
    problems: [
      "Decentralized Storage : Users lack a single platform to securely store and organize their diverse health records.",
      "Data Security and Integrity : Sharing sensitive medical records with healthcare providers, friends, or family often involves insecure methods, raising concerns about privacy and data tampering.",
      "Absence of Health Insights : Without actionable insights, raw medical data fails to empower users to take proactive steps toward disease prevention or better health management.",
      "Cumbersome User Experience : Existing solutions often have clunky interfaces, making it tedious for users to upload, retrieve, and share their records easily.",
      "Lack of Flexibility in Use : Users need a solution that they can independently manage, free of dependencies on hospitals or other healthcare systems.",
    ],
    keyFeat: [
      "Comprehensive Health Records : Users can store a variety of medical documents—prescriptions, reports, diagnosis details, treatment history, and media (videos/images)—all in one place.",
      "Blockchain for Secure Sharing : Built with Solidity, the app ensures tamper less data sharing using blockchain, guaranteeing medical record integrity. This feature enables users to safely share records with healthcare providers, friends, or family.",
      "AI-Powered Health Insights : By integrating Gemini API, Healify analyzes health data and suggests personalized precautions to help prevent potential diseases, turning raw data into actionable insights.",
      "Powerful Backend Architecture : A Golang backend, fully Dockerized, ensures scalability and performance, while deployment on AWS EKS brings cloud-native advantages.",
      "Seamless Cloud Storage : Files and images are stored securely on AWS S3, ensuring data durability and accessibility anytime, anywhere.",
      "Optimized Data Management : With Prisma and MongoDB, Healify offers fast and efficient data retrieval and management, ensuring a smooth user experience even with large datasets.",
    ],
    approaches: [
      {
        heading: "Single-App Architecture:",
        content:
          "Initially, I considered implementing all features directly within the app to avoid using a separate backend. However, this approach was not scalable and became difficult to maintain, especially for handling large datasets and advanced features.",
      },
      {
        heading: "Full Blockchain Implementation:",
        content:
          "I initially thought of leveraging blockchain for all app functionalities, including storage and AI integration. However, this approach was overly complex and not practical for features requiring fast data retrieval and processing.",
      },
      {
        heading: "Backend Separation:",
        content:
          "To address scalability and maintainability, I introduced a dedicated backend using GoLang. This allowed for modular implementation, better performance, and seamless integration with third-party services like AWS S3 and Gemini API.",
      },
      {
        heading: "Hybrid Data Management:",
        content:
          "Instead of fully relying on blockchain for storage, I used a hybrid approach—blockchain for secure data sharing and AWS S3 for scalable and cost-effective storage of medical records.",
      },
    ],
    githubRepo: "https://github.com/Himan-Miku/elgoog-drive",
  },
  {
    id: 6,
    thumbnail: "/vineet1thumbnail.png",
    title: "Healify - Secure Health, Simplified",
    isMobile: true,
    description:
      "Healify is a health records management app designed to revolutionize the way we handle and share medical data, built using Flutter for a seamless user experience.",
    tags: ["Web Development", "Design", "Deployment"],
    author: "Deepanshu Sharma",
    tech: ["Android", "Flutter", "Docker", "AWS", "Solidity"],
    timeRequired: "5 Weeks",
    images: ["/deep1.png", "/deep2.png", "/deep3.png"],
    problems: [
      "Decentralized Storage : Users lack a single platform to securely store and organize their diverse health records.",
      "Data Security and Integrity : Sharing sensitive medical records with healthcare providers, friends, or family often involves insecure methods, raising concerns about privacy and data tampering.",
      "Absence of Health Insights : Without actionable insights, raw medical data fails to empower users to take proactive steps toward disease prevention or better health management.",
      "Cumbersome User Experience : Existing solutions often have clunky interfaces, making it tedious for users to upload, retrieve, and share their records easily.",
      "Lack of Flexibility in Use : Users need a solution that they can independently manage, free of dependencies on hospitals or other healthcare systems.",
    ],
    keyFeat: [
      "Comprehensive Health Records : Users can store a variety of medical documents—prescriptions, reports, diagnosis details, treatment history, and media (videos/images)—all in one place.",
      "Blockchain for Secure Sharing : Built with Solidity, the app ensures tamper less data sharing using blockchain, guaranteeing medical record integrity. This feature enables users to safely share records with healthcare providers, friends, or family.",
      "AI-Powered Health Insights : By integrating Gemini API, Healify analyzes health data and suggests personalized precautions to help prevent potential diseases, turning raw data into actionable insights.",
      "Powerful Backend Architecture : A Golang backend, fully Dockerized, ensures scalability and performance, while deployment on AWS EKS brings cloud-native advantages.",
      "Seamless Cloud Storage : Files and images are stored securely on AWS S3, ensuring data durability and accessibility anytime, anywhere.",
      "Optimized Data Management : With Prisma and MongoDB, Healify offers fast and efficient data retrieval and management, ensuring a smooth user experience even with large datasets.",
    ],
    approaches: [
      {
        heading: "Single-App Architecture:",
        content:
          "Initially, I considered implementing all features directly within the app to avoid using a separate backend. However, this approach was not scalable and became difficult to maintain, especially for handling large datasets and advanced features.",
      },
      {
        heading: "Full Blockchain Implementation:",
        content:
          "I initially thought of leveraging blockchain for all app functionalities, including storage and AI integration. However, this approach was overly complex and not practical for features requiring fast data retrieval and processing.",
      },
      {
        heading: "Backend Separation:",
        content:
          "To address scalability and maintainability, I introduced a dedicated backend using GoLang. This allowed for modular implementation, better performance, and seamless integration with third-party services like AWS S3 and Gemini API.",
      },
      {
        heading: "Hybrid Data Management:",
        content:
          "Instead of fully relying on blockchain for storage, I used a hybrid approach—blockchain for secure data sharing and AWS S3 for scalable and cost-effective storage of medical records.",
      },
    ],
    githubRepo: "https://github.com/Himan-Miku/elgoog-drive",
  },
];

export { teamLeadInfo, projectsInfo };
