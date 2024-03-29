import './Info.css'

function Info({ employees, increase }) {
  return (
    <>
      <div className="info">
        <h1>Учет сотрудников в компании N</h1>
        <h2>Общее число сотрудников: {employees}</h2>
        <h2>Премию получат: {increase}</h2>
      </div>
    </>
  )
}

export default Info
