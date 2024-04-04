import './Filter.css'

function Filter(props) {
  const buttonsData = [
    { name: 'all', label: 'Все сотрудники' },
    { name: 'rise', label: 'На повышение' },
    { name: 'moreThen1000', label: 'З/П больше 1000' },
  ]

  const buttons = buttonsData.map(({ name, label }) => {
    const isActive = props.filter === name;
    const clazz = isActive ? 'btn-light' : 'btn-outline-light';
    return (
      <button
        className={`btn ${clazz}`}
        type='button'
        key={name}
        onClick={() => props.onFilterSelect(name)}
      >
        {label}
      </button>
    )
  })
  return (
    <div className='btn-group'>
      {buttons}
    </div>
  )
}

export default Filter
