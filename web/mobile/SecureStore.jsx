// R8-32 (.jsx) React Native: react-native-rsa-native key generation + signing.
import { RSA } from 'react-native-rsa-native';

export async function enroll(deviceId) {
  const keys = await RSA.generateKeys(2048);
  const sig = await RSA.signWithAlgorithm(deviceId, keys.private, RSA.SHA1withRSA);
  return { pub: keys.public, sig };
}
