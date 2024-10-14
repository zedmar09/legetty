import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig =
  process.env.NEXT_PUBLIC_NODE_ENV === 'production'
    ? {
        apiKey: 'AIzaSyD5JaRczqv2dnfjFAxxpcbglvb98e5F2lo',
        authDomain: 'college-cost-secrets.firebaseapp.com',
        projectId: 'college-cost-secrets',
        storageBucket: 'college-cost-secrets.appspot.com',
        messagingSenderId: '855977332114',
        appId: '1:855977332114:web:c8bb43b06dde85a687854b',
        measurementId: 'G-J1B48NB38Y',
      }
    : {
        apiKey: 'AIzaSyAeXYucZ6Pm-IIJjHKpdAt2OucPdWIj89k',
        authDomain: 'collegecostsecret.firebaseapp.com',
        projectId: 'collegecostsecret',
        storageBucket: 'collegecostsecret.appspot.com',
        messagingSenderId: '442055468506',
        appId: '1:442055468506:web:5c1bf3ae4e7097ba458ce3',
      };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firebaseStorage = getStorage(app);

export { auth, firebaseStorage };
