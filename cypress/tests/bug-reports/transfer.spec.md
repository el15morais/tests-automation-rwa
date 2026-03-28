# BUG REPORT - Enviar dinheiro com saldo insuficiente

**Prioridade:** Alta

**Descrição:**  
Ao realizar uma transferência bancária informando um valor acima do saldo existente da conta, o sistema aceita e prossegue com a transferência normalmente sem indicar erro.

## Pré-condições
1. Estar logado em uma conta

## Passos para reproduzir
1. Clique no botão **NEW**
2. Selecione um usuário
3. Preencha o campo **Amount** com um valor acima do saldo da conta
4. Preencha uma descrição
5. Clique no botão **PAY**
6. Aguarde a resposta do sistema

## Resultado Esperado
O sistema deve impedir a realização de uma transferência informando um valor acima do saldo da conta, gerar mensagem de erro clara ao usuário.