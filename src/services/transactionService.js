async function findAll() {
    return [
        {
          amount: 100000,
          from: {
              userId: '619ef76ae1c81a293ac2038f',
              address: '0x87171711',
          },
          to: {
              userId: '619ef76ae1c81a293091838f',
              address: '0x91919123'
          }
        },
        {
          amount: 999000,
          from: {
              userId: '619ef76ae1c81a293ac2038f',
              address: '0x87171711',
          },
          to: {
              userId: '619ef76ae1c81a293091838f',
              address: '0x91919123'
          }
        }
    ];
}

module.exports = {
    findAll,
};