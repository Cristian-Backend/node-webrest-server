import { Router } from 'express'
import {
  listTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
} from './todos/controller'

const router = Router()

// CRUD
router.get('/api/todos',listTodos)
router.get('/api/todos/:id',getTodoById)
router.post('/api/todos',createTodo)
router.put('/api/todos/:id',updateTodo)
router.delete('/api/todos/:id',deleteTodo)

export default router
