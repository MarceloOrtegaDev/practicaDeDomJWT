import { Router } from "express";
import { editarTarea, getAllTodosCtrl, postTodos, tareasXid  } from "../controllers/todos.controllers.js";
import validarJwt from "../middlewares/validar-jwt.js";

const todosRouter = Router();

todosRouter.get("/", validarJwt, getAllTodosCtrl);
todosRouter.get("/:id", validarJwt, tareasXid )

todosRouter.put("/:id", editarTarea )
todosRouter.post("/", validarJwt, postTodos);

export { todosRouter };
