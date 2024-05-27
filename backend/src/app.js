import express from 'express'
import {prisma}  from '../util.js'

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())


// Rota para cadastrar um novo usuário
app.post('/users', async (req, res) => {
    const { name, email, phone, birthDate } = req.body
  
    try {
      // Criar um novo usuário no banco de dados
      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          phone,
          birthDate
        }
      });
      return res.status(201).json(newUser)
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  });
  
// Rota para listar todos os usuários
app.get('/users', async (req, res) => {
    try {
      // Buscar todos os usuários do banco de dados
      const users = await prisma.user.findMany()
      return res.status(200).json(users)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  });

  
// Rota para editar um usuário existente  
app.put('/users/:id', async (req, res) => {
    const userId = parseInt(req.params.id)
    const { name, email, phone, birthDate } = req.body
  
    try {
      // Verificar se o usuário existe
      const existingUser = await prisma.user.findUnique({
        where: {
          id: userId
        }
      })
  
      if (!existingUser) {
        return res.status(404).json({ error: "Usuário não encontrado" });
      }
  
      // Atualizar os dados do usuário
      const updatedUser = await prisma.user.update({
        where: {
          id: userId
        },
        data: {
            name,
            email,
            phone,
            birthDate
        }
      })
  
      return res.status(200).json(updatedUser)
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  })
  
// Rota para excluir um usuário
app.delete('/users/:id', async (req, res) => {
    const userId = parseInt(req.params.id)
  
    try {
      // Verificar se o usuário existe
      const existingUser = await prisma.user.findUnique({
        where: {
          id: userId
        }
      })
  
      if (!existingUser) {
        return res.status(404).json({ error: "Usuário não encontrado" })
      }
  
      // Excluir o usuário
      await prisma.user.delete({
        where: {
          id: userId
        }
      })
  
      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  })


app.listen(PORT, () => {
    console.log(`HTTP server is running at: http://localhost:${PORT}`)
})