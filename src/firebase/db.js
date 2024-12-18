import { getFirestore, collection, getDocs, query, where, doc, getDoc, addDoc } from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);

export const getProducts = async () => {
    const q = query(collection(db, "items"));
    const querySnapshot = await getDocs(q);
    const products = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return products;
};

export const getProduct = async (id) => {
    const docRef = doc(db, "items", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
    }
};

export const getProductsByCategory = async (categoria) => {
    let q;

    if (categoria === 'sin-evolucionar') {
        q = query(collection(db, "items"), where("evolucion", "==", 1));
    } else if (categoria === 'evolucionado') {
        q = query(collection(db, "items"), where("evolucion", "in", [2, 3]));
    } else {
        q = query(collection(db, "items"));
    }

    const querySnapshot = await getDocs(q);
    const products = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return products;
};

export const registrarCompra = async (compra) => {
    const docRef = await addDoc(collection(db, "compras"), compra);
    return docRef.id;
};
