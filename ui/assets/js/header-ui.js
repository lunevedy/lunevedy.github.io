document.querySelector("#picker-box").addEventListener('click', handleLabelClick);

    function handleLabelClick(event) {
        event.stopPropagation();
        const label = event.target.closest("label");
        if (label && this.contains(label)) {
            // Ignore this click
            return;
        }
        const span = event.target.closest("span");
        if (span && this.contains(span)) {
            // Ignore this click
            return;
        }
        const rbs = document.querySelectorAll("input[name='picker-radio']");
        let color_code;

        for (const rb of rbs) {
            if (rb.checked) {
                color_code = rb.value;
                break;
            }
        }

        let navTheme = sessionStorage.getItem("navTheme");

        if (iframe.contentWindow.document.querySelector('header.hero-bg')) {
            sessionStorage.setItem("headerTheme", ".theme-dark");
        }
        else {
            sessionStorage.setItem("headerTheme", ".theme-light");
        }

        let headerTheme = sessionStorage.getItem("headerTheme");

        /* MENUS */

        /* Background: Desktop/default mobile */
        if (btn_id === "btn_bg_navbar") {
            newStyle = "nav"+navTheme+",\nnav"+navTheme+" ul.links-wrapper.active { background-color: var("+color_code+") }\n";
            console.log(newStyle);
            sub_string = "nav"+navTheme+" { background-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* sticky */
        else if (btn_id === "btn_bg_onscroll_menu") {
            newStyle = "nav"+navTheme+".menu-sticky.menu-on-scroll,\nnav"+navTheme+".menu-sticky.menu-on-scroll ul.links-wrapper.active { background-color: var("+color_code+") }\n";
            sub_string = "nav"+navTheme+".menu-sticky.menu-on-scroll { background-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Links: Desktop/mobile default: passive */
        else if (btn_id === "menu_link_text_passive") {
            newStyle = "nav"+navTheme+" ul.links-wrapper li a:link,\nnav"+navTheme+" ul.links-wrapper li a:visited { color: var("+color_code+") }\n";
            sub_string = "nav"+navTheme+" ul.links-wrapper li a:visited { color";
            doUpdateArray(sub_string,newStyle);
        }

        /* sticky */
        else if (btn_id === "btn_link_onscroll_passive") {
            newStyle = "nav"+navTheme+".menu-sticky.menu-on-scroll ul.links-wrapper li a:link,\nnav"+navTheme+".menu-sticky.menu-on-scroll ul.links-wrapper li a:visited { color: var("+color_code+") }\n";
            sub_string = "nav"+navTheme+".menu-sticky.menu-on-scroll ul.links-wrapper li a:visited { color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Links: Desktop/mobile default: active */
        else if (btn_id === "menu_link_text_active") {
            newStyle = "nav"+navTheme+" ul.links-wrapper li a:focus,\nnav"+navTheme+" ul.links-wrapper li a:hover,\nnav"+navTheme+" ul.links-wrapper li a:active { color: var("+color_code+") }\n";
            sub_string = "nav"+navTheme+" ul.links-wrapper li a:active { color";
            doUpdateArray(sub_string,newStyle);
        }

        /* sticky */
        else if (btn_id === "btn_link_onscroll_active") {
            newStyle = "nav"+navTheme+".menu-sticky.menu-on-scroll ul.links-wrapper li a:focus,\nnav"+navTheme+".menu-sticky.menu-on-scroll ul.links-wrapper li a:hover,\nnav"+navTheme+".menu-sticky.menu-on-scroll ul.links-wrapper li a:active { color: var("+color_code+") }\n";
            sub_string = "nav"+navTheme+".menu-sticky.menu-on-scroll ul.links-wrapper li a:active { color";
            doUpdateArray(sub_string,newStyle);
        }

        /* ======= DESKTOP ======== */

        /* CTA button text colour: passive */
        else if (btn_id === "btn_a_cta_text_passive") {
            newStyle = "nav"+navTheme+" a#btn-cta:link,\nnav"+navTheme+" a#btn-cta:visited { color: var("+color_code+") }\n";
            sub_string = "a#btn-cta:visited { color";
            doUpdateArray(sub_string,newStyle);
        }

        /* CTA button text colour: active */
       else if (btn_id === "btn_a_cta_text_active") {
            newStyle = "nav"+navTheme+" a#btn-cta:focus,\nnav"+navTheme+" a#btn-cta:hover,\nnav"+navTheme+" a#btn-cta:active { color: var("+color_code+") }\n";
            sub_string = "a#btn-cta:active { color";
            doUpdateArray(sub_string,newStyle);
        }

        /* CTA button background colour: passive */
        else if (btn_id === "btn_a_cta_bg_passive") {
            newStyle = "nav"+navTheme+" a#btn-cta:link,\nnav"+navTheme+" a#btn-cta:visited { background-color: var("+color_code+") }\n";
            sub_string = "a#btn-cta:visited { background-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* CTA button background colour: active */
        else if (btn_id === "btn_a_cta_bg_active") {
            newStyle = "nav"+navTheme+" a#btn-cta:focus,\nnav"+navTheme+" a#btn-cta:hover,\nnav"+navTheme+" a#btn-cta:active { background-color: var("+color_code+") }\n";
            sub_string = "a#btn-cta:active { background-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* CTA button border colour: passive */
        else if (btn_id === "btn_a_cta_border_passive") {
            newStyle = "nav"+navTheme+" a#btn-cta:link,\nnav"+navTheme+" a#btn-cta:visited { border-color: var("+color_code+") }\n";
            sub_string = "a#btn-cta:visited { border-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* CTA button border colour: active */
        else if (btn_id === "btn_a_cta_border_active") {
            newStyle = "nav"+navTheme+" a#btn-cta:focus,\nnav"+navTheme+" a#btn-cta:hover,\nnav"+navTheme+" a#btn-cta:active { border-color: var("+color_code+") }\n";
            sub_string = "a#btn-cta:active";
            doUpdateArray(sub_string,newStyle);
        }


        /* ======= MOBILE ======== */

        /* CTA mobile button text colour: passive */
        else if (btn_id === "btn_a_cta_mobile_text_passive") {
            newStyle = "@media (max-width: 767px) { nav"+navTheme+" ul.links-wrapper.active a#btn-cta:link,\nnav"+navTheme+" ul.links-wrapper.active a#btn-cta:visited { color: var("+color_code+") } }\n";
            console.log(newStyle);

            sub_string = "ul.links-wrapper.active a#btn-cta:visited { color";
            doUpdateArray(sub_string,newStyle);
        }

        /* CTA mobile button text colour: active */
       else if (btn_id === "btn_a_cta_mobile_text_active") {
            newStyle = "@media (max-width: 767px) { nav"+navTheme+" ul.links-wrapper.active a#btn-cta:focus,\nnav"+navTheme+" ul.links-wrapper.active a#btn-cta:hover,\nnav"+navTheme+" ul.links-wrapper.active a#btn-cta:active { color: var("+color_code+") } }\n";
            sub_string = "ul.links-wrapper.active a#btn-cta:active { color";
            doUpdateArray(sub_string,newStyle);
        }

        /* CTA mobile button background colour: passive */
        else if (btn_id === "btn_a_cta_mobile_bg_passive") {
            newStyle = "@media (max-width: 767px) { nav"+navTheme+" ul.links-wrapper.active a#btn-cta:link,\nnav"+navTheme+" ul.links-wrapper.active a#btn-cta:visited { background-color: var("+color_code+") } }\n";
            sub_string = "ul.links-wrapper.active a#btn-cta:visited { background-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* CTA mobile button background colour: active */
        else if (btn_id === "btn_a_cta_mobile_bg_active") {
            newStyle = "@media (max-width: 767px) { nav"+navTheme+" ul.links-wrapper.active a#btn-cta:focus,\nnav"+navTheme+" ul.links-wrapper.active a#btn-cta:hover,\nnav"+navTheme+" ul.links-wrapper.active a#btn-cta:active { background-color: var("+color_code+") } } \n";
            sub_string = "ul.links-wrapper.active a#btn-cta:active { background-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* CTA mobile button border colour: passive */
        else if (btn_id === "btn_a_cta_mobile_border_passive") {
            newStyle = "@media (max-width: 767px) { nav"+navTheme+" ul.links-wrapper.active a#btn-cta:link,\nnav"+navTheme+" ul.links-wrapper.active a#btn-cta:visited { border-color: var("+color_code+") } }\n";
            sub_string = "ul.links-wrapper.active a#btn-cta:visited { border-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* CTA mobile button border colour: active */
        else if (btn_id === "btn_a_cta_mobile_border_active") {
            newStyle = "@media (max-width: 767px) { nav"+navTheme+" ul.links-wrapper.active a#btn-cta:focus,\nnav"+navTheme+" ul.links-wrapper.active a#btn-cta:hover,\nnav"+navTheme+" ul.links-wrapper.active a#btn-cta:active { border-color: var("+color_code+") } }\n";
            sub_string = "ul.links-wrapper.active a#btn-cta:active";
            console.log(newStyle);
            doUpdateArray(sub_string,newStyle);
        }

        /* Mobile background */
        else if (btn_id === "btn_bg_menu_mobile") {
            newStyle = "@media (max-width: 767px) { nav"+navTheme+" ul.links-wrapper.active { background-color: var("+color_code+") } }\n";
            console.log(newStyle);
            sub_string = "nav"+navTheme+" ul.links-wrapper.active { background-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Mobile links */
        else if (btn_id === "menu_mobile_link_text_passive") {
            newStyle = "@media (max-width: 767px) { nav"+navTheme+" ul.links-wrapper.active li a:link,\nnav"+navTheme+" ul.links-wrapper.active li a:visited { color: var("+color_code+") } }\n";
            console.log(newStyle);
            doUpdateArray(sub_string,newStyle);
            sub_string = "ul.links-wrapper.active li a:visited { color:";
        }

        else if (btn_id === "menu_mobile_link_text_active") {
            newStyle = "@media (max-width: 767px) { nav"+navTheme+" ul.links-wrapper.active li a:focus,\nnav"+navTheme+" ul.links-wrapper.active li a:hover,\nnav"+navTheme+" ul.links-wrapper.active li a:active { color: var("+color_code+") } }\n";
            console.log(newStyle);
            sub_string = "ul.links-wrapper.active li a:active { color:";
        }

        /* HAMBURGER ICON */

        /* Non-sticky */
        else if (btn_id === "btn_hamburger_stroke") {
            newStyle = "nav"+navTheme+" .nav-toggle .bar-1,\nnav"+navTheme+" .nav-toggle .bar-2,\nnav"+navTheme+" .nav-toggle .bar-3 { background-color: var("+color_code+") }\n"
            console.log(newStyle);
            sub_string = ".nav-toggle .bar-1 { background-color:";
            doUpdateArray(sub_string,newStyle);
        }

        /* Sticky */
        else if (btn_id === "btn_hamburger_sticky_stroke") {
            newStyle = "nav"+navTheme+".menu-sticky.menu-on-scroll .nav-toggle .bar-1,\nnav"+navTheme+".menu-sticky.menu-on-scroll .nav-toggle .bar-2,\nnav"+navTheme+".menu-sticky.menu-on-scroll .nav-toggle .bar-3 { background-color: var("+color_code+") }\n"
            console.log(newStyle);
            sub_string = ".menu-sticky.menu-on-scroll .nav-toggle .bar-1 { background-color:";
            doUpdateArray(sub_string,newStyle);
        }

        /* Non-sticky */
        else if (btn_id === "btn_hamburger_fill") {
            newStyle = "nav"+navTheme+" .nav-toggle { background-color: var("+color_code+") }\n";
            console.log(newStyle);
            sub_string = ".nav-toggle { background-color:";
            doUpdateArray(sub_string,newStyle);
        }

        /* Sticky */
        else if (btn_id === "btn_hamburger_sticky_fill") {
            newStyle = "nav"+navTheme+".menu-sticky.menu-on-scroll .nav-toggle { background-color: var("+color_code+") }\n";
            console.log(newStyle);
            sub_string = ".menu-sticky.menu-on-scroll .nav-toggle { background-color:";
            doUpdateArray(sub_string,newStyle);
        }


        /* header background */
        else if (btn_id === "btn_header_bg") {
            newStyle = "header"+headerTheme+" { background-color: var("+color_code+") }\n";
            console.log(newStyle);
            sub_string = "header"+headerTheme+" { background-color: ";
            doUpdateArray(sub_string,newStyle);
        }

        /* .container-text .badge text */
        else if (btn_id === "btn_badge_text") {
            newStyle = "header"+headerTheme+" .container-text .badge { color: var("+color_code+") }\n";
            sub_string = ".badge { color";
            doUpdateArray(sub_string,newStyle);
        }

        /* badge background */
        else if (btn_id === "btn_badge_bg") {
            newStyle = "header"+headerTheme+" .container-text .badge { background-color: var("+color_code+") }\n";
            sub_string = ".badge { background-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* h1 main heading */
        else if (btn_id === "btn_h1_text") {
            newStyle = "header"+headerTheme+" h1 { color: var("+color_code+") }\n";
            sub_string = "h1 { color:"
            doUpdateArray(sub_string,newStyle);
        }

        /* h1 main heading highlight text */
        else if (btn_id === "btn_h1_highlight") {
            newStyle = "header"+headerTheme+" h1 span.highlight { color: var("+color_code+") }\n";
            sub_string = "h1 span.highlight";
            doUpdateArray(sub_string,newStyle);
        }

        /* h1 main heading bottom border */
        else if (btn_id === "btn_h1_border") {
            newStyle = "header"+headerTheme+" h1.heading-underline::after { background-color: var("+color_code+") }\n";
            sub_string = "h1.heading-underline";
            doUpdateArray(sub_string,newStyle);
        }

        /* h2 sub-heading */
        else if (btn_id === "btn_h2_text") {
            newStyle = "header"+headerTheme+" h2 { color: var("+color_code+") }\n";
            sub_string = "h2 { color:"
            doUpdateArray(sub_string,newStyle);
        }

        /* === Buttons === */

        /* Text colour: passive */
        else if (btn_id === "btn_text_passive_1") {
            // Get class of buttons
            newStyle = "header"+headerTheme+" .container-btn a.btn:nth-child(1):link,\n"+"header"+headerTheme+" .container-btn a.btn:nth-child(1):visited { color: var("+color_code+") }\n\n";
            sub_string = "a.btn:nth-child(1):visited { color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Text colour: active */
        else if (btn_id === "btn_text_active_1") {
            newStyle = "header"+headerTheme+" .container-btn a.btn:nth-child(1):focus,\n"+"header"+headerTheme+" .container-btn a.btn:nth-child(1):hover,\n"+"header"+headerTheme+" .container-btn a.btn:nth-child(1):active { color: var("+color_code+") }\n\n";
            sub_string = "a.btn:nth-child(1):active { color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Background colour: passive */
        else if (btn_id === "btn_bg_passive_1") {
            newStyle = "header"+headerTheme+" .container-btn a.btn:nth-child(1):link,\n"+"header"+headerTheme+" .container-btn a.btn:nth-child(1):visited { background-color: var("+color_code+") }\n\n";
            sub_string = "a.btn:nth-child(1):visited { background-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Background colour: active */
        else if (btn_id === "btn_bg_active_1") {
            newStyle = "header"+headerTheme+" .container-btn a.btn:nth-child(1):focus,\n"+"header"+headerTheme+" .container-btn a.btn:nth-child(1):hover,\n"+"header"+headerTheme+" .container-btn a.btn:nth-child(1):active { background-color: var("+color_code+") }\n\n";
            sub_string = "a.btn:nth-child(1):active { background-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Border colour: passive */
        else if (btn_id === "btn_border_passive_1") {
            newStyle = "header"+headerTheme+" .container-btn a.btn:nth-child(1):link,\n"+"header"+headerTheme+" .container-btn a.btn:nth-child(1):visited { border-color: var("+color_code+") }\n\n";
            sub_string = "a.btn:nth-child(1):visited { border-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Border colour: active */
        else if (btn_id === "btn_border_active_1") {
            newStyle = "header"+headerTheme+" .container-btn a.btn:nth-child(1):focus,\n"+"header"+headerTheme+" .container-btn a.btn:nth-child(1):hover,\n"+"header"+headerTheme+" .container-btn a.btn:nth-child(1):active { border-color: var("+color_code+") }\n\n";
            sub_string = "a.btn:nth-child(1):active { border-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Text colour: passive */
        else if (btn_id === "btn_text_passive_2") {
            // Get class of buttons
            newStyle = "header"+headerTheme+" .container-btn a.btn:nth-child(2):link,\n"+"header"+headerTheme+" .container-btn a.btn:nth-child(2):visited { color: var("+color_code+") }\n\n";
            sub_string = "a.btn:nth-child(2):visited { color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Text colour: active */
        else if (btn_id === "btn_text_active_2") {
            newStyle = "header"+headerTheme+" .container-btn a.btn:nth-child(2):focus,\n"+"header"+headerTheme+" .container-btn a.btn:nth-child(2):hover,\n"+"header"+headerTheme+" .container-btn a.btn:nth-child(2):active { color: var("+color_code+") }\n\n";
            sub_string = "a.btn:nth-child(2):active { color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Background colour: passive */
        else if (btn_id === "btn_bg_passive_2") {
            newStyle = "header"+headerTheme+" .container-btn a.btn:nth-child(2):link,\n"+"header"+headerTheme+" .container-btn a.btn:nth-child(2):visited { background-color: var("+color_code+") }\n\n";
            sub_string = "a.btn:nth-child(2):visited { background-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Background colour: active */
        else if (btn_id === "btn_bg_active_2") {
            newStyle = "header"+headerTheme+" .container-btn a.btn:nth-child(2):focus,\n"+"header"+headerTheme+" .container-btn a.btn:nth-child(2):hover,\n"+"header"+headerTheme+" .container-btn a.btn:nth-child(2):active { background-color: var("+color_code+") }\n\n";
            sub_string = "a.btn:nth-child(2):active { background-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Border colour: passive */
        else if (btn_id === "btn_border_passive_2") {
            newStyle = "header"+headerTheme+" .container-btn a.btn:nth-child(2):link,\n"+"header"+headerTheme+" .container-btn a.btn:nth-child(2):visited { border-color: var("+color_code+") }\n\n";
            sub_string = "a.btn:nth-child(2):visited { border-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Border colour: active */
        else if (btn_id === "btn_border_active_2") {
            newStyle = "header"+headerTheme+" .container-btn a.btn:nth-child(2):focus,\n"+"header"+headerTheme+" .container-btn a.btn:nth-child(2):hover,\n"+"header"+headerTheme+" .container-btn a.btn:nth-child(2):active { border-color: var("+color_code+") }\n\n";
            sub_string = "a.btn:nth-child(2):active { border-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Photos overlay textbox color */
        else if (btn_id === "btn_img_overlay_color_text") {
            newStyle = "header"+headerTheme+" figure .cols-img-textbox { color: var("+color_code+") }\n";
            sub_string = "figure .cols-img-textbox { color:";
            console.log("clicked");
            console.log("sub_string: "+sub_string);
            doUpdateArray(sub_string,newStyle);
        }

        /* Photos overlay textbox background color */
        else if (btn_id === "btn_img_overlay_color_bg") {
            newStyle = "header"+headerTheme+" figure .cols-img-textbox { background-color: var("+color_code+") }\n";
            sub_string = "figure .cols-img-textbox { background-color:";
            console.log("clicked");
            console.log("sub_string: "+sub_string);
            doUpdateArray(sub_string,newStyle);
        }

        style = document.createElement('style');
        iframe.contentWindow.document.head.appendChild(style);
        style.appendChild(document.createTextNode(newStyle));
        enableCSS();
    }

    function doUpdateArray(sub_string,newStyle) {
        if ( arrCSS.some(e => e.includes(sub_string)) ) {
            const arrPos =arrCSS.findIndex(e => e.includes(sub_string));
            arrCSS.splice(arrPos, 1);
            arrCSS.push(newStyle);
        }
        else {
            arrCSS.push(newStyle);
        }
    }

