import React, { memo, useRef } from 'react';

import Zhangsai from '../../assets/img/zhangqian.jpg';
import BanChao from '../../assets/img/banchao.jpg';
import '../../assets/less/Soucre.less';
import { Carousel } from 'antd'
export default memo(function LQSource() {
    const Ref = useRef()
    return (
        <div className='soucre'>
            <div className="content">
                <h1 h1 > 断断续续的丝绸之路</h1 >
                <p className='title'>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;丝绸之路是起始于中国，连接亚洲、非洲和欧洲的古代路上商业贸易路线。
                    从运输方式上分为陆上丝绸之路和海上丝绸之路。丝绸之路是一条东方与西方之间在经济、政治、文化进行交流的主要道路。
                    它最初的作用是运输中国古代出产的丝绸
                    瓷器等商品。德国地理学家FerdinandFreiherrvonRichthofen最早在19世纪70年代将之命名为“丝绸之路”。
            </p>

                <div className="m">
                    <Carousel ref={Ref} >
                        <div className='box'>
                            <p>

                                <img src={Zhangsai} alt=''></img>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;西汉时期，张骞（约公元前164年―前114年）于（公元前138年―公元前126年）从长安（今陕西西安）出发，
                            联络大月氏人，共同夹击匈奴。首次开拓丝绸之路，被称为“凿空之旅”。
                        </p>
                        </div>
                        <div className='box'>
                            <h2>几乎断绝的丝绸之路</h2>
                            <p className='content'>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;罗马人征服叙利亚的塞琉西帝国和埃及的托勒密王朝后，通过安息帝国、
                                贵霜帝国和阿克苏姆帝国取得从丝绸之路上传来的中国丝绸，西汉末年，丝绸之路一度断绝。
                   </p>
                        </div>
                        <div className='box'>
                            <p>
                                <img src={BanChao} alt=''></img>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;东汉时期，班超从洛阳出发，再次出使西域，他到达了西域，他的随从到达了罗马。这是东西方文明的第一次对话。
                            也是在东汉，印度僧人沿着丝绸之路到达洛阳，将佛教传入中国，从另一个角度拓展了丝绸之路。
                        </p>
                        </div>

                    </Carousel>
                    <button className=' btn left' onClick={() => {
                        Ref.current.prev()
                    }}></button>
                    <button className='btn right'
                        onClick={() => {
                            Ref.current.next()
                        }}></button>
                </div>
            </div>
        </div>
    )
})
