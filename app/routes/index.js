import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  chamber: 'house',
  model() {
    var key = config.myApiKey;
    var url = "https://congress.api.sunlightfoundation.com/bills?apikey=" + key + "&per_page=50&chamber=" + this.get('chamber');
    return Ember.$.getJSON(url).then(function(response) {
      return response.results;
    });
  },
  actions: {
    chamberSelect(selectedChamber) {
      this.set('chamber', selectedChamber);
      this.refresh();
    }
  }
});
