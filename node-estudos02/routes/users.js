import { database } from "../database.js";
import { sendJson } from "../response.js";

export function handleUsers(req, res) {
    const { method, url } = req;

    if (method !== "GET" || !url.startsWith("/api/users")) return false;

    if (url === "/api/users") {
        sendJson(res, 200, { users: database.users });
        return true;
    }

    const id = Number(url.split("/")[3]);
    const user = database.users.find(u => u.id === id);

    if (user) {
        sendJson(res, 200, { user });
    } else {
        sendJson(res, 404, { message: `User ID ${id} not found` });
    }
    return true;
}
