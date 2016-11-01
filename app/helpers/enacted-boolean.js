import Ember from 'ember';

export function enactedBoolean(params) {
  var enacted = params[0];
  if(enacted === true) {
    return "Yes";
  } else {
    return "No";
  }
}

export default Ember.Helper.helper(enactedBoolean);
