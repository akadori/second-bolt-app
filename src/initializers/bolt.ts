import { App } from '@slack/bolt'

export const app = new App({
  token: process.env.SLACK_ACCESS_TOKEN,
  signingSecret: process.env.SLACK_SIGNIN_SECRET
});
