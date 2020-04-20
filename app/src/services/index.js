import api from './api';

const Endpoints = {
  // auth
  login: async (email) => api.get(`/sessions/${email}`),

  // process
  getProcess: async (id) => api.get(`/process/${id}`),
  putProcess: async (data) => api.put('/process', data),

  // problem
  getProblem: async (id) => api.get(`/problems/${id}`),
  postProblem: async (data) => api.post('/problems', data),

  // files
  postFile: (data) => api.post('files', data),
};

export { api };
export default Endpoints;
