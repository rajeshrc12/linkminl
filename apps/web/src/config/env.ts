export const env = {
  WEB_URL: import.meta.env.VITE_WEB_URL,
  USER_API_URL: import.meta.env.VITE_USER_API_URL,
  SHORTENER_API_URL: import.meta.env.VITE_SHORTENER_API_URL,
  RESOLVER_API_URL: import.meta.env.VITE_RESOLVER_API_URL,
} as const;
