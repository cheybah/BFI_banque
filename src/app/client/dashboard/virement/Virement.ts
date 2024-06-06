
export interface Virement {
    clientId: number;
    compteADebiter: string;
    compteACrediter: string;
    montant: number;
    motif: string;
}
