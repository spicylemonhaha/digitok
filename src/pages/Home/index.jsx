import { useRef } from 'react'
import { useEffect } from 'react'
// import { useRef } from 'react'
import AboutWe from '../../components/AboutWe'
import Banner from '../../components/Banner'
import Mission from '../../components/Mission'
import s from './style.module.less'
function Home() {
  // 拿到各自的 dom 如果到了那个区域则切换背景图或者做对应的操作
  const home = useRef(null)
  const callBackArr = [
    (item) => {
      const homeDom = home.current
      if (homeDom) {
        homeDom.style.backgroundColor = '#F8EDE3'
        item.style.opacity = 1
      }
    },
    (item) => {
      const homeDom = home.current
      if (homeDom) {
        homeDom.style.backgroundColor = '#7D6E83'
        item.style.opacity = 1
      }
    },
    (item) => {
      const homeDom = home.current
      if (homeDom) {
        homeDom.style.backgroundColor = 'rgb(238, 199, 180)'
        item.style.opacity = 1
      }
    },
  ]
  const monitorFn = () => {
    // 更新时机
    // 1、dom顶部距离窗口顶部距离在范围内
    // 2、dom底部距离窗口底部距离在范围内
    const homeCards = Array.from(document.getElementsByClassName('homeCard'))
    homeCards.forEach((item, index) => {
      const gap = 300
      const { top, bottom } = item.getBoundingClientRect()
      if ((top < gap && top >= 0) || (bottom > gap && bottom < gap + 50)) {
        callBackArr[index](item)
      }
    })
  }
  useEffect(() => {
    // console.log(banner.dom.current)
    monitorFn()
    window.addEventListener('scroll', monitorFn)
  }, [])
  return (
    <div>
      <div ref={home} className={s.homeBox}></div>
      <div className={s.logo}>Digitok</div>
      <div className={s.arrowsBody}>
        <div className={s.arrow}></div>
        <div className={s.arrow}></div>
        <div className={s.arrow}></div>
      </div>
      <div className="homeCard" style={{ opacity: 0, transition: '1s' }}>
        <Banner></Banner>
      </div>
      <div className="homeCard" style={{ opacity: 0, transition: '1s' }}>
        <Mission></Mission>
      </div>
      <div className="homeCard" style={{ opacity: 0, transition: '1s' }}>
        <AboutWe></AboutWe>
      </div>
    </div>
  )
}

export default Home
