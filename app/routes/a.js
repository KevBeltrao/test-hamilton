module.exports = (app) => {
  app.get('/a', (req, res) => {
    res.render('a');
  });
}