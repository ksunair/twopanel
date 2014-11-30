Template.poemItem.helpers({
    counters: function(){
        Session.set(this._id, this.count);
        return this.count;
    }
})