const axios = require("axios");

module.exports = async (req, res) => {
  const { code } = req.query;

  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      null,
      {
        params: {
          grant_type: "authorization_code",
          code,
          redirect_uri: "https://howie-portfolio.vercel.app/api/callback", // note the /api/callback route here
          client_id: "87fcc6d0cb494536a8112b362e87d18c",
          client_secret: "37c0cd373f1c4b598233c2cdaf853bf0",
        },
      }
    );

    const { access_token, refresh_token } = response.data;

    // You would then typically store these tokens in your app's state and use them to make requests to the Spotify API
    res.status(200).json({ access_token, refresh_token });
  } catch (error) {
    console.error("Error during token acquisition", error);
    res.status(500).json({ error: "Error during token acquisition" });
  }
};
