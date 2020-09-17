var geoJson;
//value 1 代表环保项目，2代表种植项目
var areaData = [

    { name: "荣县耕地质量保护提升工程项目", value: [104.424036, 29.4518, 2], demo: false, province: "四川", area: "荣县留佳、东佳、古佳、河口、新桥、乐德、鼎新、铁厂、来牟、双古镇", desc: "推广耕地质量保护与提升技术，总面积90000亩次，连续四年： “1-3-3-2”" },
    { name: "自贡自流井漆树乡项目", value: [104.702009, 29.222236, 2], demo: false, province: "四川", area: "自贡自流井漆树乡", desc: "土壤有机质提升实施200亩，土壤大数据系统建设以每150亩安装1个点位，对现有150亩塔罗科血橙进行品种改良，对园区的塔罗科血橙开展国家绿色食品质量A级认证 “1-3-3-2”" },
    { name: "双流区改良土壤培肥地力及农产品品质提升项目", value: [103.930965, 30.580896, 2], demo: false, province: "四川", area: "双流区黄龙溪、永安、黄水、金桥、彭镇、黄甲、胜利", desc: "面积：3000亩，连续三年，50亩以上的种植业主，自主申报，年提升土壤有机质0.1%" },
    { name: "江安县大白李产业园建设项目", value: [105.092421, 28.77414, 1], demo: false, province: "四川", area: "宜宾市江安县桐梓镇姜庙村", desc: "建设核心示范园区1000余亩，带动周边大白李产业标准化品牌化品质化升级" },
    { name: "荣县双石镇大竹林村现代农业园区建设项目", value: [104.514895, 29.37436, 2], demo: false, province: "四川", area: "自贡市荣县双石镇大竹林村", desc: "建设3000亩晚熟柑橘示范园区，通过“一核多支”、“八大种植亮点”“合作模式创新”等手段，打造为四川省现代农业科技园" },
    { name: "柏合•合文化公园新镇乡村振兴示范项目", value: [104.264408, 30.549291, 2], demo: false, province: "四川", area: "成都市龙泉驿区柏合镇", desc: "将高铁南部乡村板块农业用地4785亩，建设用地595.5亩面积建设为天人合一精致田园绿岛" },
    { name: "自贡蜀南田园综合体项目", value: [104.735285, 29.309896, 2], demo: false, province: "四川", area: "自贡市自流井区舒平镇", desc: "与蓝城集团达成战略合作伙伴，共同推动农产品渠道及品牌建设，智慧农业大数据，农业产业新技术新科技研发及应用转换，建设面积3000亩" },
    { name: "春华锦田田园综合体项目", value: [104.004082, 30.821192, 2], demo: false, province: "四川", area: "郫都区团结镇宝华村", desc: "2017年12月，中关村生态乡村创新服务联盟与成都市郫都区政府全域战略合作，签约郫都田园综合体规划； 2018年4月，项目方在团结镇宝华村先期布置194.9亩有机水稻“水土共治”试验示范。" },

    { name: "重庆市涪陵区国家现代农业产业园榨菜产业服务项目", value: [107.396996, 29.709779, 2], demo: false, province: "重庆", area: "重庆市涪陵区", desc: "技术合作单位为西南大学" },
    { name: "重庆市万州区国家农业公园玫瑰香橙产业服务项目", value: [108.288897, 30.674692, 2], demo: false, province: "重庆", area: "万州区甘宁镇", desc: "技术合作单位为西南大学" }
];
//颜色数据
var data = [
    { name: "北京", value: 177 },
    { name: "天津", value: 42 },
    { name: "河北", value: 102 },
    { name: "山西", value: 81 },
    { name: "内蒙古", value: 47 },
    { name: "辽宁", value: 67 },
    { name: "吉林", value: 82 },
    { name: "黑龙江", value: 66 },
    { name: "上海", value: 24 },
    { name: "江苏", value: 92 },
    { name: "浙江", value: 114 },
    { name: "安徽", value: 109 },
    { name: "福建", value: 116 },
    { name: "江西", value: 91 },
    { name: "山东", value: 119 },
    { name: "河南", value: 137 },
    { name: "湖北", value: 116 },
    { name: "湖南", value: 114 },
    { name: "重庆", value: 91 },
    { name: "四川", value: 125 },
    { name: "贵州", value: 62 },
    { name: "云南", value: 83 },
    { name: "西藏", value: 50 },
    { name: "陕西", value: 80 },
    { name: "甘肃", value: 56 },
    { name: "青海", value: 10 },
    { name: "宁夏", value: 18 },
    { name: "新疆", value: 67 },
    { name: "广东", value: 123 },
    { name: "广西", value: 59 },
    { name: "海南", value: 14 },
    { name: "台湾", value: 60 }
];

function callChina(result) {
    geoJson = result;
}

function setMapBox() {
    var width = $(document.body).width() * 0.66;
    var height = width * 0.65;
    $(".map-box").css({ "width": width, "height": height });
}

function getMap() {
    setMapBox()
    var mapChart = echarts.init(document.getElementById("map"));
    var mapName = "china";
    var geoCoordMap = {};

    /*获取地图数据*/
    var mapFeatures = echarts.getMap(mapName).geoJson.features;
    mapFeatures.forEach(function (v) {
        var name = v.properties.name;
        geoCoordMap[name] = v.properties.cp;
    });

    //显示不同颜色用
    var getGeoData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };

    //基地坐标
    var getPointData = function (areaData) {
        return areaData;
    };

    //已有demo坐标
    var getYellowData = function (areaData) {
        var res = [];
        for (var i in areaData) {
            var data = areaData[i];
            if (data.demo == true && data.type == undefined) {
                res.push(data)
            }
        }
        return res;
    }

    var getBlueData = function (areaData) {
        var res = [];
        for (var i in areaData) {
            var data = areaData[i];
            if (data.type != undefined && data.type == "factory") {
                res.push(data)
            }
        }
        return res;
    }


    var option = {
        //给地图配色
        visualMap: {
            show: false,
            min: 0,
            max: 200,
            left: "left",
            top: "bottom",
            text: ["高", "低"], // 文本，默认为数值文本
            calculable: true,
            seriesIndex: [1],
            inRange: {
                color: ["#00467F", "#A5CC82"] // 蓝绿
            }
        },
        tooltip: {
            trigger: 'item',
            position: ['50%', '50%'],
            textStyle: {
                fontSize: 18
            },
            formatter: function (params) {
                if (params.data.demo != undefined && params.data.demo == false) {
                    const point = params.data;
                    // const name = `项目名称：${point.name} <br/>`;
                    // const area = `实施区域：${point.area} <br/>`;
                    // const desc = `<div class="tooptip">主要内容：${point.desc}</div>`;
                    // const html = name + area + desc;
                    const html =
                        `
                            <div class="tooltipbox">
                                <div class="tip">
                                    <span class="tip-text">项目名称：</span>
                                    <span class="tip-value">${point.name}</span>
                                </div>
                                <div class="tip">
                                    <span class="tip-text">实施区域：</span>
                                    <span class="tip-value">${point.area}</span>
                                </div>
                                <div class="tip">
                                    <span class="tip-text">主要内容：</span>
                                    <span class="tip-value">${point.desc}</span>
                                </div>
                            </div>
                        `;
                    return html;
                }
            },
        },
        //使用geo插件绘制地图，配置插件属性
        geo: {
            show: true,
            map: mapName,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        color: "white",
                        fontSize: 12,
                    }
                }
            },
            itemStyle: {
                //默认状态
                normal: {
                    areaColor: "#f6efa6",
                    borderColor: "#fff"
                },
                //高亮状态
                emphasis: {
                    areaColor: "#2B91B7"
                }
            },
            scaleLimit: {
                min: 1.2,
                max: 8
            },
            roam: true,
            zoom: 1.2
        },
        series: [
            //普通项目散点
            {
                name: "散点",
                type: "scatter",
                coordinateSystem: "geo",
                symbolSize: function (val) {
                    return 15;
                },
                itemStyle: {
                    normal: {
                        color: "#CC0033"
                    }
                },
                data: getPointData(areaData)
            },
            //给地图设置数据，根据数据配色
            {
                type: "map",
                map: mapName,
                geoIndex: 0,
                aspectScale: 0.75, //长宽比
                showLegendSymbol: false, // 存在legend时显示
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false,
                        textStyle: {
                            color: "#fff"
                        }
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: "#031525",
                        borderColor: "#3B5077"
                    },
                    emphasis: {
                        areaColor: "#2B91B7"
                    }
                },
                animation: false,
                data: getGeoData(data) //颜色
            },
            //拥有平台的项目点
            {
                name: "Have Demo",
                type: "effectScatter",
                coordinateSystem: "geo",
                data: getYellowData(areaData),
                symbolSize: function (val) {
                    return 25;
                },
                showEffectOn: "render",
                rippleEffect: {
                    brushType: "stroke"
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        show: false,
                        textStyle: {
                            color: "#fff",
                            fontSize: 12
                        }
                    },
                    emphasis: {
                        show: true,
                        position: "top",
                        textStyle: {
                            color: "yellow",
                            fontSize: 20,
                            fontWeight: 1000
                        },
                        formatter: function (params) {
                            if (params.data.demo != undefined && params.data.demo == true) {
                                return params.data.name;
                            } else {
                                return "";
                            }
                        }
                    }
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        color: "white",
                        fontSize: 20,
                        fontWeight: 1000
                    },
                    formatter: function (params) {
                        return params.data.name;
                    }
                },
                itemStyle: {
                    normal: {
                        color: "yellow",
                        shadowBlur: 10,
                        shadowColor: "yellow"
                    }
                },
                zlevel: 1
            },
            //工厂项目
            {
                name: "Have Demo",
                type: "effectScatter",
                coordinateSystem: "geo",
                data: getBlueData(areaData),
                symbolSize: function (val) {
                    return 27;
                },
                showEffectOn: "render",
                rippleEffect: {
                    brushType: "stroke"
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        show: false,
                        textStyle: {
                            color: "#fff",
                            fontSize: 12
                        }
                    },
                    emphasis: {
                        show: true,
                        position: "top",
                        textStyle: {
                            color: "yellow",
                            fontSize: 20,
                            fontWeight: 1000
                        },
                        formatter: function (params) {
                            if (params.data.demo != undefined && params.data.demo == true) {
                                return params.data.name;
                            } else {
                                return "";
                            }
                        }
                    }
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        color: "white",
                        fontSize: 20,
                        fontWeight: 1000
                    },
                    formatter: function (params) {
                        return params.data.name;
                    }
                },
                itemStyle: {
                    normal: {
                        color: "#0066CC",
                        shadowBlur: 15,
                        shadowColor: "#0066CC"
                    }
                },
                zlevel: 1
            }
        ]
    };

    function search(name) {
        $("#refresh").show();
        var copy_data = areaData;
        var res = [];
        var provinceName = name;
        for (var i in copy_data) {
            if (areaData[i].product != null) {
                var stationName = areaData[i].product;
                if (stationName.indexOf(name) != -1) {
                    res.push(areaData[i]);
                    provinceName = areaData[i].province;
                }
            }
            if (areaData[i].province != null) {
                var province = areaData[i].province;
                if (province.indexOf(name) != -1) {
                    res.push(areaData[i]);
                }
            }
        }
        option.series[0].data = getPointData(res);
        option.series[2].data = getYellowData(res);
        option.series[3].data = getBlueData(res);
        if (geoCoordMap[provinceName] != undefined) {
            option.geo.zoom = 8;
            option.geo.center = geoCoordMap[provinceName];
        }
        mapChart.setOption(option);
        $("#refresh").show();
        $(".header-search").hide();
    }

    //搜索
    $(document).on("click", "#search", function () {
        var name = $("#search-text").val();
        if ("" != name) {
            search(name);
        } else {
            showAll();
        }
    });

    //搜索关键词
    $(document).on("click", "#hotwords a", function () {
        var name = $(this).text();
        $("#search-text").val(name);
        if ("" != name) {
            search(name);
        } else {
            showAll();
        }
    });

    //搜索关键词
    $(".header-search a").on("click", function () {
        var name = $(this).text();
        $("#search-text").val(name);
        if ("" != name) {
            search(name);
        } else {
            showAll();
        }
    });

    $("input#search-text").focus(function () {
        $(".header-search").show();
    });

    $(".header-search").mouseover(function () {
        $(".header-search").show();
    });

    $("input#search-text").blur(function () {
        setTimeout(() => {
            $(".header-search").hide();
        }, 300);
    });

    function showAll() {
        option.series[0].data = getPointData(areaData);
        option.series[2].data = getYellowData(areaData);
        option.series[3].data = getBlueData(areaData);
        option.geo.zoom = 1.2;
        option.geo.center = [104.7388500000, 35.7350600000];
        mapChart.setOption(option);
        $(".header-search").hide();
        $("#search-text").val('');
    }

    //查看全部
    $(document).on("click", "#refresh", function () {
        showAll();
    });

    //监听enter
    $(document).keyup(function (event) {
        if (event.keyCode == 13) {
            $("#search").trigger("click");
        }
    });

    mapChart.on("click", function (params) {
        //点击事件
        if (params.componentType === "series") {

            var name = params.name;
            if (name == "绵阳麦冬产业管理平台") {
                window.location.href = "http://zy.gdnxeco.com";
            } else if (name == "梅州市乡村振兴产业平台") {
                window.location.href = "http://jc.gdnxeco.com";
            } else if (name == "广东养殖基地环保管理平台") {
                window.location.href = "http://pig.gdnxeco.com";
            } else if (name.indexOf("蒲江") != -1) {
                window.location.href = "http://pj.gdnxeco.com/"
            } else if (name.indexOf("四川餐厨基地环保管理平台") != -1) {
                window.location.href = "http://cc.gdnxeco.com/"
            }
        }
    });

    mapChart.on("click", function (params) {
        if (params.componentSubType == "map") {
            mapChart.setOption({
                geo: [{
                    zoom: 8,
                    center: [params.data.value[0], params.data.value[1]]
                }]
            });
        }

    });
    mapChart.setOption(option);
    window.onresize = mapChart.resize;
}

$(function () {
    //barShow();
    getMap();
    $(window).resize(function () {          //当浏览器大小变化时
        setMapBox();
    });

    $("#fullScreen").bind("click", function () {
        if ($(this).html() == "开启全屏") {
            $(this).html("退出全屏");
            fullScreen();
        } else {
            $(this).html("开启全屏");
            exitFull();
        }
    });
    function fullScreen() {
        var el = document.documentElement;
        var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen;

        if (typeof rfs != "undefined" && rfs) {
            rfs.call(el);
        } else if (typeof window.ActiveXObject != "undefined") {
            // for Internet Explorer 
            var wscript = new ActiveXObject("WScript.Shell");
            if (wscript != null) {
                wscript.SendKeys("{F11}");
            }
        }

    }

    //退出全屏 判断浏览器种类
    function exitFull() {
        // 判断各种浏览器，找到正确的方法
        var exitMethod = document.exitFullscreen || //W3C
            document.mozCancelFullScreen ||    //Chrome等
            document.webkitExitFullscreen || //FireFox
            document.webkitExitFullscreen; //IE11
        if (exitMethod) {
            exitMethod.call(document);
        }
        else if (typeof window.ActiveXObject !== "undefined") {//for Internet Explorer
            var wscript = new ActiveXObject("WScript.Shell");
            if (wscript !== null) {
                wscript.SendKeys("{F11}");
            }
        }
    }

    // $('#fullScreen').click(function(){

    //     if('进入全屏' == $("#fullScreen").text()){
    //         var docElm = document.documentElement;
    //         if (docElm.requestFullscreen) {
    //             docElm.requestFullscreen();
    //         }else if (docElm.msRequestFullscreen) {
    //             docElm.msRequestFullscreen();
    //         }else if (docElm.mozRequestFullScreen) {
    //             docElm.mozRequestFullScreen();
    //         }else if (docElm.webkitRequestFullScreen) {
    //             docElm.webkitRequestFullScreen();
    //         }
    //         $("#fullScreen").text("退出全屏");
    //     }else{
    //         if (document.exitFullscreen) {
    //             document.exitFullscreen();
    //         }else if (document.msExitFullscreen) {
    //             document.msExitFullscreen();
    //         }else if (document.mozCancelFullScreen) {
    //             document.mozCancelFullScreen();
    //         }else if (document.webkitCancelFullScreen) {
    //             document.webkitCancelFullScreen();
    //         }
    //         $("#fullScreen").text("进入全屏");
    //     }
    // });
});
