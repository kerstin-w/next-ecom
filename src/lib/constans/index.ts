/**
 * The name of the application, retrieved from the environment variable `NEXT_PUBLIC_APP_NAME`.
 * If the environment variable is not set, it defaults to 'Prostore'.
 *
 * @constant
 * @type {string}
 */
export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'Prostore';
/**
 * The description of the application, which can be configured via the
 * `NEXT_PUBLIC_APP_DESCRIPTION` environment variable. If the environment
 * variable is not set, a default description is provided.
 */
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  'A modern ecommerce platform built with Next.js and Tailwind CSS';
/**
 * The base URL of the server used in the application.
 *
 * This constant retrieves the server URL from the environment variable
 * `NEXT_PUBLIC_SERVER_URL`. If the environment variable is not defined,
 * it defaults to `'http://localhost:3000'`.
 *
 * @constant
 * @type {string}
 */
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';
