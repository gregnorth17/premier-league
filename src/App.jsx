import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createContext } from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Error from './components/Error'
import Layout from './components/Layout'
import Lineups from './components/Lineups'
import MatchDetailsLayout from './components/MatchDetailsLayout'
import Players, { playersLoader } from './components/Players'
import Stats from './components/Stats'
import TeamPage from './components/TeamPage'
import TeamPageLayout from './components/TeamPageLayout'
import Home from './pages/Home'
import Matches from './pages/Matches'
import NotFound from './pages/NotFound'
import SeasonStats from './pages/SeasonStats'


const Context = createContext()
const queryClient = new QueryClient()

const App = () => {
	// const YearContext = createContext()
	// export { YearContext }

	const router = createBrowserRouter(createRoutesFromElements(
		<>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home  />} errorElement={<Error />}/>
        <Route path='matches'  element={<Matches />} />
        <Route path='seasonstats' element={<SeasonStats />} />
        <Route path='*' element={<NotFound />} />
      </Route>
      <Route path=':id' element={<TeamPageLayout />} errorElement={<Error />}>
        <Route index element={<TeamPage />} />
        <Route path='players' loader={playersLoader}  element={<Players />} />
      </Route>
      <Route path='matches/:fixtureId/' element={<MatchDetailsLayout />} errorElement={<Error />}>
        <Route index element={<Stats />} />
        <Route path='lineups' element={<Lineups />}  />
      </Route>
		</>
	))

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
	
export { Context }
export default App
