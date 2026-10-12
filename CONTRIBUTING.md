# 🤝 Guía de Contribución — Compiladores Examen

¡Muchas gracias por interesarte en colaborar con el proyecto! 🎉

Este proyecto nació con el fin de ayudarnos mutuamente entre compañeros de la carrera de **Ingeniería en Informática (UCASAL)** a preparar y aprobar los exámenes de **Compiladores**. Cualquier aporte —desde corregir una tilde o una errata en una justificación teórica hasta sumar nuevos ejercicios prácticos de parciales anteriores o mejorar la interfaz— es sumamente valioso para toda la cursada.

---

## 📌 Formas de Colaborar

Podés participar de distintas maneras según tu preferencia:

1. ⚡ **Sin tocar código (desde la misma App):** Si estás estudiando y notás que una pregunta tiene una redacción confusa, un error tipográfico o una respuesta dudosa, hacé clic en el botón **"Sugerir corrección / Colaborar"** ubicado debajo de la tarjeta. La app abrirá un issue en GitHub prellenado con el ID de la pregunta para que solo tengas que comentar lo que viste.
2. 🐛 **Reportar un Issue:** Abrir un issue directamente en [GitHub Issues](https://github.com/azaeldahaka/Compiladores-examen/issues) describiendo la mejora o problema.
3. 💻 **Enviar una Pull Request (PR):** Editar o agregar preguntas en el banco de datos, optimizar componentes de React o incorporar nuevas funcionalidades.

---

## 🛠️ Flujo de Trabajo con Git y GitHub (Paso a Paso)

Si vas a realizar cambios en el código o en el banco de preguntas, seguí este flujo recomendado:

### 1. Fork del Repositorio
Hacé clic en el botón **Fork** arriba a la derecha en [https://github.com/azaeldahaka/Compiladores-examen](https://github.com/azaeldahaka/Compiladores-examen) para crear una copia en tu cuenta de GitHub.

### 2. Clonar tu Fork
```bash
git clone https://github.com/TU-USUARIO/Compiladores-examen.git
cd Compiladores-examen
```

### 3. Crear una Rama Descriptiva
Nunca trabajes directamente sobre la rama `master`. Creá una rama según el tipo de cambio:
* Para una funcionalidad nueva: `git checkout -b feature/nombre-mejora`
* Para corregir una pregunta: `git checkout -b fix/pregunta-L10-PRAC02`
* Para actualizar documentación: `git checkout -b docs/actualizar-readme`

### 4. Instalar Dependencias y Probar Localmente
```bash
npm install
npm run dev
```
Abrí [http://localhost:5173](http://localhost:5173) en tu navegador para ver tus cambios reflejados en tiempo real.

### 5. Validar la Compilación y Tipos
Antes de enviar tus cambios, asegurate de que no haya errores de TypeScript ni fallas de empaquetado:
```bash
npm run build
```
*(Si la compilación arroja algún error, revísalo antes de commitear).*

### 6. Crear Commits Descriptivos
Usa mensajes de commit claros (siguiendo *Conventional Commits* de ser posible):
```bash
git add .
git commit -m "fix(L10): corregir justificación en pregunta L10-PRAC01 sobre recursividad"
```

### 7. Subir los Cambios y Crear la Pull Request
```bash
git push origin feature/nombre-mejora
```
Luego, entra a tu repositorio en GitHub y haz clic en **"Compare & pull request"**. Describe brevemente qué cambiaste y por qué.

---

## 📝 Guía para Agregar o Modificar Preguntas

El banco de preguntas se encuentra en el archivo:
📁 [`src/data/questions.ts`](file:///src/data/questions.ts)

Cada pregunta es un objeto de TypeScript con la siguiente estructura:

```typescript
{
  "id": "L10-PRAC05", // ID único: formato L[Lección]-Q[Número] o L[Lección]-PRAC[Número]
  "lessonId": "L10",  // 'L05' | 'L06' | 'L07' | 'L08' | 'L09' | 'L10' | 'L11'
  "lessonTitle": "Lección 10 — Análisis Sintáctico y Limpieza",
  "topic": "Eliminación de Recursividad por Izquierda",
  "points": 8, // 2 (concepto base), 5 (intermedio), u 8 (ejercicio práctico / traza compleja)
  "questionText": "Dada la gramática $E \\to E + T \\mid T$, elimine la recursividad por izquierda...",
  "options": [
    {
      "id": "A",
      "text": "$E \\to T E'$, $E' \\to + T E' \\mid \\epsilon$",
      "explanation": "Correcto: se identifican $\\alpha = + T$ y $\\beta = T$, aplicando la regla estándar de derivación hacia la derecha.",
      "isCorrect": true
    },
    {
      "id": "B",
      "text": "$E \\to + T E'$, $E' \\to T \\mid \\epsilon$",
      "explanation": "Error: la regla exige que la producción inicial comience con $\\beta$, no con $\\alpha$.",
      "isCorrect": false
    },
    {
      "id": "C",
      "text": "...",
      "explanation": "Distractor: ...",
      "isCorrect": false
    },
    {
      "id": "D",
      "text": "...",
      "explanation": "Distractor: ...",
      "isCorrect": false
    }
  ],
  "theorySummary": "Regla de oro: $A \\to A \\alpha \\mid \\beta$ se transforma en $A \\to \\beta A'$ y $A' \\to \\alpha A' \\mid \\epsilon$.",
  "sourceCatedra": "Diapositiva 11: Transformaciones Gramaticales (Cardoso/Tolaba)",
  "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 4.3.3; Louden Cap. 4.3",
  "trapAnalysis": "El error más frecuente es invertir el rol de alfa y beta o olvidar el símbolo epsilon en la nueva variable."
}
```

### 📐 Reglas Fundamentales para Fórmulas Matemáticas (KaTeX)
La app cuenta con un motor **KaTeX** integrado. Para que las fórmulas se vean perfectas y no rompan el parser:

1. **Fórmulas en línea:** Rodéalas con un solo signo de dólar: `$E \to E + T$`.
2. **Fórmulas en bloque centrado:** Rodéalas con doble signo de dólar: `$$S \to a A \mid \epsilon$$`.
3. **Escapado de barras invertidas en strings:** Recordá que en archivos `.ts`, las barras invertidas de LaTeX deben duplicarse:
   * Escribir `\\to` en lugar de `\to`
   * Escribir `\\epsilon` en lugar de `\epsilon`
   * Escribir `\\text{PRIMERO}` en lugar de `\text{PRIMERO}`
   * Escribir `\\{ a, b \\}` para llaves de conjuntos.
4. **Símbolo de Fin de Entrada ($\$):** Para escribir el símbolo de fin de cadena en una gramática o tabla de análisis sin que interfiera con los delimitadores de fórmula, escribí `\\$`:
   * Ejemplo: `$w = a c \\$$` o `$\\text{SIGUIENTE}(E) = \\{ ), \\$ \\}$`.
5. **Cadenas de texto / lexemas:** En lugar de comillas escapadas dentro de fórmulas, utiliza comillas simples o formato código markdown fuera de matemáticas:
   * Preferir: `Para $w = \\text{'bb'}$...` o ``el lexema `"while"` ``.

### 💡 Buenas Prácticas Pedagógicas
* **Explicar todos los distractores:** En las opciones con `isCorrect: false`, no escribas únicamente *"Incorrecto"*. Explicá **por qué** es un distractor, qué concepto erróneo seduce al estudiante o por qué viola una regla formal de la cátedra.
* **Citar las fuentes:** Indicar siempre la diapositiva de los profesores (Cardoso / Tolaba) o el capítulo del libro (Dragon Book, Louden o Linz) para que el compañero pueda contrastar con su apunte.

---

## 🎨 Guía de Estilo de Código

* **Componentes:** Funcionales con TypeScript (`React.FC<Props>`) ubicados en `src/components/`.
* **Estilos:** Clases de utilidad de Tailwind CSS v4.
* **Iconos:** Importar desde `lucide-react`.
* **Formato y Linter:** Podés verificar el código con:
  ```bash
  npm run lint
  ```

---

## 💛 Código de Conducta

* Tratémonos con amabilidad y respeto mutuo.
* Todo aporte suma: nadie nace sabiendo compilar analizadores sintácticos ni construyendo tablas LL(1). Si algo no se entiende o tenés dudas de cómo plantear una pregunta, preguntá en los issues o en el grupo de estudio de la facultad.

¡Muchos éxitos en el estudio y gracias por hacer crecer este simulador! 🚀
