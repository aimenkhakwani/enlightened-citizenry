import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['last_action_at:desc'],
  sortedBills: Ember.computed.sort('bills', 'sortBy'),
  actions: {
    chamberSelect() {
      var selectedChamber = this.$('#chamber-filter').val();
      this.sendAction("chamberSelect", selectedChamber);
    }
  }
});
