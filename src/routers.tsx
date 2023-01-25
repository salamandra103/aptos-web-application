import React from 'react'

import { createBrowserRouter, RouteObject } from 'react-router-dom'

import { Main } from 'layout/Main'
import { Transaction } from 'pages/Transaction'

type RouteWithMetaData = RouteObject & {
  children?: RouteWithMetaData[]
  meta?: Record<string, string | number | boolean>
}

export const routers: RouteWithMetaData[] = [
  {
    path: '/',
    element: <Main></Main>,
    meta: {
      title: 'Main'
    },
    children: [
      {
        path: 'transaction',
        element: <Transaction></Transaction>,
        children: [],
        meta: {}
      }
    ]
  }
]
