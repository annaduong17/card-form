
import CardLogo from '../images/card-logo.svg';

function CardFront({ name, number, exp }) {

  return(
    <div className="card-front-container">
      <div>
        <img id='card-logo' src={CardLogo} alt="card logo" width={48} height={48}/>
      </div>
      <div id='number-container'>
        <input id='card-number' type="text" placeholder='0000 0000 0000 0000' value={number} />
      </div>
      <div id='name-exp-container'>
        <input id='card-name' type="text" placeholder='Jane Appleseed' value={name}/>
        <input id='card-exp' type="text" placeholder='00/00' value={exp}/>
      </div>
    </div>
  )
}

export default CardFront;