import { content_header_label_text_col_1, content_header_h2_text } from '../js/arr-content.js';

/*
//////////////// MENUS AND DROPDOWNS ///////////////
*/

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
//////////////// CONTAINER MIN HEIGHT ///////////////
*/

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
        iframe.contentWindow.document.querySelector(".container-text").classList.remove("w-50");
        if (iframe.contentWindow.document.querySelector(".container-btn")) {
            iframe.contentWindow.document.querySelector(".container-btn").classList.remove("w-50");
        }
    }
    else if (opt==="1") {
        iframe.contentWindow.document.querySelector(".container-text").classList.add("w-50");
        if (iframe.contentWindow.document.querySelector(".container-btn")) {
            iframe.contentWindow.document.querySelector(".container-btn").classList.add("w-50");
        }
    }
}

function deleteWidthTextDesktop() {
    iframe.contentWindow.document.querySelector(".container-text").classList.remove("w-50");
    if (iframe.contentWindow.document.querySelector(".container-btn")) {
        iframe.contentWindow.document.querySelector(".container-btn").classList.remove("w-50");
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
        iframe.contentWindow.document.querySelector("header").classList.remove("text-center-desktop");
    }
    else if (selectedValue==="center") {
        iframe.contentWindow.document.querySelector("header").classList.add("text-center-desktop");
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
        iframe.contentWindow.document.querySelector('.container-text').prepend(newUpperLabelDiv);
        iframe.contentWindow.document.querySelector('.badge').innerText = content_header_label_text_col_1;
        iframe.contentWindow.document.querySelector('.container-text').innerHTML = iframe.contentWindow.document.querySelector('.container-text').innerHTML.replace("<div class=\"badge\">", "\n\t\t\t<div class=\"badge\">");
        document.getElementById("show-badge").style.display="flex";
    }
}

document.querySelector("#form_badge_shape").addEventListener("change", doBadgeShape);

function doBadgeShape() {
    const objTextBox = iframe.contentWindow.document.querySelector(".badge");
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

    let elH1Content = iframe.contentWindow.document.querySelector('.container-text h1').innerHTML;

    if (!document.getElementById("cb_h1_highlight").checked) {
        elH1Content = elH1Content.replace(/<\/?span[^>]*>/g,"");
        iframe.contentWindow.document.querySelector('.container-text h1').innerHTML = elH1Content;
        document.getElementById("btn_h1_highlight").disabled = true;
        document.getElementById("btn_h1_highlight").checked = false;
    }
    else {
        const i = elH1Content.indexOf(" ",1);
        const j = elH1Content.lastIndexOf(" ");
        elH1Content = elH1Content.replace(elH1Content.substring(i+1,j), "<span class=\"highlight\">"+elH1Content.substring(i+1,j)+"</span>");
        iframe.contentWindow.document.querySelector('.container-text h1').innerHTML = elH1Content;
        document.getElementById("btn_h1_highlight").disabled = false;
        document.getElementById("btn_h1_highlight").checked = false;
    }
}

/*
//////////////// MAIN HEADING H1 BOTTOM BORDER ///////////////
*/

document.querySelector("#cb_h1_border").addEventListener("change", doH1Border);

function doH1Border() {

    const objH1 = iframe.contentWindow.document.querySelector('.container-text h1');

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
//////////////// SECTION TEXT: ANIMATION ///////////////
*/

// document.querySelector("#dd_text_slide").addEventListener("change", doTextAnimation);

function doTextAnimation() {
    let opt = document.querySelector("#dd_text_slide").value;
    if (opt==="0") {
        removeTextAnimation();
    }
    let animationType;

    if (opt==="1") {
        removeTextAnimation();
        animationType = "slide-in-top";
        applyAnimation(animationType);
    }

    if (opt==="2") {
        removeTextAnimation();
        animationType = "slide-in-left";
        applyAnimation(animationType);
    }

    if (opt==="3") {
        removeTextAnimation();
        animationType = "slide-in-right";
        applyAnimation(animationType);
    }

    if (opt==="4") {
        removeTextAnimation();
        animationType = "slide-in-bottom";
        applyAnimation(animationType);
    }

    if (opt==="5") {
        removeTextAnimation();
        animationType = "fade-in";
        applyAnimation(animationType);
    }
}

function applyAnimation(animationType) {
    document.querySelector("label[for='dd_text_slide']").style.color = "#fff";
    if (iframe.contentWindow.document.querySelector(".badge")) {
        iframe.contentWindow.document.querySelector(".badge").classList.add(animationType);
    }

    iframe.contentWindow.document.querySelector(".container-text h2").classList.add(animationType);


    if (iframe.contentWindow.document.querySelector("header figure")) {
        iframe.contentWindow.document.querySelector("header figure").classList.add(animationType);
    }

    if (iframe.contentWindow.document.querySelector(".container-btn")) {
        iframe.contentWindow.document.querySelector(".container-btn").classList.add(animationType);
    }
}

function removeTextAnimation() {
    document.querySelector("label[for='dd_text_slide']").style.color = "var(--gray-500)";
    // Has .container-upper-label
    if (iframe.contentWindow.document.querySelector(".badge")) {
        iframe.contentWindow.document.querySelector(".badge").removeAttribute("class");
    }

    iframe.contentWindow.document.querySelector("header h2").removeAttribute("class");

    // Has figure
    if (iframe.contentWindow.document.querySelector("header figure")) {
        iframe.contentWindow.document.querySelector("header figure").removeAttribute("class");
    }
    // Has .container-btn
    if (iframe.contentWindow.document.querySelector(".container-btn")) {
        iframe.contentWindow.document.querySelector(".container-btn").classList.remove("slide-in-top");
        iframe.contentWindow.document.querySelector(".container-btn").classList.remove("slide-in-bottom");
        iframe.contentWindow.document.querySelector(".container-btn").classList.remove("slide-in-left");
        iframe.contentWindow.document.querySelector(".container-btn").classList.remove("slide-in-right");
        iframe.contentWindow.document.querySelector(".container-btn").classList.remove("fade-in");
    }
}

