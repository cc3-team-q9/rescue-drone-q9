exports.seed = (knex, Promise) =>
  // Deletes ALL existing entries
  knex('messages').del()
    .then(() =>
      // Inserts seed entries
      knex('messages').insert([
        {
          username: 'Alice',
          message: 'Avalanche happends. Help me.',
          latitude: 36.7477191,
          longitude: 138.128287,
        },
        {
          username: 'Bob',
          message: 'Volcano erupts. Help me.',
          latitude: 36.1695501,
          longitude: 137.4549663,
        },
        {
          username: 'Satoshi',
          message: 'Huge earthquake happends. Help me.',
          latitude: 35.726134,
          longitude: 136.3496945,
        },
        {
          username: 'Sephiroth',
          message: 'Reunion. Fire.',
          latitude: 35.0736761,
          longitude: 134.6303915,
        },
      ]));

