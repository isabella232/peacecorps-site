'use strict';

//  Namespace
var Init = {
  //  State/Zip are only marked "required" if country == USA
  countryRequirements: function() {
    var country = $('#id_country'),
        countryReqLabels = $('label[for=id_state], label[for=id_zip_code]');

    country.change(function() {
      countryReqLabels.toggleClass('required', country.val() === 'USA');
    });
  },

  //  Donations in dedication to someone have additional fields
  dedicationFields: function() {
    var dedication = $('#id_dedication'),
        dedicationDiv = $('#dedication_details');

    dedication.change(function() {
      dedicationDiv.toggle(dedication.is(':checked'));
    });
  }
};

$(document).ready(function() {
  Init.countryRequirements();
  Init.dedicationFields();
});
