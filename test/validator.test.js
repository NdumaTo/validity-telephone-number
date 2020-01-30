const assert = require('assert')
const validate = require('../index.js')

describe('Telephone number validity', function() {
  it('should allow valid phone numbers starting with 0', function() {
    const fixture = [
      'number',
      'Telephone number',
      { number: '01923261166' },
      (err, message) => {
        assert.deepEqual(err, null)
        assert.deepEqual(message, null)
      }
    ]

    validate(...fixture)
  })

  it('should allow valid phone numbers starting with a country code', function() {
    const fixture = [
      'number',
      'Telephone number',
      { number: '+441923261166' },
      (err, message) => {
        assert.deepEqual(err, null)
        assert.deepEqual(message, null)
      }
    ]

    validate(...fixture)
  })

  it('should not allow invalid phone numbers that are too short', function() {
    const fixture = [
      'number',
      'Telephone number',
      { number: '+4412345' },
      (err, message) => {
        assert.deepEqual(err, null)
        assert.deepEqual(
          message,
          'Telephone number must be a valid telephone number'
        )
      }
    ]

    validate(...fixture)
  })

  it('should not allow invalid phone numbers that are too long', function() {
    const fixture = [
      'number',
      'Telephone number',
      { number: '+44012345678910' },
      (err, message) => {
        assert.deepEqual(err, null)
        assert.deepEqual(
          message,
          'Telephone number must be a valid telephone number'
        )
      }
    ]

    validate(...fixture)
  })

  it('should not allow phone numbers containing text', function() {
    const fixture = [
      'number',
      'Telephone number',
      { number: '+44-Fake-Number' },
      (err, message) => {
        assert.deepEqual(err, null)
        assert.deepEqual(
          message,
          'Telephone number must be a valid telephone number'
        )
      }
    ]

    validate(...fixture)
  })

  it('should thow an error if the type of input is not a string', function() {
    const fixture = [
      'number',
      'Telephone number',
      { number: { object: '+44-Fake-Number' } },
      (err, message) => {}
    ]

    assert.throws(() => validate(...fixture), {
      message: 'Telephone number must be a string',
      name: 'TypeError'
    })
  })
})
