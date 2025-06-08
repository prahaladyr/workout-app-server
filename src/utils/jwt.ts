import jwt from 'jsonwebtoken';

export function generateJWT(userId: string): string {
    return jwt.sign({ sub: userId }, process.env.JWT_SECRET!, { expiresIn: '1h' });
}
