/** @odoo-module **/

import {FormCompiler} from "@web/views/form/form_compiler";
import {patch} from "@web/core/utils/patch";
import {append, setAttributes} from "@web/core/utils/xml";
import {SIZES} from "@web/core/ui/ui_service";


patch(FormCompiler.prototype, {
    /**
     * @override
     */
    compile(node, params) {
        const res = super.compile(node, params);
        const webClientViewAttachmentViewHookXml = res.querySelector(
            ".o_attachment_preview"
        );
        const chatterContainerHookXml = res.querySelector(
            ".o-mail-Form-chatter:not(.o-isInFormSheetBg)"
        );
        if (!chatterContainerHookXml) {
            return res;
        }
        const chatterContainerXml = chatterContainerHookXml.querySelector(
            "t[t-component='__comp__.mailComponents.Chatter']"
        );
        const formSheetBgXml = res.querySelector(".o_form_sheet_bg");
        const parentXml = formSheetBgXml && formSheetBgXml.parentNode;
        if (!parentXml) {
            return res;
        }

        if (odoo.chatter_position === "bottom") {
            if (webClientViewAttachmentViewHookXml) {
                const sheetBgChatterContainerHookXml = res.querySelector(
                    ".o-mail-Form-chatter.o-isInFormSheetBg"
                );
                setAttributes(sheetBgChatterContainerHookXml, {
                    "t-if": "true",
                });
                setAttributes(chatterContainerHookXml, {
                    "t-if": "false",
                });
            } else {
                setAttributes(chatterContainerXml, {
                    isInFormSheetBg: "true",
                    isChatterAside: "false",
                });
                chatterContainerHookXml.classList.add("o-isInFormSheetBg");
                setAttributes(chatterContainerHookXml, {
                    "t-attf-class": "mt-4 mt-md-0",
                });
                parentXml.removeChild(chatterContainerHookXml)
                append(formSheetBgXml, chatterContainerHookXml)
            }
        }
        return res;
    },
});