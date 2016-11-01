import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model() {
    var key = config.myApiKey;
    var url = "https://congress.api.sunlightfoundation.com/bills?apikey=" + key;
    return Ember.$.getJSON(url).then(function(response) {
      return response.results;
    });
  }
});
