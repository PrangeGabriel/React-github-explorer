import { Counter } from './components/Counter'
import { RepositoryList } from './components/RepositoryList'

import './styles/global.scss'

export function App(){
  return (
    // fragments são melhor que divs, pois nao aparecem no html
    <> 
      <RepositoryList />
      <Counter />
    </>
  )
}