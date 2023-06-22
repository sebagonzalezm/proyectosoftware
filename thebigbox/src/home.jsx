import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import thebigbox from "./images/thebigbox.jpg";
import cartasmagic from "./images/cartas magic.jpg";
import cartaspokemon from "./images/cartas pokemon.webp";
import cartasyugioh from "./images/cartas yugiho.jpeg";
import {IniciarSesion} from './login'
import Carousel from 'react-bootstrap/Carousel';
import {NavHome, NavNegro} from './allNav'
import {Link} from 'react-router-dom'

export function Home(){
  return(
    <>
      <NavNegro/>
      <NavHome/>
      <div className="d-flex">
        <div className="flex-fill"style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          {
          <CarruselFotos/>
          }
        </div>
        <div className="flex-fill">
          {
            <IniciarSesion/>
          }
        </div>
      </div>
    </>
  )
}

export function CarruselFotos() {
  return (
    <div style={{ width: '500px', height: '500px' }}>
    <Carousel>
    <Carousel.Item interval={3000}>
      <img
              alt=""
              src={thebigbox}
              width="500"
              height="500"
              className="d-inline-block align-top"
            />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
      <img
              alt=""
              src={cartaspokemon}
              width="500"
              height="500"
              className="d-inline-block align-top"
            />
        <Carousel.Caption>
          <h3 style={{ color: 'black' }}>Pokemon</h3>
          <p style={{ color: 'black' }}>Disfruta de los apasionantes torneos de Pokemon</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
      <img
              alt=""
              src={cartasmagic}
              width="500"
              height="500"
              className="d-inline-block align-top"
            />
        <Carousel.Caption>
          <h3 style={{ color: 'black' }}>Magic</h3>
          <p style={{ color: 'black' }}>Disfruta de los apasionantes torneos de Magic</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
      <img
              alt=""
              src={cartasyugioh}
              width="500"
              height="500"
              className="d-inline-block align-top"
            />
        <Carousel.Caption>
          <h3 style={{ color: 'black' }}>Yu-Gi-Oh!</h3>
          <p style={{ color: 'black' }}>
          Disfruta de los apasionantes torneos de Yu-Gi-Oh!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}