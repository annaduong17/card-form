import FormSection from './FormSection';

function CardForm({ value, onChange }) {


  return(
    <form>
      <FormSection value={value} onChange={onChange}>CARDHOLDER NAME</FormSection>
    </form>
  )
}

export default CardForm;