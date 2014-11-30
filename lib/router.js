Router.configure({
   layoutTemplate: 'mylayout',
    loadingTemplate: 'loading',
    waitOn: function () {
        return Meteor.subscribe('poems');
    }
});
//Router.route('/', function () {
//    this.render('Home');
//});

Router.route('/', {
    name: 'Home'
});

Router.route('/poems/:_id', {
   name: 'poemDetails',
    data: function() {
        update = Session.get('click');
        if (update === 'true') {
            count = Number(Session.get(this.params._id)) + 1;
            Poems.update({"_id": this.params._id}, {$set: {"count": count}});
            Session.set('click', 'false');
        }
        return Poems.findOne(this.params._id);;
    }
});