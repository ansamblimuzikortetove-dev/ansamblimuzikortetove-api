export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  // Add these for better compatibility
  url: env('PUBLIC_URL', 'http://localhost:1337'), // Make sure this is a valid URL
  proxy: env.bool('PROXY', false),
  cron: {
    enabled: env.bool('CRON_ENABLED', false),
  },
  admin: {
    url: env('ADMIN_URL', '/admin'),
    serveAdminPanel: env.bool('SERVE_ADMIN_PANEL', true),
    autoOpen: false,
  },
});