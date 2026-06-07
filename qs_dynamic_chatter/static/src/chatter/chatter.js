/** @odoo-module **/

import { _t } from '@web/core/l10n/translation';
import { patch } from '@web/core/utils/patch';
import { Chatter } from "@mail/chatter/web_portal/chatter";
import { useBus } from '@web/core/utils/hooks';
import { onMounted, onWillStart } from "@odoo/owl";
import { session } from "@web/session";


patch(Chatter.prototype, {
    setup() {
        super.setup();

        onMounted(() => {
            const hide_chatter = document.getElementById('hide_chatter');
            console.log(hide_chatter)
            if (!!hide_chatter && odoo.chatter_position !== "bottom") {
                hide_chatter.classList.remove('d-none');
            }
        });
    },
});