module.exports = (app) => {
  app.get('/b', (req, res) => {
    res.render('b');
  });
}