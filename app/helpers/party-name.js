import Ember from 'ember';

export function partyName(params) {
  if (params[0] === "R") {
    return "Republican";
  } else if (params[0] === "D") {
    return "Democrat";
  } else {
    return "Other";
  }
}

export default Ember.Helper.helper(partyName);
