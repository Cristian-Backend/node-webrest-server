// src/presentation/todos/controller.ts
import { Request, Response } from 'express';

// Lista en memoria de todos
let todos: { id: number; text: string; createdAt: Date }[] = [
  { id: 1, text: 'Comprar leche', createdAt: new Date('2024-04-01') },
  { id: 2, text: 'Estudiar Node.js', createdAt: new Date('2024-04-10') },
  { id: 3, text: 'Hacer ejercicio', createdAt: new Date('2024-04-15') },
  { id: 4, text: 'Leer un libro', createdAt: new Date('2024-04-20') },
];

// GET /todos
export const listTodos = (req: Request, res: Response) => {
  res.status(200).json(todos); 
};

// GET /todos/:id
export const getTodoById = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (!id) {
    res.status(400).json({ error: 'Invalid ID' });
    return;
  }
  const todo = todos.find(t => t.id === id);
  if (!todo) {
    res.status(404).json({ error: 'Not found' });
    return;
  }
  res.json(todo);
};

// POST /todos
export const createTodo = (req: Request, res: Response) => {
  const {text} = req.body; 
  if (!text) {
    res.status(400).json({ error: 'Text is required' });
   return;
  }
  const newTodo = {
    id: todos.length + 1,
    text,
    createdAt: new Date(),
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
};

// PUT /todos/:id
export const updateTodo = (req: Request, res: Response) => {
  const id = Number(req.params.id); // pasamos el id a number
  const {text} = req.body; // destructuramos el body para obtener el text

  if (!id || !text) {
    res.status(400).json({ error: 'ID and text are required' });
    return;
  }
  const todo = todos.find(t => t.id === id);
  if (!todo) {
    res.status(404).json({ error: 'Not found' });
    return;
  }
  todo.text = text;
  res.json(todo);
};

// DELETE /todos/:id
export const deleteTodo = (req: Request, res: Response) => {
  
  const id = Number(req.params.id);

  if (!id) {
    res.status(400).json({ error: 'Invalid ID' });
    return;
  }
  const todoIndex = todos.findIndex(t => t.id === id);
  if (todoIndex === -1) { //el -1 significa que no se encontro el todo
    res.status(404).json({ error: 'Not found' });
    return;
  }
  todos.splice(todoIndex, 1); // Elimina el todo de la lista 


  
};
