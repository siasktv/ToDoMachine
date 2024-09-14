import React from 'react'
import worm from '../CreateToDoButton/worm.png'
import cube from '../CreateToDoButton/cube.png'
import './Footer.css'

function Footer({ totalToDos }) {
  return (
    <>
      <p className={`footer ${totalToDos < 3 && 'footer-noToDos'}`}>
        👾 Made with 💚 by{' '}
        <a
          href="https://github.com/siasktv"
          rel="my-github noreferrer"
          target={'_blank'}
        >
          Bianca Benitez
        </a>{' '}
        👾
      </p>
      <img className="worm1" src={worm} alt="TaskBudy" />
      <img className="cube1" src={cube} alt="TaskBudy" />
      <img className="worm2" src={worm} alt="TaskBudy" />
      <img className="cube2" src={cube} alt="TaskBudy" />
    </>
  )
}

export { Footer }
