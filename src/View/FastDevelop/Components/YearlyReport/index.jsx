
import React, { memo, useEffect, useState } from 'react'
import * as echarts from 'echarts';

import './less/index.less'

import { region } from '@/Other/List'
export default memo(function LQYearlyReport() {

    let [currentdata, setCurrent] = useState(region[0].data)
    let [currentRegion, setCurrentRegion] = useState(0)
    const btn = (item, index) => {
        return () => {
            setCurrent(item.data)
            setCurrentRegion(index)
        }
    }
    useEffect(() => {
        const MyEcharts = echarts.init(document.querySelector('.details'))
        var districtList = ['2013', '2014', '2015', '2016', '2017', '2018', '2019']
        let totals = [],//总额
            exit = [],//出口
            entrance = []//进口
        currentdata.total.forEach((item) => {
            let current = item / 100
            totals = [...totals, current]
        })

        currentdata.exit.forEach(item => {
            let current = item / 100
            exit = [...exit, current]
        })
        currentdata.entrance.forEach(item => {
            let current = item / 100
            entrance = [...entrance, current]
        })
        const option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                x: '85%', //用百分比 处理块与文字位置
                y: '1%',
                orient: 'vertical',
                textStyle: {
                    fontSize: 12,
                    lineHeight: 45,
                    color: 'black',
                },
                //selectedMode: false,    //选中哪个图例 false后图例不可点击
                data: ['进出口额', '出口额', '进口额']
            },
            xAxis: {
                type: 'category',
                data: districtList,
                axisLine: {
                    lineStyle: {
                        color: 'black'
                    }
                },
            },
            yAxis: {
                name: "金额( 单位: 百万美元 )",
                type: 'value',
                minInterval: 2000,
                axisLine: {
                    lineStyle: {
                        color: '#000'
                    }
                },
            },
            grid: { //用于处理图标放入过多空白问题
                top: '15%', //距上边距

                left: '10%', //距离左边距

                right: '5%', //距离右边距

                bottom: '12%', //距离下边距
            },
            series: [{
                name: '进出口额',
                data: totals,
                type: 'line',
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#30eafe'
                }, {
                    offset: 1,
                    color: '#1185fd'
                }]),
                showBackground: false,

            }, {
                name: '出口额',
                data: exit,
                type: 'bar',
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#ff9191'
                }, {
                    offset: 1,
                    color: '#ff696a'
                }]),
                showBackground: false,

            },
            {
                name: '进口额',
                data: entrance,
                type: 'bar',
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'skyblue'
                }, {
                    offset: 1,
                    color: 'skyblue'
                }]),
                showBackground: false,

            },
            ]
        };
        MyEcharts.setOption(option)
    }, [currentdata])

    return (
        <div className='YearlyReport'>
            <div className='region'>
                {
                    region.map((item, index) => {
                        return (
                            <div
                                key={item.id}
                                onClick={btn(item, index)}
                                className={index === currentRegion ? 'currentFont' : ''}>{item.location}</div>
                        )
                    })
                }
            </div>
            <div className="details">

            </div>
        </div >
    )
})


