/ Select tab content item
function selectItem(e) {
	// Remove all show and border classes
	removeBorder();
    removeShow();
    // Add border to current tab item
	this.classList.add('tab-border');
	// Grab content item from DOM