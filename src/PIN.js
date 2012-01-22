function PIN () {
	var subscribers = [],
		state = LOW;

	function getState () {
		return state;
	}
	function setState (newState) {
		state = newState;
		subscribers.forEach (function (pin) {
			pin.state(state);
		});
		return state;
	}
	return {
		connect: function (toWhat) {
			toWhat.state(state);
			subscribers.push(toWhat);
		},
		state: function (newState) {
			if (typeof newState === "undefined") {
				return getState ();
			} else {
				return setState (newState);
			}
		}
	};
}

