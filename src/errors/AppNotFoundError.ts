export class AppNotFoundError extends Error {
    constructor(app: string) {
        super(`Aplicação "${app}" não encontrada`);
        this.name = 'AppNotFoundError';
    }
}
