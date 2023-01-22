import design from "./hotstar.module.css"
const Hotstar = () => {
    return (
        // <div>
        <section id={design.nav}>
            <article>
                <div className={design.first}>
                    <div className={design.content}>
                        <div className={design.icon}>
                            <i class="fa-solid fa-bars"></i>
                        </div>
                        <img class="brand-logo" src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt="Disney+&nbsp;Hotstar" />
                        <div className={design.heading}>
                            <ol>
                                <li><a href="">TV</a></li>
                                <li><a href="">Movies</a></li>
                                <li><a href="">Sports</a></li>
                                <li><a href="">Disney+</a></li>
                            </ol>
                        </div>
                        {/* <div className={design.kidsLogo}></div> */}
                    </div>
                </div>
                {/* ========================================================================================= */}
                <div className={design.second}>
                    <div className={design.search}>
                        <div className={design.searchInput}><input type="text" value="" placeholder="Search" /></div>
                        <div className={design.searchIcon}><i class="fa-sharp fa-solid fa-magnifying-glass" ></i></div>
                    </div>
                    <button >
                        SUBSCRIBE
                    </button>
                    <div className={design.login}>
                        LOGIN
                    </div>
                </div>
            </article>
        </section>
        // style={{ background: "rgb(17, 17, 37)" }}

    )
}

export default Hotstar