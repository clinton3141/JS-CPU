function Transistor () {
	var collector = new PIN(),
		base = new PIN(),
		emitter = new PIN(),
		_oldEmitterState = emitter.state;

	emitter.state = (function (newState) {
		if (typeof newState === "undefined") {
			return (base.state() === HIGH) ? collector.state() : LOW;
		} else {
			_oldEmitterState.call (emitter, newState);
		}
	});

	return {
		collector: collector,
		base: base,
		emitter: emitter
	};
}

