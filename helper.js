module.exports = {
    getPhoneNumber: function(countryCode) {
        const number = Math.floor(1000000000 + Math.random() * 9000000000)
        return `${countryCode}${number}`
    },
    getElementByText: async function(obj) {
        return await $(`div=${obj.toString()}`);
    },
    getCardNumber: function() {
        const cardNumber = Array.from({ length: 16 }, () => Math.floor(Math.random() * 10)).join('');
        return cardNumber;
    },
    getCVCCode: function() {
        const cvcCode = Array.from({ length: 3 }, () => Math.floor(Math.random() * 10)).join('');
        return cvcCode;
    }
};
