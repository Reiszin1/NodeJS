import { database } from "../database.js";
import { sendJson } from "../response.js";

export function handleProducts(req, res) {
    const { method, url } = req;

    if (method !== "GET" || !url.startsWith("/api/products")) return false;

    if (url === "/api/products") {
        sendJson(res, 200, { products: database.products});
        return true;
    }

    const id =  Number(url.split("/")[3]);
    const product = database.products.find(p => p.id === id);

    if (product) {
        sendJson(res, 200, { product });
        return true;
    }

    sendJson(res, 404, { message: "Product not found" });
    return true;
}