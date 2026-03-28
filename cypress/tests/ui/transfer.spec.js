import infos from '../../fixtures/infos'
import LoginPage from '../pages/loginPage'
import TransferPage from '../pages/transferPage'

const login = new LoginPage()

beforeEach(() => {
    login.accessLoginPage()
    login.loginValid(infos.usernameValidLogin.username, infos.usernameValidLogin.password)
})

const transfer = new TransferPage()

describe('Enviar dinheiro com saldo suficiente', () => {
    it('Deve enviar dinheiro com sucesso', () => {
        transfer.newTransfer()
        transfer.realizeValidTransfer(infos.suficientTransferData.amount, infos.suficientTransferData.description)
    });
});

describe('Enviar dinheiro com saldo insuficiente', () => {
    it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
        transfer.newTransfer()
        transfer.realizeInvalidTransfer(infos.insuficientTransferData.amount, infos.insuficientTransferData.description)
    });
});