/**
 * SINGLE SOURCE OF TRUTH: CONTENT CONFIGURATION
 * All personal details, project metrics, and facts are strictly derived
 * from verified resume information.
 */

export const PERSONAL_INFO = {
  name: "Rimjhim Madan",
  headline: "Software Engineer | Full Stack Developer | Machine Learning",
  location: "Ghaziabad, Uttar Pradesh, India",
  email: "madaanrimjhim6@gmail.com",
  github: "https://github.com/RimjhimMadan",
  linkedin: "https://linkedin.com/in/rimjhim-madan",
  resumePath: "/Rimjhim_Madan_Resume.pdf",
  avatar: {
    src: "/avatar.webp",
    fallback: "/avatar.png",
    alt: "Rimjhim Madan - Developer profile illustration (Software Engineer & Machine Learning)"
  },
  // Academic & professional status
  institution: "ABES Engineering College",
  degree: "Bachelor of Computer Science",
  period: "2024 – 2028",
  sgpa: "8.1 / 10",
  // Original 1st-person intro based strictly on verified resume facts
  heroIntro: "Computer Science undergraduate specializing in full stack engineering and applied machine learning systems. Experienced in architecting end-to-end applications from custom ML pipelines to responsive web interfaces.",
  aboutStory: "I approach software engineering as an end-to-end pipeline: from clean data modeling and machine learning algorithms to robust backend services and responsive frontend interfaces. My work spans deep learning computer vision, high-precision NLP classification, and collaborative full stack systems built with the MERN stack and modern frameworks.",
  principles: [
    {
      title: "Systemic Integrity",
      desc: "Every component—from raw data intake to frontend presentation—must have clear contracts, error boundaries, and validated states."
    },
    {
      title: "Evidence-Based Engineering",
      desc: "Decisions are driven by empirical evaluation, benchmarked across multiple metrics (precision, recall, F1, accuracy) before deployment."
    },
    {
      title: "Collaborative Quality",
      desc: "Code excellence is preserved through rigorous multi-stage PR workflows, adherence to standards, and peer review rigor."
    }
  ]
};

export const STAGES = [
  { id: "stage-00", code: "00", name: "RAW SIGNAL", label: "HERO" },
  { id: "stage-01", code: "01", name: "CLEAN", label: "ABOUT" },
  { id: "stage-02", code: "02", name: "TOKENIZE", label: "EXPERTISE" },
  { id: "stage-03", code: "03", name: "VECTORIZE", label: "PROJECTS" },
  { id: "stage-04", code: "04", name: "CLASSIFY", label: "EXPERIENCE" },
  { id: "stage-05", code: "05", name: "BENCHMARK", label: "ACHIEVEMENTS" },
  { id: "stage-06", code: "06", name: "VALIDATE", label: "EDUCATION" },
  { id: "stage-07", code: "07", name: "SHIP", label: "CONTACT" }
];

export const SKILL_CATEGORIES = [
  {
    category: "Languages",
    skills: ["C", "C++", "Java", "Python", "JavaScript", "HTML5", "CSS3", "SQL"]
  },
  {
    category: "Full Stack",
    skills: ["React.js", "Node.js", "Express.js", "FastAPI", "Tailwind CSS", "Vite", "REST APIs", "MERN Stack"]
  },
  {
    category: "AI & ML",
    skills: ["Scikit-learn", "YOLO", "OpenCV", "NLP (TF-IDF)", "Deep Learning", "Computer Vision", "Model Evaluation", "Generative AI"]
  },
  {
    category: "Data Science",
    skills: ["Pandas", "NumPy", "Matplotlib", "Exploratory Data Analysis", "Data Visualization"]
  },
  {
    category: "Databases",
    skills: ["MySQL", "MongoDB"]
  },
  {
    category: "Tools & Fundamentals",
    skills: ["Git", "GitHub", "Postman", "VS Code", "Jupyter Notebook", "DSA", "OOP", "DBMS", "Operating Systems"]
  }
];

export const PROJECTS = [
  {
    id: "fake-news-detector",
    title: "Fake News Detection System",
    date: "Oct 2026",
    tagline: "High-precision NLP classifier with 97% test accuracy and FastAPI inference service",
    stack: ["Python", "Scikit-learn", "TF-IDF", "NLP", "FastAPI", "React.js", "Vite"],
    githubUrl: null, // No public URL provided in verified resume
    liveUrl: null,
    // VERIFY: user to confirm
    problemStatement: "The rapid spread of unverified digital information necessitates fast, automated text classification systems capable of distinguishing authentic reporting from misinformation with high confidence and minimal latency.",
    overview: "Engineered an end-to-end natural language processing classifier that labels news articles as real or fake across 2 binary classes. Compared two Scikit-learn algorithms (Logistic Regression and Passive Aggressive Classifier) on TF-IDF extracted features, achieving 97% accuracy on the test set. Built a four-step pipeline (clean, tokenize, vectorize, classify) and evaluated performance across four key metrics (accuracy, precision, recall, F1) before deploying via a high-performance FastAPI service connected to a modern React + Vite interface.",
    contribution: "Constructed the complete text processing pipeline, model comparison test harness, FastAPI microservice, and reactive web interface across 3 architectural layers and a 7-technology stack.",
    stats: [
      { label: "Test Accuracy", value: "97%" },
      { label: "Pipeline Steps", value: "4 (Clean, Tokenize, Vectorize, Classify)" },
      { label: "Target Classes", value: "2 (Real vs Fake)" },
      { label: "Architecture Layers", value: "3 (Model, API, UI)" }
    ],
    features: [
      "4-step natural language pipeline covering text cleaning, tokenization, TF-IDF vectorization, and inference.",
      "Dual model comparative evaluation between Logistic Regression and Passive Aggressive algorithms.",
      "Comprehensive benchmark matrix assessing Accuracy, Precision, Recall, and F1 score.",
      "High-throughput FastAPI single-endpoint microservice for immediate predictions.",
      "Responsive React + Vite client providing instantaneous text inspection."
    ],
    architecture: [
      { step: "01", name: "Text Input", detail: "Raw text ingestion" },
      { step: "02", name: "NLP Pipeline", detail: "Clean -> Tokenize -> TF-IDF" },
      { step: "03", name: "Classifier", detail: "Scikit-learn model evaluation" },
      { step: "04", name: "FastAPI Endpoint", detail: "RESTful JSON prediction API" },
      { step: "05", name: "React + Vite UI", detail: "Real-time client visualization" }
    ]
  },
  {
    id: "yolo-weapon-detector",
    title: "Weapon Detection System using YOLO",
    date: "Oct 2026",
    tagline: "Real-time frame-by-frame object detection for automated security surveillance",
    stack: ["Python", "YOLO", "Computer Vision", "OpenCV", "Deep Learning"],
    githubUrl: null, // No public URL provided
    liveUrl: null,
    // VERIFY: user to confirm
    problemStatement: "Manual security monitoring of video streams is vulnerable to human fatigue and latency; automated visual surveillance systems need to reliably flag safety hazards in real-time video frames.",
    overview: "Trained a YOLO object-detection deep learning model on a custom annotated dataset for security surveillance automation. Processed live video streams frame by frame with OpenCV, calculating bounding box coordinates in real time to immediately flag detected threats. Evaluated model performance across standard computer vision evaluation metrics: Precision, Recall, and mean Average Precision (mAP).",
    contribution: "Curated and annotated custom dataset, trained the YOLO architecture, implemented OpenCV frame ingestion pipeline, and established real-time bounding box visual tracking.",
    stats: [
      { label: "Evaluated Metrics", value: "Precision, Recall, mAP" },
      { label: "Inference Mode", value: "Frame-by-frame live stream" },
      { label: "Processing Engine", value: "OpenCV + Deep Learning" },
      { label: "Tech Stack Size", value: "5 Technologies" }
    ],
    features: [
      "Custom dataset annotation and domain-specific deep learning training.",
      "Frame-by-frame video stream decoding and matrix manipulation via OpenCV.",
      "Real-time bounding box localization and threat notification pipeline.",
      "Performance benchmarking using standard Precision, Recall, and mAP metrics."
    ],
    architecture: [
      { step: "01", name: "Stream Ingest", detail: "OpenCV frame capture" },
      { step: "02", name: "Preprocessing", detail: "Resize & normalization" },
      { step: "03", name: "YOLO Inference", detail: "Tensor execution" },
      { step: "04", name: "Bounding Box", detail: "Coordinate rendering" },
      { step: "05", name: "Alert Pipeline", detail: "Event notification" }
    ]
  },
  {
    id: "sync-skill-platform",
    title: "Sync-Skill Platform",
    subtitle: "Smart India Hackathon",
    date: "Aug 2026",
    tagline: "Curriculum-to-industry skill mapping platform coordinating 3 distributed workstreams",
    stack: ["MERN Stack", "Tailwind CSS", "REST APIs"],
    githubUrl: null, // No public URL provided
    liveUrl: null,
    // VERIFY: user to confirm
    problemStatement: "Higher education curricula often evolve slower than emerging industry requirements, creating a measurable gap between academic syllabi and current hiring qualifications.",
    overview: "Designed and developed for the Smart India Hackathon, Sync-Skill is a platform that maps university academic curricula directly to industry skill requirements. Crafted 6+ responsive React screens with Tailwind CSS and achieved 100% integration with teammate-built APIs, coordinating three distinct workstreams (backend, database, and AI/ML) to demo a unified, functioning product.",
    contribution: "Led the frontend design and client-side architecture; constructed 6+ production-grade React views and spearheaded 100% of API integrations across all three project workstreams.",
    stats: [
      { label: "Designed Screens", value: "6+ React Views" },
      { label: "API Integration", value: "100% Completed" },
      { label: "Workstreams Coordinated", value: "3 (Backend, DB, AI/ML)" },
      { label: "Hackathon Tier", value: "Smart India Hackathon" }
    ],
    features: [
      "Responsive 6+ screen web application architected using React and Tailwind CSS.",
      "Seamless communication with backend REST services across all user flows.",
      "Inter-team alignment spanning backend services, database schemas, and AI/ML models.",
      "Interactive data presentations illustrating curriculum match percentages."
    ],
    architecture: [
      { step: "01", name: "Curriculum Input", detail: "Syllabus parsing" },
      { step: "02", name: "AI/ML Workstream", detail: "Skill ontology matching" },
      { step: "03", name: "Database & Backend", detail: "MERN REST API integration" },
      { step: "04", name: "Tailwind UI", detail: "6+ React screens presentation" }
    ]
  },
  {
    id: "fitness-tracker",
    title: "Fitness Tracker",
    date: "Sep 2025",
    tagline: "Modular health monitoring application with live telemetry and peer achievement sharing",
    stack: ["React.js", "JavaScript", "HTML", "CSS"],
    githubUrl: null, // No public URL provided
    liveUrl: null,
    // VERIFY: user to confirm
    problemStatement: "Maintaining consistent fitness routines benefits from intuitive metric tracking and lightweight peer motivation without cumbersome, bloated interfaces.",
    overview: "Developed a responsive React web application structured around 3 core modules: an activity progress dashboard, a community feed, and a multi-device responsive UI. Utilized modular, reusable components across a 4-technology stack (React.js, JavaScript, HTML, CSS). Implemented real-time fitness metrics visualization and social achievement sharing to let users compare workout milestones seamlessly.",
    contribution: "Architected component hierarchy, built the live metrics visualization components, structured the community social feed, and ensured responsive layout consistency.",
    stats: [
      { label: "Core Modules", value: "3 Modules" },
      { label: "Key Capabilities", value: "Metrics Dashboard & Peer Share" },
      { label: "Tech Stack", value: "4 Technologies" },
      { label: "Device Support", value: "Cross-Device Responsive" }
    ],
    features: [
      "Three distinct core functional modules: Progress Dashboard, Community Feed, and Responsive UI.",
      "Dynamic data visualization for real-time fitness statistics and activity timelines.",
      "Peer achievement sharing allowing users to celebrate and compare fitness milestones.",
      "Clean component encapsulation for reusability and maintainability."
    ],
    architecture: [
      { step: "01", name: "Telemetry Ingestion", detail: "Activity logging" },
      { step: "02", name: "State Aggregation", detail: "React state management" },
      { step: "03", name: "Metric Dashboard", detail: "Dynamic visualization" },
      { step: "04", name: "Community Module", detail: "Peer achievement sharing" }
    ]
  }
];

export const EXPERIENCE = [
  {
    role: "Open Source Contributor",
    organization: "Open Source Connect Global",
    location: "Remote, India",
    period: "Feb 2026 – Apr 2026",
    duration: "3 months (12+ weeks)",
    summary: "Collaborated on a live open-source repository with a distributed engineering team, using Git and GitHub daily. Delivered code contributions through a structured 4-stage pull request lifecycle and performed peer reviews to maintain project standards.",
    prLifecycle: [
      {
        stage: "01. Branching",
        desc: "Creating isolated topic branches from main, adhering to naming conventions and issue-driven scope boundaries."
      },
      {
        stage: "02. Committing",
        desc: "Crafting atomic, meaningful commits with descriptive messages following conventional commit specifications."
      },
      {
        stage: "03. Code Review",
        desc: "Participating in rigorous peer code reviews, evaluating algorithmic efficiency, code readability, and coding standards."
      },
      {
        stage: "04. Approval & Merge",
        desc: "Securing peer approvals, resolving review discussions, verifying clean test runs, and cleanly merging pull requests."
      }
    ],
    weeksCount: 13, // 13-week grid representing 12+ weeks duration
    bullets: [
      "Collaborated on a live open-source project for 3 months (12+ weeks) with a distributed team, using Git and GitHub daily.",
      "Merged multiple pull requests through a 4-stage lifecycle: branching, committing, code review and approval.",
      "Reviewed peer changes against project coding standards, protecting code quality for the whole team."
    ]
  }
];

export const CERTIFICATIONS = [
  {
    id: "aws-genai",
    title: "AWS Academy Graduate – Generative AI Foundations",
    badgeType: "Training Badge",
    issuer: "AWS Academy",
    date: "Oct 2026",
    duration: "12-hour course",
    scope: "Generative AI, Foundation Models, Prompt Engineering, and Model Architecture Fundamentals",
    verification: "Verified by Credly digital badge (Text Credential)",
    credentialId: null
  },
  {
    id: "fsp-eda-assessment",
    title: "Exploratory Data Analysis (Assessment)",
    badgeType: "NSQF Level 5 Certification",
    issuer: "FutureSkills Prime (MeitY – Nasscom)",
    date: "Oct 2026",
    score: "86 / 100 (Gold Category)",
    scope: "5 modules covering data cleaning, preprocessing, statistical analysis, and data visualization",
    verification: "Government of India / Nasscom Verified",
    credentialId: "FSP/2026/10/10490336"
  },
  {
    id: "fsp-eda-course",
    title: "Exploratory Data Analysis (Course)",
    badgeType: "Curriculum Program",
    issuer: "FutureSkills Prime (MeitY – Nasscom)",
    date: "Oct 2026",
    scope: "Python-based data analysis in a MeitY–Nasscom course, preparing for the 5-module assessment",
    verification: "Course Completion",
    credentialId: null
  }
];

export const LEADERSHIP = [
  {
    role: "Event Head",
    organization: "National Service Scheme (NSS)",
    institution: "ABES Engineering College",
    scope: "Led content creation and logistical operations for 5 campus events, including a blood donation camp and International Yoga Day, mobilizing and directing 80+ volunteers."
  },
  {
    role: "Hackathon Competitor",
    organization: "Collegiate & National Hackathons",
    events: "2 events (Rendezvous, Hack4Health)",
    scope: "Delivered team-based technical prototypes to assigned problem statements under competitive time constraints."
  }
];

export const METRICS_LEDGER = [
  { value: 97, suffix: "%", label: "Test Accuracy", context: "Fake News NLP Classifier" },
  { value: 86, suffix: "/100", label: "Gold Category", context: "Nasscom EDA Assessment" },
  { value: 80, suffix: "+", label: "Volunteers Mobilized", context: "NSS Campus Initiatives" },
  { value: 5, suffix: "", label: "Campus Events Led", context: "Event Head, NSS" },
  { value: 2, suffix: "", label: "Hackathons", context: "Rendezvous, Hack4Health" },
  { value: 4, suffix: "", label: "Shipped Projects", context: "ML, Vision, MERN & Full Stack" },
  { value: 12, suffix: "+ wks", label: "Open Source Work", context: "Distributed PR Collaboration" }
];

export const EDUCATION = {
  college: {
    degree: "Bachelor of Computer Science",
    institution: "ABES Engineering College",
    period: "2024 – 2028",
    sgpa: "8.1 / 10",
    coursework: [
      "Data Structures & Algorithms",
      "OOP (Object Oriented Programming)",
      "DBMS (Database Management Systems)",
      "Operating Systems",
      "Machine Learning"
    ]
  },
  schooling: [
    {
      level: "Class 12th (CBSE)",
      institution: "St. Mary's Academy School",
      year: "2023",
      score: "83.2%"
    },
    {
      level: "Class 10th (CBSE)",
      institution: "St. Mary's Academy School",
      year: "2021",
      score: "81%"
    }
  ]
};

