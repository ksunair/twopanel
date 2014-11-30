Template.poems.helpers({
    poems: function(){
        return Poems.find({}, {sort: {count: -1}});
    }
});

Template.poems.events({
   'click li a': function(event){
       a = $(event.target);
       li = a.parent();

       li.parent('ul').children('li').not(li).removeClass('active');
       li.addClass('active');
       Session.set('click', 'true');
   }
});