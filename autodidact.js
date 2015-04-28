if (Meteor.isClient) {
    Template.meh.helpers({
      'photo': function(){
           Meteor.call('getMeh',function(err,results){
           console.log(results.content);
           Session.set('photo', JSON.parse(results.content).deal.photos[1]);
       });
    return (Session.get('photo'));
   },
      'title': function(){
           Meteor.call('getMeh',function(err,results){
           console.log(results.content);
           Session.set('title', JSON.parse(results.content).deal.title);
       });
    return (Session.get('title'));
   },
      'price': function(){
           Meteor.call('getMeh',function(err,results){
           console.log(results.content);
           Session.set('price', JSON.parse(results.content).deal.items[0].price);
       });
    return (Session.get('price'));
   },
      'features': function(){
        Meteor.call('getMeh', function(err, results){
          console.log(results.content);
            Session.set('features', JSON.parse(results.content).deal.features);
          });
      return (Session.get('features'));
      }
});
 
  Template.meh.events({

  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup

  });
  
  Meteor.methods({
      'getMeh':function(){
          return Meteor.http.call('GET','https://api.meh.com/1/current.json?apikey=bawDoKqvnBeJ9oBhGr7qnlFSwygB9L1D');
      }
    })
}
Router.route('/', function () {
  this.render('Home', {
    data: function () { return Items.findOne({_id: this.params._id}); }
  });
});