import React, { memo, useRef, useEffect } from 'react'
import * as echarts from 'echarts';

import './less/index.less'
export default memo(function Bar() {
    useEffect(() => {
        const MyCharts = echarts.init(Ref.current)
        const option = {
            title: {
                text: '中欧班列开行',
                left: '40%',

            },
            color: 'skyblue',
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },

            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                    axisTick: {
                        alignWithLabel: true
                    },
                    // 修改刻度标签相关样式
                    axisLabel: {
                        color: 'skyblue',
                        fontSize: '12'
                    },
                    // 不显示x坐标轴样式
                    axisLine: {
                        show: false
                    }
                }
            ],
            yAxis: [
                {
                    name: '辆',
                    type: 'value',

                }
            ],
            series: [

                {
                    type: 'bar',
                    itemStyle: {
                        barBorderRadius: 3
                    },
                },
                {
                    type: 'bar',
                    barWidth: '40%',
                    label: {
                        show: true,
                        position: 'top'
                    },
                    data: [17, 42, 80, 308, 815, 1720, 3673, 6363, 8225, 12400]
                }

            ]
        };
        MyCharts.setOption(option)
        MyCharts.on('click', function (p) {
            console.log(p.dataIndex);
        })
    }, [])
    const Ref = useRef()
    return (
        <div className='Bar' ref={Ref}>

        </div>
    )
})
