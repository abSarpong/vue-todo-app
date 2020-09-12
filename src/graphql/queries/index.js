import gql from 'graphql-tag'

import getAllTodos from './getAllTodos.gql'

export const GET_ALL_TODOS = gql`${getAllTodos}`
