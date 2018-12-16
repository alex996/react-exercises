import React, { createContext } from 'react'

export const ExercisesContext = createContext()

export const { Provider, Consumer } = ExercisesContext

export const withContext = Component => props => (
  <Consumer>
    {value =>
      <Component {...value} {...props} />
    }
  </Consumer>
)
