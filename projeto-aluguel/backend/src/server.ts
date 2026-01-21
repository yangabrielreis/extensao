import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  return res.json({ status: "Sucesso", message: "Backend do Projeto Aluguel rodando!" });
});

const PORT = 3333;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});