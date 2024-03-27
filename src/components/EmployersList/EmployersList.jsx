import './EmployersList.css';
import EmployersListItem from '../EmployersListItem/EmployersList';

function EmployersList({ data, }) {

  // const elements = data.map(item => {
  //   return (
  //     <EmployersListItem salary={item.salary} name={item.name} />
  //   )
  // })
  const element = data.map((item) => {
    const{id, ...itemProps} = item;
    return (
      // <EmployersListItem salary={item.salary} name={item.name} /> или
      <EmployersListItem {...itemProps} key={id}/>
    )
  })      
  
  return (
    <ul className="app-list list-group">
      {element }
    </ul>
  )
}
export default EmployersList