function volumeOfRectangularPrism(length, width, height) {
	let volume = 1;
	let dimensions = [length, width, height];
	
	for (var i = 0; i < dimensions.length; i++) {
		if (isNaN(dimensions[i]) || dimensions[i] <= 0)
			return NaN;
		else
			volume *= dimensions[i];
	}
	
	return volume;
}