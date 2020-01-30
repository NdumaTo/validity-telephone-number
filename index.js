import phoneNumber from 'awesome-phonenumber'

export function phoneNumberValidator(key, keyDisplayName, object, cb) {
  let value = (object[key] && object[key]) || ''

  if (typeof value != 'string') throw new TypeError(`${[key]} must be a string`)

  const assumedCountryCode = '+44'

  if (value.startsWith('0')) value = assumedCountryCode + value

  const validatePhoneNumber = new phoneNumber(value)

  if (validatePhoneNumber.isValid()) return cb(null)

  return cb(null, `Please enter a valid telephone number`)
}
