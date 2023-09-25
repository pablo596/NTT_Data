import api from './api';

export async function methodGet(url, query) {
  try {
    const { status, data } = await api.get(url, {
      params: query,
    });
    if (status === 200) {
      const response = { status, data };
      return response;
    }
  } catch (error) {
    return error;
  }
}

export async function methodPost(url, form_data) {
  try {
    const { status, data } = await api.post(url, JSON.stringify(form_data));
    if (status === 201 || status === 200) {
      const response = { status, data };
      return response;
    } else {
      alert('POST: algo ha ido mal ' + url + ' ' + status);
    }
  } catch (error) {
    return error;
  }
}

export const methodPut = async (url, params) => {
  try {
    const { status, data } = await api.put(url, params);
    if (status === 200 || status === 400) {
      const rs = { status, data };
      return rs;
    } else {
      alert('PUT: algo ha ido mal ' + url + ' ' + status);
    }
  } catch (error) {
    return error;
  }
};

export async function methodDelete(url) {
  try {
    const { status } = await api.delete(url);
    if (status === 204 || status === 200) {
      const response = { status };
      return response;
    } else {
      alert('DELETE: algo ha ido mal ' + url + status);
    }
  } catch (error) {
    return error;
  }
}
