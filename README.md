DeliverWise/
│
├── backend/                         # All backend API + scraping logic
│   ├── package.json                  # Backend dependencies
│   ├── server.js                     # Entry point for Express server
│   │
│   ├── src/
│   │   ├── config/                   # Configurations (env, API keys, constants)
│   │   │   ├── env.js
│   │   │   └── puppeteerConfig.js
│   │   │
│   │   ├── collectors/               # Platform-specific data fetchers
│   │   │   ├── swiggy.js
│   │   │   ├── zomato.js
│   │   │   ├── blinkit.js
│   │   │   └── dunzo.js
│   │   │
│   │   ├── routes/                   # Express route handlers
│   │   │   ├── compare.js
│   │   │   └── health.js
│   │   │
│   │   ├── services/                 # Orchestration logic
│   │   │   └── compareService.js
│   │   │
│   │   ├── utils/                     # Helpers (parsers, caching, logging)
│   │   │   ├── cache.js
│   │   │   ├── logger.js
│   │   │   └── parsePrice.js
│   │   │
│   │   └── app.js                    # Express app configuration
│   │
│   └── tests/                        # Unit + integration tests
│       ├── swiggy.test.js
│       └── compare.test.js
│
├── frontend/                         # All React (or other frontend) code
│   ├── package.json                  # Frontend dependencies
│   ├── public/
│   │   └── index.html
│   │
│   └── src/
│       ├── components/               # Reusable UI components
│       │   ├── CompareCard.jsx
│       │   ├── InputForm.jsx
│       │   └── Loader.jsx
│       │
│       ├── pages/                    # Full-page views
│       │   └── Home.jsx
│       │
│       ├── hooks/                     # Custom React hooks (e.g., useCompare)
│       │   └── useCompare.js
│       │
│       ├── services/                  # API calls to backend
│       │   └── compareService.js
│       │
│       ├── utils/                     # Helpers (formatting, sorting)
│       │   └── sortResults.js
│       │
│       ├── App.jsx
│       └── index.js
│
├── .gitignore
├── README.md
└── docs/                              # Documentation
    ├── API.md
    └── ARCHITECTURE.md
