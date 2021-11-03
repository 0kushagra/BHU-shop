import React from 'react'
import "./Home.css"
import Product from "./Product.js"
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" alt=""></img>

                <div className="home__row">
                    <Product id="1" title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Hardcover – Illustrated, September 13, 2011" image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.us0iNtMKcYPDVBHR8BQSiAAAAA%26pid%3DApi&f=1" price={19.99} rating={3} />
                    <Product id="2" title='2020 Newest Acer Aspire 5 Slim Laptop 15.6" FHD IPS Display, AMD Ryzen 3 3200u (up to 3.5GHz), Vega 3 Graphics, 8GB RAM DDR4, 256GB PCIe SSD, Backlit KB,WiFi,HDMI, Win10 w/Ghost Manta Accessories' image="https://images-na.ssl-images-amazon.com/images/I/41vMYgD92xL.jpg" price={428} rating={4} />
                    
                    
                </div>
                <div className="home__row">
                <Product id="3" title='UMIDIGI GPS Smart Watch, Activity Fitness Tracker with Heart Rate Monitor, 1.3" Touch Screen Pedometer Smartwatch for Mens Womens, 5ATM Waterproof Step Counter Compatible with iPhone, Samsung, Android' image="https://m.media-amazon.com/images/I/61TO9r5l5zL._AC_UY327_FMwebp_QL65_.jpg" price={50} rating={3} />
                <Product id="4" title='Samsung Electronics UN32N5300AFXZA 32" 1080p Smart LED TV (2018), Black' image="https://m.media-amazon.com/images/I/91UsHjAPTlL._AC_UL480_FMwebp_QL65_.jpg" price={238} rating={4} />
                <Product id="5" title="BEBONCOOL PS4 Controller Charger, Controller USB Charging Station Dock for DualShock 4, For PlayStation 4 Charging Station for Playstation4 / PS4 / PS4 Slim / PS4 Pro Controller-Black" image="https://m.media-amazon.com/images/I/41VbT96pAWL._AC_SY200_.jpg" price={14.98} rating={3} />
                </div>
                <div className="home__row">
                <Product id="6" title="Bedtime Originals Twinkle Toes Pink Elephant Plush, Hazel" image="https://m.media-amazon.com/images/I/41-7l-po+EL._AC_SY200_.jpg" price={5.99} rating={2} />
                </div>
            </div>
        </div>
    )
}

export default Home
