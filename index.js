const phoneNumber = require('awesome-phonenumber')

module.exports = function phoneNumberValidator(
  key,
  keyDisplayName,
  object,
  cb
) {
  let value = (object[key] && object[key]) || ''

  if (typeof value != 'string') throw new TypeError(`${[key]} must be a string`)

  const assumedCountryCode = '+44'

  if (value.startsWith('0')) value = assumedCountryCode + value

  const validatePhoneNumber = new phoneNumber(value)

  if (validatePhoneNumber.isValid()) return cb(null)

  cb(null, `${keyDisplayName} must be a valid telephone number`)
}
