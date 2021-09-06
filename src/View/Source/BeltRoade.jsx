import React, { memo, useRef, useState } from 'react'

import { TimerShaft } from '../../Other/List'
import '../../assets/less/BeltRoad.less'
export default memo(function BeltRoade() {
    const BoxRef = useRef()

    const BeltRef = useRef()

    const [hint, setHite] = useState('点击鼠标左滑');

    const MouseDown = (e) => {
        let LeftX = e.pageX - BoxRef.current.offsetLeft

        const move = (e) => {

            if (BoxRef.current.offsetLeft < -(BoxRef.current.offsetWidth) / 2) {
                setHite('点击鼠标右滑')
            } else {
                setHite('点击鼠标左滑')
            }
            if (e.pageX - LeftX > 0) {
                BoxRef.current.style.left = 0
            }
            else if (e.pageX - LeftX < -(BoxRef.current.offsetWidth - BeltRef.current.offsetWidth)) {
                BoxRef.current.style.left = -(BoxRef.current.offsetWidth - BeltRef.current.offsetWidth) + 100 + 'px'


            } else {
                BoxRef.current.style.left = e.pageX - LeftX + 'px'

            }

        }
        document.addEventListener('mousemove', move)
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', move)
        })

    }
    // 动画函数
    const animate = (obj, traget) => {
        clearInterval(obj.timer)
        obj.timer = setInterval(() => {
            //   // 缓动动画(目标值-现在的位置)/10
            let step = (traget - obj.offsetLeft) / 40
            if (step > 0) {
                step = Math.ceil(step)
            }
            else {
                step = Math.floor(step)
            }
            if (obj.offsetLeft === traget) {
                clearInterval(obj.timer)
            }
            obj.style.left = obj.offsetLeft + step + 'px'
        }, 15)
    }
    const LeftBtn = () => {
        animate(BoxRef.current, 0)
    }
    const RightBtn = () => {
        animate(BoxRef.current, -(BoxRef.current.offsetWidth - BeltRef.current.offsetWidth) + 120)
    }

    return (
        <div className='beltroad' ref={BeltRef}>
            <div className="box" onMouseDown={MouseDown} ref={BoxRef}>
                {TimerShaft.map(item => {
                    return (
                        <div className="dot" key={item.id} onMouseDown={MouseDown}>

                            <i></i>
                            <div className={item.id % 2 === 0 ? 'bottom_time' : 'top_time'}>
                                {item.Timer}
                            </div>
                            <div className={item.id % 2 === 0 ? 'top_content' : 'bottom_content'}>
                                <div>{item.title}</div>
                            </div>
                        </div>
                    )
                })}

            </div>

            <button className='btn_left' onClick={LeftBtn}>回到顶部</button>
            <h3 className='hint'>{hint}</h3>
            <button className='btn_right' onClick={RightBtn}>到达底部</button>
        </div>
    )
})
