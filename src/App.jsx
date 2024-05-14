import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createContext, useState } from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Error from './components/Error'
import Layout from './components/Layout'
import Lineups from './components/Lineups'
import MatchDetailsLayout from './components/MatchDetailsLayout'
import Players from './components/Players'
import Stats from './components/Stats'
import TeamPage from './components/TeamPage'
import TeamPageLayout from './components/TeamPageLayout'
import Home from './pages/Home'
import Matches from './pages/Matches'
import NotFound from './pages/NotFound'
import SeasonStats from './pages/SeasonStats'


const queryClient = new QueryClient()
export const Context = createContext()

const App = () => {

  const [teamName, setTeamName] = useState(null)

	const router = createBrowserRouter(createRoutesFromElements(
		<>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home setTeamName={setTeamName}  />} errorElement={<Error />}/>
        <Route path='matches'  element={<Matches />} />
        <Route path='seasonstats' element={<SeasonStats />} />
        <Route path='*' element={<NotFound />} />
      </Route>
      <Route path=':id' element={<TeamPageLayout teamName={teamName} />} errorElement={<Error />}>
        <Route index element={<TeamPage />} />
        <Route path='table' element={<Home />} />
        <Route path='players' element={<Players />} />
      </Route>
      <Route path='matches/:fixtureId/' element={<MatchDetailsLayout />} errorElement={<Error />}>
        <Route index element={<Stats />} />
        <Route path='lineups' element={<Lineups />}  />
      </Route>
		</>
	))

  return (
    <QueryClientProvider client={queryClient}>
      <Context.Provider value={{teamName, setTeamName}}>
        <RouterProvider router={router} />
      </Context.Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
	
export default App
