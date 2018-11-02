const paymentForm = new SqPaymentForm({
  applicationId: applicationId,
  inputClass: 'sq-input',
  cardNumber: {
    elementId: 'sq-card-number',
    placeholder: '•••• •••• •••• ••••'
  },
  cvv: {
    elementId: 'sq-cvv',
    placeholder: 'CVV'
  },
  expirationDate: {
    elementId: 'sq-expiration-date',
    placeholder: 'MM/YY'
  },
  postalCode: {
    elementId: 'sq-postal-code'
  },
  callbacks: {
    cardNonceResponseReceived: function (errors, nonce, cardData) {
      $('card-nonce').value = nonce;
      $('nonce-form').submit();
    }
  }
});

function requestCardNonce(event) {
  event.preventDefault();
  paymentForm.requestCardNonce();
}

export default paymentForm;
