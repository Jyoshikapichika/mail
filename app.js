/**
 * Gmail Application Logic (Standalone Mobile App + Desktop Responsive UI)
 *
 * Attachment points directly to the unmodified uploaded PDF:
 *   ./NOC26CS93S370700875.pdf
 */

const HALL_TICKET_CONFIG = {
  pdfFileName: "NOC26CS93S370700756_261013124814.pdf",
  pdfFallbackFileName: "NOC26CS93S370700756.pdf",
  pdfRelativeUrl: "./NOC26CS93S370700756_261013124814.pdf",
  pdfFallbackUrl: "./NOC26CS93S370700756.pdf",
  backendDownloadEndpoint: "/api/download-hallticket",
  backendHealthEndpoint: "/api/health",
  fileSizeDisplay: "332 KB",
  nptelLogoUrl: "./nptel-logo.png",
  candidate: {
    name: "Pattipati Lalitha",
    rollNo: "NOC26CS93S370700756",
    dob: "25-05-2006",
    seatingNumber: "756",
    pwdStatus: "No",
    compensatoryTime: "No",
    scribeRequired: "No",
    courseCode: "SEM2NOC26: CS93",
    courseName: "Programming with Generative AI",
    examDate: "Friday, 16 October 2026",
    session: "AN",
    sessionFull: "AN (Afternoon Session)",
    reportingTime: "01:00 pm",
    gateClosure: "02:30 pm",
    examTiming: "02:00 pm",
    examCentre: "iON Digital Zone iDZ Zoo Park Tirupathi",
    centreAddress:
      "Zoo Park Road, CherloPalli Village, Chittoor Dist. , Tirupathi, Andhra Pradesh, India - 517503"
  }
};

const INITIAL_EMAILS = [
  {
    id: "nptel-hallticket-1",
    folder: "inbox",
    category: "all",
    starred: true,
    unread: true,
    isNptelFeatured: true,
    useNptelLogo: true,
    avatarBg: "#ffffff",
    senderName: "NPTEL Team",
    senderEmail: "onlinecourses@nptel.iitm.ac.in",
    recipientName: "Pattipati Lalitha",
    recipientEmail: "lalithapattipati@gmail.com",
    subject:
      "October 2026 NPTEL Exams – Hall Tickets, Centre Details and Registration Status",
    dateShort: "9:15 AM",
    dateFull: "Tue, Oct 13, 2026, 9:15 AM",
    snippet:
      "Dear Pattipati Lalitha, Hall Ticket for SEM2NOC26: CS93 Programming with Generative AI on Friday, 16 October 2026 (AN) at iON Digital Zone iDZ Zoo Park Tirupathi is now available for download.",
    hasAttachment: true,
    attachmentName: HALL_TICKET_CONFIG.pdfFileName
  },
  {
    id: "inbox-2",
    folder: "inbox",
    category: "updates",
    starred: true,
    unread: false,
    isNptelFeatured: false,
    useNptelLogo: true,
    avatarBg: "#ffffff",
    senderName: "NPTEL",
    senderEmail: "noc-support@nptel.iitm.ac.in",
    recipientName: "Pattipati Lalitha",
    recipientEmail: "lalithapattipati@gmail.com",
    subject:
      "SEM2NOC26: CS93 Programming with Generative AI – Final Exam Guidelines & Mock Calculator Link",
    dateShort: "Oct 12",
    dateFull: "Mon, Oct 12, 2026, 5:42 PM",
    snippet:
      "Candidates appearing for the October 16, 2026 examination are advised to familiarize themselves with the TCS iON online scientific calculator and carry an original photo ID card.",
    hasAttachment: false,
    bodyHtml: `
      <div style="font-size: 0.93rem; color: #202124; line-height: 1.65; max-width: 760px;">
        <p style="margin-bottom: 12px;">Dear <strong>Pattipati Lalitha</strong>,</p>
        <p style="margin-bottom: 12px;">
          Please note the following important guidelines for your upcoming examination for <strong>SEM2NOC26: CS93 Programming with Generative AI</strong> scheduled on <strong>Friday, 16 October 2026 (AN Session)</strong>:
        </p>
        <ul style="padding-left: 20px; margin-bottom: 16px;">
          <li>Report to <strong>iON Digital Zone iDZ Zoo Park Tirupathi</strong> by <strong>01:00 pm</strong>. Gate closes strictly at <strong>02:30 pm</strong>.</li>
          <li>Carry a printed copy of your Hall Ticket on A4 paper along with an original photo identification document (Aadhaar / College ID / PAN / Passport / Driving License).</li>
          <li>An on-screen scientific calculator will be provided during the exam.</li>
        </ul>
        <p>Warm regards,<br/><strong>NPTEL Exam Team</strong></p>
      </div>
    `
  },
  {
    id: "inbox-3",
    folder: "inbox",
    category: "social",
    starred: false,
    unread: true,
    isNptelFeatured: false,
    useNptelLogo: false,
    avatarBg: "#0a66c2",
    senderName: "LinkedIn Job Alerts",
    senderEmail: "jobalerts-noreply@linkedin.com",
    recipientName: "Pattipati Lalitha",
    recipientEmail: "lalithapattipati@gmail.com",
    subject:
      "Jyoshika: 14 new AI & Software Engineering Intern roles in Hyderabad, Bengaluru, and Chennai",
    dateShort: "Oct 12",
    dateFull: "Mon, Oct 12, 2026, 2:10 PM",
    snippet:
      "Top picks matching your profile in Generative AI, Python, and Deep Learning for Computer Vision. View new openings and apply early.",
    hasAttachment: false
  },
  {
    id: "inbox-4",
    folder: "inbox",
    category: "all",
    starred: false,
    unread: false,
    isNptelFeatured: false,
    useNptelLogo: false,
    avatarBg: "#24292f",
    senderName: "GitHub",
    senderEmail: "noreply@github.com",
    recipientName: "Pattipati Lalitha",
    recipientEmail: "lalithapattipati@gmail.com",
    subject: "[GitHub] Your Dependabot alerts for the week of October 5–12",
    dateShort: "Oct 11",
    dateFull: "Sun, Oct 11, 2026, 8:05 PM",
    snippet:
      "All dependencies in your active repositories are up to date. View security insights and recent workflow runs.",
    hasAttachment: false
  },
  {
    id: "inbox-5",
    folder: "inbox",
    category: "updates",
    starred: true,
    unread: false,
    isNptelFeatured: false,
    useNptelLogo: false,
    avatarBg: "#0284c7",
    senderName: "TCS iON Assessment",
    senderEmail: "no-reply@tcsion.com",
    recipientName: "Pattipati Lalitha",
    recipientEmail: "lalithapattipati@gmail.com",
    subject:
      "Test Centre Location Advisory – iON Digital Zone iDZ Zoo Park Tirupathi",
    dateShort: "Oct 11",
    dateFull: "Sun, Oct 11, 2026, 11:30 AM",
    snippet:
      "Candidates allotted to iON Digital Zone iDZ Zoo Park Tirupathi (Zoo Park Road, CherloPalli Village, Chittoor District, Tirupathi – 517503) are advised to locate the centre a day prior.",
    hasAttachment: false
  },
  {
    id: "inbox-6",
    folder: "inbox",
    category: "all",
    starred: false,
    unread: true,
    isNptelFeatured: false,
    useNptelLogo: false,
    avatarBg: "#15803d",
    senderName: "Training & Placement Cell",
    senderEmail: "placements@college.edu.in",
    recipientName: "Pattipati Lalitha",
    recipientEmail: "lalithapattipati@gmail.com",
    subject:
      "Schedule for Pre-Placement Coding & Aptitude Assessment – October 2026 Batch",
    dateShort: "Oct 10",
    dateFull: "Sat, Oct 10, 2026, 4:25 PM",
    snippet:
      "All registered students are requested to verify their NPTEL certification course details and updated resume on the placement portal.",
    hasAttachment: false
  },
  {
    id: "inbox-7",
    folder: "inbox",
    category: "promotions",
    starred: false,
    unread: true,
    isNptelFeatured: false,
    useNptelLogo: false,
    avatarBg: "#0056d2",
    senderName: "Coursera",
    senderEmail: "no-reply@t.mail.coursera.org",
    recipientName: "Pattipati Lalitha",
    recipientEmail: "lalithapattipati@gmail.com",
    subject: "Recommended for you: Large Language Models & Multimodal AI Specializations",
    dateShort: "Oct 10",
    dateFull: "Sat, Oct 10, 2026, 9:00 AM",
    snippet:
      "Continue building your AI portfolio with hands-on guided projects in prompt engineering, RAG pipelines, and transformer architectures.",
    hasAttachment: false
  },
  {
    id: "inbox-8",
    folder: "inbox",
    category: "updates",
    starred: false,
    unread: false,
    isNptelFeatured: false,
    useNptelLogo: false,
    avatarBg: "#1a73e8",
    senderName: "Google Cloud",
    senderEmail: "CloudPlatform-noreply@google.com",
    recipientName: "Pattipati Lalitha",
    recipientEmail: "lalithapattipati@gmail.com",
    subject: "Your Google Cloud Skills Boost monthly progress summary",
    dateShort: "Oct 9",
    dateFull: "Fri, Oct 9, 2026, 6:18 PM",
    snippet:
      "Great job completing your Generative AI labs this month! Check out the next skill badge in Vertex AI and Gemini API development.",
    hasAttachment: false
  },
  {
    id: "inbox-9",
    folder: "inbox",
    category: "all",
    starred: false,
    unread: false,
    isNptelFeatured: false,
    useNptelLogo: false,
    avatarBg: "#d97706",
    senderName: "LeetCode",
    senderEmail: "no-reply@leetcode.com",
    recipientName: "Pattipati Lalitha",
    recipientEmail: "lalithapattipati@gmail.com",
    subject: "LeetCode Weekly Digest – Upcoming Weekly Contest 471 & Dynamic Programming Study Plan",
    dateShort: "Oct 8",
    dateFull: "Thu, Oct 8, 2026, 7:30 AM",
    snippet:
      "Register now for this Sunday's Weekly Contest and practice top interview problems in arrays, graphs, and dynamic programming.",
    hasAttachment: false
  },
  {
    id: "inbox-10",
    folder: "inbox",
    category: "updates",
    starred: true,
    unread: false,
    isNptelFeatured: false,
    useNptelLogo: true,
    avatarBg: "#ffffff",
    senderName: "SWAYAM - NPTEL",
    senderEmail: "support@swayam.gov.in",
    recipientName: "Pattipati Lalitha",
    recipientEmail: "lalithapattipati@gmail.com",
    subject:
      "Confirmation of Exam Registration – SEM2NOC26: CS93 Programming with Generative AI",
    dateShort: "Oct 7",
    dateFull: "Wed, Oct 7, 2026, 1:15 PM",
    snippet:
      "Your exam registration for SEM2NOC26: CS93 Programming with Generative AI (Roll No: NOC26CS93S370700875) has been confirmed for Friday, 16 October 2026.",
    hasAttachment: false
  },
  {
    id: "inbox-11",
    folder: "inbox",
    category: "all",
    starred: false,
    unread: true,
    isNptelFeatured: false,
    useNptelLogo: false,
    avatarBg: "#4f46e5",
    senderName: "Department of CSE",
    senderEmail: "hod.cse@college.edu.in",
    recipientName: "Pattipati Lalitha",
    recipientEmail: "lalithapattipati@gmail.com",
    subject: "Notice: On-Duty (OD) Attendance Form for Students Appearing in October 2026 NPTEL Exams",
    dateShort: "Oct 6",
    dateFull: "Tue, Oct 6, 2026, 3:40 PM",
    snippet:
      "Students appearing for NPTEL Certification Exams on October 16, 2026 are informed to submit a copy of their Hall Ticket to their respective class advisors.",
    hasAttachment: false
  },
  {
    id: "inbox-12",
    folder: "inbox",
    category: "updates",
    starred: false,
    unread: false,
    isNptelFeatured: false,
    useNptelLogo: false,
    avatarBg: "#059669",
    senderName: "HackerRank",
    senderEmail: "no-reply@hackerrankmail.com",
    recipientName: "Pattipati Lalitha",
    recipientEmail: "lalithapattipati@gmail.com",
    subject: "Congratulations! You earned the Gold Problem Solving Badge on HackerRank",
    dateShort: "Oct 5",
    dateFull: "Mon, Oct 5, 2026, 8:20 PM",
    snippet:
      "You solved 5 challenges in Python and Data Structures this week. Share your verified skill certificate on your profile.",
    hasAttachment: false
  },
  {
    id: "inbox-13",
    folder: "inbox",
    category: "promotions",
    starred: false,
    unread: true,
    isNptelFeatured: false,
    useNptelLogo: false,
    avatarBg: "#7c3aed",
    senderName: "Canva",
    senderEmail: "no-reply@canva.com",
    recipientName: "Pattipati Lalitha",
    recipientEmail: "lalithapattipati@gmail.com",
    subject: "Your exported PDF 'Jyoshika Resume' is ready to download",
    dateShort: "Oct 4",
    dateFull: "Sun, Oct 4, 2026, 6:50 PM",
    snippet:
      "Your recent design changes have been saved automatically to your workspace folder.",
    hasAttachment: false
  },
  {
    id: "inbox-14",
    folder: "inbox",
    category: "social",
    starred: false,
    unread: true,
    isNptelFeatured: false,
    useNptelLogo: false,
    avatarBg: "#1d4ed8",
    senderName: "Unstop",
    senderEmail: "noreply@unstop.news",
    recipientName: "Pattipati Lalitha",
    recipientEmail: "lalithapattipati@gmail.com",
    subject: "National AI & GenAI Hackathon 2026 – Round 1 Submission Window Open",
    dateShort: "Oct 3",
    dateFull: "Sat, Oct 3, 2026, 10:12 AM",
    snippet:
      "Complete your team verification and submit your project abstract before the deadline.",
    hasAttachment: false
  },
  {
    id: "inbox-15",
    folder: "inbox",
    category: "updates",
    starred: false,
    unread: false,
    isNptelFeatured: false,
    useNptelLogo: true,
    avatarBg: "#ffffff",
    senderName: "NPTEL Team",
    senderEmail: "onlinecourses@nptel.iitm.ac.in",
    recipientName: "Pattipati Lalitha",
    recipientEmail: "lalithapattipati@gmail.com",
    subject: "CS93 Programming with Generative AI: Week 11 Assignment Score & Solutions Published",
    dateShort: "Oct 1",
    dateFull: "Thu, Oct 1, 2026, 4:05 PM",
    snippet:
      "Dear Learner, the solutions and graded scores for Week 11 of SEM2NOC26: CS93 Programming with Generative AI are now available on the course portal.",
    hasAttachment: false
  },
  {
    id: "inbox-16",
    folder: "inbox",
    category: "updates",
    starred: false,
    unread: false,
    isNptelFeatured: false,
    useNptelLogo: false,
    avatarBg: "#ea4335",
    senderName: "Google",
    senderEmail: "no-reply@accounts.google.com",
    recipientName: "Pattipati Lalitha",
    recipientEmail: "lalithapattipati@gmail.com",
    subject: "Security alert: New sign-in on Windows",
    dateShort: "Sep 29",
    dateFull: "Tue, Sep 29, 2026, 7:14 PM",
    snippet:
      "Your Google Account was just signed in to from a new Windows device. You're getting this email to make sure it was you.",
    hasAttachment: false
  },
  {
    id: "inbox-17",
    folder: "inbox",
    category: "all",
    starred: false,
    unread: false,
    isNptelFeatured: false,
    useNptelLogo: false,
    avatarBg: "#c2410c",
    senderName: "Oracle University",
    senderEmail: "oracle-university@oracle.com",
    recipientName: "Pattipati Lalitha",
    recipientEmail: "lalithapattipati@gmail.com",
    subject: "Your Oracle Cloud Infrastructure Agentic AI Certified Foundations Associate badge is ready",
    dateShort: "Sep 27",
    dateFull: "Sun, Sep 27, 2026, 2:45 PM",
    snippet:
      "Congratulations Pattipati Lalitha on passing your certification exam. Download your eCertificate from CertView.",
    hasAttachment: false
  },
  {
    id: "inbox-18",
    folder: "inbox",
    category: "promotions",
    starred: false,
    unread: false,
    isNptelFeatured: false,
    useNptelLogo: false,
    avatarBg: "#111827",
    senderName: "Medium Daily Digest",
    senderEmail: "noreply@medium.com",
    recipientName: "Pattipati Lalitha",
    recipientEmail: "lalithapattipati@gmail.com",
    subject: "Practical Prompt Engineering & Agentic Workflows in Python",
    dateShort: "Sep 25",
    dateFull: "Fri, Sep 25, 2026, 8:00 AM",
    snippet:
      "Today's top stories in Artificial Intelligence, Software Architecture, and Machine Learning curated for you.",
    hasAttachment: false
  },
  // Sent Emails
  {
    id: "sent-1",
    folder: "sent",
    category: "all",
    starred: false,
    unread: false,
    isNptelFeatured: false,
    useNptelLogo: false,
    avatarBg: "#7b1fa2",
    senderName: "To: Class Advisor - CSE",
    senderEmail: "lalithapattipati@gmail.com",
    recipientName: "Class Advisor - CSE",
    recipientEmail: "advisor.cse@college.edu.in",
    subject: "Request for On-Duty (OD) Permission – NPTEL Exam on 16 October 2026 (AN)",
    dateShort: "Oct 12",
    dateFull: "Mon, Oct 12, 2026, 6:05 PM",
    snippet:
      "Respected Sir/Madam, I am appearing for the NPTEL examination for Programming with Generative AI on Friday, 16 October 2026 (AN Session) at iON Digital Zone iDZ Zoo Park Tirupathi.",
    hasAttachment: true,
    attachmentName: HALL_TICKET_CONFIG.pdfFileName
  },
  {
    id: "sent-2",
    folder: "sent",
    category: "all",
    starred: false,
    unread: false,
    isNptelFeatured: false,
    useNptelLogo: false,
    avatarBg: "#7b1fa2",
    senderName: "To: Project Coordinator",
    senderEmail: "lalithapattipati@gmail.com",
    recipientName: "Project Coordinator",
    recipientEmail: "projects.cse@college.edu.in",
    subject: "Mini Project Final Report & Presentation Slides Submission",
    dateShort: "Oct 8",
    dateFull: "Thu, Oct 8, 2026, 3:12 PM",
    snippet:
      "Please find attached our team's final project report and source code repository link.",
    hasAttachment: false
  },
  {
    id: "sent-3",
    folder: "sent",
    category: "all",
    starred: false,
    unread: false,
    isNptelFeatured: false,
    useNptelLogo: false,
    avatarBg: "#7b1fa2",
    senderName: "To: Placement Cell",
    senderEmail: "lalithapattipati@gmail.com",
    recipientName: "Placement Cell",
    recipientEmail: "placements@college.edu.in",
    subject: "Updated Resume & Certification Details – Pattipati Lalitha",
    dateShort: "Oct 4",
    dateFull: "Sun, Oct 4, 2026, 7:15 PM",
    snippet:
      "Submitting my updated resume along with Oracle AI Foundations and NPTEL registration details.",
    hasAttachment: false
  },
  {
    id: "sent-4",
    folder: "sent",
    category: "all",
    starred: false,
    unread: false,
    isNptelFeatured: false,
    useNptelLogo: false,
    avatarBg: "#7b1fa2",
    senderName: "To: Jyoshika Pichika",
    senderEmail: "lalithapattipati@gmail.com",
    recipientName: "Pattipati Lalitha",
    recipientEmail: "lalithapattipati@gmail.com",
    subject: "Programming with Generative AI – Revision Notes & Practice Questions",
    dateShort: "Oct 2",
    dateFull: "Fri, Oct 2, 2026, 9:40 PM",
    snippet:
      "Sharing the combined week 1 to 12 lecture notes for our upcoming exam on October 16.",
    hasAttachment: false
  },
  // Drafts
  {
    id: "draft-1",
    folder: "drafts",
    category: "all",
    starred: false,
    unread: false,
    isNptelFeatured: false,
    useNptelLogo: false,
    avatarBg: "#64748b",
    senderName: "Draft",
    senderEmail: "lalithapattipati@gmail.com",
    recipientName: "lalithapattipati@gmail.com",
    recipientEmail: "lalithapattipati@gmail.com",
    subject: "Exam Day Checklist – 16 Oct 2026 AN Session (Tirupathi)",
    dateShort: "Oct 12",
    dateFull: "Mon, Oct 12, 2026, 9:20 PM",
    snippet:
      "1. Color printout of Hall Ticket (NOC26CS93S370700875.pdf) 2. Original Aadhaar Card & College ID 3. Reach iON Digital Zone iDZ Zoo Park Tirupathi by 7:45 AM.",
    hasAttachment: false
  },
  {
    id: "draft-2",
    folder: "drafts",
    category: "all",
    starred: false,
    unread: false,
    isNptelFeatured: false,
    useNptelLogo: false,
    avatarBg: "#64748b",
    senderName: "Draft",
    senderEmail: "lalithapattipati@gmail.com",
    recipientName: "mentor.cse@college.edu.in",
    recipientEmail: "mentor.cse@college.edu.in",
    subject: "Query regarding Lab Internal Viva slot",
    dateShort: "Oct 9",
    dateFull: "Fri, Oct 9, 2026, 11:05 AM",
    snippet:
      "Respected Madam, requesting a slot adjustment for Friday afternoon due to my scheduled NPTEL examination.",
    hasAttachment: false
  },
  // Trash
  {
    id: "trash-1",
    folder: "trash",
    category: "promotions",
    starred: false,
    unread: false,
    isNptelFeatured: false,
    useNptelLogo: false,
    avatarBg: "#e11d48",
    senderName: "BookMyShow",
    senderEmail: "no-reply@bookmyshow.com",
    recipientName: "Pattipati Lalitha",
    recipientEmail: "lalithapattipati@gmail.com",
    subject: "Weekend movie & live event offers near you",
    dateShort: "Oct 1",
    dateFull: "Thu, Oct 1, 2026, 12:00 PM",
    snippet: "Use your student pass to get cashback on weekend bookings.",
    hasAttachment: false
  },
  {
    id: "trash-2",
    folder: "trash",
    category: "promotions",
    starred: false,
    unread: false,
    isNptelFeatured: false,
    useNptelLogo: false,
    avatarBg: "#16a34a",
    senderName: "Spotify",
    senderEmail: "no-reply@spotify.com",
    recipientName: "Pattipati Lalitha",
    recipientEmail: "lalithapattipati@gmail.com",
    subject: "Your weekly focus & study playlist is ready",
    dateShort: "Sep 28",
    dateFull: "Mon, Sep 28, 2026, 10:00 AM",
    snippet: "Deep focus instrumentals picked just for your study sessions.",
    hasAttachment: false
  }
];

let state = {
  emails: [...INITIAL_EMAILS],
  currentFolder: "inbox",
  currentCategoryTab: "all",
  searchQuery: "",
  activeEmailId: null,
  pdfAvailable: true,
  useBackendEndpoint: false,
  isPdfPreviewOpen: false,
  deferredInstallPrompt: null
};

// DOM Elements
const desktopMenuBtn = document.getElementById("desktopMenuBtn");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const brandHomeBtn = document.getElementById("brandHomeBtn");
const appSidebar = document.getElementById("appSidebar");
const sidebarBackdrop = document.getElementById("sidebarBackdrop");
const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const folderButtons = document.querySelectorAll(".folder-item");
const categoryTabs = document.getElementById("categoryTabs");
const categoryTabButtons = document.querySelectorAll(".category-tab");
const mobileSectionLabel = document.getElementById("mobileSectionLabel");
const backToListBtn = document.getElementById("backToListBtn");
const refreshBtn = document.getElementById("refreshBtn");
const currentFolderHeading = document.getElementById("currentFolderHeading");
const emailPaginationInfo = document.getElementById("emailPaginationInfo");
const emailListView = document.getElementById("emailListView");
const emailListContainer = document.getElementById("emailListContainer");
const emailReadingView = document.getElementById("emailReadingView");
const composeBtn = document.getElementById("composeBtn");
const mobileComposeFab = document.getElementById("mobileComposeFab");
const composeModal = document.getElementById("composeModal");
const closeComposeBtn = document.getElementById("closeComposeBtn");
const composeForm = document.getElementById("composeForm");
const saveDraftBtn = document.getElementById("saveDraftBtn");
const toastContainer = document.getElementById("toastContainer");
const installPwaHeaderBtn = document.getElementById("installPwaHeaderBtn");
const mobileUnreadBadge = document.getElementById("mobileUnreadBadge");
const bottomNavMailBtn = document.getElementById("bottomNavMailBtn");

function showToast(message, type = "success", durationMs = 3800) {
  const toast = document.createElement("div");
  toast.className = `toast-item ${type}`;
  toast.innerHTML = `
    <span>${type === "error" ? "⚠️" : "✓"}</span>
    <span>${message}</span>
  `;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.25s ease";
    setTimeout(() => toast.remove(), 260);
  }, durationMs);
}

function getBestPdfUrl(forDownload = false) {
  if (state.useBackendEndpoint && forDownload) {
    return HALL_TICKET_CONFIG.backendDownloadEndpoint;
  }
  return HALL_TICKET_CONFIG.pdfRelativeUrl;
}

async function checkPdfAvailability() {
  if (window.location.protocol === "file:") {
    state.pdfAvailable = true;
    state.useBackendEndpoint = false;
    return true;
  }

  try {
    const healthResp = await fetch(HALL_TICKET_CONFIG.backendHealthEndpoint, {
      method: "GET",
      cache: "no-store"
    });
    if (healthResp.ok) {
      const data = await healthResp.json();
      if (data && data.pdfExists) {
        state.pdfAvailable = true;
        state.useBackendEndpoint = true;
        return true;
      }
    }
  } catch (_) {}

  // Try primary PDF filename
  try {
    const response = await fetch(HALL_TICKET_CONFIG.pdfRelativeUrl, {
      method: "HEAD",
      cache: "no-store"
    });
    if (response.ok) {
      state.pdfAvailable = true;
      state.useBackendEndpoint = false;
      return true;
    }
  } catch (_) {}

  // Try fallback PDF filename
  try {
    const response2 = await fetch(HALL_TICKET_CONFIG.pdfFallbackUrl, {
      method: "HEAD",
      cache: "no-store"
    });
    if (response2.ok) {
      HALL_TICKET_CONFIG.pdfFileName = HALL_TICKET_CONFIG.pdfFallbackFileName;
      HALL_TICKET_CONFIG.pdfRelativeUrl = HALL_TICKET_CONFIG.pdfFallbackUrl;
      state.pdfAvailable = true;
      state.useBackendEndpoint = false;
      return true;
    }
  } catch (_) {}

  state.pdfAvailable = false;
  return false;
}

async function handleHallTicketDownload(event) {
  // If running inside the standalone Android APK with native PDF bridge
  if (window.AndroidPdfBridge && typeof window.AndroidPdfBridge.downloadAndOpenPdf === "function") {
    event.preventDefault();
    try {
      const result = window.AndroidPdfBridge.downloadAndOpenPdf(HALL_TICKET_CONFIG.pdfFileName);
      showToast(
        result || `Saved ${HALL_TICKET_CONFIG.pdfFileName} to Downloads and opening PDF...`,
        "success",
        4500
      );
    } catch (err) {
      showToast(`Error saving PDF: ${err.message || err}`, "error", 5000);
    }
    return;
  }

  if (window.location.protocol !== "file:") {
    const available = await checkPdfAvailability();
    if (!available) {
      event.preventDefault();
      showToast(
        `Hall Ticket PDF (${HALL_TICKET_CONFIG.pdfFileName}) is unavailable. Place ${HALL_TICKET_CONFIG.pdfFileName} in the project root folder.`,
        "error",
        6000
      );
      return;
    }
  }

  const targetLink = event.currentTarget;
  if (targetLink && targetLink.tagName === "A") {
    targetLink.href = getBestPdfUrl(true);
    targetLink.setAttribute("download", HALL_TICKET_CONFIG.pdfFileName);
  }

  showToast(`Downloading ${HALL_TICKET_CONFIG.pdfFileName}...`, "success");
}

function renderSenderAvatarHtml(email, isReadingView = false) {
  const baseClass = isReadingView ? "sender-avatar" : "row-avatar-wrap";
  if (email.useNptelLogo) {
    return `
      <div class="${baseClass} nptel-logo-avatar">
        <img src="${HALL_TICKET_CONFIG.nptelLogoUrl}" alt="NPTEL" class="row-avatar-img" />
      </div>
    `;
  }
  const initial = (email.senderName.replace(/^To:\s*/i, "").trim()[0] || "M").toUpperCase();
  const bg = email.avatarBg || "#1a73e8";
  return `
    <div class="${baseClass}" style="background-color: ${bg};">
      ${initial}
    </div>
  `;
}

function buildNptelEmailBodyHtml() {
  const c = HALL_TICKET_CONFIG.candidate;
  const downloadUrl = getBestPdfUrl(true);
  const previewUrl = HALL_TICKET_CONFIG.pdfRelativeUrl;

  return `
    <div class="nptel-email-container">
      <div class="nptel-banner-header">
        <div class="nptel-banner-left">
          <img src="${HALL_TICKET_CONFIG.nptelLogoUrl}" alt="NPTEL Logo" class="nptel-header-logo" />
          <div class="nptel-banner-title">
            <h3>National Programme on Technology Enhanced Learning (NPTEL)</h3>
            <p>October 2026 Examination – Hall Ticket &amp; Test Centre Notification</p>
          </div>
        </div>
        <div class="nptel-banner-badges">
          <span class="nptel-session-badge">Afternoon Session (${c.session})</span>
          <span class="demo-subtle-badge">Unofficial educational demo</span>
        </div>
      </div>

      <div class="nptel-email-content">
        <p class="nptel-greeting">Dear <strong>${c.name}</strong>,</p>
        <p class="nptel-intro">
          Greetings from NPTEL! Your registration status for the <strong>October 2026 NPTEL Certification Examinations</strong> is <strong>CONFIRMED</strong>. The Hall Ticket for your registered course has been released. Please verify your candidate and examination centre details below and download your Hall Ticket.
        </p>

        <div class="candidate-details-card">
          <div class="candidate-details-header">
            <span>Candidate &amp; Examination Centre Details</span>
            <span class="status-confirmed-pill">Registration Status: CONFIRMED</span>
          </div>
          <table class="candidate-table" aria-label="Candidate and Exam Details">
            <tbody>
              <tr>
                <th scope="row">Candidate Name</th>
                <td>${c.name}</td>
              </tr>
              <tr>
                <th scope="row">Roll Number</th>
                <td>${c.rollNo}</td>
              </tr>
              <tr>
                <th scope="row">Course</th>
                <td>${c.courseName} <span style="color:#5f6368;font-weight:500;">(${c.courseCode})</span></td>
              </tr>
              <tr>
                <th scope="row">Exam Date</th>
                <td>${c.examDate}</td>
              </tr>
              <tr>
                <th scope="row">Session / Shift</th>
                <td>${c.session} <span style="color:#5f6368;font-weight:500;">(Reporting: ${c.reportingTime} | Gate Closure: ${c.gateClosure} | Exam: ${c.examTiming})</span></td>
              </tr>
              <tr>
                <th scope="row">Seating Number</th>
                <td>${c.seatingNumber}</td>
              </tr>
              <tr>
                <th scope="row">Exam Centre</th>
                <td>${c.examCentre}</td>
              </tr>
              <tr>
                <th scope="row">Centre Address</th>
                <td>${c.centreAddress}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="hallticket-cta-box">
          <div class="hallticket-cta-title">NPTEL Exam Hall Ticket – October 2026</div>
          <p class="hallticket-cta-desc">
            Click below to download your Hall Ticket PDF (<code>${HALL_TICKET_CONFIG.pdfFileName}</code>). Please carry a printed A4 copy and an original photo ID card to the examination venue.
          </p>
          <div class="hallticket-btn-group">
            <a
              href="${downloadUrl}"
              download="${HALL_TICKET_CONFIG.pdfFileName}"
              id="readingPrimaryDownloadBtn"
              class="btn-download-large"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path>
              </svg>
              <span>Download Hallticket</span>
            </a>

            <button
              type="button"
              id="togglePdfPreviewBtn"
              class="btn-preview-pdf"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
              </svg>
              <span>${state.isPdfPreviewOpen ? "Hide PDF Preview" : "Preview Hall Ticket"}</span>
            </button>

            <a
              href="${previewUrl}"
              target="_blank"
              rel="noopener noreferrer"
              id="openPdfNewTabBtn"
              class="btn-preview-pdf"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
              </svg>
              <span>Open in Browser</span>
            </a>
          </div>
        </div>

        <div id="pdfPreviewContainer" class="pdf-preview-wrapper ${state.isPdfPreviewOpen ? "" : "hidden"}">
          <div class="pdf-preview-toolbar">
            <span><strong>${HALL_TICKET_CONFIG.pdfFileName}</strong></span>
            <a href="${previewUrl}" target="_blank" rel="noopener noreferrer" style="color:#38bdf8;text-decoration:underline;font-size:0.82rem;">
              Open Fullscreen ↗
            </a>
          </div>
          <iframe
            src="${previewUrl}"
            class="pdf-iframe"
            title="Hall Ticket PDF Preview for Pattipati Lalitha"
          ></iframe>
        </div>

        <div class="exam-instructions-box">
          <h4>General Instructions for Candidates – AN Session:</h4>
          <ul>
            <li>The Hall Ticket must be presented for verification along with one <strong>original photo identification</strong> (School ID, College ID, Employee ID, Driving License, Passport, PAN card, Voter ID, or Aadhaar-ID). Copies on the phone will not be permitted.</li>
            <li>Print the Hall Ticket on <strong>A4-sized paper</strong> using a laser printer, preferably a color photo printer, ensuring photograph and signature images are legible.</li>
            <li><strong>Timeline:</strong> 01:00 pm – Report to examination venue | 01:40 pm – Occupy allotted seats | 01:50 pm – Login and read instructions | 02:00 pm – Exam starts | 02:30 pm – Gate closes | 05:00 pm – Exam ends.</li>
          </ul>
        </div>

        <p style="margin-top: 16px; color: #3c4043; font-size: 0.88rem;">
          Best wishes,<br/>
          <strong>NPTEL Team</strong><br/>
          IIT Madras
        </p>

        <div class="attachment-section">
          <div class="attachment-heading">1 Attachment</div>
          <div class="attachment-card">
            <div class="attachment-file-info">
              <div class="pdf-icon-badge">PDF</div>
              <div>
                <div class="attachment-name">${HALL_TICKET_CONFIG.pdfFileName}</div>
                <div class="attachment-meta">${HALL_TICKET_CONFIG.fileSizeDisplay}</div>
              </div>
            </div>
            <div class="attachment-actions">
              <a
                href="${downloadUrl}"
                download="${HALL_TICKET_CONFIG.pdfFileName}"
                id="attachmentChipDownloadBtn"
                class="btn-primary-download"
              >
                Download
              </a>
              <a
                href="${previewUrl}"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-secondary"
                style="text-decoration: none;"
              >
                Open
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function getFilteredEmails() {
  const q = state.searchQuery.trim().toLowerCase();

  return state.emails.filter((email) => {
    if (state.currentFolder === "starred") {
      if (!email.starred || email.folder === "trash") return false;
    } else if (["promotions", "social", "updates"].includes(state.currentFolder)) {
      if (email.folder !== "inbox" || email.category !== state.currentFolder) return false;
    } else {
      if (email.folder !== state.currentFolder) return false;
    }

    if (state.currentFolder === "inbox" && state.currentCategoryTab !== "all") {
      if (email.category !== state.currentCategoryTab) return false;
    }

    if (q) {
      const searchable = [
        email.subject,
        email.senderName,
        email.senderEmail,
        email.recipientName,
        email.snippet,
        email.attachmentName || "",
        email.isNptelFeatured ? HALL_TICKET_CONFIG.candidate.courseName : "",
        email.isNptelFeatured ? HALL_TICKET_CONFIG.candidate.examCentre : "",
        email.isNptelFeatured ? HALL_TICKET_CONFIG.candidate.centreAddress : ""
      ]
        .join(" ")
        .toLowerCase();
      return searchable.includes(q);
    }

    return true;
  });
}

function updateFolderCounts() {
  const unreadInbox = state.emails.filter(
    (e) => e.folder === "inbox" && e.unread
  ).length;
  const counts = {
    inbox: unreadInbox > 0 ? unreadInbox : state.emails.filter((e) => e.folder === "inbox").length,
    starred: state.emails.filter((e) => e.starred && e.folder !== "trash").length,
    sent: state.emails.filter((e) => e.folder === "sent").length,
    drafts: state.emails.filter((e) => e.folder === "drafts").length,
    trash: state.emails.filter((e) => e.folder === "trash").length
  };

  Object.entries(counts).forEach(([folder, count]) => {
    const el = document.getElementById(`count-${folder}`);
    if (el) el.textContent = count > 0 ? count : "";
  });

  if (mobileUnreadBadge) {
    mobileUnreadBadge.textContent = unreadInbox > 0 ? `${unreadInbox}` : "";
    mobileUnreadBadge.classList.toggle("hidden", unreadInbox === 0);
  }
}

function renderEmailList() {
  updateFolderCounts();

  const sectionLabels = {
    inbox: state.currentCategoryTab === "all" ? "PRIMARY" : state.currentCategoryTab.toUpperCase(),
    promotions: "PROMOTIONS",
    social: "SOCIAL",
    updates: "UPDATES",
    starred: "STARRED",
    sent: "SENT",
    drafts: "DRAFTS",
    trash: "TRASH"
  };

  if (mobileSectionLabel) {
    mobileSectionLabel.textContent = sectionLabels[state.currentFolder] || "PRIMARY";
  }

  if (state.currentFolder === "inbox") {
    if (categoryTabs) categoryTabs.classList.remove("hidden");
    if (currentFolderHeading) currentFolderHeading.classList.add("hidden");
  } else {
    if (categoryTabs) categoryTabs.classList.add("hidden");
    if (currentFolderHeading) {
      currentFolderHeading.classList.remove("hidden");
      currentFolderHeading.textContent = sectionLabels[state.currentFolder] || "";
    }
  }

  const filtered = getFilteredEmails();
  const totalDisplay =
    state.currentFolder === "inbox" && !state.searchQuery && state.currentCategoryTab === "all"
      ? 142
      : filtered.length;

  if (emailPaginationInfo) {
    emailPaginationInfo.textContent =
      filtered.length === 0 ? "0 of 0" : `1–${filtered.length} of ${totalDisplay}`;
  }

  if (filtered.length === 0) {
    emailListContainer.innerHTML = `
      <div class="empty-state">
        <p style="font-size:0.95rem;font-weight:500;margin-bottom:4px;">Nothing in ${sectionLabels[state.currentFolder] || "this folder"}</p>
        <p style="font-size:0.84rem;">Try searching or switching folders.</p>
      </div>
    `;
    return;
  }

  emailListContainer.innerHTML = filtered
    .map((email) => {
      const unreadClass = email.unread ? "unread" : "";
      const starClass = email.starred ? "starred" : "";
      const starSymbol = email.starred ? "★" : "☆";

      return `
        <div class="email-row ${unreadClass}" data-email-id="${email.id}" role="listitem">
          ${renderSenderAvatarHtml(email, false)}

          <div class="row-main">
            <div class="row-top-line">
              <span class="row-sender">${email.senderName}</span>
              <span class="row-date">${email.dateShort}</span>
            </div>

            <div class="row-subject-line">
              ${email.subject}
            </div>

            <div class="row-bottom-line">
              <span class="row-snippet">${email.snippet}</span>
              <button
                type="button"
                class="star-btn ${starClass}"
                data-action="star"
                data-email-id="${email.id}"
                title="${email.starred ? "Starred" : "Not starred"}"
                aria-label="Toggle star"
              >
                ${starSymbol}
              </button>
            </div>

            ${
              email.hasAttachment
                ? `
                <div class="row-attachment-line">
                  <span class="row-attachment-pill" data-action="quick-download" title="Download ${email.attachmentName}">
                    <span class="pdf-mini-icon">PDF</span>
                    <span>${email.attachmentName}</span>
                  </span>
                </div>
                `
                : ""
            }
          </div>
        </div>
      `;
    })
    .join("");
}

function openEmailReadingView(emailId) {
  const email = state.emails.find((e) => e.id === emailId);
  if (!email) return;

  email.unread = false;
  state.activeEmailId = emailId;
  document.body.classList.add("reading-mode");
  updateFolderCounts();

  emailListView.classList.add("hidden");
  emailReadingView.classList.remove("hidden");
  if (backToListBtn) backToListBtn.classList.remove("hidden");
  if (refreshBtn) refreshBtn.classList.add("hidden");
  if (currentFolderHeading) currentFolderHeading.classList.add("hidden");

  const bodyContentHtml = email.isNptelFeatured
    ? buildNptelEmailBodyHtml()
    : email.bodyHtml || `
        <div style="font-size: 0.93rem; color: #202124; line-height: 1.65; max-width: 760px;">
          <p style="margin-bottom: 12px;">Dear <strong>${email.recipientName}</strong>,</p>
          <p style="margin-bottom: 14px;">${email.snippet}</p>
          <p>Regards,<br/><strong>${email.senderName}</strong></p>
        </div>
      `;

  const starClass = email.starred ? "starred" : "";
  const starSymbol = email.starred ? "★" : "☆";

  emailReadingView.innerHTML = `
    <!-- Sticky Top Action Bar (Exact Android Gmail Reading View Bar) -->
    <div class="reading-top-bar">
      <button type="button" id="readingBackBtn" class="icon-btn" aria-label="Back to Inbox">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
        </svg>
      </button>
      <div class="reading-top-actions">
        <button type="button" class="icon-btn" title="Archive" aria-label="Archive">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"></path>
          </svg>
        </button>
        <button type="button" id="readingDeleteBtn" class="icon-btn" title="Delete" aria-label="Delete">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
          </svg>
        </button>
        <button type="button" id="readingUnreadBtn" class="icon-btn" title="Mark unread" aria-label="Mark unread">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"></path>
          </svg>
        </button>
        <button type="button" class="icon-btn" title="More" aria-label="More">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
          </svg>
        </button>
      </div>
    </div>

    <div class="reading-header">
      <div class="reading-subject-header">
        <div class="reading-subject-left">
          <h1 class="reading-subject">${email.subject}</h1>
          <div class="reading-tags-row">
            <span class="inbox-chip">Inbox</span>
            <span class="demo-subtle-badge">Unofficial educational demo</span>
          </div>
        </div>
        <button type="button" id="readingStarBtn" class="star-btn ${starClass}" aria-label="Star message">
          ${starSymbol}
        </button>
      </div>

      <div class="sender-bar">
        <div class="sender-info-left">
          ${renderSenderAvatarHtml(email, true)}
          <div class="sender-details-block">
            <div class="sender-name-line">
              <span class="sender-name">${email.senderName}</span>
              <span class="sender-time-inline">${email.dateShort}</span>
            </div>
            <div class="recipient-line" id="toggleRecipientDetailsBtn" role="button" tabindex="0">
              <span>to me</span>
              <span id="recipientChevron">&#9662;</span>
            </div>
          </div>
        </div>
        <div class="sender-info-right">
          <button type="button" id="topReplyIconBtn" class="icon-btn" title="Reply" aria-label="Reply">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path>
            </svg>
          </button>
          <button type="button" class="icon-btn" title="More" aria-label="More">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Expandable Gmail Security & Header Details -->
      <div id="recipientDetailsCard" class="recipient-details-card hidden">
        <div class="detail-row">
          <span class="detail-label">From</span>
          <span class="detail-value"><strong>${email.senderName}</strong> &bull; ${email.senderEmail}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">To</span>
          <span class="detail-value">${email.recipientName} &bull; ${email.recipientEmail}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Date</span>
          <span class="detail-value">${email.dateFull}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Security</span>
          <span class="detail-value">&#128274; Standard encryption (TLS)</span>
        </div>
      </div>
    </div>

    <div class="reading-body">
      ${bodyContentHtml}
    </div>

    <div class="reading-actions-bar">
      <button type="button" id="replyActionBtn" class="action-pill-btn">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path>
        </svg>
        <span>Reply</span>
      </button>
      <button type="button" id="replyAllActionBtn" class="action-pill-btn">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path>
        </svg>
        <span>Reply all</span>
      </button>
      <button type="button" id="forwardActionBtn" class="action-pill-btn">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M14 9V5l7 7-7 7v-4.1c-5 0-8.5 1.6-11 5.1 1-5 4-10 11-11z"></path>
        </svg>
        <span>Forward</span>
      </button>
    </div>

    <div id="replyForwardContainer" class="reply-forward-box hidden"></div>
  `;

  // Reading view top bar handlers
  document.getElementById("readingBackBtn").addEventListener("click", closeReadingView);
  document.getElementById("readingDeleteBtn").addEventListener("click", () => {
    email.folder = "trash";
    showToast("Conversation moved to Trash.", "success");
    closeReadingView();
  });
  document.getElementById("readingUnreadBtn").addEventListener("click", () => {
    email.unread = true;
    closeReadingView();
  });
  document.getElementById("readingStarBtn").addEventListener("click", (e) => {
    email.starred = !email.starred;
    e.currentTarget.classList.toggle("starred", email.starred);
    e.currentTarget.textContent = email.starred ? "★" : "☆";
    updateFolderCounts();
  });

  const toggleDetailsBtn = document.getElementById("toggleRecipientDetailsBtn");
  const detailsCard = document.getElementById("recipientDetailsCard");
  if (toggleDetailsBtn && detailsCard) {
    toggleDetailsBtn.addEventListener("click", () => {
      detailsCard.classList.toggle("hidden");
    });
  }

  // Wire up Hall Ticket buttons
  const readingDownloadBtn = document.getElementById("readingPrimaryDownloadBtn");
  if (readingDownloadBtn) {
    readingDownloadBtn.addEventListener("click", handleHallTicketDownload);
  }

  const chipDownloadBtn = document.getElementById("attachmentChipDownloadBtn");
  if (chipDownloadBtn) {
    chipDownloadBtn.addEventListener("click", handleHallTicketDownload);
  }

  const openPdfNewTabBtn = document.getElementById("openPdfNewTabBtn");
  if (openPdfNewTabBtn) {
    openPdfNewTabBtn.addEventListener("click", (e) => {
      if (window.AndroidPdfBridge && typeof window.AndroidPdfBridge.downloadAndOpenPdf === "function") {
        handleHallTicketDownload(e);
      }
    });
  }

  const togglePdfPreviewBtn = document.getElementById("togglePdfPreviewBtn");
  const pdfPreviewContainer = document.getElementById("pdfPreviewContainer");
  if (togglePdfPreviewBtn && pdfPreviewContainer) {
    togglePdfPreviewBtn.addEventListener("click", (e) => {
      if (window.AndroidPdfBridge && typeof window.AndroidPdfBridge.downloadAndOpenPdf === "function") {
        handleHallTicketDownload(e);
        return;
      }
      state.isPdfPreviewOpen = !state.isPdfPreviewOpen;
      pdfPreviewContainer.classList.toggle("hidden", !state.isPdfPreviewOpen);
      togglePdfPreviewBtn.querySelector("span").textContent = state.isPdfPreviewOpen
        ? "Hide PDF Preview"
        : "Preview Hall Ticket";
    });
  }

  // Wire up Reply & Forward buttons
  const replyActionBtn = document.getElementById("replyActionBtn");
  const replyAllActionBtn = document.getElementById("replyAllActionBtn");
  const topReplyIconBtn = document.getElementById("topReplyIconBtn");
  const forwardActionBtn = document.getElementById("forwardActionBtn");

  if (replyActionBtn) replyActionBtn.addEventListener("click", () => openReplyOrForwardBox(email, "reply"));
  if (replyAllActionBtn) replyAllActionBtn.addEventListener("click", () => openReplyOrForwardBox(email, "reply"));
  if (topReplyIconBtn) topReplyIconBtn.addEventListener("click", () => openReplyOrForwardBox(email, "reply"));
  if (forwardActionBtn) forwardActionBtn.addEventListener("click", () => openReplyOrForwardBox(email, "forward"));

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openReplyOrForwardBox(email, mode) {
  const container = document.getElementById("replyForwardContainer");
  if (!container) return;

  container.classList.remove("hidden");
  const isReply = mode === "reply";
  const defaultRecipient = isReply ? email.senderEmail : "";
  const defaultBody = isReply
    ? `Thank you for the update. I have downloaded my Hall Ticket for ${HALL_TICKET_CONFIG.candidate.courseName} scheduled on ${HALL_TICKET_CONFIG.candidate.examDate} (${HALL_TICKET_CONFIG.candidate.session}).`
    : `---------- Forwarded message ---------\nFrom: ${email.senderName} <${email.senderEmail}>\nDate: ${email.dateFull}\nSubject: ${email.subject}\nTo: ${email.recipientName} <${email.recipientEmail}>\n\nCandidate: ${HALL_TICKET_CONFIG.candidate.name}\nCourse: ${HALL_TICKET_CONFIG.candidate.courseName}\nExam Date: ${HALL_TICKET_CONFIG.candidate.examDate} (${HALL_TICKET_CONFIG.candidate.session})\nExam Centre: ${HALL_TICKET_CONFIG.candidate.examCentre}\nAddress: ${HALL_TICKET_CONFIG.candidate.centreAddress}`;

  container.innerHTML = `
    <div class="reply-box-header">
      <span>${isReply ? `To: ${email.senderName} <${email.senderEmail}>` : "Forward message"}</span>
      <button type="button" id="closeReplyBoxBtn" class="icon-btn" style="width:28px;height:28px;">&times;</button>
    </div>
    <input
      type="text"
      id="replyToInput"
      class="reply-recipient-input"
      placeholder="Recipients"
      value="${defaultRecipient}"
    />
    <textarea id="replyBodyInput" class="reply-textarea" rows="5">${defaultBody}</textarea>
    <div class="reply-box-actions">
      <button type="button" id="sendReplyBtn" class="btn-send">Send</button>
      <button type="button" id="cancelReplyBtn" class="btn-draft">Discard</button>
    </div>
  `;

  container.scrollIntoView({ behavior: "smooth", block: "nearest" });

  document.getElementById("closeReplyBoxBtn").addEventListener("click", () => {
    container.classList.add("hidden");
  });
  document.getElementById("cancelReplyBtn").addEventListener("click", () => {
    container.classList.add("hidden");
  });
  document.getElementById("sendReplyBtn").addEventListener("click", () => {
    const toVal = document.getElementById("replyToInput").value.trim() || "recipient@gmail.com";
    const bodyVal = document.getElementById("replyBodyInput").value.trim();

    state.emails.unshift({
      id: `sent-${Date.now()}`,
      folder: "sent",
      category: "all",
      starred: false,
      unread: false,
      isNptelFeatured: false,
      useNptelLogo: false,
      avatarBg: "#7b1fa2",
      senderName: `To: ${toVal}`,
      senderEmail: "lalithapattipati@gmail.com",
      recipientName: toVal,
      recipientEmail: toVal,
      subject: `${isReply ? "Re: " : "Fwd: "}${email.subject}`,
      dateShort: "Just now",
      dateFull: "Tue, Oct 13, 2026",
      snippet: bodyVal.slice(0, 120),
      hasAttachment: !isReply && email.hasAttachment,
      attachmentName: !isReply && email.hasAttachment ? email.attachmentName : "",
      bodyHtml: `<div style="white-space:pre-wrap;font-size:0.93rem;color:#202124;">${bodyVal.replace(/</g, "&lt;")}</div>`
    });

    updateFolderCounts();
    container.classList.add("hidden");
    showToast("Message sent.", "success");
  });
}

function closeReadingView() {
  state.activeEmailId = null;
  document.body.classList.remove("reading-mode");
  emailReadingView.classList.add("hidden");
  emailListView.classList.remove("hidden");
  if (backToListBtn) backToListBtn.classList.add("hidden");
  if (refreshBtn) refreshBtn.classList.remove("hidden");
  renderEmailList();
}

function closeMobileSidebar() {
  appSidebar.classList.remove("mobile-open");
  sidebarBackdrop.classList.add("hidden");
}

function initEventListeners() {
  if (desktopMenuBtn) {
    desktopMenuBtn.addEventListener("click", () => {
      appSidebar.classList.toggle("collapsed");
    });
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
      const isOpen = appSidebar.classList.toggle("mobile-open");
      sidebarBackdrop.classList.toggle("hidden", !isOpen);
    });
  }

  sidebarBackdrop.addEventListener("click", closeMobileSidebar);

  if (brandHomeBtn) {
    brandHomeBtn.addEventListener("click", () => {
      state.currentFolder = "inbox";
      state.currentCategoryTab = "all";
      folderButtons.forEach((btn) =>
        btn.classList.toggle("active", btn.dataset.folder === "inbox")
      );
      closeReadingView();
    });
  }

  if (bottomNavMailBtn) {
    bottomNavMailBtn.addEventListener("click", () => {
      state.currentFolder = "inbox";
      closeReadingView();
    });
  }

  if (refreshBtn) {
    refreshBtn.addEventListener("click", () => {
      renderEmailList();
    });
  }

  folderButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      folderButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      state.currentFolder = btn.dataset.folder;
      closeMobileSidebar();
      closeReadingView();
    });
  });

  categoryTabButtons.forEach((tabBtn) => {
    tabBtn.addEventListener("click", () => {
      categoryTabButtons.forEach((b) => b.classList.remove("active"));
      tabBtn.classList.add("active");
      state.currentCategoryTab = tabBtn.dataset.tab;
      renderEmailList();
    });
  });

  searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    clearSearchBtn.classList.toggle("hidden", !state.searchQuery);
    if (state.activeEmailId) {
      closeReadingView();
    } else {
      renderEmailList();
    }
  });

  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    state.searchQuery = "";
    clearSearchBtn.classList.add("hidden");
    renderEmailList();
  });

  if (backToListBtn) {
    backToListBtn.addEventListener("click", closeReadingView);
  }

  emailListContainer.addEventListener("click", (e) => {
    const actionEl = e.target.closest("[data-action]");
    if (actionEl) {
      const action = actionEl.dataset.action;
      if (action === "quick-download") {
        e.stopPropagation();
        if (window.AndroidPdfBridge && typeof window.AndroidPdfBridge.downloadAndOpenPdf === "function") {
          handleHallTicketDownload(e);
          return;
        }
        const tempLink = document.createElement("a");
        tempLink.href = getBestPdfUrl(true);
        tempLink.setAttribute("download", HALL_TICKET_CONFIG.pdfFileName);
        document.body.appendChild(tempLink);
        tempLink.click();
        tempLink.remove();
        showToast(`Downloading ${HALL_TICKET_CONFIG.pdfFileName}...`, "success");
        return;
      }

      e.stopPropagation();
      const emailId = actionEl.dataset.emailId;
      const targetEmail = state.emails.find((item) => item.id === emailId);
      if (!targetEmail) return;

      if (action === "star") {
        targetEmail.starred = !targetEmail.starred;
        renderEmailList();
      }
      return;
    }

    const row = e.target.closest(".email-row");
    if (row && row.dataset.emailId) {
      openEmailReadingView(row.dataset.emailId);
    }
  });

  if (composeBtn) {
    composeBtn.addEventListener("click", () => {
      composeModal.classList.remove("hidden");
      closeMobileSidebar();
    });
  }

  if (mobileComposeFab) {
    mobileComposeFab.addEventListener("click", () => {
      composeModal.classList.remove("hidden");
      closeMobileSidebar();
    });
  }

  closeComposeBtn.addEventListener("click", () => {
    composeModal.classList.add("hidden");
  });

  composeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const to = document.getElementById("composeTo").value.trim();
    const subject = document.getElementById("composeSubject").value.trim();
    const body = document.getElementById("composeBody").value.trim();

    state.emails.unshift({
      id: `sent-${Date.now()}`,
      folder: "sent",
      category: "all",
      starred: false,
      unread: false,
      isNptelFeatured: false,
      useNptelLogo: false,
      avatarBg: "#7b1fa2",
      senderName: `To: ${to}`,
      senderEmail: "lalithapattipati@gmail.com",
      recipientName: to,
      recipientEmail: to,
      subject,
      dateShort: "Just now",
      dateFull: "Tue, Oct 13, 2026",
      snippet: body.slice(0, 120),
      hasAttachment: false,
      bodyHtml: `<div style="white-space:pre-wrap;font-size:0.93rem;color:#202124;">${body.replace(/</g, "&lt;")}</div>`
    });

    composeForm.reset();
    composeModal.classList.add("hidden");
    renderEmailList();
    showToast("Message sent.", "success");
  });

  saveDraftBtn.addEventListener("click", () => {
    const to = document.getElementById("composeTo").value.trim() || "recipient@gmail.com";
    const subject = document.getElementById("composeSubject").value.trim() || "(no subject)";
    const body = document.getElementById("composeBody").value.trim() || "";

    state.emails.unshift({
      id: `draft-${Date.now()}`,
      folder: "drafts",
      category: "all",
      starred: false,
      unread: false,
      isNptelFeatured: false,
      useNptelLogo: false,
      avatarBg: "#64748b",
      senderName: "Draft",
      senderEmail: "lalithapattipati@gmail.com",
      recipientName: to,
      recipientEmail: to,
      subject,
      dateShort: "Just now",
      dateFull: "Tue, Oct 13, 2026",
      snippet: body.slice(0, 120),
      hasAttachment: false,
      bodyHtml: `<div style="white-space:pre-wrap;font-size:0.93rem;color:#202124;">${body.replace(/</g, "&lt;")}</div>`
    });

    composeForm.reset();
    composeModal.classList.add("hidden");
    renderEmailList();
    showToast("Draft saved.", "success");
  });

  // PWA Install Prompt Handling
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    state.deferredInstallPrompt = e;
    if (installPwaHeaderBtn) {
      installPwaHeaderBtn.classList.remove("hidden");
    }
  });

  if (installPwaHeaderBtn) {
    installPwaHeaderBtn.addEventListener("click", async () => {
      if (!state.deferredInstallPrompt) return;
      state.deferredInstallPrompt.prompt();
      await state.deferredInstallPrompt.userChoice;
      state.deferredInstallPrompt = null;
      installPwaHeaderBtn.classList.add("hidden");
    });
  }
}

// Register Service Worker for Standalone Mobile App Support
if ("serviceWorker" in navigator && window.location.protocol !== "file:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  initEventListeners();
  renderEmailList();
  await checkPdfAvailability();
});
