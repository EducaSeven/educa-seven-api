import { RespostaDto } from './respostaDto';

export interface PerguntaDto {
  pergTitle: string;
  perDescription: string;
  respostas: RespostaDto[];
}
