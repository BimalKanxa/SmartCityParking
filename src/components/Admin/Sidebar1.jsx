import '../../css/Sidebar.css'
import { Link } from 'react-router-dom'
const Sidebar1 = () => {
  return (
    <>
    <div className="sidebar">
  <Link className="active" to="/">Home</Link>
  <Link to="/admin/createlocation">Location</Link>
  <Link to="#contact">Category</Link>
  <Link to="#about">Get Details</Link>
</div>
    </>
  )
}

export default Sidebar1