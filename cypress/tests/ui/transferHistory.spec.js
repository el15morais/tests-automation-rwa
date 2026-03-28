import infos from '../../fixtures/infos';
import TransferHistoryPage from '../pages/transferHistoryPage';
import Login from '../pages/loginPage';

const transferHistoryPage = new TransferHistoryPage();
const login = new Login();

describe('Visualizar histórico de transações com sucesso', () => {
    it('Deve exibir o histórico de transações de um usuário corretamente', () => {
        login.accessLoginPage();
        login.loginValid(infos.usernameValidLogin.username, infos.usernameValidLogin.password);
        transferHistoryPage.accessTransferHistory();
    });
});

describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {
    it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
        login.accessLoginPage();
        login.alternativeloginValid(infos.alternativeUsernameValidLogin.username, infos.alternativeUsernameValidLogin.password);
        transferHistoryPage.accessTransferHistoryEmpty();
    });
});