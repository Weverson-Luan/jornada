/* eslint-disable @typescript-eslint/ban-ts-comment */
import { type theme } from '../../../styles/theme/theme';

export interface TextProps // @ts-expect-error
  extends TypographyProps<typeof theme>,
    // @ts-expect-error
    ColorProps<typeof theme> {
  text?: string;
  fontFamily?: keyof typeof theme.fonts;
  color?: string;
  fontSize?: keyof typeof theme.fontSizes | number;

  /**
   * A propriedade CSS define a altura de uma caixa de linha. É comumente usado para definir a distância entre linhas de texto. Em elementos de nível de bloco, especifica a altura mínima das caixas de linha dentro do elemento. Em elementos embutidos não substituídos , especifica a altura usada para calcular a altura da caixa de linha.line-height
   */
  lineHeight?: number | string;

  /**
   * A propriedade CSS define o comportamento do espaçamento horizontal entre os caracteres do texto. Este valor é adicionado ao espaçamento natural entre os caracteres durante a renderização do texto. Valores positivos de fazem com que os personagens se afastem ainda mais, enquanto valores negativos de aproximam os personagens.letter-spacing letter-spacingletter-spacing
   */
  letterSpacing?: number;

  /**
   * A propriedade margin do CSS define a área de margem nos quatro lados do elemento. É uma abreviação que define todas as margens individuais de uma só vez: margin-top, margin-right (en-US), margin-bottom, e margin-left (en-US).
   */
  margin?: number;

  /**
   * A propriedade CSS define a área de margem no lado esquerdo de um elemento. Um valor positivo o coloca mais distante de seus vizinhos, enquanto um valor negativo o coloca mais próximo.margin-left
   */
  marginLeft?: number;

  /**
   * A propriedade CSS define a área de margem no lado direito de um elemento. Um valor positivo o coloca mais distante de seus vizinhos, enquanto um valor negativo o coloca mais próximo.margin-right
   */
  marginRight?: number;

  /**
   * A propriedade CSS margin-top de um elemento indica o espaço acima do elemento. Valores negativos são aceitos.
   */
  marginTop?: number;

  /**
   * A propriedade CSS margin-bottom define a margin area na parte inferior de um elemento. Um valor positivo coloca o valor mais longe de outros elementos vizinhos, enquanto um valor negativo, aproxima.
   */
  marginBottom?: number;

  /**
   * A propriedade padding define uma a distância entre o conteúdo de um elemento e suas bordas. É um atalho que evita definir uma distância para cada lado separadamente (padding-top, padding-right, padding-bottom, padding-left).
   */
  padding?: number;

  /**
   * A propriedade CSS padding-left é um elemento que define o espaço de preenchimento obrigatório no lado esquerdo de um elemento. padding area é o espaço entre o conteúdo do elemento e a borda. Um valor negativo não é permitido.
   */
  paddingLeft?: number;

  /**
   * A propriedade CSS define a largura da área de preenchimento à direita de um elemento.padding-right
   */
  paddingRight?: number;

  /**
   * A propriedade CSS define a altura da área de preenchimento na parte superior de um elemento.padding-top
   */
  paddingTop?: number;

  /**
   * A propriedade CSS define a altura da área de preenchimento na parte inferior de um elemento.padding-bottom
   */
  paddingBottom?: number;
}
