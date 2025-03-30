import { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import type Db from "../db";

export interface Context {
    db: Db;
}

export function createContext({req}: CreateExpressContextOptions): Context {
    return {
        db: req.app.locals.db
    }
};