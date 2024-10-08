import { getFirestore, collection, getDocs, query, where, doc, getDoc } from 'firebase/firestore';
import { app } from './config';

const db = getFirestore(app);

/** Obtener todos los productos */
export const getProducts = async (setProducts) => {
  const querySnapshot = await getDocs(collection(db, "products"));
  const products = [];
  querySnapshot.forEach((doc) => {
    products.push(doc.data());
  });
  //console.log('getProducts.products:', products)
  setProducts(products);
}


/** Obtener todos los productos de una Categoría pasada por paráemtro */
export const getProductsByCategory = async (category, setProducts) => {
  const docsRef = collection(db, "products");
  const products = [];
  const q = query(docsRef, where('category', '==', category));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    products.push(doc.data());
  });
  //console.log('getProductsByCategory.products:', products)
  setProducts(products);
}


/** Obtener un producto según su ID pasado por parámetro */
export const getProduct = async (id, setProduct) => {
  const docRef = doc(db, "products", id);
  const docSnapshot = await getDoc(docRef);
  if (docSnapshot.exists()) {
    setProduct(docSnapshot.data());
  } else {
    console.log('Documento no existe 😱');
  }
  //console.log('getProduct.product:', products)
}
