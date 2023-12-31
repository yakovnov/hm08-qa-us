module.exports = {
    // Inputs
    fromField: '#from',
    toField: '#to',
    phoneNumberField: '#phone',
    codeField: '#code',
    cardNumberField: '#number',
    cvcCodeField: '.card-code-input input#code[name="code"]',
    messageToDriverField: '#comment',

    

    // Buttons
    callATaxiButton: 'button=Call a taxi',
    phoneNumberButton: '//div[starts-with(text(), "Phone number")]',
    nextButton: 'button=Next',
    confirmButton: 'button=Confirm',
    supportivePlanButton: 'div=Supportive',
    paymentMethodButton: '.pp-button',
    addCardButton: 'div=Add card',
    linkButton: 'button=Link',
    closeButton: '.payment-picker .section.active .close-button',
    paymentMethod: '.pp-value',
    blanketRadioButton: 'span.slider.round',
    icecreamPlusButton: 'div=+',
    icecreamCounter: '.counter-value',
    orderButton: '.workflow .smart-button-wrapper',
    orderWindow: '.order-number',
    

    

    // Modals
    phoneNumberModal: '.modal',
    carSearchModal: 'div.order-body',

    // Functions
    fillAddresses: async function(from, to) {
        const fromField = await $(this.fromField);
        await fromField.setValue(from);
        const toField = await $(this.toField);
        await toField.setValue(to);
        const callATaxiButton = await $(this.callATaxiButton);
        await callATaxiButton.waitForDisplayed();
        await callATaxiButton.click();
    },

    fillCardNumber: async function(number, cvc) {
        const addCardButton = await $(this.addCardButton);
        await addCardButton.click();
        const cardNumberField = await $(this.cardNumberField);
        await cardNumberField.click();
        await cardNumberField.setValue(number);
        const cvcCodeField = await $(this.cvcCodeField);
        await cvcCodeField.click();
        await cvcCodeField.setValue(cvc);
        const linkButton = await $(this.linkButton);
        await linkButton.click();
        const closeButton = await $(this.closeButton);
        await closeButton.click();
    },

    fillMessageForDriver: async function(message) {
        const messageToDriverField = await $(this.messageToDriverField);
        await messageToDriverField.setValue(message);
        await browser.pause(10000);
    },

    fillPhoneNumber: async function(phoneNumber) {
        const phoneNumberButton = await $(this.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const phoneNumberModal = await $(this.phoneNumberModal);
        await phoneNumberModal.waitForDisplayed()
        const phoneNumberField = await $(this.phoneNumberField);
        await phoneNumberField.waitForDisplayed();
        await phoneNumberField.setValue(phoneNumber);
    },
    submitPhoneNumber: async function(phoneNumber) {
        await this.fillPhoneNumber(phoneNumber);
        // we are starting interception of request from the moment of method call
        await browser.setupInterceptor();
        await $(this.nextButton).click();
        // we should wait for response
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(2000);
        const codeField = await $(this.codeField);
        // collect all responses
        const requests = await browser.getRequests();
        // use first response
        await expect(requests.length).toBe(1)
        const code = await requests[0].response.body.code
        await codeField.setValue(code)
        await $(this.confirmButton).click()
    },
};