import React, { memo, useRef, useEffect } from 'react'
import * as echarts from 'echarts';

import './Less/index.less'
export default memo(function Disk() {
    const Ref = useRef();
    useEffect(() => {
        const Mycharts = echarts.init(Ref.current)
        let title = '2020口岸进出境详细列数';
        let color = ['#0E7CE2', '#FF8352', '#E271DE', '#F8456B', '#00FFFF', '#4AEAB0'];
        let echartData = [{
            name: "阿拉山口",
            value: "5027"
        },
        {
            name: "霍尔果斯",
            value: "4652"
        },
        {
            name: "二连浩特",
            value: "2297"
        },
        {
            name: "满洲里",
            value: "3585"
        }, {
            name: "绥芬河",
            value: "217"
        }
        ];
        let total = 12400

        const option = {
            backgroundColor: '#fff',
            tooltip: {

            },
            legend: {
                icon: 'circle',
                orient: 'horizontal',
                left: 'center',
                bottom: 10,
                itemWidth: 10,
                itemHeight: 10,
            },
            color: color,
            title: [{
                text: '{name|' + title + '}\n{val|' + total + '}',
                top: 'center',
                left: 'center',
                textStyle: {
                    rich: {
                        name: {
                            fontSize: 14,
                            fontWeight: 'normal',
                            color: '#666666',
                            padding: [10, 0]
                        },
                        val: {
                            fontSize: 32,
                            fontWeight: 'bold',
                            color: '#333333',
                        }
                    }
                }
            }],
            series: [{
                type: 'pie',
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
        Mycharts.setOption(option)
    }, [])
    return (
        <div className='Disk' ref={Ref} >

        </div>
    )
})
