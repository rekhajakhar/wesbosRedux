import Raven from 'raven-js';

const sentry_key = 'cb55d4f05cd443ce82303222f77ef5e0';
const sentry_app = '61499';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}

// for tracking in here
// https://sentry.io/signup/?original_referrer=https%3A%2F%2Fwww.google.com%2F&utm_campaign=Google_Search_Brand_SentryKW_APAC_Alpha&utm_content=g&utm_id=%7B21427619193%7D&utm_medium=cpc&utm_source=google&utm_term=sentry
