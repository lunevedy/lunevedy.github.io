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

        navTheme = sessionStorage.getItem("navTheme");
        headerTheme = sessionStorage.getItem("headerTheme");

        /* MENUS */

        /* Desktop/default mobile */
        if (btn_id === "btn_bg_navbar") {
            newStyle = "nav"+navTheme+" { background-color: var("+color_code+") }\n";
            sub_string = "nav"+navTheme+" { background-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Desktop/mobile default: passive */
        else if (btn_id === "menu_link_text_passive") {
            newStyle = "nav"+navTheme+" .container-menu-links ul.links-wrapper li a:link,\nnav"+navTheme+" .container-menu-links ul.links-wrapper li a:visited { color: var("+color_code+") }\n";
            sub_string = "nav"+navTheme+" .container-menu-links ul.links-wrapper li a:visited { color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Desktop/mobile default: active */
        else if (btn_id === "menu_link_text_active") {
            newStyle = "nav"+navTheme+" .container-menu-links ul.links-wrapper li a:focus,\nnav"+navTheme+" .container-menu-links ul.links-wrapper li a:hover,\nnav"+navTheme+" .container-menu-links ul.links-wrapper li a:active { color: var("+color_code+") }\n";
            sub_string = "nav"+navTheme+" .container-menu-links ul.links-wrapper li a:active { color";
            doUpdateArray(sub_string,newStyle);
        }

        /* ======= DESKTOP ======== */
        /* CTA button text colour: passive */
        else if (btn_id === "btn_a_cta_text_passive") {
            newStyle = "nav"+navTheme+" .container-menu a#btn-cta:link,\nnav"+navTheme+" .container-menu a#btn-cta:visited { color: var("+color_code+") }\n";
            sub_string = "a#btn-cta:visited { color";
            doUpdateArray(sub_string,newStyle);
        }

        /* CTA button text colour: active */
       else if (btn_id === "btn_a_cta_text_active") {
            newStyle = "nav"+navTheme+" .container-menu a#btn-cta:focus,\nnav"+navTheme+" .container-menu a#btn-cta:hover,\n.container-menu a#btn-cta:active { color: var("+color_code+") }\n";
            sub_string = "a#btn-cta:active { color";
            doUpdateArray(sub_string,newStyle);
        }

        /* CTA button background colour: passive */
        else if (btn_id === "btn_a_cta_bg_passive") {
            newStyle = "nav"+navTheme+" .container-menu a#btn-cta:link,\nnav"+navTheme+" .container-menu a#btn-cta:visited { background-color: var("+color_code+") }\n";
            sub_string = "a#btn-cta:visited { background-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* CTA button background colour: active */
        else if (btn_id === "btn_a_cta_bg_active") {
            newStyle = "nav"+navTheme+" .container-menu a#btn-cta:focus,\nnav"+navTheme+" .container-menu a#btn-cta:hover,\n.container-menu a#btn-cta:active { background-color: var("+color_code+") }\n";
            sub_string = "a#btn-cta:active { background-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* CTA button border colour: passive */
        else if (btn_id === "btn_a_cta_border_passive") {
            newStyle = "nav"+navTheme+" .container-menu a#btn-cta:link,\nnav"+navTheme+" .container-menu a#btn-cta:visited { border-color: var("+color_code+") }\n";
            sub_string = "a#btn-cta:visited { border-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* CTA button border colour: active */
        else if (btn_id === "btn_a_cta_border_active") {
            newStyle = "nav"+navTheme+" .container-menu a#btn-cta:focus,\nnav"+navTheme+" .container-menu a#btn-cta:hover,\n.container-menu a#btn-cta:active { border-color: var("+color_code+") }\n";
            sub_string = "a#btn-cta:active";
            doUpdateArray(sub_string,newStyle);
        }


        /* ======= MOBILE ======== */

        /* CTA mobile button text colour: passive */
        else if (btn_id === "btn_a_cta_mobile_text_passive") {
            newStyle = "nav"+navTheme+" ul.links-wrapper.active a#btn-cta:link,\nnav"+navTheme+" ul.links-wrapper.active a#btn-cta:visited { color: var("+color_code+") }\n";
            sub_string = "ul.links-wrapper.active a#btn-cta:visited { color";
            doUpdateArray(sub_string,newStyle);
        }

        /* CTA mobile button text colour: active */
       else if (btn_id === "btn_a_cta_mobile_text_active") {
            newStyle = "nav"+navTheme+" ul.links-wrapper.active a#btn-cta:focus,\nnav"+navTheme+" ul.links-wrapper.active a#btn-cta:hover,\nnav"+navTheme+" ul.links-wrapper.active a#btn-cta:active { color: var("+color_code+") }\n";
            sub_string = "ul.links-wrapper.active a#btn-cta:active { color";
            doUpdateArray(sub_string,newStyle);
        }

        /* CTA mobile button background colour: passive */
        else if (btn_id === "btn_a_cta_mobile_bg_passive") {
            newStyle = "nav"+navTheme+" ul.links-wrapper.active a#btn-cta:link,\nnav"+navTheme+" ul.links-wrapper.active a#btn-cta:visited { background-color: var("+color_code+") }\n";
            sub_string = "ul.links-wrapper.active a#btn-cta:visited { background-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* CTA mobile button background colour: active */
        else if (btn_id === "btn_a_cta_mobile_bg_active") {
            newStyle = "nav"+navTheme+" ul.links-wrapper.active a#btn-cta:focus,\nnav"+navTheme+" ul.links-wrapper.active a#btn-cta:hover,\nnav"+navTheme+" ul.links-wrapper.active a#btn-cta:active { background-color: var("+color_code+") }\n";
            sub_string = "ul.links-wrapper.active a#btn-cta:active { background-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* CTA mobile button border colour: passive */
        else if (btn_id === "btn_a_mobile_cta_border_passive") {
            newStyle = "nav"+navTheme+" ul.links-wrapper.active a#btn-cta:link,\nnav"+navTheme+" ul.links-wrapper.active a#btn-cta:visited { border-color: var("+color_code+") }\n";
            sub_string = "ul.links-wrapper.active a#btn-cta:visited { border-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* CTA mobile button border colour: active */
        else if (btn_id === "btn_a_mobile_cta_border_active") {
            newStyle = "nav"+navTheme+" ul.links-wrapper.active a#btn-cta:focus,\nnav"+navTheme+" ul.links-wrapper.active a#btn-cta:hover,\nnav"+navTheme+" ul.links-wrapper.active a#btn-cta:active { border-color: var("+color_code+") }\n";
            sub_string = "ul.links-wrapper.active a#btn-cta:active";
            doUpdateArray(sub_string,newStyle);
        }

        /* Mobile background */
        else if (btn_id === "btn_bg_menu_mobile") {
            newStyle = "nav"+navTheme+" ul.links-wrapper.active { background-color: var("+color_code+") }\n";
            sub_string = "nav"+navTheme+" ul.links-wrapper.active { background-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Mobile links */
        else if (btn_id === "menu_mobile_link_text_passive") {
            newStyle = "nav"+navTheme+" ul.links-wrapper.active li a:link,\nnav"+navTheme+" ul.links-wrapper.active li a:visited { color: var("+color_code+")}\n";
            doUpdateArray(sub_string,newStyle);
            sub_string = "ul.links-wrapper.active li a:visited { color:";
        }

        else if (btn_id === "menu_mobile_link_text_active") {
            newStyle = "nav"+navTheme+" ul.links-wrapper.active li a:focus,\nnav"+navTheme+" ul.links-wrapper.active li a:hover,\nnav"+navTheme+" ul.links-wrapper.active li a:active { color: var("+color_code+") }\n";
            sub_string = "ul.links-wrapper.active li a:active { color:";
        }





        /* On-scroll only */
        else if (btn_id === "btn_bg_onscroll_menu") {
            newStyle = ".container-menu.menu-sticky.menu-desktop.menu-on-scroll,\n.container-menu.menu-sticky.menu-mobile.menu-on-scroll,\n.container-menu.menu-sticky.menu-mobile ul.mobile-display { background-color: var("+color_code+") }\n";
            sub_string = "container-menu.menu-sticky.menu-mobile.menu-on-scroll ul.mobile-display { background-color";
            doUpdateArray(sub_string,newStyle);
        }


        /* Mobile-only: passive */
        else if (btn_id === "btn_link_mobile_passive_text") {
            newStyle = ".container-menu.menu-mobile ul.mobile-display li a:link,\n.container-menu.menu-mobile ul.mobile-display li a:visited { color: var("+color_code+") }\n";
            sub_string = "container-menu.menu-mobile li a:visited { color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Mobile-only: active */
        else if (btn_id === "btn_link_mobile_active_text") {
            newStyle = ".container-menu.menu-mobile ul.mobile-display li a:focus,\n.container-menu.menu-mobile ul.mobile-display li a:hover,\n.container-menu.menu-mobile ul.mobile-display li a:active { color: var("+color_code+") }\n";
            sub_string = "container-menu.menu-mobile ul.mobile-display li a:active";
            doUpdateArray(sub_string,newStyle);
        }

        /* On-scroll: passive */
        else if (btn_id === "btn_link_onscroll_passive") {
            newStyle = ".container-menu.menu-on-scroll ul li a:link,\n.container-menu.menu-on-scroll ul li a:visited { color: var("+color_code+") }\n";
            sub_string = "container-menu.menu-on-scroll ul li a:visited { color";
            doUpdateArray(sub_string,newStyle);
        }

        /* On-scroll: active */
        else if (btn_id === "btn_link_onscroll_active") {
            newStyle = ".container-menu.menu-on-scroll ul li a:focus,\n.container-menu.menu-on-scroll ul li a:hover,\n.container-menu.menu-on-scroll ul li a:active { color: var("+color_code+") }\n";
            sub_string = "container-menu.menu-on-scroll ul li a:active { color";
            doUpdateArray(sub_string,newStyle);
        }


        /* HAMBURGER ICON */

        /* Non-sticky */
        else if (btn_id === "btn_hamburger") {
            newStyle = ".container-menu .item-icon .bar1, .container-menu .item-icon .bar2, .container-menu .item-icon .bar3 { background-color: var("+color_code+") }\n";
            sub_string = ".container-menu .item-icon .bar1";
            doUpdateArray(sub_string,newStyle);
        }

        /* Sticky */
        else if (btn_id === "btn_hamburger_sticky") {
            newStyle = ".container-menu.menu-on-scroll .item-icon .bar1, .container-menu.menu-on-scroll .item-icon .bar2, .container-menu.menu-on-scroll .item-icon .bar3 { background-color: var("+color_code+") }\n";
            sub_string = "container-menu.menu-on-scroll .item-icon .bar1";
            doUpdateArray(sub_string,newStyle);
        }


        /* header background */
        else if (btn_id === "btn_header_bg") {
            newStyle = "header"+headerTheme+" { background-color: var("+color_code+") }\n";
            sub_string = "header"+headerTheme+" { background-color: ";
            console.log("newStyle: "+newStyle);
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
            newStyle = "header"+headerTheme+" .container-btn a.btn:nth-child(1):focus,\n"+"header"+headerTheme+".container-btn a.btn:nth-child(1):hover,\n"+"header"+headerTheme+" .container-btn a.btn:nth-child(1):active { color: var("+color_code+") }\n\n";
            console.log(newStyle);
            sub_string = "a.btn:nth-child(1):active { color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Background colour: passive */
        else if (btn_id === "btn_bg_passive_1") {
            newStyle = "header"+headerTheme+" .container-btn a.btn:nth-child(1):link,\n"+"header"+headerTheme+" .container-btn a.btn:nth-child(1):visited { background-color: var("+color_code+") }\n\n";
            console.log(newStyle)
            sub_string = "a.btn:nth-child(1):visited { background-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Background colour: active */
        else if (btn_id === "btn_bg_active_1") {
            newStyle = "header"+headerTheme+" .container-btn a.btn:nth-child(1):focus,\n"+"header"+headerTheme+" .container-btn a.btn:nth-child(1):hover,\n"+"header"+headerTheme+" .container-btn a.btn:nth-child(1):active { background-color: var("+color_code+") }\n\n";
            sub_string = "a.btn:nth-child(1):active { background-color";
            console.log(newStyle);
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
            newStyle = "header"+headerTheme+" .container-btn a.btn:nth-child(2):focus,\n"+"header"+headerTheme+" a.btn:nth-child(2):hover,\n"+"header"+headerTheme+" .container-btn a.btn:nth-child(2):active { background-color: var("+color_code+") }\n\n";
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

