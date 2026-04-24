import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import HomePage from './pages/HomePage'
import SingleFilm from './pages/singleFilm'
import { UpLoandingContext } from './context/Contextuploader'

function App() {

  return (
    <UpLoandingContext>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/films/:id" element={<SingleFilm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UpLoandingContext>
  )

}

export default App