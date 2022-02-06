import { ReactElement } from 'react'
import { NavLink as Link, useLocation } from 'react-router-dom'
import { Button } from '@chakra-ui/react'

export default function Navlink( {to, name}:{to: string, name: string, onClick?: any} ): ReactElement {
  const location = useLocation()

  const isActive = location.pathname === to

  return (
    <Link to={to}>
      <Button
        variant={isActive ? 'outline' : 'ghost'}
        colorScheme={isActive ? 'primary' : 'gray'}
      >
        {name}
      </Button>
    </Link>
  )
}