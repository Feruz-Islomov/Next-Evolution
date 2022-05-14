export default function handler(req, res) {
  res.setPreviewData({ user: "Feruz" });
  res.redirect(req.query.redirect);
}
