import './EmployersList.css';
import EmployersListItem from '../EmployersListItem/EmployersList';

function EmployersList({ data }) {

  // const elements = data.map(item => {
  //   return (
  //     <EmployersListItem salary={item.salary} name={item.name} />
  //   )
  // })
  
  return (
    <ul className="app-list list-group">
      {
      data.map(item => {
        return (
          // <EmployersListItem salary={item.salary} name={item.name} /> или
          <EmployersListItem {...item} />
        )
      })      
      }
    </ul>
  )
}
export default EmployersList