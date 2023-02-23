import React, { Component } from 'react';
import './App.css';

import Alface from "./assents/alface.png"
import Laranja from "./assents/laranja.png"
import Cereja from "./assents/cereja.png"
import Cenoura from "./assents/cenoura.png"
import Manga from "./assents/manga.png"
import Limão from "./assents/limao.png"
import Beterraba from "./assents/beterraba.png"
import Tomate from "./assents/tomate.png"

import Carrinho from "./assents/ShoppingCart.png"


class App extends Component {

  state = {
    frutas: [
      {
        img: Alface
      },

      {
        img: Laranja
      },

      {
        img: Cereja
      },

      {
        img: Cenoura
      },

      {
        img: Manga
      },

      {
        img: Limão
      },

      {
        img: Beterraba
      },

      {
        img: Tomate
      }
    ]
  }

  frutas = this.state

  render() {
    return (
      <main>
        <section className='upper-box'>
          <h1>HORTIFRUTI JMZ</h1>
          <h2>Nossos Produtos</h2>
        </section>

        <section className='lower-box'>
          <div className='box-frutas'>
            {this.state.frutas.map((item) => (
              <div className='elementos'>
                <img src={item.img} />
              </div>
            ))}
          </div>

          <div className='carrinho'>
              <div className='icon-carrinho'>
                <img src={Carrinho}/>
                <p>Arraeste o seu produto aqui para colocar no carrinho</p>
              </div>

              <div className='btns-carrinho'>
                  <p>+</p>
                  <p>‒</p>
              </div>
          </div>
        </section>
      </main>
    )
  }
}

export default App;
