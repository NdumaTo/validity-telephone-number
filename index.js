var PhoneNumber = require('awesome-phonenumber')

module.exports = function phoneNumberValidator(
  key,
  keyDisplayName,
  object,
  cb
) {
  var value = object[key]

  if (typeof value !== 'string')
    throw new TypeError('keyDisplayName' + 'must be a string')

  var assumedCountryCode = '+44'

  if (value.startsWith('0')) value = assumedCountryCode + value

  var validatePhoneNumber = new PhoneNumber(value)

  if (validatePhoneNumber.isValid()) return cb(null)

  cb(null, 'keyDisplayName' + 'must be a valid telephone number')
}
