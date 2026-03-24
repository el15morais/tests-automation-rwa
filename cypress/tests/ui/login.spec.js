import infos from '../../fixtures/infos'
import LoginPage from '../pages/loginPage'

const loginPage = new LoginPage()

describe('Login com sucesso', () => {
    it('Deve fazer login com um usuário válido', () => {
        loginPage.accessLoginPage()
        loginPage.loginValid(infos.usernameValidLogin.username, infos.usernameValidLogin.password)
    });
});

describe('Tentar fazer login com credenciais inválidas', () => {
    it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
        loginPage.accessLoginPage()
        loginPage.loginInvalid(infos.usernameInvalidLogin.username, infos.usernameInvalidLogin.password)
    });
});
