Meteor.publish('poems', function () {
    //if (this.userId){
    //    var user = Meteor.users.findOne(this.userId);
    //    if (user.username == "mamtarath")
            return Poems.find();
    //}
})