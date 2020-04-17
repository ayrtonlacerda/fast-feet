import api from './api';

const Endpoints = {
  // auth 
  login: async data => await api.post('/sessions', data),

  // orders
  getOrders: async () => await api.get('/orders'),
  postOrders: async data => await api.post('/orders', data),
  putOrders: async (data, id) => await api.put(`/orders/${id}`, data),
  deleteOrders: async (_, id) => await api.delete(`/orders/${id}`),

  // deliverymans
  getDeliverymans: async () => await api.get('/deliverymans'),
  postDeliverymans: async data => await api.post('/deliverymans', data),
  putDeliverymans: async (data, id) => 
    await api.put(`/deliverymans/${id}`, data),
  deleteDeliverymans: async (_, id) => await api.delete(`/deliverymans/${id}`),

  // recipient
  getRecipients: async () => await api.get('/recipients'),
  postRecipient: async data => await api.post('/recipients', data),
  putRecipient: async (data, id) => 
    await api.put(`/recipients/${id}`, data),

  // problems
  getProblems: async () => await api.get('/orders/problems'),

  // files
  postFile: data => api.post('files', data),
}

export {api};
export default Endpoints;