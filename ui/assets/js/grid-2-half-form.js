import {content_header_label_text_col_1, content_form_h2} from '../js/arr-content.js';

/*
//////////////// SECTION: COLUMN ORDER ////////////////////
*/

/* Desktop: left and right */
document.querySelector("#form_col_visual_desktop").addEventListener("change", doColOrderDesktop);

function doColOrderDesktop() {
    const rbs = document.querySelectorAll("input[name='col_visual_desktop']");


    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    let flexparent = iframe.contentWindow.document.querySelector("section");
    if (selectedValue==="left") {
        flexparent.classList.add("flex-row-reverse");
		console.log("add reverse");
    }
    else if (selectedValue==="right") {
        flexparent.classList.remove("flex-row-reverse");
		console.log("remove reverse");
    }
}

/* Mobile: top and bottom */
document.querySelector("#form_col_visual_mobile").addEventListener("change", doColOrderMobile);

function doColOrderMobile() {
    const rbs = document.querySelectorAll("input[name='col_visual_mobile']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    let flexparent = iframe.contentWindow.document.querySelector("section");
    if (selectedValue==="top") {
        flexparent.classList.remove("flex-column-reverse");
    }
    else if (selectedValue==="bottom") {
        flexparent.classList.add("flex-column-reverse");
    }
}

/*
//////////////// VISUAL BLEED ///////////////
*/

document.querySelector("#dd_bleed_desktop").addEventListener("change", doVisualBleedDesktop);

function doVisualBleedDesktop() {

    let opt = document.querySelector("#dd_bleed_desktop").value;
    let elColVis = iframe.contentWindow.document.querySelector("section .col-2.col-visual");

    // Regular
    if (opt==="0") {
        elColVis.classList.remove("desktop-bleed-outside");
        elColVis.classList.remove("desktop-bleed-all");
    }

    else if (opt==="1") {
        elColVis.classList.remove("desktop-bleed-all");
        elColVis.classList.add("desktop-bleed-outside");
    }

    else if (opt==="2") {
        elColVis.classList.remove("desktop-bleed-outside");
        elColVis.classList.add("desktop-bleed-all");
    }
}

document.querySelector("#dd_bleed_mobile").addEventListener("change", doVisualBleedMobile);

function doVisualBleedMobile() {

    let opt = document.querySelector("#dd_bleed_mobile").value;
    let elColVis = iframe.contentWindow.document.querySelector("section .col-2.col-visual");

    // Regular
    if (opt==="0") {
        elColVis.classList.remove("mobile-bleed-edges");
    }

    else if (opt==="1") {
        elColVis.classList.add("mobile-bleed-edges");
    }
}

/*
//////////////// BADGE ABOVE H2 ///////////////
*/

document.querySelector("#cb_badge").addEventListener("change", doBadge);

function doBadge() {

    if (!document.getElementById("cb_badge").checked) {
        removeBadge();
    }

    else {
        removeBadge();
        const newUpperLabelDiv = document.createElement("div");
        newUpperLabelDiv.classList.add("badge");
        iframe.contentWindow.document.querySelector('section .col-2.col-text').prepend(newUpperLabelDiv);
        iframe.contentWindow.document.querySelector('section .col-2.col-text .badge').innerText = content_header_label_text_col_1;
        iframe.contentWindow.document.querySelector('section').innerHTML = iframe.contentWindow.document.querySelector('section').innerHTML.replace("<div class=\"badge\">", "\n\t\t\t<div class=\"badge\">");
        document.getElementById("show-badge").style.display="flex";
    }
}

document.querySelector("#form_badge_shape").addEventListener("change", doBadgeShape);

function doBadgeShape() {
    const objTextBox = iframe.contentWindow.document.querySelector("section .col-2.col-text .badge");
    const rbs = document.querySelectorAll("input[name='switch_badge_shape']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    if (selectedValue==="square") {
        objTextBox.classList.remove("corners-soft");
    }

    else if (selectedValue==="soft") {
        objTextBox.classList.add("corners-soft");
    }
}

function removeBadge() {
    if (iframe.contentWindow.document.querySelector('section .col-2.col-text .badge')) {
        const colBadge = iframe.contentWindow.document.querySelector('section .col-2.col-text .badge');
        colBadge.remove();
        document.getElementById("show-badge").style.display="none";

        const arg1 = sectionClassName+ " .badge { color:";
        const arg2 = sectionClassName+ " .badge { background-color:";
        removeCSSTagPairs(arg1,arg2);
    }
}


/*
//////////////// H2 SUB-HEADINGS ////////////////////
*/

document.querySelector("#cb_h2").addEventListener("change", doH2);

function doH2() {
    if (!document.getElementById("cb_h2").checked) {
        removeH2();
		document.getElementById("btn_h2_text").disabled=true;
		document.getElementById("cb_h2_highlight").disabled=true;
		document.getElementById("cb_h2_border").disabled=true;
		document.getElementById("btn_h2_text").checked=false;

		document.getElementById("cb_h2_highlight").disabled=true;
		document.getElementById("cb_h2_highlight").checked=false;

		document.getElementById("cb_h2_border").disabled=true;
		document.getElementById("cb_h2_border").checked=false;

		document.getElementById("btn_h2_highlight").disabled = true;
		document.getElementById("btn_h2_highlight").checked = false;

        document.getElementById("btn_h2_border").disabled = true;
		document.getElementById("btn_h2_border").checked = false;
    }

    else {
        const newH2 = document.createElement("h2");
        // if no badge exists, position as first child of column
		if (!iframe.contentWindow.document.querySelector("section .col-2.col-text .badge")) {
			iframe.contentWindow.document.querySelector('section .col-2.col-text').prepend(newH2);
			iframe.contentWindow.document.querySelector('section .col-2.col-text h2').textContent = content_form_h2;
		}
        // if badge exists, position after badge with line breaks
		else {
			const el_badge = iframe.contentWindow.document.querySelector("section .col-2.col-text .badge");
			const new_content_form_h2 = "\n\t\t\t<h2>"+content_form_h2+"<\/h2>\n\n";
			el_badge.insertAdjacentHTML("afterend", new_content_form_h2);
		}

		document.getElementById("btn_h2_text").disabled=false;
		document.getElementById("cb_h2_highlight").disabled=false;
		document.getElementById("cb_h2_border").disabled=false;
		document.getElementById("btn_h2_text").checked=false;
		document.getElementById("cb_h2_highlight").checked=false;
		document.getElementById("cb_h2_border").checked=false;
    }
}

function removeH2() {
    const el_h2 = iframe.contentWindow.document.querySelector("section .col-2.col-text h2");
    el_h2.remove();
    document.getElementById("btn_h2_text").disabled=true;
	document.getElementById("cb_h2_highlight").disabled=true;
	document.getElementById("cb_h2_border").disabled=true;
	document.getElementById("btn_h2_text").checked=false;
	document.getElementById("cb_h2_highlight").checked=false;
	document.getElementById("cb_h2_border").checked=false;
    const arg1 = sectionClassName+ " .col-2.col-text h2 { color:";
    removeCSSTagPairs(arg1);
}

/*
//////////////// MAIN HEADING H2 HIGHLIGHT TEXT ///////////////
*/

document.querySelector("#cb_h2_highlight").addEventListener("change", doH2Text);

function doH2Text() {

    let elH2Content = iframe.contentWindow.document.querySelector('section .col-2.col-text h2').innerHTML;

    if (!document.getElementById("cb_h2_highlight").checked) {
        elH2Content = elH2Content.replace(/<\/?span[^>]*>/g,"");
        iframe.contentWindow.document.querySelector('section .col-2.col-text h2').innerHTML = elH2Content;
        document.getElementById("btn_h2_highlight").disabled = true;
        document.getElementById("btn_h2_highlight").checked = false;
        const arg1 = sectionClassName+ " h2 span.highlight {";
        removeCSSTagPairs(arg1);
    }
    else {
        const i = elH2Content.indexOf(" ",1);
        const j = elH2Content.lastIndexOf(" ");
        elH2Content = elH2Content.replace(elH2Content.substring(i+1,j), "<span class=\"highlight\">"+elH2Content.substring(i+1,j)+"</span>");
        iframe.contentWindow.document.querySelector('section .col-2.col-text h2').innerHTML = elH2Content;
        document.getElementById("btn_h2_highlight").disabled = false;
        document.getElementById("btn_h2_highlight").checked = false;
    }
}

/*
//////////////// MAIN HEADING H2 BOTTOM BORDER ///////////////
*/

document.querySelector("#cb_h2_border").addEventListener("change", doH2Border);

function doH2Border() {

    const objH2 = iframe.contentWindow.document.querySelector('section .col-2.col-text h2');

    if (!document.getElementById("cb_h2_border").checked) {
        objH2.classList.remove("heading-underline");
        document.getElementById("btn_h2_border").disabled = true;
        document.getElementById("btn_h2_border").checked = false;
        const arg1 = sectionClassName+ " .col-2.col-text h2.heading-underline::after { background-color: {";
        removeCSSTagPairs(arg1);
    }
    else {
        objH2.classList.add("heading-underline");
        document.getElementById("btn_h2_border").disabled = false;
        document.getElementById("btn_h2_border").checked = true;
    }
}

/*
//////////////// FORM TEXT PARAGRAPH  ////////////////////
*/

document.querySelector("#cb_para").addEventListener("change", doFormPara);

function doFormPara() {
    if (!document.getElementById("cb_para").checked) {
        removePara();
		document.getElementById("btn_para_text").disabled=true;
		document.getElementById("btn_para_text").checked=false;
    }

    else {
        const elForm = iframe.contentWindow.document.getElementById("email-form");
        elForm.insertAdjacentHTML("beforebegin", "<p>Have a project you would like to discuss? Let's make something great together! Use the form below to let me know a little more about your objectives and I will get back to you.</p>");
    }
	document.getElementById("btn_para_text").disabled=false;
}

function removePara() {
    const el_para = iframe.contentWindow.document.querySelector("section .col-2.col-text p");
    el_para.remove();
    document.getElementById("btn_para_text").disabled=true;
	document.getElementById("btn_para_text").checked=false;
    const arg1 = sectionClassName+ " .col-2.col-text p { color:";
    removeCSSTagPairs(arg1);
}


/*
//////////////// TEXT ANIMATION ///////////////
*/

if (document.querySelector("#dd_text_slide")) {
    document.querySelector("#dd_text_slide").addEventListener("change", doTextAnimation);
}

function doTextAnimation() {
    let opt = document.querySelector("#dd_text_slide").value;
    if (opt==="0") {
        removeTextAnimation();
    }

    else if (opt==="1") {
        console.log("do animation");
        removeTextAnimation();
        // Image at right
        if (!document.querySelector(".flex-row-reverse")) {
            console.log("image at right");
            document.querySelector("header col-2.col-text").classList.add("slide-in-left-desktop");
            document.querySelector("header col-2.col-visual").classList.add("slide-in-right-desktop");
        }

        // Image at left
        else {
            console.log("image at left");

            document.querySelector("header col-2.col-text").classList.add("slide-in-left-desktop");
            document.querySelector("header col-2.col-visual").classList.add("slide-in-right-desktop");
        }
    }
}

function removeTextAnimation() {
    document.querySelector("header col-2.col-text").classList.remove("slide-in-left-desktop");
    document.querySelector("header col-2.col-text").classList.remove("slide-in-right-desktop");
    document.querySelector("header col-2.col-visual").classList.add("slide-in-right-desktop");
    document.querySelector("header col-2.col-visual").classList.add("slide-in-left-desktop");
}