module.exports = (app) => {
  app.get('/g', (req, res) => {
    res.render('g');
  });
}