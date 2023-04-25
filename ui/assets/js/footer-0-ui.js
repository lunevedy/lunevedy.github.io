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

        for (const rb of rbs) {
            if (rb.checked) {
                color_code = rb.value;
                break;
            }
        }

        /* Footer background */
        if (btn_id === "btn_footer_bg") {
            newStyle = "footer"+footerTheme+ " { background-color: var("+color_code+") }\n";
            sub_string = "footer"+footerTheme+ " { background-color: ";
        }

        /* h2 main heading */
        else if (btn_id === "btn_h2_color") {
            newStyle = "footer"+footerTheme+ " > h2 { color: var("+color_code+") }\n";
            sub_string = "footer"+footerTheme+" > h2 { color:"
        }

        /* h3 sub heading */
        else if (btn_id === "btn_h3_color") {
            newStyle = "footer"+footerTheme+ " > h3 { color: var("+color_code+") }\n";
            sub_string = "footer"+footerTheme+ " > h3 {";
        }

        /* ==== COPYRIGHT ==== */
        else if (btn_id === "btn_copyright_bg") {
            newStyle = "footer"+footerTheme+" .copyright { background-color: var("+color_code+") }\n";
            sub_string = "footer"+footerTheme+" .copyright { background-color:";
        }
        
        else if (btn_id === "btn_copyright_text") {
            newStyle = "footer"+footerTheme+" .copyright p { color: var("+color_code+") }\n";
            sub_string = "footer"+footerTheme+" .copyright p { color:";
        }        

        /* ====== HYPERLINKS ====== */

        /* Links: passive */
        else if (btn_id === "btn_link_text_passive") {
             newStyle = "footer"+footerTheme+" > ul.footer-links li a:link,\nfooter"+footerTheme+" > ul.footer-links li a:visited { color: var("+color_code+") }\n\n";
             sub_string = "ul.footer-links li a:visited { color:";
        }

        /* Links: active */
        else if (btn_id === "btn_link_text_active") {
            newStyle = "footer"+footerTheme+" > ul.footer-links li a:focus,\nfooter"+footerTheme+" > ul.footer-links li a:hover,\nfooter"+footerTheme+" > ul.footer-links li a:active { color: var("+color_code+") }\n\n";
            sub_string = "ul.footer-links li a:active { color:";
        }

        /* Underlines: passive */
        else if (btn_id === "btn_link_underline_passive") {
            newStyle = "footer"+footerTheme+" > ul.footer-links li a:link,\nfooter"+footerTheme+" > ul.footer-links li a:visited { text-decoration-color: var("+color_code+") }\n\n";
            sub_string = "ul.footer-links li a:visited { text-decoration-color:";
        }

        /* UNderlines: active */
        else if (btn_id === "btn_link_underline_active") {
            newStyle = "footer"+footerTheme+" > ul.footer-links li a:focus,\nfooter"+footerTheme+" > ul.footer-links li a:hover,\nfooter"+footerTheme+" > ul.footer-links li a:active { text-decoration-color: var("+color_code+") }\n\n";
            sub_string = "ul.footer-links li a:active { text-decoration-color:";
        }

        /* ====== ICONS ====== */

        /* Icons: passive */
        else if (btn_id === "btn_icon_passive") {
            newStyle = "footer"+footerTheme+" > ul.footer-icons li a:link i,\nfooter"+footerTheme+" > ul.footer-icons li a:visited i { color: var("+color_code+") }\n\n";
            sub_string = "ul.footer-icons li a:visited i { color:";
       }

       /* Icons: active */
       else if (btn_id === "btn_icon_active") {
            newStyle = "footer"+footerTheme+" > ul.footer-icons li a:focus i,\nfooter"+footerTheme+" > ul.footer-icons li a:hover i,\nfooter"+footerTheme+" > ul.footer-icons li a:active i { color: var("+color_code+") }\n\n";
            sub_string = "ul.footer-icons li a:active i { color:";
       }
        // console.log(newStyle);
        doUpdateArray(sub_string,newStyle);
    }

