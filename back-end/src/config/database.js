module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'ffdb',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
