import { Provider } from 'react-redux'
import './App.css'
import SplashPage from './Pages/common/splashPage'
import RouteContainer from './Routes/RouteContainer'
import configurestore from './state/store'

function App() {
  const store = configurestore()
  return (
    <Provider store={store}>
      <div>
        <RouteContainer />
        {/* <SplashPage /> */}
      </div>
    </Provider>
  )
}

export default App
