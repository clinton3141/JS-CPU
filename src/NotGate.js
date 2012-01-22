function NotGate () {
	var transistor = new Transistor (),
		inPin = new PIN (),
		outPin = new PIN (),
		_oldOutPinState = outPin.state;

	inPin.connect (transistor.base);
	transistor.collector.state (HIGH);

	outPin.state = function (newState) {
		if (typeof newState === "undefined") {
			return transistor.emitter.state() === HIGH ? LOW : HIGH;
		} else {
			return _oldOutPinState.call (outPin, newState);
		}
	};

	return {
		input: inPin,
		output: outPin
	};
}

