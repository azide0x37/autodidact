if (Meteor.isClient) {
    Template.meh.helpers({
      'photo': function(){
           Meteor.call('getMeh',function(err,results){
           console.log(results.content);
           Session.set('photo', JSON.parse(results.content).deal.photos[0]);
       });
    return (Session.get('photo'));
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
