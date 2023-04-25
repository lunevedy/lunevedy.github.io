import { content_footer_h2, content_footer_h3 } from '../js/arr-content.js';

/*
//////////////// H2 ///////////////
*/

document.querySelector("#cb_h2").addEventListener("change", doH2);

function doH2() {

    if (!document.getElementById("cb_h2").checked) {
        removeH2();
    }

    else {
        const newH2 = document.createElement("h2");
        newH2.textContent = content_footer_h2;
        iframe.contentWindow.document.querySelector('footer').prepend(newH2);
        iframe.contentWindow.document.querySelector('footer').innerHTML = iframe.contentWindow.document.querySelector('footer').innerHTML.replace("<h2>", "\n\t\<h2>");
        document.getElementById("btn_h2_color").disabled=false;
    }
}

function removeH2() {
    iframe.contentWindow.document.querySelector("footer h2").remove();
    document.getElementById("btn_h2_color").disabled = true;
    const arg1 = "footer"+footerTheme+" > h2 { color:"
    removeCSSTagPairs(arg1);
}

/*
//////////////// H3 SUB-HEADINGS ////////////////////
*/

document.querySelector("#cb_h3").addEventListener("change", doH3);

function doH3() {

    if (!document.getElementById("cb_h3").checked) {
        removeH3();
    }

    else {
        const newH3 = document.createElement("h2");
        newH3.textContent = content_footer_h3;
        if (!iframe.contentWindow.document.querySelector("footer h2")) {
           iframe.contentWindow.document.querySelector('footer').prepend(newH3);
        }
        else {
            iframe.contentWindow.document.querySelector("footer h2").insertAdjacentHTML("afterend", "<h3>"+content_footer_h3+"</h3>");
        }
        iframe.contentWindow.document.querySelector('footer').innerHTML = iframe.contentWindow.document.querySelector('footer').innerHTML.replace("<h3>", "\n\t\<h3>");
        document.getElementById("btn_h3_color").disabled=false;
    }
}

function removeH3() {
    iframe.contentWindow.document.querySelector("footer h3").remove();
    document.getElementById("btn_h3_color").disabled = true;
    const arg1 = "footer"+footerTheme+" > h3 { color:"
    removeCSSTagPairs(arg1);
}

/*
//////////////// HYPERLINKS ///////////////
*/

document.querySelector("#cb_hyperlinks").addEventListener("change", doHyperlinks);

function doHyperlinks() {
    if (!document.getElementById("cb_hyperlinks").checked) {
        removeHyperlinks();
    }
    else {
        document.getElementById("hyperlinks-details").style.display ="block";
        const newUL = document.createElement("ul");
        newUL.setAttribute("class", "footer-links");
        newUL.innerHTML = `\t\t\n<li><a href="#">Home</a></li>\n\t\t<li><a href="#">Products</a></li>\n\t\t<li><a href="#">Services</a></li>\n\t\t<li><a href="#">Legal &amp; Privacy</a></li>\n`;

        if (iframe.contentWindow.document.querySelector("footer h3")) {
            iframe.contentWindow.document.querySelector('footer h3').insertAdjacentHTML("afterend", newUL.outerHTML)
        }
        else if (iframe.contentWindow.document.querySelector("footer h2")) {
            iframe.contentWindow.document.querySelector('footer h2').insertAdjacentHTML("afterend", newUL.outerHTML);
        }
        else {
            iframe.contentWindow.document.querySelector('footer').prepend(newUL);
        }

    }
}

function removeHyperlinks() {
    iframe.contentWindow.document.querySelector("footer ul.footer-links").remove();
    document.getElementById("hyperlinks-details").style.display ="none";
    document.getElementById("hyperlinks_text_size_smaller").checked = true;
    document.getElementById("cb_hyperlinks_uppercase").checked = false;
    document.getElementById("cb_link_underline_passive").checked = true;
    document.getElementById("cb_link_underline_active").checked = false;
    const arg1 = "ul.footer-links li a:visited { color:";
    const arg2 = "ul.footer-links li a:active { color:";
    const arg3 = "ul.footer-links li a:visited { text-decoration-color:";
    removeCSSTagPairs(arg1,arg2,arg3);
}

/*
//////////////// HYPERLINKS: TEXT SIZE ///////////////
*/

document.querySelector("#hyperlinks_text_size").addEventListener("change", doHyperlinksTextSize);

function doHyperlinksTextSize() {
    const rbs = document.querySelectorAll("input[name='a_size']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    if (selectedValue==="bigger") {
        iframe.contentWindow.document.querySelector("footer ul.footer-links").classList.add("footer-links-bigger");
    }

    else if (selectedValue==="smaller") {
        iframe.contentWindow.document.querySelector("footer ul.footer-links").classList.remove("footer-links-bigger");
    }
}


/*
//////////////// HYPERLINKS: UPPERCASE ///////////////
*/

document.querySelector("#cb_hyperlinks_uppercase").addEventListener("change", doHyperlinksUpperCase);

function doHyperlinksUpperCase() {
    if (!document.getElementById("cb_hyperlinks_uppercase").checked) {
        iframe.contentWindow.document.querySelector("footer ul.footer-links").classList.remove("footer-links-uppercase");
    }
    else {
        iframe.contentWindow.document.querySelector("footer ul.footer-links").classList.add("footer-links-uppercase");
    }
}

/*
//////////////// HYPERLINKS: UNDERLINES ///////////////
*/

document.querySelector("#cb_link_underline_passive").addEventListener("change", doHyperlinksUPassive);

function doHyperlinksUPassive() {
    if (document.getElementById("cb_link_underline_passive").checked) {
        // Default. Button checked. Underlines on. Unset underline from transparent. Link color enabled.
        const arg1 = "a:visited { text-decoration-color: transparent";
        document.getElementById("btn_link_underline_passive").disabled = false;
        removeCSSTagPairs(arg1);
    }

    else {
        // Button unchecked. Underlines off. Set underline from transparent. Link color not enabled. 
        newStyle = "footer"+footerTheme+" > ul.footer-links li a:link,\nfooter"+footerTheme+" > ul.footer-links li a:visited { text-decoration-color: transparent }\n\n";
        sub_string = "a:visited { text-decoration-color:";
        document.getElementById("btn_link_underline_passive").disabled = true;
        doUpdateArray(sub_string,newStyle);
    }
}

document.querySelector("#cb_link_underline_active").addEventListener("change", doHyperlinksUActive);

function doHyperlinksUActive() {
    if (!document.getElementById("cb_link_underline_active").checked) {
        // Default. Button unchecked. Underline off. Set underline to transparent. Link color not enabled.
        newStyle = "footer"+footerTheme+" > ul.footer-links li a:focus,\nfooter"+footerTheme+" > ul.footer-links li a:hover,\nfooter"+footerTheme+" > ul.footer-links li a:active { text-decoration-color: transparent }\n\n";
        sub_string = "ul.footer-links li a:active { text-decoration-color:";
        document.getElementById("btn_link_underline_active").disabled = true;
        doUpdateArray(sub_string,newStyle);
    }
    else {
        // Button checked. Underline on. Unset underline from transparent. Link color enabled. 
        newStyle = "footer"+footerTheme+" > ul.footer-links li a:focus,\nfooter"+footerTheme+" > ul.footer-links li a:hover,\nfooter"+footerTheme+" > ul.footer-links li a:active { text-decoration-color: inherit }\n\n";
        sub_string = "ul.footer-links li a:active { text-decoration-color:";
        document.getElementById("btn_link_underline_active").disabled = false;
        doUpdateArray(sub_string,newStyle);
    }
}

 
/*
//////////////// ICONS ///////////////
*/

document.querySelector("#cb_icons").addEventListener("change", doIcons);

function doIcons() {
    if (!document.getElementById("cb_icons").checked) {
        removeIcons();
    }
    else {
        document.getElementById("icons-details").style.display ="flex";
        const newUL = document.createElement("ul");
        newUL.setAttribute("class", "footer-icons");
        newUL.innerHTML = `\t\t\n<li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>\n\t\t<li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>\n\t\t<li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>\n\t\t<li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>\n\t\t<li><a href="#"><i class="fa-brands fa-github"></i></a></li>\n\t\t<li><a href="#"><i class="fa-solid fa-envelope"></i></a></li>\n`;

        if (iframe.contentWindow.document.querySelector("footer ul.footer-links")) {
            iframe.contentWindow.document.querySelector("footer ul.footer-links").insertAdjacentHTML("afterend", newUL.outerHTML)
        }        

        else if (iframe.contentWindow.document.querySelector("footer h3")) {
            iframe.contentWindow.document.querySelector('footer h3').insertAdjacentHTML("afterend", newUL.outerHTML)
        }

        else if (iframe.contentWindow.document.querySelector("footer h2")) {
            iframe.contentWindow.document.querySelector('footer h2').insertAdjacentHTML("afterend", newUL.outerHTML);
        }
        else {
            iframe.contentWindow.document.querySelector('footer').prepend(newUL);
        }
    }
}

function removeIcons() {
    iframe.contentWindow.document.querySelector("footer ul.footer-icons").remove();
    document.getElementById("icons-details").style.display ="none";
    const arg1 = "ul.footer-icons li a:visited i { color:";
    const arg2 = "ul.footer-icons li a:active i { color:";
    removeCSSTagPairs(arg1,arg2);
}


