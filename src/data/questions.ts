import type { Question } from '../types/question';

export const QUESTIONS_BANK: Question[] = [
  {
    "id": "L05-Q01",
    "lessonId": "L05",
    "lessonTitle": "Lección 05 — Gramáticas Regulares",
    "topic": "Gramáticas Lineales y Lenguajes Regulares",
    "points": 2,
    "questionText": "Un lenguaje es regular si y sólo si:",
    "options": [
      {
        "id": "A",
        "text": "es finito.",
        "explanation": "Existen infinitos lenguajes regulares que son infinitos (por ejemplo, $a^*$ o $(a|b)^*$). La finitud no es una condición necesaria ni suficiente.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "puede describirse con cualquier gramática independiente del contexto.",
        "explanation": "Las gramáticas independientes del contexto definen el Tipo 2 de Chomsky, una clase estrictamente más amplia que los lenguajes regulares ($\\mathcal{L}_3 \\subsetneq \\mathcal{L}_2$).",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "existe un autómata finito que lo reconoce (o una gramática regular que lo genera).",
        "explanation": "Por el Teorema de Kleene y los teoremas de equivalencia de Chomsky, la familia de lenguajes reconocidos por Autómatas Finitos coincide biyectivamente con los generados por Gramáticas Regulares y representados por Expresiones Regulares.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "todas sus cadenas tienen la misma longitud.",
        "explanation": "La longitud de las cadenas en un lenguaje regular puede ser arbitraria y variable.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Por el Teorema de Kleene y los teoremas de equivalencia de Chomsky, la familia de lenguajes reconocidos por Autómatas Finitos coincide biyectivamente con los generados por Gramáticas Regulares y representados por Expresiones Regulares.",
    "sourceCatedra": "Diapositiva 6: Gramáticas Regulares (Cardoso/Tolaba)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.3; Louden Cap. 2",
    "trapAnalysis": "Cuidado con los distractores que afirman propiedades fuera de la clase de gramática o límites de memoria."
  },
  {
    "id": "L05-Q02",
    "lessonId": "L05",
    "lessonTitle": "Lección 05 — Gramáticas Regulares",
    "topic": "Gramáticas Lineales y Lenguajes Regulares",
    "points": 5,
    "questionText": "Respecto a las propiedades de clausura de los lenguajes generados por gramáticas regulares, es correcto afirmar que:",
    "options": [
      {
        "id": "A",
        "text": "son cerrados bajo unión, pero no bajo intersección.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "son cerrados tanto bajo unión como bajo intersección y complemento.",
        "explanation": "Los lenguajes regulares forman un álgebra booleana cerrada completa: si $L_1$ y $L_2$ son regulares, entonces $L_1 \\cup L_2$, $L_1 \\cap L_2$, $\\overline{L_1}$, $L_1 \\cdot L_2$ y $L_1^*$ son todos rigurosamente regulares.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "son cerrados bajo intersección, pero no bajo unión ni concatenación.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "no son cerrados bajo ninguna operación booleana.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Los lenguajes regulares forman un álgebra booleana cerrada completa: si $L_1$ y $L_2$ son regulares, entonces $L_1 \\cup L_2$, $L_1 \\cap L_2$, $\\overline{L_1}$, $L_1 \\cdot L_2$ y $L_1^*$ son todos rigurosamente regulares.",
    "sourceCatedra": "Diapositiva 6: Gramáticas Regulares (Cardoso/Tolaba)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.3; Louden Cap. 2",
    "trapAnalysis": "Cuidado con los distractores que afirman propiedades fuera de la clase de gramática o límites de memoria."
  },
  {
    "id": "L05-Q03",
    "lessonId": "L05",
    "lessonTitle": "Lección 05 — Gramáticas Regulares",
    "topic": "Razonamiento de Estados y Límites",
    "points": 8,
    "questionText": "Al Ingeniero Facundo le encargaron diseñar un analizador que valide cadenas con una cantidad balanceada de paréntesis del tipo `\"((...))\"` ($L = \\{ a^n b^n \\mid n \\ge 1 \\}$). Luego de analizar el problema, determinó que es imposible describirlo mediante una gramática regular porque:",
    "options": [
      {
        "id": "A",
        "text": "ninguna expresión regular puede escribir símbolos terminales como paréntesis.",
        "explanation": "Los símbolos terminales pueden ser cualquier carácter del alfabeto.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "un autómata finito equivalente tendría que recordar un $n$ arbitrariamente grande para balancear las cantidades, y solo dispone de una cantidad finita de estados.",
        "explanation": "Es el argumento central de la teoría de la computación (formalizado por el Lema de Bombeo). Como $n$ no tiene cota superior fija, un autómata con un número fijo $k$ de estados sufrirá colisiones por el principio del palomar y no podrá distinguir $a^k$ de $a^{k+m}$, perdiendo la cuenta. Requiere memoria de pila (GLC / Tipo 2).",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "el lenguaje es infinito, y los autómatas finitos solo pueden reconocer lenguajes finitos.",
        "explanation": "Un lenguaje como $a^* b^*$ es infinito y es perfectamente regular.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "el alfabeto contiene dos símbolos y las gramáticas regulares solo admiten alfabetos unarios.",
        "explanation": "Las gramáticas regulares operan sobre cualquier alfabeto finito de cualquier cardinalidad.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Es el argumento central de la teoría de la computación (formalizado por el Lema de Bombeo). Como $n$ no tiene cota superior fija, un autómata con un número fijo $k$ de estados sufrirá colisiones por el principio del palomar y no podrá distinguir $a^k$ de $a^{k+m}$, perdiendo la cuenta. Requiere memoria de pila (GLC / Tipo 2).",
    "sourceCatedra": "Diapositiva 6: Gramáticas Regulares (Cardoso/Tolaba)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.3; Louden Cap. 2",
    "trapAnalysis": "Cuidado con los distractores que afirman propiedades fuera de la clase de gramática o límites de memoria."
  },
  {
    "id": "L05-Q04",
    "lessonId": "L05",
    "lessonTitle": "Lección 05 — Gramáticas Regulares",
    "topic": "Caso de Transformación de Cátedra",
    "points": 8,
    "questionText": "Dada la siguiente gramática:**\n$$S \\to a A$$\n$$A \\to S b \\mid c$$\n**¿Cuál de las siguientes afirmaciones es CORRECTA respecto a su estructura y lenguaje generado?",
    "options": [
      {
        "id": "A",
        "text": "Es una gramática regular lineal por la derecha porque la regla del axioma comienza con $S \\to a A$.",
        "explanation": "Para ser regular, la gramática debe ser *exclusivamente* lineal por la derecha o *exclusivamente* lineal por la izquierda en **todas** sus producciones.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Es una gramática regular lineal por la izquierda porque la regla $A \\to S b$ tiene el no terminal a la izquierda.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Es una gramática libre de contexto pero NO es regular, porque mezcla reglas lineales a derecha con reglas lineales a izquierda, permitiendo anidamiento no regular.",
        "explanation": "Cada regla tiene un único no terminal en la izquierda ($S, A \\in V_N$), por lo que es una GLC (Tipo 2). Sin embargo, al mezclar producciones a derecha ($S \\to aA$) con producciones a izquierda ($A \\to Sb$), genera el lenguaje $L = \\{ a^n c b^n \\mid n \\ge 1 \\}$, que no es regular.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Es una gramática de Tipo 1 (sensible al contexto) porque el no terminal $S$ aparece a ambos lados de la derivación.",
        "explanation": "Las gramáticas Tipo 1 exigen contexto en el lado izquierdo ($\\alpha A \\beta$), lo cual no ocurre aquí.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Cada regla tiene un único no terminal en la izquierda ($S, A \\in V_N$), por lo que es una GLC (Tipo 2). Sin embargo, al mezclar producciones a derecha ($S \\to aA$) con producciones a izquierda ($A \\to Sb$), genera el lenguaje $L = \\{ a^n c b^n \\mid n \\ge 1 \\}$, que no es regular.",
    "sourceCatedra": "Diapositiva 6: Gramáticas Regulares (Cardoso/Tolaba)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.3; Louden Cap. 2",
    "trapAnalysis": "Cuidado con los distractores que afirman propiedades fuera de la clase de gramática o límites de memoria."
  },
  {
    "id": "L05-Q05",
    "lessonId": "L05",
    "lessonTitle": "Lección 05 — Gramáticas Regulares",
    "topic": "Gramáticas Lineales y Lenguajes Regulares",
    "points": 5,
    "questionText": "En el algoritmo constructivo que demuestra la equivalencia entre una Gramática Regular lineal por la derecha $G = (V_N, V_T, P, S)$ y un Autómata Finito $M = (Q, \\Sigma, \\delta, q_0, F)$:",
    "options": [
      {
        "id": "A",
        "text": "se crea un estado por cada producción de la gramática.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "se crea exactamente un estado en el autómata por cada no terminal de la gramática, más un estado final adicional $q_f$ para las transiciones que derivan en un solo terminal.",
        "explanation": "Opción correcta según la cátedra.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "el estado inicial del autómata siempre corresponde al último no terminal en derivar.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "las reglas de producción se convierten en los símbolos del alfabeto de entrada.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Opción correcta según la cátedra.",
    "sourceCatedra": "Diapositiva 6: Gramáticas Regulares (Cardoso/Tolaba)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.3; Louden Cap. 2",
    "trapAnalysis": "Cuidado con los distractores que afirman propiedades fuera de la clase de gramática o límites de memoria."
  },
  {
    "id": "L05-Q06",
    "lessonId": "L05",
    "lessonTitle": "Lección 05 — Gramáticas Regulares",
    "topic": "Gramáticas Lineales y Lenguajes Regulares",
    "points": 2,
    "questionText": "¿Cuál de las siguientes afirmaciones respecto a la Jerarquía de Chomsky es FALSA?",
    "options": [
      {
        "id": "A",
        "text": "Todo lenguaje regular es también un lenguaje libre de contexto.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Los autómatas linealmente acotados reconocen los lenguajes dependientes del contexto (Tipo 1).",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Las Máquinas de Turing reconocen los lenguajes sin restricciones (Tipo 0).",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Toda gramática libre de contexto puede convertirse en una gramática regular equivalente.",
        "explanation": "Las gramáticas libres de contexto contienen estrictamente a las regulares ($\\mathcal{L}_3 \\subsetneq \\mathcal{L}_2$). Lenguajes como $\\{a^n b^n\\}$ son libres de contexto y es matemáticamente imposible convertirlos en regulares.",
        "isCorrect": true
      }
    ],
    "theorySummary": "Las gramáticas libres de contexto contienen estrictamente a las regulares ($\\mathcal{L}_3 \\subsetneq \\mathcal{L}_2$). Lenguajes como $\\{a^n b^n\\}$ son libres de contexto y es matemáticamente imposible convertirlos en regulares.",
    "sourceCatedra": "Diapositiva 6: Gramáticas Regulares (Cardoso/Tolaba)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.3; Louden Cap. 2",
    "trapAnalysis": "Cuidado con los distractores que afirman propiedades fuera de la clase de gramática o límites de memoria."
  },
  {
    "id": "L06-Q01",
    "lessonId": "L06",
    "lessonTitle": "Lección 06 — Análisis Léxico",
    "topic": "Pregunta Real de Parcial",
    "points": 8,
    "questionText": "¿En qué fase de la compilación se lee el programa fuente de izquierda a derecha y se agrupa en componentes léxicos o tokens?",
    "options": [
      {
        "id": "A",
        "text": "Análisis Semántico",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Análisis Sintáctico",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Generación de código intermedio",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Análisis léxico",
        "explanation": "Es la definición fundacional del analizador léxico (*scanner*): primera fase del compilador que lee el flujo continuo de caracteres del programa fuente y lo agrupa en unidades lógicas con significado colectivo denominadas tokens o componentes léxicos.",
        "isCorrect": true
      }
    ],
    "theorySummary": "Es la definición fundacional del analizador léxico (*scanner*): primera fase del compilador que lee el flujo continuo de caracteres del programa fuente y lo agrupa en unidades lógicas con significado colectivo denominadas tokens o componentes léxicos.",
    "sourceCatedra": "Diapositiva 10: Análisis Léxico (Cardoso/Tolaba)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.1-3.2; Louden Cap. 2",
    "trapAnalysis": "Cuidado con los distractores que afirman propiedades fuera de la clase de gramática o límites de memoria."
  },
  {
    "id": "L06-Q02",
    "lessonId": "L06",
    "lessonTitle": "Lección 06 — Análisis Léxico",
    "topic": "Pregunta Real de Parcial",
    "points": 8,
    "questionText": "Respecto a la detección de errores durante el proceso de compilación, ¿qué tipos de errores es capaz de detectar directamente el analizador léxico?",
    "options": [
      {
        "id": "A",
        "text": "Variables utilizadas sin haber sido previamente declaradas en el programa.",
        "explanation": "La verificación de declaraciones previas y alcances de variables es responsabilidad del análisis semántico mediante la consulta a la Tabla de Símbolos.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Paréntesis o llaves desbalanceadas en una expresión compleja.",
        "explanation": "El balanceo de paréntesis y delimitadores requiere una gramática libre de contexto y es detectado por el analizador sintáctico (*parser*).",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Símbolos que no pertenecen al alfabeto del lenguaje fuente o identificadores mal construidos que no coinciden con ningún patrón.",
        "explanation": "El scanner solo detecta anomalías a nivel de caracteres: caracteres ilegales (no pertenecientes al alfabeto) o secuencias de caracteres que no encajan en ningún patrón léxico regular.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Incompatibilidad de tipos al asignar un valor de punto flotante a una variable entera.",
        "explanation": "La verificación de tipos es una comprobación semántica estática (*type checking*).",
        "isCorrect": false
      }
    ],
    "theorySummary": "El scanner solo detecta anomalías a nivel de caracteres: caracteres ilegales (no pertenecientes al alfabeto) o secuencias de caracteres que no encajan en ningún patrón léxico regular.",
    "sourceCatedra": "Diapositiva 10: Análisis Léxico (Cardoso/Tolaba)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.1-3.2; Louden Cap. 2",
    "trapAnalysis": "Cuidado con los distractores que afirman propiedades fuera de la clase de gramática o límites de memoria."
  },
  {
    "id": "L06-Q03",
    "lessonId": "L06",
    "lessonTitle": "Lección 06 — Análisis Léxico",
    "topic": "Caso Narrativo de Implementación",
    "points": 5,
    "questionText": "Al desarrollador Martín, encargado de implementar el analizador léxico de un compilador, le encomiendan optimizar la velocidad de lectura del archivo fuente desde el disco. Martín decide implementar el esquema clásico de *doble búfer con centinela* (*buffer pair*) descripto por Aho. ¿Cuál es el propósito técnico primordial de colocar un carácter centinela (`EOF`) al final de cada mitad de búfer?",
    "options": [
      {
        "id": "A",
        "text": "Asegurar que el programador no escriba líneas de código que superen los 4096 caracteres.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Reducir a una sola comprobación por carácter el avance del puntero de exploración, evitando verificar los límites de memoria del búfer en cada carácter leído.",
        "explanation": "Opción correcta según la cátedra.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Servir como separador obligatorio entre palabras reservadas e identificadores.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Reemplazar a la tabla de símbolos para almacenar los atributos de los tokens.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Opción correcta según la cátedra.",
    "sourceCatedra": "Diapositiva 10: Análisis Léxico (Cardoso/Tolaba)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.1-3.2; Louden Cap. 2",
    "trapAnalysis": "Cuidado con los distractores que afirman propiedades fuera de la clase de gramática o límites de memoria."
  },
  {
    "id": "L06-Q04",
    "lessonId": "L06",
    "lessonTitle": "Lección 06 — Análisis Léxico",
    "topic": "Razonamiento de Lookahead",
    "points": 8,
    "questionText": "Al escanear un programa escrito en C o Pascal, cuando el analizador léxico encuentra el carácter `<`, ¿por qué resulta indispensable utilizar el mecanismo de *preanálisis* (*lookahead*)?",
    "options": [
      {
        "id": "A",
        "text": "Porque el analizador léxico necesita saber de antemano el tipo de dato de las variables que se van a comparar.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Porque los operadores relacionales son evaluados por el generador de código y no por el scanner.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Porque el scanner no puede determinar inequívocamente si el token es `<` (menor), `<=` (menor o igual) o `<>` (distinto) sin inspeccionar al menos un carácter adicional del flujo de entrada.",
        "explanation": "Opción correcta según la cátedra.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Porque el estándar de compiladores prohíbe que los tokens tengan un solo carácter de longitud.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Opción correcta según la cátedra.",
    "sourceCatedra": "Diapositiva 10: Análisis Léxico (Cardoso/Tolaba)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.1-3.2; Louden Cap. 2",
    "trapAnalysis": "Cuidado con los distractores que afirman propiedades fuera de la clase de gramática o límites de memoria."
  },
  {
    "id": "L06-Q05",
    "lessonId": "L06",
    "lessonTitle": "Lección 06 — Análisis Léxico",
    "topic": "El Scanner, Búferes, Tokens y Lexemas",
    "points": 5,
    "questionText": "¿Cuál es la diferencia formal precisa entre un *Token*, un *Lexema* y un *Patrón*?",
    "options": [
      {
        "id": "A",
        "text": "El token es la expresión regular, el lexema es el objeto terminal y el patrón es la cadena concreta del código.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "El token es la categoría sintáctica abstracta $\\langle \\text{nombre}, \\text{atributo} \\rangle$, el lexema es la secuencia concreta de caracteres en el código fuente, y el patrón es la expresión regular que describe la regla de coincidencia.",
        "explanation": "Opción correcta según la cátedra.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "El lexema es almacenado en el AST, el token en la tabla hash y el patrón se descarta tras el preprocesamiento.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Son términos sinónimos usados de manera intercambiable en la literatura técnica.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Opción correcta según la cátedra.",
    "sourceCatedra": "Diapositiva 10: Análisis Léxico (Cardoso/Tolaba)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.1-3.2; Louden Cap. 2",
    "trapAnalysis": "Cuidado con los distractores que afirman propiedades fuera de la clase de gramática o límites de memoria."
  },
  {
    "id": "L06-Q06",
    "lessonId": "L06",
    "lessonTitle": "Lección 06 — Análisis Léxico",
    "topic": "El Scanner, Búferes, Tokens y Lexemas",
    "points": 2,
    "questionText": "¿Cómo suele resolver el analizador léxico el conflicto de ambigüedad cuando un lexema (como `\"if\"`) coincide tanto con el patrón de una palabra reservada como con el patrón general de identificador?",
    "options": [
      {
        "id": "A",
        "text": "Pidiendo al programador que ingrese las palabras reservadas entre comillas.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Emitiendo siempre el token `id` y dejando que el parser descubra si era una palabra reservada mediante backtracking.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Precargando la Tabla de Símbolos con las palabras reservadas marcadas con su token específico, para consultarla antes de clasificar el lexema como un identificador genérico.",
        "explanation": "Opción correcta según la cátedra.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Eliminando las palabras reservadas del lenguaje fuente.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Opción correcta según la cátedra.",
    "sourceCatedra": "Diapositiva 10: Análisis Léxico (Cardoso/Tolaba)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.1-3.2; Louden Cap. 2",
    "trapAnalysis": "Cuidado con los distractores que afirman propiedades fuera de la clase de gramática o límites de memoria."
  },
  {
    "id": "L07-Q01",
    "lessonId": "L07",
    "lessonTitle": "Lección 07 — PLY Lex y Autómatas con Pila",
    "topic": "Pregunta Real de Parcial",
    "points": 2,
    "questionText": "En un archivo de especificación de Lex o PLY, ¿cómo se define formalmente la expresión regular que reconoce números enteros positivos?",
    "options": [
      {
        "id": "A",
        "text": "`[0-9]+`",
        "explanation": "En sintaxis Lex/POSIX, `[0-9]` especifica la clase de caracteres de dígitos decimales y el operador `+` exige una clausura positiva (uno o más dígitos consecutivos), excluyendo la cadena vacía.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "`[0|1|2|3|4|5|6|7|8|9]+`",
        "explanation": "Dentro de los corchetes de una clase de caracteres, el carácter `|` se interpreta literalmente como el símbolo pleca, no como operador de disyunción.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "`[0..9]+`",
        "explanation": "La notación `0..9` no es sintaxis válida de expresiones regulares en Lex.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "`[a-zA-Z0-9]*`",
        "explanation": "Incluye caracteres alfabéticos y el operador `*` permitiría la cadena vacía (cero repeticiones).",
        "isCorrect": false
      }
    ],
    "theorySummary": "En sintaxis Lex/POSIX, `[0-9]` especifica la clase de caracteres de dígitos decimales y el operador `+` exige una clausura positiva (uno o más dígitos consecutivos), excluyendo la cadena vacía.",
    "sourceCatedra": "Diapositiva 7: Autómatas a Pila / PLY Lex (Cardoso/Tolaba)",
    "sourceBook": "Peter Linz Cap. 7; Dragon Book Cap. 3.5",
    "trapAnalysis": "Cuidado con los distractores que afirman propiedades fuera de la clase de gramática o límites de memoria."
  },
  {
    "id": "L07-Q02",
    "lessonId": "L07",
    "lessonTitle": "Lección 07 — PLY Lex y Autómatas con Pila",
    "topic": "Pregunta Real de Parcial",
    "points": 8,
    "questionText": "Dado un Autómata con Pila $M$ diseñado para reconocer el lenguaje de balanceo simétrico centrado en la letra 'c', $L = \\{ w c w^R \\mid w \\in \\{a, b\\}^* \\}$:**  \n**¿Cuál de las siguientes cadenas pertenece al lenguaje aceptado por el autómata?",
    "options": [
      {
        "id": "A",
        "text": "`bacba`",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "`abc`",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "`bbcbb`",
        "explanation": "Opción correcta según la cátedra.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "$\\epsilon$",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Opción correcta según la cátedra.",
    "sourceCatedra": "Diapositiva 7: Autómatas a Pila / PLY Lex (Cardoso/Tolaba)",
    "sourceBook": "Peter Linz Cap. 7; Dragon Book Cap. 3.5",
    "trapAnalysis": "Cuidado con los distractores que afirman propiedades fuera de la clase de gramática o límites de memoria."
  },
  {
    "id": "L07-Q03",
    "lessonId": "L07",
    "lessonTitle": "Lección 07 — PLY Lex y Autómatas con Pila",
    "topic": "Razonamiento de Determinismo en AP",
    "points": 5,
    "questionText": "Respecto a la comparación de poder computacional entre los Autómatas con Pila Deterministas (APD) y los No Deterministas (APND), la afirmación VERDADERA es:",
    "options": [
      {
        "id": "A",
        "text": "Son equivalentes en poder, de forma idéntica a lo que ocurre entre los AFD y AFND.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Los APD son estrictamente menos potentes que los APND ($APD \\subsetneq APND$), ya que existen lenguajes libres de contexto que ningún APD puede reconocer.",
        "explanation": "Opción correcta según la cátedra.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Los APD son más potentes porque no sufren de ramas infinitas de retroceso.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Los APD solo pueden reconocer lenguajes regulares.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Opción correcta según la cátedra.",
    "sourceCatedra": "Diapositiva 7: Autómatas a Pila / PLY Lex (Cardoso/Tolaba)",
    "sourceBook": "Peter Linz Cap. 7; Dragon Book Cap. 3.5",
    "trapAnalysis": "Cuidado con los distractores que afirman propiedades fuera de la clase de gramática o límites de memoria."
  },
  {
    "id": "L07-Q04",
    "lessonId": "L07",
    "lessonTitle": "Lección 07 — PLY Lex y Autómatas con Pila",
    "topic": "Caso Narrativo de Desambiguación en PLY Lex",
    "points": 8,
    "questionText": "La ingeniera Sofía está construyendo un analizador léxico en Python utilizando PLY Lex para un lenguaje de programación propio. En su código declara la regla para la palabra reservada `while` y la regla general para identificadores `[a-zA-Z_][a-zA-Z0-9_]*`. Si el archivo fuente contiene el texto `\"while_true\"`, ¿qué comportamiento tendrá el scanner y por qué regla de desambiguación?",
    "options": [
      {
        "id": "A",
        "text": "Emitirá el token `WHILE`, porque las palabras reservadas siempre tienen prioridad absoluta sobre los identificadores.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Reportará un error léxico por ambigüedad irresoluble de prefijos.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Emitirá el token `ID` con valor `\"while_true\"`, debido a la regla del emparejamiento más largo (*longest match* o coincidencia máxima).",
        "explanation": "Opción correcta según la cátedra.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Emitirá dos tokens consecutivos: primero `WHILE` y luego `ID` para `\"true\"`.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Opción correcta según la cátedra.",
    "sourceCatedra": "Diapositiva 7: Autómatas a Pila / PLY Lex (Cardoso/Tolaba)",
    "sourceBook": "Peter Linz Cap. 7; Dragon Book Cap. 3.5",
    "trapAnalysis": "Cuidado con los distractores que afirman propiedades fuera de la clase de gramática o límites de memoria."
  },
  {
    "id": "L07-Q05",
    "lessonId": "L07",
    "lessonTitle": "Lección 07 — PLY Lex y Autómatas con Pila",
    "topic": "Dinámica de Transición en AP",
    "points": 8,
    "questionText": "Durante un paso de cómputo en un Autómata con Pila, si la transición a ejecutar está denotada formalmente como $(p, a, X; q, Y Z)$:",
    "options": [
      {
        "id": "A",
        "text": "se lee $a$, se desapila $YZ$ de la pila y se apila $X$ en su lugar.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "se lee el símbolo $a$ de la entrada, se extrae el símbolo $X$ del tope de la pila, se cambia al estado $q$ y se apila la cadena $YZ$, quedando $Y$ como la nueva cima de la pila.",
        "explanation": "Opción correcta según la cátedra.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "se comprueba si $X$ está en el fondo de la pila y se avanza la entrada sin cambiar de estado.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "se descartan los símbolos $Y$ y $Z$ por ser no terminales.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Opción correcta según la cátedra.",
    "sourceCatedra": "Diapositiva 7: Autómatas a Pila / PLY Lex (Cardoso/Tolaba)",
    "sourceBook": "Peter Linz Cap. 7; Dragon Book Cap. 3.5",
    "trapAnalysis": "Cuidado con los distractores que afirman propiedades fuera de la clase de gramática o límites de memoria."
  },
  {
    "id": "L07-Q06",
    "lessonId": "L07",
    "lessonTitle": "Lección 07 — PLY Lex y Autómatas con Pila",
    "topic": "Especificaciones Lex y Autómatas con Pila (AP)",
    "points": 2,
    "questionText": "Respecto a los dos criterios de aceptación de cadenas en un Autómata con Pila No Determinista (por estado final vs por pila vacía), es correcto afirmar que:",
    "options": [
      {
        "id": "A",
        "text": "ambos criterios son formalmente equivalentes y reconocen con exactitud la misma clase de lenguajes (Lenguajes Libres de Contexto Tipo 2).",
        "explanation": "Opción correcta según la cátedra.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "la aceptación por estado final reconoce una clase estrictamente más amplia que la aceptación por pila vacía.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "la aceptación por pila vacía solo funciona para lenguajes regulares.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "ningún autómata con pila puede aceptar por estado final si la pila no está vacía.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Opción correcta según la cátedra.",
    "sourceCatedra": "Diapositiva 7: Autómatas a Pila / PLY Lex (Cardoso/Tolaba)",
    "sourceBook": "Peter Linz Cap. 7; Dragon Book Cap. 3.5",
    "trapAnalysis": "Cuidado con los distractores que afirman propiedades fuera de la clase de gramática o límites de memoria."
  },
  {
    "id": "L08-Q01",
    "lessonId": "L08",
    "lessonTitle": "Lección 08 — Gramáticas Libres de Contexto",
    "topic": "Pregunta Real de Parcial",
    "points": 2,
    "questionText": "Respecto a la definición formal de ambigüedad, la afirmación: *\"Una gramática independiente del contexto es ambigua si existen dos o más reglas de producción ambiguas\"* es:",
    "options": [
      {
        "id": "A",
        "text": "Verdadera, porque las reglas de producción individuales pueden ser ambiguas si tienen dos lados derechos iguales.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Falsa, porque la ambigüedad no es un defecto de reglas aisladas, sino una propiedad global de la gramática cuando una misma cadena admite dos o más árboles sintácticos distintos.",
        "explanation": "En la teoría de compiladores (Aho / Louden), las producciones individuales no son \"ambiguas\" por sí solas. La ambigüedad se define rigurosamente a nivel de lenguaje y gramática: una gramática $G$ es ambigua si existe al menos una cadena $w \\in L(G)$ que posee dos o más árboles sintácticos distintos (o dos derivaciones más a la izquierda distintas).",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Verdadera, pero solo si la gramática tiene recursión por la izquierda.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Falsa, porque la ambigüedad solo ocurre en gramáticas regulares.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      }
    ],
    "theorySummary": "En la teoría de compiladores (Aho / Louden), las producciones individuales no son \"ambiguas\" por sí solas. La ambigüedad se define rigurosamente a nivel de lenguaje y gramática: una gramática $G$ es ambigua si existe al menos una cadena $w \\in L(G)$ que posee dos o más árboles sintácticos distintos (o dos derivaciones más a la izquierda distintas).",
    "sourceCatedra": "Diapositiva 8: Gramáticas Libres de Contexto (Cardoso/Tolaba)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 4.2; Louden Cap. 3",
    "trapAnalysis": "Cuidado con los distractores que afirman propiedades fuera de la clase de gramática o límites de memoria."
  },
  {
    "id": "L08-Q02",
    "lessonId": "L08",
    "lessonTitle": "Lección 08 — Gramáticas Libres de Contexto",
    "topic": "Pregunta Real de Parcial",
    "points": 5,
    "questionText": "Respecto a las propiedades del árbol de análisis sintáctico (*parse tree*), es correcto afirmar que:",
    "options": [
      {
        "id": "A",
        "text": "Especifica obligatoriamente el orden temporal en que se sustituyeron los no terminales de la cadena.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "En un árbol de análisis sintáctico no se especifica el orden de las derivaciones de la cadena que está en las hojas.",
        "explanation": "Pregunta real del examen 2025. El árbol de análisis sintáctico representa la descomposición jerárquica padre-hijos, pero abstrae por completo el orden cronológico de sustitución. Una derivación leftmost y una derivación rightmost de la misma cadena dan lugar a exactamente el mismo árbol.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Solo puede construirse si la derivación se realizó estrictamente por la derecha.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Sus hojas siempre corresponden a los símbolos no terminales de la gramática.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Pregunta real del examen 2025. El árbol de análisis sintáctico representa la descomposición jerárquica padre-hijos, pero abstrae por completo el orden cronológico de sustitución. Una derivación leftmost y una derivación rightmost de la misma cadena dan lugar a exactamente el mismo árbol.",
    "sourceCatedra": "Diapositiva 8: Gramáticas Libres de Contexto (Cardoso/Tolaba)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 4.2; Louden Cap. 3",
    "trapAnalysis": "Cuidado con los distractores que afirman propiedades fuera de la clase de gramática o límites de memoria."
  },
  {
    "id": "L08-Q03",
    "lessonId": "L08",
    "lessonTitle": "Lección 08 — Gramáticas Libres de Contexto",
    "topic": "Pregunta Real de Parcial",
    "points": 8,
    "questionText": "Sea $\\Sigma = \\{a, b\\}$, la gramática:**\n$$S \\to a P b$$\n$$P \\to \\epsilon \\mid a P b$$\n**genera el lenguaje:",
    "options": [
      {
        "id": "A",
        "text": "$a^n b^n \\quad \\text{con } n \\ge 0$",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "$a a^* b b^*$",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "$a^* b^*$",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "$a^n b^n \\quad \\text{con } n > 0$",
        "explanation": "Opción correcta según la cátedra.",
        "isCorrect": true
      }
    ],
    "theorySummary": "Opción correcta según la cátedra.",
    "sourceCatedra": "Diapositiva 8: Gramáticas Libres de Contexto (Cardoso/Tolaba)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 4.2; Louden Cap. 3",
    "trapAnalysis": "Cuidado con los distractores que afirman propiedades fuera de la clase de gramática o límites de memoria."
  },
  {
    "id": "L08-Q04",
    "lessonId": "L08",
    "lessonTitle": "Lección 08 — Gramáticas Libres de Contexto",
    "topic": "Pregunta Real de Parcial",
    "points": 8,
    "questionText": "¿Cuál de las siguientes gramáticas genera la cadena `\"bbcbb\"`?",
    "options": [
      {
        "id": "A",
        "text": "$$S \\to A$$  \n  $$A \\to a A a \\mid b A b \\mid c$$",
        "explanation": "Opción correcta según la cátedra.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "$$S \\to A$$  \n  $$A \\to a A \\mid b A \\mid c$$",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "$$S \\to b A b$$  \n  $$A \\to b B c$$  \n  $$B \\to c B \\mid c$$",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "$$S \\to A$$  \n  $$A \\to a A b \\mid b B c$$  \n  $$B \\to c B \\mid c$$",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Opción correcta según la cátedra.",
    "sourceCatedra": "Diapositiva 8: Gramáticas Libres de Contexto (Cardoso/Tolaba)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 4.2; Louden Cap. 3",
    "trapAnalysis": "Cuidado con los distractores que afirman propiedades fuera de la clase de gramática o límites de memoria."
  },
  {
    "id": "L08-Q05",
    "lessonId": "L08",
    "lessonTitle": "Lección 08 — Gramáticas Libres de Contexto",
    "topic": "Caso Narrativo de Ambigüedad: Dangling-Else",
    "points": 8,
    "questionText": "El desarrollador Camilo está diseñando la gramática para el compilador de un lenguaje imperativo con la siguiente especificación de sentencias condicionales:**\n$$S \\to \\text{if } C \\text{ then } S \\mid \\text{if } C \\text{ then } S \\text{ else } S \\mid a$$\n**Al compilar la sentencia anidada:**\n$$\\text{if } C_1 \\text{ then if } C_2 \\text{ then } a_1 \\text{ else } a_2$$\n**Camilo observa que el compilador produce un conflicto de ambigüedad (*dangling-else*). ¿A qué se debe este problema?",
    "options": [
      {
        "id": "A",
        "text": "A que la cláusula `then` es una palabra reservada repetida.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "A que existen dos interpretaciones sintácticas válidas (dos árboles sintácticos distintos) según si la cláusula `else` se asocia al primer `if` o al segundo `if`.",
        "explanation": "Opción correcta según la cátedra.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "A que el lenguaje no es libre de contexto y requiere un autómata linealmente acotado.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "A un error léxico originado por la falta de un carácter centinela.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Opción correcta según la cátedra.",
    "sourceCatedra": "Diapositiva 8: Gramáticas Libres de Contexto (Cardoso/Tolaba)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 4.2; Louden Cap. 3",
    "trapAnalysis": "Cuidado con los distractores que afirman propiedades fuera de la clase de gramática o límites de memoria."
  },
  {
    "id": "L08-Q06",
    "lessonId": "L08",
    "lessonTitle": "Lección 08 — Gramáticas Libres de Contexto",
    "topic": "Árboles de Derivación y Ambigüedad",
    "points": 2,
    "questionText": "¿Cuál es la relación formal demostrada entre las Gramáticas Libres de Contexto (GLC) y los Autómatas con Pila (AP)?",
    "options": [
      {
        "id": "A",
        "text": "Los AP solo pueden reconocer el subconjunto regular de las GLC.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Los lenguajes generados por las GLC son exactamente los mismos lenguajes reconocidos por los Autómatas con Pila No Deterministas ($\\mathcal{L}(\\text{GLC}) \\equiv \\mathcal{L}(\\text{APND})$).",
        "explanation": "Opción correcta según la cátedra.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Las GLC son estrictamente más potentes que los Autómatas con Pila.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Una GLC requiere obligatoriamente de una Máquina de Turing para ser parseada.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Opción correcta según la cátedra.",
    "sourceCatedra": "Diapositiva 8: Gramáticas Libres de Contexto (Cardoso/Tolaba)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 4.2; Louden Cap. 3",
    "trapAnalysis": "Cuidado con los distractores que afirman propiedades fuera de la clase de gramática o límites de memoria."
  },
  {
    "id": "L09-Q01",
    "lessonId": "L09",
    "lessonTitle": "Lección 09 — Máquinas de Turing",
    "topic": "Pregunta Real de Parcial",
    "points": 2,
    "questionText": "Respecto a la arquitectura y recursos de memoria, la afirmación: *\"Las máquinas de Turing necesitan una pila para realizar las transiciones\"* es:",
    "options": [
      {
        "id": "A",
        "text": "Verdadera, porque la pila almacena los estados visitados.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Falsa, porque las máquinas de Turing no tienen ni necesitan una pila; su memoria es una cinta infinita sobre la cual leen, escriben y se desplazan bidireccionalmente.",
        "explanation": "Pregunta real del examen 2025. El modelo formal de la Máquina de Turing propuesto por Alan Turing en 1936 consta exclusivamente de una unidad de control de estados finitos y una **cinta infinita** dividida en celdas con una cabeza lectora-escritora bidireccional ($L, R$). Los autómatas que requieren y utilizan una pila son los **Autómatas con Pila (AP)**.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Verdadera, pero solo si la máquina de Turing es determinista.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Falsa, porque las máquinas de Turing no utilizan ningún tipo de memoria auxiliar.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Pregunta real del examen 2025. El modelo formal de la Máquina de Turing propuesto por Alan Turing en 1936 consta exclusivamente de una unidad de control de estados finitos y una **cinta infinita** dividida en celdas con una cabeza lectora-escritora bidireccional ($L, R$). Los autómatas que requieren y utilizan una pila son los **Autómatas con Pila (AP)**.",
    "sourceCatedra": "Diapositiva 9: Máquinas de Turing (Cardoso/Tolaba)",
    "sourceBook": "Peter Linz Cap. 9-11; Hopcroft et al. Cap. 8",
    "trapAnalysis": "Cuidado con los distractores que afirman propiedades fuera de la clase de gramática o límites de memoria."
  },
  {
    "id": "L09-Q02",
    "lessonId": "L09",
    "lessonTitle": "Lección 09 — Máquinas de Turing",
    "topic": "Razonamiento de Límites de Memoria",
    "points": 8,
    "questionText": "¿Cuál de los siguientes lenguajes formales NO puede ser reconocido por ningún Autómata con Pila, pero SÍ puede ser reconocido por una Máquina de Turing?",
    "options": [
      {
        "id": "A",
        "text": "$L = \\{ a^n b^m \\mid n \\ge 1, m \\ge 1 \\}$",
        "explanation": "Es un lenguaje regular (Tipo 3), reconocible por un Autómata Finito.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "$L = \\{ a^n b^n \\mid n \\ge 0 \\}$",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "$L = \\{ a^n b^n c^n \\mid n \\ge 1 \\}$",
        "explanation": "Requiere coordinar y verificar tres cantidades idénticas simultáneas ($a, b, c$). Como la pila de un AP se agota tras desapilar los símbolos $a$ al leer los símbolos $b$, no le queda memoria para verificar la cantidad de $c$. La Máquina de Turing, en cambio, puede realizar múltiples pasadas de barrido sobre su cinta marcando secuencialmente una $a$, una $b$ y una $c$ hasta agotar la entrada.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "$L = \\{ w c w^R \\mid w \\in \\{a, b\\}^* \\}$",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Requiere coordinar y verificar tres cantidades idénticas simultáneas ($a, b, c$). Como la pila de un AP se agota tras desapilar los símbolos $a$ al leer los símbolos $b$, no le queda memoria para verificar la cantidad de $c$. La Máquina de Turing, en cambio, puede realizar múltiples pasadas de barrido sobre su cinta marcando secuencialmente una $a$, una $b$ y una $c$ hasta agotar la entrada.",
    "sourceCatedra": "Diapositiva 9: Máquinas de Turing (Cardoso/Tolaba)",
    "sourceBook": "Peter Linz Cap. 9-11; Hopcroft et al. Cap. 8",
    "trapAnalysis": "Cuidado con los distractores que afirman propiedades fuera de la clase de gramática o límites de memoria."
  },
  {
    "id": "L09-Q03",
    "lessonId": "L09",
    "lessonTitle": "Lección 09 — Máquinas de Turing",
    "topic": "Caso Narrativo de MT como Transductora",
    "points": 8,
    "questionText": "El profesor Alan encomienda a sus alumnos construir una Máquina de Turing que no actúe meramente como un aceptador de cadenas (emitiendo un Sí/No), sino como un *transductor* capaz de computar la función suma $f(x, y) = x + y$ sobre enteros codificados en unario ($1^{x+1} 0 1^{y+1}$). ¿Qué caracteriza formalmente a una MT transductora?",
    "options": [
      {
        "id": "A",
        "text": "Que requiere que la cinta sea circular y de longitud finita.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Que utiliza dos cabezas lectoras independientes pero ninguna escritora.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Que toma la entrada en la cinta, ejecuta una secuencia de transiciones deterministas y, al detenerse en un estado de parada, deja grabado en la cinta el resultado final de la función $f(x)$.",
        "explanation": "Opción correcta según la cátedra.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Que solo puede calcular funciones que generen números primos.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Opción correcta según la cátedra.",
    "sourceCatedra": "Diapositiva 9: Máquinas de Turing (Cardoso/Tolaba)",
    "sourceBook": "Peter Linz Cap. 9-11; Hopcroft et al. Cap. 8",
    "trapAnalysis": "Cuidado con los distractores que afirman propiedades fuera de la clase de gramática o límites de memoria."
  },
  {
    "id": "L09-Q04",
    "lessonId": "L09",
    "lessonTitle": "Lección 09 — Máquinas de Turing",
    "topic": "Equivalencia de Extensiones",
    "points": 5,
    "questionText": "Respecto a las variantes extendidas de la Máquina de Turing (como las MT con múltiples cintas, MT con múltiples pistas y MT no deterministas):",
    "options": [
      {
        "id": "A",
        "text": "La MT multicinta puede resolver problemas indecidibles que la MT estándar de una cinta no puede resolver.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "La MT no determinista reconoce una clase estrictamente más amplia de lenguajes que la determinista, al igual que ocurre con los autómatas con pila.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Todas estas variantes son formalmente equivalentes a la Máquina de Turing estándar de una sola cinta; ninguna incrementa la clase de lenguajes computables.",
        "explanation": "Opción correcta según la cátedra.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Las MT con múltiples cintas no pueden detenerse nunca.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Opción correcta según la cátedra.",
    "sourceCatedra": "Diapositiva 9: Máquinas de Turing (Cardoso/Tolaba)",
    "sourceBook": "Peter Linz Cap. 9-11; Hopcroft et al. Cap. 8",
    "trapAnalysis": "Cuidado con los distractores que afirman propiedades fuera de la clase de gramática o límites de memoria."
  },
  {
    "id": "L09-Q05",
    "lessonId": "L09",
    "lessonTitle": "Lección 09 — Máquinas de Turing",
    "topic": "Problema de la Parada",
    "points": 5,
    "questionText": "¿Qué demuestra con certeza matemática el *Problema de la Parada* (*Halting Problem*) formulado por Alan Turing en 1936?",
    "options": [
      {
        "id": "A",
        "text": "Que las computadoras nunca tendrán suficiente memoria para compilar programas grandes.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Que es matemáticamente imposible construir un algoritmo general que determine, para cualquier programa arbitrario y cualquier entrada, si el programa terminará su ejecución o entrará en un bucle infinito.",
        "explanation": "Opción correcta según la cátedra.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Que todo compilador es capaz de detectar todos los bucles infinitos en tiempo de análisis sintáctico.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Que la función de transición de una MT debe estar definida para todos los estados y símbolos.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Opción correcta según la cátedra.",
    "sourceCatedra": "Diapositiva 9: Máquinas de Turing (Cardoso/Tolaba)",
    "sourceBook": "Peter Linz Cap. 9-11; Hopcroft et al. Cap. 8",
    "trapAnalysis": "Cuidado con los distractores que afirman propiedades fuera de la clase de gramática o límites de memoria."
  },
  {
    "id": "L09-Q06",
    "lessonId": "L09",
    "lessonTitle": "Lección 09 — Máquinas de Turing",
    "topic": "Máquinas de Turing Estándar y Transductoras",
    "points": 2,
    "questionText": "La afirmación: *\"Cualquier proceso algorítmico efectivo realizable en cualquier computadora mecánica o digital puede ser simulado por una Máquina de Turing\"* se conoce formalmente como:",
    "options": [
      {
        "id": "A",
        "text": "El Teorema de Chomsky",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "El Lema de Bombeo",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "La Tesis de Church-Turing",
        "explanation": "Opción correcta según la cátedra.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "El Principio de Determinismo de Kleene",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Opción correcta según la cátedra.",
    "sourceCatedra": "Diapositiva 9: Máquinas de Turing (Cardoso/Tolaba)",
    "sourceBook": "Peter Linz Cap. 9-11; Hopcroft et al. Cap. 8",
    "trapAnalysis": "Cuidado con los distractores que afirman propiedades fuera de la clase de gramática o límites de memoria."
  },
  {
    "id": "L10-Q01",
    "lessonId": "L10",
    "lessonTitle": "Lección 10 — Análisis Sintáctico y Limpieza",
    "topic": "Pregunta Real de Parcial",
    "points": 5,
    "questionText": "¿Cuál es el principal objetivo de *limpiar* una gramática libre del contexto antes de proceder a la construcción de su analizador sintáctico?",
    "options": [
      {
        "id": "A",
        "text": "Simplificar la gramática para transformarla en una expresión regular.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Aumentar la complejidad de la gramática eliminando todas las reglas que deriven en terminales.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Remover símbolos que no contribuyen a la generación de cadenas terminales (no generadores o inaccesibles) y producciones que no son útiles.",
        "explanation": "Pregunta real del examen 2025. Limpiar una gramática consiste en eliminar **símbolos no generadores** (aquellos que jamás terminan de derivar en terminales) y **símbolos inaccesibles** (aquellos que nunca pueden alcanzarse desde el axioma inicial $S$), así como ciclos y derivaciones unitarias innecesarias, asegurando que cada regla sea productiva y computable por el parser.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Forzar a que todas las reglas contengan exactamente dos símbolos no terminales.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Pregunta real del examen 2025. Limpiar una gramática consiste en eliminar **símbolos no generadores** (aquellos que jamás terminan de derivar en terminales) y **símbolos inaccesibles** (aquellos que nunca pueden alcanzarse desde el axioma inicial $S$), así como ciclos y derivaciones unitarias innecesarias, asegurando que cada regla sea productiva y computable por el parser.",
    "sourceCatedra": "Diapositiva 11: Análisis Sintáctico (Cardoso/Tolaba)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 4.3-4.4; Louden Cap. 4",
    "trapAnalysis": "Cuidado con los distractores que afirman propiedades fuera de la clase de gramática o límites de memoria."
  },
  {
    "id": "L10-Q02",
    "lessonId": "L10",
    "lessonTitle": "Lección 10 — Análisis Sintáctico y Limpieza",
    "topic": "Pregunta Real de Parcial",
    "points": 8,
    "questionText": "Dada la siguiente gramática con prefijo común:**\n$$A \\to \\alpha \\beta \\mid \\alpha \\gamma$$\n**Después de aplicar el algoritmo de factorización por la izquierda (*left factoring*) se obtiene exactamente:",
    "options": [
      {
        "id": "A",
        "text": "$$A \\to \\alpha A'$$  \n  $$A' \\to \\beta \\mid \\gamma$$",
        "explanation": "Pregunta real del examen 2025. El algoritmo de factorización por la izquierda posterga la decisión del parser: aísla el prefijo común $\\alpha$ en la producción de $A \\to \\alpha A'$, y traslada los sufijos restantes $\\beta$ y $\\gamma$ a las alternativas de un nuevo no terminal $A' \\to \\beta \\mid \\gamma$. No se agrega $\\epsilon$ porque ninguna de las alternativas originales era vacía.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "$$A \\to \\beta \\mid \\gamma A'$$  \n  $$A' \\to \\alpha \\mid \\epsilon$$",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "$$A \\to \\beta A'$$  \n  $$A' \\to \\gamma A'$$",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "$$A \\to \\alpha A'$$  \n  $$A' \\to \\beta \\mid \\gamma \\mid \\epsilon$$",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Pregunta real del examen 2025. El algoritmo de factorización por la izquierda posterga la decisión del parser: aísla el prefijo común $\\alpha$ en la producción de $A \\to \\alpha A'$, y traslada los sufijos restantes $\\beta$ y $\\gamma$ a las alternativas de un nuevo no terminal $A' \\to \\beta \\mid \\gamma$. No se agrega $\\epsilon$ porque ninguna de las alternativas originales era vacía.",
    "sourceCatedra": "Diapositiva 11: Análisis Sintáctico (Cardoso/Tolaba)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 4.3-4.4; Louden Cap. 4",
    "trapAnalysis": "Cuidado con los distractores que afirman propiedades fuera de la clase de gramática o límites de memoria."
  },
  {
    "id": "L10-Q03",
    "lessonId": "L10",
    "lessonTitle": "Lección 10 — Análisis Sintáctico y Limpieza",
    "topic": "Pregunta Real de Parcial",
    "points": 8,
    "questionText": "¿Qué técnica formal se utiliza para eliminar la recursividad indirecta por la izquierda en la siguiente gramática?\n$$A \\to B d$$\n$$B \\to A e \\mid d$$",
    "options": [
      {
        "id": "A",
        "text": "Sustitución de $A$ en la segunda regla y eliminación sistemática de la recursividad directa resultante en $B$.",
        "explanation": "Pregunta real del examen 2025. Existe un ciclo de recursión indirecta: $B \\Rightarrow A e \\Rightarrow (B d) e = B d e$. El algoritmo sistemático de la cátedra sustituye la producción de $A$ en la regla de $B$, obteniendo $B \\to B d e \\mid d$. Una vez expuesta la recursión directa en $B$, se elimina introduciendo $B'$: $B \\to d B', \\; B' \\to d e B' \\mid \\epsilon$.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "No existe recursividad izquierda indirecta en la gramática porque las reglas comienzan con terminales distintos.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Sustitución de $B$ en la primera producción dejando intacta la segunda regla.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Transformación de todas las reglas a la Forma Normal de Greibach.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Pregunta real del examen 2025. Existe un ciclo de recursión indirecta: $B \\Rightarrow A e \\Rightarrow (B d) e = B d e$. El algoritmo sistemático de la cátedra sustituye la producción de $A$ en la regla de $B$, obteniendo $B \\to B d e \\mid d$. Una vez expuesta la recursión directa en $B$, se elimina introduciendo $B'$: $B \\to d B', \\; B' \\to d e B' \\mid \\epsilon$.",
    "sourceCatedra": "Diapositiva 11: Análisis Sintáctico (Cardoso/Tolaba)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 4.3-4.4; Louden Cap. 4",
    "trapAnalysis": "Cuidado con los distractores que afirman propiedades fuera de la clase de gramática o límites de memoria."
  },
  {
    "id": "L10-Q04",
    "lessonId": "L10",
    "lessonTitle": "Lección 10 — Análisis Sintáctico y Limpieza",
    "topic": "Caso Narrativo de Falla en Parsing Descendente",
    "points": 8,
    "questionText": "El ingeniero Lucas escribe a mano un analizador sintáctico por descenso recursivo para una gramática que contiene la regla $E \\to E + T \\mid T$. Al ejecutar el compilador con la entrada `\"a + b\"`, el programa entra de inmediato en un bucle infinito y colapsa por desbordamiento de pila (*stack overflow*). ¿Cuál es la causa teórica de esta falla y cómo se resuelve?",
    "options": [
      {
        "id": "A",
        "text": "El scanner no eliminó los espacios en blanco; se resuelve agregando un centinela `EOF`.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "La gramática es ambigua; se resuelve cambiando el compilador por un intérprete.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Los analizadores sintácticos descendentes no pueden procesar gramáticas con recursividad por la izquierda, ya que la función de $E$ se llama a sí misma infinitamente sin consumir tokens; se resuelve eliminando la recursión por la izquierda ($E \\to T E', \\; E' \\to + T E' \\mid \\epsilon$).",
        "explanation": "Opción correcta según la cátedra.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "La gramática no es libre de contexto; se resuelve utilizando una Máquina de Turing.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Opción correcta según la cátedra.",
    "sourceCatedra": "Diapositiva 11: Análisis Sintáctico (Cardoso/Tolaba)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 4.3-4.4; Louden Cap. 4",
    "trapAnalysis": "Cuidado con los distractores que afirman propiedades fuera de la clase de gramática o límites de memoria."
  },
  {
    "id": "L10-Q05",
    "lessonId": "L10",
    "lessonTitle": "Lección 10 — Análisis Sintáctico y Limpieza",
    "topic": "Limitaciones del Backtracking",
    "points": 5,
    "questionText": "¿Cuál es la principal desventaja computacional del análisis sintáctico descendente con retroceso (*backtracking*) que fundamenta el uso de analizadores predictivos deterministas?",
    "options": [
      {
        "id": "A",
        "text": "Que no puede parsear identificadores de más de ocho caracteres.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Que en el peor de los casos su complejidad temporal es exponencial respecto a la longitud del programa fuente, y resulta muy costoso deshacer acciones semánticas ejecutadas durante ramas fallidas.",
        "explanation": "Opción correcta según la cátedra.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Que exige que todas las producciones de la gramática sean unitarias.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Que no permite generar árboles sintácticos abstractos.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Opción correcta según la cátedra.",
    "sourceCatedra": "Diapositiva 11: Análisis Sintáctico (Cardoso/Tolaba)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 4.3-4.4; Louden Cap. 4",
    "trapAnalysis": "Cuidado con los distractores que afirman propiedades fuera de la clase de gramática o límites de memoria."
  },
  {
    "id": "L10-Q06",
    "lessonId": "L10",
    "lessonTitle": "Lección 10 — Análisis Sintáctico y Limpieza",
    "topic": "Descenso Recursivo, Limpieza, Recursión y Factorización",
    "points": 2,
    "questionText": "En la clasificación de analizadores sintácticos, la diferencia fundamental en la construcción del árbol entre métodos descendentes (*Top-Down*) y ascendentes (*Bottom-Up*) es:",
    "options": [
      {
        "id": "A",
        "text": "Los descendentes construyen el árbol desde la raíz hacia las hojas simulando una derivación leftmost, mientras que los ascendentes van de las hojas hacia la raíz mediante reducciones canónicas inversas.",
        "explanation": "Opción correcta según la cátedra.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Los descendentes solo admiten gramáticas regulares y los ascendentes solo Máquinas de Turing.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Los descendentes no utilizan el analizador léxico.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Los ascendentes requieren obligatoriamente retroceso exponencial.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Opción correcta según la cátedra.",
    "sourceCatedra": "Diapositiva 11: Análisis Sintáctico (Cardoso/Tolaba)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 4.3-4.4; Louden Cap. 4",
    "trapAnalysis": "Cuidado con los distractores que afirman propiedades fuera de la clase de gramática o límites de memoria."
  },
  {
    "id": "L11-Q01",
    "lessonId": "L11",
    "lessonTitle": "Lección 11 — Sintáctico Predictivo LL(1)",
    "topic": "Condiciones Formales LL(1",
    "points": 8,
    "questionText": "¿Cuál de las siguientes condiciones es INDISPENSABLE para que una gramática libre de contexto sea formalmente clasificada como LL(1)?",
    "options": [
      {
        "id": "A",
        "text": "Que todas sus producciones sean lineales por la derecha y no contengan símbolos no terminales recursivos.",
        "explanation": "Las gramáticas lineales a derecha definen lenguajes regulares (Tipo 3); las gramáticas LL(1) son una subclase de las libres de contexto (Tipo 2).",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Que el conjunto SIGUIENTE de cada símbolo no terminal contenga obligatoriamente a la cadena vacía $\\epsilon$.",
        "explanation": "$\\epsilon$ jamás puede pertenecer al conjunto SIGUIENTE por definición formal.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Que para cualquier no terminal $A$ con dos alternativas distintas $A \\to \\alpha \\mid \\beta$, los conjuntos $\\text{PRIMERO}(\\alpha)$ y $\\text{PRIMERO}(\\beta)$ sean estrictamente disjuntos ($\\text{PRIMERO}(\\alpha) \\cap \\text{PRIMERO}(\\beta) = \\emptyset$).",
        "explanation": "Primera condición matemática fundamental para la ausencia de conflictos en la tabla $M$: si $\\alpha$ y $\\beta$ compartieran algún terminal inicial común $a$, la celda $M[A, a]$ recibiría ambas producciones y el parser sufriría un conflicto de decisión múltiple.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Que la gramática contenga recursividad por la izquierda para acelerar las reducciones.",
        "explanation": "La recursividad izquierda destruye la condición LL(1) provocando conflictos directos e imposibilitando el análisis descendente.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Primera condición matemática fundamental para la ausencia de conflictos en la tabla $M$: si $\\alpha$ y $\\beta$ compartieran algún terminal inicial común $a$, la celda $M[A, a]$ recibiría ambas producciones y el parser sufriría un conflicto de decisión múltiple.",
    "sourceCatedra": "Diapositiva 12: Análisis Sintáctico LL(1) (Cardoso/Tolaba)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 4.4.3-4.4.4; Louden Cap. 4.5",
    "trapAnalysis": "Cuidado con los distractores que afirman propiedades fuera de la clase de gramática o límites de memoria."
  },
  {
    "id": "L11-Q02",
    "lessonId": "L11",
    "lessonTitle": "Lección 11 — Sintáctico Predictivo LL(1)",
    "topic": "Regla Fundamental de Conjuntos de Cátedra",
    "points": 2,
    "questionText": "Respecto a los conjuntos de seguimiento, la afirmación: *\"El símbolo $\\epsilon$ (cadena vacía) puede formar parte del conjunto $\\text{SIGUIENTE}(A)$ si el no terminal $A$ se encuentra al final de una producción\"* es:",
    "options": [
      {
        "id": "A",
        "text": "Verdadera, porque $\\epsilon$ acompaña al centinela '$' en el fondo de la pila.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Falsa, porque $\\epsilon$ NUNCA se añade a ningún conjunto SIGUIENTE; este conjunto solo puede contener terminales reales de $V_T$ y el marcador de fin de entrada '$'.",
        "explanation": "En las notas de cátedra (`PredictivoLL-PrimeroSiguiente.md`) y en los libros de Aho y Louden, se enfatiza textualmente: *\"Nótese que $\\epsilon$ nunca se añade a SIGUIENTE\"*. Cuando un no terminal $A$ está al final de una regla $B \\to \\alpha A$, lo que se transfiere a $\\text{SIGUIENTE}(A)$ son los elementos de $\\text{SIGUIENTE}(B)$, no $\\epsilon$.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Verdadera, siempre que la gramática esté limpia de ciclos.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Falsa, porque SIGUIENTE solo se calcula para terminales y no para no terminales.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      }
    ],
    "theorySummary": "En las notas de cátedra (`PredictivoLL-PrimeroSiguiente.md`) y en los libros de Aho y Louden, se enfatiza textualmente: *\"Nótese que $\\epsilon$ nunca se añade a SIGUIENTE\"*. Cuando un no terminal $A$ está al final de una regla $B \\to \\alpha A$, lo que se transfiere a $\\text{SIGUIENTE}(A)$ son los elementos de $\\text{SIGUIENTE}(B)$, no $\\epsilon$.",
    "sourceCatedra": "Diapositiva 12: Análisis Sintáctico LL(1) (Cardoso/Tolaba)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 4.4.3-4.4.4; Louden Cap. 4.5",
    "trapAnalysis": "Cuidado con los distractores que afirman propiedades fuera de la clase de gramática o límites de memoria."
  },
  {
    "id": "L11-Q03",
    "lessonId": "L11",
    "lessonTitle": "Lección 11 — Sintáctico Predictivo LL(1)",
    "topic": "Caso Narrativo de Construcción de Tabla M",
    "points": 8,
    "questionText": "La ingeniera Valeria está calculando manualmente la tabla predictiva $M[A, a]$ para una gramática que incluye la regla $A \\to \\alpha$. Al evaluar los conjuntos auxiliares, comprueba que $\\epsilon \\in \\text{PRIMERO}(\\alpha)$. ¿En qué celdas de la fila correspondiente a $A$ debe registrar Valeria dicha producción?",
    "options": [
      {
        "id": "A",
        "text": "Únicamente en la celda correspondiente a la columna $\\epsilon$.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "En todas las celdas de los terminales pertenecientes a $\\text{PRIMERO}(A)$ sin importar $\\text{SIGUIENTE}(A)$.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "En las celdas de todos los símbolos terminales $b$ pertenecientes a $\\text{SIGUIENTE}(A)$ (incluyendo el marcador '$' si forma parte de él).",
        "explanation": "Opción correcta según la cátedra.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "En ninguna celda, porque las producciones que derivan a $\\epsilon$ se descartan en los analizadores LL(1).",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Cuando una regla deriva en $\\epsilon$ ($A \\to \\alpha$ con $\\epsilon \\in \\text{PRIMERO}(\\alpha)$), dicha producción debe agregarse en la tabla predictiva $M[A, b]$ para todos los terminales $b \\in \\text{SIGUIENTE}(A)$, incluido el centinela de fin de cadena '$'.",
    "sourceCatedra": "Diapositiva 12: Análisis Sintáctico LL(1) (Cardoso/Tolaba)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 4.4.3-4.4.4; Louden Cap. 4.5",
    "trapAnalysis": "Cuidado con los distractores que afirman propiedades fuera de la clase de gramática o límites de memoria."
  },
  {
    "id": "L11-Q04",
    "lessonId": "L11",
    "lessonTitle": "Lección 11 — Sintáctico Predictivo LL(1)",
    "topic": "Ejecución del Parser con Pila LIFO",
    "points": 5,
    "questionText": "En el ciclo de ejecución del parser LL(1) no recursivo, si el símbolo en la cima de la pila es el no terminal $X$, el token de entrada es $a$, y la tabla predictiva indica $M[X, a] = \\{ X \\to U V W \\}$:",
    "options": [
      {
        "id": "A",
        "text": "se consume el token $a$ de la entrada inmediatamente.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "se reemplaza $X$ apilando $UVW$ en orden directo de izquierda a derecha, quedando $W$ en la cima.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "se extrae $X$ de la pila y se apilan los símbolos del lado derecho en orden inverso (primero $W$, luego $V$ y finalmente $U$), de modo que $U$ quede en la cima de la pila.",
        "explanation": "Opción correcta según la cátedra.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "se anuncia éxito y finaliza el análisis sintáctico.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Opción correcta según la cátedra.",
    "sourceCatedra": "Diapositiva 12: Análisis Sintáctico LL(1) (Cardoso/Tolaba)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 4.4.3-4.4.4; Louden Cap. 4.5",
    "trapAnalysis": "Cuidado con los distractores que afirman propiedades fuera de la clase de gramática o límites de memoria."
  },
  {
    "id": "L11-Q05",
    "lessonId": "L11",
    "lessonTitle": "Lección 11 — Sintáctico Predictivo LL(1)",
    "topic": "Modo Pánico y Sincronización",
    "points": 5,
    "questionText": "¿Cómo implementa el *modo pánico* la recuperación de errores sintácticos en analizadores predictivos LL(1) según la técnica canónica de Aho (Dragon Book)?",
    "options": [
      {
        "id": "A",
        "text": "Deteniendo inmediatamente la ejecución y borrando el ejecutable.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Colocando marcas sincronizadoras (`synch`) en las celdas $M[A, b]$ para los terminales $b \\in \\text{SIGUIENTE}(A)$, de modo que al encontrar un error en la entrada con uno de esos símbolos, el parser extrae $A$ de la pila y reanuda el análisis.",
        "explanation": "Opción correcta según la cátedra.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Reintentando la misma producción indefinidamente hasta que el usuario corrija el error.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Insertando automáticamente tokens ficticios de punto y coma en el búfer de entrada.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Opción correcta según la cátedra.",
    "sourceCatedra": "Diapositiva 12: Análisis Sintáctico LL(1) (Cardoso/Tolaba)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 4.4.3-4.4.4; Louden Cap. 4.5",
    "trapAnalysis": "Cuidado con los distractores que afirman propiedades fuera de la clase de gramática o límites de memoria."
  },
  {
    "id": "L11-Q06",
    "lessonId": "L11",
    "lessonTitle": "Lección 11 — Sintáctico Predictivo LL(1)",
    "topic": "Conjuntos PRIMERO, SIGUIENTE y Tabla M",
    "points": 2,
    "questionText": "¿Cuál de las siguientes afirmaciones es CORRECTA respecto a una gramática libre de contexto que es NO ambigua?",
    "options": [
      {
        "id": "A",
        "text": "Siempre es una gramática regular.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Es automáticamente una gramática LL(1) sin necesidad de transformaciones.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "No necesariamente es LL(1), ya que puede requerir factorización por la izquierda, eliminación de recursión por la izquierda o más de un símbolo de lookahead.",
        "explanation": "Opción correcta según la cátedra.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "No puede ser analizada por ningún analizador sintáctico ascendente.",
        "explanation": "Opción incorrecta según la definición formal.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Opción correcta según la cátedra.",
    "sourceCatedra": "Diapositiva 12: Análisis Sintáctico LL(1) (Cardoso/Tolaba)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 4.4.3-4.4.4; Louden Cap. 4.5",
    "trapAnalysis": "Cuidado con los distractores que afirman propiedades fuera de la clase de gramática o límites de memoria."
  },
  {
    "id": "L05-SIM02",
    "lessonId": "L05",
    "lessonTitle": "Lección 05 — Gramáticas Regulares",
    "topic": "Gramáticas Lineales y Lenguajes Regulares",
    "points": 5,
    "questionText": "Seleccione una o más de una:**  \n**Los lenguajes generados por las gramáticas regulares:",
    "options": [
      {
        "id": "A",
        "text": "Se pueden representar mediante expresiones regulares.",
        "explanation": "Los lenguajes regulares son generados por GR, representados por ER y reconocidos por AF (tanto deterministas como no deterministas). La opción B es falsa porque la relación de inclusión es inversa: las gramáticas regulares son un subconjunto estricto de las libres de contexto ($\\mathcal{L}_3 \\subsetneq \\mathcal{L}_2$).",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Incluyen a todos los lenguajes generados por las gramáticas libres de contexto.",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Son exactamente aquellos reconocidos por los autómatas finitos no deterministas.",
        "explanation": "Los lenguajes regulares son generados por GR, representados por ER y reconocidos por AF (tanto deterministas como no deterministas). La opción B es falsa porque la relación de inclusión es inversa: las gramáticas regulares son un subconjunto estricto de las libres de contexto ($\\mathcal{L}_3 \\subsetneq \\mathcal{L}_2$).",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Son exactamente aquellos reconocidos por los autómatas finitos deterministas.",
        "explanation": "Los lenguajes regulares son generados por GR, representados por ER y reconocidos por AF (tanto deterministas como no deterministas). La opción B es falsa porque la relación de inclusión es inversa: las gramáticas regulares son un subconjunto estricto de las libres de contexto ($\\mathcal{L}_3 \\subsetneq \\mathcal{L}_2$).",
        "isCorrect": true
      }
    ],
    "theorySummary": "Los lenguajes regulares son generados por GR, representados por ER y reconocidos por AF (tanto deterministas como no deterministas). La opción B es falsa porque la relación de inclusión es inversa: las gramáticas regulares son un subconjunto estricto de las libres de contexto ($\\mathcal{L}_3 \\subsetneq \\mathcal{L}_2$).",
    "sourceCatedra": "Diapositiva 6: Gramáticas Regulares (Cardoso/Tolaba) (Simulacro P2)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.3; Louden Cap. 2",
    "trapAnalysis": "Pregunta de integración de simulacro general."
  },
  {
    "id": "L05-SIM04",
    "lessonId": "L05",
    "lessonTitle": "Lección 05 — Gramáticas Regulares",
    "topic": "Gramáticas Lineales y Lenguajes Regulares",
    "points": 2,
    "questionText": "Dada la gramática con producciones $S \\to aA, \\; A \\to Sb \\mid c$, ¿cuál es su clasificación formal según Chomsky?",
    "options": [
      {
        "id": "A",
        "text": "Es una gramática regular lineal por la derecha.",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Es una gramática regular lineal por la izquierda.",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Es una gramática libre de contexto (Tipo 2) pero NO regular (Tipo 3), porque mezcla producciones lineales a derecha y a izquierda.",
        "explanation": "Una gramática es regular si y solo si es homogéneamente lineal a derecha o lineal a izquierda. Al tener una producción a derecha ($S \\to aA$) y otra a izquierda ($A \\to Sb$), rompe la condición de regularidad y es capaz de generar el lenguaje no regular $\\{a^n c b^n \\mid n \\ge 1\\}$.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Es una gramática dependiente del contexto (Tipo 1).",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Una gramática es regular si y solo si es homogéneamente lineal a derecha o lineal a izquierda. Al tener una producción a derecha ($S \\to aA$) y otra a izquierda ($A \\to Sb$), rompe la condición de regularidad y es capaz de generar el lenguaje no regular $\\{a^n c b^n \\mid n \\ge 1\\}$.",
    "sourceCatedra": "Diapositiva 6: Gramáticas Regulares (Cardoso/Tolaba) (Simulacro P4)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.3; Louden Cap. 2",
    "trapAnalysis": "Pregunta de integración de simulacro general."
  },
  {
    "id": "L05-SIM05",
    "lessonId": "L05",
    "lessonTitle": "Lección 05 — Gramáticas Regulares",
    "topic": "Gramáticas Lineales y Lenguajes Regulares",
    "points": 5,
    "questionText": "En el algoritmo estándar de conversión de un Autómata Finito $M = (Q, \\Sigma, \\delta, q_0, F)$ a una Gramática Regular lineal por la derecha, una transición $\\delta(q_i, a) = q_j$ se traduce como:",
    "options": [
      {
        "id": "A",
        "text": "$A_{q_j} \\to a A_{q_i}$",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "$A_{q_i} \\to a A_{q_j}$",
        "explanation": "Estando en el estado $q_i$ (no terminal $A_{q_i}$), al consumir el símbolo terminal $a$ pasa al estado $q_j$ (no terminal $A_{q_j}$ que queda a la derecha): $A_{q_i} \\to a A_{q_j}$.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "$A_{q_i} \\to A_{q_j} a$",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "$A_{q_i} \\to \\epsilon$",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Estando en el estado $q_i$ (no terminal $A_{q_i}$), al consumir el símbolo terminal $a$ pasa al estado $q_j$ (no terminal $A_{q_j}$ que queda a la derecha): $A_{q_i} \\to a A_{q_j}$.",
    "sourceCatedra": "Diapositiva 6: Gramáticas Regulares (Cardoso/Tolaba) (Simulacro P5)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.3; Louden Cap. 2",
    "trapAnalysis": "Pregunta de integración de simulacro general."
  },
  {
    "id": "L05-SIM06",
    "lessonId": "L05",
    "lessonTitle": "Lección 05 — Gramáticas Regulares",
    "topic": "Gramáticas Lineales y Lenguajes Regulares",
    "points": 8,
    "questionText": "¿Cuál de las siguientes inclusiones describe con exactitud la Jerarquía de Chomsky?",
    "options": [
      {
        "id": "A",
        "text": "$\\text{Tipo 0} \\subsetneq \\text{Tipo 1} \\subsetneq \\text{Tipo 2} \\subsetneq \\text{Tipo 3}$",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "$\\text{Tipo 3} \\subsetneq \\text{Tipo 2} \\subsetneq \\text{Tipo 1} \\subsetneq \\text{Tipo 0}$",
        "explanation": "Los lenguajes regulares (Tipo 3) son el subconjunto más restrictivo, contenidos en los libres de contexto (Tipo 2), estos en los dependientes del contexto (Tipo 1) y estos en los irrestrictos / recursivamente enumerables (Tipo 0).",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "$\\text{Tipo 2} \\subsetneq \\text{Tipo 3} \\subsetneq \\text{Tipo 0} \\subsetneq \\text{Tipo 1}$",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "$\\text{Tipo 3} \\equiv \\text{Tipo 2} \\subsetneq \\text{Tipo 1} \\equiv \\text{Tipo 0}$",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Los lenguajes regulares (Tipo 3) son el subconjunto más restrictivo, contenidos en los libres de contexto (Tipo 2), estos en los dependientes del contexto (Tipo 1) y estos en los irrestrictos / recursivamente enumerables (Tipo 0).",
    "sourceCatedra": "Diapositiva 6: Gramáticas Regulares (Cardoso/Tolaba) (Simulacro P6)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.3; Louden Cap. 2",
    "trapAnalysis": "Pregunta de integración de simulacro general."
  },
  {
    "id": "L06-SIM08",
    "lessonId": "L06",
    "lessonTitle": "Lección 06 — Análisis Léxico",
    "topic": "El Scanner, Búferes, Tokens y Lexemas",
    "points": 5,
    "questionText": "En compiladores, ¿cuál es la diferencia formal entre *Token*, *Lexema* y *Patrón*?",
    "options": [
      {
        "id": "A",
        "text": "El token es la cadena real, el lexema es el objeto lógico y el patrón es el atributo.",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "El token es la categoría sintáctica abstracta, el lexema es la cadena de caracteres real en el código fuente, y el patrón es la expresión regular que define los lexemas válidos.",
        "explanation": "Por definición de Aho y Louden: Patrón = regla formal (ER); Lexema = secuencia concreta de texto; Token = unidad abstracta $\\langle \\text{nombre}, \\text{atributo} \\rangle$ entregada al parser.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "El patrón se almacena en la tabla de símbolos y el token se descarta al encontrar comentarios.",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Son términos sinónimos usados indistintamente.",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Por definición de Aho y Louden: Patrón = regla formal (ER); Lexema = secuencia concreta de texto; Token = unidad abstracta $\\langle \\text{nombre}, \\text{atributo} \\rangle$ entregada al parser.",
    "sourceCatedra": "Diapositiva 10: Análisis Léxico (Cardoso/Tolaba) (Simulacro P8)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.1-3.2; Louden Cap. 2",
    "trapAnalysis": "Pregunta de integración de simulacro general."
  },
  {
    "id": "L06-SIM09",
    "lessonId": "L06",
    "lessonTitle": "Lección 06 — Análisis Léxico",
    "topic": "El Scanner, Búferes, Tokens y Lexemas",
    "points": 8,
    "questionText": "¿Cuál es el beneficio de utilizar un *carácter centinela* (`EOF` o `\\0`) al final de cada mitad en un esquema de doble búfer?",
    "options": [
      {
        "id": "A",
        "text": "Evitar que el código contenga cadenas literales infinitas.",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Reducir las dos comprobaciones por carácter (fin de búfer y carácter leído) a una sola en la mayoría de los pasos.",
        "explanation": "El centinela optimiza el bucle crítico del scanner. Solo cuando se detecta el centinela `EOF` se evalúa si se alcanzó el fin de bloque (recargando la otra mitad) o el fin de archivo real.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Reemplazar a la tabla de símbolos para almacenar variables.",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Sincronizar el reloj del procesador con la lectura de disco.",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      }
    ],
    "theorySummary": "El centinela optimiza el bucle crítico del scanner. Solo cuando se detecta el centinela `EOF` se evalúa si se alcanzó el fin de bloque (recargando la otra mitad) o el fin de archivo real.",
    "sourceCatedra": "Diapositiva 10: Análisis Léxico (Cardoso/Tolaba) (Simulacro P9)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.1-3.2; Louden Cap. 2",
    "trapAnalysis": "Pregunta de integración de simulacro general."
  },
  {
    "id": "L06-SIM10",
    "lessonId": "L06",
    "lessonTitle": "Lección 06 — Análisis Léxico",
    "topic": "El Scanner, Búferes, Tokens y Lexemas",
    "points": 2,
    "questionText": "¿Por qué es indispensable el mecanismo de *preanálisis* (*lookahead*) en el análisis léxico?",
    "options": [
      {
        "id": "A",
        "text": "Para compilar el programa antes de que el usuario lo guarde.",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Porque los lenguajes regulares no pueden procesarse con autómatas finitos.",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Porque a menudo se debe leer uno o más caracteres adicionales para determinar inequívocamente el final y la identidad de un token (ej. diferenciar `=` de `==`).",
        "explanation": "Si el scanner lee `>`, no puede saber si el token es `>` o `>=` hasta inspeccionar el carácter siguiente.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Para calcular de antemano el conjunto SIGUIENTE de la gramática.",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Si el scanner lee `>`, no puede saber si el token es `>` o `>=` hasta inspeccionar el carácter siguiente.",
    "sourceCatedra": "Diapositiva 10: Análisis Léxico (Cardoso/Tolaba) (Simulacro P10)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.1-3.2; Louden Cap. 2",
    "trapAnalysis": "Pregunta de integración de simulacro general."
  },
  {
    "id": "L06-SIM11",
    "lessonId": "L06",
    "lessonTitle": "Lección 06 — Análisis Léxico",
    "topic": "El Scanner, Búferes, Tokens y Lexemas",
    "points": 5,
    "questionText": "¿Cómo distingue un analizador léxico entre una palabra reservada (como `while`) y un identificador ordinario, dado que ambos coinciden con el patrón `letra(letra|digito)*`?",
    "options": [
      {
        "id": "A",
        "text": "Exigiendo que las palabras reservadas se escriban en un archivo separado.",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Inicializando la Tabla de Símbolos con las palabras reservadas preinsertadas con su token específico, para consultarla antes de emitir un identificador genérico.",
        "explanation": "Técnica canónica de Aho: las palabras clave se precargan en la tabla de símbolos. Si el lexema coincide con una entrada existente, se retorna el token de la palabra clave (`WHILE`); si no, se emite `id`.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Mediante retroceso sintáctico en el parser.",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Modificando el hardware del procesador.",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Técnica canónica de Aho: las palabras clave se precargan en la tabla de símbolos. Si el lexema coincide con una entrada existente, se retorna el token de la palabra clave (`WHILE`); si no, se emite `id`.",
    "sourceCatedra": "Diapositiva 10: Análisis Léxico (Cardoso/Tolaba) (Simulacro P11)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.1-3.2; Louden Cap. 2",
    "trapAnalysis": "Pregunta de integración de simulacro general."
  },
  {
    "id": "L07-SIM13",
    "lessonId": "L07",
    "lessonTitle": "Lección 07 — PLY Lex y Autómatas con Pila",
    "topic": "Especificaciones Lex y Autómatas con Pila (AP)",
    "points": 2,
    "questionText": "En una especificación de Lex/PLY, ¿cómo se define formalmente la expresión regular que reconoce números enteros positivos?",
    "options": [
      {
        "id": "A",
        "text": "`[0-9]+`",
        "explanation": "Pregunta real del examen 2025. `[0-9]` define el rango de dígitos y `+` exige al menos una aparición positiva.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "`[0|1|2|3|4|5|6|7|8|9]+`",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "`[0..9]+`",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "`[a-zA-Z0-9]*`",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Pregunta real del examen 2025. `[0-9]` define el rango de dígitos y `+` exige al menos una aparición positiva.",
    "sourceCatedra": "Diapositiva 7: Autómatas a Pila / PLY Lex (Cardoso/Tolaba) (Simulacro P13)",
    "sourceBook": "Peter Linz Cap. 7; Dragon Book Cap. 3.5",
    "trapAnalysis": "Pregunta de integración de simulacro general."
  },
  {
    "id": "L07-SIM14",
    "lessonId": "L07",
    "lessonTitle": "Lección 07 — PLY Lex y Autómatas con Pila",
    "topic": "Especificaciones Lex y Autómatas con Pila (AP)",
    "points": 5,
    "questionText": "Dado un Autómata con Pila que reconoce el lenguaje $L = \\{ w c w^R \\mid w \\in \\{a, b\\}^* \\}$:**  \n**Indique cuál o cuáles cadenas son aceptadas:",
    "options": [
      {
        "id": "A",
        "text": "`bacba`",
        "explanation": "Para $w = \\epsilon$, la cadena es `c`. Para $w = \\text{'bb'}$, $w^R = \\text{'bb'}$, la cadena es `bbcbb`.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "`abc`",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "$\\epsilon$",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "`c`",
        "explanation": "Para $w = \\epsilon$, la cadena es `c`. Para $w = \\text{'bb'}$, $w^R = \\text{'bb'}$, la cadena es `bbcbb`.",
        "isCorrect": true
      }
    ],
    "theorySummary": "Para $w = \\epsilon$, la cadena es `c`. Para $w = \\text{'bb'}$, $w^R = \\text{'bb'}$, la cadena es `bbcbb`.",
    "sourceCatedra": "Diapositiva 7: Autómatas a Pila / PLY Lex (Cardoso/Tolaba) (Simulacro P14)",
    "sourceBook": "Peter Linz Cap. 7; Dragon Book Cap. 3.5",
    "trapAnalysis": "Pregunta de integración de simulacro general."
  },
  {
    "id": "L07-SIM15",
    "lessonId": "L07",
    "lessonTitle": "Lección 07 — PLY Lex y Autómatas con Pila",
    "topic": "Especificaciones Lex y Autómatas con Pila (AP)",
    "points": 8,
    "questionText": "Respecto al poder computacional de los Autómatas con Pila Deterministas (APD) frente a los No Deterministas (APND):",
    "options": [
      {
        "id": "A",
        "text": "Son equivalentes en poder, de forma análoga a los AFD y AFND.",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Los APD son estrictamente menos potentes que los APND ($APD \\subsetneq APND$).",
        "explanation": "A diferencia de los autómatas finitos, el no determinismo en autómatas con pila amplía la clase de lenguajes reconocibles (ej. palíndromos sin marcador central).",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Los APD son más potentes porque no admiten ambigüedad.",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Los APD solo pueden reconocer lenguajes regulares.",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      }
    ],
    "theorySummary": "A diferencia de los autómatas finitos, el no determinismo en autómatas con pila amplía la clase de lenguajes reconocibles (ej. palíndromos sin marcador central).",
    "sourceCatedra": "Diapositiva 7: Autómatas a Pila / PLY Lex (Cardoso/Tolaba) (Simulacro P15)",
    "sourceBook": "Peter Linz Cap. 7; Dragon Book Cap. 3.5",
    "trapAnalysis": "Pregunta de integración de simulacro general."
  },
  {
    "id": "L07-SIM16",
    "lessonId": "L07",
    "lessonTitle": "Lección 07 — PLY Lex y Autómatas con Pila",
    "topic": "Especificaciones Lex y Autómatas con Pila (AP)",
    "points": 2,
    "questionText": "Durante una transición formal en un Autómata con Pila $(p, a, X; q, YZ)$:",
    "options": [
      {
        "id": "A",
        "text": "Se lee $a$, se desapila $YZ$ y se apila $X$.",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Se lee $a$ de la entrada, se extrae $X$ del tope de la pila, se cambia al estado $q$ y se apila $YZ$, quedando $Y$ en la cima.",
        "explanation": "Se desapila el tope $X$ y se inserta la cadena $YZ$, quedando el símbolo de más a la izquierda ($Y$) en la cima de la pila.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Se comprueba si $X$ está en el fondo de la pila.",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Se descartan $p$ y $q$.",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Se desapila el tope $X$ y se inserta la cadena $YZ$, quedando el símbolo de más a la izquierda ($Y$) en la cima de la pila.",
    "sourceCatedra": "Diapositiva 7: Autómatas a Pila / PLY Lex (Cardoso/Tolaba) (Simulacro P16)",
    "sourceBook": "Peter Linz Cap. 7; Dragon Book Cap. 3.5",
    "trapAnalysis": "Pregunta de integración de simulacro general."
  },
  {
    "id": "L07-SIM18",
    "lessonId": "L07",
    "lessonTitle": "Lección 07 — PLY Lex y Autómatas con Pila",
    "topic": "Especificaciones Lex y Autómatas con Pila (AP)",
    "points": 8,
    "questionText": "Si en PLY Lex dos reglas pueden emparejar la entrada actual, ¿qué regla de desambiguación tiene prioridad absoluta?",
    "options": [
      {
        "id": "A",
        "text": "La regla que tenga menos líneas de código.",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "La regla del emparejamiento más largo (*longest match*).",
        "explanation": "Lex siempre prioriza la regla que consuma la mayor cantidad de caracteres continua de la entrada.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "La regla que aparezca última en el archivo.",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "La regla que use expresiones regulares con `*`.",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Lex siempre prioriza la regla que consuma la mayor cantidad de caracteres continua de la entrada.",
    "sourceCatedra": "Diapositiva 7: Autómatas a Pila / PLY Lex (Cardoso/Tolaba) (Simulacro P18)",
    "sourceBook": "Peter Linz Cap. 7; Dragon Book Cap. 3.5",
    "trapAnalysis": "Pregunta de integración de simulacro general."
  },
  {
    "id": "L08-SIM23",
    "lessonId": "L08",
    "lessonTitle": "Lección 08 — Gramáticas Libres de Contexto",
    "topic": "Árboles de Derivación y Ambigüedad",
    "points": 5,
    "questionText": "Una derivación en la cual en cada paso se sustituye el símbolo no terminal situado más a la derecha se denomina:",
    "options": [
      {
        "id": "A",
        "text": "Derivación leftmost o predictiva.",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Derivación canónica o rightmost ($\\Rightarrow_{rm}$).",
        "explanation": "Por definición estándar de Aho, la derivación más a la derecha es la derivación canónica, base del análisis sintáctico ascendente.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Derivación lineal por la izquierda.",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Reducción LR(0).",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Por definición estándar de Aho, la derivación más a la derecha es la derivación canónica, base del análisis sintáctico ascendente.",
    "sourceCatedra": "Diapositiva 8: Gramáticas Libres de Contexto (Cardoso/Tolaba) (Simulacro P23)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 4.2; Louden Cap. 3",
    "trapAnalysis": "Pregunta de integración de simulacro general."
  },
  {
    "id": "L08-SIM24",
    "lessonId": "L08",
    "lessonTitle": "Lección 08 — Gramáticas Libres de Contexto",
    "topic": "Árboles de Derivación y Ambigüedad",
    "points": 8,
    "questionText": "El problema del *else colgante* (*dangling-else*) demuestra que:",
    "options": [
      {
        "id": "A",
        "text": "Los condicionales no pueden expresarse con gramáticas libres de contexto.",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Una gramática puede ser ambigua para sentencias anidadas y requerir reglas adicionales de desambiguación.",
        "explanation": "Una sentencia con dos `if` y un solo `else` admite dos árboles de sintaxis diferentes si la gramática no está desambiguada.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "El scanner debe eliminar los `else`.",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "El compilador requiere un autómata finito determinista.",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Una sentencia con dos `if` y un solo `else` admite dos árboles de sintaxis diferentes si la gramática no está desambiguada.",
    "sourceCatedra": "Diapositiva 8: Gramáticas Libres de Contexto (Cardoso/Tolaba) (Simulacro P24)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 4.2; Louden Cap. 3",
    "trapAnalysis": "Pregunta de integración de simulacro general."
  },
  {
    "id": "L09-SIM26",
    "lessonId": "L09",
    "lessonTitle": "Lección 09 — Máquinas de Turing",
    "topic": "Máquinas de Turing Estándar y Transductoras",
    "points": 5,
    "questionText": "¿Cuál de los siguientes lenguajes puede ser reconocido por una Máquina de Turing pero NO por un Autómata con Pila?",
    "options": [
      {
        "id": "A",
        "text": "$L = \\{ a^n b^m \\mid n, m \\ge 1 \\}$",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "$L = \\{ a^n b^n \\mid n \\ge 0 \\}$",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "$L = \\{ a^n b^n c^n \\mid n \\ge 1 \\}$",
        "explanation": "El lenguaje $\\{ a^n b^n c^n \\}$ requiere coordinar tres cantidades iguales, excediendo la capacidad de una pila LIFO pero accesible para una MT mediante barridos sobre su cinta.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "$L = \\{ w c w^R \\mid w \\in \\{a, b\\}^* \\}$",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      }
    ],
    "theorySummary": "El lenguaje $\\{ a^n b^n c^n \\}$ requiere coordinar tres cantidades iguales, excediendo la capacidad de una pila LIFO pero accesible para una MT mediante barridos sobre su cinta.",
    "sourceCatedra": "Diapositiva 9: Máquinas de Turing (Cardoso/Tolaba) (Simulacro P26)",
    "sourceBook": "Peter Linz Cap. 9-11; Hopcroft et al. Cap. 8",
    "trapAnalysis": "Pregunta de integración de simulacro general."
  },
  {
    "id": "L09-SIM27",
    "lessonId": "L09",
    "lessonTitle": "Lección 09 — Máquinas de Turing",
    "topic": "Máquinas de Turing Estándar y Transductoras",
    "points": 8,
    "questionText": "Una Máquina de Turing que procesa una entrada en la cinta y al detenerse deja grabado el resultado numérico de una función se clasifica como:",
    "options": [
      {
        "id": "A",
        "text": "Aceptadora de estados finitos.",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Transductora de cómputo de funciones.",
        "explanation": "En la terminología de Peter Linz y la cátedra, las MT transductoras calculan funciones ($f: \\Sigma^* \\to \\Gamma^*$), en contraposición a las aceptadoras que solo deciden pertenencia a un lenguaje.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Parser descendente recursivo.",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Generadora regular de código.",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      }
    ],
    "theorySummary": "En la terminología de Peter Linz y la cátedra, las MT transductoras calculan funciones ($f: \\Sigma^* \\to \\Gamma^*$), en contraposición a las aceptadoras que solo deciden pertenencia a un lenguaje.",
    "sourceCatedra": "Diapositiva 9: Máquinas de Turing (Cardoso/Tolaba) (Simulacro P27)",
    "sourceBook": "Peter Linz Cap. 9-11; Hopcroft et al. Cap. 8",
    "trapAnalysis": "Pregunta de integración de simulacro general."
  },
  {
    "id": "L09-SIM28",
    "lessonId": "L09",
    "lessonTitle": "Lección 09 — Máquinas de Turing",
    "topic": "Máquinas de Turing Estándar y Transductoras",
    "points": 2,
    "questionText": "Respecto a las variantes de Máquinas de Turing multicinta frente a la estándar de una cinta:",
    "options": [
      {
        "id": "A",
        "text": "La multicinta puede resolver problemas indecidibles.",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "La multicinta es estrictamente más potente en lenguajes computables.",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Son formalmente equivalentes en poder computacional; ambas reconocen la misma familia de lenguajes.",
        "explanation": "Teorema clásico de equivalencia: cualquier cómputo en $k$ cintas puede simularse en una sola cinta mediante pistas y marcadores.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "La multicinta viola la tesis de Turing.",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Teorema clásico de equivalencia: cualquier cómputo en $k$ cintas puede simularse en una sola cinta mediante pistas y marcadores.",
    "sourceCatedra": "Diapositiva 9: Máquinas de Turing (Cardoso/Tolaba) (Simulacro P28)",
    "sourceBook": "Peter Linz Cap. 9-11; Hopcroft et al. Cap. 8",
    "trapAnalysis": "Pregunta de integración de simulacro general."
  },
  {
    "id": "L09-SIM29",
    "lessonId": "L09",
    "lessonTitle": "Lección 09 — Máquinas de Turing",
    "topic": "Máquinas de Turing Estándar y Transductoras",
    "points": 5,
    "questionText": "El Problema de la Parada (*Halting Problem*) demostrado por Alan Turing establece que:",
    "options": [
      {
        "id": "A",
        "text": "Todos los programas de computadora se detendrán tarde o temprano.",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "No existe ningún algoritmo general que pueda determinar en tiempo finito si una MT arbitraria se detendrá para una entrada dada.",
        "explanation": "Es el resultado fundamental de la indecidibilidad demostrada por diagonalización en 1936.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Las máquinas de Turing no pueden detenerse en estados de aceptación.",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Solo los programas con bucles `for` son decidibles.",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Es el resultado fundamental de la indecidibilidad demostrada por diagonalización en 1936.",
    "sourceCatedra": "Diapositiva 9: Máquinas de Turing (Cardoso/Tolaba) (Simulacro P29)",
    "sourceBook": "Peter Linz Cap. 9-11; Hopcroft et al. Cap. 8",
    "trapAnalysis": "Pregunta de integración de simulacro general."
  },
  {
    "id": "L10-SIM33",
    "lessonId": "L10",
    "lessonTitle": "Lección 10 — Análisis Sintáctico y Limpieza",
    "topic": "Descenso Recursivo, Limpieza, Recursión y Factorización",
    "points": 8,
    "questionText": "Dada la gramática $A \\to \\alpha \\beta \\mid \\alpha \\gamma$, ¿cuál es el resultado exacto tras aplicar factorización por la izquierda?",
    "options": [
      {
        "id": "A",
        "text": "$A \\to \\alpha A'; \\; A' \\to \\beta \\mid \\gamma$",
        "explanation": "Pregunta real de parcial 2025. Se aísla el prefijo común $\\alpha$ y se delegan los sufijos a la nueva variable $A'$.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "$A \\to \\beta \\mid \\gamma A'; \\; A' \\to \\alpha \\mid \\epsilon$",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "$A \\to \\beta A'; \\; A' \\to \\gamma A'$",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "$A \\to \\alpha A'; \\; A' \\to \\beta \\mid \\gamma \\mid \\epsilon$",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Pregunta real de parcial 2025. Se aísla el prefijo común $\\alpha$ y se delegan los sufijos a la nueva variable $A'$.",
    "sourceCatedra": "Diapositiva 11: Análisis Sintáctico (Cardoso/Tolaba) (Simulacro P33)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 4.3-4.4; Louden Cap. 4",
    "trapAnalysis": "Pregunta de integración de simulacro general."
  },
  {
    "id": "L10-SIM34",
    "lessonId": "L10",
    "lessonTitle": "Lección 10 — Análisis Sintáctico y Limpieza",
    "topic": "Descenso Recursivo, Limpieza, Recursión y Factorización",
    "points": 2,
    "questionText": "¿Qué técnica se utiliza para eliminar la recursividad indirecta por la izquierda en la gramática $A \\to B d, \\; B \\to A e \\mid d$?",
    "options": [
      {
        "id": "A",
        "text": "Sustitución de $A$ en la segunda regla y eliminación de la recursividad directa resultante en $B$.",
        "explanation": "Pregunta real de parcial 2025. Al sustituir $A$ en $B \\to A e$, se obtiene $B \\to B d e \\mid d$, lo que expone la recursión directa para eliminarla con $B'$.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "No existe recursividad izquierda indirecta en la gramática.",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Sustitución de $B$ en la primera regla sin modificar $B$.",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Conversión a autómata finito.",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Pregunta real de parcial 2025. Al sustituir $A$ en $B \\to A e$, se obtiene $B \\to B d e \\mid d$, lo que expone la recursión directa para eliminarla con $B'$.",
    "sourceCatedra": "Diapositiva 11: Análisis Sintáctico (Cardoso/Tolaba) (Simulacro P34)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 4.3-4.4; Louden Cap. 4",
    "trapAnalysis": "Pregunta de integración de simulacro general."
  },
  {
    "id": "L10-SIM35",
    "lessonId": "L10",
    "lessonTitle": "Lección 10 — Análisis Sintáctico y Limpieza",
    "topic": "Descenso Recursivo, Limpieza, Recursión y Factorización",
    "points": 5,
    "questionText": "Si una gramática posee la regla $E \\to E + T \\mid T$, ¿cuál es su transformación no recursiva por la izquierda?",
    "options": [
      {
        "id": "A",
        "text": "$E \\to T E'; \\; E' \\to + T E' \\mid \\epsilon$",
        "explanation": "Aplicación canónica de la fórmula: $A \\to A \\alpha \\mid \\beta \\implies A \\to \\beta A', \\; A' \\to \\alpha A' \\mid \\epsilon$.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "$E \\to + T E'; \\; E' \\to T \\mid \\epsilon$",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "$E \\to E' T; \\; E' \\to + T E'$",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "$E \\to T \\mid + T$",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Aplicación canónica de la fórmula: $A \\to A \\alpha \\mid \\beta \\implies A \\to \\beta A', \\; A' \\to \\alpha A' \\mid \\epsilon$.",
    "sourceCatedra": "Diapositiva 11: Análisis Sintáctico (Cardoso/Tolaba) (Simulacro P35)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 4.3-4.4; Louden Cap. 4",
    "trapAnalysis": "Pregunta de integración de simulacro general."
  },
  {
    "id": "L11-SIM38",
    "lessonId": "L11",
    "lessonTitle": "Lección 11 — Sintáctico Predictivo LL(1)",
    "topic": "Conjuntos PRIMERO, SIGUIENTE y Tabla M",
    "points": 5,
    "questionText": "Al construir la tabla predictiva $M[A, a]$, si una producción es $A \\to \\alpha$ y $\\epsilon \\in \\text{PRIMERO}(\\alpha)$, ¿en qué celdas debe añadirse dicha producción?",
    "options": [
      {
        "id": "A",
        "text": "En la columna del terminal $\\epsilon$.",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "En la fila de $A$, para cada columna de los terminales pertenecientes a $\\text{SIGUIENTE}(A)$ (incluyendo el centinela '$').",
        "explanation": "Como $\\alpha$ puede anularse, el parser debe saber qué hacer cuando ve los símbolos que pueden seguir legítimamente a $A$ en la entrada ($\\text{SIGUIENTE}(A)$).",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "En todas las columnas de la tabla.",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "En ninguna celda, pues las derivaciones vacías se descartan en LL(1).",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Como $\\alpha$ puede anularse, el parser debe saber qué hacer cuando ve los símbolos que pueden seguir legítimamente a $A$ en la entrada ($\\text{SIGUIENTE}(A)$).",
    "sourceCatedra": "Diapositiva 12: Análisis Sintáctico LL(1) (Cardoso/Tolaba) (Simulacro P38)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 4.4.3-4.4.4; Louden Cap. 4.5",
    "trapAnalysis": "Pregunta de integración de simulacro general."
  },
  {
    "id": "L11-SIM39",
    "lessonId": "L11",
    "lessonTitle": "Lección 11 — Sintáctico Predictivo LL(1)",
    "topic": "Conjuntos PRIMERO, SIGUIENTE y Tabla M",
    "points": 8,
    "questionText": "En la ejecución de un parser predictivo no recursivo con pila, si la cima contiene el no terminal $X$, la entrada actual es $a$, y la tabla indica $M[X, a] = \\{ X \\to U V W \\}$:",
    "options": [
      {
        "id": "A",
        "text": "Se consume el token $a$ de inmediato.",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Se extrae $X$ de la pila y se apila $UVW$ en orden inverso ($W$, luego $V$, luego $U$), dejando a $U$ en la cima.",
        "explanation": "Para procesar una derivación leftmost, el primer símbolo del lado derecho ($U$) debe quedar en el tope de la pila LIFO.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Se detiene el análisis anunciando éxito.",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Se apila $X$ nuevamente.",
        "explanation": "Distractor teórico.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Para procesar una derivación leftmost, el primer símbolo del lado derecho ($U$) debe quedar en el tope de la pila LIFO.",
    "sourceCatedra": "Diapositiva 12: Análisis Sintáctico LL(1) (Cardoso/Tolaba) (Simulacro P39)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 4.4.3-4.4.4; Louden Cap. 4.5",
    "trapAnalysis": "Pregunta de integración de simulacro general."
  },
  {
    "id": "L10-PRAC01",
    "lessonId": "L10",
    "lessonTitle": "Lección 10 — Análisis Sintáctico y Limpieza",
    "topic": "Práctica de Examen: Eliminación de Recursividad Izquierda Directa",
    "points": 8,
    "questionText": "Dada la siguiente gramática con recursividad por la izquierda en múltiples alternativas:\n$$E \\to E + T \\mid E - T \\mid T$$\n¿Cuál es el conjunto exacto de producciones que resulta al aplicar el algoritmo estándar de eliminación de recursividad izquierda de cátedra?",
    "options": [
      {
        "id": "A",
        "text": "$E \\to T E', \\quad E' \\to + T E' \\mid - T E' \\mid \\epsilon$",
        "explanation": "Identificamos las alternativas recursivas $E \\to E \\alpha$ con $\\alpha_1 = + T$ y $\\alpha_2 = - T$, y la alternativa base $\\beta = T$. Según la fórmula canónica de cátedra, se reescribe como $E \\to \\beta E'$ y $E' \\to \\alpha_1 E' \\mid \\alpha_2 E' \\mid \\epsilon$.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "$E \\to + T E' \\mid - T E' \\mid T, \\quad E' \\to E \\mid \\epsilon$",
        "explanation": "Error: no se debe iniciar la derivación de $E$ con los operadores '+' ni '-', y $E'$ no debe volver a invocar a $E$.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "$E \\to E' T, \\quad E' \\to + T E' \\mid \\epsilon$",
        "explanation": "Error: ubicar $E'$ a la izquierda de $T$ ($E' T$) genera recursividad izquierda rota y omite el operador '-'.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "$E \\to T + E' \\mid T - E', \\quad E' \\to \\epsilon$",
        "explanation": "Error: esta forma solo permitiría derivar expresiones de longitud fija con un único operador y anula la recursividad.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Para $A \\to A \\alpha_1 \\mid A \\alpha_2 \\mid \\beta$, la regla de transformación de cátedra es: $A \\to \\beta A'$ y $A' \\to \\alpha_1 A' \\mid \\alpha_2 A' \\mid \\epsilon$.",
    "sourceCatedra": "Diapositiva 11: Análisis Sintáctico - Eliminación de Recursión Izquierda (Cardoso/Tolaba)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 4.3.3; Louden Cap. 4.3",
    "trapAnalysis": "Confundir el rol de las partes recursivas $\\alpha$ con las partes base no recursivas $\\beta$."
  },
  {
    "id": "L10-PRAC02",
    "lessonId": "L10",
    "lessonTitle": "Lección 10 — Análisis Sintáctico y Limpieza",
    "topic": "Práctica de Examen: Factorización por la Izquierda (Dangling-Else)",
    "points": 8,
    "questionText": "Dada la especificación de sentencias condicionales con prefijo común:\n$$S \\to \\text{if } C \\text{ then } S \\text{ else } S \\mid \\text{if } C \\text{ then } S \\mid a$$\nAl aplicar el algoritmo de factorización por la izquierda (*Left Factoring*), la gramática resultante es:",
    "options": [
      {
        "id": "A",
        "text": "$S \\to \\text{if } C \\text{ then } S \\; S' \\mid a, \\quad S' \\to \\text{else } S \\mid \\epsilon$",
        "explanation": "El prefijo común más largo entre las dos primeras alternativas es $\\alpha = \\text{if } C \\text{ then } S$. Las colas restantes son $\\beta_1 = \\text{else } S$ y $\\beta_2 = \\epsilon$. Por ende, $S \\to \\alpha S' \\mid a$ y $S' \\to \\text{else } S \\mid \\epsilon$.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "$S \\to \\text{if } C \\text{ then } S' \\mid a, \\quad S' \\to S \\text{ else } S \\mid S$",
        "explanation": "Error: no se factorizó el prefijo completo 'if C then S', dejando 'S' fuera del factor común.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "$S \\to \\text{if } C \\text{ then } S \\; S', \\quad S' \\to \\text{else } S \\mid a$",
        "explanation": "Error: la alternativa $a$ no comparte el prefijo condicional y debe permanecer como alternativa independiente en $S$.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "$S \\to S' \\text{ else } S \\mid a, \\quad S' \\to \\text{if } C \\text{ then } S$",
        "explanation": "Error: la factorización por la izquierda debe aislar el prefijo en el inicio de la producción, no el sufijo.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Para $A \\to \\alpha \\beta_1 \\mid \\alpha \\beta_2 \\mid \\gamma$, se aísla el prefijo común más largo $\\alpha$: $A \\to \\alpha A' \\mid \\gamma$ y $A' \\to \\beta_1 \\mid \\beta_2$ (donde si una rama coincide exactamente con $\\alpha$, su cola es $\\epsilon$).",
    "sourceCatedra": "Diapositiva 11: Análisis Sintáctico - Factorización Izquierda (Cardoso/Tolaba)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 4.3.4; Louden Cap. 4.3",
    "trapAnalysis": "No considerar que la alternativa corta $\\text{if } C \\text{ then } S$ aporta la producción vacía $\\epsilon$ en el nuevo no terminal $S'$."
  },
  {
    "id": "L10-PRAC03",
    "lessonId": "L10",
    "lessonTitle": "Lección 10 — Análisis Sintáctico y Limpieza",
    "topic": "Práctica de Examen: Limpieza de Gramáticas en Dos Fases",
    "points": 8,
    "questionText": "Dada la siguiente gramática con axioma $S$:\n$$S \\to A B \\mid c$$\n$$A \\to a A$$\n$$B \\to b$$\n$$C \\to c S$$\nAl aplicar rigurosamente el algoritmo de limpieza de dos fases de la cátedra (Fase 1: eliminación de símbolos no generativos; Fase 2: eliminación de símbolos inalcanzables), ¿qué gramática reducida equivalente se obtiene?",
    "options": [
      {
        "id": "A",
        "text": "Únicamente la producción: $S \\to c$.",
        "explanation": "En la Fase 1, $A$ no tiene caso base terminal, por lo que $A$ no es generativo y se elimina. Al desaparecer $A$, la producción $S \\to A B$ se destruye, quedando solo $S \\to c$. En la Fase 2, partiendo de $S$, los símbolos $B$ y $C$ son inalcanzables. La gramática limpia final es exclusivamente $S \\to c$.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "$S \\to c$ junto con $B \\to b$.",
        "explanation": "Error: aunque $B$ es generativo ($B \\to b$), en la Fase 2 resulta completamente inalcanzable desde el axioma $S$ y debe ser descartado.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "$S \\to A B \\mid c$ y $B \\to b$.",
        "explanation": "Error: no se detectó que $A \\to a A$ entra en ciclo infinito sin derivar nunca a terminales (no generativo).",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "$S \\to c$ y $C \\to c S$.",
        "explanation": "Error: $C$ puede alcanzar a $S$, pero la condición de alcanzabilidad exige que sea alcanzable DESDE el axioma $S$ ($S \\Rightarrow^* \\alpha C \\beta$).",
        "isCorrect": false
      }
    ],
    "theorySummary": "La limpieza exige dos fases estrictas: 1) Eliminar símbolos no generativos (que no derivan en terminales). 2) Eliminar símbolos inalcanzables desde el axioma $S$ ($S \\not\\Rightarrow^* \\alpha X \\beta$).",
    "sourceCatedra": "Diapositiva 11: Limpieza de Gramáticas - Símbolos Inútiles (Cardoso/Tolaba)",
    "sourceBook": "Louden Cap. 4.2; Hopcroft, Motwani & Ullman Cap. 7.1",
    "trapAnalysis": "Confundir que un no terminal derive en el axioma con que sea alcanzable desde el axioma."
  },
  {
    "id": "L10-PRAC04",
    "lessonId": "L10",
    "lessonTitle": "Lección 10 — Análisis Sintáctico y Limpieza",
    "topic": "Práctica de Examen: Eliminación de Recursividad Izquierda Indirecta",
    "points": 8,
    "questionText": "Dada la siguiente gramática con ciclo de recursividad indirecta entre los no terminales ordenados $(S, A)$:\n$$S \\to A a \\mid b$$\n$$A \\to S c \\mid d$$\nAl aplicar el algoritmo sistemático de cátedra, ¿cuál es la gramática transformada sin recursividad izquierda?",
    "options": [
      {
        "id": "A",
        "text": "$S \\to A a \\mid b, \\quad A \\to b c A' \\mid d A', \\quad A' \\to a c A' \\mid \\epsilon$",
        "explanation": "Paso 1: $S$ no tiene recursión directa. Paso 2: sustituimos $S$ en la regla de $A$: $A \\to (A a \\mid b) c \\mid d \\implies A \\to A a c \\mid b c \\mid d$. Ahora $A$ tiene recursión directa con $\\alpha = a c$ y bases $\\beta \\in \\{b c, d\\}$. Eliminando la recursión directa en $A$: $A \\to b c A' \\mid d A'$ y $A' \\to a c A' \\mid \\epsilon$.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "$S \\to b S', \\quad S' \\to a c S' \\mid \\epsilon, \\quad A \\to d$",
        "explanation": "Error: no se respetó el orden sistemático de los no terminales y se alteraron arbitrariamente las reglas de $S$.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "$S \\to A a \\mid b, \\quad A \\to A a c \\mid b c \\mid d$",
        "explanation": "Error: este es solo el paso intermedio de sustitución; falta eliminar la recursividad directa creada sobre $A$.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "$S \\to A a \\mid b, \\quad A \\to d A', \\quad A' \\to c A' \\mid \\epsilon$",
        "explanation": "Error: se omitió el término sustituido $b c$ proveniente de la regla $S \\to b$.",
        "isCorrect": false
      }
    ],
    "theorySummary": "El algoritmo sistemático ordena los no terminales $(A_1, \\dots, A_n)$. Para cada par $j < i$, sustituye $A_j$ en las reglas de $A_i$. Una vez expuesta la recursividad directa sobre $A_i$, la elimina con un nuevo no terminal $A_i'$.",
    "sourceCatedra": "Diapositiva 11: Análisis Sintáctico - Recursividad Indirecta (Cardoso/Tolaba)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 4.3.3 Algoritmo 4.19",
    "trapAnalysis": "Detenerse en la sustitución intermedia sin resolver la recursión directa resultante en el no terminal sustituido."
  },
  {
    "id": "L11-PRAC01",
    "lessonId": "L11",
    "lessonTitle": "Lección 11 — Sintáctico Predictivo LL(1)",
    "topic": "Práctica de Examen: Cálculo Formal de PRIMERO con No Terminales Anulables",
    "points": 8,
    "questionText": "Dada la siguiente gramática con producciones anulables:\n$$S \\to A B C$$\n$$A \\to a \\mid \\epsilon$$\n$$B \\to b \\mid \\epsilon$$\n$$C \\to c \\mid d$$\n¿Cuál es el conjunto $\\text{PRIMERO}(S)$ calculado formalmente?",
    "options": [
      {
        "id": "A",
        "text": "$\\{a, b, c, d\\}$",
        "explanation": "$\\text{PRIMERO}(A) = \\{a, \\epsilon\\}$. Como $A$ es anulable (contiene $\\epsilon$), se agrega $\\text{PRIMERO}(B) \\setminus \\{\\epsilon\\} = \\{b\\}$. Como $B$ también es anulable, se continúa evaluando y se agrega $\\text{PRIMERO}(C) = \\{c, d\\}$. Dado que $C$ no es anulable (no tiene $\\epsilon$), la propagación se detiene y $\\epsilon \\notin \\text{PRIMERO}(S)$. Resultado: $\\{a, b, c, d\\}$.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "$\\{a, \\epsilon\\}$",
        "explanation": "Error común: detenerse en el primer no terminal $A$ sin propagar hacia $B$ y $C$ a pesar de que $A$ contiene $\\epsilon$.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "$\\{a, b, c, d, \\epsilon\\}$",
        "explanation": "Error: $\\epsilon$ solo pertenecería a $\\text{PRIMERO}(S)$ si TODOS los símbolos del lado derecho ($A$, $B$ y $C$) fueran anulables simultáneamente, lo cual no ocurre porque $C$ no deriva en $\\epsilon$.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "$\\{c, d\\}$",
        "explanation": "Error: ignorar los terminales iniciales 'a' y 'b' producidos por las alternativas no vacías de $A$ y $B$.",
        "isCorrect": false
      }
    ],
    "theorySummary": "$\\text{PRIMERO}(X_1 X_2 \\dots X_k)$ contiene $\\text{PRIMERO}(X_1) \\setminus \\{\\epsilon\\}$. Si $X_1$ es anulable, se añade $\\text{PRIMERO}(X_2) \\setminus \\{\\epsilon\\}$, y así sucesivamente. $\\epsilon$ solo se añade si TODOS los $X_i$ son anulables.",
    "sourceCatedra": "Diapositiva 12: Conjuntos PRIMERO y SIGUIENTE (Cardoso/Tolaba)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 4.4.2; Louden Cap. 4.5",
    "trapAnalysis": "Agregar $\\epsilon$ a $\\text{PRIMERO}(S)$ creyendo que la anulación de algunos símbolos arrastra automáticamente la anulación total de la cadena."
  },
  {
    "id": "L11-PRAC02",
    "lessonId": "L11",
    "lessonTitle": "Lección 11 — Sintáctico Predictivo LL(1)",
    "topic": "Práctica de Examen: Cálculo Completo de Conjuntos SIGUIENTE",
    "points": 8,
    "questionText": "Dada la gramática estándar de expresiones aritméticas LL(1):\n$$E \\to T E'$$\n$$E' \\to + T E' \\mid \\epsilon$$\n$$T \\to F T'$$\n$$T' \\to * F T' \\mid \\epsilon$$\n$$F \\to ( E ) \\mid \\text{id}$$\n¿Cuáles son los conjuntos exactos $\\text{SIGUIENTE}(E)$ y $\\text{SIGUIENTE}(E')$?",
    "options": [
      {
        "id": "A",
        "text": "$\\text{SIGUIENTE}(E) = \\text{SIGUIENTE}(E') = \\{ ) , \\$ \\}$",
        "explanation": "1) $E$ es el axioma de inicio $\\implies \\$ \\in \\text{SIGUIENTE}(E)$. 2) En la producción $F \\to ( E )$, el símbolo terminal ')' sigue a $E \\implies ) \\in \\text{SIGUIENTE}(E)$. Por tanto, $\\text{SIGUIENTE}(E) = \\{ ), \\$ \\}$. 3) En $E \\to T E'$, $E'$ aparece al final de la producción $\\implies$ todo $\\text{SIGUIENTE}(E)$ se transfiere a $\\text{SIGUIENTE}(E')$. Así, $\\text{SIGUIENTE}(E') = \\{ ), \\$ \\}$.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "$\\text{SIGUIENTE}(E) = \\{ + \\}, \\quad \\text{SIGUIENTE}(E') = \\{ \\epsilon, \\$ \\}$",
        "explanation": "Error gravísimo de cátedra: $\\epsilon$ NUNCA pertenece a un conjunto SIGUIENTE. Además, '+' no sigue directamente a $E$.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "$\\text{SIGUIENTE}(E) = \\{ \\text{id}, ( \\}, \\quad \\text{SIGUIENTE}(E') = \\{ ) \\}$",
        "explanation": "Error: se confunden los conjuntos PRIMERO con SIGUIENTE.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "$\\text{SIGUIENTE}(E') = \\{ +, *, \\$ \\}$",
        "explanation": "Error: '*' pertenece a $\\text{SIGUIENTE}(T)$ y $\\text{SIGUIENTE}(T')$, no a $E'$.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Reglas de SIGUIENTE: 1) $\\$ \\in \\text{SIGUIENTE}(S)$. 2) Si $A \\to \\alpha B \\beta$, $\\text{PRIMERO}(\\beta) \\setminus \\{\\epsilon\\} \\subseteq \\text{SIGUIENTE}(B)$. 3) Si $A \\to \\alpha B$ o $\\epsilon \\in \\text{PRIMERO}(\\beta)$, $\\text{SIGUIENTE}(A) \\subseteq \\text{SIGUIENTE}(B)$. $\\epsilon$ JAMÁS entra a SIGUIENTE.",
    "sourceCatedra": "Diapositiva 12: Conjuntos PRIMERO y SIGUIENTE (Cardoso/Tolaba)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 4.4.2; Louden Cap. 4.5",
    "trapAnalysis": "Incluir $\\epsilon$ dentro de SIGUIENTE o no propagar el marcador de fin de entrada $\\$$ al no terminal derivado al final de la regla."
  },
  {
    "id": "L11-PRAC03",
    "lessonId": "L11",
    "lessonTitle": "Lección 11 — Sintáctico Predictivo LL(1)",
    "topic": "Práctica de Examen: Detección de Conflicto en Tabla M (No LL(1))",
    "points": 8,
    "questionText": "Dada la siguiente gramática:\n$$S \\to A B$$\n$$A \\to a \\mid \\epsilon$$\n$$B \\to a \\mid b$$\nAl intentar construir la tabla predictiva $M$, ¿por qué razón formal la gramática NO es LL(1)?",
    "options": [
      {
        "id": "A",
        "text": "Porque la celda $M[A, a]$ sufre un conflicto de decisión múltiple al recibir simultáneamente las producciones $A \\to a$ y $A \\to \\epsilon$.",
        "explanation": "1) La regla $A \\to a$ entra en $M[A, a]$ porque $a \\in \\text{PRIMERO}(a)$. 2) La regla $A \\to \\epsilon$ entra en $M[A, x]$ para todo $x \\in \\text{SIGUIENTE}(A)$. En la regla $S \\to A B$, lo que sigue a $A$ es $B \\implies \\text{PRIMERO}(B) = \\{a, b\\} \\subseteq \\text{SIGUIENTE}(A)$. Por tanto, $a \\in \\text{SIGUIENTE}(A)$, lo que hace que $A \\to \\epsilon$ TAMBIÉN se registre en $M[A, a]$. Al contener dos reglas en la misma celda, se produce una colisión que viola la condición LL(1).",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Porque la celda $M[S, b]$ queda sin producciones registradas (error sintáctico).",
        "explanation": "Error: las celdas vacías en la tabla predictiva simplemente denotan errores sintácticos legítimos, no constituyen un conflicto.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Porque la gramática presenta recursividad por la izquierda en el no terminal $S$.",
        "explanation": "Error: la gramática no contiene ninguna recursividad izquierda ni directa ni indirecta.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Porque el símbolo 'a' aparece en dos no terminales distintos.",
        "explanation": "Error: que dos no terminales distintos compartan símbolos terminales en sus lados derechos no impide que una gramática sea LL(1).",
        "isCorrect": false
      }
    ],
    "theorySummary": "Una gramática NO es LL(1) si cualquier celda $M[A, a]$ recibe $\\ge 2$ producciones. Esto ocurre cuando $\\text{PRIMERO}(A \\to \\alpha)$ y $\\text{SIGUIENTE}(A)$ se solapan (en este caso, ambos contienen 'a').",
    "sourceCatedra": "Diapositiva 12: Construcción de la Tabla de Análisis Sintáctico LL(1) (Cardoso/Tolaba)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 4.4.3; Louden Cap. 4.5",
    "trapAnalysis": "Creer que el conflicto ocurre en el no terminal $S$ en lugar del no terminal anulable $A$ que solapa su terminal con su conjunto SIGUIENTE."
  },
  {
    "id": "L11-PRAC04",
    "lessonId": "L11",
    "lessonTitle": "Lección 11 — Sintáctico Predictivo LL(1)",
    "topic": "Práctica de Examen: Trazado de Pila en Parser Predictivo No Recursivo",
    "points": 8,
    "questionText": "Dada la gramática con tabla LL(1) válida:\n$$S \\to a A$$\n$$A \\to b \\mid c$$\nSe inicializa el parser predictivo no recursivo con entrada $w = a c \\$$ y la pila cargada con $\\$ S$ (donde $S$ es el tope de la pila).\nTras realizar la expansión de $S$ y emparejar (*match*) el primer terminal 'a' con la entrada, ¿cuál es el estado exacto de la pila antes de procesar el símbolo 'c'?",
    "options": [
      {
        "id": "A",
        "text": "Fondo: $\\$, \\quad$ Tope: $A \\quad$ (pila: $\\$ A$)",
        "explanation": "Paso 1: Pila inicial $\\$ S$, entrada actual 'a'. Paso 2: Producción $M[S, a] = S \\to a A$. Se desapila $S$ y se apila en orden inverso el lado derecho: pila queda $\\$ A a$ (tope 'a'). Paso 3: El tope 'a' coincide con la entrada 'a' (*match*), por lo que se desapila 'a' y el apuntador de entrada avanza a 'c'. La pila resultante contiene $\\$ A$, con $A$ en la cima.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "La pila queda vacía únicamente con $\\$.",
        "explanation": "Error: no se puede haber consumido $A$, ya que el símbolo 'c' todavía no fue derivado ni emparejado.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Fondo: $\\$, \\quad$ Tope: $a \\quad$ (pila: $\\$ A a$)",
        "explanation": "Error: este estado es previo al emparejamiento; tras el match, el terminal 'a' debe ser desapilado.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Fondo: $\\$, \\quad$ Tope: $c \\quad$ (pila: $\\$ c$)",
        "explanation": "Error: confunde la reducción ascendente con el análisis descendente predictivo donde la pila contiene el no terminal $A$ pendiente de derivación.",
        "isCorrect": false
      }
    ],
    "theorySummary": "En el parser con pila LL(1): 1) Al aplicar $X \\to Y_1 Y_2 \\dots Y_k$, se desapila $X$ y se apilan los símbolos en orden inverso ($Y_k \\dots Y_1$) para que $Y_1$ quede en el tope. 2) Al coincidir el terminal del tope con la entrada, se desapila (*match*) y se avanza la entrada.",
    "sourceCatedra": "Diapositiva 12: Algoritmo de Análisis Sintáctico Predictivo con Pila (Cardoso/Tolaba)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 4.4.4; Louden Cap. 4.5",
    "trapAnalysis": "Olvidar que el terminal emparejado se desapila de inmediato dejando expuesto al siguiente símbolo de la producción ($A$)."
  }
];

export const LESSONS_CONFIG = [
  { id: 'L05', title: 'Lección 05 — Gramáticas Regulares', badge: 'GR / AF', questionCount: 10 },
  { id: 'L06', title: 'Lección 06 — Análisis Léxico', badge: 'Scanner', questionCount: 10 },
  { id: 'L07', title: 'Lección 07 — PLY Lex y AP', badge: 'PLY / Pila', questionCount: 11 },
  { id: 'L08', title: 'Lección 08 — Gramáticas Libres de Contexto', badge: 'GLC / Árboles', questionCount: 8 },
  { id: 'L09', title: 'Lección 09 — Máquinas de Turing', badge: 'Turing', questionCount: 10 },
  { id: 'L10', title: 'Lección 10 — Análisis Sintáctico y Limpieza', badge: 'Parser / Limpieza', questionCount: 13 },
  { id: 'L11', title: 'Lección 11 — Sintáctico Predictivo LL(1)', badge: 'LL(1) / FIRST-FOLLOW', questionCount: 12 },
];
