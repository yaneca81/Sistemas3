import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { AboutPage } from "../pages/AboutPage"
import { NavbarComponent } from "../components/NavbarComponent"
import { DashboardRoutes } from "../pages/admin/routes/DashboardRoutes"
import { ContactPage } from "../pages/ContactPage"

export const ConstruccionRoutes = () => {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/dashboard/*' element={<DashboardRoutes />} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
    </>
  )
}
