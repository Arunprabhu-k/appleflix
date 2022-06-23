import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BasicHeader from '../components/common/BasicHeader'
import { background } from '../constents/images/brandImages'
import AuthCheckPage from '../Pages/Auth/AuthCheckPage'
const RouteContainer = () => {
  return (
    <div className='bg-black'>
      <Router>
        <BasicHeader />
        <Routes>
          <Route path='/' element={<AuthCheckPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default RouteContainer
