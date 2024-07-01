import './App.css'

import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

import { MainContent } from './components/MainContent'


function App() {

  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={ queryClient }>
        
        <MainContent />
      </QueryClientProvider>
      
    </>
  )
}

export default App
