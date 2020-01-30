import { Departamento } from './departamento';

export interface Produto {
  nome: string;
  departamentos: Departamento[];
  estoque: number;
  preco: number;
  _id ?: string;
}
