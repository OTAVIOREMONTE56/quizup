# QuizUp — 💘 Qual é o seu jeito de amar?

Site estático gratuito, sem cadastro, pagamentos, coleta de respostas ou dependências de build. Abra `index.html` para uma prévia local. O compartilhamento nativo e a área de transferência funcionam melhor em HTTPS (GitHub Pages).

## Publicar no GitHub Pages

1. Entre em github.com e crie um repositório público chamado `quizup`.
2. Em **Add file → Upload files**, envie `index.html`, `styles.css`, `config.js`, `app.js` e `.nojekyll` para a raiz. Confirme em **Commit changes**. Não envie pastas que contenham estes arquivos: o index precisa estar na raiz.
3. Acesse **Settings → Pages → Build and deployment**.
4. Em **Source**, escolha **Deploy from a branch**. Selecione **main**, pasta **/(root)** e clique **Save**.
5. Aguarde o GitHub concluir a publicação. O endereço aparecerá em Pages, geralmente `https://SEU-USUARIO.github.io/quizup/`. Esse é o link para a bio do TikTok e do Instagram.

Não há um link público real antes de publicar em uma conta GitHub. O site também funciona em subpastas; todos os arquivos são relativos. Para atualizar, substitua os arquivos e faça um novo commit.

## Configuração e pontuação

- `config.js`: título, identidade, cores, perguntas, pesos e os quatro resultados. As dez perguntas têm quatro alternativas. Cada escolha soma 3 pontos ao perfil correspondente; todas têm o mesmo peso.
- `app.js`: navegação, cálculo, animação de 1,5 segundo, resultado, URLs e cartão PNG. A seleção só avança após Continuar; voltar preserva respostas.
- `styles.css`: layout, tipografia, decoração e animações; respeita redução de movimento. As fontes Google têm alternativas locais.
- Empates: entre os perfis com maior total, compare os pesos das respostas da última para a primeira. Ganha aquele favorecido pela resposta mais recente. Se uma configuração futura mantiver empate após todas as comparações, vence a ordem de perfis em `config.js`.
- URLs como `#resultado=romantico` abrem um **perfil compartilhado**, claramente identificado, e convidam a fazer o quiz. Não transportam nem comprovam respostas.
- O botão de resultado usa o menu nativo quando disponível. Também revela copiar link e compartilhar/baixar PNG. Sem suporte à API de arquivos, baixa o cartão. Cancelar o menu nativo não força outra ação.
- Desafiar envia o link do início. Instagram/TikTok podem exigir salvar a imagem e publicá-la manualmente; páginas web não conseguem postar automaticamente nesses aplicativos.

## Verificar

Execute `node tests.cjs` se tiver Node.js. Os testes percorrem as 1.048.576 combinações de respostas, verificam totais e desempates, além dos quatro perfis puros e formato das perguntas. Sem Node, abra o site e siga este roteiro:

1. Responda às dez perguntas, volte e altere respostas; confirme que a seleção permanece e que Continuar exige uma alternativa.
2. Escolha sempre a primeira, depois segunda, terceira e quarta alternativas: deve obter, respectivamente, Romântico Intenso, Amor Equilibrado, Paixão Impulsiva e Coração Independente.
3. Faça cinco primeiras alternativas e cinco segundas: deve obter Amor Equilibrado, pois a resposta mais recente desempata.
4. Confira a animação, descrição, três forças, dois desafios e mensagem. Use Refazer para limpar as respostas.
5. Copie o link do resultado e abra em outra aba; confirme a identificação de perfil compartilhado. Teste o desafio (sem resultado na URL), o PNG e o menu nativo em um celular HTTPS.
6. Verifique celular estreito, teclado e preferência de movimento reduzido.

As respostas ficam apenas na memória da aba e são apagadas ao recarregar. Nenhum perfil representa avaliação psicológica científica.
