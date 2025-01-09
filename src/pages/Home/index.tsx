import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <p>Turner Recipies</p>
      <p><Link to="/recipie/1" >Recipie 1</Link></p>
      <p><Link to="/recipie/2" >Recipie 2</Link></p>
      <p><Link to="/recipie/3" >Recipie 3</Link></p>
      <p><Link to="/recipie/4" >Recipie 4</Link></p>
      <p><Link to="/recipie/5" >Recipie 5</Link></p>
      <p><Link to="/recipie/6" >Recipie 6</Link></p>
    </>
  )
}

export default Home