import Ember from 'ember';
import config from '../config/environment';

export default Ember.Component.extend({
  error: false,
  legislators: [],
  actions: {
    findLegislator(){
      var _this = this;
      var zipcode = this.get("zipcode");
      var key = config.myApiKey;
      if(zipcode.length === 5 && $.isNumeric(zipcode)) {
        this.set("error", false);
        var url = "https://congress.api.sunlightfoundation.com/legislators/locate?zip=" + zipcode + "&apikey=" + key;
        return Ember.$.getJSON(url).then(function(response) {
          _this.set("legislators", response.results);
        });
      } else {
        this.set("error", true);
      }
    }
  }
});
