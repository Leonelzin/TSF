describe('Teste funcional e smoke da tela de login do AVA Unievangélica', () => {
  
  // Define o URL da página de login
  const baseUrl = 'https://avagrad.unievangelica.edu.br/login/index.php';

  it('Verifica os elementos e faz login com sucesso', () => {

    // 1. Acessa o site de login
    cy.visit(baseUrl);

    // 2. Verificação de elementos da tela (Smoke Test)
    
    // Verifica se o campo de nome de usuário existe e está visível
    cy.get('input#username')
      .should('be.visible')
      .and('have.attr', 'placeholder', 'Identificação de usuário*'); // Verifica o placeholder
    
    // Verifica se o campo de senha existe e está visível
    cy.get('input#password')
      .should('be.visible')
      .and('have.attr', 'placeholder', 'Senha*'); // Verifica o placeholder
    
    // Verifica se o botão de login está visível e contém o texto correto
    cy.get('button[type="submit"]')
      .should('be.visible')
      .and('contain', 'Acessar'); // Verifica o texto no botão de login
    
    // Verifica se o link de recuperação de senha está visível usando o seletor CSS
    cy.get('a[href*="forgot_password.php"]')
      .should('be.visible'); // Verifica se o link está visível
    
    // 3. Preenchimento dos dados de login e envio

    // Preenche o campo de nome de usuário
    cy.get('input#username')
      .type('04419080124', { force: true });
    
    // Preenche o campo de senha
    cy.get('input#password')
      .type('10082002', { force: true });

    // **Depuração: verificar quantos botões "submit" estão presentes**
    cy.get('button[type="submit"]').then(($buttons) => {
      // Se mais de um botão for encontrado, imprima no console
      if ($buttons.length > 1) {
        cy.log('Mais de um botão de submit encontrado:');
        $buttons.each((index, button) => {
          cy.log(`Botão ${index + 1}: ${button.outerHTML}`);
        });
      } else {
        cy.log('Apenas um botão de submit encontrado.');
      }
    });

    // Clica no botão de login
    cy.get('button[type="submit"]')
      .first()
      .click({ force: true }); // Adiciona .first() para garantir que clicamos no primeiro botão

    // 4. Verificação do login bem-sucedido
    
    // Verifica se, após o login, o sistema redireciona para a página inicial do AVA
    cy.url().should('include', '/my'); // Verifica se o usuário foi redirecionado para o dashboard
    
    // Verifica se o nome do aluno aparece no dashboard
    cy.get('#snap-pm-user-profile')
      .should('be.visible'); // Verifica se o elemento está visível
    
    // Adiciona verificação para o texto contido no perfil do usuário
    cy.get('#snap-pm-user-profile')
      .invoke('text')
      .then((text) => {
        expect(text.trim()).to.not.be.empty; // Verifica se o texto não está vazio
        cy.log('Nome do Aluno:', text.trim()); // Log do nome do aluno
      });
  });
});
