exports.seed = (knex, Promise) =>
  // Deletes ALL existing entries
  knex('messages').del()
    .then(() =>
      // Inserts seed entries
      knex('messages').insert([
        {
          username: 'Alice',
          message: 'Avalanche happends. Help me.',
          longitude: 36.7477191,
          latitude: 138.128287,
        },
        {
          username: 'Bob',
          message: 'Volcano erupts. Help me.',
          longitude: 36.1695501,
          latitude: 137.4549663,
        },
        {
          username: 'Satoshi',
          message: 'Huge earthquake happends. Help me.',
          longitude: 35.726134,
          latitude: 136.3496945,
        },
        {
          username: 'Sephiroth',
          message: 'Reunion. Fire.',
          longitude: 35.0736761,
          latitude: 134.6303915,
        },
      ]));

