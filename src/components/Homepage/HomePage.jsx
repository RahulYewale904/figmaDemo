import React from "react";
import "./homepage.css";
import Illustrationimage from "../../assets/trafalgar-header illustration 1.png";
import Illustrstionimage2 from "../../assets/trafalgar-illustration sec02.svg";
import Illustrationimage3 from "../../assets/trafalgar-illustration 3.svg"
import CustomButton from "../../common/Button/CustomButton";
import { Grid } from "@mui/material";
import Frame from "../../assets/Frame.svg";
import Frame1 from "../../assets/Frame1.svg";
import Frame2 from "../../assets/Frame2.svg";
import Frame3 from "../../assets/Frame3.svg";
import Frame4 from "../../assets/Frame4.svg";
import Frame5 from "../../assets/Frame5.svg";
import Card from "../Card/Card";
import Slider from "../swiper/Slider";

const HomePage = () => {
  const items = [
    {
      image: Frame,
      header: "Search doctor",
      desc: "Choose your doctor from thousands of specialist, general, and trusted hospitals",
    },
    {
      image: Frame1,
      header: "Online pharmacy",
      desc: "Buy  your medicines with our mobile application with a simple delivery system",
    },
    {
      image: Frame2,
      header: "Consultation",
      desc: "Free consultation with our trusted doctors and get the best recomendations",
    },
    {
      image: Frame3,
      header: "Detail info",
      desc: "Free consultation with our trusted doctors and get the best recomendations",
    },
    {
      image: Frame4,
      header: "Emergency care",
      desc: "You can get 24/7 urgent care for yourself or your children and your lovely family",
    },
    {
      image: Frame5,
      header: "Tracking",
      desc: "Track and save your medical history and health data",
    },
  ];
  return (
    <>
      {/* header illustration */}

      <div className="illustration-section">
        <div className="leftContainer">
          <p className="leftContainer-header">Virtual healthcare for you</p>
          <p className="leftContainer-desc">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <CustomButton
            label={"consult Today"}
            style={{ backgroundColor: "#458FF6", color: "#FFF" }}
            varient={"contained"}
          />
        </div>
        <div className="illustration-image">
          <img
            src={Illustrationimage}
            alt="illustration-image"
            width="95%"
            height="95%"
          />
        </div>
      </div>

      {/* our services section */}

      <div className="services-section">
        <div className="services-section-heading">
          <p>Our Services</p>
          <div className="rectangle"></div>
        </div>
        <p className="service-section-desc">
          We provide to you the best choiches for you. Adjust it to your health
          needs and make sure your undergo treatment with our highly qualified
          doctors you can consult with us which type of service is suitable for
          your health
        </p>
        <Grid
          container
          spacing={2}
          sx={{ marginTop: "2rem", alignSelf: "center" }}
        >
          {items.map((item) => {
            return (
              <Grid lg={4} md={4} sm={6} xs={12}>
                <Card
                  key={item.header}
                  img={item.image}
                  header={item.header}
                  desc={item.desc}
                />
              </Grid>
            );
          })}
        </Grid>
        <CustomButton
          label={"Learn More"}
          style={{
            backgroundColor: "#E5E5E5",
            color: "blue",
            alignSelf: "center",
            margin: "1rem",
          }}
          varient={"outlined"}
        />
      </div>


{/* heathcare provide section */}

      <div className="illustration-section">
        <div className="illustration-image">
          <img src={Illustrstionimage2} alt="image" height="95%" width="95%" />
        </div>
        <div className="leftContainer">
          <p className="leftContainer-header">Leading healthcare providers</p>
          <p className="leftContainer-desc">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not just
            work. We take pride in the solutions we deliver
          </p>
          <CustomButton
            label={"Learn More"}
            style={{
              backgroundColor: "#E5E5E5",
              color: "blue",
              margin: "1rem",
            }}
            varient={"outlined"}
          />
        </div>
      </div>


      {/* Download App Section */}

      <div className="illustration-section">
        <div className="leftContainer">
          <p className="leftContainer-header">Download our mobile apps</p>
          <p className="leftContainer-desc">
            Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely
          </p>
          <CustomButton
            label={"Download"}
            style={{
              backgroundColor: "#E5E5E5",
              color: "blue",
              margin: "1rem",
            }}
            varient={"outlined"}
          />
        </div>
            <div className="illustration-image">
              <img src={Illustrationimage3} alt="image" height="95%" width="95%" />
            </div>
      </div>

      {/* slide image section */}

      <div className="image-slider">
        <Slider/>
      </div>
    </>
  );
};

export default HomePage;
