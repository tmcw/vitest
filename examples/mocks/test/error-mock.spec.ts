vi.mock('../src/default', () => {
  throw new Error('some error')
})

test('when using top level variable, gives helpful message', async () => {
  await expect(() => import('../src/default').then(m => m.default)).rejects
    .toThrowErrorMatchingInlineSnapshot('"[vitest] There was an error, when mocking a module. If you are using vi.mock, make sure you are not using top level variables inside, since this call is hoisted. Read more: https://vitest.dev/api/#vi-mock"')
})