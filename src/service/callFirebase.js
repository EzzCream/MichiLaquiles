import {
	doc,
	getDocs,
	query,
	collection,
	getDoc,
	addDoc,
} from 'firebase/firestore';
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

export const addDocument = async (obj) => {
	await addDoc(collection(db, 'contacto'), obj);
	return 'Documento agregado';
};
