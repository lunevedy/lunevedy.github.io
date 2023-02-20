import {content_header_label_hero, content_h2_col_2_header, content_lists_col_2_header} from '../js/arr-content.js';

/*
//////////////// MENUS AND DROPDOWNS ///////////////
*/

document.getElementById("btn-nav-add-remove").addEventListener("click", showHideMenu);

function showHideMenu() {
    if (document.getElementById("dd_actions").style.display == "none") {
        document.getElementById("dd_actions").style.display= "block";
        document.getElementById("work-with").style.display= "block";
        document.getElementById("btn-nav-add-remove").innerText = "Remove menu";

        const el_body = iframe.contentWindow.document.querySelector('#HTML-Content');
        const el_header = iframe.contentWindow.document.querySelector('header');
        const el_nav = document.createElement('nav');
        el_nav.setAttribute("class", "theme-light");
        el_nav.innerHTML = "<div class=\"container-menu\">\n\t<a href=\"#\" class=\"brand\">\n\t\t<img src=\"../../ui/assets/img/website-logo-sample.png\" alt=\"Sample website logo\">\n\t</a>\n\n\t<div class=\"container-menu-links\">\n\n\t\t<div class=\"nav-toggle\" id =\"nav-toggle-btn\">\n\t\t\t<div class=\"bar-1\"></div>\n\t\t\t<div class=\"bar-2\"></div>\n\t\t\t<div class=\"bar-3\"></div>\n\t\t</div>\n\n\t\t<ul class=\"links-wrapper\">\n\t\t\t<li><a href=\"#\">Home</a></li>\n\t\t\t<li><a href=\"#\">About</a></li>\n\t\t\t<li><a href=\"#\">Products</a></li>\n\t\t\t<li><a href=\"#\">Services</a></li>\n\t\t\t<li><a class=\"btn btn-solid\" id=\"btn-cta\" href=\"#\"><span>Sign in</span> <i class=\"fa-solid fa-chevron-right\"></i></a></li>\n\t\t</ul>\n\t</div></div>";
        el_body.prepend(el_nav);
    }
    else {
        document.getElementById("dd_actions").style.display= "none";
        document.getElementById("work-with").style.display= "none";
        document.getElementById("btn-nav-add-remove").innerText = "Add menu";
        const el_nav= iframe.contentWindow.document.querySelector('nav');
        el_nav.remove();
        iframe.contentWindow.document.querySelector('.header-after-menu-sticky').classList.remove("header-after-menu-sticky");
    }
}


if (document.querySelector("#dd_actions")) {
    document.querySelector("#dd_actions").addEventListener("change", displayActions);
}

function displayActions() {
    const opt = document.querySelector("#dd_actions").value;
    document.querySelector("#content-1").classList.add("dropdown-hidden");
    document.querySelector("#content-2").classList.add("dropdown-hidden");
    document.querySelector("#content-3").classList.add("dropdown-hidden");
    document.querySelector("#content-4").classList.add("dropdown-hidden");
    document.querySelector("#content-5").classList.add("dropdown-hidden");
    document.querySelector("#content-6").classList.add("dropdown-hidden");
    document.querySelector("#content-7").classList.add("dropdown-hidden");
    const modal = document.getElementById("myModal");

    // modal.style.display = "none";
    hideSidebar();

    // show Hero Block options
    if (opt==="0") {
        document.getElementById("menu-1").style.display="inline-block";
        document.getElementById("menu-2").style.display="inline-block";
        document.getElementById("menu-3").style.display="inline-block";
        document.getElementById("menu-4").style.display="inline-block";
        document.getElementById("menu-5").style.display="none";
        document.getElementById("menu-6").style.display="none";
        document.getElementById("menu-7").style.display="none";
    }

    // show Menu options
    else if (opt==="1") {
        document.getElementById("menu-1").style.display="none";
        document.getElementById("menu-2").style.display="none";
        document.getElementById("menu-3").style.display="none";
        document.getElementById("menu-4").style.display="none";
        document.getElementById("menu-5").style.display="inline-block";
        document.getElementById("menu-6").style.display="inline-block";
        document.getElementById("menu-7").style.display="inline-block";
    }
}


/*
//////////////// MENU: BOTTOM BORDER DROP SHADOW ////////////////////
*/

if ( document.getElementById("cb_bottom_shadow")) {
    document.getElementById("cb_bottom_shadow").addEventListener("change", doBottomShadow);
}

function doBottomShadow() {
    if (!document.getElementById("cb_bottom_shadow").checked) {
        removeBottomShadow();
    }

    // Always
    else {
        removeBottomShadow();
        if (document.querySelector("nav")) {
            const el_menu = iframe.contentWindow.document.querySelector("nav");
            el_menu.classList.add("menu-drop-shadow");
        }
    }

    // Only on-scroll
    // else if (opt==="2") {
    //     console.log("On scroll only");
    //     removeBottomShadow();
    //     if (document.querySelector(".container-menu")) {
    //         const el_menu = document.querySelector(".container-menu");
    //         el_menu.classList.add("menu-drop-shadow");
    //     }
    // }
}

function removeBottomShadow() {
    if (document.querySelector("nav")) {
        const el_btn_primary = iframe.contentWindow.document.querySelector("nav");
        el_btn_primary.classList.remove("menu-drop-shadow");
    }
}


/*
//////////////// MENU: BOLD LINKS ////////////////////
*/

if ( document.getElementById("cb_bold_links")) {
    document.getElementById("cb_bold_links").addEventListener("change", doBoldLinks);
}

function doBoldLinks() {
    const el_menu_links = iframe.contentWindow.document.querySelector("nav ul.links-wrapper");
    if (!document.getElementById("cb_bold_links").checked) {
        el_menu_links.classList.remove("links-bold");
    }
    else {
        el_menu_links.classList.add("links-bold");
    }
}

/*
//////////////// MENU CTA BUTTON: TYPE ////////////////////
*/

if (document.getElementById("dd_cta_button_type")) {
    document.getElementById("dd_cta_button_type").addEventListener("change", doButtonsStyle);
}

function doButtonsStyle() {
    const opt = document.getElementById("dd_cta_button_type").value;
    const el_btn = iframe.contentWindow.document.getElementById("btn-cta")

    // Solid
    if (opt==="0") {
        el_btn.classList.remove("btn-outline");
        el_btn.classList.add("btn-solid");
        document.getElementById("btn_a_cta_bg_passive").disabled=false;
    }

    // Outline
    else if (opt==="1") {
        el_btn.classList.remove("btn-solid");
        el_btn.classList.add("btn-outline");
        document.getElementById("btn_a_cta_bg_passive").disabled=true;
    }
}

/*
//////////////// MENU CTA BUTTON: ICON POSITION ////////////////////
*/

if (document.getElementById("form_nav_btns_icons_position")) {
    document.getElementById("form_nav_btns_icons_position").addEventListener("change", swapButtonIconsCTA);
}

function swapButtonIconsCTA() {

    const rbs = document.querySelectorAll("input[name='btns_nav_icons_position']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    // Set up button icon and text content
    const el_btn = iframe.contentWindow.document.querySelector("a#btn-cta");
    const icon_left  ="<i class=\"fa-solid fa-user\"><\/i> <span>Sign in</span>";
    const icon_right ="<span>Sign in</span> <i class=\"fa-solid fa-chevron-right\"><\/i>";
    const icon_none = "<span>Sign in</span>";

    if (selectedValue==="left") {
        // Icon at left. Text at right.
        el_btn.innerHTML = icon_left;
    }

    else if (selectedValue==="right") {
        // Text left. Icon at right.
        el_btn.innerHTML = icon_right;
    }

    else if (selectedValue==="none") {
        // Only text, No icons.
        el_btn.innerHTML = icon_none;
    }
}

/*
//////////////// MENU CTA BUTTON: SHAPE ////////////////////
*/

if (document.getElementById("dd_cta_button_shape")) {
    document.getElementById("dd_cta_button_shape").addEventListener("change", doNavButtonShape);
}

function doNavButtonShape() {
    let opt = document.getElementById("dd_cta_button_shape").value;
    const el_btn = iframe.contentWindow.document.querySelector("a#btn-cta");
    // corner - remove

    if (opt==="0") {
        el_btn.classList.remove("btn-pill");
        el_btn.classList.remove("btn-soft");
    }

    // soft
    else if (opt==="1") {
        el_btn.classList.remove("btn-pill");
        el_btn.classList.add("btn-soft");
    }

    // pill
    else if (opt==="2") {
        el_btn.classList.remove("btn-soft");
        el_btn.classList.add("btn-pill");
    }
}


/*
//////////////// BUTTONS ONE: SHADOW ///////////////
*/

if (document.getElementById("cb_cta_button_shadow")) {
    document.getElementById("cb_cta_button_shadow").addEventListener("change", doCTABtnShadow);
}

function doCTABtnShadow() {
    const el_btn = iframe.contentWindow.document.querySelector('a#btn-cta');

    if (!document.getElementById("cb_cta_button_shadow").checked) {
        el_btn.classList.remove("btn-shadow");
    }
    else {
        el_btn.classList.add("btn-shadow");
    }
}

/*
//////////////// MENU: STICKY ////////////////////
*/

if (document.getElementById("cb_sticky")) {
    document.getElementById("cb_sticky").addEventListener("change", doStickyMenu);
}

function doStickyMenu() {
    if (!document.getElementById("cb_sticky").checked) {
        removeStickyMenu();
        console.log("No sticky")

    }

    else {
        console.log("Yes sticky")

        removeStickyMenu();
        // enableCSS();
        enableSticky();
        const el_menu = iframe.contentWindow.document.querySelector("nav");
        el_menu.classList.add("menu-sticky");
        const el_header = iframe.contentWindow.document.querySelector("header");
        el_header.classList.add("header-after-menu-sticky");
    }
}

function removeStickyMenu() {
    disableSticky();
    const el_menu = iframe.contentWindow.document.querySelector("nav");
    el_menu.classList.remove("menu-sticky");
    const el_header = iframe.contentWindow.document.querySelector("header");
    el_header.classList.remove("header-after-menu-sticky");
    // const el_menu = document.querySelector(".hero-block");
    // el_menu.classList.remove("header-under-menu-sticky");
}

function enableSticky() {
    document.getElementById("btn_bg_onscroll_menu").disabled=false;
    document.getElementById("btn_link_onscroll_passive").disabled=false;
    document.getElementById("btn_link_onscroll_active").disabled=false;
    document.getElementById("btn_a_cta_onscroll_passive_text").disabled=false;
    document.getElementById("btn_a_cta_onscroll_active_text").disabled=false;
    document.getElementById("btn_a_cta_onscroll_passive_bg").disabled=false;
    document.getElementById("btn_a_cta_onscroll_active_bg").disabled=false;
    document.getElementById("btn_a_cta_onscroll_passive_border").disabled=false;
    document.getElementById("btn_a_cta_onscroll_active_border").disabled=false;
    document.getElementById("btn_hamburger_sticky_stroke").disabled=false;
    document.getElementById("btn_hamburger_sticky_fill").disabled=false;
}

function disableSticky() {
    document.getElementById("btn_bg_onscroll_menu").disabled=true;
    document.getElementById("btn_link_onscroll_passive").disabled=true;
    document.getElementById("btn_link_onscroll_active").disabled=true;
    document.getElementById("btn_a_cta_onscroll_passive_text").disabled=true;
    document.getElementById("btn_a_cta_onscroll_active_text").disabled=true;
    document.getElementById("btn_a_cta_onscroll_passive_bg").disabled=true;
    document.getElementById("btn_a_cta_onscroll_active_bg").disabled=true;
    document.getElementById("btn_a_cta_onscroll_passive_border").disabled=true;
    document.getElementById("btn_a_cta_onscroll_active_border").disabled=true;
    document.getElementById("btn_hamburger_sticky_stroke").disabled=true;
    document.getElementById("btn_hamburger_sticky_fill").disabled=true;
}

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
    removeTextAnimation();
    document.getElementById("dd_text_slide").value= "0";
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

if (document.querySelector("#dd_text_slide")) {
    document.querySelector("#dd_text_slide").addEventListener("change", doTextAnimation);
}

function doTextAnimation() {
    let opt = document.querySelector("#dd_text_slide").value;
    if (opt==="0") {
        removeTextAnimation();
    }

    else if (opt==="1") {
        removeTextAnimation();
        // Image at right
        if (!document.querySelector(".flex-row-reverse")) {
            console.log("image at right");
            iframe.contentWindow.document.querySelector("header .col-2.col-text").classList.add("slide-in-left-desktop");
            iframe.contentWindow.document.querySelector("header .col-2.col-visual").classList.add("slide-in-right-desktop");
        }

        // Image at left
        else {
            console.log("image at left");
            iframe.contentWindow.document.querySelector("header .col-2.col-text").classList.add("slide-in-right-desktop");
            iframe.contentWindow.document.querySelector("header .col-2.col-visual").classList.add("slide-in-left-desktop");
        }
    }
}

function removeTextAnimation() {
    iframe.contentWindow.document.querySelector(".col-2.col-text").classList.remove("slide-in-left-desktop");
    iframe.contentWindow.document.querySelector(".col-2.col-text").classList.remove("slide-in-right-desktop");
    iframe.contentWindow.document.querySelector(".col-2.col-visual").classList.remove("slide-in-right-desktop");
    iframe.contentWindow.document.querySelector(".col-2.col-visual").classList.remove("slide-in-left-desktop");
}