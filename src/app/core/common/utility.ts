export class Utility {
    static getUfName(uf: string): string {
        switch (uf) {
            case 'MG': return 'Minas Gerais';
            case 'PR': return 'Paraná';
            case 'SP': return 'São Paulo';
            case 'RS': return 'Rio Grande do Sul';
            case 'DF': return 'Distrito Federal';

            default: return '';
        }
    }
}