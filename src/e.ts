class E {

	private subscriptions: { [topic: string]: Function[] } = {};

	private getSubscription(topic: string) {
		return this.subscriptions[topic];
	}

	subscribe(topic: string, callback: Function) {
		var subscription = this.getSubscription(topic);

		if(!subscription) {
			subscription = [];
			this.subscriptions[topic] = subscription;
		}

		subscription.push(callback);
	}

	publish(topic: string) {
		var subscription = this.getSubscription(topic);

		if(subscription) {
			subscription.forEach(callback => callback());
		}
	}

}