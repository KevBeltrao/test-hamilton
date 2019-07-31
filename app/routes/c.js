module.exports = (app) => {
  app.get('/c', (req, res) => {
    res.render('c');
  });
}