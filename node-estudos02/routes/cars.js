import { database } from "../database.js";
import { sendJson } from "../response.js";

export function handleCars(req, res) {
    const { method, url } = req;

    if (!url.startsWith("/api/cars")) return false;

    if (method === "GET") {
        if (url === "/api/cars") {
            sendJson(res, 200, { cars: database.cars });
            return true;
        }

        const id = Number(url.split("/")[3]);
        const car = database.cars.find(c => c.id === id);

        if (car) {
            sendJson(res, 200, { car });
        } else {
            sendJson(res, 404, { message: `Car ID ${id} not found` });
        }
        return true;
    }

    return false;
}
