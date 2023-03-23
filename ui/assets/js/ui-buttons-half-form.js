/*
//////////////// BUTTONS: TYPE ////////////////////
*/
document.querySelector("#dd_buttons_type").addEventListener("change", doButtonsType);

function doButtonsType() {
    let opt = document.querySelector("#dd_buttons_type").value;
    let el_btn = iframe.contentWindow.document.getElementById("btn-submit");
    // Solid
    if (opt==="0") {
        removeButtonsType(el_btn);
        el_btn.classList.add("btn-solid");
        // Update options
        document.getElementById("dd_buttons_shape").disabled=false;
        document.getElementById("btn_cols_bg_passive").disabled=false;
        document.getElementById("btn_cols_bg_active").disabled=false;
        document.getElementById("btn_cols_border_passive").disabled=false;
        document.getElementById("btn_cols_border_active").disabled=false;
        document.getElementById("cb_buttons_shadow").disabled=false;
    }

    // Outline
    else if (opt==="1") {
        removeButtonsType(el_btn);
        el_btn.classList.add("btn-outline");
        // Update options
        document.getElementById("dd_buttons_shape").disabled=false;
        document.getElementById("btn_cols_bg_passive").disabled=true;
        document.getElementById("btn_cols_bg_active").disabled=false;
        document.getElementById("btn_cols_border_passive").disabled=false;
        document.getElementById("btn_cols_border_active").disabled=false;
        document.getElementById("cb_buttons_shadow").disabled=false;
    }

    // Link
    else if (opt==="2") {
        removeButtonsType(el_btn);
        el_btn.classList.add("btn-plain");
        // Update options
        document.getElementById("dd_buttons_shape").disabled=true;
        document.getElementById("dd_buttons_shape").value="0";
        document.getElementById("btn_cols_bg_passive").disabled=true;
        document.getElementById("btn_cols_bg_active").disabled=true;
        document.getElementById("btn_cols_border_passive").disabled=true;
        document.getElementById("btn_cols_border_active").disabled=true;
        document.getElementById("cb_buttons_shadow").disabled=true;
        el_btn.classList.remove("btn-shadow");
        el_btn.classList.remove("btn-block");
        el_btn.classList.remove("btn-soft");
        el_btn.classList.remove("btn-pill");
    }
}

function removeButtonsType(el_btn) {
    el_btn.classList.remove("btn-solid");
    el_btn.classList.remove("btn-outline");
    el_btn.classList.remove("btn-plain");
}

/*
//////////////// BUTTONS: STYLE ////////////////////
*/

document.querySelector("#dd_buttons_shape").addEventListener("change", doButtonsStyle);

function doButtonsStyle() {
    let opt = document.querySelector("#dd_buttons_shape").value;
    let el_btn = iframe.contentWindow.document.getElementById("btn-submit");
    // remove
    if (opt==="0") {
        removeButtonsStyle(el_btn);
    }

    // soft
    else if (opt==="1") {
        removeButtonsStyle(el_btn);
        el_btn.classList.add("btn-soft");
    }

    // pill
    else if (opt==="2") {
        removeButtonsStyle(el_btn);
        el_btn.classList.add("btn-pill");
    }
}

function removeButtonsStyle(el_btn) {
    el_btn.classList.remove("btn-soft");
    el_btn.classList.remove("btn-pill");
}


/*
//////////////// BUTTONS: ICON POSITIONS ////////////////////
*/
document.querySelector("#form-btns-icons").addEventListener("change", swapButtonIcons);

function swapButtonIcons() {

    const rbs = document.querySelectorAll("input[name='btns-icons']");
    let selectedValue;
    let el_btn;
    let btn_content;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    el_btn = iframe.contentWindow.document.getElementById("btn-submit");

    const icon_left  ="<i class=\"fa-regular fa-envelope\"><\/i><span>Send<\/span>";
    const icon_right ="<span>Send</span><i class=\"fas fa-arrow-right\"></i>";
    
    if (selectedValue==="left") {
        // Move text to right, icon to left
        btn_content = el_btn.innerHTML;
        if (( btn_content = icon_right) || (btn_content = icon_right)) {
            btn_content = btn_content.replace(icon_right, icon_left);
            el_btn.innerHTML = btn_content;
        }
    }

    else if (selectedValue==="right") {
        btn_content = el_btn.innerHTML;
        if (( btn_content = icon_right) || (btn_content = icon_right)) {
            btn_content = btn_content.replace(icon_left, icon_right);
            el_btn.innerHTML = btn_content;
        }
    }

    else if (selectedValue==="none") {
        // Only text. No icon.
        if (( btn_content = icon_right) || (btn_content = icon_right)) {
            btn_content = el_btn.innerHTML;
            btn_content = "<span>Send</span>";
            el_btn.innerHTML = btn_content;
        }
    }
}


/*
//////////////// BUTTONS: SHADOW ///////////////
*/

document.querySelector("#cb_buttons_shadow").addEventListener("change", doBtnShadow);

function doBtnShadow() {
    let el_btn = iframe.contentWindow.document.getElementById("btn-submit");
    if (!document.getElementById("cb_buttons_shadow").checked) {
        el_btn.classList.remove("btn-shadow");
    }
    else {
        el_btn.classList.add("btn-shadow");
    }
}

/*
//////////////// BUTTONS: UPPERCASE ///////////////
*/

document.querySelector("#cb_buttons_uppercase").addEventListener("change", doBtnUCase);

function doBtnUCase() {
    let el_btn = iframe.contentWindow.document.getElementById("btn-submit");
    if (!document.getElementById("cb_buttons_uppercase").checked) {
        el_btn.classList.remove("btn-uppercase");
    }
    else {
        el_btn.classList.add("btn-uppercase");
    }
}

