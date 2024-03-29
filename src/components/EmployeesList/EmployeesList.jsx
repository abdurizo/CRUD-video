import './EmployeesList.css';
import EmployeesListItem from '../EmployeesListItem/EmployeesList';

function EmployeesList({ data, onDelete, onToggleProp, }) {

  // const elements = data.map(item => {
  //   return (
  //     <EmployersListItem salary={item.salary} name={item.name} />
  //   )
  // })
  const element = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      // <EmployersListItem salary={item.salary} name={item.name} /> или
      <EmployeesListItem
        {...itemProps}
        key={id}
        onDelete={() => onDelete(id)}
        onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
       
      />
    )
  })

  return (
    <ul className="app-list list-group">
      {element}
    </ul>
  )
}
export default EmployeesList