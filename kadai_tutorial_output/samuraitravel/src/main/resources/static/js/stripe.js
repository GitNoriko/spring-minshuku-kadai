const stripe = Stripe('pk_test_51OdWfFKZqsmx8kqcOs9Ygs93OPXsWpxsX8BXfBWKgUzo5IFdYdML70uWRQL8x9iDS6KKlal5dutZctXB3nUyE4us008gQlvXRs');
 const paymentButton = document.querySelector('#paymentButton');
 
 paymentButton.addEventListener('click', () => {
   stripe.redirectToCheckout({
     sessionId: sessionId
   })
 });