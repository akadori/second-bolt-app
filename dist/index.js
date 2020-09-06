"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bolt_1 = require("@slack/bolt");
const app = new bolt_1.App({
    token: process.env.SLACK_ACCESS_TOKEN,
    signingSecret: process.env.SLACK_SIGNIN_SECRET
});
(async () => {
    const server = await app.start(process.env.PORT || 3000);
    if (server) {
        console.log(`⚡️ Bolt is running! PORT: ${server.address().port}`);
    }
})();
//# sourceMappingURL=index.js.map