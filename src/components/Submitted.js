import Button from './Button';
import CompleteIcon from '../images/icon-complete.svg';

function Submitted() {
  return(
    <div>
      <img src={CompleteIcon} alt="complete icon" />
      <h2>Thank You!</h2>
      <p>We've added your card details</p>
      <Button>Continue</Button>
    </div>
  )
}

export default Submitted; 