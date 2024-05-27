import "./appbar.css"
import { Link ,useNavigate} from 'react-router-dom'


const Appbar = () => {
  const id=localStorage.getItem("userdetails")
  const parsed=JSON.parse(id)
  const name=parsed.name
  const navigate=useNavigate()
  const logout=()=>{
    localStorage.removeItem("userdetails")
    navigate("/")
  }
  
  return (
    <>
      <nav class="navbar">
    <div class="navbar-left">
      <h1>Rentify</h1>
    </div>
    <div class="navbar-right">
      <Link to={"/postproperty"} className='link'>Post a property</Link>
      <Link to={"/my"} className='link'>My Properties</Link>
      <button onClick={logout}>Logout</button>
    </div>
  </nav>
    </>
  )
}

export default Appbar