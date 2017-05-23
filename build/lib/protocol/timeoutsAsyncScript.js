'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = timeoutsAsyncScript;

var _ErrorHandler = require('../utils/ErrorHandler');

var _deprecationWarning = require('../helpers/deprecationWarning');

var _deprecationWarning2 = _interopRequireDefault(_deprecationWarning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * Set the amount of time, in milliseconds, that asynchronous scripts executed
 * by /session/:sessionId/execute_async are permitted to run before they are
 * aborted and a |Timeout| error is returned to the client.
 *
 * This command is deprecated and will be removed soon. Make sure you don't use it in your
 * automation/test scripts anymore to avoid errors. Please use the
 * [`timeouts`](http://webdriver.io/api/protocol/timeouts.html) command instead.
 *
 * @see https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidtimeoutsasync_script
 *
 * @param {Number} ms   The amount of time, in milliseconds, that time-limited commands are permitted to run.
 * @type protocol
 * @deprecated
 *
 */

function timeoutsAsyncScript(ms) {
  /*!
   * parameter check
   */
  if (typeof ms !== 'number') {
    throw new _ErrorHandler.ProtocolError('number or type of arguments don\'t agree with timeoutsAsyncScript protocol command');
  }

  (0, _deprecationWarning2.default)('timeoutsAsyncScript', this.options);
  return this.requestHandler.create('/session/:sessionId/timeouts/async_script', { ms: ms });
}
module.exports = exports['default'];