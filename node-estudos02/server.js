import http from "http";
import { PORT } from "./config.js";
import { authenticate } from "./middlewares/auth.js";
import { handleProducts } from "./routes/products.js";
import { handleCars } from "./routes/cars.js";
import { handleUsers } from "./routes/users.js";
import { sendJson } from "./response.js";

// creating an http server
const server = http.createServer((req, res) => {

    res.on("finish", () => {
        console.log(req.method, new Date().toLocaleTimeString(), req.url, res.statusCode);
    });

    if (req.url.startsWith("/.well-known/")) {
        res.writeHead(204);
        return res.end();
    }

    // It blocks if the API Key is invalid
    if (!authenticate(req, res)) return;
    // Handles requests for products
    if (handleProducts(req, res)) return;
    // Handles requests for cars
    if (handleCars(req, res)) return;
    // Handles requests for users
    if (handleUsers(req, res)) return;

    sendJson(res, 404, { message: "route not found" });
});


// configuring to listen for requests on port 3000
server.listen(PORT, () => {
    console.log(`Server running in port ${PORT}!`);
});