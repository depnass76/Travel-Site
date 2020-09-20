
// test('Hello World', () => {

// })

// test('This should fail', () => {
// 	throw new Error('failure')
// })



// describe('sum of 2 numbers', () => {
//   it(' 2 + 2 equal 4', () => {
//       expect(2 + 2).toEqual(4)
//   });
// });

// it('Async test', async done => {
//   // Do your async tests here
//   done()
// })

it('gets the test endpoint', async done => {
  const response = await request.get('/test')

  expect(response.status).toBe(200)
  expect(response.body.message).toBe('pass!')
  done()
})