# -*- coding: utf-8 -*-

from odoo import models, fields, api


class ResUsers(models.Model):
    _inherit = "res.users"

    chatter_position = fields.Selection([('sided', 'Sided'), ('bottom', 'Bottom')], default="sided", required=True, string="Chatter position")
