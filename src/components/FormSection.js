function FormSection({ children, value, onChange, placeholder }) {
    
  return(
    <div className="form-section">
      <label htmlFor="">{children}</label>
      <input type="text" value={value} onChange={onChange} placeholder={placeholder} required/>
    </div>
  )
}

export default FormSection;