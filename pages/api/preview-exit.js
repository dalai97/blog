export default async function handler(req, res) {
  res.clearPreviewData();
  res.writeHead(307, { Location: encodeURI(`/`) });
  res.end();
}
