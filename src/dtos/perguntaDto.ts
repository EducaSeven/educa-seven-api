import { RespostaDto } from './respostaDto';

export interface PerguntaDto {
  pergTitle: string;
  pergDescription: string;
  respostas: RespostaDto[];
}
