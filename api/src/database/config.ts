import * as admin from 'firebase-admin'
import { ServiceAccount } from 'firebase-admin'

import serviceAccount from './serviceAccount.json'

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as ServiceAccount),
    databaseURL: 'https://handtalk-plugin-extract-default-rtdb.firebaseio.com',
  })
}

const db = admin.database()

export { db }
