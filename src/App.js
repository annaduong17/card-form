import { useState } from 'react';
import CardFront from './components/CardFront';
import CardBack from './components/CardBack';
import CardForm from './components/CardForm';
import Submitted from './components/Submitted';
import FormSection from './components/FormSection';
import Button from './components/Button';

function App() {
  const [ name, setName ] = useState('');
  const [ number, setNumber ] = useState('');
  const [ exp, setExp ] = useState('');
  const [ cvc, setCvc ] = useState('');
  const [ showSubmitted, setShowSubmitted ] = useState(false);
  const [ showForm, setShowForm ] = useState(true);

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  }

  const handleExpChange = (e) => {
    let newDate = e.target.value;
  
    // Check if the user is backspacing and the cursor is just after the '/'
    if (
      newDate.length === exp.length - 1 &&
      exp.endsWith('/') &&
      e.nativeEvent.inputType === 'deleteContentBackward'
    ) {
      setExp(newDate);
    } else {
      // Check if the user has entered two digits for the month
      if (newDate.length === 2) {
        newDate += '/';
      }
      setExp(newDate);
    }
  };
  
  const handleCvcChange = (e) => {
    setCvc(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowForm(false);
    setShowSubmitted(true);
  }
  
   
  return (
    <div className="container">
      <div className='left'></div>
      
      <div className='form-container'>
      {showForm && <form onSubmit={handleSubmit}  >
        <FormSection placeholder='e.g. Jane Appleseed' value={name} onChange={handleNameChange}>CARDHOLDER NAME</FormSection>
        <FormSection placeholder='1234 5678 9123 0000' value={number} onChange={handleNumberChange}>CARDHOLDER NUMBER</FormSection>
        <FormSection placeholder='MM/YY' value={exp} onChange={handleExpChange}>EXP. DATE (MM/YY)</FormSection>
        <FormSection placeholder="123" value={cvc} onChange={handleCvcChange}>CVC</FormSection>
        <Button>Confirm</Button>
      </form>}
      </div>
      {showSubmitted && <Submitted />}
      <CardFront name={name} number={number} exp={exp} />
      <CardBack cvc={cvc} />
    </div>
  )
}

export default App;