/* Building an Adult Spiritual Formation Pathway — Faircreek Church
   All page content lives here. index.html renders it. Edit this file to update;
   no build step required. Content is intentionally a SKETCH — the pathway is
   meant to be shaped WITH the teachers and idea shapers who join us. */

window.PATHWAY = {
  title: "Building a Formation Pathway",
  subtitle:
    "We're not choosing another curriculum. We're building a reproducible way to help adults at Faircreek learn, practice, and sustain the rhythms of life with Christ — and we want to build it with you.",
  intro:
    "This is a working sketch, not a finished plan. It names where we think God is leading, the gaps we sense, and a two-year approach. Everything here is meant to be tested, added to, and reshaped by the passions and strengths of the leaders who join. Come help us discover what Faircreek adults need — and where you might serve.",

  // The organizing question
  thesis: {
    eyebrow: "The Organizing Question",
    question:
      "What does a Christian need to know, practice, and become in order to live the abundant life in Christ?",
    body:
      "The answer isn't a class list. It's a formation ecology: Scripture, prayer, community, generosity, service, and embodied local apprenticeship — held together by sound theology and a repeatable structure. We want to move from curriculum first to pathway first. Good resources should serve the pathway, not define it."
  },

  // Formation ecology — the core first-year practices
  ecology: {
    eyebrow: "The Formation Ecology",
    sub:
      "The rhythms through which the Holy Spirit ordinarily forms believers. We apprentice people INTO these seven practices — not merely inform them ABOUT them — sequenced across two years: Year One roots, Year Two sends.",
    practices: [
      { icon: "seed", color: "#7d5ba6", year: 1, name: "Apprenticeship / The Way", note: "Local, credible people who model the practices — seeing and doing, not just hearing content." },
      { icon: "book", color: "#ef7d10", year: 1, name: "Scripture", note: "Learning to read the Bible regularly, intelligently, and transformatively — not just affirming it." },
      { icon: "pray", color: "#3f6d8e", year: 1, name: "Prayer", note: "A practiced rhythm: listening, honest dependence, expectancy — and help for those uncomfortable praying aloud." },
      { icon: "people", color: "#4f8a72", year: 1, name: "Community", note: "Community as a spiritual practice and formation environment, not an optional program to join." },
      { icon: "hands", color: "#b7791f", year: 2, name: "Serving", note: "Embodied service where faith is practiced, not merely discussed." },
      { icon: "voice", color: "#2f7d7d", year: 2, name: "Personal Testimony / Witness", note: "Developing the skill of giving an answer for the joy that is in us. Others are drawn by the testimony of God's handiwork in our current lives." },
      { icon: "gift", color: "#2f3e57", year: 2, name: "Generosity", note: "Generous stewardship as a formed habit of the heart, woven into everyday discipleship." }
    ],
    footnote:
      "Fasting and other classic practices may be added after theological and practical review. Marriage and parenting may emerge if leaders identify them as urgent Faircreek needs."
  },

  // Two-year roadmap
  roadmap: {
    eyebrow: "The Two-Year Roadmap",
    sub:
      "We build the pathway over two years — beginning with the practices that root people in the way of Jesus, then extending outward into witness and mission. The sequence is a starting frame; leaders' passions and Faircreek's needs will shape the calendar.",
    years: [
      { label: "Year One", tag: "Rooted — being with Jesus", color: "#3f6d8e",
        practices: ["Apprenticeship / The Way", "Scripture", "Prayer", "Community"],
        note: "Start where formation starts: apprenticeship to Jesus and the inner rhythms — Scripture, prayer, and life together — that ground everything else." },
      { label: "Year Two", tag: "Sent — living as Jesus did", color: "#b7791f",
        practices: ["Serving", "Personal Testimony / Witness", "Generosity"],
        note: "Extend the practices outward: serving others, giving an answer for the joy in us, and generous stewardship as a way of life." }
    ]
  },

  // Diagnosed gaps
  gaps: {
    eyebrow: "Gaps We Sense",
    sub:
      "Where decades of faithful church life haven't yet produced enough durable, visible transformation. We want your read on these — and any we've missed.",
    list: [
      { title: "Biblical literacy", body: "People may affirm Scripture without knowing how to read it regularly and transformatively." },
      { title: "Prayer competence", body: "Many don't know how to pray consistently, persistently, expectantly — or aloud." },
      { title: "Local embodied examples", body: "People learn by seeing and doing; national teachers can't replace local models and mentors." },
      { title: "Community as formation", body: "Groups don't always present as a core formation model, either in formal development or informal application." },
      { title: "Distraction & modern tempo", body: "Career, money, busyness, and social media actively compete with deep formation — especially for younger adults." },
      { title: "Resource & doctrine fit", body: "Imported resources may help, but must fit Faircreek's convictions and be reviewed honestly." }
    ]
  },

  // First-year model
  model: {
    eyebrow: "A Two-Year Approach",
    sub:
      "Short, repeatable modules led by spiritually credible people, sequenced across two years. Familiar enough that participants know what to expect — flexible enough that teacher passion and emphasis can vary.",
    cards: [
      { k: "6", title: "Six-week modules", note: "The preferred working unit. Co-leaders may split the load — three weeks each as a minimum contribution." },
      { k: "2", title: "Two-year arc", note: "Year One roots people in the way of Jesus (apprenticeship, Scripture, prayer, community); Year Two sends them outward (serving, witness, generosity)." },
      { k: "★", title: "Let leaders lead", note: "We give support, a template, and a clear outcome — but don't over-control style or content in the pilot." },
      { k: "↻", title: "Build toward replication", note: "As each year closes we gather notes, outlines, and lessons into a reusable Faircreek format — replication, not uniformity." }
    ],
    note:
      "A school analogy from our conversation: high school feels coherent because the structure is familiar; college can feel chaotic because every professor runs class differently. Our modules should preserve teacher variety without structural whiplash for participants."
  },

  // Foundations as scaffold
  foundations: {
    eyebrow: "An Idea Scaffold to Adapt",
    title: "Our existing Foundations series is one input — not the blueprint.",
    body:
      "Foundations (four classes, twelve weeks on the essentials of following Jesus) already exists and can be scaled down, added to, or subtracted from as we build this pathway. Think of it as a scaffold: useful structure and tested content we can adapt, review for fit, and fold into the larger formation aim — not a fixed architecture we're locked into.",
    linkLabel: "View the Foundations roadmap",
    linkHref: "https://snthor-phd.github.io/FCC-Foundations-Roadmap/",
    otherResources:
      "Other candidates — North Point Foundations, BibleProject, and Practicing the Way — will be reviewed the same way: for theology, maturity fit, usefulness, and resource intensity. The question is never “Which curriculum do we buy?” but “What pathway are we building, and which resources help it?”"
  },

  // Resources mapped to the practices
  resourceMap: {
    eyebrow: "Resources ↔ Practices",
    sub:
      "Each resource plays a different role. Foundations is our adaptable scaffold (what we already have); BibleProject supplies the biblical theology behind a practice (the why, rooted in the whole Bible story); Practicing the Way supplies the how-to. This is a first read for the teachers reviewing resources — expect it to change.",
    columns: ["Practice", "Foundations — our scaffold", "BibleProject — theology / why", "Practicing the Way — the practice"],
    rows: [
      { practice: "Apprenticeship / The Way", color: "#7d5ba6", year: 1,
        fdn: "“How to Follow Jesus”",
        bp: "Sermon on the Mount collection (the way of Jesus)",
        ptw: "Whole framework + The Course (apprenticeship to Jesus)" },
      { practice: "Scripture", color: "#ef7d10", year: 1,
        fdn: "Touched in “Establish Spiritual Habits”",
        bp: "Core strength — How to Read the Bible, book overviews, classes, Public Reading of Scripture theme",
        ptw: "The Scripture Practice" },
      { practice: "Prayer", color: "#3f6d8e", year: 1,
        fdn: "Prayer as a spiritual habit",
        bp: "Lord's Prayer video series + podcast episodes",
        ptw: "The Prayer Practice" },
      { practice: "Community", color: "#4f8a72", year: 1,
        fdn: "“Our New Family” (new identity)",
        bp: "Built for group discussion (no named theme)",
        ptw: "The Community Practice" },
      { practice: "Serving", color: "#b7791f", year: 2,
        fdn: "—",
        bp: "Justice theme video",
        ptw: "The Service Practice" },
      { practice: "Personal Testimony / Witness", color: "#2f7d7d", year: 2,
        fdn: "—",
        bp: "—",
        ptw: "The Witness Practice" },
      { practice: "Generosity", color: "#2f3e57", year: 2,
        fdn: "—",
        bp: "Generosity theme video",
        ptw: "The Generosity Practice" },
      { practice: "Sabbath", color: "#8d9db7", review: true,
        fdn: "—",
        bp: "Sabbath theme video",
        ptw: "The Sabbath Practice" },
      { practice: "Solitude", color: "#8d9db7", review: true,
        fdn: "—",
        bp: "—",
        ptw: "The Solitude Practice" },
      { practice: "Fasting", color: "#8d9db7", review: true,
        fdn: "—",
        bp: "—",
        ptw: "The Fasting Practice" }
    ],
    note:
      "The shaded rows — Sabbath, Solitude, and Fasting — are the classic practices our brief flags for theological and practical review before adding them to the core. Resources are shown where they already exist (Practicing the Way covers all three; BibleProject has a Sabbath theme video), and empty cells (—) mark where no resource currently speaks to a practice — useful for spotting where leaders may need to develop material."
  },

  // Discovery prompts — for the exploratory meeting
  discovery: {
    eyebrow: "Our First Conversation",
    sub:
      "This is exploratory. Saying no is an honorable outcome. Saying yes doesn't mean immediate teaching. Before we discuss as a group, we'll each take a few quiet minutes to write. Come ready to reflect on these:",
    prompts: [
      { n: 1, q: "Where do you see a formation need at Faircreek?", hint: "What's missing, thin, or assumed? Where do people seem stuck?" },
      { n: 2, q: "Where do you believe you could make an impact?", hint: "Where has God shaped you, your marriage, or your experience to help others?" },
      { n: 3, q: "What are you burdened to teach, model, or facilitate?", hint: "A practice, a passage, a topic, a group of people you care about." },
      { n: 4, q: "Would you join a first-year pilot — possibly as a co-leader for a short module?", hint: "No commitment yet. We're discovering capacity and passion together." }
    ],
    output:
      "What we hope to leave with: a list of perceived needs, leader passion areas, possible modules, potential co-leader pairings, and an honest read on capacity."
  },

  // Sketched planning brief — action plan + open decisions
  brief: {
    eyebrow: "The Plan, Sketched",
    sub:
      "Enough shape to move, not so much that it's decided. The pilot calendar gets built together, after we hear from you.",
    steps: [
      { n: 1, owner: "Steve Thorsen", text: "Meet with Matt to agree on purpose, invitation source, and facilitation role.", when: "Now" },
      { n: 2, owner: "Steve Thorsen + Matt", text: "Draft a one-page “why this meeting / what we expect” page.", when: "Before invites" },
      { n: 3, owner: "Matt", text: "Invite the exploratory group — elders & wives, former elders, deacon-like leaders, potential teachers.", when: "~5-week window" },
      { n: 4, owner: "Steve Thorsen", text: "Facilitate the discovery meeting — written needs, passions, possible teachers, first modules.", when: "When scheduled" },
      { n: 5, owner: "Steve Thorsen + Matt + volunteers", text: "Build the two-year calendar — Year One rooting practices (apprenticeship, Scripture, prayer, community) first, then Year Two (serving, witness, generosity).", when: "After discovery" },
      { n: 6, owner: "Each module", text: "Capture curriculum artifacts — notes, outlines, resource links, session patterns.", when: "Throughout" },
      { n: 7, owner: "ASF team", text: "Reconcile into a reusable Faircreek format as each year closes.", when: "End of each year" }
    ],
    decisions: [
      { q: "Adult age threshold", note: "Does the pathway begin at 16, 18, or another age? Modern attention patterns affect younger adults strongly." },
      { q: "Women & leadership", note: "Clarify Faircreek's working assumptions before launch — it affects who teaches, facilitates, and models." },
      { q: "First module length", note: "Six weeks is the standard, but Scripture may warrant a longer eight-week opening module." },
      { q: "Public statistics", note: "Verify the Bible-engagement statistic before using it from the pulpit or in invitations." },
      { q: "Curriculum minimums", note: "Define what each leader hands back: notes, outline, session plan, links, or full written material." },
      { q: "Parallel classes", note: "Can two Sunday-morning modules run at once? What room, teacher, and childcare constraints apply?" }
    ]
  },

  // Invitation frame
  invitation: {
    eyebrow: "The Invitation",
    heading: "Come help us discover what Faircreek adults need.",
    why:
      "Faircreek is considering how to strengthen adult spiritual formation — not merely by adding classes, but by building a pathway that helps adults learn and practice the rhythms of life with Christ. We want to gather spiritually mature leaders and potential teachers to discern the real needs of our church and identify where God may have equipped people to serve.",
    means:
      "This is exploratory. Saying no is acceptable. Saying yes does not mean immediate teaching. The first year may involve short modules, co-leaders, and reviewed resources — with notes gathered afterward so Faircreek can develop a repeatable structure.",
    ctaLabel: "Connect With Us",
    ctaHref: "https://faircreek.org/connect-with-us/"
  }
};
