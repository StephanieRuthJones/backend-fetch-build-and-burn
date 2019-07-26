
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('muppet').del()
    .then(function () {
      // Inserts seed entries
      return knex('muppet').insert([
        { name: 'Kermit', talent: 'playing the banjo', image: 'https://pbs.twimg.com/profile_images/1080855598298611713/lTS-u1Iu.jpg', votes: 0 },
        { name: 'Statler and Waldorf', talent: 'saying clever insults and laughing at other people\'s expense', image: 'https://i.imgur.com/XsgMh0J.jpg', votes: 10 },
        { name: 'Animal', talent: 'causing mahem and destruction - and playing the drums', image: 'https://www.snopes.com/tachyon/2016/01/animal-muppet.png?resize=865,452', votes: 5 }
      ]);
    });
};

