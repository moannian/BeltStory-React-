// 内地详情
import React, { memo, useEffect } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import * as echarts from 'echarts';

import './Less/index.less'
export default memo(function OutbackDetails() {
    const { Details } = useSelector(state => ({
        Details: state.EpidemicReducer
    }), shallowEqual)
    useEffect(() => { console.log(Details); })
    useEffect(() => {
        if (Details.obj.data.total.length === 1) {
            const Totalecharts = echarts.init(document.querySelector('.total'))
            let color = [Details.obj.color];
            let echartData = [{
                name: Details.name,
                value: Details.value
            },
            ];
            let total = Details.value
            const option = {
                backgroundColor: '#fff',
                color: color,
                title: [{
                    text: '{name|' + '总量' + '}\n{val|' + total + '}',
                    top: 'center',
                    left: 'center',
                    textStyle: {
                        rich: {
                            name: {
                                fontSize: 12,
                                fontWeight: 'normal',
                                color: '#666666',
                                padding: [10, 0]
                            },
                            val: {
                                fontSize: 18,
                                fontWeight: 'bold',
                                color: '#333333',
                            }
                        }
                    }
                }],
                series: [{
                    type: 'pie',
                    name: '222',
                    radius: ['50%', '60%'],
                    center: ['50%', '50%'],
                    data: echartData,
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    itemStyle: {
                        borderWidth: 3,
                        borderColor: '#fff'
                    }
                }]
            };
            Totalecharts.setOption(option)


        }
        else {
            // 总量
            const Totalecharts = echarts.init(document.querySelector('.total'))
            const DetailsCharts = echarts.init(document.querySelector('.detail'))
            //#region 
            let color = ['red'];
            let echartData = [{
                name: Details.name,
                value: Details.value
            },
            ];
            let total = Details.value
            const option1 = {
                backgroundColor: '#fff',
                color: color,
                title: [{
                    text: '{name|' + '总量' + '}\n{val|' + total + '}',
                    top: 'center',
                    left: 'center',
                    textStyle: {
                        rich: {
                            name: {
                                fontSize: 12,
                                fontWeight: 'normal',
                                color: '#666666',
                                padding: [10, 0]
                            },
                            val: {
                                fontSize: 18,
                                fontWeight: 'bold',
                                color: '#333333',
                            }
                        }
                    }
                }],
                series: [{
                    type: 'pie',
                    name: '222',
                    radius: ['50%', '60%'],
                    center: ['50%', '50%'],
                    data: echartData,
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    itemStyle: {
                        borderWidth: 3,
                        borderColor: '#fff'
                    }
                }]
            };
            //#endregion
            Totalecharts.setOption(option1)
            var data = [...Details.obj.data.total[1].details]
            const option = {
                color: ['#bf19ff', '#854cff', '#5f45ff', '#02cdff', '#314976', '#f9e264', '#f47a75', '#009db2', '#024b51- 0780cf', '#765005'],

                title: {
                    text: Details.value,
                    subtext: '进出口详细',
                    textStyle: {
                        color: 'blue',
                        fontSize: 12,
                    },
                    subtextStyle: {
                        fontSize: 10,
                        color: ['#ff9d19']
                    },
                    x: 'center',
                    y: 'center',
                },
                grid: {
                    bottom: 90,
                    left: 90,
                    right: '10%'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{b}<br/> {c}列  ({d}%)'
                },

                series: [
                    // 主要展示层的
                    {
                        radius: ['45%', '95%'],
                        center: ['50%', '50%'],
                        type: 'pie',
                        label: {
                            position: 'inner',

                            formatter: '{b}',

                        },
                        data: data
                    },
                    // 边框的设置
                    {
                        radius: ['45%', '50%'],
                        center: ['50%', '50%'],
                        type: 'pie',

                        labelLine: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: false
                            }
                        },
                        animation: false,


                    }
                ]
            };
            DetailsCharts.setOption(option)

        }
    }, [Details])
    return (
        <div className='Odetails'>
            <div className='location'>
                {Details.name}
            </div>
            <div className='pie'>
                {Details.obj.data.total.length === 1 ? (<div className='total'></div>) :
                    (<>
                        <div className='total'></div>
                        <div className='detail'></div>
                    </>)}
            </div>
            <div className='introduce'>
                <h2>详细说明：</h2>
                <span>{Details.obj.content}</span>
            </div>
        </div>
    )
})
