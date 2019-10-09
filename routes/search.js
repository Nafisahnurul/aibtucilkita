
var express = require('express'),
    router = express.Router(),
    Engine = require('json-rules-engine');

/*router.get("/",function (req,res) {
    res.render('search.ejs',{title: "Tugas AIB"});
});*/

router.post("/result", function(req,res){
    let bud = req.body.budget;
    let us = req.body.use;
    let tp = req.body.type;
    let sc = req.body.scsize;
    let engine = new Engine.Engine();

    let rulesNone = {
        conditions: {
            any: [
                {all : [
                    {
                    fact: 'budget',
                    operator: 'equal',
                    value: 'low'
                    }, {
                    fact: 'use',
                    operator: 'equal',
                    value: 'multimedia'
                    }
                ]},
                {all : [
                    {
                    fact: 'budget',
                    operator: 'equal',
                    value: 'low'
                    }, {
                    fact: 'use',
                    operator: 'equal',
                    value: 'business'
                    }
                ]},
                {all : [
                    {
                    fact: 'budget',
                    operator: 'equal',
                    value: 'low'
                    }, {
                    fact: 'use',
                    operator: 'equal',
                    value: 'developer'
                    }
                ]},
                {all : [
                    {
                    fact: 'budget',
                    operator: 'equal',
                    value: 'low'
                    }, {
                    fact: 'use',
                    operator: 'equal',
                    value: 'gaming'
                    }
                ]},
                {all : [
                    {
                    fact: 'budget',
                    operator: 'equal',
                    value: 'mid'
                    }, {
                    fact: 'use',
                    operator: 'equal',
                    value: 'gaming'
                    }
                ]},
                {all : [
                    {
                    fact: 'budget',
                    operator: 'equal',
                    value: 'low'
                    }, {
                    fact: 'scsize',
                    operator: 'equal',
                    value: 'l'
                    }
                ]},
                {all : [
                    {
                    fact: 'budget',
                    operator: 'equal',
                    value: 'low'
                    }, {
                    fact: 'use',
                    operator: 'equal',
                    value: 'socdoc'
                    }, {
                    fact: 'type',
                    operator: 'equal',
                    value: 'two'
                    },{
                    fact: 'scsize',
                    operator: 'equal',
                    value: 'm'
                    }
                ]},
                {all : [
                    {
                    fact: 'budget',
                    operator: 'equal',
                    value: 'mid'
                    }, {
                    fact: 'type',
                    operator: 'equal',
                    value: 'two'
                    },{
                    fact: 'scsize',
                    operator: 'equal',
                    value: 'l'
                    }
                ]},
                {all : [
                    {
                    fact: 'budget',
                    operator: 'equal',
                    value: 'high'
                    }, {
                    fact: 'type',
                    operator: 'equal',
                    value: 'two'
                    },{
                    fact: 'scsize',
                    operator: 'equal',
                    value: 'l'
                    }
                ]},
                {all : [
                    {
                    fact: 'budget',
                    operator: 'equal',
                    value: 'high'
                    }, {
                    fact: 'use',
                    operator: 'equal',
                    value: 'gaming'
                    }, {
                    fact: 'type',
                    operator: 'equal',
                    value: 'two'
                    }
                ]},
                {all : [
                    {
                    fact: 'budget',
                    operator: 'equal',
                    value: 'high'
                    }, {
                    fact: 'use',
                    operator: 'equal',
                    value: 'developer'
                    }, {
                    fact: 'type',
                    operator: 'equal',
                    value: 'two'
                    }
                ]},
                {all : [
                    {
                    fact: 'budget',
                    operator: 'equal',
                    value: 'high'
                    }, {
                    fact: 'use',
                    operator: 'equal',
                    value: 'multimedia'
                    }, {
                    fact: 'type',
                    operator: 'equal',
                    value: 'two'
                    },{
                    fact: 'scsize',
                    operator: 'equal',
                    value: 's'
                    }
                ]},
                {all : [
                    {
                    fact: 'budget',
                    operator: 'equal',
                    value: 'high'
                    }, {
                    fact: 'use',
                    operator: 'equal',
                    value: 'business'
                    }, {
                    fact: 'type',
                    operator: 'equal',
                    value: 'two'
                    },{
                    fact: 'scsize',
                    operator: 'equal',
                    value: 's'
                    }
                ]}                
            ]
        },
        event: {
          type: 'res0',
          params: {
            message: 'Tidak ada rekomendasi yang cocok dengan pencarian anda'
          }
        }
    }
    let rule1 = {
        conditions: {    
            all : [
                {
                fact: 'budget',
                operator: 'equal',
                value: 'low'
                }, {
                fact: 'use',
                operator: 'equal',
                value: 'socdoc'
                }, {
                fact: 'type',
                operator: 'equal',
                value: 'laptop'
                },{
                fact: 'scsize',
                operator: 'equal',
                value: 's'
                }
            ]
        },
        event: {
          type: 'res1',
          params: {
            message: 'Acer Aspire One 722'
          }
        }
    }
    let rule2 = {
        conditions: {    
            all : [
                {
                fact: 'budget',
                operator: 'equal',
                value: 'low'
                }, {
                fact: 'use',
                operator: 'equal',
                value: 'socdoc'
                }, {
                fact: 'type',
                operator: 'equal',
                value: 'laptop'
                },{
                fact: 'scsize',
                operator: 'equal',
                value: 'm'
                }
            ]
        },
        event: {
          type: 'res2',
          params: {
            message: 'Dell Latitude E5410'
          }
        }
    }
    let rule3 = {
        conditions: {    
            all : [
                {
                fact: 'budget',
                operator: 'equal',
                value: 'low'
                }, {
                fact: 'use',
                operator: 'equal',
                value: 'socdoc'
                }, {
                fact: 'type',
                operator: 'equal',
                value: 'two'
                },{
                fact: 'scsize',
                operator: 'equal',
                value: 's'
                }
            ]
        },
        event: {
          type: 'res3',
          params: {
            message: 'HP ElitePad 900 G'
          }
        }
    }
    let rule4 = {
        conditions: {    
            all : [
                {
                fact: 'budget',
                operator: 'equal',
                value: 'mid'
                }, {
                fact: 'use',
                operator: 'equal',
                value: 'multimedia'
                }, {
                fact: 'type',
                operator: 'equal',
                value: 'laptop'
                },{
                fact: 'scsize',
                operator: 'equal',
                value: 's'
                }
            ]
        },
        event: {
          type: 'res4',
          params: {
            message: 'HP 11-AD107TU'
          }
        }
    }
    let rule5 = {
        conditions: {    
            all : [
                {
                fact: 'budget',
                operator: 'equal',
                value: 'mid'
                }, {
                fact: 'use',
                operator: 'equal',
                value: 'multimedia'
                }, {
                fact: 'type',
                operator: 'equal',
                value: 'laptop'
                },{
                fact: 'scsize',
                operator: 'equal',
                value: 'm'
                }
            ]
        },
        event: {
          type: 'res5',
          params: {
            message: 'HP14 BP030TX'
          }
        }
    }
    let rule6 = {
        conditions: {    
            all : [
                {
                fact: 'budget',
                operator: 'equal',
                value: 'mid'
                }, {
                fact: 'use',
                operator: 'equal',
                value: 'multimedia'
                }, {
                fact: 'type',
                operator: 'equal',
                value: 'laptop'
                },{
                fact: 'scsize',
                operator: 'equal',
                value: 'l'
                }
            ]
        },
        event: {
          type: 'res6',
          params: {
            message: 'Acer Aspire 5'
          }
        }
    } 
    let rule7 = {
        conditions: {    
            all : [
                {
                fact: 'budget',
                operator: 'equal',
                value: 'mid'
                }, {
                fact: 'use',
                operator: 'equal',
                value: 'multimedia'
                }, {
                fact: 'type',
                operator: 'equal',
                value: 'two'
                },{
                fact: 'scsize',
                operator: 'equal',
                value: 's'
                }
            ]
        },
        event: {
          type: 'res7',
          params: {
            message: 'YUNTAB GA116C'
          }
        }
    }
    let rule8 = {
        conditions: {    
            all : [
                {
                fact: 'budget',
                operator: 'equal',
                value: 'mid'
                }, {
                fact: 'use',
                operator: 'equal',
                value: 'multimedia'
                }, {
                fact: 'type',
                operator: 'equal',
                value: 'two'
                },{
                fact: 'scsize',
                operator: 'equal',
                value: 'm'
                }
            ]
        },
        event: {
          type: 'res8',
          params: {
            message: 'HP Envy 13 X360'
          }
        }
    }
    let rule9 = {
        conditions: {    
            all : [
                {
                fact: 'budget',
                operator: 'equal',
                value: 'mid'
                }, {
                fact: 'use',
                operator: 'equal',
                value: 'business'
                }, {
                fact: 'type',
                operator: 'equal',
                value: 'laptop'
                },{
                fact: 'scsize',
                operator: 'equal',
                value: 's'
                }
            ]
        },
        event: {
          type: 'res9',
          params: {
            message: 'Asus X200MA'
          }
        }
    }
    let rule10 = {
        conditions: {    
            all : [
                {
                fact: 'budget',
                operator: 'equal',
                value: 'mid'
                }, {
                fact: 'use',
                operator: 'equal',
                value: 'business'
                }, {
                fact: 'type',
                operator: 'equal',
                value: 'laptop'
                },{
                fact: 'scsize',
                operator: 'equal',
                value: 'm'
                }
            ]
        },
        event: {
          type: 'res10',
          params: {
            message: 'Acer Swift 3'
          }
        }
    }
    let rule11 = {
        conditions: {    
            all : [
                {
                fact: 'budget',
                operator: 'equal',
                value: 'mid'
                }, {
                fact: 'use',
                operator: 'equal',
                value: 'business'
                }, {
                fact: 'type',
                operator: 'equal',
                value: 'laptop'
                },{
                fact: 'scsize',
                operator: 'equal',
                value: 'l'
                }
            ]
        },
        event: {
          type: 'res11',
          params: {
            message: 'Dell Inspiron 3567'
          }
        }
    }
    let rule12 = {
        conditions: {    
            all : [
                {
                fact: 'budget',
                operator: 'equal',
                value: 'mid'
                }, {
                fact: 'use',
                operator: 'equal',
                value: 'business'
                }, {
                fact: 'type',
                operator: 'equal',
                value: 'two'
                },{
                fact: 'scsize',
                operator: 'equal',
                value: 's'
                }
            ]
        },
        event: {
          type: 'res12',
          params: {
            message: 'Teclast X4'
          }
        }
    }
    let rule13 = {
        conditions: {    
            all : [
                {
                fact: 'budget',
                operator: 'equal',
                value: 'mid'
                }, {
                fact: 'use',
                operator: 'equal',
                value: 'business'
                }, {
                fact: 'type',
                operator: 'equal',
                value: 'two'
                },{
                fact: 'scsize',
                operator: 'equal',
                value: 'm'
                }
            ]
        },
        event: {
          type: 'res13',
          params: {
            message: 'HP Pro X2-410 G1'
          }
        }
    }
    let rule14 = {
        conditions: {    
            all : [
                {
                fact: 'budget',
                operator: 'equal',
                value: 'mid'
                }, {
                fact: 'use',
                operator: 'equal',
                value: 'developer'
                }, {
                fact: 'type',
                operator: 'equal',
                value: 'laptop'
                },{
                fact: 'scsize',
                operator: 'equal',
                value: 's'
                }
            ]
        },
        event: {
          type: 'res14',
          params: {
            message: 'ASUS X407UB'
          }
        }
    }
    let rule15 = {
        conditions: {    
            all : [
                {
                fact: 'budget',
                operator: 'equal',
                value: 'mid'
                }, {
                fact: 'use',
                operator: 'equal',
                value: 'developer'
                }, {
                fact: 'type',
                operator: 'equal',
                value: 'laptop'
                },{
                fact: 'scsize',
                operator: 'equal',
                value: 'm'
                }
            ]
        },
        event: {
          type: 'res15',
          params: {
            message: 'ASUS A456UR'
          }
        }
    }
    let rule16 = {
        conditions: {    
            all : [
                {
                fact: 'budget',
                operator: 'equal',
                value: 'mid'
                }, {
                fact: 'use',
                operator: 'equal',
                value: 'developer'
                }, {
                fact: 'type',
                operator: 'equal',
                value: 'laptop'
                },{
                fact: 'scsize',
                operator: 'equal',
                value: 'l'
                }
            ]
        },
        event: {
          type: 'res16',
          params: {
            message: 'Lenovo Ideapad 310'
          }
        }
    }
    let rule17 = {
        conditions: {    
            all : [
                {
                fact: 'budget',
                operator: 'equal',
                value: 'mid'
                }, {
                fact: 'use',
                operator: 'equal',
                value: 'developer'
                }, {
                fact: 'type',
                operator: 'equal',
                value: 'two'
                },{
                fact: 'scsize',
                operator: 'equal',
                value: 's'
                }
            ]
        },
        event: {
          type: 'res17',
          params: {
            message: 'Azpen X1330'
          }
        }
    }
    let rule18 = {
        conditions: {    
            all : [
                {
                fact: 'budget',
                operator: 'equal',
                value: 'mid'
                }, {
                fact: 'use',
                operator: 'equal',
                value: 'developer'
                }, {
                fact: 'type',
                operator: 'equal',
                value: 'two'
                },{
                fact: 'scsize',
                operator: 'equal',
                value: 'm'
                }
            ]
        },
        event: {
          type: 'res18',
          params: {
            message: 'Lenovo Ideapad C340-14IWL-8WID'
          }
        }
    }
    let rule19 = {
        conditions: {    
            all : [
                {
                fact: 'budget',
                operator: 'equal',
                value: 'mid'
                }, {
                fact: 'use',
                operator: 'equal',
                value: 'socdoc'
                }, {
                fact: 'type',
                operator: 'equal',
                value: 'laptop'
                },{
                fact: 'scsize',
                operator: 'equal',
                value: 's'
                }
            ]
        },
        event: {
          type: 'res19',
          params: {
            message: 'ACER ASPIRE A311-31'
          }
        }
    }
    let rule20 = {
        conditions: {    
            all : [
                {
                fact: 'budget',
                operator: 'equal',
                value: 'mid'
                }, {
                fact: 'use',
                operator: 'equal',
                value: 'socdoc'
                }, {
                fact: 'type',
                operator: 'equal',
                value: 'laptop'
                },{
                fact: 'scsize',
                operator: 'equal',
                value: 'm'
                }
            ]
        },
        event: {
          type: 'res20',
          params: {
            message: 'ASUS X441UA'
          }
        }
    }
    let rule21 = {
        conditions: {    
            all : [
                {
                fact: 'budget',
                operator: 'equal',
                value: 'mid'
                }, {
                fact: 'use',
                operator: 'equal',
                value: 'socdoc'
                }, {
                fact: 'type',
                operator: 'equal',
                value: 'laptop'
                },{
                fact: 'scsize',
                operator: 'equal',
                value: 'l'
                }
            ]
        },
        event: {
          type: 'res21',
          params: {
            message: 'Lenovo Ideapad 130-15IKB'
          }
        }
    }
    let rule22 = {
        conditions: {    
            all : [
                {
                fact: 'budget',
                operator: 'equal',
                value: 'mid'
                }, {
                fact: 'use',
                operator: 'equal',
                value: 'socdoc'
                }, {
                fact: 'type',
                operator: 'equal',
                value: 'two'
                },{
                fact: 'scsize',
                operator: 'equal',
                value: 's'
                }
            ]
        },
        event: {
          type: 'res22',
          params: {
            message: 'Lenovo D330'
          }
        }
    }
    let rule23 = {
        conditions: {    
            all : [
                {
                fact: 'budget',
                operator: 'equal',
                value: 'mid'
                }, {
                fact: 'use',
                operator: 'equal',
                value: 'socdoc'
                }, {
                fact: 'type',
                operator: 'equal',
                value: 'two'
                },{
                fact: 'scsize',
                operator: 'equal',
                value: 'm'
                }
            ]
        },
        event: {
          type: 'res23',
          params: {
            message: 'Asus VivoBook Flip 14 TP412FA-EC302T'
          }
        }
    }
    let rule24 = {
        conditions: {    
            all : [
                {
                fact: 'budget',
                operator: 'equal',
                value: 'high'
                }, {
                fact: 'use',
                operator: 'equal',
                value: 'multimedia'
                }, {
                fact: 'type',
                operator: 'equal',
                value: 'laptop'
                },{
                fact: 'scsize',
                operator: 'equal',
                value: 's'
                }
            ]
        },
        event: {
          type: 'res24',
          params: {
            message: 'ASUS X407UB'
          }
        }
    }
    let rule25 = {
        conditions: {    
            all : [
                {
                fact: 'budget',
                operator: 'equal',
                value: 'high'
                }, {
                fact: 'use',
                operator: 'equal',
                value: 'multimedia'
                }, {
                fact: 'type',
                operator: 'equal',
                value: 'laptop'
                },{
                fact: 'scsize',
                operator: 'equal',
                value: 'm'
                }
            ]
        },
        event: {
          type: 'res25',
          params: {
            message: 'Asus Zenbook S'
          }
        }
    }
    let rule26 = {
        conditions: {    
            all : [
                {
                fact: 'budget',
                operator: 'equal',
                value: 'high'
                }, {
                fact: 'use',
                operator: 'equal',
                value: 'multimedia'
                }, {
                fact: 'type',
                operator: 'equal',
                value: 'laptop'
                },{
                fact: 'scsize',
                operator: 'equal',
                value: 'l'
                }
            ]
        },
        event: {
          type: 'res26',
          params: {
            message: 'Asus G752VY'
          }
        }
    }
    let rule27 = {
        conditions: {    
            all : [
                {
                fact: 'budget',
                operator: 'equal',
                value: 'high'
                }, {
                fact: 'use',
                operator: 'equal',
                value: 'multimedia'
                }, {
                fact: 'type',
                operator: 'equal',
                value: 'two'
                },{
                fact: 'scsize',
                operator: 'equal',
                value: 'm'
                }
            ]
        },
        event: {
          type: 'res27',
          params: {
            message: 'HP Spectre Folio'
          }
        }
    }
    let rule28 = {
        conditions: {    
            all : [
                {
                fact: 'budget',
                operator: 'equal',
                value: 'high'
                }, {
                fact: 'use',
                operator: 'equal',
                value: 'business'
                }, {
                fact: 'type',
                operator: 'equal',
                value: 'laptop'
                },{
                fact: 'scsize',
                operator: 'equal',
                value: 's'
                }
            ]
        },
        event: {
          type: 'res28',
          params: {
            message: 'ASUS X407UB'
          }
        }
    }
    let rule29 = {
        conditions: {    
            all : [
                {
                fact: 'budget',
                operator: 'equal',
                value: 'high'
                }, {
                fact: 'use',
                operator: 'equal',
                value: 'business'
                }, {
                fact: 'type',
                operator: 'equal',
                value: 'laptop'
                },{
                fact: 'scsize',
                operator: 'equal',
                value: 'm'
                }
            ]
        },
        event: {
          type: 'res29',
          params: {
            message: 'Dell Inspiron 7577'
          }
        }
    }
    let rule30 = {
        conditions: {    
            all : [
                {
                fact: 'budget',
                operator: 'equal',
                value: 'high'
                }, {
                fact: 'use',
                operator: 'equal',
                value: 'business'
                }, {
                fact: 'type',
                operator: 'equal',
                value: 'laptop'
                },{
                fact: 'scsize',
                operator: 'equal',
                value: 'l'
                }
            ]
        },
        event: {
          type: 'res30',
          params: {
            message: 'Acer Predator 17'
          }
        }
    }
    let rule31 = {
        conditions: {    
            all : [
                {
                fact: 'budget',
                operator: 'equal',
                value: 'high'
                }, {
                fact: 'use',
                operator: 'equal',
                value: 'business'
                }, {
                fact: 'type',
                operator: 'equal',
                value: 'two'
                },{
                fact: 'scsize',
                operator: 'equal',
                value: 'm'
                }
            ]
        },
        event: {
          type: 'res31',
          params: {
            message: 'DELL LATITUDE 7390'
          }
        }
    }
    let rule32 = {
        conditions: {    
            all : [
                {
                fact: 'budget',
                operator: 'equal',
                value: 'high'
                }, {
                fact: 'use',
                operator: 'equal',
                value: 'developer'
                }, {
                fact: 'type',
                operator: 'equal',
                value: 'laptop'
                },{
                fact: 'scsize',
                operator: 'equal',
                value: 's'
                }
            ]
        },
        event: {
          type: 'res32',
          params: {
            message: 'Asus VivoBook X441UB'
          }
        }
    }
    let rule33 = {
        conditions: {    
            all : [
                {
                fact: 'budget',
                operator: 'equal',
                value: 'high'
                }, {
                fact: 'use',
                operator: 'equal',
                value: 'developer'
                }, {
                fact: 'type',
                operator: 'equal',
                value: 'laptop'
                },{
                fact: 'scsize',
                operator: 'equal',
                value: 'm'
                }
            ]
        },
        event: {
          type: 'res33',
          params: {
            message: 'MSI GP62M'
          }
        }
    }
    let rule34 = {
        conditions: {    
            all : [
                {
                fact: 'budget',
                operator: 'equal',
                value: 'high'
                }, {
                fact: 'use',
                operator: 'equal',
                value: 'developer'
                }, {
                fact: 'type',
                operator: 'equal',
                value: 'laptop'
                },{
                fact: 'scsize',
                operator: 'equal',
                value: 'l'
                }
            ]
        },
        event: {
          type: 'res34',
          params: {
            message: 'Lenovo Y700'
          }
        }
    }
    let rule35 = {
        conditions: {    
            all : [
                {
                fact: 'budget',
                operator: 'equal',
                value: 'high'
                }, {
                fact: 'use',
                operator: 'equal',
                value: 'gaming'
                }, {
                fact: 'type',
                operator: 'equal',
                value: 'laptop'
                },{
                fact: 'scsize',
                operator: 'equal',
                value: 's'
                }
            ]
        },
        event: {
          type: 'res35',
          params: {
            message: 'ASUS TUF Gaming FX505DT'
          }
        }
    }
    let rule36 = {
        conditions: {    
            all : [
                {
                fact: 'budget',
                operator: 'equal',
                value: 'high'
                }, {
                fact: 'use',
                operator: 'equal',
                value: 'gaming'
                }, {
                fact: 'type',
                operator: 'equal',
                value: 'laptop'
                },{
                fact: 'scsize',
                operator: 'equal',
                value: 'm'
                }
            ]
        },
        event: {
          type: 'res36',
          params: {
            message: 'Asus ROG Strix Scar 3'
          }
        }
    }
    let rule37 = {
        conditions: {    
            all : [
                {
                fact: 'budget',
                operator: 'equal',
                value: 'high'
                }, {
                fact: 'use',
                operator: 'equal',
                value: 'gaming'
                }, {
                fact: 'type',
                operator: 'equal',
                value: 'laptop'
                },{
                fact: 'scsize',
                operator: 'equal',
                value: 'l'
                }
            ]
        },
        event: {
          type: 'res37',
          params: {
            message: 'ASUS ROG G703GX'
          }
        }
    }
    let rule38 = {
        conditions: {    
            all : [
                {
                fact: 'budget',
                operator: 'equal',
                value: 'high'
                }, {
                fact: 'use',
                operator: 'equal',
                value: 'sosdoc'
                }, {
                fact: 'type',
                operator: 'equal',
                value: 'laptop'
                },{
                fact: 'scsize',
                operator: 'equal',
                value: 's'
                }
            ]
        },
        event: {
          type: 'res38',
          params: {
            message: 'Asus VivoBook X441UB'
          }
        }
    }
    let rule39 = {
        conditions: {    
            all : [
                {
                fact: 'budget',
                operator: 'equal',
                value: 'high'
                }, {
                fact: 'use',
                operator: 'equal',
                value: 'sosdoc'
                }, {
                fact: 'type',
                operator: 'equal',
                value: 'laptop'
                },{
                fact: 'scsize',
                operator: 'equal',
                value: 'm'
                }
            ]
        },
        event: {
          type: 'res39',
          params: {
            message: 'Asus ZenBook Flip 13'
          }
        }
    }
    let rule40 = {
        conditions: {    
            all : [
                {
                fact: 'budget',
                operator: 'equal',
                value: 'high'
                }, {
                fact: 'use',
                operator: 'equal',
                value: 'sosdoc'
                }, {
                fact: 'type',
                operator: 'equal',
                value: 'laptop'
                },{
                fact: 'scsize',
                operator: 'equal',
                value: 'l'
                }
            ]
        },
        event: {
          type: 'res40',
          params: {
            message: 'Dell Inspiron 7577'
          }
        }
    }
    let rule41 = {
        conditions: {    
            all : [
                {
                fact: 'budget',
                operator: 'equal',
                value: 'high'
                }, {
                fact: 'use',
                operator: 'equal',
                value: 'sosdoc'
                }, {
                fact: 'type',
                operator: 'equal',
                value: 'two'
                },{
                fact: 'scsize',
                operator: 'equal',
                value: 's'
                }
            ]
        },
        event: {
          type: 'res41',
          params: {
            message: 'Acer NT.LCDAA'
          }
        }
    }
    let rule42 = {
        conditions: {    
            all : [
                {
                fact: 'budget',
                operator: 'equal',
                value: 'high'
                }, {
                fact: 'use',
                operator: 'equal',
                value: 'sosdoc'
                }, {
                fact: 'type',
                operator: 'equal',
                value: 'two'
                },{
                fact: 'scsize',
                operator: 'equal',
                value: 'm'
                }
            ]
        },
        event: {
          type: 'res42',
          params: {
            message: 'Lenovo Ideapad C340'
          }
        }
    }     
    engine.addRule(rulesNone);
    engine.addRule(rule1);
    engine.addRule(rule2);
    engine.addRule(rule3);
    engine.addRule(rule4);
    engine.addRule(rule5);
    engine.addRule(rule6);
    engine.addRule(rule7);
    engine.addRule(rule8);
    engine.addRule(rule9);
    engine.addRule(rule10);
    engine.addRule(rule11);
    engine.addRule(rule12);
    engine.addRule(rule13);
    engine.addRule(rule14);
    engine.addRule(rule15);
    engine.addRule(rule16);
    engine.addRule(rule17);
    engine.addRule(rule18);
    engine.addRule(rule19);
    engine.addRule(rule20);
    engine.addRule(rule21);
    engine.addRule(rule22);
    engine.addRule(rule23);
    engine.addRule(rule24);
    engine.addRule(rule25);
    engine.addRule(rule26);
    engine.addRule(rule27);
    engine.addRule(rule28);
    engine.addRule(rule29);
    engine.addRule(rule30);
    engine.addRule(rule31);
    engine.addRule(rule32);
    engine.addRule(rule33);
    engine.addRule(rule34);
    engine.addRule(rule35);
    engine.addRule(rule36);
    engine.addRule(rule37);
    engine.addRule(rule38);
    engine.addRule(rule39);
    engine.addRule(rule40);
    engine.addRule(rule41);
    engine.addRule(rule42);

    let facts = {
        budget : bud,
        use : us,
        scsize : sc,
        type :tp
    }
    engine
        .run(facts)
        .then(results => {
            // 'results' is an object containing successful events, and an Almanac instance containing facts
            results.events.map(event => 
                res.render('result', {
                    title: "Tucil AIB"
                    ,result : event.params.message
                })
                )
        })

    
})
module.exports = router;