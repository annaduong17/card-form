import CardLogo from '../images/card-logo.svg';

function CardFront({ name, number = '0000 0000 0000 0000', exp }) {
  return(
    <div className="card-front-container">
      <img src={CardLogo} alt="card logo" />
      <p>{number}</p>
      <p>{name}</p>
      <p>{exp}</p>
    </div>
  )
}

export default CardFront;