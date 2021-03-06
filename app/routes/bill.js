import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model(params) {
    var key = config.myApiKey;
    var url = "https://congress.api.sunlightfoundation.com/bills?bill_id=" + params.bill_id + "&apikey=" + key;
    var legislatorUrl = "congress.api.sunlightfoundation.com/legislators?first_name=Michael&last_name=Bennet&apikey=" + key;

    return Ember.$.getJSON(url).then(function(response) {
      return response.results[0];
    });
  }
});
