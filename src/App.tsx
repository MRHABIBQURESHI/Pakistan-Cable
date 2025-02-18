import MainDashboradLayout from './Dashboard/Layout/MainDashboradLayout'
import {QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {

  const queryClient = new QueryClient()
  return (
    <div>
      <QueryClientProvider client={queryClient}>
      <MainDashboradLayout />
      </QueryClientProvider>
    </div>
  )
}

export default App
