import { doc, getDocs, query, collection, getDoc } from 'firebase/firestore';
import { db } from './firebase.js';

export const getDocuments = async () => {
	const docRef = query(collection(db, 'menu'));
	const a = await getDocs(docRef);
	a.forEach((doc) => {
		console.log(doc.data().nombre);
	});
};

export const getDocument = async (id) => {
	const docRef = doc(db, 'menu', id);
	const a = await getDoc(docRef);
	return a.data();
};
