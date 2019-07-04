import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import { Response } from 'express';

export const JWT_SECRET = `RANDOM_JWT_SECRET_HERE`;
export const JWT_OPTIONS = {
    issuer: 'postgraphile',
    audience: 'postgraphile',
    algorithm: 'HS256',
};

export const generateToken = (payload: any) =>
    // @ts-ignore
    promisify(jwt.sign)(payload, JWT_SECRET, {
        ...JWT_OPTIONS,
        expiresIn: '7d',
    });

export interface JwtPayload {
    role?: string;
    id: string;
    username?: string;
}
export type JwtCallback = (error: null | Error, success: any | null) => void;
