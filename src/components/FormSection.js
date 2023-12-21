function FormSection({ children, value, onChange }) {
    
  return(
    <div>
      <label htmlFor="">{children}</label>
      <input type="text" value={value} onChange={onChange}/>
    </div>
  )
}

export default FormSection;