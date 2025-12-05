import {Routes, Route} from "react-router-dom"
import Home from "./component/Home"
import SingleMovie from "./component/SingleMovie"
import Error from "./component/Error"

function App() {
  return (
    <div className="max-w-9/12 ml-auto mr-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<SingleMovie />} />
          <Route path="*" element={<Error />} />
        </Routes>  
    </div>
  )
}

export default App
