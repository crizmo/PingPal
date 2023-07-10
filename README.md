# Repler

Keep your Repl.it projects alive with this simple Repl pinger.

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
2. Edit the urls array to specify the URLs you want to fetch data from.
3. Save the file.

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