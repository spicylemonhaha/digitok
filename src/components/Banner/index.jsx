import './index.less'

function Banner() {
  return (
    <div className="bannerBox">
      <div className="container">
        <form action="">
          <h1>Web3时代的数字内容分发和创作激励平台。</h1>
          <p>
            如果您是漫画作者且希望通过Web3的⽅式帮助您的作品进⾏商
            业变现，欢迎留下您的联系⽅式(⼿机/微信/QQ)
          </p>
          <div className="emailBox">
            <i className="fas fa-envelope">✉</i>
            <input
              className="tbox"
              type="email"
              name=""
              placeholder="leave your contact information"
            />
            <button className="btn" type="button" name="button">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Banner
