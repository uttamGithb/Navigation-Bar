import design from "./flipkart.module.css"
import pic from "./flipkart images/flipkart-Logo2.png"
import pic2 from "./flipkart images/flipkart-Logo.png"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const Flipkart = () => {
    return (
        <div id={design.header}>
            <div className={design.header1}>
                <img src={pic} alt="" />
                <div className={design.header11}>
                    <span style={{ color: "white", fontSize: "10px", fontFamily: "sans-serif" }}><i>Explore</i></span>
                    <span style={{ color: "#ffe500", fontSize: "10px", fontFamily: "sans-serif", fontWeight: "bold" }}><i>Plus</i></span>
                    <span>
                        <img width="10" src={pic2} alt="" />
                    </span>
                </div>
            </div>
            <div className={design.header2}>
                <input type="text" placeholder="Search for products,brands and more" />
                <i style={{ color: "#2874f0", marginRight: "10px" }} class="fa-sharp fa-solid fa-magnifying-glass"></i>
            </div>
            <div className={design.header3}>
                <button style={{ backgroundColor: "white" }}>Login</button>
            </div>
            <div className={design.header4}>Become a Seller</div>
            <div className={design.header5}>
                <span>More</span>
                < ExpandMoreIcon style={{ fontSize: "small" }} />
                {/* <i style={{background:"none",color:"white"}}     class="fa-light fa-angle-down"></i> */}
            </div>
            <div className={design.header6}>
                <i style={{ color: "white", fontSize: "13px", paddingRight: "4px" }} class="fa-solid fa-cart-shopping"></i>
                <span>Cart</span>
            </div>

        </div>
    )
}

export default Flipkart