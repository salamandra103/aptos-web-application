import React from 'react'
import { Link } from 'react-router-dom'
import { routers } from 'routers'

export const Sidebar = () => {
  return (
    <nav>
      <ul>
        {routers.map(item => (
          <li key={item.path}>
            <Link to={'/transaction'}>{item.meta.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
