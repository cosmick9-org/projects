describe('Node version', function () {
  it('should be v19.8.1 or above', function (done) {
    const version = process.version
    if (version >= 'v19.8.1') {
      done()
    } else {
      throw new Error(`Wrong node version: ${version}`)
    }
  })
})