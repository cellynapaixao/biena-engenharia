# Configuração de Deploy FTP no GitHub Actions

## Segredos Necessários

Para que o workflow de deploy funcione, você precisa configurar os seguintes segredos no repositório GitHub:

### 1. FTP_SERVER
- **Valor**: O endereço do servidor FTP da HostGator (ex: `ftp.seudominio.com` ou `ftp.seudominio.com.br`)
- **Como configurar**: 
  - Vá para Settings → Secrets and variables → Actions
  - Clique em "New repository secret"
  - Nome: `FTP_SERVER`
  - Valor: Seu endereço FTP

### 2. FTP_USERNAME
- **Valor**: Seu nome de usuário FTP da HostGator
- **Como configurar**: 
  - Vá para Settings → Secrets and variables → Actions
  - Clique em "New repository secret"
  - Nome: `FTP_USERNAME`
  - Valor: Seu usuário FTP

### 3. FTP_PASSWORD
- **Valor**: Sua senha FTP da HostGator
- **Como configurar**: 
  - Vá para Settings → Secrets and variables → Actions
  - Clique em "New repository secret"
  - Nome: `FTP_PASSWORD`
  - Valor: Sua senha FTP

## Encontrando suas Credenciais FTP na HostGator

1. Faça login no painel de controle da HostGator
2. Procure por "FTP" ou "Gerenciador de Arquivos"
3. Suas credenciais FTP devem estar listadas lá
4. Se não encontrar, você pode criar uma nova conta FTP

## Como Funciona o Deploy

1. **Checkout**: O código é baixado do repositório
2. **Setup Node.js**: Node.js versão 22 é instalado
3. **Install dependencies**: As dependências do projeto são instaladas com `npm install`
4. **Build**: O projeto Next.js é compilado com `npm run build`
   - Isso gera os arquivos estáticos no diretório `out/`
5. **Deploy**: Os arquivos compilados são enviados para `/public_html/` via FTP

## Estrutura de Diretórios Após Build

Após a compilação, o diretório `out/` conterá:

```
out/
├── index.html
├── _next/
│   ├── static/
│   ├── data/
│   └── ...
├── public/
└── ...
```

## Troubleshooting

### Erro: "Input required and not supplied: server"
- Significa que o segredo `FTP_SERVER` não está configurado
- Verifique se todos os três segredos foram criados corretamente

### Erro: "530 User cannot log in"
- Suas credenciais FTP estão incorretas
- Verifique o nome de usuário e senha

### Erro: "550 Permission denied"
- Você não tem permissão para escrever em `/public_html/`
- Verifique as permissões da sua conta FTP na HostGator

### Arquivos não aparecem no site
- Verifique se o site está apontando para `/public_html/`
- Limpe o cache do navegador (Ctrl+Shift+Delete)
- Verifique se o arquivo `index.html` foi enviado corretamente

## Testando o Deploy

1. Faça um commit e push para a branch `main`
2. Vá para a aba "Actions" no GitHub
3. Verifique se o workflow está rodando
4. Aguarde a conclusão
5. Verifique seu site para confirmar que as mudanças foram aplicadas

## Configuração do Next.js

O projeto está configurado com:
- `output: 'export'` - Gera arquivos estáticos
- `unoptimized: true` para imagens - Compatível com hospedagem estática
- `basePath` e `assetPrefix` vazios para ambiente de produção no `/public_html/`

Se você quiser usar um subdiretório (ex: `/v0-biena-engenharia/`), você precisará:
1. Modificar o `next.config.mjs`
2. Alterar o `server-dir` no workflow para o subdiretório desejado
