import { methodDelete, methodGet, methodPost, methodPut } from './methods';

const RESOURCE = '/bp/products';

export const getProductosFinancieros = (query) => {
  return methodGet(RESOURCE + '/', query);
};

export const postProductosFinancieros = (body) => {
  return methodPost(RESOURCE + '/', body);
};

export const putProductosFinancieros = (body) => {
  return methodPut(RESOURCE + '/', body);
};

export const deleteProductosFinancieros = (id) => {
  return methodDelete(RESOURCE + `?id=${id}`);
};
