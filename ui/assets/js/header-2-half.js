import {content_header_label_hero, content_h2_col_2_header, content_lists_col_2_header} from '../js/arr-content.js';

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

    let flexparent = iframe.contentWindow.document.querySelector("header");
    if (selectedValue==="left") {
        flexparent.classList.add("flex-row-reverse");
    }
    else if (selectedValue==="right") {
        flexparent.classList.remove("flex-row-reverse");
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

    let flexparent = iframe.contentWindow.document.querySelector("header");
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
    let elColVis = iframe.contentWindow.document.querySelector("header .col-2.col-visual");

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
    let elColVis = iframe.contentWindow.document.querySelector("header .col-2.col-visual");

    // Regular
    if (opt==="0") {
        elColVis.classList.remove("mobile-bleed-edges");
    }

    else if (opt==="1") {
        elColVis.classList.add("mobile-bleed-edges");
    }
}


/*
//////////////// ALIGN TEXT IN TEXT COLUMN ///////////////
*/

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
    }
    else if (selectedValue==="center") {
        iframe.contentWindow.document.querySelector("header").classList.add("text-center-mobile");
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
        iframe.contentWindow.document.querySelector('header .col-2.col-text').prepend(newUpperLabelDiv);
        iframe.contentWindow.document.querySelector('header .col-2.col-text .badge').innerText =  content_header_label_hero;
        iframe.contentWindow.document.querySelector('header').innerHTML = iframe.contentWindow.document.querySelector('header').innerHTML.replace("<div class=\"badge\">", "\n\t\t\t<div class=\"badge\">");
        document.getElementById("show-badge").style.display="flex";
    }
}

document.querySelector("#form_badge_shape").addEventListener("change", doBadgeShape);

function doBadgeShape() {
    const objTextBox = iframe.contentWindow.document.querySelector("header .col-2.col-text .badge");
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
    if (iframe.contentWindow.document.querySelector('header .col-2.col-text .badge')) {
        const colBadge = iframe.contentWindow.document.querySelector('header .col-2.col-text .badge');
        colBadge.remove();
        document.getElementById("show-badge").style.display="none";

        const arg1 = sectionClassName+ " .badge { color:";
        const arg2 = sectionClassName+ " .badge { background-color:";
        removeCSSTagPairs(arg1,arg2);
    }
}

/*
//////////////// MAIN HEADING H1 HIGHLIGHT TEXT ///////////////
*/

document.querySelector("#cb_h1_highlight").addEventListener("change", doH1Text);

function doH1Text() {

    let elH1Content = iframe.contentWindow.document.querySelector('header .col-2.col-text h1').innerHTML;

    if (!document.getElementById("cb_h1_highlight").checked) {
        elH1Content = elH1Content.replace(/<\/?span[^>]*>/g,"");
        iframe.contentWindow.document.querySelector('header .col-2.col-text h1').innerHTML = elH1Content;
        document.getElementById("btn_h1_highlight").disabled = true;
        document.getElementById("btn_h1_highlight").checked = false;
        const arg1 = sectionClassName+ " h1 span.highlight {";
        removeCSSTagPairs(arg1);
    }
    else {
        const i = elH1Content.indexOf(" ",1);
        const j = elH1Content.lastIndexOf(" ");
        elH1Content = elH1Content.replace(elH1Content.substring(i+1,j), "<span class=\"highlight\">"+elH1Content.substring(i+1,j)+"</span>");
        iframe.contentWindow.document.querySelector('header .col-2.col-text h1').innerHTML = elH1Content;
        document.getElementById("btn_h1_highlight").disabled = false;
        document.getElementById("btn_h1_highlight").checked = false;
        document.getElementById("btn_h1_border").disabled = false;
        document.getElementById("btn_h1_border").checked = false;
    }
}

/*
//////////////// MAIN HEADING H1 BOTTOM BORDER ///////////////
*/

document.querySelector("#cb_h1_border").addEventListener("change", doH2Border);

function doH2Border() {

    const objH2 = iframe.contentWindow.document.querySelector('header .col-2.col-text h1');

    if (!document.getElementById("cb_h1_border").checked) {
        objH2.classList.remove("heading-underline");
        document.getElementById("btn_h1_border").disabled = true;
        document.getElementById("btn_h1_border").checked = false;
        const arg1 = sectionClassName+ " .col-2.col-text h1.heading-underline::after { background-color: {";
        removeCSSTagPairs(arg1);
    }
    else {
        objH2.classList.add("heading-underline");
        document.getElementById("btn_h1_border").disabled = false;
        document.getElementById("btn_h1_border").checked = true;
    }
}

/*
//////////////// H2 SUB-HEADINGS ////////////////////
*/

document.querySelector("#cb_h2").addEventListener("change", doH2);

function doH2() {

    if (!document.getElementById("cb_h2").checked) {
        removeH2();
    }

    else {
        iframe.contentWindow.document.querySelector("header .col-2.col-text h1").insertAdjacentHTML("afterend", content_h2_col_2_header);
        document.getElementById("btn_h2_text").disabled=false;
    }
}

function removeH2() {
    const el_h2 = iframe.contentWindow.document.querySelector("header.cols-2-half .col-2.col-text h2");
    el_h2.remove();
    document.getElementById("btn_h2_text").disabled=true;
    const arg1 = sectionClassName+ " .col-2.col-text h2 { color:";
    removeCSSTagPairs(arg1);
}

/*
//////////////// COLUMN PARAGRAPHS OR LISTS ////////////////////
*/

document.querySelector("#cb_list").addEventListener("change", doList);

function doList() {
    if (!document.getElementById("cb_list").checked) {
        removeList();
        document.getElementById("btn_list_text").disabled = true;
        document.getElementById("list-options").style.display = "none";
        document.getElementById("dd_list_marker").value = "0";
    }

    else {
        removeList();
        document.getElementById("btn_list_text").disabled = false;
        document.getElementById("list-options").style.display = "flex";

        if (iframe.contentWindow.document.querySelector("header .col-2.col-text h2")) {
            iframe.contentWindow.document.querySelector("header .col-2.col-text h2").insertAdjacentHTML("afterend", content_lists_col_2_header);

        }

        else {
            iframe.contentWindow.document.querySelector("header .col-2.col-text h1").insertAdjacentHTML("afterend", content_lists_col_2_header);
        }

        document.getElementById("dd_list_marker").value = "0";
    }
}

function removeList() {
    if (iframe.contentWindow.document.querySelector("header .col-2.col-text ul")) {
        const elUL = iframe.contentWindow.document.querySelector("header .col-2.col-text ul");
        elUL.remove();
        const arg1 = sectionClassName+ " .col-2.col-text ul li { color:";
        removeCSSTagPairs(arg1);
    }
}

/*
//////////////// SECTION LIST MARKER: REGULAR OR FONT AWESOME ////////////////////
*/

document.querySelector("#dd_list_marker").addEventListener("change", doListMarker);

function doListMarker() {

    let opt = document.querySelector("#dd_list_marker").value;

    // Regular
    if (opt==="0") {
        // Test for Font Awesome
        if (iframe.contentWindow.document.querySelector("header .col-2.col-text ul.fa-ul") ) {
            // Loop through spans in list items and remove italic nodes
            let objListSpans = iframe.contentWindow.document.querySelectorAll("header .col-2.col-text ul li span");

            for (let i = 0; i < objListSpans.length; i++) {
                objListSpans[i].firstChild.remove();
            }
            // Loop through list items and remove spans
            let objListItems = iframe.contentWindow.document.querySelectorAll("header .col-2.col-text ul li");

            for (let i = 0; i < objListItems.length; i++) {
                objListItems[i].firstChild.remove();
            }

            let objAllCols = iframe.contentWindow.document.querySelector("header .col-2.col-text");

            objAllCols.innerHTML = objAllCols.innerHTML.replaceAll("<ul class=\"fa-ul\">", "<ul>");
        }
        document.getElementById("dd_list_marker").value = "0";
        document.getElementById("fa-icons").style.display ="none";
        // document.getElementById("fa-circle-check").checked=true;
    }

    // Font Awesome
    else if (opt==="1") {
        if (iframe.contentWindow.document.querySelector("header .col-2.col-text ul:not(.fa-ul)") ) {
            // console.log("Got this far in Font Awesome");
            let objSection = iframe.contentWindow.document.querySelector("header .col-2.col-text");
            objSection.innerHTML = objSection.innerHTML.replaceAll("<ul>", "<ul class=\"fa-ul\">");
            objSection.innerHTML = objSection.innerHTML.replaceAll("<li>", "<li><span class=\"fa-li\"><i class=\"fa-solid fa-circle-check\"><\/i><\/span>");
        }
        document.getElementById("fa-icons").style.display ="flex";
        document.getElementById("rb-fa-circle-check").checked=true;
    }
}

/*
//////////////// SECTION LIST MARKER: FONT AWESOME CHARACTER ////////////////////
*/

document.querySelector("#form_switch_fa_icons").addEventListener("change", chooseListMarker);

function chooseListMarker() {

    console.log("Got to here");
    const rbs = document.querySelectorAll("input[name='switch_fa_icons']");
    let objIcons = iframe.contentWindow.document.querySelectorAll("header ul li span");

    let node;
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    console.log("selectedValue: " +selectedValue);

    for (let i = 0; i < objIcons.length; i++) {
        objIcons[i].firstChild.remove();
        node = document.createElement("i");
        node.classList.add("fa-solid");
        node.classList.add(selectedValue);
        objIcons[i].appendChild(node);
    }
}

