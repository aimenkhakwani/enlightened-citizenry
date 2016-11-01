import Ember from 'ember';

export function chamberName(params) {
  var chamber = params[0];
  chamber = chamber.charAt(0).toUpperCase() + chamber.substring(1);
  return chamber;
}

export default Ember.Helper.helper(chamberName);
