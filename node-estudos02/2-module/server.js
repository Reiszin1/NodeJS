import http from "http";

// creating an http server
const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-type": "application/json"})
    res.end(`{
        "firstname": "Tiago",
        "lastname": "Reis",
        "age": "26",
        "country": "Brazil"
        }`);
})

const PORT = 3000;

// configuring to listen for requests on port 3000
server.listen(PORT, () => {
    console.log(`Server running in port ${PORT}!`);
});