import { content_header_label_text_col_1, content_header_h2_text } from '../js/arr-content.js';

/*
//////////////// CONTAINER MIN HEIGHT ///////////////
*/

document.querySelector("#dd_desktop_min_height").addEventListener("change", doDesktopMinHeight);

function doDesktopMinHeight() {
    let opt = document.querySelector("#dd_desktop_min_height").value;
    if (opt==="0") {
        iframe.contentWindow.document.querySelector("header").classList.remove("desktop-min-height-500px");
    }
    else if (opt==="1") {
        iframe.contentWindow.document.querySelector("header").classList.add("desktop-min-height-500px");
    }
}

/*
//////////////// CONTAINER TEXT WIDTH ///////////////
*/

document.querySelector("#dd_container_text_width").addEventListener("change", doWidthTextDesktop);

function doWidthTextDesktop() {

    let opt = document.querySelector("#dd_container_text_width").value;
    deleteWidthTextDesktop();

    if (opt==="0") {
        iframe.contentWindow.document.querySelector("header .container-text").classList.remove("w-50");
        iframe.contentWindow.document.querySelector("header .container-btn").classList.remove("w-50");
        // iframe.contentWindow.document.getElementById("dd_text_start").disabled=true;
    }
    else if (opt==="1") {
        iframe.contentWindow.document.querySelector("header .container-text").classList.add("w-50");
        enableTextStart();
    }
}

function deleteWidthTextDesktop() {
    iframe.contentWindow.document.querySelector("header .container-text").classList.remove("w-50");
}

function enableTextStart() {
    const elHero = iframe.contentWindow.document.querySelector("header .container-text");
    const elText = iframe.contentWindow.document.querySelector(".container-text");

    if ((elText.classList.contains('w-50')) && (!elHero.classList.contains('text-center-desktop'))) {
        document.getElementById("dd_text_start").disabled=false;
    }
}

document.querySelector("#dd_text_start").addEventListener("change", doTextStart);

function doTextStart() {

    let opt = document.querySelector("#dd_text_start").value;
    if (opt==="0") {
        iframe.contentWindow.document.querySelector("header").classList.remove("text-start-center");
    }
    else if (opt==="1") {
        iframe.contentWindow.document.querySelector("header").classList.add("text-start-center");
    }
}


/*
//////////////// ALIGN TEXT IN HEADER ///////////////
*/

document.querySelector("#form_align_desktop").addEventListener("change", doAlignTextDesktop);

function doAlignTextDesktop() {
    const rbs = document.querySelectorAll("input[name='align_desktop']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    if (selectedValue==="left") {
        iframe.contentWindow.document.querySelector("#HTML-Content header").classList.remove("text-center-desktop");
        // document.getElementById("dd_align_desktop_btns").disabled=false;
        // document.getElementById("dd_align_desktop_btns").value="0";

    }
    else if (selectedValue==="center") {
        iframe.contentWindow.document.querySelector("#HTML-Content header").classList.add("text-center-desktop");
        // document.getElementById("dd_align_desktop_btns").value="1";
        // document.getElementById("dd_align_desktop_btns").disabled=true;
    }
}

document.querySelector("#form_align_mobile").addEventListener("change", doAlignTextMobile);

function doAlignTextMobile() {

    const rbs = document.querySelectorAll("input[name='align_mobile']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    if (selectedValue==="left") {
        iframe.contentWindow.document.querySelector("header").classList.remove("text-center-mobile");
        // document.getElementById("dd_align_desktop_btns").disabled=false;
        // document.getElementById("dd_align_desktop_btns").value="0";

    }
    else if (selectedValue==="center") {
        iframe.contentWindow.document.querySelector("header").classList.add("text-center-mobile");
        // document.getElementById("dd_align_desktop_btns").value="1";
        // document.getElementById("dd_align_desktop_btns").disabled=true;
    }
}

/*
//////////////// BADGE ABOVE H1 ///////////////
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
        iframe.contentWindow.document.querySelector('.container-text').prepend(newUpperLabelDiv);
        iframe.contentWindow.document.querySelector('.container-text .badge').innerText = content_header_label_text_col_1;
        iframe.contentWindow.document.querySelector('.container-text').innerHTML = iframe.contentWindow.document.querySelector('.container-text').innerHTML.replace("<div class=\"badge\">", "\n\t\t\t<div class=\"badge\">");
        document.getElementById("show-badge").style.display="flex";
    }
}

document.querySelector("#form_badge_shape").addEventListener("change", doBadgeShape);

function doBadgeShape() {
    const objTextBox = iframe.contentWindow.document.querySelector(".container-text > .badge");
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
    if (iframe.contentWindow.document.querySelector('.badge')) {
        const upperLabel = iframe.contentWindow.document.querySelector('.badge');
        upperLabel.remove();
        document.getElementById("show-badge").style.display="none";
    }
}

/*
//////////////// MAIN HEADING H1 TEXT LENGTH ///////////////
*/

document.querySelector("#dd_h1_text_length").addEventListener("change", doH1TextLength);

function doH1TextLength() {
    let opt = document.querySelector("#dd_h1_text_length").value;
    let elH1Content = iframe.contentWindow.document.querySelector('.container-text h1').innerHTML;

    if (opt==="0") {
        iframe.contentWindow.document.querySelector('.container-text h1').classList.remove("h1-text-long");
        iframe.contentWindow.document.querySelector('.container-text h1').innerHTML = "Our new product";
    }

    if (opt==="1") {
        iframe.contentWindow.document.querySelector('.container-text h1').classList.add("h1-text-long");
        iframe.contentWindow.document.querySelector('.container-text h1').innerHTML = "We design and build successful digital products that people love to use.";
    }
}


/*
//////////////// MAIN HEADING H1 HIGHLIGHT TEXT ///////////////
*/

document.querySelector("#cb_h1_highlight").addEventListener("change", doH1Text);

function doH1Text() {

    let elH2Content = iframe.contentWindow.document.querySelector('.container-text > h1').innerHTML;

    if (!document.getElementById("cb_h1_highlight").checked) {
        elH2Content = elH2Content.replace(/<\/?span[^>]*>/g,"");
        iframe.contentWindow.document.querySelector('.container-text > h1').innerHTML = elH2Content;
        document.getElementById("btn_h1_highlight").disabled = true;
        document.getElementById("btn_h1_highlight").checked = false;
        document.getElementById("btn_col_1_border").disabled = true;
        document.getElementById("btn_col_1_border").checked = false;
    }
    else {
        const i = elH2Content.indexOf(" ",1);
        const j = elH2Content.lastIndexOf(" ");
        elH2Content = elH2Content.replace(elH2Content.substring(i+1,j), "<span class=\"highlight\">"+elH2Content.substring(i+1,j)+"</span>");
        iframe.contentWindow.document.querySelector('.container-text > h1').innerHTML = elH2Content;
        document.getElementById("btn_h1_highlight").disabled = false;
        document.getElementById("btn_h1_highlight").checked = false;
        document.getElementById("btn_h1_border").disabled = false;
        document.getElementById("btn_h1_border").checked = false;
    }
}

/*
//////////////// MAIN HEADING H1 BOTTOM BORDER ///////////////
*/

document.querySelector("#cb_h1_border").addEventListener("change", doH1Border);

function doH1Border() {

    const objH1 = iframe.contentWindow.document.querySelector('.container-text > h1');

    if (!document.getElementById("cb_h1_border").checked) {
        objH1.classList.remove("heading-underline");
        document.getElementById("btn_h1_border").disabled = true;
    }
    else {
        objH1.classList.add("heading-underline");
        document.getElementById("btn_h1_border").disabled = false;
    }
}

/*
//////////////// SUB-HEADING H2 ///////////////
*/

document.querySelector("#cb_h2").addEventListener("change", doH2);

function doH2() {

    if (!document.getElementById("cb_h2").checked) {
        removeH2();
    }

    else {
        removeH2();
        const newH2 = document.createElement("h2");
        iframe.contentWindow.document.querySelector('.container-text').append(newH2);
        iframe.contentWindow.document.querySelector('.container-text h2').innerText = content_header_h2_text;
        document.getElementById("cb_h2").checked = true;
        document.getElementById("btn_h2_text").disabled = false;
    }
}

function removeH2() {
    if (iframe.contentWindow.document.querySelector('.container-text h2')) {
        const elH2 = iframe.contentWindow.document.querySelector('.container-text h2');
        elH2.remove();
        document.getElementById("cb_h2").checked = false;
        document.getElementById("btn_h2_text").disabled = true;
    }
}

/*
//////////////// ANIMATE TEXT AND BUTTONS ///////////////
*/

document.querySelector("#dd_text_slide").addEventListener("change", doTextAnimate);

function doTextAnimate() {

    let opt = document.getElementById("dd_text_slide").value;

    if (opt==="0") {
        removeTextAnimate();
    }

    else if (opt==="1") {
        removeTextAnimate();
        iframe.contentWindow.document.querySelector("header > .container-text").classList.add("reveal-slide-up-header");
        iframe.contentWindow.document.querySelector("header > .container-btn").classList.add("reveal-slide-up-header");
    }

    else if (opt==="2") {
        removeTextAnimate();
        iframe.contentWindow.document.querySelector("header > .container-text").classList.add("reveal-slide-from-left-header");
        iframe.contentWindow.document.querySelector("header > .container-btn").classList.add("reveal-slide-from-left-header");
    }

    else if (opt==="3") {
        removeTextAnimate();
        iframe.contentWindow.document.querySelector("header > .container-text").classList.add("reveal-slide-from-right-header");
        iframe.contentWindow.document.querySelector("header > .container-btn").classList.add("reveal-slide-from-right-header");
    }

    else if (opt==="4") {
        removeTextAnimate();
        iframe.contentWindow.document.querySelector("header > .container-text").classList.add("reveal-fade-in-header");
        iframe.contentWindow.document.querySelector("header > .container-btn").classList.add("reveal-fade-in-header");
    }

    else if (opt==="5") {
        removeTextAnimate();
        iframe.contentWindow.document.querySelector("header > .container-text").classList.add("reveal-scale-in-header");
        iframe.contentWindow.document.querySelector("header > .container-btn").classList.add("reveal-scale-in-header");
    }
}

function removeTextAnimate() {
    iframe.contentWindow.document.querySelector("header > .container-text").classList.remove("reveal-slide-up-header");
    iframe.contentWindow.document.querySelector("header > .container-btn").classList.remove("reveal-slide-up-header");

    iframe.contentWindow.document.querySelector("header > .container-text").classList.remove("reveal-slide-from-left-header");
    iframe.contentWindow.document.querySelector("header > .container-btn").classList.remove("reveal-slide-from-left-header");

    iframe.contentWindow.document.querySelector("header > .container-text").classList.remove("reveal-slide-from-right-header");
    iframe.contentWindow.document.querySelector("header > .container-btn").classList.remove("reveal-slide-from-right-header");

    iframe.contentWindow.document.querySelector("header > .container-text").classList.remove("reveal-fade-in-header");
    iframe.contentWindow.document.querySelector("header > .container-btn").classList.remove("reveal-fade-in-header");

    iframe.contentWindow.document.querySelector("header > .container-text").classList.remove("reveal-scale-in-header");
    iframe.contentWindow.document.querySelector("header > .container-btn").classList.remove("reveal-scale-in-header");
}