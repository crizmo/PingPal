# PingPal

Keep your projects alive with this simple pinger.

# Usage

If you want to add your own URLs to the pinger:
1. Fork this repo.
2. Edit the `urlClusters` array in `index.js` to add your own URLs and specify the ping interval.
3. Push the changes to your forked repo.
4. Go to https://github.com/crizmo/pingpal and click on the "New Pull Request" button.
5. Open a pull request and wait for it to be merged.
6. Once the pull request is merged, your URLs will be added to the pinger.

## Installation

1. Make sure you have Node.js and npm installed on your system.
2. Clone this repository or download the code.
3. Open a terminal and navigate to the project directory.
4. Run the following command to install the dependencies:

```bash
npm install
```

# Configuration

1. Open the index.js file in a text editor.
2. Edit the urls Cluster array to add your own URLs.

```javascript
const urlClusters = [
  {
    name: "Cluster 1",
    pingInterval: 60000, // 1 minute in milliseconds
    urls: [
      "https://qrnotify.onrender.com",
      "https://discord-cards.onrender.com/api/compact/784141856426033233",
    ],
  },
  {
    name: "Cluster 2",
    pingInterval: 120000, // 2 minutes in milliseconds
    urls: [
      "https://doc-appoint-server.onrender.com/",
      "https://caw-server.onrender.com",
    ],
  },
  // Add more URL clusters with names and ping intervals here
];
```

3. Save the file.
4. Open a pull request to add your URLs to the pinger.
5. Once the pull request is merged, your URLs will be added to the pinger.

# Deployment
1. Start the server by running the following command:

```bash
npm start
```

2. The server will start running on port 3000.
3. Open your web browser and navigate to http://localhost:3000 to confirm that the server is running.
4. Use the following endpoints:

-   /status: Returns the status of each URL.
-   /keepalive: Confirms that the keep-alive functionality is working.

# Customization

-   You can modify the fetch interval in the setInterval call in the keepReplAlive function.
-   Customize the URLs in the urls array to suit your requirements.

# License

This project is licensed under the MIT License.
