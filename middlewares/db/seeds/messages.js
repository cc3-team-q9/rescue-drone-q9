exports.seed = (knex, Promise) =>
  // Deletes ALL existing entries
  knex('messages').del()
    .then(() =>
      // Inserts seed entries
      knex('messages').insert([
        {
          username: 'Alice',
          message: 'Avalanche happens. Help me.',
          latitude: 35.6706505,
          longitude: 139.7718614,
        },
        {
          username: 'Bob',
          message: 'Volcano erupts. Help me.',
          latitude: 35.688431,
          longitude: 139.698605,
        },
        {
          username: 'Satoshi',
          message: 'Huge earthquake happens. Help me.',
          latitude: 35.6585805,
          longitude: 139.7454329,
        },
        {
          username: 'Sephiroth',
          message: 'Reunion. Fire.',
          latitude: 35.7100627,
          longitude: 139.8107004,
        },
      ]));

