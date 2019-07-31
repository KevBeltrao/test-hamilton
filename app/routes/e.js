module.exports = (app) => {
  app.get('/e', (req, res) => {
    res.render('e');
  });
}