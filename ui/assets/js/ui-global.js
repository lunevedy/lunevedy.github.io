// Number of dropdown menus on Lunevery navbar
let uiMenusLength = document.querySelectorAll("#ui-menus li").length;

let btn_id; // item to be coloured
let newStyle; // full selector and style rule
let sub_string; // style rule excerpt for arrCSS
let color_code;
const arrCSS = []; // array for style rules to copy

/* ======= Defaults for themes ======= */
/* nav theme */
let navTheme = ".theme-light";
sessionStorage.setItem("navTheme", navTheme);

/* header theme */
let headerTheme =".theme-light";
sessionStorage.setItem("headerTheme", headerTheme);

/* section theme */
let sectionTheme = '.theme-light';
sessionStorage.setItem("sectionTheme", sectionTheme);
/* section theme */
let footerTheme = '.theme-dark';
sessionStorage.setItem("footerTheme", sectionTheme);

/* section class */
let sectionClassName = '.section-selector-1';

/*
//////////////// MENUS AND DROPDOWNS ///////////////
*/

// Hide all menus - except currently selected one.
let divs = document.querySelectorAll('.dropbtn');
divs.forEach(el => el.addEventListener('click', event => {
    for (let i = 1; i <= uiMenusLength; i++) {
        document.getElementById("content-"+i).classList.add("dropdown-hidden");
    }
    // Get current menu id
    const strMenu = event.currentTarget.id.toString();
    const menuId = strMenu.charAt(strMenu.length-1);
    const elItem_show = document.getElementById("content-"+menuId);
    // Unhide current menu
    elItem_show.classList.remove("dropdown-hidden");
    hideSidebar();
}));

// Hide all menus and color picker when user clicks on frame container.
window.onload=function(){
    iframe.contentWindow.document.getElementById('HTML-Content').addEventListener('click',hideMenus,false);
}

function hideMenus() {
    for (let i = 1; i <= uiMenusLength; i++) {
        document.getElementById("content-"+i).classList.add("dropdown-hidden");
    }
    hideSidebar();
    document.getElementById("ui-admin-select").style.display ="none";
    document.getElementById("btn_gears").classList.remove('btn-lower-left-active');
}

// Hide menus when users presses Esc key.
document.onkeydown = function(e) {
    e = e || window.e;
    var isEscape = false;
    if ("key" in e) {
        isEscape = (e.key === "Escape" || e.key === "Esc");
    } else {
        isEscape = (e.keyCode === 27);
    }
    if (isEscape) {
        hideMenus();
    }
}

// Hide dialog box when user clicks X icon
for (let i = 1; i <= uiMenusLength; i++) {
    document.querySelector(`#content-${[i]} .dialog-box-header span.close-x`).addEventListener("click", hideDialogBox);
}

function hideDialogBox() {
    for (let i = 1; i <= uiMenusLength; i++) {
        document.querySelector(`#content-${[i]}`).classList.add("dropdown-hidden");
    }
    hideSidebar();
}

/* Show/hide color picker */
function showSidebar() {
    document.getElementById("myModal").classList.add("display-sidebar");
    console.log("showSidebar");
    document.getElementById("myModal").classList.remove("hide-sidebar");
}

function hideSidebar() {
    document.getElementById("myModal").classList.add("hide-sidebar");
    document.getElementById("myModal").classList.remove("show-sidebar");
    document.getElementById("myModal").scrollTo(0, 0); // scrolls to top of sidebar
}

/* ================ DIALOG BOXES =================== */

// Make dialog boxes element draggable:

for (let i = 1; i <= uiMenusLength; i++) {
    dragElement(document.getElementById("content-"+[i]));
}

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    }
    else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        // e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;

        const elSliderColumn = document.getElementById("slider-gap-column");
        const elSliderRow = document.getElementById("slider-gap-row");
        const elOverlaySlider = document.getElementById("slider-thumb");

        if((e.target == elSliderColumn) || (e.target == elSliderRow) || (e.target == elOverlaySlider) ) {
            // Do nothing
            elmnt.draggable = false;
        }
        else {
        // e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

/*
//////////////// COLOR PICKER ////////////////////
*/

// Get the modal
const modal = document.getElementById("myModal");
const span = document.querySelector('#myModal .close-modal')
span.onclick = function() {
    hideSidebar();
}

// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        hideSidebar();
    }
}

// On click style (color) button
let all_btns = document.querySelectorAll('.btn_style');
all_btns.forEach(el => el.addEventListener('click', event => {
    event.preventDefault();
    // get button id
    btn_id = event.target.id.toString();
    // console.log("Button ID: "+btn_id);
    displayModal(event);
}));

function displayModal(event) {
    if ((event.target.id === "btn_input_bg_passive") || (event.target.id === "btn_input_bg_active")) {
        document.getElementById("color-transparent").style.display="inline-block";
    }
    else {
        document.getElementById("color-transparent").style.display="none";
    }
    showSidebar();
    event.preventDefault();
}

/*
//////////////// NAVBAR MENU: THEME  ///////////////
*/

if (document.getElementById("form_switch_nav_theme")) {
    document.getElementById("form_switch_nav_theme").addEventListener("change", doNavTheme);
}

function doNavTheme() {
    const rbs = document.querySelectorAll("input[name='switch_nav_light_dark']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    if (selectedValue==="light") {
        iframe.contentWindow.document.querySelector("nav").classList.remove("theme-dark");
        iframe.contentWindow.document.querySelector("nav").classList.add("theme-light");
        sessionStorage.setItem("navTheme", ".theme-light");
        navTheme = ".theme-light";
        // remove all nav.theme-dark classes
    }

    else if (selectedValue==="dark") {
        iframe.contentWindow.document.querySelector("nav").classList.remove("theme-light");
        iframe.contentWindow.document.querySelector("nav").classList.add("theme-dark");
        sessionStorage.setItem("navTheme", ".theme-dark");
        navTheme = ".theme-dark";
        // remove all nav.theme-light classes
    }
    // clearCSSSectionTags();
}


/*
//////////////// HEADER: THEME  ///////////////
*/

if (document.getElementById("form_switch_header_theme")) {
    document.getElementById("form_switch_header_theme").addEventListener("change", doHeaderTheme);
}

function doHeaderTheme() {
    const rbs = document.querySelectorAll("input[name='switch_header_light_dark']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    if (selectedValue==="light") {
        iframe.contentWindow.document.querySelector("header").classList.remove("theme-dark");
        iframe.contentWindow.document.querySelector("header").classList.add("theme-light");
        sessionStorage.setItem("headerTheme", ".theme-light");
        headerTheme = '.theme-light';     
        // remove all header.theme-dark classes
        const arg1 = "header.theme-dark"; 
        removeCSSHeaderTagPairs(arg1);
   }

    else if (selectedValue==="dark") {
        iframe.contentWindow.document.querySelector("header").classList.remove("theme-light");
        iframe.contentWindow.document.querySelector("header").classList.add("theme-dark");
        sessionStorage.setItem("headerTheme", ".theme-dark");
        headerTheme = '.theme-dark';
        // remove all header.theme-light classes
        const arg1 = "header.theme-light";
        removeCSSHeaderTagPairs(arg1);
    }
}

/*
//////////////// HEADER CLASSES: REMOVE  ///////////////
*/

function removeHeaderClasses(headerType) {
    console.log("Removing header classes: "+headerType);
    // let objStyles = iframe.contentWindow.document.getElementsByTagName('style');
    // console.log("Style rules in iframe <style> tag: "+objStyles.length);
    // console.log(objStyles[0].cssText);
}

/*
//////////////// SECTION: THEME  ///////////////
*/

if (document.getElementById("form_switch_section_theme")) {
    document.getElementById("form_switch_section_theme").addEventListener("change", doSectionTheme);
}

function doSectionTheme() {
    const rbs = document.querySelectorAll("input[name='switch_section_light_dark']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    if (selectedValue==="light") {
        iframe.contentWindow.document.querySelector("section").classList.remove("theme-dark");
        iframe.contentWindow.document.querySelector("section").classList.add("theme-light");
        sessionStorage.setItem("sectionTheme", ".theme-light");
        sectionTheme = '.theme-light';
    }

    else if (selectedValue==="dark") {
        iframe.contentWindow.document.querySelector("section").classList.remove("theme-light");
        iframe.contentWindow.document.querySelector("section").classList.add("theme-dark");
        sessionStorage.setItem("sectionTheme", ".theme-dark");
        sectionTheme = '.theme-dark';
    }
    clearCSSSectionTags();
}


/*
//////////////// SECTION: CLASS NAMES ///////////////
*/
if (document.getElementById("dd_class_name")) {
    document.getElementById("dd_class_name").addEventListener("change", doClassName);
}

function doClassName() {
    removeClassNames();
    let opt = document.querySelector("#dd_class_name").value;
    iframe.contentWindow.document.querySelector("section").classList.add("section-selector-"+opt);
    // Update global variable;
    sectionClassName = ".section-selector-"+opt;
}

function removeClassNames() {
    const el_section = iframe.contentWindow.document.querySelector("section");
    for (let i = 1; i <= 6; i++) {
        el_section.classList.remove("section-selector-"+[i]);
    }
}

/*
//////////////// FOOTER: THEME  ///////////////
*/

if (document.getElementById("form_switch_footer_theme")) {
    document.getElementById("form_switch_footer_theme").addEventListener("change", doFooterTheme);
}

function doFooterTheme() {
    const rbs = document.querySelectorAll("input[name='switch_footer_light_dark']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    if (selectedValue==="light") {
        iframe.contentWindow.document.querySelector("footer").classList.remove("theme-dark");
        iframe.contentWindow.document.querySelector("footer").classList.add("theme-light");
        sessionStorage.setItem("footerTheme", ".theme-light");
        footerTheme = '.theme-light';
    }

    else if (selectedValue==="dark") {
        iframe.contentWindow.document.querySelector("footer").classList.remove("theme-light");
        iframe.contentWindow.document.querySelector("footer").classList.add("theme-dark");
        sessionStorage.setItem("footerTheme", ".theme-dark");
        footerTheme = '.theme-dark';
    }
    clearCSSSectionTags();
}

/*
//////////////// ALIGN HEADER, SECTION, FOOTER ///////////////
*/

if (document.getElementById("form_align_desktop")) {
    document.getElementById("form_align_desktop").addEventListener("change", doAlignBlockDesktop);
}

function doAlignBlockDesktop() {
    const rbs = document.querySelectorAll("input[name='align_desktop']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    if (iframe.contentWindow.document.querySelector("header")) {
        if (selectedValue==="left") {
            iframe.contentWindow.document.querySelector("header").classList.remove("text-center-desktop");
        }
        else if (selectedValue==="center") {
            iframe.contentWindow.document.querySelector("header").classList.add("text-center-desktop");
        }
    }

    else if (iframe.contentWindow.document.querySelector("section")) {
        if (selectedValue==="left") {
            iframe.contentWindow.document.querySelector("section").classList.remove("text-center-desktop");
            document.getElementById("rb_btn_align_desktop_center").checked=false;
            document.getElementById("rb_btn_align_desktop_left").checked=true;
            document.getElementById("rb_btn_align_desktop_center").disabled=false;
            document.getElementById("rb_btn_align_desktop_left").disabled=false;
        }
        else if (selectedValue==="center") {
            iframe.contentWindow.document.querySelector("section").classList.add("text-center-desktop");
            document.getElementById("rb_btn_align_desktop_center").checked=true;
            document.getElementById("rb_btn_align_desktop_left").checked=false;
            document.getElementById("rb_btn_align_desktop_center").disabled=false;
            document.getElementById("rb_btn_align_desktop_left").disabled=false;
        }
    }

    else if (iframe.contentWindow.document.querySelector("footer")) {
        if (selectedValue==="left") {
            iframe.contentWindow.document.querySelector("footer").classList.remove("text-center-desktop");
            if (document.getElementById("rb_align_desktop_center")) {
                document.getElementById("rb_align_desktop_center").checked=false;
            }
            if (document.getElementById("rb_align_desktop_left")) {
                document.getElementById("rb_align_desktop_left").checked=true;
            }
        }
        else if (selectedValue==="center") {
            iframe.contentWindow.document.querySelector("footer").classList.add("text-center-desktop");
            if (document.getElementById("rb_align_desktop_center")) {
                document.getElementById("rb_align_desktop_center").checked=true;
            }
            if (document.getElementById("rb_align_desktop_left")) {
                document.getElementById("rb_align_desktop_left").checked=false;
            }
        }
    }
}

if (document.getElementById("form_align_mobile")) {
    document.getElementById("form_align_mobile").addEventListener("change", doAlignBlockMobile);
}

function doAlignBlockMobile() {

    const rbs = document.querySelectorAll("input[name='align_mobile']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    if (iframe.contentWindow.document.querySelector("header")) {
        if (selectedValue==="left") {
            iframe.contentWindow.document.querySelector("header").classList.remove("text-center-mobile");
        }
        else if (selectedValue==="center") {
            iframe.contentWindow.document.querySelector("header").classList.add("text-center-mobile");
        }
    }

    else if (iframe.contentWindow.document.querySelector("section")) {
        if (selectedValue==="left") {
            iframe.contentWindow.document.querySelector("section").classList.remove("text-center-mobile");
            document.getElementById("rb_btn_align_mobile_center").checked=false;
            document.getElementById("rb_btn_align_mobile_left").checked=true;
            document.getElementById("rb_btn_align_mobile_center").disabled=false;
            document.getElementById("rb_btn_align_mobile_left").disabled=false;
        }
        else if (selectedValue==="center") {
            iframe.contentWindow.document.querySelector("section").classList.add("text-center-mobile");
            document.getElementById("rb_btn_align_mobile_center").checked=true;
            document.getElementById("rb_btn_align_mobile_center").disabled=false;
            document.getElementById("rb_btn_align_mobile_left").checked=false;
            document.getElementById("rb_btn_align_mobile_left").disabled=false;
        }
    }

    else if (iframe.contentWindow.document.querySelector("footer")) {
        if (selectedValue==="left") {
            iframe.contentWindow.document.querySelector("footer").classList.remove("text-center-mobile");
            if (document.getElementById("rb_align_mobile_center")) {
                document.getElementById("rb_align_mobile_center").checked=false;
            }
            if (document.getElementById("rb_align_mobile_left")) {
                document.getElementById("rb_align_mobile_left").checked=true;
            }
        }
        else if (selectedValue==="center") {
            iframe.contentWindow.document.querySelector("footer").classList.add("text-center-mobile");
            if (document.getElementById("rb_align_mobile_center")) {
                document.getElementById("rb_align_mobile_center").checked=true;
            }
            if (document.getElementById("rb_align_mobile_left")) {
                document.getElementById("rb_align_mobile_left").checked=false;
            }
        }
    }    
}

/*
//////////////// SECTION WIDTH ///////////////
*/

if (document.getElementById("dd_section_width")) {
    document.getElementById("dd_section_width").addEventListener("change", doWidthSectionDesktop);
}

function doWidthSectionDesktop() {
    let opt = document.getElementById("dd_section_width").value;
    deleteWidthSectionDesktop();

    /* default max width is 1600px */
    if (opt==="0") {
        iframe.contentWindow.document.querySelector("section").classList.add("w-1600px");
    }

    else if (opt==="1") {
        iframe.contentWindow.document.querySelector("section").classList.add("w-820px");
    }

    else if (opt==="2") {
        iframe.contentWindow.document.querySelector("section").classList.add("w-1024px");
    }

    else if (opt==="3") {
        iframe.contentWindow.document.querySelector("section").classList.add("w-1140px");
    }

    else if (opt==="4") {
        iframe.contentWindow.document.querySelector("section").classList.add("w-1356px");
    }
}

function deleteWidthSectionDesktop() {
    iframe.contentWindow.document.querySelector("section").classList.remove("w-820px");
    iframe.contentWindow.document.querySelector("section").classList.remove("w-1024px");
    iframe.contentWindow.document.querySelector("section").classList.remove("w-1140px");
    iframe.contentWindow.document.querySelector("section").classList.remove("w-1356px");
    iframe.contentWindow.document.querySelector("section").classList.remove("w-1600px");    
}

/*
//////////////// HEADER ///////////////
*/

if (document.getElementById("dd_header_width")) {
    document.getElementById("dd_header_width").addEventListener("change", doWidthheaderDesktop);
}

function doWidthheaderDesktop() {

    let opt = document.getElementById("dd_header_width").value;
    deleteWidthheaderDesktop();

    if (opt==="0") {
        iframe.contentWindow.document.querySelector("header").classList.remove("w-1536px");
        iframe.contentWindow.document.querySelector("header").classList.remove("w-1320px");
        iframe.contentWindow.document.querySelector("header").classList.remove("w-1140px");
    }

    else if (opt==="1") {
        iframe.contentWindow.document.querySelector("header").classList.add("w-1536px");
    }
    else if (opt==="2") {
        iframe.contentWindow.document.querySelector("header").classList.add("w-1320px");
    }
    else if (opt==="3") {
        iframe.contentWindow.document.querySelector("header").classList.add("w-1140px");
    }
}

function deleteWidthheaderDesktop() {
    iframe.contentWindow.document.querySelector("header").classList.remove("w-1140px");
    iframe.contentWindow.document.querySelector("header").classList.remove("w-1320px");
    iframe.contentWindow.document.querySelector("header").classList.remove("w-1536px");
}

/*
//////////////// MANAGE CSS ///////////////
*/

function doUpdateArray(sub_string,newStyle) {
    // If the array contains the sub_string, replace the element with the newStyle
    if ( arrCSS.some(e => e.includes(sub_string)) ) {
        const arrPos =arrCSS.findIndex(e => e.includes(sub_string));
        arrCSS.splice(arrPos, 1);
        arrCSS.push(newStyle);
    }
    // Add sub_string to array
    else {
        arrCSS.push(newStyle);
    }
    updateCSSTagPair();
}

function updateCSSTagPair() {
    // Copy current array contents to a string
    let strCSS = arrCSS.toString();
    // Remove all unwanted characters
    strCSS = strCSS.replaceAll(",.theme", ".theme");
    strCSS = strCSS.replaceAll(",.section", ".section");
    strCSS = strCSS.replaceAll(",header", "header");
    strCSS = strCSS.replaceAll(",nav", "nav");
    strCSS = strCSS.replaceAll(",footer", "footer");
    strCSS = strCSS.replaceAll(",@media", "@media");
    // Remove all style rules from the iframe
    if (iframe.contentWindow.document.head.innerHTML.includes("<style>")) {
        let objStyles = iframe.contentWindow.document.getElementsByTagName('style');
        for(let i = 0 ; i < objStyles.length ; i++){
            objStyles[i].parentNode.removeChild(objStyles[i]);
        }
    }
    // Create new <style> block 
    styleTagPair = iframe.contentWindow.document.createElement("style");
    // Add new <style> block to iframe
    iframe.contentWindow.document.head.appendChild(styleTagPair);
    // Copy string to <style> block
    styleTagPair.append(strCSS);
    if (arrCSS.length > 0) {
        enableCSS();
    }
    else {
        disableCSS();
    }
}

// Remove all style rules
function clearCSSSectionTags() {
    if (iframe.contentWindow.document.head.innerHTML.includes("<style>")) {
        let objStyles = iframe.contentWindow.document.getElementsByTagName('style');
        for(let i = 0 ; i < objStyles.length ; i++){
            objStyles[i].parentNode.removeChild(objStyles[i]);
        }
    }
    disableCSS();
}

// Remove selected style rules only
function removeCSSTagPairs(...args) {

    console.log(`number of args: ${args.length}`);

    // remove from CSS array
    for (const arg of args) {
        console.log("An arg content: "+arg);
        const arrPos = arrCSS.findIndex(e => e.includes(arg));
        console.log("arrPos: "+arrPos);
        if (arrPos != "-1") {
            // remove from CSS array
            arrCSS.splice(arrPos, 1);
        }
    }

    // remove current <style> from head
    let strCSS = arrCSS.toString();
    strCSS = strCSS.replaceAll(",.theme", ".theme");
    strCSS = strCSS.replaceAll(",.section", ".section");
    strCSS = strCSS.replaceAll(",.header", ".header");
    strCSS = strCSS.replaceAll(",.nav", ".nav");
    var st = iframe.contentWindow.document.getElementsByTagName('style');
    for(let i = 0 ; i < st.length ; i++){
        st[i].parentNode.removeChild(st[i]);
    }
    // recreate new <style> in head
    styleTagPair = iframe.contentWindow.document.createElement("style");
    iframe.contentWindow.document.head.appendChild(styleTagPair);
    // Add CSS rules without deleted rules to <style> in head
    styleTagPair.append(strCSS);

    if (arrCSS.length > 0) {
        enableCSS();
    }
    else {
        disableCSS();
    }
}


// Remove selected style rules only
function removeCSSHeaderTagPairs(...args) {
    console.log(`number of args with header-theme: ${args.length}`);
    // remove from CSS array
    for (const arg of args) {
        console.log("An arg content: "+arg);
        const arrPos = arrCSS.findIndex(e => e.includes(arg));
        console.log("arrPos: "+arrPos);
        if (arrPos != "-1") {
            // remove from CSS array
            arrCSS.splice(arrPos, 1);
        }
    }

    // remove current <style> from head
    let strCSS = arrCSS.toString();
    strCSS = strCSS.replaceAll(",.header", ".header");
    var st = iframe.contentWindow.document.getElementsByTagName('style');
    for(let i = 0 ; i < st.length ; i++){
        st[i].parentNode.removeChild(st[i]);
    }
    // recreate new <style> in head
    styleTagPair = iframe.contentWindow.document.createElement("style");
    iframe.contentWindow.document.head.appendChild(styleTagPair);
    // Add CSS rules without deleted rules to <style> in head
    styleTagPair.append(strCSS);
    if (arrCSS.length > 0) {
        enableCSS();
    }
    else {
        disableCSS();
    }
}



/*
//////////////// COPY TO CLIPBOARD ///////////////
*/

// document.querySelector("#btn-copy").addEventListener("click", copyHTML);

function enableCSS() {
    document.getElementById("btn-copy-css").disabled=false;
}

function disableCSS() {
    document.getElementById("btn-copy-css").disabled=true;
}

// Copy HTML to clipboard
const btnHTML = document.getElementById("btn-copy");
const btnHTMLcontent = document.getElementById("btn-copy").innerHTML;
btnHTML.addEventListener("click", e => {
    e.stopPropagation();
    hideMenus();
    let strHTML = iframe.contentWindow.document.getElementById("HTML-Content").innerHTML;
    strHTML = strHTML.replaceAll("..\/..\/ui\/assets\/img\/", "https://lunevedy.com\/ui\/assets\/img\/");
    strHTML = strHTML.replaceAll("..\/..\/ui\/assets\/videos\/", "https://lunevedy.com\/ui\/assets\/videos\/");
    doCopyHTML(strHTML);
});

async function doCopyHTML(strHTML) {
    await navigator.clipboard.writeText(strHTML);
    btnHTML.style.borderColor = "#48bb78";
    btnHTML.style.backgroundColor = "#14f195";
    btnHTML.style.fontWeight = "normal";
    btnHTML.style.paddingTop = "6px";
    btnHTML.style.paddingBottom = "6px";

    btnHTML.innerHTML = "&#x2713; &nbsp;Copied";
    setTimeout( () => {
        btnHTML.style.backgroundColor = "";
        btnHTML.style.borderColor = "";
        btnHTML.style.paddingTop = "";
        btnHTML.style.paddingBottom = "";
        btnHTML.innerHTML = btnHTMLcontent;
        btnHTML.classList.add('copy-code');	
    }, 1500);
}

// Copy CSS to clipboard
const btnCSS = document.getElementById("btn-copy-css");
const btnCSScontent = document.getElementById("btn-copy-css").innerHTML;
btnCSS.addEventListener("click", e => {
    e.stopPropagation();
    hideMenus();
    let strCSS  = arrCSS.join(",");
    strCSS = strCSS.replaceAll(",.theme", ".theme");
    strCSS = strCSS.replaceAll(",.nav", "nav");
    strCSS = strCSS.replaceAll(",nav", "nav");
    strCSS = strCSS.replaceAll(".nav", "nav");
    strCSS = strCSS.replaceAll("nav-toggle", ".nav-toggle");
    strCSS = strCSS.replaceAll(",@media", "@media");
    strCSS = strCSS.replaceAll(",@media", "@media");
    strCSS = strCSS.replaceAll(",@media", "@media");   
    strCSS = strCSS.replaceAll(",.header", "header");
    strCSS = strCSS.replaceAll(",header", "header");
    strCSS = strCSS.replaceAll(" ,header", "header");
    strCSS = strCSS.replaceAll(",.section", ".section");
    strCSS = strCSS.replaceAll(",footer", "footer");
    strCSS = strCSS.replaceAll(",.footer", ".footer");
    doCopyCSS(strCSS);
});

async function doCopyCSS(strCSS) {
    await navigator.clipboard.writeText(strCSS);
    btnCSS.style.borderColor = "#48bb78";
    btnCSS.style.backgroundColor = "#14f195";
    btnCSS.style.fontWeight = "normal";
    btnCSS.style.paddingTop = "6px";
    btnCSS.style.paddingBottom = "6px";
    btnCSS.innerHTML = "&#x2713; &nbsp;Copied";
    setTimeout( () => {
        btnCSS.style.backgroundColor = "";
        btnCSS.style.borderColor = "";
        btnCSS.style.paddingTop = "";
        btnCSS.style.paddingBottom = "";
        btnCSS.innerHTML = btnCSScontent;
        btnCSS.classList.add('copy-code');	
    }, 1500);
}


/*
//////////////// UI THEME SELECTOR  ///////////////
*/

document.querySelector("#btn_gears").addEventListener("click", doUIThemeBtn);

function doUIThemeBtn() {
    const eleBtn = document.getElementById("btn_gears");

    if (eleBtn.classList.contains('btn-lower-left-active')) {
        eleBtn.classList.remove('btn-lower-left-active');
        document.getElementById("ui-admin-select").style.display ="none";
    }
    else {
        eleBtn.classList.add('btn-lower-left-active');
        document.getElementById("ui-admin-select").style.display ="block";
    }
}

document.querySelector("#dd_ui_theme").addEventListener("click", doUIThemeSelect);

function doUIThemeSelect() {
    deleteUITheme();

    let opt = document.querySelector("#dd_ui_theme").value;
    const elControl = document.getElementById("controls-top");
    const elLowerLeft = document.getElementById("lower-left");
    const elLowerRight = document.getElementById("copy-code-btns");

    if (opt==="1") {
        elControl.classList.add("theme-ui-dark-contrast");
        elLowerLeft.classList.add("theme-ui-dark-contrast");
        elLowerRight.classList.add("theme-ui-dark-contrast");
        sessionStorage.setItem('ui-theme', 'theme-ui-dark-contrast');
    }
    else if (opt==="2") {
        elControl.classList.add("theme-ui-dark-blue");
        elLowerLeft.classList.add("theme-ui-dark-blue");
        elLowerRight.classList.add("theme-ui-dark-blue");
        sessionStorage.setItem('ui-theme', 'theme-ui-dark-blue');
    }
    else if (opt==="3") {
        elControl.classList.add("theme-ui-dark-green");
        elLowerLeft.classList.add("theme-ui-dark-green");
        elLowerRight.classList.add("theme-ui-dark-green");
        sessionStorage.setItem('ui-theme', 'theme-ui-dark-green');
    }
    else if (opt==="4") {
        elControl.classList.add("theme-ui-dark-pink");
        elLowerLeft.classList.add("theme-ui-dark-pink");
        elLowerRight.classList.add("theme-ui-dark-pink");
        sessionStorage.setItem('ui-theme', 'theme-ui-dark-pink');
    }

    else if (opt==="5") {
        elControl.classList.add("theme-ui-light");
        elLowerLeft.classList.add("theme-ui-light");
        elLowerRight.classList.add("theme-ui-light");
        sessionStorage.setItem('ui-theme', 'theme-ui-light');
    }
    else if (opt==="6") {
        elControl.classList.add("theme-ui-tiffany");
        elLowerLeft.classList.add("theme-ui-tiffany");
        elLowerRight.classList.add("theme-ui-tiffany");
        sessionStorage.setItem('ui-theme', 'theme-ui-tiffany');
    }
    else if (opt==="7") {
        elControl.classList.add("theme-ui-pistachio");
        elLowerLeft.classList.add("theme-ui-pistachio");
        elLowerRight.classList.add("theme-ui-pistachio");
        sessionStorage.setItem('ui-theme', 'theme-ui-pistachio');
    }
    else if (opt==="8") {
        elControl.classList.add("theme-ui-girlboss");
        elLowerLeft.classList.add("theme-ui-girlboss");
        elLowerRight.classList.add("theme-ui-girlboss");
        sessionStorage.setItem('ui-theme', 'theme-ui-girlboss');
    }
}

function deleteUITheme() {
    const elControl = document.getElementById("controls-top");
    const elLowerLeft = document.getElementById("lower-left");
    const elLowerRight = document.getElementById("copy-code-btns");

    elControl.classList.remove("theme-ui-dark-contrast");
    elLowerLeft.classList.remove("theme-ui-dark-contrast");
    elLowerRight.classList.remove("theme-ui-dark-contrast");

    elControl.classList.remove("theme-ui-dark-blue");
    elLowerLeft.classList.remove("theme-ui-dark-blue");
    elLowerRight.classList.remove("theme-ui-dark-blue");

    elControl.classList.remove("theme-ui-dark-green");
    elLowerLeft.classList.remove("theme-ui-dark-green");
    elLowerRight.classList.remove("theme-ui-dark-green");

    elControl.classList.remove("theme-ui-dark-pink");
    elLowerLeft.classList.remove("theme-ui-dark-pink");
    elLowerRight.classList.remove("theme-ui-dark-pink");

    elControl.classList.remove("theme-ui-light");
    elLowerLeft.classList.remove("theme-ui-light");
    elLowerRight.classList.remove("theme-ui-light");

    elControl.classList.remove("theme-ui-tiffany");
    elLowerLeft.classList.remove("theme-ui-tiffany");
    elLowerRight.classList.remove("theme-ui-tiffany");

    elControl.classList.remove("theme-ui-pistachio");
    elLowerLeft.classList.remove("theme-ui-pistachio");
    elLowerRight.classList.remove("theme-ui-pistachio");

    elControl.classList.remove("theme-ui-girlboss");
    elLowerLeft.classList.remove("theme-ui-girlboss");
    elLowerRight.classList.remove("theme-ui-girlboss");
}

/*
//////////////// UI GRID OUTLINES ///////////////
*/

document.querySelector("#btn_outlines").addEventListener("click", doOutlines);

function doOutlines() {
    document.getElementById("ui-admin-select").style.display ="none";
    document.getElementById("btn_gears").classList.remove('btn-lower-left-active');

    const eleBtn = document.getElementById("btn_outlines");

    if (eleBtn.classList.contains('btn-lower-left-active')) {
        eleBtn.classList.remove('btn-lower-left-active');
        const css_unchecked = "#HTML-Content section, #HTML-Content div, #HTML-Content figure, #HTML-Content img, #HTML-Content h2, #HTML-Content h3, #HTML-Content h2, #HTML-Content p, #HTML-Content h2, #HTML-Content ul { outline: solid 1px transparent }";
        head_unchecked = iframe.contentWindow.document.getElementsByTagName('head')[0],
        style_unchecked = iframe.contentWindow.document.createElement('style');
        head_unchecked.appendChild(style_unchecked);
        style_unchecked.type = 'text/css';
        style_unchecked.appendChild(iframe.contentWindow.document.createTextNode(css_unchecked));
    }
    else {
        eleBtn.classList.add('btn-lower-left-active');
        const css_checked = "#HTML-Content section, #HTML-Content div, #HTML-Content figure, #HTML-Content img, #HTML-Content h2, #HTML-Content h3, #HTML-Content h2, #HTML-Content p, #HTML-Content h2, #HTML-Content ul { outline: solid 1px red }";
        head_checked = iframe.contentWindow.document.getElementsByTagName('head')[0],
        style_checked = iframe.contentWindow.document.createElement('style');
        head_checked.appendChild(style_checked);
        style_checked.type = 'text/css';
        style_checked.appendChild(iframe.contentWindow.document.createTextNode(css_checked));
    }
}

/* Resize frame width */
document.querySelector("#btn_resize_width").addEventListener("click", resizeWidth);

function resizeWidth() {

    document.getElementById("ui-admin-select").style.display ="none";
    document.getElementById("btn_gears").classList.remove('btn-lower-left-active');
    const eleBtn = document.getElementById("btn_resize_width");

    if (document.getElementById("btn_resize_width").classList.contains('btn-lower-left-active')) {
        eleBtn.classList.remove('btn-lower-left-active');
        document.getElementById('page-preview-options').classList.remove("show-options");
        document.getElementById('page-preview-options').classList.add("hide-options");
    }

    else {
        eleBtn.classList.add('btn-lower-left-active');
        document.getElementById('page-preview-options').classList.add("show-options");
        document.getElementById('page-preview-options').classList.remove("hide-options");
    }
}

function showRespIcons() {
    document.getElementById('page-preview-options').classList.add("show-options");
}

function hideRespIcons() {
    document.getElementById('#page-preview-options').classList.remove("show-options");
}

/*
//////////////// Responsive resizing icons in navbar ///////////////
*/

document.querySelector("#container-icon-resize-width").addEventListener("click", doResizeWidth);

function doResizeWidth() {
    let img = document.getElementById('img-icon-resize-width').src;

    // Not currently selected
    if (img.indexOf('assets/img/icons/icon-resize-unselected.png')!=-1) {
        document.getElementById('img-icon-resize-width').src = '../../ui/assets/img/icons/icon-resize-selected.png';
        showRespIcons();
    }

    // Is currently selected
    else {
    document.getElementById('img-icon-resize-width').src = '../../ui/assets/img/icons/icon-resize-unselected.png';
    hideRespIcons();
    }
}

const iconsResponsive = document.querySelectorAll('.icon_resize_respon');

iconsResponsive.forEach(icon => {
    icon.addEventListener('click', (e) => {
        // Get current icon id
        const iconId = e.currentTarget.id.toString();
        document.getElementById(iconId).classList.add("selected");
        resetResponsive();

        if (iconId==="respDesktopLarge") {
            document.getElementById("page-preview-body").classList.add("resp-desktop-large");
            document.querySelector("#respDesktopLarge img").src = "../../ui/assets/img/icons/icon-resize-desktop-large.png";
        }

        else if (iconId==="respDesktopSmall") {
            document.getElementById("page-preview-body").classList.add("resp-desktop-small");
            document.querySelector("#respDesktopSmall img").src = "../../ui/assets/img/icons/icon-resize-desktop-small.png";
        }

        else if (iconId==="respTabletLandscape") {
            document.getElementById("page-preview-body").classList.add("resp-tablet-landscape");
            document.querySelector("#respTabletLandscape img").src = "../../ui/assets/img/icons/icon-resize-tablet-landscape.png";
        }
        else if (iconId==="respTabletPortrait") {
            document.getElementById("page-preview-body").classList.add("resp-tablet-portrait");
            document.querySelector("#respTabletPortrait img").src = "../../ui/assets/img/icons/icon-resize-tablet-portrait.png";
        }

        else if (iconId==="respMobileLarge") {
            document.getElementById("page-preview-body").classList.add("resp-mobile-large");
            document.querySelector("#respMobileLarge img").src = "../../ui/assets/img/icons/icon-resize-mobile-large.png";
        }

        else if (iconId==="respMobileSmall") {
            document.getElementById("page-preview-body").classList.add("resp-mobile-small")
            document.querySelector("#respMobileSmall img").src = "../../ui/assets/img/icons/icon-resize-mobile-small.png";
        }
    });
});

function resetResponsive() {
    document.getElementById("page-preview-body").classList.remove("resp-desktop-large");
    document.getElementById("page-preview-body").classList.remove("resp-desktop-small");
    document.getElementById("page-preview-body").classList.remove("resp-tablet-landscape");
    document.getElementById("page-preview-body").classList.remove("resp-tablet-portrait");
    document.getElementById("page-preview-body").classList.remove("resp-mobile-large");
    document.getElementById("page-preview-body").classList.remove("resp-mobile-small");

    document.querySelector("#respDesktopLarge img").src = "../../ui/assets/img/icons/icon-resize-desktop-large-selected.png";
    document.querySelector("#respDesktopSmall img").src = "../../ui/assets/img/icons/icon-resize-desktop-small-selected.png";
    document.querySelector("#respTabletLandscape img").src = "../../ui/assets/img/icons/icon-resize-tablet-landscape-selected.png";
    document.querySelector("#respTabletPortrait img").src = "../../ui/assets/img/icons/icon-resize-tablet-portrait-selected.png";
    document.querySelector("#respMobileLarge img").src = "../../ui/assets/img/icons/icon-resize-mobile-large-selected.png";
    document.querySelector("#respMobileSmall img").src = "../../ui/assets/img/icons/icon-resize-mobile-small-selected.png";
}

