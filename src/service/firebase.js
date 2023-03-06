import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDIXSVXMrjZRzxuTg_5y8oUkIJ3394Ayt8',
	authDomain: 'estufa-3e169.firebaseapp.com',
	projectId: 'estufa-3e169',
	storageBucket: 'estufa-3e169.appspot.com',
	messagingSenderId: '807301270891',
	appId: '1:807301270891:web:e52bbde46739e9ea0ad02e',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
