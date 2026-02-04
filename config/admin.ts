export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'), // Changed from ADMIN_AUTH_SECRET to ADMIN_JWT_SECRET
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  // Remove the "secrets" section - it's not needed in Strapi v4
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});