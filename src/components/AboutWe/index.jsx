import { useState } from 'react'
import './index.less'
function AboutWe() {
  const members = [
    {
      name: 'Json',
      mes: [
        '本科毕业于世界排名TOP30⼤学，获得数学、计算机科学学位。',
        '曾就职于多家头部互联⽹⼤⼚并任团队负责⼈，拥有丰富的国内&海外产品管理经验',
      ],
    },
    {
      name: 'Mathew',
      mes: [
        '本硕毕业于世界排名TOP10⼤学，获得经济学、⾦融量化学位。曾就职于某⾏，拥有五年以上的⾦融⼀⼆级市场经验。',
        '关注区块链技术发展脉络，在Crypto领域有丰富经验。',
      ],
    },
    {
      name: 'Bill',
      mes: [
        '本科毕业于世界排名TOP30⼤学，获得计算机科学学位。',
        '曾就职于头部互联⽹⼤⼚，头部⾦融资讯科技公司，世界九⼤投⾏等公司及岗。',
      ],
    },
    {
      name: 'Ming',
      mes: [
        '本硕毕业于国内985⼤学，获得国际关系学位。',
        '⻓期参与区块链业务，曾就职于某加密货币交易所负责海外市场拓展业务',
      ],
    },
  ]
  const [focusMember, setFocusMembet] = useState(0)
  const memberDes = () => {
    let list
    switch (focusMember) {
      case 0:
        list = members[0].mes
        break
      case 1:
        list = members[1].mes
        break
      case 2:
        list = members[2].mes
        break
      case 3:
        list = members[3].mes
        break
    }
    const listRender = list.map((item) => {
      return (
        <div className="memberItem" key={item}>
          {item}
        </div>
      )
    })
    return listRender
  }
  const changeMember = (index) => {
    setFocusMembet(index)
  }
  return (
    <div className="aboutWeBox">
      <div className="aboutContent">
        <div className="who">
          <div className="aboutTitle">我们是谁</div>
          <div className="aboutMes">
            Digitok成⽴于2022.07，当前已经获得200w的天使投资，且与国内外多家头部W
            (ex. 1.435 club)&交易平台(玖数拍卖)达成战略合作关系。其核⼼成员如下:
          </div>
        </div>
        <div className="member">
          <div className="memberLeft">
            {members.map((item, index) => {
              return (
                <div
                  onClick={() => {
                    changeMember(index)
                  }}
                  className="memberName"
                  style={{ color: focusMember === index ? '#584b42' : 'grey' }}
                  key={item.name}
                >
                  <span>{item.name}</span>
                </div>
              )
            })}
          </div>
          <div className="memberRight">{memberDes()}</div>
        </div>
      </div>
      <div className="toTop" onClick={() => window.scrollTo(0, 0)}>
        联系我们 🎈
      </div>
    </div>
  )
}

export default AboutWe
