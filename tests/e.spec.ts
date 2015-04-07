/// <reference path="../typings/test.d.ts" />

var expect = chai.expect;

describe('e', () => {

	it('should support a single subscription to a single topic', (done) => {

		var e = new E();

		e.subscribe("topic", () => {
			done();
		});

		e.publish("topic");

	});

	it('should support multiple subscriptions to a single topic', (done) => {

		var e = new E();

		var expected = 2;
		var triggered = 0;

		for(var i = 0; i < expected; i++) {
			e.subscribe("topic", () => {
				triggered++;
				if(triggered === expected) {
					done();
				}
			});
		}

		e.publish("topic");

	});

});