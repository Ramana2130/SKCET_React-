import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './try.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom";
import Typography from '@mui/material/Typography';





import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
  IconButton,
  colors,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// import DrawerComp from "./DrawerComps";
import Footer from "./footer";





const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [event, setEvent] = useState(null); 

  const handleCardEnter = (id) => {
    setEvent(id);
  };

  const handleCardLeave = () => {
    setEvent(null);
  };

  return (
    <div className="">
      <AppBar sx={{ background: "black" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={{ marginLeft: "10px" }}>SURPRISE BROS</Typography>
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Event
              </Typography>
              {/* <DrawerComp /> */}
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Link to='/cardd'>
                <Tab label="Book Now" sx={{ marginLeft: "auto",background: "black",color:'white' }} variant="contained"/>

                </Link>
                <Link to='about'>
                <Tab label="About Us" sx={{ marginLeft: "auto",background: "black",color:'white' }} variant="contained"/>

                </Link>
                
              <Link to="/sig"  >
              <Tab label="sign up"  sx={{ marginLeft: "auto",background: "black",color:'white' }} variant="contained" />
              </Link>
              <Link to="/reg">
              <Tab label="Login"sx={{ marginLeft: "auto",background: "black",color:'white' }} variant="contained" />
              </Link>
              </Tabs>
            </>
          )}

        </Toolbar>
      </AppBar>
      {/* <br/> */}

      <div className="para">
        <br /><br />
        <h1 style={{textAlign:"center"}}><b>Welcome to SURPRISE BROS </b><br /></h1>
        <h3 style={{textAlign:"center"}}>We surprisebros are upcoming successful Event Management Company,<br/> specialized in Surprise Party, Birthday& Wedding Decor, Candlelight dinner,<br/> Dj setup and so on. As seasoned professionals in the field of event management,<br/> we bring a fresh and innovative approach to crafting experiences that linger <br/>in the hearts of our clients. Specializing in surprise parties, birthday and<br/> wedding decor, candlelight dinners, and DJ setups, Surprise Bros has emerged as an <br/>upcoming and successful event management company.

Our commitment lies<br/> in curating events that go beyond expectations, ensuring every celebration is a<br/>unique reflection of our clients' vision and personality. Whether it's the magical<br/> ambiance of a surprise party, the elegance of a birthday celebration, <br/>or the joyous union of two souls, our meticulous attention to detail sets us apart. <br/>Vibrant balloon installations, personalized banners, creative lighting, and <br/>thematic decor elements are just a glimpse into the world of enchantment we create.<br/>

At Surprise Bros, we understand the significance of every occasion, and our<br/> dedicated team works tirelessly to ensure each event is a visual spectacle.<br/> Our mission is to not only surprise but also to leave an indelible mark on the memory<br/> of our clients and their guests, making every celebration truly extraordinary. <br/>Choose Surprise Bros, and let us turn your dreams into reality, one event at a time.</h3>
          
      </div>
      <br /><br />

      <Grid style={{ display: 'flex', alignItems: 'center',height:'400px' }}>
  <div style={{ flex: 1 }}>
      <h1 style={{ marginLeft: '20px' }}>BABY BOY BIRTHDAYS</h1>
    <div>
      <p style={{ marginLeft: '20px' }}>
      Elevate the ambiance of your surprise party with our expert decoration services! Picture a space transformed into a haven of joy and celebration. We meticulously curate every detail, from exquisite table arrangements to thematic décor elements, ensuring a mesmerizing experience. Dive into a world of enchantment with our vibrant balloon installations, personalized banners, and creative lighting. Our team's attention to detail brings a unique touch to each corner, creating an atmosphere of warmth and excitement. Let us craft a visual spectacle that not only surprises but also leaves an indelible mark on the memory of your guest of honor, making their celebration extraordinary.</p>
    </div>
  </div>
  <div>
  <img
    src="https://images.pexels.com/photos/17301196/pexels-photo-17301196/free-photo-of-a-little-boy-at-the-first-birthday-photoshoot.jpeg?auto=compress&cs=tinysrgb&w=600"
    alt="Event"
    style={{ height: "400px", borderRadius: "15px" }}
  />
</div>
</Grid>
<br/><br/>
      <Grid style={{ display: 'flex', alignItems: 'center',height:'400px' }}>
    <div>
  <img
    src="https://images.pexels.com/photos/18149669/pexels-photo-18149669/free-photo-of-baby-girl-in-dress-sitting-with-birthday-decorations-around.jpeg?auto=compress&cs=tinysrgb&w=600"
    alt="Event"
    style={{ height: "400px", borderRadius: "15px" }}
  />
</div>
  <div style={{ flex: 1 }}>
      <h1 style={{ marginLeft: '20px' }}>BABY GIRL BIRTHDAYS</h1>
    <div>
      <p style={{ marginLeft: '20px' }}>
      Elevate the ambiance of your surprise party with our expert decoration services! Picture a space transformed into a haven of joy and celebration. We meticulously curate every detail, from exquisite table arrangements to thematic décor elements, ensuring a mesmerizing experience. Dive into a world of enchantment with our vibrant balloon installations, personalized banners, and creative lighting. Our team's attention to detail brings a unique touch to each corner, creating an atmosphere of warmth and excitement. Let us craft a visual spectacle that not only surprises but also leaves an indelible mark on the memory of your guest of honor, making their celebration extraordinary.</p>
    </div>
  </div>
</Grid>
<br/><br/>
      <Grid style={{ display: 'flex', alignItems: 'center',height:'400px' }}>
  <div style={{ flex: 1 }}>
      <h1 style={{ marginLeft: '20px' }}>BIRTHDAYS PARTIES</h1>
    <div>
      <p style={{ marginLeft: '20px' }}>
      Elevate the ambiance of your surprise party with our expert decoration services! Picture a space transformed into a haven of joy and celebration. We meticulously curate every detail, from exquisite table arrangements to thematic décor elements, ensuring a mesmerizing experience. Dive into a world of enchantment with our vibrant balloon installations, personalized banners, and creative lighting. Our team's attention to detail brings a unique touch to each corner, creating an atmosphere of warmth and excitement. Let us craft a visual spectacle that not only surprises but also leaves an indelible mark on the memory of your guest of honor, making their celebration extraordinary.</p>
    </div>
  </div>
  <div>
  <img
    src="https://images.pexels.com/photos/5935254/pexels-photo-5935254.jpeg?auto=compress&cs=tinysrgb&w=600"
    alt="Event"
    style={{ height: "400px", borderRadius: "15px" }}
  />
</div>
</Grid>
<Grid style={{ display: 'flex', alignItems: 'center',height:'400px' }}>
    <div>
  <img
    src="https://images.pexels.com/photos/3593437/pexels-photo-3593437.jpeg?auto=compress&cs=tinysrgb&w=600"
    alt="Event"
    style={{ height: "400px", borderRadius: "15px" }}
  />
</div>
  <div style={{ flex: 1 }}>
      <h1 style={{ marginLeft: '20px' }}>BABY SHOWER</h1>
    <div>
      <p style={{ marginLeft: '20px' }}>
      Elevate the ambiance of your surprise party with our expert decoration services! Picture a space transformed into a haven of joy and celebration. We meticulously curate every detail, from exquisite table arrangements to thematic décor elements, ensuring a mesmerizing experience. Dive into a world of enchantment with our vibrant balloon installations, personalized banners, and creative lighting. Our team's attention to detail brings a unique touch to each corner, creating an atmosphere of warmth and excitement. Let us craft a visual spectacle that not only surprises but also leaves an indelible mark on the memory of your guest of honor, making their celebration extraordinary.</p>
    </div>
  </div>
</Grid>
<br/><br/>
      <Footer/>
    </div>
  );
};
export default Header;
