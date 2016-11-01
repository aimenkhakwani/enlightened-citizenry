import Ember from 'ember';
import config from '../config/environment';

export default Ember.Component.extend({
  sponsor: {},
  showSponsor: false,
  actions: {
    showSponsor(first, last) {
      var _this = this;
      if (this.get('showSponsor') === false) {
        var key = config.myApiKey;
        var url = "https://congress.api.sunlightfoundation.com/legislators?fields=first_name,last_name,chamber,party,in_office,state_name?first_name=" + first + "&last_name=" + last + "&apikey=" + key;
        return Ember.$.getJSON(url).then(function(response) {
          _this.set('sponsor', response.results[0]);
          _this.set('showSponsor', true);
        });
        console.log(this.get('sponsor')); // FIX THIS
      }
    }
  }
});
