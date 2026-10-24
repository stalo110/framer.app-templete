import jwt from "jsonwebtoken";
import { HttpError } from "../lib/http-error.js";
function jwtSecret() {
    const secret = process.env.JWT_SECRET;
    if (secret)
        return secret;
    if (process.env.NODE_ENV === "production") {
        throw new HttpError(503, "Admin sign-in is not configured.");
    }
    return "zam-dev-admin-secret";
}
export function signAdminToken(email) {
    return jwt.sign({ sub: "admin", email, role: "admin" }, jwtSecret(), {
        expiresIn: "8h",
    });
}
export function authenticateAdmin(request, _response, next) {
    const header = request.headers.authorization ?? "";
    const token = header.startsWith("Bearer ") ? header.slice(7).trim() : "";
    if (!token) {
        next(new HttpError(401, "Authentication required."));
        return;
    }
    try {
        const payload = jwt.verify(token, jwtSecret(), {
            algorithms: ["HS256"],
        });
        if (payload.role !== "admin") {
            throw new Error("Invalid admin payload");
        }
        request.admin = payload;
        next();
    }
    catch {
        next(new HttpError(401, "Invalid or expired session."));
    }
}
//# sourceMappingURL=admin-auth.js.map