Ember.Object.reopen({
   setUnlessDestroyed: function(property, value)  {
       if (!this.isDestroyed) {
           this.set(property, value);
       }
   }
});