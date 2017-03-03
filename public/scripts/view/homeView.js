'use strict'

console.log('homeView');

(function(module){
  const homeView = {};

  $('#form-home').submit(function(e) {
    e.preventDefault();
  })

  results.setLocalStorage = function() {
    let userZip = $('#zipInput').val();
    console.log('localStorage userZip', userZip);
    localStorage.setItem('userZip', JSON.stringify(userZip));
  };

  results.checkLocalStorage = function() {
    let userZip = $('#zipInput').val();
    if (localStorage.userZip) {
      console.log('check localStorage');
      let userZip = JSON.parse(localStorage.userZip);
      $('#zipInput').val(userZip);
      results.getEvents(userZip, renderMapResults);
    }
  };

results.checkLocalStorage();

  $('#form-home > button').on('click', function() {
    resultsController.setZipCode();
  })

results.handleInvalidInput = function(invalidReason) {
  let userZip = $('#zipInput').val();
  $('#zipInput').val('');
  if(invalidReason === 'badZip') {
      $('#zipInput').attr('placeholder', 'Not a zipcode...');
      $('#message').html('');
      $('#form-div').empty().append(`"${userZip}" is not a valid US zip code. Please try again.`);
    } else {
      console.log('No events...');
  }

}
module.homeView = homeView;
})(window);
