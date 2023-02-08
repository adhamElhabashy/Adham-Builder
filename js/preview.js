// localStorage condition
if (window.localStorage.popupNumber) {
	window.localStorage.popupNumber = +window.localStorage.popupNumber + 1;
} else {
	window.localStorage.popupNumber = 0;
}
// // variables and functions
// will set to the css of the popup directly
let inputs = Array.from(document.querySelectorAll(".option .direct-rules"));
let buttons = Array.from(document.querySelectorAll(".option-button"));
//this variables are needed to create dynamic variables
let c = "cssObject";
let p = "adhamElement";
let ele = "aElement";
// localStorage variable
let lSPopupNumber = window.localStorage.popupNumber;
// dynamic object variable
eval(`var ${c}${lSPopupNumber}= {};`);
// object variable
let mainObject = eval(c + lSPopupNumber);

// setting the properties of the popup
function setProperty(property, value) {
	let popup = document.getElementById(`${p}${lSPopupNumber}`);
	popup.style[property] = value;
}
// call the main function
function callPopupMethods() {
	mainObject.popupAppear();
}
// handle the active button
function handleActive(ev) {
	ev.target.parentElement.querySelectorAll(".active").forEach((element) => {
		element.classList.remove("active");
	});
	ev.target.classList.add("active");
}
// set default properties for the type of element are chosed
function elementProperties(eleArray, theInputs) {
	for (let i = 0; i < eleArray.length; i++) {
		theInputs[i].value = eleArray[i];
	}
}
// set object propertieas
buttons.forEach((button) => {
	button.addEventListener("click", function (e) {
		handleActive(e);
		let aElement = document.getElementById(`adhamElement${lSPopupNumber}`);
		// (start the element) condition
		if (e.target.dataset.start) {
			// code declare the dynamic popup variable
			eval(`var ${p}${lSPopupNumber}= document.createElement("div");`);
			let mainElement = eval(p + lSPopupNumber);
			mainElement.id = `${p}${lSPopupNumber}`;
			mainElement.classList.add("popup");
			// code to append the popup to the body
			document.body.append(eval(p + lSPopupNumber));
			// code to add the clicked class to the element to use it in condition
			const parentElement = e.target.parentElement.parentElement;
			parentElement.classList.add("clicked");
			// (the type of the element) condition
		} else if (e.target.dataset.ele) {
			if (e.target.dataset.ele == "popup") {
				// width, height, top and left values
				let inputValues = ["200px", "200px", "50%", "50%"];
				let inputEArray = Array.from(document.querySelectorAll(".e-option"));
				// function to set the properties of width, height, top and left
				elementProperties(inputValues, inputEArray);
			} else if (e.target.dataset.ele == "header") {
				// width, height, top and left valuess
				let inputValues = ["100%", "15%", "0", "0"];
				let inputEArray = Array.from(document.querySelectorAll(".e-option"));
				// function to set the properties of width, height, top and left
				elementProperties(inputValues, inputEArray);
			} else if (e.target.dataset.ele == "navigation") {
				// width, height, top and left valuess
				let inputValues = ["15%", "100%", "0", "85%"];
				let inputEArray = Array.from(document.querySelectorAll(".e-option"));
				// function to set the properties of width, height, top and left
				elementProperties(inputValues, inputEArray);
			} else if (e.target.dataset.ele == "others") {
				let inputEArray = Array.from(document.querySelectorAll(".e-option"));
				inputEArray.forEach((input) => (input.value = "0%"));
			}
		} else if (e.target.dataset.overlay) {
			// (overlay) condition
			if (e.target.dataset.overlay == "yes") {
				mainObject.overlay = true;
			} else if (e.target.dataset.overlay == "no") {
				mainObject.overlay = false;
			}
		} else if (e.target.dataset.center) {
			// (centering) condition
			if (e.target.dataset.center == "yes") {
				mainObject.center = true;
				document.getElementById("top").value = "50%";
				document.getElementById("left").value = "50%";
			} else if (e.target.dataset.center == "no") {
				mainObject.center = false;
			}
		} else if (e.target.dataset.appear) {
			// (the appear reason) conditions
			let oClick = document.querySelector(".onclick");
			let stTime = document.querySelector(".start-time");
			if (e.target.dataset.appear == "start-time") {
				mainObject.appearReason = "start-time";
				oClick.classList.remove("show-option");
				stTime.classList.add("show-option");
				document.querySelector(".effect").style.display = "block";
			} else if (e.target.dataset.appear == "onclick") {
				mainObject.appearReason = "onclick";
				document.querySelector(
					".appear-class"
				).textContent = `adham-btn adham-show${lSPopupNumber}`;
				stTime.classList.remove("show-option");
				oClick.classList.add("show-option");
				document.querySelector(".effect").style.display = "block";
			} else if (e.target.dataset.appear == "static") {
				mainObject.appearReason = "static";
				document.querySelector(".effect").style.display = "none";
			}
		} else if (e.target.dataset.disappear) {
			// (the disappear reason) conditions
			let oClickToEnd = document.querySelector(".onclick-to-end");
			let enTime = document.querySelector(".end-time");
			if (e.target.dataset.disappear == "end-time") {
				mainObject.disAppearReason = "end-time";
				oClickToEnd.classList.remove("show-option");
				enTime.classList.add("show-option");
			} else if (e.target.dataset.disappear == "onclick") {
				mainObject.disAppearReason = "onclick";
				document.querySelector(
					".disappear-class"
				).textContent = `adham-btn A adham-hidden${lSPopupNumber}`;
				enTime.classList.remove("show-option");
				oClickToEnd.classList.add("show-option");
			}
		} else if (e.target.dataset.show) {
			// (the appear way) conditions
			if (e.target.dataset.show == "fade-in") {
				aElement.style.cssText = "opacity: 0";
				mainObject.show = "fade-in";
			} else if (e.target.dataset.show == "slide-down") {
				aElement.style.cssText = "top: -200vh";
				mainObject.show = "slide-down";
			} else if (e.target.dataset.show == "slide-up") {
				aElement.style.cssText = "top: 200vh";
				mainObject.show = "slide-up";
			} else if (e.target.dataset.show == "slide-left") {
				aElement.style.cssText = "left: 200%";
				mainObject.show = "slide-left";
			} else if (e.target.dataset.show == "slide-right") {
				aElement.style.cssText = "left: -200%";
				mainObject.show = "slide-right";
			}
		}
	});
});
// button that show the element
document.querySelector(".adham-show").addEventListener("click", function (ev) {
	if (lSPopupNumber == 0) {
		document.querySelector(".instruction-popup").classList.add("p-active");
		document
			.querySelector(".instruction-popup button")
			.addEventListener("click", function () {
				document
					.querySelector(".instruction-popup")
					.classList.remove("p-active");
			});
	}
	let mainElement = document.getElementById(`adhamElement${lSPopupNumber}`);
	//  the conditions that deal with the object
	if (document.querySelector(".start").classList.contains("clicked")) {
		document
			.querySelectorAll("button.copy")
			.forEach((btn) => (btn.style.display = "block "));
		if (mainObject.overlay != true) {
			mainObject.overlay = false;
		}
		if (mainObject.center != true) {
			mainObject.center = false;
		}
		if (
			mainObject.appearReason != "start-time" &&
			mainObject.appearReason != "static"
		) {
			mainObject.appearReason = "onclick";
			document.querySelector(".onclick").classList.add("show-option");
		}
		if (mainObject.disAppearReason != "end-time") {
			mainObject.disAppearReason = "onclick";
			document.querySelector(".onclick-to-end").classList.add("show-option");
		}
		if (!mainObject.show) {
			mainObject.show = "fade-in";
		}
		for (let i = 0; i < inputs.length; i++) {
			// set the object properties to use it in the element
			Object.defineProperties(mainObject, {
				[inputs[i].dataset.property]: {
					value: inputs[i].value,
					configurable: true,
					writable: true,
					enumerable: true,
				},
			});
			// set the element properties from the object
			setProperty(
				Object.keys(mainObject)[i + 3],
				Object.values(mainObject)[i + 3]
			);
		}

		mainObject.top = document.getElementById("top").value;
		mainObject.left = document.getElementById("left").value;
		// function to create the overlay from the object
		mainObject.createOverlay = function () {
			if (mainObject.overlay == true) {
				let overlay = document.createElement("div");
				overlay.classList.add("adham-overlay");
				overlay.classList.add("main-overlay");
				overlay.style.cssText = `opacity: ${parseFloat(mainObject.opacity)}`;
				document.body.append(overlay);
			}
		};
		// function to center the element from the object
		mainObject.centerElement = function () {
			if (mainObject.center == true) {
				document
					.getElementById(`adhamElement${lSPopupNumber}`)
					.classList.add("centering");
			}
		};
		// the function that shows the element
		mainObject.popupAppear = function () {
			//  the conditions that deal with the object
			if (mainObject.appearReason == "start-time") {
				mainObject.startTime =
					document.getElementById("show-the-popup").value * 1000;
				mainObject.endTime =
					document.getElementById("hidden-the-popup").value * 1000;
				setTimeout(() => {
					document.getElementById(
						`adhamElement${lSPopupNumber}`
					).style.opacity = "1";
					mainElement.style.top = mainObject.top;
					mainElement.style.left = mainObject.left;
					mainObject.createOverlay();
					mainObject.centerElement();
					if (mainObject.disAppearReason == "end-time") {
						setTimeout(() => {
							if (mainObject.show == "fade-in") {
								mainElement.style.opacity = 0;
							} else if (mainObject.show == "slide-down") {
								mainElement.style.top = "-200%";
							} else if (mainObject.show == "slide-up") {
								mainElement.style.top = "200%";
							} else if (mainObject.show == "slide-left") {
								mainElement.style.left = "200%";
							} else if (mainObject.show == "slide-right") {
								mainElement.style.left = "-200%";
							}
							if (mainObject.overlay == true) {
								document.querySelector(".main-overlay").remove();
							}
						}, document.getElementById("hidden-the-popup").value * 1000);
					}
				}, mainObject.startTime);
			} else {
				mainElement.style.opacity = "1";
				mainElement.style.top = mainObject.top;
				mainElement.style.left = mainObject.left;
				mainObject.createOverlay();
				mainObject.centerElement();
				if (mainObject.disAppearReason == "end-time") {
					mainObject.endTime =
						document.getElementById("hidden-the-popup").value * 1000;
					setTimeout(() => {
						if (mainObject.show == "fade-in") {
							mainElement.style.opacity = 0;
						} else if (mainObject.show == "slide-down") {
							mainElement.style.top = "-200%";
						} else if (mainObject.show == "slide-up") {
							mainElement.style.top = "200%";
						} else if (mainObject.show == "slide-left") {
							mainElement.style.left = "200%";
						} else if (mainObject.show == "slide-right") {
							mainElement.style.left = "-200%";
						}
						if (mainObject.overlay == true) {
							document.querySelector(".main-overlay").remove();
						}
					}, document.getElementById("hidden-the-popup").value * 1000);
				}
			}
		};
		// the function that calls the popup
		callPopupMethods();
	}
});
// the button that resets the popup number
document.querySelector(".reset").addEventListener("click", () => {
	window.localStorage.clear();
});
