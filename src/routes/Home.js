import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Home() {
  const items = useSelector((state) => state.todo)
  return (
    <div>
      <h1>Главная страница</h1>
      <Link to="/todo">Посморите список дел</Link>
      <p> у вас {items.length} незаконченных дел</p>
    </div>
  )
}

export default Home
