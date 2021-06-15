const options = {
	fillContainer: true,
	offset: {
		vertical: 0,
		horizontal: getComputedStyle(document.documentElement,null).getPropertyValue("--grid-gap")
	}
}

console.log(getComputedStyle(document.documentElement,null).getPropertyValue("--gutter"));

const zoomer = new ImageZoom(
	document.querySelector('.panel-main-image picture'),
	options
);