import React, { memo, useEffect } from 'react'
import * as echarts from 'echarts';
import Axios from 'axios'

import './less/index.less'
export default memo(function LQSource() {
    useEffect(() => {
        const myChart = echarts.init(document.querySelector('.ChinaMap'));
        Axios.get('http://localhost:3000/static/china.json').then(res => {
            var colors = [
                ["#1DE9B6", "#F46E36", "#04B9FF", "#5DBD32", "#FFC809", "#FB95D5", "#BDA29A", "#6E7074", "#546570", "#C4CCD3"],
                ["#37A2DA", "#67E0E3", "#32C5E9", "#9FE6B8", "#FFDB5C", "#FF9F7F", "#FB7293", "#E062AE", "#E690D1", "#E7BCF3", "#9D96F5", "#8378EA", "#8378EA"],
                ["#DD6B66", "#759AA0", "#E69D87", "#8DC1A9", "#EA7E53", "#EEDD78", "#73A373", "#73B9BC", "#7289AB", "#91CA8C", "#F49F42"],
            ];

            var colorIndex = 0;
            var r = 1;//右侧流入流出文字控制
            var geoCoordMap = {
                '北京市': [116.4551, 40.2539],
                "天津": [117.4219, 39.4189],
                "河北": [114.4995, 38.1006],
                "山西": [112.3352, 37.9413],
                '内蒙古': [110.3467, 41.4899],
                "辽宁": [123.1238, 42.1216],
                "吉林": [125.8154, 44.2584],
                '黑龙江': [127.9688, 45.368],
                '上海': [121.4648, 31.2891],
                "江苏": [118.8062, 31.9208],
                "浙江": [119.5313, 29.8773],
                "安徽": [117.29, 32.0581],
                "福建": [119.4543, 25.9222],
                "江西": [116.0046, 28.6633],
                "山东": [117.1582, 36.8701],
                "河南": [113.4668, 34.6234],
                "湖北": [114.3896, 30.6628],
                "湖南": [113.0823, 28.2568],
                "广东": [113.12244, 23.009505],
                "广西": [108.479, 23.1152],
                "海南": [110.3893, 19.8516],
                "重庆": [108.384366, 30.439702],
                "四川": [103.9526, 30.7617],
                "贵州": [106.6992, 26.7682],
                "云南": [102.9199, 25.4663],
                "西藏": [91.11, 29.97],
                "陕西": [109.1162, 34.2004],
                "甘肃": [103.5901, 36.3043],
                "宁夏": [106.3586, 38.1775],
                "青海": [101.4038, 36.8207],
                "新疆": [87.9236, 43.5883],
            };

            var d1 = {
                '北京市': 25748,
                "天津": 84305,
                "河北": 198009,
                "山西": 156045,
                '内蒙古': 164346,
                "辽宁": 206868,
                "吉林": 44811,
                '黑龙江': 61094,
                '上海': 84305,
                "江苏": 181775,
                "浙江": 188679,
                "安徽": 396391,
                "福建": 96674,
                "江西": 135172,
                "山东": 264100,
                "河南": 184823,
                "湖北": 131000,
                "湖南": 184535,
                "广东": 349011,
                "广西": 151143,
                "海南": 17325,
                "重庆": 87241,
                "四川": 167759,
                "贵州": 72703,
                "云南": 104329,
                "西藏": 1850,
                "陕西": 141579,
                "甘肃": 51463,
                "青海": 13372,
                "宁夏": 40914,
                "新疆": 66908,

            };

            var d2 = {
                '北京市': 26551,
                "天津": 89980,
                "河北": 209946,
                "山西": 164918,
                '内蒙古': 191869,
                "辽宁": 222138,
                "吉林": 48311,
                '黑龙江': 60213,
                '上海': 89980,
                "江苏": 196153,
                "浙江": 194250,
                "安徽": 434298,
                "福建": 111757,
                "江西": 151878,
                "山东": 264459,
                "河南": 200801,
                "湖北": 150762,
                "湖南": 203053,
                "广东": 343491,
                "广西": 163023,
                "海南": 23632,
                "重庆": 97377,
                "四川": 159034,
                "贵州": 85672,
                "云南": 108544,
                "西藏": 1914,
                "陕西": 157012,
                "甘肃": 57240,
                "青海": 14638,
                "宁夏": 41308,
                "新疆": 72168,
            };

            var d3 = {
                '北京市': 20078,
                "天津": 90893,
                "河北": 198024,
                "山西": 161165,
                '内蒙古': 175112,
                "辽宁": 202021,
                "吉林": 43333,
                '黑龙江': 54478,
                '上海': 90893,
                "江苏": 198998,
                "浙江": 201231,
                "安徽": 345756,
                "福建": 111041,
                "江西": 130349,
                "山东": 261849,
                "河南": 192859,
                "湖北": 153904,
                "湖南": 199716,
                "广东": 339225,
                "广西": 149714,
                "海南": 22287,
                "重庆": 103833,
                "四川": 154567,
                "贵州": 84540,
                "云南": 107608,
                "西藏": 2125,
                "陕西": 140900,
                "甘肃": 58251,
                "青海": 15962,
                "宁夏": 42626,
                "新疆": 70673,
            };

            var d4 = {
                '北京市': 20734,
                "天津": 88324,
                "河北": 210586,
                "山西": 167076,
                '内蒙古': 186726,
                "辽宁": 207064,
                "吉林": 45060,
                '黑龙江': 53569,
                '上海': 88324,
                "江苏": 202070,
                "浙江": 215558,
                "安徽": 364567,
                "福建": 120352,
                "江西": 138118,
                "山东": 285386,
                "河南": 206087,
                "湖北": 162460,
                "湖南": 206527,
                "广东": 366839,
                "广西": 160761,
                "海南": 21786,
                "重庆": 107996,
                "四川": 160970,
                "贵州": 89526,
                "云南": 115505,
                "西藏": 1971,
                "陕西": 149046,
                "甘肃": 60661,
                "青海": 16881,
                "宁夏": 43260,
                "新疆": 71961,
            };

            var d5 = {
                '北京市': 20110,
                "天津": 96850,
                "河北": 228854,
                "山西": 189516,
                '内蒙古': 213318,
                "辽宁": 216135,
                "吉林": 49903,
                '黑龙江': 56398,
                '上海': 96850,
                "江苏": 220532,
                "浙江": 242502,
                "安徽": 403426,
                "福建": 132227,
                "江西": 154437,
                "山东": 327006,
                "河南": 230114,
                "湖北": 188107,
                "湖南": 225551,
                "广东": 392481,
                "广西": 174642,
                "海南": 31351,
                "重庆": 115536,
                "四川": 172922,
                "贵州": 96242,
                "云南": 129298,
                "西藏": 2203,
                "陕西": 163079,
                "甘肃": 66204,
                "青海": 17923,
                "宁夏": 38187,
                "新疆": 84395,
            };

            var d6 = {
                '北京市': 20873,
                "天津": 106983,
                "河北": 249323,
                "山西": 211497,
                '内蒙古': 232525,
                "辽宁": 223346,
                "吉林": 52156,
                '黑龙江': 55190,
                '上海': 106983,
                "江苏": 233157,
                "浙江": 269083,
                "安徽": 406761,
                "福建": 136947,
                "江西": 174285,
                "山东": 354019,
                "河南": 259884,
                "湖北": 204307,
                "湖南": 229957,
                "广东": 416389,
                "广西": 190652,
                "海南": 22040,
                "重庆": 128491,
                "四川": 187385,
                "贵州": 102537,
                "云南": 140670,
                "西藏": 2433,
                "陕西": 173245,
                "甘肃": 20386,
                "青海": 18905,
                "宁夏": 38916,
                "新疆": 97498,
            };

            var d7 = {
                '北京市': 22808,
                "天津": 121124,
                "河北": 242445,
                "山西": 192192,
                '内蒙古': 182702,
                "辽宁": 178253,
                "吉林": 43193,
                '黑龙江': 50475,
                '上海': 121124,
                "江苏": 261711,
                "浙江": 289071,
                "安徽": 368248,
                "福建": 134419,
                "江西": 150950,
                "山东": 309410,
                "河南": 219024,
                "湖北": 188133,
                "湖南": 189740,
                "广东": 358288,
                "广西": 183036,
                "海南": 18456,
                "重庆": 112970,
                "四川": 177283,
                "贵州": 83402,
                "云南": 83402,
                "西藏": 4025,
                "陕西": 154749,
                "甘肃": 63610,
                "青海": 14945,
                "宁夏": 42511,
                "新疆": 84423,
            };


            var year = ["2013", "2014", "2015", "2016", "2017", "2018", '2019'];
            var mapData = [
                [],
                [],
                [],
                [],
                [],
                [],
                []
            ];

            /*柱子Y名称*/
            var categoryData = [];
            var barData = [];

            for (let key in geoCoordMap) {
                mapData[0].push({
                    "year": '2013',
                    "name": key,
                    "value": d1[key] / 10000,
                    "value1": d1[key] / 10000,
                });
                mapData[1].push({
                    "year": '2014',
                    "name": key,
                    "value": d2[key] / 10000,
                    "value1": d2[key] / 10000,
                });
                mapData[2].push({
                    "year": '2015',
                    "name": key,
                    "value": d3[key] / 1000,
                    "value1": d3[key] / 1000,
                });
                mapData[3].push({
                    "year": '2016',
                    "name": key,
                    "value": d4[key] / 10000,
                    "value1": d4[key] / 10000,
                });
                mapData[4].push({
                    "year": '2017',
                    "name": key,
                    "value": d5[key] / 10000,
                    "value1": d5[key] / 10000,
                });
                mapData[5].push({
                    "year": '2018',
                    "name": key,
                    "value": d6[key] / 10000,
                    "value1": d6[key] / 10000,
                });
                mapData[6].push({
                    "year": '2019',
                    "name": key,
                    "value": d7[key] / 10000,
                    "value1": d7[key] / 10000,
                });
            }
            // 排序问题
            for (var i = 0; i < mapData.length; i++) {
                mapData[i].sort(function sortNumber(a, b) { return a.value - b.value });
                barData.push([]);
                categoryData.push([]);
                for (var j = 0; j < mapData[i].length; j++) {
                    barData[i].push(mapData[i][j].value1);
                    categoryData[i].push(mapData[i][j].name);
                }
            }
            echarts.registerMap('china', res.data);
            var convertData = function (data) {
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

            const optionXyMap01 = {

                timeline: {
                    data: year,
                    axisType: 'category',
                    left: '10%',
                    right: '10%',
                    bottom: '3%',
                    width: '75%',

                    label: {
                        normal: {
                            textStyle: {
                                color: '#ddd'
                            }
                        },
                        emphasis: {
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    symbolSize: 10,
                    lineStyle: {
                        color: '#555'
                    },
                    checkpointStyle: {
                        borderColor: '#777',
                        borderWidth: 2
                    },
                    controlStyle: {
                        showNextBtn: true,
                        showPrevBtn: true,
                        normal: {
                            color: '#666',
                            borderColor: '#666'
                        },
                        emphasis: {
                            color: '#aaa',
                            borderColor: '#aaa'
                        }
                    },

                },
                baseOption: {
                    backgroundColor: '#012248',
                    animation: true,
                    animationDuration: 1000,
                    animationEasing: 'cubicInOut',
                    animationDurationUpdate: 1000,
                    animationEasingUpdate: 'cubicInOut',
                    // 网格位置
                    grid: {
                        right: '2%',
                        top: '10%',
                        bottom: '10%',
                        width: '18%'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        },
                    },

                    visualMap: {
                        min: 0,
                        max: 150,
                        left: 'left',
                        top: 'bottom',
                        text: ['高', '低'],
                        textStyle: {
                            color: 'blue'
                        },
                        // 可以下啦
                        calculable: false,
                        colorLightness: [0.8, 100],
                        // 颜色渐变
                        color: ['#c05050', '#e5cf0d', '#5ab1ef'],
                        dimension: 0,

                    },
                    geo: {
                        show: true,
                        map: 'china',
                        roam: true,
                        zoom: 1,
                        center: [110.9480, 35.2631],
                        label: {
                            emphasis: {
                                show: false
                            }
                        },
                        tooltip: {
                            trigger: 'item',
                            formatter: (p) => {
                                let val = p.value[2];
                                if (window.isNaN(val)) {
                                    return ''
                                } else {
                                    let txtCon =
                                        "<div style='text-align:left'>" + p.name + ":<br />货运量：" + val.toFixed(2) + '千万吨</div>';
                                    return txtCon;
                                }

                            }
                        },
                        itemStyle: {
                            normal: {
                                borderColor: 'rgba(147, 235, 248, 1)',
                                borderWidth: 1,
                                areaColor: {
                                    type: 'radial',
                                    x: 0.5,
                                    y: 0.5,
                                    r: 0.8,
                                    colorStops: [{
                                        offset: 0,
                                        color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                                    }],
                                    globalCoord: false // 缺省为 false
                                },
                                shadowColor: 'rgba(128, 217, 248, 1)',
                                // shadowColor: 'rgba(255, 255, 255, 1)',
                                shadowOffsetX: -2,
                                shadowOffsetY: 2,
                                shadowBlur: 10
                            },
                            emphasis: {
                                areaColor: '#389BB7',
                                borderWidth: 0
                            }
                        }
                    },

                    itemStyle: {
                        normal: {
                            areaColor: '#24CFF4',
                            borderColor: '#53D9FF',
                            borderWidth: 1.3,
                            shadowBlur: 15,
                            shadowColor: 'rgb(58,115,192)',
                            shadowOffsetX: 7,
                            shadowOffsetY: 6,
                        },
                        emphasis: {
                            areaColor: '#8dd7fc',
                            borderWidth: 1.6,
                            shadowBlur: 25,
                        }

                    },

                },
                options: [

                ]

            };
            for (var n = 0; n < year.length; n++) {

                optionXyMap01.options.push({

                    // 开头文字设置
                    title: [{
                        text: '一带一路货运量',
                        left: '38%',
                        top: '1%',
                        textStyle: {
                            color: 'skyblue',
                            fontSize: 18
                        }
                    },

                    ],
                    xAxis: {

                        type: 'value',
                        scale: true,
                        position: 'top',
                        min: 0,
                        boundaryGap: false,
                        splitLine: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            margin: 2,
                            textStyle: {
                                color: '#aaa'
                            }
                        },
                    },
                    yAxis: {
                        name: '                重量( 单位: 千万吨 )',
                        type: 'category',
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#ddd'
                            }
                        },
                        axisTick: {
                            show: false,
                            lineStyle: {
                                color: '#ddd'

                            }
                        },
                        axisLabel: {
                            interval: 0,
                            textStyle: {
                                color: '#ddd',
                                fontSize: 8
                            }
                        },
                        data: categoryData[n]
                    },

                    series: [
                        //未知作用
                        {
                            name: 'red',
                            type: 'scatter',
                            coordinateSystem: 'geo',
                            data: convertData(mapData[n]),

                            symbolSize: function (val) {
                                return 10;
                            },
                            label: {
                                normal: {
                                    formatter: '{b}',
                                    position: 'center',
                                    show: true
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: colors[n]
                                }
                            }
                        },
                        {
                            type: 'map',
                            map: 'shanxi',
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
                                        color: '#fff'
                                    }
                                }
                            },
                            roam: true,
                            itemStyle: {
                                normal: {
                                    areaColor: '#031525',
                                    borderColor: '#FFFFFF',
                                },
                                emphasis: {
                                    areaColor: '#2B91B7'
                                }
                            },
                            animation: false,
                            data: mapData
                        },
                        //地图点的动画效果
                        {
                            //  name: 'Top 5',
                            type: 'effectScatter',
                            coordinateSystem: 'geo',
                            data: convertData(mapData[n].sort(function (a, b) {
                                return b.value - a.value;
                            }).slice(0, 10)),
                            symbolSize: function (val) {
                                return 10;
                            },
                            showEffectOn: 'render',
                            rippleEffect: {
                                brushType: 'stroke'
                            },
                            hoverAnimation: true,
                            label: {
                                normal: {
                                    formatter: '{b}',
                                    position: 'right',
                                    show: true
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: colors[colorIndex][n],
                                    shadowBlur: 10,
                                    shadowColor: colors[colorIndex][n]
                                }
                            },
                            zlevel: 1
                        },
                        //地图线的动画效果

                        //柱状图
                        {
                            zlevel: 1.5,
                            type: 'bar',
                            barMaxWidth: 8,
                            symbol: 'none',
                            itemStyle: {
                                normal: {
                                    color: colors[n],
                                    barBorderRadius: [0, 30, 30, 0]
                                }
                            },
                            data: barData[n]
                        }
                    ]
                });
                if (r === 0) {
                    r = 1;
                } else {
                    r = 0;
                }
            }
            myChart.setOption(optionXyMap01)
            myChart.on('click', (p) => {
                console.log(mapData);
                console.log(p);
            })
        })

    })
    return (
        <div className='ChinaMap'>

        </div>
    )
})