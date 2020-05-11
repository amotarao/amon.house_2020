module.exports = (req, res, next) => {
  res.setHeader('Cache-Control', 'public, max-age=21600, s-maxage=21600');
  next();
};
