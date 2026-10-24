import { categoryModel } from "../models/category.model.js";
export async function listCategories(_request, response, next) {
    try {
        response.json({ data: await categoryModel.list() });
    }
    catch (error) {
        next(error);
    }
}
//# sourceMappingURL=category.controller.js.map