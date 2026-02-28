const express = require ('express');
const app = express();
const connection = require('./config/db');

app.use(express.json());

//rota de cadastro
const bcrypt = require("bcrypt");

app.post("/cadastro", async (req, res) => {
  try {
    const { nome, email, senha } = req.body;

    //isso vai verificar se o usuario já existe 
    connection.query(
      "SELECT * FROM usuarios WHERE email = ?",
      [email],
      async (err, results) => {
        if (err) {
          return res.status(500).json(err);
        }

        if (results.length > 0) {
          return res.status(400).json({ message: "Email já cadastrado" });
        }

        // Criptografa a senha
        const senhaCriptografada = await bcrypt.hash(senha, 10);

        // Insere no banco
        connection.query(
          "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)",
          [nome, email, senhaCriptografada],
          (err) => {
            if (err) {
              return res.status(500).json(err);
            }

            res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
          }
        );
      }
    );
  } catch (error) {
    res.status(500).json({ message: "Erro no servidor" });
  }
});

//rota de login
app.post("/login", (req, res) => {
  const { email, senha } = req.body;

  connection.query(
    "SELECT * FROM usuarios WHERE email = ?",
    [email],
    async (err, results) => {
      if (err) {
        return res.status(500).json(err);
      }

      if (results.length === 0) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }

      const usuario = results[0];

      const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

      if (!senhaCorreta) {
        return res.status(401).json({ message: "Senha incorreta" });
      }

      res.status(200).json({ message: "Login realizado com sucesso!" });
    }
  );
});



// rota para cadastrar novos produtos
app.post("/produtos", (req, res) => {
  const { nome, preco, categoria } = req.body;

  connection.query(
    "INSERT INTO produtos (nome, preco, categoria) VALUES (?, ?, ?)",
    [nome, preco, categoria],
    (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json(err);
      }

      res.status(201).json({
        id: results.insertId,
        nome,
        preco,
        categoria
      });
    }
  );
});





//porta usada pelo servidor 
app.listen(3000, ()=>{
    console.log("Servidor rodando com sucesso na porta 3000");
});
