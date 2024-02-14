
const Input = ({label, state, setState,type = 'text'}) => {

  return (
    <div>
    <label className='text-lg' for="floatingPassword">{label}</label>
      <input type={type} className="flex flex-row p-3 mt-3 mb-2 w-96 rounded-md" value={state} onChange={e => setState(e.target.value)} id="floatingPassword" placeholder={label}/>
    </div>
  )
}

export default Input