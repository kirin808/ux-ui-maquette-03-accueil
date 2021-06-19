import PinchZoom from "./modules/PinchZoom.js";
import { isTouchEnabled, isSizeOrLower, isSizeOrHigher } from "./modules/navigatorDetection.js";


/* if(isTouchEnabled()) {
	const pinchZoomer = new PinchZoom(
		document.querySelector('.panel-main-image img')
	);
} else if (isSizeOrHigher("990px")){
	const options = {
		fillContainer: true,
		offset: {
			vertical: 0,
			horizontal: getComputedStyle(document.documentElement,null).getPropertyValue("--grid-gap")
		}
	}
	
	const zoomer = new ImageZoom(
		document.querySelector('.panel-main-image picture'),
		options
	);
} */