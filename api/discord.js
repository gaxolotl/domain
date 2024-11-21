export default function handler(req, res) {
    if (req.method === 'GET') {
      res.status(200).send('dh=ee65af97fcb49a340e96fdf41dea03b6f9d34dd8');
    } else {
      res.status(405).send('Method Not Allowed');
    }
  }
  