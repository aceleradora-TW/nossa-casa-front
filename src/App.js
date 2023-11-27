import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { HomePage } from './pages/home/index'
import { TherapiesPage } from './pages/therapies'
import { EventsPage } from './pages/events'
import { WorkshopsPage } from './pages/workshop'
import { EventsPageDescription } from './pages/events-description'
import { DetailsTherapies } from './pages/therapies-description'
import PageAbout from './pages/about-details'
import { WorkshopDetails } from './pages/workshop-description'
import { GaleryDetails } from './pages/galery-details'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/galerydetails" element={<GaleryDetails />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:id" element={<EventsPageDescription />} />
        <Route path="/therapies" element={<TherapiesPage />} exact />
        <Route path="/workshops" element={<WorkshopsPage />} />
        <Route path="/workshops/:id" element={<WorkshopDetails />} />
        <Route path="/therapies/:id" element={<DetailsTherapies />} />
        <Route path="/sobre" element={<PageAbout />} />
      </Routes>
    </BrowserRouter >
  )
}
