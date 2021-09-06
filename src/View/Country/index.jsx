import React, { memo, useEffect, useRef, useState } from 'react'
import * as echarts from 'echarts';

import '@/assets/less/Country.less'

import Nav from '../Nav/index'
import { CountryDate } from '../../Other/List'
export default memo(function Country() {
    const [show, setShow] = useState(true)
    const [passdata, setPassDate] = useState(CountryDate.children[0].children[0])

    const Ref = useRef()
    const BorkenLineRef = useRef()
    const cancel = () => {
        setShow(false)
    }


    useEffect(() => {
        const MYChart = echarts.init(Ref.current)


        const option = {
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove'
            },
            series: [
                {
                    type: 'tree',

                    data: [CountryDate],

                    left: '2%',
                    right: '2%',
                    top: '15%',
                    bottom: '20%',

                    symbol: 'emptyCircle',

                    orient: 'vertical',

                    expandAndCollapse: true,

                    label: {
                        position: 'top',
                        top: 10,
                        rotate: 0,
                        verticalAlign: 'middle',
                        align: 'center',
                        fontSize: 18,

                    },

                    leaves: {
                        label: {
                            position: 'bottom',
                            rotate: -90,
                            verticalAlign: 'middle',
                            align: 'left',
                            fontSize: 12,
                        }
                    },


                }
            ]

        }
        MYChart.setOption(option)
        MYChart.on('click', function (params) {
            if (params.data.children === undefined) {
                setPassDate(params.data)
                setShow(true)
            }
        });
    })
    useEffect(() => {

        if (passdata.data !== undefined) {
            const BorKenLineEcharts = echarts.init(BorkenLineRef.current)
            const option = {
                title: {
                    text: passdata.name,
                    left: 'center',
                    top: "0",
                    textStyle: {
                        color: "black",
                        fontSize: 18,
                        fontWeight: '400'
                    }
                },
                color: ['#73A0FA', '#73DEB3', '#FFB761'],
                tooltip: {
                    trigger: 'axis',

                },
                grid: {
                    left: '35',
                    right: '25',
                    bottom: '24',
                    top: '75',
                    containLabel: true
                },
                legend: {
                    data: ['进出口总额', '从中国进口', '对中国出口'],
                    show: true,
                    left: 'center',
                    top: 25,
                    textStyle: {
                        fontSize: 14,
                        color: 'white'
                    },
                },
                xAxis: {
                    type: 'category',
                    data: ['2013', '2014', '2015', '2016', '2017', '2018'],
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        color: 'black',
                        textStyle: {
                            fontSize: 12
                        },
                    },
                },
                yAxis: {
                    type: 'value',
                    name: '万美元',
                    minInterval: 2000,
                    axisLabel: {
                        color: 'black',
                        textStyle: {
                            fontSize: 12
                        },
                    },

                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#F3F4F4'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                },
                series: [{
                    name: '进出口总额',
                    type: 'line',
                    smooth: true,
                    data: passdata.data.total
                },
                {
                    name: '从中国进口',
                    type: 'line',
                    smooth: true,
                    data: passdata.data.entrance
                },
                {
                    name: '对中国出口',
                    type: 'line',
                    smooth: true,
                    data: passdata.data.exit
                }
                ]
            };
            BorKenLineEcharts.setOption(option)
        }

    }, [passdata])
    return (
        <div className="Country">
            <Nav />
            <div className='Tree' ref={Ref}></div>
            <div className={show ? 'box' : ''}>
                <div className="cancel" onClick={cancel}></div>
                <div className="borkenLine" ref={BorkenLineRef}></div>
            </div>
        </div>

    )
})
