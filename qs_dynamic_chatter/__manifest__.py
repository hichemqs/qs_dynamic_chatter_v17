# -*- coding: utf-8 -*-
{
    'name': "Dynamic Chatter",
    'summary': "",
    'description': "",
    'author': "Qorelis Solutions",
    'website': "https://www.qorelis.com/",
    'license': 'Other proprietary',

    'category': 'Technical', 

    'version': '17.0.1.0.0',  

    'depends': [
        'web',
        'mail',  
    ],

    'data': [
        'views/res_users_form.xml',
        'views/web.xml',
    ],

    'assets': {
        'web.assets_backend': [
            'qs_dynamic_chatter/static/src/**/*',
        ],
    },

    'installable': True,
    'application': False, 
    'auto_install': False, 
}