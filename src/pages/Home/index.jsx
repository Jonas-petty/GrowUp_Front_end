import React from 'react';

import Accessibility from "../../assets/Accessibility.png"
import Safe from "../../assets/safe.svg"
import Support from "../../assets/support.svg"

import AccessibilityArea from '../../components/Accessibility';
import FlightForm from '../../components/FlightForm';
import Carousel from '../../components/Carousel';
import Cards from '../../components/Cards';
import InfoCard from '../../components/InfoCard';
import Footer from '../../components/Footer';


import "./style.css"
import { useState } from 'react';
function Home() {
    const [ isHighContrast, setIsHighContrast ] = useState(true)

    document.title = "RiseUp | Home"

    function AumentarFonte() {
      const myP = document.getElementsByTagName('p')
      console.log(myP)

      for (let i = 0; i < myP.length; i++) {
        myP[i].style.fontSize = '2rem'
        
      }
    }

    function AtivarContraste() {
      setIsHighContrast((prev) => !prev)
    }

    return (
    <>
      <main className='home_main'>
        {/* <AccessibilityArea 
        AumentarFonte={() => AumentarFonte()}
        AtivarContraste={() => AtivarContraste()}
        isHighContraste={isHighContrast}/> */}
        <FlightForm />
        <Carousel />
        <Cards />
        <section className="information row">
          <InfoCard 
            image={Accessibility}
            title={'Programa Mais Acessibilidade'}
            alter="Personagens representando a população que necessita da Representatividade"
            text='Vivemos na sociedade da informação. Um dos fatores críticos para o sucesso
                nesta sociedade é o acesso e utilização das tecnologias de informação e comunicação.
                Estas tecnologias devem portanto estar disponíveis ao maior número possível de cidadãos
                evitando-se assim a exclusão social.'
          />
          <InfoCard 
            image={Safe}
            title={'Compra Segura'}
            alter="Personagem efetuando uma compra segura pela internet"
            text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse similique laudantium
                corrupti fuga sunt id excepturi laboriosam veniam unde dignissimos?'
          />
          <InfoCard 
            image={Support}
            title={'Suporte Remoto'}
            alter="Personagem fazendo uso do suporte do conforto de seu lar"
            text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse similique laudantium
                corrupti fuga sunt id excepturi laboriosam veniam unde dignissimos?'
          />
        </section>
      </main>
      <Footer />
    </>
    );
}

export default Home;