import { Router, Request, Response } from "express";
import { api } from "./Api";

const router = Router()

router.use('/api', api)

export { router }