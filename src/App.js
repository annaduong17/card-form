import { useState } from 'react';
import CardFront from './components/CardFront';
import CardBack from './components/CardBack';
import CardForm from './components/CardForm';
import Submitted from './components/Submitted';
import FormSection from './components/FormSection';
import Button from './components/Button';

function App() {
  const [ name, setName ] = useState('e.g. Jane Appleseed');
  const [ number, setNumber ] = useState('1234 5678 9123 0000');
  const [ exp, setExp ] = useState('MM/YY');
  const [ cvc, setCvc ] = useState('123');
  const [ showSubmitted, setShowSubmitted ] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  }

  const handleExpChange = (e) => {
    setExp(e.target.value);
  }
  
  const handleCvcChange = (e) => {
    setCvc(e.target.value);
  }

  const handleSubmit = (e) => {
    setShowSubmitted(true);
  }
  
   
  return (
    <div className="container">
      <CardFront name={name} number={number} exp={exp} />
      <CardBack cvc={cvc} />
      <FormSection value={name} onChange={handleNameChange}>CARDHOLDER NAME</FormSection>
      <FormSection value={number} onChange={handleNumberChange}>CARDHOLDER NUMBER</FormSection>
      <FormSection value={exp} onChange={handleExpChange}>EXP. DATE (MM/YY)</FormSection>
      <FormSection value={cvc} onChange={handleCvcChange}>CVC</FormSection>
      <Button onSubmit={handleSubmit}>Confirm</Button>
    </div>
  )
}

export default App;