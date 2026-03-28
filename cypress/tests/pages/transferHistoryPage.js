class TransferHistoryPage {
    selectorsList() {
        const selectors = {
            myTransfers: "[data-test='nav-personal-tab']",
            transferList: "[data-test='transaction-list']",
            noTransferList: "[data-test='empty-list-header']"
        }
        return selectors
    }

    accessTransferHistory() {
        cy.get(this.selectorsList().myTransfers).click()
        cy.get(this.selectorsList().transferList)
    }

    accessTransferHistoryEmpty() {
        cy.get(this.selectorsList().myTransfers).click()
        cy.get(this.selectorsList().noTransferList)
    }
}

export default TransferHistoryPage