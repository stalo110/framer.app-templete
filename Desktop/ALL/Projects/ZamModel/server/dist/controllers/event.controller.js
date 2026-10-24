import { eventModel } from "../models/event.model.js";
export async function listEvents(_request, response, next) {
    try {
        response.json({ data: await eventModel.list() });
    }
    catch (error) {
        next(error);
    }
}
//# sourceMappingURL=event.controller.js.map