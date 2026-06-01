// 由 SaaS Factory 自動生成，請勿手動編輯（升級時會被覆蓋）。
// 客戶：示範室內設計客戶（木紋設計工作室）
// subdomain：demo-interior

export const projectConfig = {
  client: {
  "clientName": "示範室內設計客戶",
  "brandName": "木紋設計工作室",
  "contactEmail": "demo-interior@saas-factory.dev",
  "subdomain": "demo-interior"
},
  siteTypes: {
  "enabled": [
    "cms",
    "blog",
    "lp"
  ],
  "lpCount": 1
},
  modules: {
    enabled: [
  "blog.categories",
  "cms.about",
  "cms.case-studies",
  "cms.testimonials"
] as const,
  },
  integrations: {
  "payments": [
    "newebpay"
  ],
  "shipping": [],
  "invoice": {
    "providers": [
      "ezpay"
    ],
    "mode": "trigger"
  },
  "notifications": [
    "email",
    "line"
  ]
},
  theme: {
  "presetId": "artisan-craft",
  "primaryColor": "#3a3a3a",
  "accentColor": "#b8916a",
  "radius": "subtle",
  "font": "serif",
  "density": "spacious",
  "darkMode": "light",
  "motionLevel": 2
},
  i18n: {
  "defaultLocale": "zh-TW",
  "enabledLocales": [
    "zh-TW"
  ],
  "multiCurrency": false,
  "multiTimezone": false
},
  deploy: {
  "target": "vercel",
  "repoName": "demo-interior",
  "environments": [
    "production"
  ],
  "privateRepo": false
},
} as const;

export type ProjectConfig = typeof projectConfig;
