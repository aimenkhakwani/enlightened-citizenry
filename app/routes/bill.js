import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model(params) {
    var key = config.myApiKey;
    var url = "https://congress.api.sunlightfoundation.com/bills?bill_id=" + params.bill_id + "&apikey=" + key;
    return Ember.$.getJSON(url).then(function(response) {
      return response.results[0];
    });
  }
});
