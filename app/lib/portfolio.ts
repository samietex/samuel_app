// Single source for the portfolio content. Keep it in step with the resumes, which are built
// from the same fact bank (job_application/profile). Client names stay out: describe the domain.

export const headline = "Data Analyst | Data Scientist | Data Engineer";

export const proofPoints = [
  { value: "5+", label: "years in data roles" },
  { value: "15-20%", label: "better pricing precision for clients" },
  { value: "10+", label: "international studies supported" },
  { value: "18+", label: "peer-reviewed tutorials" },
];

export const resumes = [
  {
    role: "Data Analyst",
    file: "/Samuel_Shaibu_Data_Analyst_Resume.pdf",
    focus: "Dashboards, KPIs, SQL and root-cause analysis",
    points: [
      "Self-service Power BI reporting for international clients",
      "KPI design, monitoring and root-cause investigation",
      "Pricing analysis that improved precision by 15\u201120%",
    ],
  },
  {
    role: "Data Scientist",
    file: "/Samuel_Shaibu_Data_Scientist_Resume.pdf",
    focus: "Statistics, experimentation and machine learning",
    points: [
      "Significance testing, confidence intervals and A/B test analysis",
      "Measuring advertising and sponsorship impact",
      "Machine learning, fairness evaluation and Generative AI",
    ],
  },
  {
    role: "Data Engineer",
    file: "/Samuel_Shaibu_Data_Engineer_Resume.pdf",
    focus: "AWS pipelines, Terraform, dbt and Databricks",
    points: [
      "Bronze, silver and gold pipelines on AWS with Terraform",
      "Quality checks that stop bad data before it reaches reports",
      "Cost-aware architecture, avoiding about $350+/month",
    ],
  },
];

export const pillars = [
  {
    title: "Data Analysis & BI",
    summary:
      "I build the KPIs and self-service dashboards business teams use every week, and I find out why when a number looks wrong.",
    items: ["Power BI", "DAX", "SQL", "KPI design", "Root-cause analysis", "Excel"],
    accent: "text-[var(--amber)]",
    icon: "chart",
  },
  {
    title: "Data Science",
    summary:
      "I use statistics and machine learning to answer business questions: what changed, what caused it, and what to do next.",
    items: ["Significance testing", "A/B testing", "Regression", "Pricing models", "Machine learning", "Generative AI"],
    accent: "text-[var(--blue)]",
    icon: "brain",
  },
  {
    title: "Data Engineering",
    summary:
      "I build the pipelines underneath the analysis so the numbers arrive on time, stay consistent and can be trusted.",
    items: ["Python", "PySpark", "AWS Glue", "Athena", "Step Functions", "Terraform"],
    accent: "text-[var(--teal)]",
    icon: "database",
  },
  {
    title: "Teaching & Writing",
    summary:
      "I explain data to people who don't build it, through tutorials, teaching, documentation and plain-language reports.",
    items: ["DataCamp tutorials", "Teaching", "Documentation", "Model cards", "Newsletter", "Stakeholder reports"],
    accent: "text-[var(--rose)]",
    icon: "pen",
  },
];

export type CaseStudy = {
  slug: string;
  title: string;
  label: string;
  kind: "Client work" | "Personal project";
  summary: string;
  context: string;
  did: string[];
  outcome: string[];
  learned?: string;
  stack: string[];
  href?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "airline-brand-health",
    title: "Brand health tracker for an international airline, end to end",
    label: "Analytics + Engineering",
    kind: "Client work",
    summary:
      "From raw survey responses to a self-service Power BI report covering 54 markets, with the pipeline, the KPI rules and the analysis in between.",
    context:
      "An international airline tracks how travellers see its brand and its competitors across 96 cities in 54 markets, against about 300 competitor brands. The marketing team needed one report they could rely on and explore themselves, refreshed automatically as new survey waves arrive.",
    did: [
      "Owned the data pipeline from the survey databases to reporting tables on AWS: extraction, cleaning and transformation in PySpark, and report-ready tables in Athena, orchestrated with Step Functions.",
      "Designed the reporting data model so marketing users can slice every KPI by market, traveller type and customer status on their own.",
      "Agreed KPI definitions with the research team (NPS, funnel bases, top-box scores) so brands and markets compare like for like.",
      "Measured the business impact of advertising and sponsorship by comparing brand funnel metrics for travellers who remembered them against those who didn't.",
      "Built 95% confidence intervals into the reporting tables so every survey percentage comes with its margin of error.",
      "Moved brand and market names out of code into version-controlled reference data, so renames and new markets became data edits instead of code releases.",
      "Built a 14-page Power BI report covering brand health, competitors, loyalty programmes, drivers and barriers, and a competitive positioning map, plus Excel and PowerPoint country report generators.",
    ],
    outcome: [
      "One automatically refreshed report for the client's marketing team, fed end to end from raw survey data.",
      "A brand change that once meant edits across 27 pipeline files is now a reference-data edit with no code change.",
      "Pipelines that stop and alert on missing data instead of publishing incomplete numbers.",
    ],
    learned:
      "The hardest part wasn't the pipeline; it was agreeing what each number means with the people who use it.",
    stack: ["Power BI", "DAX", "SQL", "PySpark", "AWS Glue", "Athena", "Step Functions", "Terraform"],
  },
  {
    slug: "coffee-brand-significance",
    title: "Significance testing for a coffee brand tracker",
    label: "Statistics + BI",
    kind: "Client work",
    summary:
      "Added two-proportion significance tests to a multi-wave brand tracker, so the team acts on real changes instead of noise.",
    context:
      "A coffee brand runs a tracker in waves, measuring awareness, consumption and purchase for itself and its competitors. Small wave-to-wave movements were being read as real changes.",
    did: [
      "Built two-proportion z-tests in DAX that compare each brand's KPI between consecutive survey waves, with significance arrows at the 95% level.",
      "Covered 10 awareness, consumption and purchase KPIs across six waves in the Power BI report.",
      "Mapped what consumers value against how each brand performs, splitting attributes into four importance-performance quadrants so the brand could see its strengths and the gaps worth fixing.",
      "Built the self-service dashboard the team uses to monitor the brand funnel by wave, region and demographic.",
    ],
    outcome: [
      "The team now only sees an up or down arrow when a change clears 95% significance.",
      "A clear priority list: attributes that matter most to consumers and where the brand underperforms.",
    ],
    learned:
      "Repeated tests across many KPIs will still flag the odd false positive, so the next step is correcting for multiple comparisons and showing the interval rather than only an arrow.",
    stack: ["Power BI", "DAX", "Python", "pandas", "SQL", "Hypothesis testing"],
  },
  {
    slug: "brand-index-rebuild",
    title: "Rebuilding a brand purpose index without changing a single number",
    label: "Analytics Engineering",
    kind: "Client work",
    summary:
      "Moved an 11-country brand index from a hand-run notebook and heavy DAX onto an automated AWS pipeline, then proved the new numbers match.",
    context:
      "A client measures how consumers see companies' contribution to society across 11 countries, and publishes it as an index with brand funnels, consumer segments and an importance-versus-delivery view. The report was produced by a hand-run notebook, live database queries and index maths buried in DAX, and it hit capacity errors in peak season.",
    did: [
      "Rewired the report onto a scheduled bronze, silver and gold pipeline on AWS, with every KPI precomputed in Athena and Power BI only presenting it.",
      "Restated the index maths as reviewable SQL, materialising every level the report shows, because averages of averages can't be rolled up.",
      "Checked the rebuilt dashboard value by value against the published report across brands, countries, industries and demographic slices.",
      "Traced every difference to its root cause. Every score for one country had moved; the cause was out-of-date details for ten banks in the old report, one of them in the reference group every score is measured against. The new numbers were the correct ones.",
      "Documented known data problems and raised them with the client instead of hiding them or silently changing them.",
    ],
    outcome: [
      "A refresh that runs itself daily and raises an alarm on any failure, replacing manual steps.",
      "Index logic that lives in version-controlled SQL instead of nested DAX.",
      "A documented, explained list of every difference from the old report.",
    ],
    learned: "When the new numbers disagree with the old ones, the old ones aren't automatically right.",
    stack: ["SQL", "Athena", "PySpark", "AWS Glue", "Step Functions", "Terraform", "Power BI", "DAX"],
  },
  {
    slug: "pricing-and-brand-research",
    title: "Pricing and brand research across 10+ international studies",
    label: "Data Science",
    kind: "Client work",
    summary:
      "Turned survey data into pricing and brand decisions with Gabor-Granger, Van Westendorp, MaxDiff, key driver analysis and brand equity models.",
    context:
      "Clients run international studies to decide how to price products and position their brands. They need answers they can act on, not just tables.",
    did: [
      "Ran MaxDiff and Van Westendorp analyses to find what customers were willing to pay, and Gabor-Granger models for price-demand curves.",
      "Applied CVI/CBI computations and brand perception modelling, with performance-tuned SQL behind them.",
      "Ran key driver analysis to find the few factors that actually move brand preference.",
      "Ranked brand attributes by their correlation with brand ratings for a home-fragrance brand, and turned the analysis notebook into a repeatable command-line job.",
      "Presented findings to clients and turned survey results into recommendations their brand and marketing decisions could rest on.",
    ],
    outcome: [
      "Clients' pricing strategy precision improved by 15-20%.",
      "Insights delivered at 95%+ data accuracy.",
      "Campaigns focused on the top drivers of brand preference.",
    ],
    stack: ["Python", "SQL", "Gabor-Granger", "Van Westendorp", "MaxDiff", "CVI/CBI", "Power BI"],
  },
  {
    slug: "media-ad-awareness",
    title: "Ad awareness and audience measurement for media clients",
    label: "Analytics + Engineering",
    kind: "Client work",
    summary:
      "Weekly ad awareness tracked against ad spend and an industry benchmark, plus automated campaign audience reporting for a media publisher.",
    context:
      "A media company's clients wanted to judge their campaigns week by week, and a publisher needed campaign audience demographics without one-off analysis each time.",
    did: [
      "Built an end-to-end ad awareness report: survey and panel data in, weekly awareness out, shown beside ad spend by media, with an adjustable moving average and an industry benchmark.",
      "Built the ad-awareness pipeline that spreads ad spend across campaign dates and maps brands consistently.",
      "Built an audience-measurement pipeline that matches ad impressions to panelists and aggregates campaign audience demographics on daily and monthly schedules, then moved a second publisher onto the same pattern.",
    ],
    outcome: [
      "Clients compare their campaigns with the industry on their own, week by week.",
      "Campaign audience reports produced automatically instead of by hand.",
    ],
    stack: ["Power BI", "DAX", "SQL", "PySpark", "AWS Glue", "Step Functions", "Athena"],
  },
  {
    slug: "research-product-platform",
    title: "Automating a research product on AWS",
    label: "Data Engineering",
    kind: "Client work",
    summary:
      "Replaced hand-run ingestion for an eye-tracking research product with a scheduled, monitored pipeline, and chose architecture on cost as well as fit.",
    context:
      "An eye-tracking research product depended on hand-run scripts and a legacy report server.",
    did: [
      "Built a daily automated job that picks up newly completed experiments from a vendor API, stores results for querying, skips work already done and alerts the team on failure.",
      "Wrote five architecture decision records and used them to move the product off the legacy report server.",
      "Chose a scheduled container task over a managed Airflow environment, avoiding about $350+ a month in standing cost.",
      "Shipped the Streamlit report app through an automated GitHub Actions pipeline with no long-lived AWS keys.",
    ],
    outcome: [
      "No one runs ingestion by hand any more, and reruns are safe.",
      "About $350+/month of orchestration cost avoided.",
    ],
    stack: ["Python", "ECS Fargate", "EventBridge", "S3", "Athena", "Terraform", "Streamlit", "GitHub Actions"],
  },
  {
    slug: "energy-analytics-platform",
    title: "The 82% that wasn't: rebuilding my own thesis",
    label: "Data Science",
    kind: "Personal project",
    summary:
      "Rebuilt my undergraduate thesis data as an AWS pipeline and found that its headline accuracy relied on a leaking feature.",
    context:
      "My BSc thesis predicted the type of grid outage from a year of real records from a Nigerian electricity distributor, and its best model reached about 82% accuracy.",
    did: [
      "Rebuilt the messy source spreadsheets as an AWS batch pipeline that sets bad rows aside for review instead of silently dropping them.",
      "Re-ran the best model with and without one input and found it was really a second label for the answer, filled in by the same person at the same time.",
      "Corrected the per-feeder reliability figures that the original calculation got wrong, and served outage-type predictions from an XGBoost classifier.",
    ],
    outcome: [
      "Reported the honest 67% accuracy instead of the flattering 82%.",
      "99.95% of outage types and 98% of feeder names mapped cleanly, with nothing lost silently.",
    ],
    learned: "The lower number is the one that answers the real question.",
    stack: ["Python", "PySpark", "AWS Glue", "Athena", "Step Functions", "XGBoost", "Terraform"],
    href: "https://github.com/all-about-data-and-more/energy-analytics-platform",
  },
  {
    slug: "retail-customer-intelligence",
    title: "Customer segments, churn risk and lifetime value in dbt",
    label: "Customer Analytics",
    kind: "Personal project",
    summary:
      "Turned raw e-commerce data into customer segments, churn-risk tiers and lifetime value on Databricks.",
    context: "A public e-commerce dataset with about 99,000 orders and 96,000 customers.",
    did: [
      "Built staging, intermediate and customer marts in dbt for RFM segmentation, churn risk and customer lifetime value.",
      "Wrote business-rule tests that catch inconsistent records before they reach reports, including payment reconciliation.",
      "Deployed with CI/CD that promotes releases from staging to production.",
    ],
    outcome: [
      "Ready-to-use answers to who is likely to leave and who is worth the most.",
      "A test that flags the 303 orders whose payments don't match.",
    ],
    stack: ["dbt", "Databricks", "SQL", "Unity Catalog", "Delta Lake", "GitHub Actions"],
    href: "https://github.com/all-about-data-and-more/retail-customer-intelligence",
  },
  {
    slug: "ai-ethics-budget",
    title: "Fair, auditable budget prediction",
    label: "Responsible AI",
    kind: "Personal project",
    summary:
      "A logistic regression model with fairness evaluation, bias mitigation and a decision threshold chosen inside fairness limits.",
    context: "A prediction model needed to be fair across education-level groups and reviewable by non-technical people.",
    did: [
      "Built a reproducible scikit-learn pipeline with MLflow tracking of baseline and mitigated results.",
      "Evaluated fairness with five metrics and reduced bias with reweighing.",
      "Swept the decision threshold to maximise F1 within fairness constraints.",
      "Delivered a model card, risk assessment and Streamlit demo.",
    ],
    outcome: ["Reduced unfair outcomes across groups, with every trade-off documented for reviewers."],
    stack: ["Python", "scikit-learn", "MLflow", "Streamlit", "pytest"],
    href: "https://github.com/samietex/AI_Ethics_Personalized_Budget_Prediction_Model",
  },
  {
    slug: "ai-trip-planner",
    title: "An AI trip planner that never leaves you stuck",
    label: "Generative AI",
    kind: "Personal project",
    summary:
      "A tool-calling agent on Databricks that plans trips from live forecasts and its own search over destination data.",
    context: "Capstone of The Rise of the AI Data Engineer Boot Camp (2026).",
    did: [
      "Built an agent on Llama 3.3 70B that calls tools for forecasts and air quality, with retrieval over destination descriptions in pgvector.",
      "Exposed the forecast tools through an MCP server for a Databricks agent.",
      "Added a fallback so the app still gives a sensible answer when the model is unavailable.",
    ],
    outcome: ["Plans that adapt to weather and air quality, and an app that always answers."],
    stack: ["Databricks", "Lakebase", "PostgreSQL", "pgvector", "LLM", "MCP", "Python"],
    href: "https://github.com/all-about-data-and-more",
  },
];

export const experiences = [
  {
    company: "Syno International",
    context: "Market research and analytics, Vilnius",
    role: "Data Scientist",
    period: "Jul 2025 - Present",
    bullets: [
      "Own client analytics end to end, from raw survey data to KPIs, statistical tests and self-service Power BI dashboards.",
      "Brought two-proportion significance testing into a brand tracker so teams act on real changes rather than noise.",
      "Measured the business impact of an airline's advertising and sponsorship through recall versus non-recall comparisons.",
      "Built 95% confidence intervals into survey reporting tables so every percentage carries its margin of error.",
      "Turned survey data into pricing and brand decisions for 10+ international studies with Gabor-Granger, CVI/CBI and brand perception models.",
      "Protected trust in a client's brand index by checking a rebuilt dashboard value by value and tracing every difference to its root cause.",
      "Built AWS pipelines with Terraform, Glue, PySpark, Athena and Step Functions that stop and alert on incomplete data.",
      "Kept infrastructure spend low with fit-for-purpose architecture, avoiding about $350+/month in orchestration cost.",
      "Reduced manual survey and operations work with internal AI tools built on Python, Streamlit, LangChain and the OpenAI API.",
      "Partner with project managers, sales colleagues and clients on reporting requirements, and present findings to clients.",
    ],
  },
  {
    company: "Syno International",
    context: "Brand tracking and insight delivery",
    role: "Data Analyst",
    period: "Sep 2024 - Jun 2025",
    bullets: [
      "Improved clients' pricing strategy precision by 15-20% using MaxDiff and Van Westendorp to find what customers were willing to pay.",
      "Delivered insights at 95%+ data accuracy with performance-tuned SQL for brand and campaign models.",
      "Focused client campaigns on the few drivers that move brand preference through key driver analysis.",
      "Built Power BI brand-tracker dashboards with stakeholders for global clients across markets.",
      "Consolidated survey data into one MS SQL Server reporting database with Python and SQL pipelines.",
      "Removed recurring manual reporting steps with Power Automate, and tracked data quality for analytical outputs.",
    ],
  },
  {
    company: "DataCamp",
    context: "Technical education, remote",
    role: "Technical Writer (Data Science)",
    period: "Apr 2024 - Jul 2025",
    bullets: [
      "Published 18+ peer-reviewed tutorials on Python, SQL, pandas and data engineering.",
      "Worked with editors and subject-matter experts on accuracy and teaching value.",
    ],
  },
  {
    company: "GOMYCODE",
    context: "Data science instruction, Lagos",
    role: "Data Science Instructor",
    period: "Aug 2023 - Feb 2024",
    bullets: [
      "Taught 40+ students Python, SQL, data analysis, machine learning and visualisation through hands-on projects.",
      "Coached learners to explain their results to non-technical audiences.",
    ],
  },
  {
    company: "Freelance",
    context: "Energy and edtech clients",
    role: "Business Intelligence Specialist / Data Scientist",
    period: "Nov 2020 - Aug 2024",
    bullets: [
      "Gave client teams clear visibility of their KPIs and operations through Power BI dashboards.",
      "Reduced manual reporting effort by automating data flows with SSIS and SQL on MS SQL Server.",
      "Built classical and neural-network models (ANN, DNN) for research clients with scikit-learn, Keras and TensorFlow.",
      "Wrote documentation and how-to guides that helped clients actually use their analytics.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Analysis & BI",
    items: ["SQL", "Power BI", "DAX", "Power Query", "Excel", "KPI design", "Funnel analysis", "Cohort analysis", "RFM segmentation"],
  },
  {
    title: "Statistics & Data Science",
    items: ["A/B testing", "Hypothesis testing", "Confidence intervals", "Regression", "Key driver analysis", "Gabor-Granger", "Van Westendorp", "MaxDiff", "CVI/CBI"],
  },
  {
    title: "Machine Learning & AI",
    items: ["Python", "pandas", "scikit-learn", "XGBoost", "TensorFlow", "MLflow", "Fairness evaluation", "LangChain", "OpenAI API", "RAG"],
  },
  {
    title: "Data Engineering",
    items: ["PySpark", "AWS Glue", "Athena", "S3", "Step Functions", "Lambda", "Terraform", "dbt", "Databricks", "Docker", "GitHub Actions"],
  },
  {
    title: "Databases",
    items: ["MS SQL Server", "MySQL", "PostgreSQL", "MongoDB", "SSIS"],
  },
  {
    title: "Apps & Writing",
    items: ["Streamlit", "Technical tutorials", "Documentation", "Model cards", "Architecture decision records"],
  },
];

export const education = [
  { school: "Turing College", detail: "Micro Masters, Data Analysis & AI Ethics", period: "2024 - 2025", note: "Included A/B testing, funnel and cohort analysis, RFM segmentation and customer lifetime value." },
  { school: "University of Ibadan", detail: "BSc Mechanical Engineering", period: "2016 - 2023", note: "Thesis: energy grid optimisation using deep machine learning." },
  { school: "Udacity", detail: "Nanodegree, Data Analysis", period: "2022" },
];

export const certifications = [
  {
    title: "The Rise of the AI Data Engineer Boot Camp, DataExpert.io (2026)",
    href: "https://learn.dataexpert.io/certification/samietex/the-rise-of-the-ai-data-engineer-boot-camp-8b5975",
  },
  { title: "Microsoft Certified: Power BI Data Analyst Associate (2023, expired)" },
];

export const publication = {
  title:
    "Optimization of energy grid efficiency with machine learning: A comprehensive review of challenges and opportunities",
  venue: "Renewable and Sustainable Energy Reviews (Elsevier), vol. 223, 2025. Co-author.",
  href: "https://www.sciencedirect.com/science/article/abs/pii/S1364032125006537",
};
