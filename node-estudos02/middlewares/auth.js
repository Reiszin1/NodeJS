import { API_KEY } from "../config.js";

export function authenticate(req, res) {
    const key = req.headers["x-api-key"];

    if (key !== API_KEY) {
        res.writeHead(401, {"Content-Type": "application/json"})
        res.end(JSON.stringify({message: "Unauthorized: invalid or missing API key"}))
        return false;
    }

    return true;
}