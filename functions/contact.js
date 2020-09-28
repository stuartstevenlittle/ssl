exports.handler = (event, _context, callback) => {
  console.log({ event })

  callback('Booo', { statusCode: 200, body: JSON.stringify({ boop: true }) })
}