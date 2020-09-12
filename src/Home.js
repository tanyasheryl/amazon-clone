import React from "react";
import "./Home.css";
import Product from "./Product";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Carousel
          className="home__image"
          autoPlay={true}
          swipeable={true}
          interval={5000}
          transitionTime={3000}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
        >
          <div>
            <img src="https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2020/img/Events/XCM_Manual_ORIGIN_1237913_1255421_CA_OTC20_ca_ca_otu_gw_hero_phase2_ca_en_3237561_1500x600_1X_en_CA._CB408562909_.jpg" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="https://images-na.ssl-images-amazon.com/images/G/15/CA_MM/events/off_to_uni/2020_HGG_OTU_Phase_2_DesktopHero_EN_1500x600._CB409715208_.jpg" />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src="https://images-na.ssl-images-amazon.com/images/G/15/kindle/tahoe/gateway/P37745180_CA_EN_Gateway-Hero_AngryBirds_Key1_3000x1200._CB407246074_.jpg" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="https://images-na.ssl-images-amazon.com/images/G/15/kindle/journeys/MTM3M2NhM2Et/MTM3M2NhM2Et-MDZiMjBiMjkt-w1500._CB406836698_.jpg" />
            <p className="legend">Legend 1</p>
          </div>
        </Carousel>

        <div className="home__row">
          <Product
            id="7587565"
            title="The Lean Startup : How Constant Innovation Creates Radically Successful Business Paperback"
            price="29.99"
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="758786875"
            title="Kenwood Mix Stand Mixer for Baking, stylish Kitchen Mixer with K-beater"
            price="239"
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="674645635"
            title="Samsung LC8698698 49 Curved LED Gaming Monitor"
            price="199.99"
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466.jpg"
            rating={3}
          />
          <Product
            id="979683785"
            title="Amazon Echo (3rd Generation) | Smart Speaker with Alexa"
            price="98.99"
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            rating={5}
          />
          <Product
            id="7857858"
            title="New Apple iPad Pro(12.9 inch, Wi-Fi, 128 GB) - Silver"
            price="598"
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L.AC_SX385_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="67468635"
            title="Samsung LC8698698 49 Curved LED Gaming Monitor"
            price="199.99"
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
