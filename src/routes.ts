import Router from "express";
import { SettingsController} from "./controllers/SettingsController";

const routes = Router();
const settingsController = new SettingsController();
/**
 * Tipos de parâmetros
 * Routes Params => Parametros de rotas
 * Query Params => Filtros e buscas
 * Body Params => inserções
 */

routes.post("/settings", settingsController.create);

export { routes };