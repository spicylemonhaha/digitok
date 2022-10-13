import { useEffect } from 'react'
import { useRef } from 'react'
import AboutWe from '../../components/AboutWe'
import Banner from '../../components/Banner'
import Mission from '../../components/Mission'

function Home() {
  // 拿到各自的 dom 如果到了那个区域则切换背景图或者做对应的操作

  // 每次scoll事件拿到所有的组件，符合条件的更新对应的背景图
  // 条件顶部到达对应位置范围内则更新
  // 更新什么，更新对应的背景图，所以每个组件需要一个自己的背景图
  const banner = {
    dom: useRef(null),
  }
  useEffect(() => {
    console.log(banner.dom.current)
  }, [])
  return (
    <div>
      <div ref={banner.dom}>
        <Banner></Banner>
      </div>
      <Mission></Mission>
      <AboutWe></AboutWe>
    </div>
  )
}

export default Home
