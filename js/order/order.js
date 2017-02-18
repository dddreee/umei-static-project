/**
 * Created by nero on 17/1/17.
 */
var json_header = {
    'content-type': 'application/json;charset=utf-8;',
    'accept':'application/json;charset=utf-8'
};
function getUrlParams(){
    var i,
        params = {},
        url = window.location.href;

    if( url.split('?').length > 1 ){
        url = url.split("?")[1];
    }else{
        return false;
    }
    url = url.split('&');
    for( var i in url){
        params[url[i].split('=')[0]] = url[i].split('=')[1]
    }
    return params;
}
var params = getUrlParams(),
    artisan_info = null,
    scheduleList = null;
/*var artisan_info = {
    "artisan": {
        "auid": "a4544981eee188b5",
        "type": "hairstylist",
        "level": 1,
        "nickname": "James",
        "workingYears": 15,
        "avatar": {
            "domain": "http://fs.umei.me/",
            "key": "9cd3d2f138ff393c",
            "storageKey": "3/59/861/9cd3d2f138ff393c.jpg",
            "size": [
                100,
                320,
                640,
                720,
                750,
                1024,
                1080,
                2048
            ]
        },
        "desc": "进修于英国沙宣，托尼盖，曾在香港铜锣湾利舞台广场ESPRIT salon工作，擅长根据客人的脸型，职业捕捉设计灵感。",
        "umeiPrice": 16800,
        "shopPrice": 28000,
        "gender": "male",
        "subLevel": 1,
        "scanPayLink": "http://pre-release.activity.umei.me/scan_pay/artisan/a4544981eee188b5"
    },
    "styleList": [
        {
            "id": 27,
            "serviceType": "hair",
            "name": "日韩风格"
        }
    ],
    "tagList": [
        {
            "id": 1,
            "name": "美发",
            "serviceType": "hair"
        },
        {
            "id": 2,
            "name": "造型",
            "serviceType": "hair"
        }
    ],
    "circleList": [
        {
            "code": 23,
            "name": "上海影城/新华路"
        }
    ],
    "imgList": [
        {
            "domain": "http://fs.umei.me/",
            "key": "ce86ea0c7297a9b1",
            "storageKey": "8/30/342/ce86ea0c7297a9b1.jpg",
            "size": [
                100,
                320,
                640,
                720,
                750,
                1024,
                1080,
                2048
            ],
            "link": "http://fs.umei.me/8/30/342/ce86ea0c7297a9b1.jpg",
            "originSize": {
                "w": 650,
                "h": 650
            }
        },
        {
            "domain": "http://fs.umei.me/",
            "key": "99d82035b8ef4397",
            "storageKey": "2/0/338/99d82035b8ef4397.jpg",
            "size": [
                100,
                320,
                640,
                720,
                750,
                1024,
                1080,
                2048
            ],
            "link": "http://fs.umei.me/2/0/338/99d82035b8ef4397.jpg",
            "originSize": {
                "w": 500,
                "h": 500
            }
        },
        {
            "domain": "http://fs.umei.me/",
            "key": "d4a5168996c59ef6",
            "storageKey": "2/80/525/d4a5168996c59ef6.jpg",
            "size": [
                100,
                320,
                640,
                720,
                750,
                1024,
                1080,
                2048
            ],
            "link": "http://fs.umei.me/2/80/525/d4a5168996c59ef6.jpg",
            "originSize": {
                "w": 650,
                "h": 650
            }
        }
    ],
    "shopList": [
        {
            "id": 3,
            "name": "约来约美体验中心",
            "address": "定西路727号",
            "longitude": 121.43031522343598,
            "latitude": 31.213723661504087,
            "phones": [
                "021-60191111"
            ],
            "suid": "qjUF7NB1Dk73"
        }
    ]
};
var scheduleList = [
    {
        "date": 1484928000000,
        "shopId": 3,
        "scheduleList": [
            {
                "id": 827477,
                "beginTime": 7200000,
                "endTime": 10740000,
                "occupyStatus": "occupy_status_overdue",
                "shopId": 3,
                "beginTimeStr": "10:00",
                "endTimeStr": "10:59"
            },
            {
                "id": 827478,
                "beginTime": 10800000,
                "endTime": 14340000,
                "occupyStatus": "occupy_status_overdue",
                "shopId": 3,
                "beginTimeStr": "11:00",
                "endTimeStr": "11:59"
            },
            {
                "id": 827479,
                "beginTime": 14400000,
                "endTime": 17940000,
                "occupyStatus": "occupy_status_overdue",
                "shopId": 3,
                "beginTimeStr": "12:00",
                "endTimeStr": "12:59"
            },
            {
                "id": 827480,
                "beginTime": 18000000,
                "endTime": 21540000,
                "occupyStatus": "occupy_status_overdue",
                "shopId": 3,
                "beginTimeStr": "13:00",
                "endTimeStr": "13:59"
            },
            {
                "id": 827481,
                "beginTime": 21600000,
                "endTime": 25140000,
                "occupyStatus": "occupy_status_overdue",
                "shopId": 3,
                "beginTimeStr": "14:00",
                "endTimeStr": "14:59"
            },
            {
                "id": 827482,
                "beginTime": 25200000,
                "endTime": 28740000,
                "occupyStatus": "occupy_status_overdue",
                "shopId": 3,
                "beginTimeStr": "15:00",
                "endTimeStr": "15:59"
            },
            {
                "id": 827483,
                "beginTime": 28800000,
                "endTime": 32340000,
                "occupyStatus": "occupy_status_overdue",
                "shopId": 3,
                "beginTimeStr": "16:00",
                "endTimeStr": "16:59"
            },
            {
                "id": 827484,
                "beginTime": 32400000,
                "endTime": 35940000,
                "occupyStatus": "occupy_status_overdue",
                "shopId": 3,
                "beginTimeStr": "17:00",
                "endTimeStr": "17:59"
            },
            {
                "id": 827485,
                "beginTime": 36000000,
                "endTime": 39540000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "18:00",
                "endTimeStr": "18:59"
            },
            {
                "id": 827486,
                "beginTime": 39600000,
                "endTime": 43140000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "19:00",
                "endTimeStr": "19:59"
            },
            {
                "id": 827487,
                "beginTime": 43200000,
                "endTime": 46740000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "20:00",
                "endTimeStr": "20:59"
            },
            {
                "id": 827488,
                "beginTime": 46800000,
                "endTime": 50340000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "21:00",
                "endTimeStr": "21:59"
            }
        ],
        "dateStr": "2017-01-21"
    },
    {
        "date": 1485014400000,
        "shopId": 3,
        "scheduleList": [
            {
                "id": 830252,
                "beginTime": 7200000,
                "endTime": 10740000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "10:00",
                "endTimeStr": "10:59"
            },
            {
                "id": 830253,
                "beginTime": 10800000,
                "endTime": 14340000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "11:00",
                "endTimeStr": "11:59"
            },
            {
                "id": 830254,
                "beginTime": 14400000,
                "endTime": 17940000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "12:00",
                "endTimeStr": "12:59"
            },
            {
                "id": 830255,
                "beginTime": 18000000,
                "endTime": 21540000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "13:00",
                "endTimeStr": "13:59"
            },
            {
                "id": 830256,
                "beginTime": 21600000,
                "endTime": 25140000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "14:00",
                "endTimeStr": "14:59"
            },
            {
                "id": 830257,
                "beginTime": 25200000,
                "endTime": 28740000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "15:00",
                "endTimeStr": "15:59"
            },
            {
                "id": 830258,
                "beginTime": 28800000,
                "endTime": 32340000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "16:00",
                "endTimeStr": "16:59"
            },
            {
                "id": 830259,
                "beginTime": 32400000,
                "endTime": 35940000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "17:00",
                "endTimeStr": "17:59"
            },
            {
                "id": 830260,
                "beginTime": 36000000,
                "endTime": 39540000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "18:00",
                "endTimeStr": "18:59"
            },
            {
                "id": 830261,
                "beginTime": 39600000,
                "endTime": 43140000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "19:00",
                "endTimeStr": "19:59"
            },
            {
                "id": 830262,
                "beginTime": 43200000,
                "endTime": 46740000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "20:00",
                "endTimeStr": "20:59"
            },
            {
                "id": 830263,
                "beginTime": 46800000,
                "endTime": 50340000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "21:00",
                "endTimeStr": "21:59"
            }
        ],
        "dateStr": "2017-01-22"
    },
    {
        "date": 1485100800000,
        "shopId": 3,
        "scheduleList": [
            {
                "id": 833027,
                "beginTime": 7200000,
                "endTime": 10740000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "10:00",
                "endTimeStr": "10:59"
            },
            {
                "id": 833028,
                "beginTime": 10800000,
                "endTime": 14340000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "11:00",
                "endTimeStr": "11:59"
            },
            {
                "id": 833029,
                "beginTime": 14400000,
                "endTime": 17940000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "12:00",
                "endTimeStr": "12:59"
            },
            {
                "id": 833030,
                "beginTime": 18000000,
                "endTime": 21540000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "13:00",
                "endTimeStr": "13:59"
            },
            {
                "id": 833031,
                "beginTime": 21600000,
                "endTime": 25140000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "14:00",
                "endTimeStr": "14:59"
            },
            {
                "id": 833032,
                "beginTime": 25200000,
                "endTime": 28740000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "15:00",
                "endTimeStr": "15:59"
            },
            {
                "id": 833033,
                "beginTime": 28800000,
                "endTime": 32340000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "16:00",
                "endTimeStr": "16:59"
            },
            {
                "id": 833034,
                "beginTime": 32400000,
                "endTime": 35940000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "17:00",
                "endTimeStr": "17:59"
            },
            {
                "id": 833035,
                "beginTime": 36000000,
                "endTime": 39540000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "18:00",
                "endTimeStr": "18:59"
            },
            {
                "id": 833036,
                "beginTime": 39600000,
                "endTime": 43140000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "19:00",
                "endTimeStr": "19:59"
            },
            {
                "id": 833037,
                "beginTime": 43200000,
                "endTime": 46740000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "20:00",
                "endTimeStr": "20:59"
            },
            {
                "id": 833038,
                "beginTime": 46800000,
                "endTime": 50340000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "21:00",
                "endTimeStr": "21:59"
            }
        ],
        "dateStr": "2017-01-23"
    },
    {
        "date": 1485187200000,
        "shopId": 3,
        "scheduleList": [
            {
                "id": 835802,
                "beginTime": 7200000,
                "endTime": 10740000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "10:00",
                "endTimeStr": "10:59"
            },
            {
                "id": 835803,
                "beginTime": 10800000,
                "endTime": 14340000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "11:00",
                "endTimeStr": "11:59"
            },
            {
                "id": 835804,
                "beginTime": 14400000,
                "endTime": 17940000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "12:00",
                "endTimeStr": "12:59"
            },
            {
                "id": 835805,
                "beginTime": 18000000,
                "endTime": 21540000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "13:00",
                "endTimeStr": "13:59"
            },
            {
                "id": 835806,
                "beginTime": 21600000,
                "endTime": 25140000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "14:00",
                "endTimeStr": "14:59"
            },
            {
                "id": 835807,
                "beginTime": 25200000,
                "endTime": 28740000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "15:00",
                "endTimeStr": "15:59"
            },
            {
                "id": 835808,
                "beginTime": 28800000,
                "endTime": 32340000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "16:00",
                "endTimeStr": "16:59"
            },
            {
                "id": 835809,
                "beginTime": 32400000,
                "endTime": 35940000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "17:00",
                "endTimeStr": "17:59"
            },
            {
                "id": 835810,
                "beginTime": 36000000,
                "endTime": 39540000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "18:00",
                "endTimeStr": "18:59"
            },
            {
                "id": 835811,
                "beginTime": 39600000,
                "endTime": 43140000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "19:00",
                "endTimeStr": "19:59"
            },
            {
                "id": 835812,
                "beginTime": 43200000,
                "endTime": 46740000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "20:00",
                "endTimeStr": "20:59"
            },
            {
                "id": 835813,
                "beginTime": 46800000,
                "endTime": 50340000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "21:00",
                "endTimeStr": "21:59"
            }
        ],
        "dateStr": "2017-01-24"
    },
    {
        "date": 1485273600000,
        "shopId": 3,
        "scheduleList": [
            {
                "id": 838577,
                "beginTime": 7200000,
                "endTime": 10740000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "10:00",
                "endTimeStr": "10:59"
            },
            {
                "id": 838578,
                "beginTime": 10800000,
                "endTime": 14340000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "11:00",
                "endTimeStr": "11:59"
            },
            {
                "id": 838579,
                "beginTime": 14400000,
                "endTime": 17940000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "12:00",
                "endTimeStr": "12:59"
            },
            {
                "id": 838580,
                "beginTime": 18000000,
                "endTime": 21540000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "13:00",
                "endTimeStr": "13:59"
            },
            {
                "id": 838581,
                "beginTime": 21600000,
                "endTime": 25140000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "14:00",
                "endTimeStr": "14:59"
            },
            {
                "id": 838582,
                "beginTime": 25200000,
                "endTime": 28740000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "15:00",
                "endTimeStr": "15:59"
            },
            {
                "id": 838583,
                "beginTime": 28800000,
                "endTime": 32340000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "16:00",
                "endTimeStr": "16:59"
            },
            {
                "id": 838584,
                "beginTime": 32400000,
                "endTime": 35940000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "17:00",
                "endTimeStr": "17:59"
            },
            {
                "id": 838585,
                "beginTime": 36000000,
                "endTime": 39540000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "18:00",
                "endTimeStr": "18:59"
            },
            {
                "id": 838586,
                "beginTime": 39600000,
                "endTime": 43140000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "19:00",
                "endTimeStr": "19:59"
            },
            {
                "id": 838587,
                "beginTime": 43200000,
                "endTime": 46740000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "20:00",
                "endTimeStr": "20:59"
            },
            {
                "id": 838588,
                "beginTime": 46800000,
                "endTime": 50340000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "21:00",
                "endTimeStr": "21:59"
            }
        ],
        "dateStr": "2017-01-25"
    },
    {
        "date": 1485360000000,
        "shopId": 3,
        "scheduleList": [
            {
                "id": 841352,
                "beginTime": 7200000,
                "endTime": 10740000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "10:00",
                "endTimeStr": "10:59"
            },
            {
                "id": 841353,
                "beginTime": 10800000,
                "endTime": 14340000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "11:00",
                "endTimeStr": "11:59"
            },
            {
                "id": 841354,
                "beginTime": 14400000,
                "endTime": 17940000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "12:00",
                "endTimeStr": "12:59"
            },
            {
                "id": 841355,
                "beginTime": 18000000,
                "endTime": 21540000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "13:00",
                "endTimeStr": "13:59"
            },
            {
                "id": 841356,
                "beginTime": 21600000,
                "endTime": 25140000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "14:00",
                "endTimeStr": "14:59"
            },
            {
                "id": 841357,
                "beginTime": 25200000,
                "endTime": 28740000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "15:00",
                "endTimeStr": "15:59"
            },
            {
                "id": 841358,
                "beginTime": 28800000,
                "endTime": 32340000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "16:00",
                "endTimeStr": "16:59"
            },
            {
                "id": 841359,
                "beginTime": 32400000,
                "endTime": 35940000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "17:00",
                "endTimeStr": "17:59"
            },
            {
                "id": 841360,
                "beginTime": 36000000,
                "endTime": 39540000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "18:00",
                "endTimeStr": "18:59"
            },
            {
                "id": 841361,
                "beginTime": 39600000,
                "endTime": 43140000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "19:00",
                "endTimeStr": "19:59"
            },
            {
                "id": 841362,
                "beginTime": 43200000,
                "endTime": 46740000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "20:00",
                "endTimeStr": "20:59"
            },
            {
                "id": 841363,
                "beginTime": 46800000,
                "endTime": 50340000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "21:00",
                "endTimeStr": "21:59"
            }
        ],
        "dateStr": "2017-01-26"
    },
    {
        "date": 1485446400000,
        "shopId": 3,
        "scheduleList": [
            {
                "id": 844127,
                "beginTime": 7200000,
                "endTime": 10740000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "10:00",
                "endTimeStr": "10:59"
            },
            {
                "id": 844128,
                "beginTime": 10800000,
                "endTime": 14340000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "11:00",
                "endTimeStr": "11:59"
            },
            {
                "id": 844129,
                "beginTime": 14400000,
                "endTime": 17940000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "12:00",
                "endTimeStr": "12:59"
            },
            {
                "id": 844130,
                "beginTime": 18000000,
                "endTime": 21540000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "13:00",
                "endTimeStr": "13:59"
            },
            {
                "id": 844131,
                "beginTime": 21600000,
                "endTime": 25140000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "14:00",
                "endTimeStr": "14:59"
            },
            {
                "id": 844132,
                "beginTime": 25200000,
                "endTime": 28740000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "15:00",
                "endTimeStr": "15:59"
            },
            {
                "id": 844133,
                "beginTime": 28800000,
                "endTime": 32340000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "16:00",
                "endTimeStr": "16:59"
            },
            {
                "id": 844134,
                "beginTime": 32400000,
                "endTime": 35940000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "17:00",
                "endTimeStr": "17:59"
            },
            {
                "id": 844135,
                "beginTime": 36000000,
                "endTime": 39540000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "18:00",
                "endTimeStr": "18:59"
            },
            {
                "id": 844136,
                "beginTime": 39600000,
                "endTime": 43140000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "19:00",
                "endTimeStr": "19:59"
            },
            {
                "id": 844137,
                "beginTime": 43200000,
                "endTime": 46740000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "20:00",
                "endTimeStr": "20:59"
            },
            {
                "id": 844138,
                "beginTime": 46800000,
                "endTime": 50340000,
                "occupyStatus": "occupy_status_free",
                "shopId": 3,
                "beginTimeStr": "21:00",
                "endTimeStr": "21:59"
            }
        ],
        "dateStr": "2017-01-27"
    }
];*/


//components
var nav = Vue.extend({
    props: ['switch'],
    methods: {
        switchHandler: function(bool){
            this.switch.bool = bool;
            document.body.scrollTop = 0;
            //console.log(this.switch);
        }
    },
    template: '<div class="nav">' +
    '<div class="nav_item" :class="{nav_item_active: !switch.bool}" @click="switchHandler(false)">发型师</div><div class="nav_item" :class="{nav_item_active: switch.bool}" @click="switchHandler(true)">我的</div>' +
    '</div>'
});

var weekday = Vue.extend({
    props: ['day', 'week'],
    template: '<div class="week"><div class="weekday">{{ week[day%7] }}</div><div class="weekday">{{ week[(day+1)%7] }}</div><div class="weekday">{{ week[(day+2)%7] }}</div><div class="weekday">{{ week[(day+3)%7] }}</div><div class="weekday">{{ week[(day+4)%7] }}</div><div class="weekday">{{ week[(day+5)%7] }}</div><div class="weekday">{{ week[(day+6)%7] }}</div></div>'
});

var orderComponent = Vue.extend({
    props: ['artisan_info', 'schedule_list', 'week', 'active_date', 'change_date_handler', 'change_time', 'order_count'],
    computed: {
        artisan_avatar_url: function(){
            return this.artisan_info.artisan.avatar.link ? "url(" + this.artisan_info.artisan.avatar.link + ") no-repeat center/cover" : 'url(../../images/artisan-share/defaultavatar.jpg) no-repeat center/ contain '
        },
        artisan_level: function(){
            return 'lv' + this.artisan_info.artisan.mainLevel || 0 + '_' + this.artisan_info.artisan.subLevel || 0
        },
        shop_url: function(){
            return '/views/shop/index.htm?shopId=' + this.artisan_info.shopList[0].suid
        },
        shop_img_url: function(){
            return "url(" + (this.artisan_info.shopList.length > 0 && this.artisan_info.shopList[0].img && this.artisan_info.shopList[0].img.link ? this.artisan_info.shopList[0].img.link : "../../images/shop/shop_default.png") + ") no-repeat center/cover"
        },
        firstDay: function(){
            return new Date(this.schedule_list[0].date).getDay()
        },
        occupyStatusStr: function(){
            return function(status){
                return status === 'occupy_status_free' ? '可预约':'不可预约'
            }
        },
        tags: function(){
            if(this.artisan_info.tagList.length > 1){
                return this.artisan_info.tagList.reduce(function(x, y){
                    return x.name + '/' + y.name
                })
            }else{
                return (this.artisan_info.tagList && this.artisan_info.tagList.length > 0 ?this.artisan_info.tagList[0].name : '')
            }
        },
        styles: function(){
            if(this.artisan_info.styleList.length > 1){
                return this.artisan_info.styleList.reduce(function(x, y){
                    return x.name + '/' + y.name
                })
            }else{
                return (this.artisan_info.styleList && this.artisan_info.styleList.length > 0 ?this.artisan_info.styleList[0].name : '')
            }
        }
    },
    components: {
        'weekday': weekday
    },
    methods: {
        activeClass: function(index){
            return this.schedule_list.indexOf(this.active_date) == index ? 'active_date':''
        },
        dynamic_img_url: function(img){
            return img.link ? 'url('+ img.link +'/320w) no-repeat center / cover' : (img.storageKey && img.domain ? 'url('+ img.domain + img.storageKey +'/320w) no-repeat center / cover': '')
        }
    },

    template:   '<div class="order">' +
                    //发型师信息
                    '<div class="artisan_info">' +
                        '<div class="artisan">' +
                            '<div class="avatar" :style="{background: artisan_avatar_url  }"></div>' +
                            '<div class="base_info">' +
                                '<div class="artisan_name_lv">' +
                                    '<div class="artisan_name">{{ artisan_info.artisan.nickname }}</div>' +
                                    '<div class="artisan_level">' +
                                        '<div :class="artisan_level"></div>' +
                                    '</div>' +
                                '</div>' +
                            '<div class="work_info">' +
                                '<div class="work_year">从业{{ artisan_info.artisan.workingYears }}年</div>' +
                                '<div class="work_type" v-show="artisan_info.tagList">{{ tags }}</div>' +
                            '</div>' +
                            '</div>' +
                        '</div>' +
                        '<div class="other_info" >' +
                            '<div class="order_count" v-show="orderCount">预约数: <span>{{ orderCount }}</span></div>' +
                            '<div class="order_count" v-show="!orderCount" style="visibility: hidden;">1</div>' +
                            '<div class="service_circle">服务商圈: {{ artisan_info.circleList[0].name }}</div>' +
                        '</div>' +
                    '</div>' +
                    //门店信息
                    '<div class="shop" v-show="artisan_info.shopList && artisan_info.shopList.length > 0">' +
                        '<a class="shop_container" :href="shop_url" :style="{ background: shop_img_url }">' +
                            '<div class="shop_info">' +
                                '<div class="shop_name">{{ artisan_info.shopList[0].name }}</div>' +
                                '<div class="shop_address">{{ artisan_info.shopList[0].address }}</div>' +
                            '</div>' +
                        '</a>' +
                    '</div>' +
                    //预约
                    '<div class="pre_order">' +
                        '<div class="title">预约时间</div>' +
                        '<weekday :week="week" :day="firstDay"></weekday>' +
                        '<div class="schedule">' +
                            '<div class="dates">' +
                                '<div class="date" v-for="date in schedule_list" :class="activeClass($index)" @click="change_date_handler(date)" >{{ new Date(date.date).getDate() }}</div>' +
                            '</div>' +
                            '<div class="schedule_list">' +
                                '<label class="schedule_item" v-for="time in active_date.scheduleList" :time="time.beginTimeStr" :status="occupyStatusStr(time.occupyStatus)">' +
                                    '<input name="schedule" class="schedule_radio" type="radio" :disabled="time.occupyStatus !== \'occupy_status_free\'" @change="change_time(time)" />' +
                                '</label>' +
                            '</div>' +
                            '<label class="face_to_face"><input type="radio" name="schedule" class="face_to_face_schedule_radio" @change="change_time({id: -1})"><span>当面约</span></label>' +
                        '</div>' +
                        '<div class="tip">温馨提示：选择当面约请先和发型师沟通确认可立即进行服务 </div>' +
    '<div class="dynamic">' +
    '<div class="dynamic_title">' +
    '发型师动态' +
    '<div class="styles">擅长: <span>{{ styles }}</span></div>' +
    '</div>' +
    '<div class="dynamic_images" v-if="artisan_info.imgList.length > 0"><figure class="dynamic_image" v-for="img in artisan_info.imgList" :style="{background: dynamic_img_url(img)}"></figure></div>' +
    '<div class="dynamic_intro">{{ artisan_info.artisan.desc }}</div>' +
    '</div>' +
                    '</div>' +

                '</div>'
});
var vm = null;

//获取发型师详情
$.ajax({
    type: 'GET',
    url: '/artisan?auid=' + params.auid,
    headers: json_header,
    success: function(data, status, xhr){
        if(xhr.getResponseHeader('code') == 0){
            typeof data == 'string' ? data = JSON.parse(data) : data = data;
            artisan_info = data;

            //获取发型师日程
            $.ajax({
                type: 'GET',
                headers: json_header,
                url: '/schedule?auid='+ params.auid +'&shopId='+ artisan_info.shopList[0].shopId +'&appId=umei_user',
                success: function(data2, status, xhr2){
                    if(xhr2.getResponseHeader('code') == 0){
                        typeof data2 == 'string' ? data2 = JSON.parse(data2) : data2 = data2;
                        scheduleList = data2.finalScheduleList;
                        vm = new Vue({
                            el: '#app',
                            data: {
                                week: ['日', '一', '二', '三', '四', '五', '六'],
                                artisan_info: artisan_info,
                                switch: {
                                    bool: false
                                },
                                activeTime: '',

                                scheduleList: scheduleList,
                                activeDate: scheduleList[0],
                            },
                            computed: {

                                pre_order_date: function(){
                                    if(this.activeTime.id > 0){
                                        return this.activeDate.dateStr + ' ' + this.activeTime.beginTimeStr
                                    }else if(this.activeTime.id < 0){
                                        return '当面约'
                                    }
                                }
                            },
                            methods: {
                                changeActiveDateHandler: function(date, id){
                                    this.activeDate = date;
                                    this.activeTime = '';
                                },
                                changeActiveTime: function(time){
                                    this.activeTime = time;
                                    //console.log(time.id);
                                },
                                orderHandler: function(){
                                    var auid = this.artisan_info.artisan.auid,
                                        shopId = this.artisan_info.shopList[0].shopId,
                                        scheduleId = this.activeTime.id;
                                    $.ajax({
                                        url: '/order/service',
                                        type: 'POST',
                                        headers: json_header,
                                        async: false,
                                        data: JSON.stringify({auid: auid, shopId: shopId, scheduleId: scheduleId}),
                                        success: function(data, status, xhr){
                                            if(xhr.getResponseHeader('code') == 0){}
                                            vm.activeTime.occupyStatus = 'occupy_status_occupy';
                                            vm.$set('activeTime', '');
                                            alert('预约成功')
                                        },
                                        error: function(){
                                            alert('预约失败');
                                        }

                                    });
                                }
                            },
                            components: {
                                'my-nav': nav,
                                //'weekday': weekday,
                                'order': orderComponent
                            }
                        });

                    }else{
                        console.log('获取发型师日程 code错误');
                        alert('网络错误');
                    }
                },
                error: function(){
                    console.log('获取发型师日程错误');
                    alert('网络错误')
                }
            })
        }


    }
});