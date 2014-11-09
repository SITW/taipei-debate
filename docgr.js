var debate= require("./texts");

module.exports= {
    // necessary, point to your layout (handlebars)
    "layout": "./templates/layout.hbs",
    "filename": "index.html",

    // necessary, values render into handlbars
    "basic": {
        // the objects are optional, according to your layout (render by handlebars).
        "title": "台北市長辯論",
        "og_title": "台北市長辯論",
        "og_site_name": "台北市長辯論",
        "og_url": "docgr.datagarage.io",
        "og_description": "This is a one page webpage generater",
        "og_image": "./image/header-logo-xs.png",
        "charset": "UTF-8",
        "author": "wwwy3y3",
        "viewport": "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
        "shortcut_icon": "https://dl.dropboxusercontent.com/u/28663689/dg/favicon%20%281%29.ico",

        "scripts": [
            "https://code.jquery.com/jquery-1.11.0.min.js"
        ],

        "fbjs": "./fb.js",

        "stylesheets": [
            "http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css",
            "./index.css"
        ],

        "logo_img": "./image/header-logo-xs.png",

        "github_link": "https://github.com/DataGarage/open-data-license",

        "nav": [
            {
                "title": "主持人開場",
                "anchor": "start"
            },
            {
                "title": "柯文哲申論",
                "anchor": "kp-intro",
            },

            {
                "title": "連勝文申論",
                "anchor": "sean-intro"
            },

            {
                "title": "公民團體提問",
                "anchor": "qanda",
                "sub": [
                    {
                        "title": "台灣勞工陣線協會副理事長：廖慧芳",
                        "anchor": "liou",
                    },
                    {
                        "title": "社團法人台灣競爭力論壇理事長：彭錦鵬",
                        "anchor": "pang-ching",
                    },
                    {
                        "title": "台北市青年創業會理事長：江梅提",
                        "anchor": "chiang",
                    },
                    {
                        "title": "台灣防暴聯盟：張錦麗",
                        "anchor": "chang",
                    },
                    {
                        "title": "主婦聯盟環境保護基金會：賴曉芬",
                        "anchor": "lai",
                    },
                    {
                        "title": "都改組織：彭陽凱",
                        "anchor": "pang-yang",
                    }
                ]
            },

            {
                "title": "交叉詰問一",
                "anchor": "cross1"
            },

            {
                "title": "交叉詰問二",
                "anchor": "cross2"
            },

            {
                "title": "結論",
                "anchor": "conclusion",
                "sub": [
                    {
                        "title": "連勝文結論",
                        "anchor": "con-sean"

                    },
                    {
                        "title": "柯文哲結論",
                        "anchor": "con-kp"
                    }
                ]
            }

        ],

        "start": debate.start,

        "intro": debate.intro,

        "qanda": debate.qanda,

        "cross": debate.cross,

        "conclusion": debate.conclusion
    }
}