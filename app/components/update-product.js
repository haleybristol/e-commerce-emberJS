import Ember from 'ember';

export default Ember.Component.extend({
  updateProductForm: false,
  actions: {
    updateProductForm(){
      this.set('updateProductForm', true);
    },
    update(product){
      var params = {
        title: this.get('title'),
        image: this.get('image'),
        description: this.get('description'),
        cost: this.get('cost')
      };
      this.set('updateProductForm', false);
      this.sendAction('update', product, params);
    },
    destroyProduct(product) {
      if(confirm("Are you sure you want to delete this city?")) {
        this.sendAction('destroyProduct', product);
      }
    }
  }
});
