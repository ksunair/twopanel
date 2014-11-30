if (Poems.find().count() === 0){
    Poems.insert({
        name: 'One Day',
        song:'<h2>One Day</h2>'+
        '<p>I told my love that I love you.<br>'+
        'My love told me, I know<br>'+
        'I told my love that I miss you.<br>'+
        'My love told me, so sorry.<br><br>',
        url: "#",
        count: 0
    });

    Poems.insert({
        name: 'Life without you',
        song: '<h2>Life without you</h2>'+
        '<p>Without seeing you the sun<br>'+
        'went behind the moon so<br>'+
        'we dont see him crying<br>'+
        'with magma storms.<br>'+
        '(no life on earth anymore)<br><br>',
        url: "#",
        count: 0
    });

    Poems.insert({
        name: 'My beautiful',
        song:'<h2>My Beautiful</h2>'+
        '<p>Rain drops fall on the ground<br>'+
        'Ground feels good as it get wet<br>'+
        'Earth get cooler and feels lazy<br>'+
        'You make me feel earth with your kiss<br><br>',
        url: "#",
        count: 0
    });
}