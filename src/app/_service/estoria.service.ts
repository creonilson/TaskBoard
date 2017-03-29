import { Injectable } from '@angular/core';
import { ESTORIAS } from '../_mocks/estoria.mock';
import { Estoria } from '../_model/estoria';
 
@Injectable()
export class EstoriaService {
 
    getAll() : Estoria [] {
        return ESTORIAS;
    }
    
}