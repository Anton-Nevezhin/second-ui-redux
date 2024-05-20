import { ReactNode } from 'react'
import AlertView from '../AlertView'

const MainLayout = ({children}:{children:ReactNode}) => {
  return (
    <div>
        <AlertView />
      {children}
    </div>
  )
}

export default MainLayout
