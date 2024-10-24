// src/modules/auth/interfaces/user.interface.ts
export interface User {
    userId: number;
    username: string;
    password: string; // Debe ser un hash en una implementación real
}
