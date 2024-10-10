**Cypress - Testes para Tela de Login do AVA Unievangélica**

- Este repositório contém testes automatizados usando o Cypress para a tela de login do AVA (Ambiente Virtual de Aprendizagem) da Unievangélica. 
- Este projeto foi desenvolvido com fins educacionais para a disciplina de Verificação e Validação de Software da Universidade Unievangélica.

**Descrição**
- Os testes abordam a verificação de elementos na tela de login, como campos de nome de usuário, senha e botão de login. 
- Além disso, há uma verificação funcional para simular o fluxo de login de um usuário e garantir que o sistema redireciona corretamente após o login bem-sucedido.

**O que é testado?**
- Smoke Test da Interface de Login:
- Verifica se os elementos principais da tela de login estão presentes e visíveis (campos de usuário, senha, botão de login e link de recuperação de senha).

**Teste Funcional de Login:**
- Simula um login com credenciais válidas.
- Verifica se o redirecionamento para o dashboard é bem-sucedido após o login.
- Confirma que o nome do aluno aparece corretamente no perfil.

**Instalação**
- Para rodar este projeto localmente, siga os passos abaixo:

1 - Clone o repositório:
- git clone https://github.com/seu-usuario/seu-repositorio.git

2 - Instale as dependências do Cypress:
- npm install

3 - Execute os testes:
- npx cypress open

**Tecnologias Utilizadas**
Cypress: Framework de testes E2E para automação de testes na web.

**Contribuição**
Este projeto foi desenvolvido para fins educacionais, e contribuições são bem-vindas para melhorar os testes e cobrir outros cenários.
