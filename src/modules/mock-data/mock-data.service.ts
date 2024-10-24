// src/mock-data/mock-data.service.ts
import { Injectable } from '@nestjs/common';
import { MockDataEntity } from './mock-data.entity';

@Injectable()
export class MockDataService {
    getMockData(): MockDataEntity {
        // Asegúrate de que los datos se devuelvan correctamente
        return {
            id: 1,
            estadoRespuesta: "OK",
            respuesta: {
                Tipo: "formulario",
                feriados: null,
                puedeRescatar: null,
                puedeSuscribir: null,
                Id: "frm-confirmacion-1",
                Nombre: "frm-confirmacion",
                Implementa: null,
                Etiqueta: null,
                Requerido: false,
                Bloqueado: true,
                Posicion: 1,
                Error: 0,
                Validado: true,
                Config: "FormularioId:65|SessionId:E7509F7392E891AA62B81D9AC70C7137|IdWizard:7977|Fondo:|MonedaFondo:",
                IdServicio: "ACT",
                IdSimulacion: "16678",
                Comprobante: "10387",
                Estado: "confirmacion",
                FormAnterior: "7978",
                IdAdhesion: 10387,
                Titulo: "Apertura de cuenta títulos",
                Nup: "01576531",
                Segmento: "RTL",
                Canal: "04",
                SubCanal: "0099",
                PerfilInversor: null,
                Items: [],
                FechaComprobante: "23/10/2024 - 14:57"
            },
            itemsMensajeRespuesta: [],
            respuestaVacia: false,
            skipLog: false,
        };
    }
}
