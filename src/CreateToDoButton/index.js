import './CreateToDoButton.css'
import worm from './worm.png'
import cube from './cube.png'

function CreateToDoButton({ setOpenModal }) {
  return (
    <>
      <button
        className="CreateToDoButton"
        onClick={(event) => {
          setOpenModal((state) => !state)
          console.log(event)
          console.log(event.target)
        }}
      >
        +
      </button>
      <img className="worm1" src={worm} alt="TaskBudy" />
      <img className="cube1" src={cube} alt="TaskBudy" />
      <img className="worm2" src={worm} alt="TaskBudy" />
      <img className="cube2" src={cube} alt="TaskBudy" />
    </>
  )
}

export { CreateToDoButton }
