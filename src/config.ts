import { SendMailOptions } from 'nodemailer';
import { AppNotFoundError } from './errors/AppNotFoundError';

export default function config(app: string, email: string, password: string): SendMailOptions {
    if (app === 'filas-cirurgias') {
        return {
            from: '"DGMOG - WebApps" <dgmog.ses@gmail.com>',
            to: email,
            subject: `Form - Monitoramento de Filas Cirurgias`,
            html: `
            <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; border-radius: 8px;">
            <h2 style="color: #333;">Olá,</h2>
            <p style="color: #555;">
            Aqui está a sua nova senha para acessar o sistema de monitoramento de GERES:
            </p>
            <h3 style="background-color: #007bff; color: white; padding: 10px; border-radius: 5px; display: inline-block;">
            ${password}
            </h3>
            <p style="color: #555;">
            Por favor, mantenha sua senha em um lugar seguro e não a compartilhe com ninguém.
            </p>
            <p style="color: #555;">Se você não solicitou essa alteração, por favor, entre em contato conosco.</p>
            <footer style="margin-block-start: 20px; font-size: 12px; color: #999;">
            <p>Atenciosamente,</p>
            <p>DGMOG - WebApps</p>
            </footer>
            </div>
            `
        };
    } else if (app === 'monitoramento-geres') {
        return {
            from: '"DGMOG - WebApps" <dgmog.ses@gmail.com>',
            to: email,
            subject: `Form - Monitoramento GERES`,
            html: `
            <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; border-radius: 8px;">
            <h2 style="color: #333;">Olá,</h2>
            <p style="color: #555;">
            Aqui está a sua nova senha para acessar o sistema de monitoramento de GERES:
            </p>
            <h3 style="background-color: #007bff; color: white; padding: 10px; border-radius: 5px; display: inline-block;">
            ${password}
            </h3>
            <p style="color: #555;">
            Por favor, mantenha sua senha em um lugar seguro e não a compartilhe com ninguém.
            </p>
            <p style="color: #555;">Se você não solicitou essa alteração, por favor, entre em contato conosco.</p>
            <footer style="margin-block-start: 20px; font-size: 12px; color: #999;">
            <p>Atenciosamente,</p>
            <p>DGMOG - WebApps</p>
            </footer>
            </div>
            `
        };
    }
    
    throw new AppNotFoundError(app);
}