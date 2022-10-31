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
        console.log("color_code: "+color_code)
        headerTheme = sessionStorage.getItem("headerTheme");
        /* header background */
        if (btn_id === "btn_header_bg") {
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
        else if (btn_id === "btn_passive_text_1") {
            // Get class of buttons
            newStyle = "header"+headerTheme+" .container-btn a.btn:nth-child(1):link,\n"+"header"+headerTheme+" .container-btn a.btn:nth-child(1):visited { color: var("+color_code+") }\n\n";
            sub_string = "a.btn:nth-child(1):visited { color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Text colour: active */
        else if (btn_id === "btn_active_text_1") {
            newStyle = "header"+headerTheme+" .container-btn a.btn:nth-child(1):focus,\n"+"header"+headerTheme+".container-btn a.btn:nth-child(1):hover,\n"+"header"+headerTheme+" .container-btn a.btn:nth-child(1):active { color: var("+color_code+") }\n\n";
            console.log(newStyle);
            sub_string = "a.btn:nth-child(2):active { color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Background colour: passive */
        else if (btn_id === "btn_passive_bg_1") {
            newStyle = "header"+headerTheme+" .container-btn a.btn:nth-child(1):link,\n"+"header"+headerTheme+" .container-btn a.btn:nth-child(1):visited { background-color: var("+color_code+") }\n\n";
            sub_string = "a.btn:nth-child(2):visited { background-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Background colour: active */
        else if (btn_id === "btn_bg_active_1") {
            newStyle = "header"+headerTheme+" .container-btn a.btn:nth-child(2):focus,\n"+"header"+headerTheme+" .container-btn a.btn:nth-child(2):hover,\n"+"header"+headerTheme+" .container-btn a.btn:nth-child(2):active { background-color: var("+color_code+") }\n\n";
            sub_string = "a.btn:nth-child(2):active { background-color";
            console.log(newStyle);
            doUpdateArray(sub_string,newStyle);
        }

        /* Border colour: passive */
        else if (btn_id === "btn_border_passive_1") {
            newStyle = "header"+headerTheme+" .container-btn a.btn:nth-child(2):link,\n"+"header"+headerTheme+" .container-btn a.btn:nth-child(2):visited { border-color: var("+color_code+") }\n\n";
            sub_string = "a.btn:nth-child(2):visited { border-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Border colour: active */
        else if (btn_id === "btn_border_active_1") {
            newStyle = "header"+headerTheme+" .container-btn a.btn:nth-child(2):focus,\n"+"header"+headerTheme+" .container-btn a.btn:nth-child(2):hover,\n"+"header"+headerTheme+" .container-btn a.btn:nth-child(2):active { border-color: var("+color_code+") }\n\n";
            sub_string = "a.btn:nth-child(2):active { border-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Text colour: passive */
        else if (btn_id === "btn_passive_text_2") {
            // Get class of buttons
            newStyle = "header"+headerTheme+" .container-btn a.btn:nth-child(2):link,\n"+"header"+headerTheme+" .container-btn a.btn:nth-child(2):visited { color: var("+color_code+") }\n\n";
            sub_string = "a.btn:nth-child(2):visited { color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Text colour: active */
        else if (btn_id === "btn_active_text_2") {
            newStyle = "header"+headerTheme+" .container-btn a.btn:nth-child(2):focus,\n"+"header"+headerTheme+" a.btn:nth-child(2):hover,\n"+"header"+headerTheme+" .container-btn a.btn:nth-child(2):active { color: var("+color_code+") }\n\n";
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

