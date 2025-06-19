Atualizando meu portfólio de automação!
🚀 Em breve, novos projetos:
- 🔍 **Projeto em Cypress**:  
## Testes de Checkout com Cypress
Este projeto demonstra testes E2E para um fluxo de compra.
### Como executar:
```bash
npm install
npm run test
```
### Estrutura:
- `[cypress/e2e/checkout.cy.js](https://github.com/Calila-prog/QA-Portfolio/tree/feature/cypress-tests/cypress/e2e)`: Teste completo do fluxo

- 🚀 **Scripts em Robot Framework**:   
- 📊 **Postman Collections**:  
- 🌱 **Ruby/JMeter**:
# 🚀 Teste de Carga e Análise de Gargalos com JMeter

Teste avançado de performance para identificar limites de sistema e otimizar APIs.

## 📊 Métricas-Chave
| Métrica               | Valor Base | Meta Otimizada |
|-----------------------|------------|----------------|
| Latência Média        | 1968ms     | <500ms         |
| Throughput            | 15 reqs/s  | 50+ reqs/s     |
| Taxa de Erros         | 0%         | ≤1%            |

🚦 Como Executar
Clone o repositório

Abra o arquivo .jmx no JMeter 5.4+

Altere variáveis no User Defined Variables

Execute com Ctrl + R 

## 🛠️ Configuração
```xml
<jmeter>
  <ThreadGroup>
    <num_threads>100</num_threads>      👉 100 usuários virtuais simulados
    <ramp_time>30</ramp_time>           👉 30 segundos para adicionar todos os usuários gradualmente
  </ThreadGroup>
  
  <HTTPRequest>
    <protocol>https</protocol>          👉 Usa HTTPS (criptografia)
    <domain>httpbin.org</domain>        👉 Site/alvo do teste
    <path>/get</path>                   👉 Endpoint específico da API
  </HTTPRequest>
</jmeter>
