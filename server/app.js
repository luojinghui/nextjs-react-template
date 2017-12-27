/**
 * Created Date: 2017/12/26
 * Author: luojinghui
 */
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});

// export {app}
exports.app = app;