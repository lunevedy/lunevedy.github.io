/*
//////////////// H3 SUB-HEADINGS: LIGHT ///////////////
*/

document.querySelector("#cb_h3_bold").addEventListener("change", doH3Light);

function doH3Light() {
    if (document.getElementById("cb_h3_bold").checked) {
        iframe.contentWindow.document.querySelector(".footer-cols-4").classList.remove("footer-h3-weight-400");
    }
    else {
        iframe.contentWindow.document.querySelector(".footer-cols-4").classList.add("footer-h3-weight-400");
    }
}

/*
//////////////// H3 SUB-HEADINGS: UPPERCASE ///////////////
*/

document.querySelector("#cb_h3_uppercase").addEventListener("change", doH3UpperCase);

function doH3UpperCase() {
    if (!document.getElementById("cb_h3_uppercase").checked) {
        iframe.contentWindow.document.querySelector(".footer-cols-4").classList.remove("footer-h3-uppercase");
    }
    else {
        iframe.contentWindow.document.querySelector(".footer-cols-4").classList.add("footer-h3-uppercase");
    }
}

/*
//////////////// HYPERLINKS: UPPERCASE ///////////////
*/

document.querySelector("#cb_hyperlinks_uppercase").addEventListener("change", doHyperlinksUpperCase);

function doHyperlinksUpperCase() {

    const objLinks = iframe.contentWindow.document.querySelectorAll("footer ul.footer-links");
    if (!document.getElementById("cb_hyperlinks_uppercase").checked) {
        objLinks.forEach(objLink => {
            objLink.classList.remove("footer-links-uppercase");
        });
    }
    else {
        objLinks.forEach(objLink => {
            objLink.classList.add("footer-links-uppercase");
        });
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
        newStyle = "footer"+footerTheme+" ul.footer-links li a:link,\nfooter"+footerTheme+" ul.footer-links li a:visited { text-decoration-color: transparent }\n\n";
        sub_string = "a:visited { text-decoration-color:";
        document.getElementById("btn_link_underline_passive").disabled = true;
        doUpdateArray(sub_string,newStyle);
    }
}

document.querySelector("#cb_link_underline_active").addEventListener("change", doHyperlinksUActive);

function doHyperlinksUActive() {
    if (!document.getElementById("cb_link_underline_active").checked) {
        // Default. Button unchecked. Underline off. Set underline to transparent. Link color not enabled.
        newStyle = "footer"+footerTheme+" ul.footer-links li a:focus,\nfooter"+footerTheme+" ul.footer-links li a:hover,\nfooter"+footerTheme+" ul.footer-links li a:active { text-decoration-color: transparent }\n\n";
        sub_string = "ul.footer-links li a:active { text-decoration-color:";
        document.getElementById("btn_link_underline_active").disabled = true;
        doUpdateArray(sub_string,newStyle);
    }
    else {
        // Button checked. Underline on. Unset underline from transparent. Link color enabled. 
        newStyle = "footer"+footerTheme+" ul.footer-links li a:focus,\nfooter"+footerTheme+" ul.footer-links li a:hover,\nfooter"+footerTheme+" ul.footer-links li a:active { text-decoration-color: inherit }\n\n";
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
        newUL.innerHTML = `\t\t\n<li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>\n\t\t<li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>\n\t\t<li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>\n\t\t<li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>\n`;

        iframe.contentWindow.document.querySelector('footer .col-4:nth-child(1) p').insertAdjacentHTML("afterend", newUL.outerHTML)
        // }

        // else if (iframe.contentWindow.document.querySelector("footer h2")) {
        //     iframe.contentWindow.document.querySelector('footer h2').insertAdjacentHTML("afterend", newUL.outerHTML);
        // }
        // else {
        //     iframe.contentWindow.document.querySelector('footer').prepend(newUL);
        // }
    }
}

function removeIcons() {
    iframe.contentWindow.document.querySelector("footer ul.footer-icons").remove();
    document.getElementById("icons-details").style.display ="none";
    const arg1 = "ul.footer-icons li a:visited i { color:";
    const arg2 = "ul.footer-icons li a:active i { color:";
    removeCSSTagPairs(arg1,arg2);
}


/*
//////////////// COPYRIGHT ///////////////
*/

document.querySelector("#cb_copyright").addEventListener("change", doCopyright);

function doCopyright() {
    if (!document.getElementById("cb_copyright").checked) {
        removeCopyright();
    }
    else {
        document.getElementById("btn_copyright_bg").disabled = false;
        document.getElementById("btn_copyright_text").disabled = false;
        const newCopyright = document.createElement("div");
        newCopyright.setAttribute("class", "copyright");
        newCopyright.innerHTML = `\t\n<p>Copyright © 2023 ABC Limited. All rights reserved.</p>\n`;
        iframe.contentWindow.document.querySelector('footer').append(newCopyright);
    }
}

function removeCopyright() {
    iframe.contentWindow.document.querySelector("footer .copyright").remove();
    document.getElementById("btn_copyright_bg").disabled = true;
    document.getElementById("btn_copyright_text").disabled = true;
    const arg1 = ".copyright { background-color:";
    const arg2 = ".copyright p { color:";
    removeCSSTagPairs(arg1,arg2);
}