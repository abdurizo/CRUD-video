import './EmployersList.css';
import EmployersListItem from '../EmployersListItem/EmployersList';

 function EmployersList() {
  return (
    <ul className="app-list list-group">
      <EmployersListItem />
      <EmployersListItem />
      <EmployersListItem />
    </ul>
  )
}
export default EmployersList