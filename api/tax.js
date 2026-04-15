export default async function handler(req, res) {
  const { zip } = req.query;

  try {
    const response = await fetch(`/api/tax?zip=${zip}`)
      headers: {
        Authorization: "Bearer sk_live_XXXXX"
      }
    });

    const data = await response.json();

    res.status(200).json({
      rate: data.rate.combined_rate || 0
    });

  } catch (e) {
    res.status(200).json({ rate: 0 });
  }
}
