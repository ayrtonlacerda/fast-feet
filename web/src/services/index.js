import api from './api';

const Endpoints = {
  // auth 
  login: async data => await api.post('/sessions', data),

  // orders
  getOrders: async (query) =>
    await api.get(query ? `/orders?order=${query}` : '/orders'),
  postOrders: async data => await api.post('/orders', data),
  putOrders: async (data, id) => await api.put(`/orders/${id}`, data),
  deleteOrders: async (_, id) => await api.delete(`/orders/${id}`),

  // process
  putProcess: async (data) => await api.put('/process', data),

  // deliverymans
  getDeliverymans: async (query) => 
    await api.get(query ? `/deliverymans?deliveryman=${query}` : '/deliverymans'),
  queryDeliverymans: async (_, query) => 
    await api.get(`/deliverymans?deliveryman=${query}`),
  postDeliverymans: async data => await api.post('/deliverymans', data),
  putDeliverymans: async (data, id) => 
    await api.put(`/deliverymans/${id}`, data),
  deleteDeliverymans: async (_, id) => await api.delete(`/deliverymans/${id}`),

  // recipient
  getRecipients: async (query) => 
    await api.get(query ? `/recipients?recipient=${query}` : '/recipients'),
  queryRecipients: async (_, query) => 
    await api.get(`/recipients?reacipient=${query}`),
  postRecipient: async data => await api.post('/recipients', data),
  putRecipient: async (data, id) => 
    await api.put(`/recipients/${id}`, data),

  // problems
  getProblems: async () => await api.get('/orders/problems'),
  putProblems: async (data, id) => await api.put(`/orders/${id}`, data),

  // files
  postFile: data => api.post('files', data),
}

export {api};
export default Endpoints;