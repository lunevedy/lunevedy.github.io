import { content_header_label_text_col_1, content_header_h2_text } from '../js/arr-content.js';

/*
//////////////// MENUS AND DROPDOWNS ///////////////
*/

document.getElementById("btn-nav-add-remove").addEventListener("click", showHideMenu);

function showHideMenu() {
    if (document.getElementById("dd_actions").style.display == "none") {
        document.getElementById("dd_actions").style.display= "block";
        document.getElementById("work-with").style.display= "block";
        document.getElementById("btn-nav-add-remove").innerText = "Remove menu";

        const el_header = iframe.contentWindow.document.querySelector('header');
        const el_nav = document.createElement('nav');
        el_nav.setAttribute("class", "theme-light");
        el_nav.innerHTML = "<div class=\"container-menu\">\n<a href=\"#\" class=\"brand\">\n\t<img src=\"../../ui/assets/img/website-logo-sample.png\" alt=\"Sample website logo\"></a>\n\n<div class=\"container-menu-links\">\n\n<div class=\"nav-toggle\" id =\"nav-toggle-btn\"><div class=\"bar-1\"></div><div class=\"bar-2\"></div><div class=\"bar-3\"></div></div>\n\n<ul class=\"links-wrapper\">\n<li><a href=\"#\">Home</a></li>\n<li><a href=\"#\">About</a></li>\n<li><a href=\"#\">Products</a></li>\n<li><a href=\"#\">Services</a></li>\n<li><a class=\"btn btn-solid\" id=\"btn-cta\" href=\"#\"><span>Sign in</span> <i class=\"fa-solid fa-chevron-right\"></i></a></li>\n</ul>\n</div>\n</div>";
        el_header.parentNode.insertBefore(el_nav, el_header);
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

document.querySelector("#dd_desktop_min_height").addEventListener("change", doDesktopMinHeight);

function doDesktopMinHeight() {
    let opt = document.querySelector("#dd_desktop_min_height").value;
    if (opt==="0") {
        removeDesktopMinHeight();
    }
    else if (opt==="1") {
        removeDesktopMinHeight();
        iframe.contentWindow.document.querySelector("header").classList.add("desktop-min-height-60vh");
    }
    else if (opt==="2") {
        removeDesktopMinHeight();
        iframe.contentWindow.document.querySelector("header").classList.add("desktop-min-height-70vh");
    }
    else if (opt==="3") {
        removeDesktopMinHeight();
        iframe.contentWindow.document.querySelector("header").classList.add("desktop-min-height-80vh");
    }
    else if (opt==="4") {
        removeDesktopMinHeight();
        iframe.contentWindow.document.querySelector("header").classList.add("desktop-min-height-90vh");
    }
    else if (opt==="5") {
        removeDesktopMinHeight();
        iframe.contentWindow.document.querySelector("header").classList.add("desktop-min-height-100vh");
    }
}

function removeDesktopMinHeight() {
    iframe.contentWindow.document.querySelector("header").classList.remove("desktop-min-height-60vh");
    iframe.contentWindow.document.querySelector("header").classList.remove("desktop-min-height-70vh");
    iframe.contentWindow.document.querySelector("header").classList.remove("desktop-min-height-80vh");
    iframe.contentWindow.document.querySelector("header").classList.remove("desktop-min-height-90vh");
    iframe.contentWindow.document.querySelector("header").classList.remove("desktop-min-height-100vh");
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

/*
//////////////// CONTAINER TEXT START POSITION DESKTOP ///////////////
*/

document.querySelector("#dd_text_start").addEventListener("change", doTextStartDesktop);


function doTextStartDesktop() {

    let opt = document.querySelector("#dd_container_text_width").value;
    deleteWidthTextDesktop();

    if (opt==="0") {
        iframe.contentWindow.document.querySelector("header .container-text").classList.remove("text-start-50");
        if (iframe.contentWindow.document.querySelector("header .container-btn")) {
            iframe.contentWindow.document.querySelector("header .container-btn").classList.remove("text-start-50");
        }
    }
    else if (opt==="1") {
        iframe.contentWindow.document.querySelector("header .container-text").classList.add("text-start-50");
        if (iframe.contentWindow.document.querySelector("header .container-btn")) {
            iframe.contentWindow.document.querySelector("header .container-btn").classList.add("text-start-50");
        }
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
        // document.getElementById("btn_h1_1_border").disabled = true;
        // document.getElementById("btn_h1_1_border").checked = false;
    }
    else {
        const i = elH2Content.indexOf(" ",1);
        const j = elH2Content.lastIndexOf(" ");
        elH2Content = elH2Content.replace(elH2Content.substring(i+1,j), "<span class=\"highlight\">"+elH2Content.substring(i+1,j)+"</span>");
        iframe.contentWindow.document.querySelector('.container-text > h1').innerHTML = elH2Content;
        document.getElementById("btn_h1_highlight").disabled = false;
        document.getElementById("btn_h1_highlight").checked = false;
        // document.getElementById("btn_h1_border").disabled = false;
        // document.getElementById("btn_h1_border").checked = false;
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
        if (iframe.contentWindow.document.querySelector("header > .container-btn")) {
            iframe.contentWindow.document.querySelector("header > .container-btn").classList.add("reveal-slide-up-header");
        }
    }

    else if (opt==="2") {
        removeTextAnimate();
        iframe.contentWindow.document.querySelector("header > .container-text").classList.add("reveal-slide-from-left-header");
        if (iframe.contentWindow.document.querySelector("header > .container-btn")) {
            iframe.contentWindow.document.querySelector("header > .container-btn").classList.add("reveal-slide-from-left-header");
        }
    }

    else if (opt==="3") {
        removeTextAnimate();
        iframe.contentWindow.document.querySelector("header > .container-text").classList.add("reveal-slide-from-right-header");
        if (iframe.contentWindow.document.querySelector("header > .container-btn")) {
            iframe.contentWindow.document.querySelector("header > .container-btn").classList.add("reveal-slide-from-right-header");
        }
    }

    else if (opt==="4") {
        removeTextAnimate();
        iframe.contentWindow.document.querySelector("header > .container-text").classList.add("reveal-fade-in-header");
        if (iframe.contentWindow.document.querySelector("header > .container-btn")) {
            iframe.contentWindow.document.querySelector("header > .container-btn").classList.add("reveal-fade-in-header");
        }
    }

    else if (opt==="5") {
        removeTextAnimate();
        iframe.contentWindow.document.querySelector("header > .container-text").classList.add("reveal-scale-in-header");
        if (iframe.contentWindow.document.querySelector("header > .container-btn")) {
            iframe.contentWindow.document.querySelector("header > .container-btn").classList.add("reveal-scale-in-header");
        }
    }
}

function removeTextAnimate() {
    iframe.contentWindow.document.querySelector("header > .container-text").classList.remove("reveal-slide-up-header");

    iframe.contentWindow.document.querySelector("header > .container-text").classList.remove("reveal-slide-from-left-header");

    iframe.contentWindow.document.querySelector("header > .container-text").classList.remove("reveal-slide-from-right-header");

    iframe.contentWindow.document.querySelector("header > .container-text").classList.remove("reveal-fade-in-header");

    iframe.contentWindow.document.querySelector("header > .container-text").classList.remove("reveal-scale-in-header");

    if (iframe.contentWindow.document.querySelector("header > .container-btn")) {
        iframe.contentWindow.document.querySelector("header > .container-btn").classList.remove("reveal-slide-up-header");
        iframe.contentWindow.document.querySelector("header > .container-btn").classList.remove("reveal-slide-from-left-header");
        iframe.contentWindow.document.querySelector("header > .container-btn").classList.remove("reveal-slide-from-right-header");
        iframe.contentWindow.document.querySelector("header > .container-btn").classList.remove("reveal-fade-in-header");
        iframe.contentWindow.document.querySelector("header > .container-btn").classList.remove("reveal-scale-in-header");
    }
}