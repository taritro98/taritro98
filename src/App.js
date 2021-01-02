import React from 'react';
import MyNavbar from "./components/navbar/navbar.component";
import MyCarousel from "./components/carousel/carousel.component";
import TitleMessage from "./components/title-message/title-message.component";

const App = () => {
  return(
    <div>
      <MyNavbar />
      <MyCarousel />
      <TitleMessage />
    </div>
  );
}

export default App;