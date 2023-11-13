import { RespostaDto } from './respostaDto';

export interface PerguntaDto {
  titulo: string;
  respostas: RespostaDto[];
}
