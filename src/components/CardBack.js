function CardBack({ cvc }) {
  return(
    <div className="card-back-container">
      <input className="cvc-input" type="text" placeholder="000" value={cvc}/>
    </div>
  )
}

export default CardBack;