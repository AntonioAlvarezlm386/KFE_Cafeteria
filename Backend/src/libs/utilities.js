import crypto from 'crypto' 

export const accessKeyGenerator = (keyLength) => {
    return crypto.randomBytes(Math.ceil(keyLength/2)).toString('hex').slice(0, keyLength)
}