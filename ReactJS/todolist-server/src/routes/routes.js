const todoRoutes = require('./todos');
const boardRoutes = require('./boards');

export default function routes(app) {
  app.use('/todos', todoRoutes);
  app.use('/boards', boardRoutes);
}
