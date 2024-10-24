import { IsBoolean, IsNumber, IsObject, IsString } from 'class-validator';

export class MockDataEntity {
    @IsNumber()
    id: number | undefined;

    @IsString()
    estadoRespuesta: string | undefined;

    @IsObject()
    respuesta!: {
        Tipo: string;
        feriados: any;
        puedeRescatar: any;
        puedeSuscribir: any;
        Id: string;
        Nombre: string;
        Implementa: any;
        Etiqueta: any;
        Requerido: boolean;
        Bloqueado: boolean;
        Posicion: number;
        Error: number;
        Validado: boolean;
        Config: string;
        IdServicio: string;
        IdSimulacion: string;
        Comprobante: string;
        Estado: string;
        FormAnterior: string;
        IdAdhesion: number;
        Titulo: string;
        Nup: string;
        Segmento: string;
        Canal: string;
        SubCanal: string;
        PerfilInversor: any;
        Items: any[];
        FechaComprobante: string;
    };

    @IsObject()
    itemsMensajeRespuesta: any[] | undefined;

    @IsBoolean()
    respuestaVacia: boolean | undefined;

    @IsBoolean()
    skipLog: boolean | undefined;
}
