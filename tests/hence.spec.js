/// <reference path="../typings/test.d.ts" />
var expect = chai.expect;
describe('hence', function () {
    it('should support a single subscription to a single topic', function (done) {
        var hence = new Hence();
        hence.subscribe("topic", function () {
            done();
        });
        hence.publish("topic");
    });
    it('should support multiple subscriptions to a single topic', function (done) {
        var hence = new Hence();
        var expected = 2;
        var triggered = 0;
        for (var i = 0; i < expected; i++) {
            hence.subscribe("topic", function () {
                triggered++;
                if (triggered === expected) {
                    done();
                }
            });
        }
        hence.publish("topic");
    });
});
//# sourceMappingURL=hence.spec.js.map