document.addEventListener('DOMContentLoaded', () => {
    
    const htmlTags = [
        { tag: '!DOCTYPE', descricao: 'Declaração obrigatória que define o tipo de documento.', tipo: 'Estrutural' },
        { tag: 'html', descricao: 'O elemento raiz que representa todo o documento HTML.', tipo: 'Estrutural' },
        { tag: 'head', descricao: 'Contém metadados sobre o documento.', tipo: 'Metadados' },
        { tag: 'body', descricao: 'Contém todo o conteúdo visível (e principal).', tipo: 'Estrutural' },
        { tag: 'title', descricao: 'Define o título que aparece na aba do navegador.', tipo: 'Metadados' },
        { tag: 'base', descricao: 'Especifica o URL base para todos os URLs relativos.', tipo: 'Metadados' },
        { tag: 'link', descricao: 'Cria links entre o documento e um recurso externo (mais comum para CSS).', tipo: 'Metadados' },
        { tag: 'meta', descricao: 'Fornece metadados sobre o documento (charset, viewport, description).', tipo: 'Metadados' },
        { tag: 'style', descricao: 'Inclui informações de estilo CSS no documento.', tipo: 'Metadados' },

        { tag: 'script', descricao: 'Usado para incorporar ou referenciar um script executável (JavaScript).', tipo: 'Script' },
        { tag: 'noscript', descricao: 'Define conteúdo alternativo se o cliente não suportar scripts.', tipo: 'Script' },
        { tag: 'template', descricao: 'Contém conteúdo HTML que não é renderizado, mas pode ser instanciado via JavaScript.', tipo: 'Script' },

        { tag: 'h1', descricao: 'Título de nível 1.', tipo: 'Conteúdo' },
        { tag: 'h2', descricao: 'Título de nível 2.', tipo: 'Conteúdo' },
        { tag: 'h3', descricao: 'Título de nível 3.', tipo: 'Conteúdo' },
        { tag: 'h4', descricao: 'Título de nível 4.', tipo: 'Conteúdo' },
        { tag: 'h5', descricao: 'Título de nível 5.', tipo: 'Conteúdo' },
        { tag: 'h6', descricao: 'Título de nível 6.', tipo: 'Conteúdo' },
        { tag: 'p', descricao: 'Representa um parágrafo.', tipo: 'Conteúdo' },
        { tag: 'hr', descricao: 'Quebra temática (linha horizontal).', tipo: 'Conteúdo' },
        { tag: 'pre', descricao: 'Texto pré-formatado.', tipo: 'Conteúdo' },
        { tag: 'blockquote', descricao: 'Citação estendida.', tipo: 'Conteúdo' },
        { tag: 'div', descricao: 'Contêiner genérico para fluxo de conteúdo.', tipo: 'Estrutural' },

        { tag: 'ol', descricao: 'Lista ordenada de itens.', tipo: 'Lista' },
        { tag: 'ul', descricao: 'Lista não ordenada de itens.', tipo: 'Lista' },
        { tag: 'li', descricao: 'Item de uma lista.', tipo: 'Lista' },
        { tag: 'dl', descricao: 'Lista de descrição (termo/descrição).', tipo: 'Lista' },
        { tag: 'dt', descricao: 'Define o termo em uma lista de descrição.', tipo: 'Lista' },
        { tag: 'dd', descricao: 'Define a descrição/definição do termo.', tipo: 'Lista' },
        { tag: 'menu', descricao: 'Lista de itens de menu.', tipo: 'Lista' },

        { tag: 'main', descricao: 'Conteúdo principal do documento.', tipo: 'Semântico' },
        { tag: 'header', descricao: 'Conteúdo introdutório ou navegacional.', tipo: 'Semântico' },
        { tag: 'nav', descricao: 'Contém links de navegação principais.', tipo: 'Semântico' },
        { tag: 'article', descricao: 'Item de conteúdo independente (blog post).', tipo: 'Semântico' },
        { tag: 'section', descricao: 'Grupo temático de conteúdo.', tipo: 'Semântico' },
        { tag: 'aside', descricao: 'Conteúdo tangencialmente relacionado (barra lateral).', tipo: 'Semântico' },
        { tag: 'footer', descricao: 'Informações de rodapé.', tipo: 'Semântico' },
        { tag: 'address', descricao: 'Fornece informações de contato.', tipo: 'Semântico' },

        { tag: 'span', descricao: 'Contêiner genérico em linha.', tipo: 'Estrutural' },
        { tag: 'em', descricao: 'Enfatiza o conteúdo (itálico).', tipo: 'Texto' },
        { tag: 'strong', descricao: 'Conteúdo importante/urgente (negrito).', tipo: 'Texto' },
        { tag: 'small', descricao: 'Comentários laterais ou letras pequenas (copyright).', tipo: 'Texto' },
        { tag: 'cite', descricao: 'Referência a uma obra criativa.', tipo: 'Texto' },
        { tag: 'code', descricao: 'Pequeno trecho de código de programação.', tipo: 'Texto' },
        { tag: 'time', descricao: 'Representa um horário ou data.', tipo: 'Texto' },
        { tag: 'mark', descricao: 'Texto marcado ou destacado.', tipo: 'Texto' },
        { tag: 'br', descricao: 'Cria uma quebra de linha.', tipo: 'Texto' },
        { tag: 'wbr', descricao: 'Sugere uma quebra de linha opcional (em URLs longos).', tipo: 'Texto' },
        { tag: 'data', descricao: 'Liga o conteúdo a uma versão legível por máquina.', tipo: 'Dados' },
        { tag: 'abbr', descricao: 'Representa uma abreviação ou um acrônimo.', tipo: 'Texto' },
        { tag: 'bdo', descricao: 'Substitui a direcionalidade atual do texto.', tipo: 'Texto' },
        { tag: 'var', descricao: 'Representa uma variável em um contexto de programação.', tipo: 'Texto' },
        { tag: 'samp', descricao: 'Amostras de saída de um programa de computador.', tipo: 'Texto' },
        { tag: 'kbd', descricao: 'Entrada do usuário via teclado ou outro dispositivo.', tipo: 'Texto' },
        { tag: 'dfn', descricao: 'Marca a instância definidora de um termo.', tipo: 'Texto' },
        { tag: 'sub', descricao: 'Define o texto subscrito (abaixo da linha).', tipo: 'Texto' },
        { tag: 'sup', descricao: 'Define o texto sobrescrito (acima da linha).', tipo: 'Texto' },
        { tag: 'q', descricao: 'Citação curta em linha.', tipo: 'Texto' },

        { tag: 'form', descricao: 'Seção do documento com controles interativos.', tipo: 'Formulário' },
        { tag: 'label', descricao: 'Define a legenda de um item de formulário.', tipo: 'Formulário' },
        { tag: 'input', descricao: 'Cria controles interativos (text, radio, checkbox, etc.).', tipo: 'Formulário' },
        { tag: 'textarea', descricao: 'Controle de edição de texto multi-linha.', tipo: 'Formulário' },
        { tag: 'button', descricao: 'Um botão clicável.', tipo: 'Interativo' },
        { tag: 'select', descricao: 'Menu de opções (dropdown).', tipo: 'Formulário' },
        { tag: 'option', descricao: 'Item dentro de <select> ou <datalist>.', tipo: 'Formulário' },
        { tag: 'optgroup', descricao: 'Cria um grupo de opções dentro de um menu suspenso.', tipo: 'Formulário' },
        { tag: 'fieldset', descricao: 'Agrupa elementos relacionados em um formulário.', tipo: 'Formulário' },
        { tag: 'legend', descricao: 'Define um título para o conteúdo de um <fieldset>.', tipo: 'Formulário' },
        { tag: 'datalist', descricao: 'Lista de opções predefinidas para um controle <input>.', tipo: 'Formulário' },
        { tag: 'output', descricao: 'Exibe o resultado de um cálculo ou ação do usuário.', tipo: 'Formulário' },
        { tag: 'progress', descricao: 'Exibe o progresso de uma tarefa.', tipo: 'Formulário' },
        { tag: 'meter', descricao: 'Mede dados dentro de um intervalo predefinido.', tipo: 'Formulário' },
        { tag: 'details', descricao: 'Widget de divulgação para informações adicionais (colapsável).', tipo: 'Semântico' },
        { tag: 'summary', descricao: 'Cabeçalho visível para um elemento <details>.', tipo: 'Semântico' },
        { tag: 'dialog', descricao: 'Representa uma caixa de diálogo ou janela interativa.', tipo: 'Interativo' },

        { tag: 'table', descricao: 'Representa dados em grade (linhas e colunas).', tipo: 'Tabela' },
        { tag: 'caption', descricao: 'Título de uma tabela.', tipo: 'Tabela' },
        { tag: 'thead', descricao: 'Cabeçalho da tabela.', tipo: 'Tabela' },
        { tag: 'tbody', descricao: 'Corpo da tabela (dados).', tipo: 'Tabela' },
        { tag: 'tfoot', descricao: 'Rodapé da tabela (para totais ou resumos).', tipo: 'Tabela' },
        { tag: 'tr', descricao: 'Define uma linha de células em uma tabela.', tipo: 'Tabela' },
        { tag: 'th', descricao: 'Define uma célula como cabeçalho.', tipo: 'Tabela' },
        { tag: 'td', descricao: 'Define uma célula de dados padrão.', tipo: 'Tabela' },
        { tag: 'colgroup', descricao: 'Especifica um grupo de colunas para formatação.', tipo: 'Tabela' },
        { tag: 'col', descricao: 'Define as propriedades comuns para uma ou mais colunas.', tipo: 'Tabela' },

        { tag: 'a', descricao: 'Cria um hiperlink (âncora).', tipo: 'Interativo' },
        { tag: 'img', descricao: 'Incorpora uma imagem no documento.', tipo: 'Mídia' },
        { tag: 'audio', descricao: 'Incorpora conteúdo de áudio.', tipo: 'Mídia' },
        { tag: 'video', descricao: 'Incorpora um reprodutor de mídia de vídeo.', tipo: 'Mídia' },
        { tag: 'source', descricao: 'Especifica várias fontes de mídia para <picture>, <audio> ou <video>.', tipo: 'Mídia' },
        { tag: 'picture', descricao: 'Contêiner para imagens responsivas (art direction).', tipo: 'Mídia' },
        { tag: 'iframe', descricao: 'Incorpora outro documento HTML no documento atual (janela embutida).', tipo: 'Embedding' },
        { tag: 'embed', descricao: 'Incorpora conteúdo externo de qualquer tipo (PDFs, plugins).', tipo: 'Embedding' },
        { tag: 'object', descricao: 'Usado para incorporar mídias externas.', tipo: 'Embedding' },
        { tag: 'param', descricao: 'Define parâmetros para um objeto incorporado por <object>.', tipo: 'Embedding' },
        { tag: 'canvas', descricao: 'Usado para desenhar gráficos e animações via JavaScript.', tipo: 'Gráfico' },
        { tag: 'svg', descricao: 'Incorpora um gráfico vetorial escalável.', tipo: 'Gráfico' },
        { tag: 'track', descricao: 'Especifica trilhas de texto cronometradas (legendas) para <audio> ou <video>.', tipo: 'Mídia' },
        { tag: 'map', descricao: 'Define um mapa de imagem (áreas clicáveis).', tipo: 'Mídia' },
        { tag: 'area', descricao: 'Define uma área dentro de um mapa de imagem (usado dentro de <map>).', tipo: 'Mídia' },

        { tag: 'acronym', descricao: 'Define um acrônimo. Obsoleta, use <abbr>.', tipo: 'Obsoleta' },
        { tag: 'applet', descricao: 'Usado para incorporar um applet Java. Obsoleta.', tipo: 'Obsoleta' },
        { tag: 'b', descricao: 'Aplica um offset textual estilístico (negrito). Desencorajada, use <strong> ou CSS.', tipo: 'Desencorajada' },
        { tag: 'big', descricao: 'Aumenta o tamanho da fonte. Obsoleta, use CSS.', tipo: 'Obsoleta' },
        { tag: 'center', descricao: 'Centraliza o conteúdo. Obsoleta, use CSS.', tipo: 'Obsoleta' },
        { tag: 'dir', descricao: 'Lista de diretório. Obsoleta, use <ul>.', tipo: 'Obsoleta' },
        { tag: 'font', descricao: 'Especifica a fonte, tamanho e cor do texto. Obsoleta, use CSS.', tipo: 'Obsoleta' },
        { tag: 'frame', descricao: 'Define uma sub-janela específica de um frameset. Obsoleta.', tipo: 'Obsoleta' },
        { tag: 'frameset', descricao: 'Define como as frames serão organizadas em uma página. Obsoleta.', tipo: 'Obsoleta' },
        { tag: 'noframes', descricao: 'Conteúdo alternativo para navegadores que não suportam frames. Obsoleta.', tipo: 'Obsoleta' },
        { tag: 'i', descricao: 'Aplica um offset textual estilístico para voz alternativa (itálico). Desencorajada, use <em> ou CSS.', tipo: 'Desencorajada' },
        { tag: 'strike', descricao: 'Renderiza o texto riscado. Obsoleta, use <del> ou <s>.', tipo: 'Obsoleta' },
        { tag: 'tt', descricao: 'Texto monoespaçado (teletype). Obsoleta, use <code> ou CSS.', tipo: 'Obsoleta' },
        { tag: 'u', descricao: 'Sublinha o texto. Desencorajada, use CSS.', tipo: 'Desencorajada' },
        { tag: 's', descricao: 'Representa conteúdo que não é mais preciso ou relevante (riscado).', tipo: 'Semântico/Desencorajada' },
        { tag: 'del', descricao: 'Representa um conteúdo que foi excluído do documento.', tipo: 'Semântico' },
        { tag: 'ins', descricao: 'Representa um conteúdo que foi inserido no documento.', tipo: 'Semântico' },
        { tag: 'menuitem', descricao: 'Define um comando de menu (contextual). Obsoleta.', tipo: 'Obsoleta' },
        { tag: 'bgsound', descricao: 'Define um som de fundo. Obsoleta (IE-specific).', tipo: 'Obsoleta' },
        { tag: 'keygen', descricao: 'Permite a geração de pares de chaves. Obsoleta.', tipo: 'Obsoleta' },
        { tag: 'rp', descricao: 'Define o que deve ser mostrado por navegadores que não suportam anotações rubi. (Usada com <rt> e <ruby>).', tipo: 'Texto' },
        { tag: 'rt', descricao: 'Define a explicação ou pronúncia de caracteres (anotação rubi).', tipo: 'Texto' },
        { tag: 'ruby', descricao: 'Representa anotações de rubi (para caracteres do Leste Asiático).', tipo: 'Texto' },
        { tag: 'slot', descricao: 'Placeholder dentro de um shadow tree DOM. (Para Web Components).', tipo: 'Web Component' },
        { tag: 'style', descricao: 'Permite estilo de folha de estilo em cascata (CSS) em linha.', tipo: 'Metadados' }
    ];

    const tagsContainer = document.getElementById('tags-container');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const searchInput = document.getElementById('tag-search'); 

    function renderTags(tagsToRender) {
        tagsContainer.innerHTML = '';
        
        if (tagsToRender.length === 0) {
             tagsContainer.innerHTML = '<p style="text-align:center; padding: 50px;">Nenhuma tag encontrada com este termo.</p>';
             return;
        }

        tagsToRender.forEach(tag => {
            const card = document.createElement('article');
            card.classList.add('tag-card');

            const tagCode = tag.tag === '!DOCTYPE' ? `&lt;${tag.tag}&gt;` : `&lt;${tag.tag}&gt;`;

            card.innerHTML = `
                <h2 class="tag-name"><code>${tagCode}</code></h2>
                <p class="tag-description">${tag.descricao}</p>
                <p class="tag-tipo">Tipo: ${tag.tipo}</p>
            `;
            tagsContainer.appendChild(card);
        });
    }

    function filterTags() {
        const searchTerm = searchInput.value.toLowerCase();
        
        const filteredTags = htmlTags.filter(tag => {
            const tagName = tag.tag.toLowerCase();
            const tagDescription = tag.descricao.toLowerCase();
            const tagTipo = tag.tipo.toLowerCase();
            
            return tagName.includes(searchTerm) || 
                   tagDescription.includes(searchTerm) ||
                   tagTipo.includes(searchTerm);
        });

        renderTags(filteredTags);
    }

    function applyTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
            themeToggle.textContent = '🌞'; 
        } else {
            body.classList.remove('dark-mode');
            themeToggle.textContent = '🌙'; 
        }
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeToggle.textContent = '🌞';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.textContent = '🌙';
        }
    });

    applyTheme();
    renderTags(htmlTags);

    searchInput.addEventListener('input', filterTags); 
});