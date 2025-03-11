
---

### **Dia 4 - Mais Loops e Randomização**

```markdown
# Dia 4 - Mais Loops e Randomização

Hoje, exploramos **loops** mais avançados e como usar **randomização** para criar comportamento dinâmico em nossos programas. Estudamos:

- `for`
- `while`
- `do...while`

Também aprendemos a usar a função `Math.random()` para gerar números aleatórios.

## Objetivos:
- Aperfeiçoar o uso de loops.
- Entender como gerar números aleatórios e utilizá-los.

## Exemplos:
```js
// Loop 'for'
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Gerar um número aleatório entre 0 e 10
let numeroAleatorio = Math.floor(Math.random() * 11);
console.log(numeroAleatorio);
