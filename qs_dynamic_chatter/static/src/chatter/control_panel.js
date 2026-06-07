/** @odoo-module **/

import { patch } from '@web/core/utils/patch';
import { useService } from '@web/core/utils/hooks';
import { useState } from '@odoo/owl';

import { ControlPanel } from '@web/search/control_panel/control_panel';

patch(ControlPanel.prototype, {

    setup() {
        super.setup();
        this.chatterState = useState({
            isChatterVisible: this.isChatterVisible()
        });

        if (!this.chatterState.isChatterVisible){
            document.body.classList.add('noaside');
        }
    },

    async onToggleChatter() {
        await this.env.bus.trigger('aside_fold');
        this.chatterState.isChatterVisible = !this.chatterState.isChatterVisible;
        this.setChatterVisible()
    },

    setChatterVisible(){
        localStorage.setItem("ChatterVisiblity", this.chatterState.isChatterVisible);
    },

    isChatterVisible() {
        return localStorage.getItem("ChatterVisiblity") === "true";
    },
});
