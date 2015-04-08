var Hence = (function () {
    function Hence() {
        this.subscriptions = {};
    }
    Hence.prototype.getSubscription = function (topic) {
        return this.subscriptions[topic];
    };
    Hence.prototype.subscribe = function (topic, callback) {
        var subscription = this.getSubscription(topic);
        if (!subscription) {
            subscription = [];
            this.subscriptions[topic] = subscription;
        }
        subscription.push(callback);
    };
    Hence.prototype.publish = function (topic) {
        var subscription = this.getSubscription(topic);
        if (subscription) {
            subscription.forEach(function (callback) { return callback(); });
        }
    };
    return Hence;
})();
// see https://github.com/umdjs/umd
if (typeof module === 'object' && module.exports) {
    // CommonJS (Node)
    module.exports = Hence;
}
else if (typeof define === 'function' && define.amd) {
    // AMD
    define(function () {
        return Hence;
    });
}
//# sourceMappingURL=hence.js.map