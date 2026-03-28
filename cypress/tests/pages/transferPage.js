import { error } from "console"

class TransferPage {
    selectorsList() {
        const selectors = {
            confirmHomePage: "[data-test='sidenav']",
            newTransferButton: "[data-test='nav-top-new-transaction']",
            userSelect: "[data-test='user-list-item-uBmeaz5pX']",
            confirmTransferPage: "[data-test='transaction-create-form']",
            amountField: "[name='amount']",
            descriptionField: "[data-test='transaction-create-description-input']",
            payButton: "[data-test='transaction-create-submit-payment']",
            successMessage: "[data-test='alert-bar-success']",
            errorMessage: "[data-test='transaction-create-error']"
        }
        return selectors
    }

    newTransfer() {
        cy.get(this.selectorsList().confirmHomePage)
        cy.get(this.selectorsList().newTransferButton).click()
    }

    realizeValidTransfer(amount, description) {
        cy.get(this.selectorsList().userSelect).click()
        cy.get(this.selectorsList().confirmTransferPage)
        cy.get(this.selectorsList().amountField).type(amount)
        cy.get(this.selectorsList().descriptionField).type(description)
        cy.get(this.selectorsList().payButton).click()
        cy.get(this.selectorsList().successMessage)
    }

    realizeInvalidTransfer(amount, description) {
        cy.get(this.selectorsList().userSelect).click()
        cy.get(this.selectorsList().confirmTransferPage)
        cy.get(this.selectorsList().amountField).type(amount)
        cy.get(this.selectorsList().descriptionField).type(description)
        cy.get(this.selectorsList().payButton).click()
        cy.get(this.selectorsList().errorMessage)
    }
}

export default TransferPage