import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveProduct(params){
      var newProduct = this.store.createRecord('product', params);
      newProduct.save();
      this.transitionTo('admin');
    },
  }
});
