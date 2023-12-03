import { RespostaDto } from './respostaDto';

export interface PerguntaDto {
  titulo: string;
  description: string;
  respostas: RespostaDto[];
}
