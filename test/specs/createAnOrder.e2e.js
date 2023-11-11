const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {
      it('fill in the adress', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    })

      it('should fill in the phone number', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await browser.pause(10000);
        await page.submitPhoneNumber('+11231231212');

    })


      it('should select Supportive plan', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');

        const supportivePlanButton = await $(page.supportivePlanButton);
        await supportivePlanButton.waitForClickable();
        await supportivePlanButton.click();
    
        const parentElement = await supportivePlanButton.parentElement();
        await expect(parentElement).toHaveElementClassContaining('active')
    });

  
      it('adding a credit card', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');

        const paymentMethodButton = await $(page.paymentMethodButton);
        await paymentMethodButton.scrollIntoView();
        await paymentMethodButton.waitForDisplayed();
        await paymentMethodButton.click();

        const addCardButton = await $(page.addCardButton);
        await addCardButton.click();
        const cardNumberField = await $(page.cardNumberField);
        await cardNumberField.click();
        await cardNumberField.setValue('123412341234');
        const cvcCodeField = await $(page.cvcCodeField);
        await cvcCodeField.click();
        await cvcCodeField.setValue('22');
        const linkButton = await $(page.linkButton);
        await linkButton.click();
        const paymentMethod = await $(page.paymentMethod);
        await expect(paymentMethod).toHaveTextContaining('Card');
        const closeButton = await $(page.closeButton);
        await closeButton.click();

    })
  
      it('should write a message for a driver', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await browser.pause(10000);

        const messageToDriverField = await $(page.messageToDriverField);
        await messageToDriverField.setValue('Hope you love Beyonce');
        await browser.pause(10000);
        const message = await $(page.messageToDriverField);
        await message.getValue();
        await expect(message).toHaveValue('Hope you love Beyonce');
        
        
    })


      it('should order a blanket and handkerchiefs ', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await browser.pause(10000);

        const supportivePlanButton = await $(page.supportivePlanButton);
        await supportivePlanButton.waitForClickable();
        await supportivePlanButton.click();
    
        const parentElement = await supportivePlanButton.parentElement();
        await expect(parentElement).toHaveElementClassContaining('active');

        const blanketRadioButton = await $(page.blanketRadioButton);
        await blanketRadioButton.click();
        await expect(blanketRadioButton).toBeEnabled();
  
     })


      it('should order 2 icecreams', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await browser.pause(10000);
  
        const supportivePlanButton = await $(page.supportivePlanButton);
        await supportivePlanButton.waitForClickable();
        await supportivePlanButton.click();
    
        const parentElement = await supportivePlanButton.parentElement();
        await expect(parentElement).toHaveElementClassContaining('active');

        const icecreamPlusButton = await $(page.icecreamPlusButton);
        await icecreamPlusButton.click();
        await icecreamPlusButton.click();

        const icecreamCounter = await $(page.icecreamCounter);
        const counterText = await icecreamCounter.getText();
        await expect(counterText).toContain('2');

    })


      it('should open the car search modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    
        await page.submitPhoneNumber('+11231231212');

        const paymentMethodButton = await $(page.paymentMethodButton);
        await paymentMethodButton.scrollIntoView();
        await paymentMethodButton.waitForDisplayed();
        await paymentMethodButton.click();

        const addCardButton = await $(page.addCardButton);
        await addCardButton.click();
        const cardNumberField = await $(page.cardNumberField);
        await cardNumberField.click();
        await cardNumberField.setValue('123412341234');
        const cvcCodeField = await $(page.cvcCodeField);
        await cvcCodeField.click();
        await cvcCodeField.setValue('22');
        const linkButton = await $(page.linkButton);
        await linkButton.click();
        const paymentMethod = await $(page.paymentMethod);
        await expect(paymentMethod).toHaveTextContaining('Card');
        const closeButton = await $(page.closeButton);
        await closeButton.click();
  

        const orderButton = await $(page.orderButton);
        await orderButton.waitForDisplayed();
        await orderButton.click();
        const carSearchModal = await $(page.carSearchModal);
        await carSearchModal.waitForDisplayed();
        await expect(carSearchModal).toBeExisting();


    })


})


