class Hence {

	private subscriptions:{ [topic: string]: Function[] } = {};

	private getSubscription(topic:string) {
		return this.subscriptions[topic];
	}

	subscribe(topic:string, callback:Function) {
		var subscription = this.getSubscription(topic);

		if (!subscription) {
			subscription = [];
			this.subscriptions[topic] = subscription;
		}

		subscription.push(callback);
	}

	publish(topic:string) {
		var subscription = this.getSubscription(topic);

		if (subscription) {
			subscription.forEach(callback => callback());
		}
	}

}

declare var module;
declare var define;

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
