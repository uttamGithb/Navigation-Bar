import design from "./tcs.module.css"
import pic from "./tcs-icon.svg"
import pic2 from "./tcs-icon2.svg"
const Tcs = () => {
  return (
    <section id={design.nav}>
      <article>
        <div className={design.icon1}>
          <img class="brand-logo-img" src={pic} title="Tata Consultancy Services" alt="Tata Consultancy Services" className={design.mainImg}></img>
        </div>
        {/* --------------------------------------------------------------------   */}
        <div className={design.info}>
          <ol>
            <li><a href="">What we do</a></li>
            <li><a href="">Who we are</a></li>
            <li><a href="">Insights</a></li>
            <li><a href="">Careers</a></li>
            <li><a href="">Investors</a></li>
          </ol>
        </div>
        {/* ------------------------------------------------------------------------ */}
        <div className={design.second}>

            <div className={design.about}>
              <ol>
                <li><a href="">CONTACT US</a></li>
                <li><a href="">TCS WORLDWIDE</a></li>
              </ol>
            </div>
            <div className={design.search}>
              <div className={design.spa}></div>
            </div>
            <div className={design.icon2}>
              <img src={pic2} alt="" />
            </div>

        </div>
        {/* --------------------------------------------------------------------- */}

      </article>
    </section>
  )
}

export default Tcs