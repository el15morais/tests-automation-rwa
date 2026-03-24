import infos from '../../fixtures/infos'
import RegisterPage from '../pages/registerPage'

const registerPage = new RegisterPage()

describe('Registro de novo usuário com sucesso', () => {
    it('Deve registrar um novo usuário com informações válidas', () => {
        registerPage.accessRegisterPage()
        registerPage.registerValid(infos.userValidRegister.firstName, infos.userValidRegister.lastName, infos.userValidRegister.username, infos.userValidRegister.password, infos.userValidRegister.confirmPassword)
    });
});

describe('Tentar registrar um novo usuário com informações incompletas', () => {
    it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
        registerPage.accessRegisterPage()
        registerPage.registerInvalid(infos.userValidRegister.firstName, infos.userValidRegister.lastName, infos.userValidRegister.username, infos.userValidRegister.password)
    });
}); 