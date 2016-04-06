import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  total: Ember.computed('shoppingCart.items.length', function() {
    var costTotal = 0;
    var shoppingCart = this.get('shoppingCart');
    shoppingCart.items.forEach(function(item) {
    costTotal += item.get('cost');
  });
  return costTotal;
}),
  actions: {
    remove(item){
      this.get("items").removeObject(item);
    }
  }
});
