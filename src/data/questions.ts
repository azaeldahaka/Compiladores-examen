import type { Question } from '../types/question';

export const QUESTIONS_BANK: Question[] = [
  {
    "id": "L05-P001",
    "lessonId": "L05",
    "lessonTitle": "Lección 05 — Gramáticas Regulares",
    "topic": "Gramáticas regulares",
    "points": 2,
    "questionText": "¿Cuál de las siguientes afirmaciones es correcta sobre los lenguajes generados por gramáticas regulares?",
    "options": [
      {
        "id": "A",
        "text": "Pueden describir todas las estructuras recursivas de un lenguaje de programación",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Pueden describir cualquier lenguaje libre de contexto",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Solo pueden ser reconocidos por autómatas con pila",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Son reconocidos por autómatas finitos deterministas y no deterministas",
        "explanation": "Las GR generan exactamente los lenguajes regulares, que son los reconocidos por los AF (AFD ≡ AFND). No alcanzan para estructuras anidadas (paréntesis), que requieren GIC/AP.",
        "isCorrect": true
      }
    ],
    "theorySummary": "Las GR generan exactamente los lenguajes regulares, que son los reconocidos por los AF (AFD ≡ AFND). No alcanzan para estructuras anidadas (paréntesis), que requieren GIC/AP.",
    "sourceCatedra": "Parcial Modelo Moodle 2026 (P001)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.3; Louden Cap. 2"
  },
  {
    "id": "L10-P002",
    "lessonId": "L10",
    "lessonTitle": "Lección 10 — Análisis Sintáctico y Limpieza de Gramáticas",
    "topic": "Análisis sintáctico descendente",
    "points": 8,
    "questionText": "El análisis sintáctico descendente recursivo:",
    "options": [
      {
        "id": "A",
        "text": "Puede manejar gramáticas que tengan factores comunes a la izquierda sin transformarlas",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Solo funciona con gramáticas que describen lenguajes regulares",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Utiliza obligatoriamente una tabla M[A,a] y una pila explícita",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "No puede procesar gramáticas con recursividad por la izquierda",
        "explanation": "Con A → Aα el procedimiento A se llama a sí mismo sin consumir tokens: bucle infinito. Por eso hay que eliminar la recursividad izquierda. La tabla y la pila explícita son del analizador LL (no recursivo). En el parcial original, marcar además la opción sobre 'procesos recursivos en lugar de pila' fue penalizado.",
        "isCorrect": true
      }
    ],
    "theorySummary": "Con A → Aα el procedimiento A se llama a sí mismo sin consumir tokens: bucle infinito. Por eso hay que eliminar la recursividad izquierda. La tabla y la pila explícita son del analizador LL (no recursivo). En el parcial original, marcar además la opción sobre 'procesos recursivos en lugar de pila' fue penalizado.",
    "sourceCatedra": "Parcial Modelo Moodle 2026 (P002)",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.2-4.4; Louden Cap. 4",
    "trapAnalysis": "Con A → Aα el procedimiento A se llama a sí mismo sin consumir tokens: bucle infinito. Por eso hay que eliminar la recursividad izquierda. La tabla y la pila explícita son del analizador LL (no recursivo). En el parcial original, marcar además la opción sobre 'procesos recursivos en lugar de pila' fue penalizado."
  },
  {
    "id": "L08-P003",
    "lessonId": "L08",
    "lessonTitle": "Lección 08 — Gramáticas Libres de Contexto",
    "topic": "Ambigüedad",
    "points": 8,
    "questionText": "Una gramática independiente del contexto es ambigua cuando:",
    "options": [
      {
        "id": "A",
        "text": "Existen dos o más reglas de producción ambiguas",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Existe alguna cadena del lenguaje con dos o más árboles sintácticos distintos",
        "explanation": "La ambigüedad se define por los árboles: una misma cadena con más de un árbol de análisis. Tener derivación por izquierda y por derecha distintas NO es ambigüedad (ambas pueden dar el mismo árbol). 'Reglas ambiguas' no existe como concepto.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Una cadena tiene una derivación por izquierda y otra por derecha",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Tiene reglas recursivas por la izquierda",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "E",
        "text": "Tiene producciones de la forma A → ε",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "La ambigüedad se define por los árboles: una misma cadena con más de un árbol de análisis. Tener derivación por izquierda y por derecha distintas NO es ambigüedad (ambas pueden dar el mismo árbol). 'Reglas ambiguas' no existe como concepto.",
    "sourceCatedra": "Parcial Modelo Moodle 2026 (P003)",
    "sourceBook": "Aho et al. Cap. 4.1-4.3; Hopcroft, Motwani & Ullman Cap. 5-6",
    "trapAnalysis": "La ambigüedad se define por los árboles: una misma cadena con más de un árbol de análisis. Tener derivación por izquierda y por derecha distintas NO es ambigüedad (ambas pueden dar el mismo árbol). 'Reglas ambiguas' no existe como concepto."
  },
  {
    "id": "L05-P004",
    "lessonId": "L05",
    "lessonTitle": "Lección 05 — Gramáticas Regulares",
    "topic": "Gramáticas regulares",
    "points": 2,
    "questionText": "Sobre los lenguajes generados por las gramáticas regulares, ¿qué afirmación es correcta?",
    "options": [
      {
        "id": "A",
        "text": "Necesitan una máquina de Turing para ser reconocidos",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Solo los reconocen los AFND; los AFD reconocen un subconjunto",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Son exactamente los reconocidos por AFD y AFND, y se pueden representar con expresiones regulares",
        "explanation": "AF (reconocen), ER (representan) y GR (generan) son tres formalismos equivalentes para los lenguajes regulares. Además AFD ≡ AFND. Los regulares están incluidos en los libres de contexto, no al revés.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Incluyen a todos los lenguajes generados por las gramáticas libres de contexto",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "E",
        "text": "Son un subconjunto propio de los representados mediante expresiones regulares",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "AF (reconocen), ER (representan) y GR (generan) son tres formalismos equivalentes para los lenguajes regulares. Además AFD ≡ AFND. Los regulares están incluidos en los libres de contexto, no al revés.",
    "sourceCatedra": "Parcial Modelo Moodle 2026 (P004)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.3; Louden Cap. 2"
  },
  {
    "id": "L08-P005",
    "lessonId": "L08",
    "lessonTitle": "Lección 08 — Gramáticas Libres de Contexto",
    "topic": "Árbol sintáctico",
    "points": 8,
    "questionText": "En un árbol de análisis sintáctico:",
    "options": [
      {
        "id": "A",
        "text": "Las hojas son siempre no terminales",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "La raíz es el último terminal leído",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "No se especifica el orden de las derivaciones de la cadena que está en las hojas",
        "explanation": "El árbol representa la derivación sin importar el orden: la derivación por izquierda y por derecha de una cadena (no ambigua) dan el mismo árbol. Raíz = símbolo inicial; nodos interiores = NT; hojas = terminales o ε.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Se especifica el orden exacto en que se aplicaron las derivaciones",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "El árbol representa la derivación sin importar el orden: la derivación por izquierda y por derecha de una cadena (no ambigua) dan el mismo árbol. Raíz = símbolo inicial; nodos interiores = NT; hojas = terminales o ε.",
    "sourceCatedra": "Parcial Modelo Moodle 2026 (P005)",
    "sourceBook": "Aho et al. Cap. 4.1-4.3; Hopcroft, Motwani & Ullman Cap. 5-6"
  },
  {
    "id": "L07-P006",
    "lessonId": "L07",
    "lessonTitle": "Lección 07 — PLY Lex y Autómatas con Pila",
    "topic": "Autómatas con pila",
    "points": 8,
    "questionText": "Un autómata con pila reconoce L = { w c w^R | w ∈ {a,b}* } (w^R = w invertida). ¿Qué cadena pertenece a L?",
    "options": [
      {
        "id": "A",
        "text": "cab",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "abc",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "bbcbb",
        "explanation": "bbcbb = w c wᴿ con w = bb. 'bacba' tendría que ser 'bacab'; 'abcab' tendría que ser 'abcba'; 'abc' y 'cab' no son simétricas. (En el parcial se mostraba el diagrama del AP y también era correcta 'c', con w = ε).",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "bacba",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "E",
        "text": "abcab",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "bbcbb = w c wᴿ con w = bb. 'bacba' tendría que ser 'bacab'; 'abcab' tendría que ser 'abcba'; 'abc' y 'cab' no son simétricas. (En el parcial se mostraba el diagrama del AP y también era correcta 'c', con w = ε).",
    "sourceCatedra": "Parcial Modelo Moodle 2026 (P006)",
    "sourceBook": "Aho et al. Cap. 3; Beazley (PLY Documentation); Hopcroft & Ullman"
  },
  {
    "id": "L09-P007",
    "lessonId": "L09",
    "lessonTitle": "Lección 09 — Máquinas de Turing",
    "topic": "Máquina de Turing",
    "points": 5,
    "questionText": "Respecto de las máquinas de Turing, ¿qué afirmación es correcta?",
    "options": [
      {
        "id": "A",
        "text": "Necesitan una pila para realizar las transiciones",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Admiten transiciones vacías (ε) como los AFND",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Usan dos pilas y una cola",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Su única memoria auxiliar es una cinta de lectura/escritura sobre la que la cabeza se mueve a izquierda o derecha",
        "explanation": "La MT no tiene pila: su almacenamiento es la cinta (lectura/escritura, movimiento L o R). Además la MT estándar es determinista y no admite transiciones vacías.",
        "isCorrect": true
      },
      {
        "id": "E",
        "text": "Solo pueden leer la cinta, nunca escribir",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "La MT no tiene pila: su almacenamiento es la cinta (lectura/escritura, movimiento L o R). Además la MT estándar es determinista y no admite transiciones vacías.",
    "sourceCatedra": "Parcial Modelo Moodle 2026 (P007)",
    "sourceBook": "Linz (Formal Languages and Automata) Cap. 9-11; Sipser Cap. 3"
  },
  {
    "id": "L10-P008",
    "lessonId": "L10",
    "lessonTitle": "Lección 10 — Análisis Sintáctico y Limpieza de Gramáticas",
    "topic": "Limpieza de gramáticas",
    "points": 8,
    "questionText": "¿Cuál es el principal objetivo de limpiar una gramática libre del contexto?",
    "options": [
      {
        "id": "A",
        "text": "Simplificar la gramática eliminando reglas redundantes",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Transformar la gramática para que solo reconozca lenguajes regulares",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Aumentar la complejidad de la gramática pero sin reglas que deriven a épsilon",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Remover símbolos que no contribuyen a la generación de cadenas y producciones que no son útiles",
        "explanation": "La limpieza elimina símbolos inútiles e inaccesibles, producciones ε no deseadas, reglas innecesarias (A → A) y de redenominación (A → B), sin cambiar el lenguaje. Es el paso previo a eliminar la recursividad y factorizar.",
        "isCorrect": true
      }
    ],
    "theorySummary": "La limpieza elimina símbolos inútiles e inaccesibles, producciones ε no deseadas, reglas innecesarias (A → A) y de redenominación (A → B), sin cambiar el lenguaje. Es el paso previo a eliminar la recursividad y factorizar.",
    "sourceCatedra": "Parcial Modelo Moodle 2026 (P008)",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.2-4.4; Louden Cap. 4"
  },
  {
    "id": "L10-P009",
    "lessonId": "L10",
    "lessonTitle": "Lección 10 — Análisis Sintáctico y Limpieza de Gramáticas",
    "topic": "Factorización",
    "points": 8,
    "questionText": "Dada la gramática A → αβ | αγ, después de aplicar la factorización a la izquierda se obtiene:",
    "options": [
      {
        "id": "A",
        "text": "A → A′α ;  A′ → β | γ",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "A → βA′ | γA′ ;  A′ → α",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "A → βA′ ;  A′ → αA′ | ε",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "A → αA′ ;  A′ → β | γ",
        "explanation": "Se extrae el prefijo común α y se posterga la decisión con un nuevo NT: A → αA′, A′ → β | γ. La opción con A′ → αA′ | ε es la eliminación de recursividad izquierda, no la factorización.",
        "isCorrect": true
      }
    ],
    "theorySummary": "Se extrae el prefijo común α y se posterga la decisión con un nuevo NT: A → αA′, A′ → β | γ. La opción con A′ → αA′ | ε es la eliminación de recursividad izquierda, no la factorización.",
    "sourceCatedra": "Parcial Modelo Moodle 2026 (P009) [K3]",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.2-4.4; Louden Cap. 4"
  },
  {
    "id": "L07-P010",
    "lessonId": "L07",
    "lessonTitle": "Lección 07 — PLY Lex y Autómatas con Pila",
    "topic": "Lex / PLY",
    "points": 5,
    "questionText": "En un archivo de Lex, ¿cómo se define una expresión regular que reconoce números enteros positivos?",
    "options": [
      {
        "id": "A",
        "text": "[a-zA-Z0-9]*",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "[0|1|2|3|4|5|6|7|8|9]+",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "[0..9]+",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "[0-9]+",
        "explanation": "[0-9] es la clase de dígitos y + significa 'una o más veces'. Es la misma ER del ejemplo de la cátedra: t_NUMERO = r'[0-9]+'. Dentro de [ ] el | no significa alternativa, y '..' no es un rango válido.",
        "isCorrect": true
      }
    ],
    "theorySummary": "[0-9] es la clase de dígitos y + significa 'una o más veces'. Es la misma ER del ejemplo de la cátedra: t_NUMERO = r'[0-9]+'. Dentro de [ ] el | no significa alternativa, y '..' no es un rango válido.",
    "sourceCatedra": "Parcial Modelo Moodle 2026 (P010)",
    "sourceBook": "Aho et al. Cap. 3; Beazley (PLY Documentation); Hopcroft & Ullman",
    "trapAnalysis": "[0-9] es la clase de dígitos y + significa 'una o más veces'. Es la misma ER del ejemplo de la cátedra: t_NUMERO = r'[0-9]+'. Dentro de [ ] el | no significa alternativa, y '..' no es un rango válido."
  },
  {
    "id": "L06-P011",
    "lessonId": "L06",
    "lessonTitle": "Lección 06 — Análisis Léxico",
    "topic": "Análisis léxico",
    "points": 2,
    "questionText": "¿Cuál de los siguientes errores detecta el analizador léxico?",
    "options": [
      {
        "id": "A",
        "text": "El uso de una variable no declarada",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Un símbolo que no pertenece al alfabeto del lenguaje fuente",
        "explanation": "El léxico detecta errores al formar tokens: símbolos fuera del alfabeto e identificadores mal construidos. Un ';' faltante es error sintáctico; tipos y declaraciones son errores semánticos.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "La falta del punto y coma al final de una sentencia",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Una constante numérica que no coincide con el tipo de la variable",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "El léxico detecta errores al formar tokens: símbolos fuera del alfabeto e identificadores mal construidos. Un ';' faltante es error sintáctico; tipos y declaraciones son errores semánticos.",
    "sourceCatedra": "Parcial Modelo Moodle 2026 (P011)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.1-3.5; Levine (Lex & Yacc)"
  },
  {
    "id": "L08-P012",
    "lessonId": "L08",
    "lessonTitle": "Lección 08 — Gramáticas Libres de Contexto",
    "topic": "GIC",
    "points": 8,
    "questionText": "Sea Σ = {a, b}. La gramática  S → aPb ;  P → ε | aPb  genera el lenguaje:",
    "options": [
      {
        "id": "A",
        "text": "a^nb^n con n > 0",
        "explanation": "S siempre produce al menos una a y una b (S → aPb) y P agrega pares a…b en la misma cantidad. Por eso n ≥ 1 (la cadena vacía no se genera) y las cantidades de a y b son iguales.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "aa*bb*",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "a^nb^n con n ≥ 0",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "a*b*",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "S siempre produce al menos una a y una b (S → aPb) y P agrega pares a…b en la misma cantidad. Por eso n ≥ 1 (la cadena vacía no se genera) y las cantidades de a y b son iguales.",
    "sourceCatedra": "Parcial Modelo Moodle 2026 (P012) [K2]",
    "sourceBook": "Aho et al. Cap. 4.1-4.3; Hopcroft, Motwani & Ullman Cap. 5-6"
  },
  {
    "id": "L08-P013",
    "lessonId": "L08",
    "lessonTitle": "Lección 08 — Gramáticas Libres de Contexto",
    "topic": "GIC",
    "points": 8,
    "questionText": "¿Cuál gramática genera la cadena \"bbcbb\"?",
    "options": [
      {
        "id": "A",
        "text": "S → A ;  A → aAa | bAb | c",
        "explanation": "S ⇒ A ⇒ bAb ⇒ bbAbb ⇒ bbcbb. La opción b genera cadenas terminadas en c; c y d no pueden terminar en 'bb' después de la c.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "S → A ;  A → aAb | bBc ;  B → cB | c",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "S → A ;  A → aA | bA | c",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "S → bAb ;  A → bBc ;  B → cB | c",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "S ⇒ A ⇒ bAb ⇒ bbAbb ⇒ bbcbb. La opción b genera cadenas terminadas en c; c y d no pueden terminar en 'bb' después de la c.",
    "sourceCatedra": "Parcial Modelo Moodle 2026 (P013)",
    "sourceBook": "Aho et al. Cap. 4.1-4.3; Hopcroft, Motwani & Ullman Cap. 5-6"
  },
  {
    "id": "L10-P014",
    "lessonId": "L10",
    "lessonTitle": "Lección 10 — Análisis Sintáctico y Limpieza de Gramáticas",
    "topic": "Recursividad por la izquierda",
    "points": 8,
    "questionText": "¿Qué técnica se utiliza para eliminar la recursividad indirecta por la izquierda en  A → Bd ;  B → Ae | d ?",
    "options": [
      {
        "id": "A",
        "text": "Transformación de todas las reglas a la forma normal de Chomsky",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "No existe recursividad izquierda indirecta en la gramática",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Sustitución de B en la primera producción y eliminación de la recursividad indirecta resultante",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Eliminación de los factores comunes a izquierda",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "E",
        "text": "Sustitución de A en la segunda regla y eliminación de la recursividad directa resultante",
        "explanation": "A ⇒ Bd ⇒ Aed: hay recursividad indirecta. Con el algoritmo (orden A, B) se sustituye A en B → Ae: B → Bde | d, y luego se elimina la recursividad directa de B: B → dB′, B′ → deB′ | ε.",
        "isCorrect": true
      }
    ],
    "theorySummary": "A ⇒ Bd ⇒ Aed: hay recursividad indirecta. Con el algoritmo (orden A, B) se sustituye A en B → Ae: B → Bde | d, y luego se elimina la recursividad directa de B: B → dB′, B′ → deB′ | ε.",
    "sourceCatedra": "Parcial Modelo Moodle 2026 (P014)",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.2-4.4; Louden Cap. 4"
  },
  {
    "id": "L05-P015",
    "lessonId": "L05",
    "lessonTitle": "Lección 05 — Gramáticas Regulares",
    "topic": "Jerarquía de Chomsky",
    "points": 8,
    "questionText": "Sobre la relación entre gramáticas regulares (Tipo 3) e independientes del contexto (Tipo 2):",
    "options": [
      {
        "id": "A",
        "text": "No tienen ninguna relación de inclusión",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Generan exactamente la misma clase de lenguajes",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Toda gramática regular es también independiente del contexto, pero no al revés",
        "explanation": "Tipo 3 ⊂ Tipo 2 ⊂ Tipo 1 ⊂ Tipo 0. Una regla regular A → aB tiene un solo NT a la izquierda, así que también es GIC; pero una GIC como S → aSb no es regular.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Toda gramática independiente del contexto también es regular",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Tipo 3 ⊂ Tipo 2 ⊂ Tipo 1 ⊂ Tipo 0. Una regla regular A → aB tiene un solo NT a la izquierda, así que también es GIC; pero una GIC como S → aSb no es regular.",
    "sourceCatedra": "Parcial Modelo Moodle 2026 (P015)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.3; Louden Cap. 2",
    "trapAnalysis": "Tipo 3 ⊂ Tipo 2 ⊂ Tipo 1 ⊂ Tipo 0. Una regla regular A → aB tiene un solo NT a la izquierda, así que también es GIC; pero una GIC como S → aSb no es regular."
  },
  {
    "id": "L05-P016",
    "lessonId": "L05",
    "lessonTitle": "Lección 05 — Gramáticas Regulares",
    "topic": "Gramáticas regulares",
    "points": 8,
    "questionText": "¿Cuántas reglas de producción tiene la gramática  S → 0T | 1U | ε ;  T → 1S ;  U → 0S ?",
    "options": [
      {
        "id": "A",
        "text": "3",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "4",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "5",
        "explanation": "Cada alternativa separada por | es una regla: S → 0T, S → 1U, S → ε, T → 1S y U → 0S. Total 5.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "6",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Cada alternativa separada por | es una regla: S → 0T, S → 1U, S → ε, T → 1S y U → 0S. Total 5.",
    "sourceCatedra": "Autoevaluación Cátedra (P016) [K2]",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.3; Louden Cap. 2"
  },
  {
    "id": "L05-P017",
    "lessonId": "L05",
    "lessonTitle": "Lección 05 — Gramáticas Regulares",
    "topic": "Gramáticas regulares",
    "points": 8,
    "questionText": "En la gramática  S → 0T | 1U | ε ;  T → 1S ;  U → 0S, los símbolos terminales son:",
    "options": [
      {
        "id": "A",
        "text": "ε",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "0, 1",
        "explanation": "Terminales son los símbolos que aparecen en las cadenas finales: 0 y 1. ε es la cadena vacía (no es un símbolo terminal) y S, T, U son no terminales.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "0, 1, ε",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "S, T, U",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Terminales son los símbolos que aparecen en las cadenas finales: 0 y 1. ε es la cadena vacía (no es un símbolo terminal) y S, T, U son no terminales.",
    "sourceCatedra": "Autoevaluación Cátedra (P017) [K2]",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.3; Louden Cap. 2",
    "trapAnalysis": "Terminales son los símbolos que aparecen en las cadenas finales: 0 y 1. ε es la cadena vacía (no es un símbolo terminal) y S, T, U son no terminales."
  },
  {
    "id": "L05-P018",
    "lessonId": "L05",
    "lessonTitle": "Lección 05 — Gramáticas Regulares",
    "topic": "Gramáticas regulares",
    "points": 8,
    "questionText": "Dada una gramática G, el conjunto de todas las cadenas de terminales que se derivan a partir del símbolo inicial es:",
    "options": [
      {
        "id": "A",
        "text": "El lenguaje generado por la gramática, L(G)",
        "explanation": "Definición de la cátedra: L(G) = { w ∈ T* | S ⇒* w }.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "El conjunto de no terminales N",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "El conjunto de producciones P",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "El alfabeto de G",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Definición de la cátedra: L(G) = { w ∈ T* | S ⇒* w }.",
    "sourceCatedra": "Autoevaluación Cátedra (P018)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.3; Louden Cap. 2"
  },
  {
    "id": "L06-P019",
    "lessonId": "L06",
    "lessonTitle": "Lección 06 — Análisis Léxico",
    "topic": "Análisis léxico",
    "points": 5,
    "questionText": "¿En qué orden suelen darse las conversiones para obtener el programa analizador léxico?",
    "options": [
      {
        "id": "A",
        "text": "ER → AFD mínimo → AFD → AFND",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "AFND → AFD → ER → AFD mínimo",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "ER → AFND → AFD → AFD mínimo",
        "explanation": "Pipeline de la cátedra: (1) ER → AFND (Thompson), (2) AFND → AFD (subconjuntos), (3) minimización, (4) código. Lex/PLY hacen todo automáticamente.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "AFD → ER → AFND → AFD mínimo",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Pipeline de la cátedra: (1) ER → AFND (Thompson), (2) AFND → AFD (subconjuntos), (3) minimización, (4) código. Lex/PLY hacen todo automáticamente.",
    "sourceCatedra": "Autoevaluación Cátedra (P019) [K2]",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.1-3.5; Levine (Lex & Yacc)"
  },
  {
    "id": "L06-P020",
    "lessonId": "L06",
    "lessonTitle": "Lección 06 — Análisis Léxico",
    "topic": "Análisis léxico",
    "points": 8,
    "questionText": "Los componentes léxicos (tokens) se tratan como:",
    "options": [
      {
        "id": "A",
        "text": "Estados del autómata con pila",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Símbolos no terminales de la gramática del lenguaje fuente",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Símbolos terminales de la gramática del lenguaje fuente",
        "explanation": "Los tokens son los terminales de la gramática que usa el analizador sintáctico: son las hojas del árbol sintáctico.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Producciones de la gramática",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Los tokens son los terminales de la gramática que usa el analizador sintáctico: son las hojas del árbol sintáctico.",
    "sourceCatedra": "Autoevaluación Cátedra (P020)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.1-3.5; Levine (Lex & Yacc)"
  },
  {
    "id": "L06-P021",
    "lessonId": "L06",
    "lessonTitle": "Lección 06 — Análisis Léxico",
    "topic": "Análisis léxico",
    "points": 2,
    "questionText": "En el fragmento  if a>100: a = a+b … else: print('error') , ¿qué componente léxico corresponde a 'if' y 'else'?",
    "options": [
      {
        "id": "A",
        "text": "Número",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Palabra reservada",
        "explanation": "if y else son palabras reservadas (tienen el patrón de identificador, pero se distinguen con la tabla de palabras clave). a y b son identificadores, 1 y 100 números, + y * operadores.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Identificador",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Operador",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "if y else son palabras reservadas (tienen el patrón de identificador, pero se distinguen con la tabla de palabras clave). a y b son identificadores, 1 y 100 números, + y * operadores.",
    "sourceCatedra": "Autoevaluación Cátedra (P021)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.1-3.5; Levine (Lex & Yacc)"
  },
  {
    "id": "L08-P022",
    "lessonId": "L08",
    "lessonTitle": "Lección 08 — Gramáticas Libres de Contexto",
    "topic": "Autómatas con pila",
    "points": 2,
    "questionText": "Si un lenguaje es independiente del contexto, entonces:",
    "options": [
      {
        "id": "A",
        "text": "Existe un autómata finito que lo reconoce",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Existe un autómata con pila que reconoce el mismo lenguaje",
        "explanation": "Teorema de equivalencia: los lenguajes generados por GIC son exactamente los aceptados por los AP no deterministas.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "No puede ser reconocido por ninguna máquina",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Necesariamente es regular",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Teorema de equivalencia: los lenguajes generados por GIC son exactamente los aceptados por los AP no deterministas.",
    "sourceCatedra": "Autoevaluación Cátedra (P022) [K2]",
    "sourceBook": "Aho et al. Cap. 4.1-4.3; Hopcroft, Motwani & Ullman Cap. 5-6"
  },
  {
    "id": "L08-P023",
    "lessonId": "L08",
    "lessonTitle": "Lección 08 — Gramáticas Libres de Contexto",
    "topic": "Autómatas con pila",
    "points": 2,
    "questionText": "En un AP, la transición de q1 a q2 etiquetada  y, x ; ε  significa:",
    "options": [
      {
        "id": "A",
        "text": "En q1, si se lee y, pasa a q2 apilando x sin desapilar",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "En q1, si se lee y y el tope es x, desapila x, no apila nada y pasa a q2",
        "explanation": "Notación (p, x, d ; q, a): lee x, desapila d, apila a y pasa a q. Con 'y, x ; ε' lee y, saca x del tope y no apila nada (ε).",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "En q1, apila y y x a la vez y pasa a q2",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "En q1, sin leer nada, cambia x por y en la pila",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Notación (p, x, d ; q, a): lee x, desapila d, apila a y pasa a q. Con 'y, x ; ε' lee y, saca x del tope y no apila nada (ε).",
    "sourceCatedra": "Autoevaluación Cátedra (P023)",
    "sourceBook": "Aho et al. Cap. 4.1-4.3; Hopcroft, Motwani & Ullman Cap. 5-6"
  },
  {
    "id": "L08-P024",
    "lessonId": "L08",
    "lessonTitle": "Lección 08 — Gramáticas Libres de Contexto",
    "topic": "Autómatas con pila",
    "points": 2,
    "questionText": "En el AP de x^ny^n, el lazo en q1 etiquetado  x, ε ; x  significa:",
    "options": [
      {
        "id": "A",
        "text": "Lee x, no desapila nada, apila x y se queda en q1",
        "explanation": "ε en la posición de desapilar significa que no se extrae nada; se apila x. Así cuenta las x leídas.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Lee x, desapila x y se queda en q1",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Lee x y pasa al estado final",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "No lee nada y apila x",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "ε en la posición de desapilar significa que no se extrae nada; se apila x. Así cuenta las x leídas.",
    "sourceCatedra": "Autoevaluación Cátedra (P024) [K2]",
    "sourceBook": "Aho et al. Cap. 4.1-4.3; Hopcroft, Motwani & Ullman Cap. 5-6"
  },
  {
    "id": "L08-P025",
    "lessonId": "L08",
    "lessonTitle": "Lección 08 — Gramáticas Libres de Contexto",
    "topic": "GIC",
    "points": 2,
    "questionText": "¿Cuál de las siguientes reglas NO puede estar en una gramática independiente del contexto?",
    "options": [
      {
        "id": "A",
        "text": "M → ε",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "aMb → axb",
        "explanation": "En una GIC el lado izquierdo es un único no terminal. aMb → axb reemplaza M solo en el contexto a…b: es una regla dependiente del contexto (Tipo 1).",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "M → abM",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "M → aMb",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "En una GIC el lado izquierdo es un único no terminal. aMb → axb reemplaza M solo en el contexto a…b: es una regla dependiente del contexto (Tipo 1).",
    "sourceCatedra": "Autoevaluación Cátedra (P025)",
    "sourceBook": "Aho et al. Cap. 4.1-4.3; Hopcroft, Motwani & Ullman Cap. 5-6"
  },
  {
    "id": "L09-P026",
    "lessonId": "L09",
    "lessonTitle": "Lección 09 — Máquinas de Turing",
    "topic": "Máquina de Turing",
    "points": 5,
    "questionText": "¿Qué usa una máquina de Turing como memoria para realizar cómputos?",
    "options": [
      {
        "id": "A",
        "text": "Una cola FIFO",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Una pila auxiliar",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Una cinta que puede leer y escribir",
        "explanation": "La MT no usa pila: su almacenamiento temporal es la cinta, en la que lee, escribe y se mueve en ambas direcciones.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Solo sus estados",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "La MT no usa pila: su almacenamiento temporal es la cinta, en la que lee, escribe y se mueve en ambas direcciones.",
    "sourceCatedra": "Autoevaluación Cátedra (P026)",
    "sourceBook": "Linz (Formal Languages and Automata) Cap. 9-11; Sipser Cap. 3"
  },
  {
    "id": "L09-P027",
    "lessonId": "L09",
    "lessonTitle": "Lección 09 — Máquinas de Turing",
    "topic": "Máquina de Turing",
    "points": 2,
    "questionText": "¿Puede una máquina de Turing reconocer un lenguaje regular?",
    "options": [
      {
        "id": "A",
        "text": "Solo si el lenguaje es finito",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Sí: la MT es más potente que los AF y los AP, y reconoce también los lenguajes regulares",
        "explanation": "Jerarquía: regulares ⊂ independientes del contexto ⊂ aceptados por MT. Ej. de la cátedra: una MT que acepta 00*.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Solo si se le agrega una pila",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "No, solo reconoce lenguajes no regulares",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Jerarquía: regulares ⊂ independientes del contexto ⊂ aceptados por MT. Ej. de la cátedra: una MT que acepta 00*.",
    "sourceCatedra": "Autoevaluación Cátedra (P027)",
    "sourceBook": "Linz (Formal Languages and Automata) Cap. 9-11; Sipser Cap. 3"
  },
  {
    "id": "L09-P028",
    "lessonId": "L09",
    "lessonTitle": "Lección 09 — Máquinas de Turing",
    "topic": "Máquina de Turing",
    "points": 5,
    "questionText": "Si una máquina de Turing entra en un bucle infinito de transiciones con una cadena, entonces:",
    "options": [
      {
        "id": "A",
        "text": "La máquina vuelve a q0 y borra la cinta",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "La cadena es aceptada",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "La cadena no es aceptada (rechazo), aunque la máquina nunca avisa que terminó",
        "explanation": "Solo se acepta si la MT para en un estado final. Si no para nunca, la cadena no está en L(M).",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Se pasa automáticamente a un estado de error",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Solo se acepta si la MT para en un estado final. Si no para nunca, la cadena no está en L(M).",
    "sourceCatedra": "Autoevaluación Cátedra (P028)",
    "sourceBook": "Linz (Formal Languages and Automata) Cap. 9-11; Sipser Cap. 3"
  },
  {
    "id": "L10-P029",
    "lessonId": "L10",
    "lessonTitle": "Lección 10 — Análisis Sintáctico y Limpieza de Gramáticas",
    "topic": "Preparación de gramáticas",
    "points": 8,
    "questionText": "Según la cátedra, ¿en qué orden se prepara una gramática para un analizador descendente?",
    "options": [
      {
        "id": "A",
        "text": "Eliminar A → ε; eliminar símbolos inaccesibles; eliminar recursividad izquierda; factorizar",
        "explanation": "Diapositivas: limpieza (1. A → ε, 2. inútiles, 3. inaccesibles, 4. redenominación) → eliminar recursión izquierda → factorizar, 'en ese orden'. En la autoevaluación, poner 'inaccesibles' antes que ε se marcó incorrecto.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Eliminar símbolos inaccesibles; eliminar A → ε; factorizar; eliminar recursividad",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Eliminar recursividad; factorizar; eliminar inaccesibles; eliminar A → ε",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Factorizar; eliminar recursividad; eliminar A → ε; eliminar inaccesibles",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Diapositivas: limpieza (1. A → ε, 2. inútiles, 3. inaccesibles, 4. redenominación) → eliminar recursión izquierda → factorizar, 'en ese orden'. En la autoevaluación, poner 'inaccesibles' antes que ε se marcó incorrecto.",
    "sourceCatedra": "Autoevaluación Cátedra (P029)",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.2-4.4; Louden Cap. 4"
  },
  {
    "id": "L10-P030",
    "lessonId": "L10",
    "lessonTitle": "Lección 10 — Análisis Sintáctico y Limpieza de Gramáticas",
    "topic": "Recursividad por la izquierda",
    "points": 8,
    "questionText": "¿Cuántas reglas recursivas por la izquierda (directas + indirectas) tiene  S → Aa | b ;  A → Ac | Sd ?",
    "options": [
      {
        "id": "A",
        "text": "1",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "2",
        "explanation": "A → Ac es recursiva directa y A → Sd es indirecta (A ⇒ Sd ⇒ Aad). Con el orden S, A el algoritmo solo modifica reglas de A. Respuesta del campus: 2 (responder 3 se marcó incorrecto).",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "3",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "4",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "A → Ac es recursiva directa y A → Sd es indirecta (A ⇒ Sd ⇒ Aad). Con el orden S, A el algoritmo solo modifica reglas de A. Respuesta del campus: 2 (responder 3 se marcó incorrecto).",
    "sourceCatedra": "Autoevaluación Cátedra (P030)",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.2-4.4; Louden Cap. 4"
  },
  {
    "id": "L10-P031",
    "lessonId": "L10",
    "lessonTitle": "Lección 10 — Análisis Sintáctico y Limpieza de Gramáticas",
    "topic": "Recursividad por la izquierda",
    "points": 8,
    "questionText": "¿Cuántas reglas recursivas por la izquierda tiene  S → Aa | b ;  A → Ac | Aad | bd ?",
    "options": [
      {
        "id": "A",
        "text": "1",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "0",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "2",
        "explanation": "A → Ac y A → Aad empiezan con A (directas). S → Aa ya no genera ciclo porque A no puede empezar con S.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "3",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "A → Ac y A → Aad empiezan con A (directas). S → Aa ya no genera ciclo porque A no puede empezar con S.",
    "sourceCatedra": "Autoevaluación Cátedra (P031) [K1]",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.2-4.4; Louden Cap. 4"
  },
  {
    "id": "L11-P032",
    "lessonId": "L11",
    "lessonTitle": "Lección 11 — Analizadores Sintácticos Predictivos LL(1)",
    "topic": "LL(1",
    "points": 8,
    "questionText": "Si una gramática independiente del contexto es ambigua o tiene reglas recursivas por la izquierda:",
    "options": [
      {
        "id": "A",
        "text": "Es LL(1) siempre",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Es regular",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "NO es LL(1)",
        "explanation": "Propiedad de la cátedra: una gramática ambigua o recursiva por la izquierda no puede ser LL(1) (su tabla M tendría entradas múltiples).",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Es LL(1) si se usa retroceso",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Propiedad de la cátedra: una gramática ambigua o recursiva por la izquierda no puede ser LL(1) (su tabla M tendría entradas múltiples).",
    "sourceCatedra": "Autoevaluación Cátedra (P032)",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.4; Louden Cap. 4.3"
  },
  {
    "id": "L11-P033",
    "lessonId": "L11",
    "lessonTitle": "Lección 11 — Analizadores Sintácticos Predictivos LL(1)",
    "topic": "PRIMERO",
    "points": 8,
    "questionText": "Para  S → A | B ;  A → cA+b | a ;  B → cB+a | b ,  ¿cuál es PRIMERO(A)?",
    "options": [
      {
        "id": "A",
        "text": "{a, b, c}",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "{c, b}",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "{c, a}",
        "explanation": "A → cA+b empieza con c y A → a empieza con a. PRIMERO(B) = {c, b} y PRIMERO(S) = {a, b, c}.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "{a}",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "A → cA+b empieza con c y A → a empieza con a. PRIMERO(B) = {c, b} y PRIMERO(S) = {a, b, c}.",
    "sourceCatedra": "Autoevaluación Cátedra (P033) [K1]",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.4; Louden Cap. 4.3"
  },
  {
    "id": "L11-P034",
    "lessonId": "L11",
    "lessonTitle": "Lección 11 — Analizadores Sintácticos Predictivos LL(1)",
    "topic": "LL(1",
    "points": 2,
    "questionText": "Para realizar el análisis sintáctico LL(1) (tabular):",
    "options": [
      {
        "id": "A",
        "text": "Solo hay que eliminar las producciones ε",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Sí hay que eliminar la recursividad a izquierda",
        "explanation": "Una gramática recursiva por la izquierda no es LL(1); por eso, por ejemplo, E → E+T | T se transforma en E → TE′, E′ → +TE′ | ε antes de construir la tabla.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "No hace falta eliminar la recursividad a izquierda",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "No hace falta ninguna transformación de la gramática",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Una gramática recursiva por la izquierda no es LL(1); por eso, por ejemplo, E → E+T | T se transforma en E → TE′, E′ → +TE′ | ε antes de construir la tabla.",
    "sourceCatedra": "Autoevaluación Cátedra (P034)",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.4; Louden Cap. 4.3",
    "trapAnalysis": "Una gramática recursiva por la izquierda no es LL(1); por eso, por ejemplo, E → E+T | T se transforma en E → TE′, E′ → +TE′ | ε antes de construir la tabla."
  },
  {
    "id": "L05-P035",
    "lessonId": "L05",
    "lessonTitle": "Lección 05 — Gramáticas Regulares",
    "topic": "Gramáticas",
    "points": 2,
    "questionText": "Formalmente, una gramática G se define como la cuádrupla:",
    "options": [
      {
        "id": "A",
        "text": "M = (Q, Σ, Γ, δ, q0, □, F)",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "M = (Q, Σ, δ, q0, F)",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "G = (N, T, S, P)",
        "explanation": "N: no terminales; T: terminales (N ∩ T = ∅); S ∈ N: símbolo inicial; P: producciones. Las otras son definiciones de autómatas.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "G = (N, T, P)",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "N: no terminales; T: terminales (N ∩ T = ∅); S ∈ N: símbolo inicial; P: producciones. Las otras son definiciones de autómatas.",
    "sourceCatedra": "Banco Extra Cátedra L05 (P035) [K3]",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.3; Louden Cap. 2"
  },
  {
    "id": "L05-P036",
    "lessonId": "L05",
    "lessonTitle": "Lección 05 — Gramáticas Regulares",
    "topic": "Gramáticas",
    "points": 2,
    "questionText": "En una gramática, los símbolos no terminales:",
    "options": [
      {
        "id": "A",
        "text": "Son siempre letras minúsculas",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Aparecen en las cadenas finales del lenguaje",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Son variables auxiliares que estructuran la derivación y no aparecen en las sentencias",
        "explanation": "Los NT (ej. <frase>, <sujeto>) se usan para definir la gramática pero no figuran en las sentencias; los terminales sí.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Solo pueden aparecer en el lado derecho de las reglas",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Los NT (ej. <frase>, <sujeto>) se usan para definir la gramática pero no figuran en las sentencias; los terminales sí.",
    "sourceCatedra": "Banco Extra Cátedra L05 (P036)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.3; Louden Cap. 2"
  },
  {
    "id": "L05-P037",
    "lessonId": "L05",
    "lessonTitle": "Lección 05 — Gramáticas Regulares",
    "topic": "Gramáticas",
    "points": 2,
    "questionText": "Con la gramática del castellano de la clase (frase → sujeto predicado …), ¿se puede derivar \"María canta Juan\"?",
    "options": [
      {
        "id": "A",
        "text": "Sí, porque todas las palabras son terminales",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Sí, porque Juan y María son sustantivos",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Sí, aplicando predicado → verbo objeto recursivamente",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "No, ninguna producción permite poner un sustantivo después del verbo",
        "explanation": "Pertenecer al vocabulario terminal no alcanza: debe existir una derivación. <objeto> no tiene regla que lo reescriba como sustantivo.",
        "isCorrect": true
      }
    ],
    "theorySummary": "Pertenecer al vocabulario terminal no alcanza: debe existir una derivación. <objeto> no tiene regla que lo reescriba como sustantivo.",
    "sourceCatedra": "Banco Extra Cátedra L05 (P037)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.3; Louden Cap. 2"
  },
  {
    "id": "L05-P038",
    "lessonId": "L05",
    "lessonTitle": "Lección 05 — Gramáticas Regulares",
    "topic": "Gramáticas",
    "points": 8,
    "questionText": "¿Cuál de las siguientes producciones es lineal por la derecha?",
    "options": [
      {
        "id": "A",
        "text": "A → aBb",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "A → abB",
        "explanation": "Lineal por la derecha: A → w o A → wB, con el único NT al final. Bab es lineal por la izquierda; aBb tiene el NT en el medio; AB → a no tiene un solo NT a la izquierda.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "AB → a",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "A → Bab",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Lineal por la derecha: A → w o A → wB, con el único NT al final. Bab es lineal por la izquierda; aBb tiene el NT en el medio; AB → a no tiene un solo NT a la izquierda.",
    "sourceCatedra": "Banco Extra Cátedra L05 (P038)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.3; Louden Cap. 2"
  },
  {
    "id": "L05-P039",
    "lessonId": "L05",
    "lessonTitle": "Lección 05 — Gramáticas Regulares",
    "topic": "Gramáticas",
    "points": 2,
    "questionText": "Una gramática regular es:",
    "options": [
      {
        "id": "A",
        "text": "Una gramática que mezcla reglas lineales por derecha e izquierda",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Una gramática con un solo no terminal",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Una gramática lineal por la derecha o bien lineal por la izquierda (sin mezclarlas)",
        "explanation": "No se pueden mezclar ambos tipos. Tener a lo sumo un NT por regla la hace 'lineal', pero no necesariamente regular.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Cualquier gramática libre de contexto",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "E",
        "text": "Cualquier gramática con a lo sumo un no terminal en el lado derecho",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "No se pueden mezclar ambos tipos. Tener a lo sumo un NT por regla la hace 'lineal', pero no necesariamente regular.",
    "sourceCatedra": "Banco Extra Cátedra L05 (P039)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.3; Louden Cap. 2"
  },
  {
    "id": "L05-P040",
    "lessonId": "L05",
    "lessonTitle": "Lección 05 — Gramáticas Regulares",
    "topic": "Gramáticas",
    "points": 8,
    "questionText": "La gramática  S → A ;  A → aB | ε ;  B → Ab  es:",
    "options": [
      {
        "id": "A",
        "text": "Sensible al contexto",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Lineal, pero NO regular",
        "explanation": "Tiene a lo sumo un NT a la derecha (lineal), pero A → aB es lineal por derecha y B → Ab por izquierda: al mezclarlas no es regular.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Regular, lineal por la derecha",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Regular, lineal por la izquierda",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Tiene a lo sumo un NT a la derecha (lineal), pero A → aB es lineal por derecha y B → Ab por izquierda: al mezclarlas no es regular.",
    "sourceCatedra": "Banco Extra Cátedra L05 (P040) [K3]",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.3; Louden Cap. 2",
    "trapAnalysis": "Tiene a lo sumo un NT a la derecha (lineal), pero A → aB es lineal por derecha y B → Ab por izquierda: al mezclarlas no es regular."
  },
  {
    "id": "L05-P041",
    "lessonId": "L05",
    "lessonTitle": "Lección 05 — Gramáticas Regulares",
    "topic": "Gramáticas",
    "points": 8,
    "questionText": "¿Por qué la producción A → aBb no es regular?",
    "options": [
      {
        "id": "A",
        "text": "Porque le falta una regla A → ε",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Porque el no terminal B está en el medio, no en un extremo",
        "explanation": "En una GR el único NT del lado derecho debe estar al final (lineal derecha) o al principio (lineal izquierda).",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Porque los NT no pueden convivir con terminales",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Porque tiene dos terminales distintos",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "En una GR el único NT del lado derecho debe estar al final (lineal derecha) o al principio (lineal izquierda).",
    "sourceCatedra": "Banco Extra Cátedra L05 (P041) [K3]",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.3; Louden Cap. 2"
  },
  {
    "id": "L05-P042",
    "lessonId": "L05",
    "lessonTitle": "Lección 05 — Gramáticas Regulares",
    "topic": "Gramáticas",
    "points": 8,
    "questionText": "La gramática  S → abS | a  genera:",
    "options": [
      {
        "id": "A",
        "text": "a^nb^n con n ≥ 1",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "a(ab)^nb",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "(ab)^na con n ≥ 0",
        "explanation": "S ⇒ a; S ⇒ abS ⇒ aba; S ⇒ ababa… Repeticiones de ab terminadas en a. Es el ejemplo G1 de la clase.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "(ab)*",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "S ⇒ a; S ⇒ abS ⇒ aba; S ⇒ ababa… Repeticiones de ab terminadas en a. Es el ejemplo G1 de la clase.",
    "sourceCatedra": "Banco Extra Cátedra L05 (P042) [K1]",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.3; Louden Cap. 2"
  },
  {
    "id": "L05-P043",
    "lessonId": "L05",
    "lessonTitle": "Lección 05 — Gramáticas Regulares",
    "topic": "Gramáticas",
    "points": 8,
    "questionText": "La gramática  T → 0 | 0T | 1T  genera:",
    "options": [
      {
        "id": "A",
        "text": "Números binarios pares",
        "explanation": "La derivación solo puede terminar con T → 0, así que toda cadena termina en 0 (binario par). Ej.: T ⇒ 1T ⇒ 10T ⇒ 100.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Números binarios impares",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Todas las cadenas binarias",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Binarios que empiezan con 0",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "La derivación solo puede terminar con T → 0, así que toda cadena termina en 0 (binario par). Ej.: T ⇒ 1T ⇒ 10T ⇒ 100.",
    "sourceCatedra": "Banco Extra Cátedra L05 (P043)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.3; Louden Cap. 2"
  },
  {
    "id": "L05-P044",
    "lessonId": "L05",
    "lessonTitle": "Lección 05 — Gramáticas Regulares",
    "topic": "GR ↔ AF",
    "points": 8,
    "questionText": "Al convertir una gramática lineal por la derecha en AF (Teorema 1), una regla vi → ε provoca que:",
    "options": [
      {
        "id": "A",
        "text": "vi sea el estado inicial",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "vi pase a ser también estado de aceptación",
        "explanation": "Paso 6 del Teorema 1. Ej.: con S → 0T | 1U | ε, S es inicial y final a la vez.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Se elimine el estado vi",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Se agregue una transición ε a vf",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Paso 6 del Teorema 1. Ej.: con S → 0T | 1U | ε, S es inicial y final a la vez.",
    "sourceCatedra": "Banco Extra Cátedra L05 (P044)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.3; Louden Cap. 2"
  },
  {
    "id": "L05-P045",
    "lessonId": "L05",
    "lessonTitle": "Lección 05 — Gramáticas Regulares",
    "topic": "GR ↔ AF",
    "points": 2,
    "questionText": "En el Teorema 1 (GR → AF), una regla vi → a (un solo terminal) genera:",
    "options": [
      {
        "id": "A",
        "text": "δ(vi, a) = vi",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "δ(vi, a) = vf, con vf estado final agregado",
        "explanation": "Se agrega un estado final nuevo vf; las reglas que terminan en un terminal van a vf. Las reglas vi → a vj dan δ(vi, a) = vj.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Que vi sea final",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Ninguna transición",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Se agrega un estado final nuevo vf; las reglas que terminan en un terminal van a vf. Las reglas vi → a vj dan δ(vi, a) = vj.",
    "sourceCatedra": "Banco Extra Cátedra L05 (P045) [K2]",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.3; Louden Cap. 2"
  },
  {
    "id": "L05-P046",
    "lessonId": "L05",
    "lessonTitle": "Lección 05 — Gramáticas Regulares",
    "topic": "GR ↔ AF",
    "points": 2,
    "questionText": "En el Teorema 2 (AF → GR), la transición δ(qi, a) = qk genera la regla:",
    "options": [
      {
        "id": "A",
        "text": "a → qi qk",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "qk → a qi",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "qi → a qk",
        "explanation": "Cada estado es un no terminal y cada transición es una producción. Además, cada estado final qk agrega qk → ε.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "qi → qk a",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Cada estado es un no terminal y cada transición es una producción. Además, cada estado final qk agrega qk → ε.",
    "sourceCatedra": "Banco Extra Cátedra L05 (P046)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.3; Louden Cap. 2"
  },
  {
    "id": "L05-P047",
    "lessonId": "L05",
    "lessonTitle": "Lección 05 — Gramáticas Regulares",
    "topic": "GR ↔ AF",
    "points": 8,
    "questionText": "En la conversión AF → GR, si q3 es estado de aceptación, ¿qué regla se agrega?",
    "options": [
      {
        "id": "A",
        "text": "q3 → ∅",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "S → q3",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "q3 → S",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "q3 → ε",
        "explanation": "q3 → ε permite terminar la derivación eliminando el no terminal cuando el autómata puede aceptar.",
        "isCorrect": true
      }
    ],
    "theorySummary": "q3 → ε permite terminar la derivación eliminando el no terminal cuando el autómata puede aceptar.",
    "sourceCatedra": "Banco Extra Cátedra L05 (P047)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.3; Louden Cap. 2"
  },
  {
    "id": "L05-P048",
    "lessonId": "L05",
    "lessonTitle": "Lección 05 — Gramáticas Regulares",
    "topic": "GR ↔ AF",
    "points": 8,
    "questionText": "La gramática  S → aA ;  A → aB ;  B → bS | b  genera:",
    "options": [
      {
        "id": "A",
        "text": "(ab)*",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "(aab)⁺",
        "explanation": "S ⇒ aA ⇒ aaB ⇒ aab o aabS (y se repite). Es el Ejemplo 1 de GR → AF de la clase.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "a^nb^n",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "a*b*",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "S ⇒ aA ⇒ aaB ⇒ aab o aabS (y se repite). Es el Ejemplo 1 de GR → AF de la clase.",
    "sourceCatedra": "Banco Extra Cátedra L05 (P048) [K1]",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.3; Louden Cap. 2"
  },
  {
    "id": "L05-P049",
    "lessonId": "L05",
    "lessonTitle": "Lección 05 — Gramáticas Regulares",
    "topic": "GR ↔ AF",
    "points": 5,
    "questionText": "Un AFD con estados s0 (inicial), s1 (final), s2 reconoce cadenas con 3k+1 b's. Por la cátedra, si δ(s0, b) = s1, ¿qué reglas se agregan?",
    "options": [
      {
        "id": "A",
        "text": "s0 → s1b",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "s0 → bs1 y s0 → b",
        "explanation": "En la construcción del apunte 'Gramáticas': B → aC si δ(B, a) = C, y además B → a si C ∈ F. Como s1 es final: s0 → bs1 y s0 → b.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "s1 → bs0",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Solo s1 → b",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "En la construcción del apunte 'Gramáticas': B → aC si δ(B, a) = C, y además B → a si C ∈ F. Como s1 es final: s0 → bs1 y s0 → b.",
    "sourceCatedra": "Banco Extra Cátedra L05 (P049)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.3; Louden Cap. 2"
  },
  {
    "id": "L05-P050",
    "lessonId": "L05",
    "lessonTitle": "Lección 05 — Gramáticas Regulares",
    "topic": "ER ↔ GR (Pittman",
    "points": 8,
    "questionText": "Al transformar una ER en GR (Pittman), la producción A → xy (concatenación) se reemplaza por:",
    "options": [
      {
        "id": "A",
        "text": "A → xB | y ;  B → xB | y",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "A → yx",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "A → x ;  A → y",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "A → xB ;  B → y (B nuevo)",
        "explanation": "Regla R.1. La alternativa A → x|y da A → x, A → y (R.3) y la iteración A → x*y da A → xB | y, B → xB | y (R.2).",
        "isCorrect": true
      }
    ],
    "theorySummary": "Regla R.1. La alternativa A → x|y da A → x, A → y (R.3) y la iteración A → x*y da A → xB | y, B → xB | y (R.2).",
    "sourceCatedra": "Banco Extra Cátedra L05 (P050) [K1]",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.3; Louden Cap. 2"
  },
  {
    "id": "L05-P051",
    "lessonId": "L05",
    "lessonTitle": "Lección 05 — Gramáticas Regulares",
    "topic": "ER ↔ GR (Pittman",
    "points": 8,
    "questionText": "Al transformar A → x*y (iteración) en producciones de gramática (Pittman R.2) se obtiene:",
    "options": [
      {
        "id": "A",
        "text": "A → yB ;  B → x",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "A → x | y",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "A → xy",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "A → xB | y ;  B → xB | y",
        "explanation": "El nuevo no terminal B permite repetir x cero o más veces antes de y.",
        "isCorrect": true
      }
    ],
    "theorySummary": "El nuevo no terminal B permite repetir x cero o más veces antes de y.",
    "sourceCatedra": "Banco Extra Cátedra L05 (P051) [K2]",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.3; Louden Cap. 2"
  },
  {
    "id": "L05-P052",
    "lessonId": "L05",
    "lessonTitle": "Lección 05 — Gramáticas Regulares",
    "topic": "ER ↔ GR (Pittman",
    "points": 8,
    "questionText": "Convirtiendo la gramática  S → aA | a ;  A → aA | dA | a | d  en expresión regular se obtiene:",
    "options": [
      {
        "id": "A",
        "text": "a*d*",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "(a|d)*",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "a(ad)*",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "a(a|d)*",
        "explanation": "Ejemplo de Pittman: A → (a|d)A | (a|d) ⇒ A = (a|d)*(a|d) = (a|d)⁺; S = a(a|d)⁺ | a = a(a|d)*.",
        "isCorrect": true
      }
    ],
    "theorySummary": "Ejemplo de Pittman: A → (a|d)A | (a|d) ⇒ A = (a|d)*(a|d) = (a|d)⁺; S = a(a|d)⁺ | a = a(a|d)*.",
    "sourceCatedra": "Banco Extra Cátedra L05 (P052) [K3]",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.3; Louden Cap. 2"
  },
  {
    "id": "L05-P053",
    "lessonId": "L05",
    "lessonTitle": "Lección 05 — Gramáticas Regulares",
    "topic": "Jerarquía de Chomsky",
    "points": 2,
    "questionText": "Las gramáticas de Tipo 2 (libres de contexto) son reconocidas por:",
    "options": [
      {
        "id": "A",
        "text": "Autómatas finitos",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Autómatas con pila",
        "explanation": "Tipo 3 ↔ AF; Tipo 2 ↔ AP; Tipo 1 ↔ autómata linealmente acotado; Tipo 0 ↔ MT.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Máquinas de Turing únicamente",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Autómatas linealmente acotados",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Tipo 3 ↔ AF; Tipo 2 ↔ AP; Tipo 1 ↔ autómata linealmente acotado; Tipo 0 ↔ MT.",
    "sourceCatedra": "Banco Extra Cátedra L05 (P053)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.3; Louden Cap. 2"
  },
  {
    "id": "L05-P054",
    "lessonId": "L05",
    "lessonTitle": "Lección 05 — Gramáticas Regulares",
    "topic": "Jerarquía de Chomsky",
    "points": 2,
    "questionText": "En la jerarquía de Chomsky, las gramáticas de Tipo 1 son:",
    "options": [
      {
        "id": "A",
        "text": "Dependientes (sensibles) del contexto",
        "explanation": "Reglas αAβ → αγβ: A se reemplaza por γ solo en el contexto α…β. Las reconoce un autómata linealmente acotado.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Regulares",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Libres de contexto",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Sin restricciones",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Reglas αAβ → αγβ: A se reemplaza por γ solo en el contexto α…β. Las reconoce un autómata linealmente acotado.",
    "sourceCatedra": "Banco Extra Cátedra L05 (P054)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.3; Louden Cap. 2"
  },
  {
    "id": "L05-P055",
    "lessonId": "L05",
    "lessonTitle": "Lección 05 — Gramáticas Regulares",
    "topic": "Jerarquía de Chomsky",
    "points": 2,
    "questionText": "¿Qué tipo de gramática se usa para describir los tokens (análisis léxico)?",
    "options": [
      {
        "id": "A",
        "text": "Tipo 2",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Tipo 0",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Tipo 1",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Tipo 3 (regulares)",
        "explanation": "Tokens con gramáticas regulares/ER (máxima eficiencia); la sintaxis con GIC (Tipo 2).",
        "isCorrect": true
      }
    ],
    "theorySummary": "Tokens con gramáticas regulares/ER (máxima eficiencia); la sintaxis con GIC (Tipo 2).",
    "sourceCatedra": "Banco Extra Cátedra L05 (P055) [K2]",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.3; Louden Cap. 2"
  },
  {
    "id": "L05-P056",
    "lessonId": "L05",
    "lessonTitle": "Lección 05 — Gramáticas Regulares",
    "topic": "Jerarquía de Chomsky",
    "points": 8,
    "questionText": "Sobre la jerarquía de Chomsky, ¿qué afirmación es correcta?",
    "options": [
      {
        "id": "A",
        "text": "Los tipos no tienen relación de inclusión",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "A menos restricciones en las reglas, menor poder expresivo",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Tipo 0 ⊂ Tipo 1 ⊂ Tipo 2 ⊂ Tipo 3",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Tipo 3 ⊂ Tipo 2 ⊂ Tipo 1 ⊂ Tipo 0",
        "explanation": "Inclusión estricta: todo lenguaje regular es libre de contexto, etc. Menos restricciones ⇒ más poder expresivo pero reconocimiento menos eficiente.",
        "isCorrect": true
      }
    ],
    "theorySummary": "Inclusión estricta: todo lenguaje regular es libre de contexto, etc. Menos restricciones ⇒ más poder expresivo pero reconocimiento menos eficiente.",
    "sourceCatedra": "Banco Extra Cátedra L05 (P056) [K2]",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.3; Louden Cap. 2"
  },
  {
    "id": "L06-P057",
    "lessonId": "L06",
    "lessonTitle": "Lección 06 — Análisis Léxico",
    "topic": "Análisis léxico",
    "points": 8,
    "questionText": "¿Cuál NO es una tarea del analizador léxico?",
    "options": [
      {
        "id": "A",
        "text": "Agrupar caracteres en tokens",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Eliminar espacios en blanco y comentarios",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Llevar el número de línea para informar errores",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Construir el árbol de análisis sintáctico",
        "explanation": "El árbol lo construye el analizador sintáctico. El léxico lee y agrupa, filtra blancos/comentarios e informa errores léxicos con número de línea.",
        "isCorrect": true
      }
    ],
    "theorySummary": "El árbol lo construye el analizador sintáctico. El léxico lee y agrupa, filtra blancos/comentarios e informa errores léxicos con número de línea.",
    "sourceCatedra": "Banco Extra Cátedra L06 (P057) [K3]",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.1-3.5; Levine (Lex & Yacc)"
  },
  {
    "id": "L06-P058",
    "lessonId": "L06",
    "lessonTitle": "Lección 06 — Análisis Léxico",
    "topic": "Análisis léxico",
    "points": 2,
    "questionText": "En la compilación dirigida por la sintaxis, ¿quién controla el ritmo de lectura de tokens?",
    "options": [
      {
        "id": "A",
        "text": "El sintáctico, que llama a getNextToken() cuando necesita uno",
        "explanation": "El léxico funciona como subrutina del parser: este pide tokens a demanda; el léxico usa getChar() sobre el flujo de caracteres.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "El léxico, que envía todos los tokens de una vez",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "La tabla de símbolos",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "El generador de código",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "El léxico funciona como subrutina del parser: este pide tokens a demanda; el léxico usa getChar() sobre el flujo de caracteres.",
    "sourceCatedra": "Banco Extra Cátedra L06 (P058)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.1-3.5; Levine (Lex & Yacc)"
  },
  {
    "id": "L06-P059",
    "lessonId": "L06",
    "lessonTitle": "Lección 06 — Análisis Léxico",
    "topic": "Análisis léxico",
    "points": 2,
    "questionText": "En  posicion := inicial + velocidad * 60 , el texto \"posicion\" es:",
    "options": [
      {
        "id": "A",
        "text": "Un patrón",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Un lexema del token id",
        "explanation": "Token = categoría (id); lexema = secuencia concreta de caracteres (\"posicion\"); atributo = info extra (posición en la tabla de símbolos).",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Un atributo",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Un token",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Token = categoría (id); lexema = secuencia concreta de caracteres (\"posicion\"); atributo = info extra (posición en la tabla de símbolos).",
    "sourceCatedra": "Banco Extra Cátedra L06 (P059) [K3]",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.1-3.5; Levine (Lex & Yacc)"
  },
  {
    "id": "L06-P060",
    "lessonId": "L06",
    "lessonTitle": "Lección 06 — Análisis Léxico",
    "topic": "Análisis léxico",
    "points": 5,
    "questionText": "En  x1 := a + b , \"x1\" y \"a\" comparten el mismo token pero tienen distinto:",
    "options": [
      {
        "id": "A",
        "text": "Patrón",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Token",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Tipo de dato",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Lexema",
        "explanation": "Ambos son id y siguen el patrón letra(letra|dígito)*; lo que cambia es la secuencia concreta: el lexema.",
        "isCorrect": true
      }
    ],
    "theorySummary": "Ambos son id y siguen el patrón letra(letra|dígito)*; lo que cambia es la secuencia concreta: el lexema.",
    "sourceCatedra": "Banco Extra Cátedra L06 (P060)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.1-3.5; Levine (Lex & Yacc)"
  },
  {
    "id": "L06-P061",
    "lessonId": "L06",
    "lessonTitle": "Lección 06 — Análisis Léxico",
    "topic": "Análisis léxico",
    "points": 2,
    "questionText": "¿Cuántos tokens entrega el léxico para  posicion := inicial + velocidad * 60 ?",
    "options": [
      {
        "id": "A",
        "text": "6",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "9",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "7",
        "explanation": "(id,posicion) (op,:=) (id,inicial) (op,+) (id,velocidad) (op,*) (num,60): 7 tuplas, sin los blancos.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "5",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "(id,posicion) (op,:=) (id,inicial) (op,+) (id,velocidad) (op,*) (num,60): 7 tuplas, sin los blancos.",
    "sourceCatedra": "Banco Extra Cátedra L06 (P061)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.1-3.5; Levine (Lex & Yacc)"
  },
  {
    "id": "L06-P062",
    "lessonId": "L06",
    "lessonTitle": "Lección 06 — Análisis Léxico",
    "topic": "Análisis léxico",
    "points": 5,
    "questionText": "¿Cómo distingue el léxico una palabra reservada de un identificador, si tienen el mismo patrón?",
    "options": [
      {
        "id": "A",
        "text": "Consultando una tabla de palabras reservadas antes de decidir que es identificador",
        "explanation": "Una cadena es identificador solo si no es palabra clave. En PLY se usa un diccionario de reservadas dentro de la regla de ID.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Por la longitud de la cadena",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "No las distingue: el sintáctico lo hace",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Por la posición en la línea",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Una cadena es identificador solo si no es palabra clave. En PLY se usa un diccionario de reservadas dentro de la regla de ID.",
    "sourceCatedra": "Banco Extra Cátedra L06 (P062)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.1-3.5; Levine (Lex & Yacc)",
    "trapAnalysis": "Una cadena es identificador solo si no es palabra clave. En PLY se usa un diccionario de reservadas dentro de la regla de ID."
  },
  {
    "id": "L06-P063",
    "lessonId": "L06",
    "lessonTitle": "Lección 06 — Análisis Léxico",
    "topic": "Análisis léxico",
    "points": 2,
    "questionText": "¿Qué tokens reconoce el léxico pero nunca llegan al analizador sintáctico?",
    "options": [
      {
        "id": "A",
        "text": "Palabras reservadas",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Identificadores",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Comentarios, blancos y separadores (TAB, \\n)",
        "explanation": "No tienen uso gramatical; se descartan.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Operadores relacionales",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "No tienen uso gramatical; se descartan.",
    "sourceCatedra": "Banco Extra Cátedra L06 (P063) [K3]",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.1-3.5; Levine (Lex & Yacc)"
  },
  {
    "id": "L06-P064",
    "lessonId": "L06",
    "lessonTitle": "Lección 06 — Análisis Léxico",
    "topic": "Análisis léxico",
    "points": 2,
    "questionText": "El léxico lee \">\" y el siguiente carácter es \"=\". ¿Qué token reconoce?",
    "options": [
      {
        "id": "A",
        "text": "Error léxico",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": ">",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "=",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": ">=",
        "explanation": "Gracias al preanálisis mira el carácter siguiente: si es '=', el símbolo es '>='. Si fuera un blanco devuelve '>' y descarta el blanco; si es otro carácter devuelve '>' y ese carácter queda para el próximo token.",
        "isCorrect": true
      }
    ],
    "theorySummary": "Gracias al preanálisis mira el carácter siguiente: si es '=', el símbolo es '>='. Si fuera un blanco devuelve '>' y descarta el blanco; si es otro carácter devuelve '>' y ese carácter queda para el próximo token.",
    "sourceCatedra": "Banco Extra Cátedra L06 (P064) [K3]",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.1-3.5; Levine (Lex & Yacc)"
  },
  {
    "id": "L06-P065",
    "lessonId": "L06",
    "lessonTitle": "Lección 06 — Análisis Léxico",
    "topic": "Análisis léxico",
    "points": 2,
    "questionText": "El léxico lee \">\" y el siguiente carácter es un espacio en blanco. ¿Qué hace con el espacio?",
    "options": [
      {
        "id": "A",
        "text": "Lo devuelve como token separado",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Lo descarta, sin devolverlo como próximo carácter útil",
        "explanation": "El blanco solo se leyó para decidir que no era '='; como no forma parte de ningún token, se descarta.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Lo incluye en el lexema",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Genera un error léxico",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "El blanco solo se leyó para decidir que no era '='; como no forma parte de ningún token, se descarta.",
    "sourceCatedra": "Banco Extra Cátedra L06 (P065)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.1-3.5; Levine (Lex & Yacc)"
  },
  {
    "id": "L06-P066",
    "lessonId": "L06",
    "lessonTitle": "Lección 06 — Análisis Léxico",
    "topic": "Análisis léxico",
    "points": 5,
    "questionText": "En el pipeline ER → AFND → AFD → código, ¿qué algoritmo pasa de la ER al AFND?",
    "options": [
      {
        "id": "A",
        "text": "Minimización de estados",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Construcción de Thompson",
        "explanation": "Thompson: ER → AFND. Subconjuntos: AFND → AFD. Luego minimización y código (cada estado, un case de un switch).",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Conversión por subconjuntos",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Algoritmo de Earley",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Thompson: ER → AFND. Subconjuntos: AFND → AFD. Luego minimización y código (cada estado, un case de un switch).",
    "sourceCatedra": "Banco Extra Cátedra L06 (P066) [K1]",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.1-3.5; Levine (Lex & Yacc)"
  },
  {
    "id": "L06-P067",
    "lessonId": "L06",
    "lessonTitle": "Lección 06 — Análisis Léxico",
    "topic": "Análisis léxico",
    "points": 2,
    "questionText": "¿Qué ER describe al token id (identificador) según la cátedra?",
    "options": [
      {
        "id": "A",
        "text": "(letra|dígito)+",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "dígito(letra|dígito)*",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "letra(letra|dígito)*",
        "explanation": "Una letra seguida de cero o más letras y/o dígitos. Ej.: \"pi\", \"D2\", \"suma\".",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "letra*dígito*",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Una letra seguida de cero o más letras y/o dígitos. Ej.: \"pi\", \"D2\", \"suma\".",
    "sourceCatedra": "Banco Extra Cátedra L06 (P067)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.1-3.5; Levine (Lex & Yacc)"
  },
  {
    "id": "L06-P068",
    "lessonId": "L06",
    "lessonTitle": "Lección 06 — Análisis Léxico",
    "topic": "Análisis léxico",
    "points": 5,
    "questionText": "¿Por qué no conviene construir el analizador léxico 'a mano'?",
    "options": [
      {
        "id": "A",
        "text": "Porque no usa autómatas",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Porque es tedioso, propenso a errores y difícil de mantener; solo sirve para lenguajes muy pequeños",
        "explanation": "Por eso se usan generadores (Lex, Flex, PLY): reducen el tiempo de desarrollo, los errores manuales y el código es más mantenible.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Porque es imposible",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Porque no puede detectar errores",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Por eso se usan generadores (Lex, Flex, PLY): reducen el tiempo de desarrollo, los errores manuales y el código es más mantenible.",
    "sourceCatedra": "Banco Extra Cátedra L06 (P068)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.1-3.5; Levine (Lex & Yacc)"
  },
  {
    "id": "L06-P069",
    "lessonId": "L06",
    "lessonTitle": "Lección 06 — Análisis Léxico",
    "topic": "Análisis léxico",
    "points": 2,
    "questionText": "En el pseudocódigo de la cátedra que reconoce identificadores con un switch, ¿cuándo se acepta la cadena?",
    "options": [
      {
        "id": "A",
        "text": "Si al terminar el estado es 1",
        "explanation": "Estado 0: letra → 1, dígito → 2. Estado 1: letra o dígito → 1. Estado 2: error. Al final: si estado = 1 aceptar, si no error.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Si el primer carácter es un dígito",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Siempre que no haya blancos",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Si al terminar el estado es 2",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Estado 0: letra → 1, dígito → 2. Estado 1: letra o dígito → 1. Estado 2: error. Al final: si estado = 1 aceptar, si no error.",
    "sourceCatedra": "Banco Extra Cátedra L06 (P069)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.1-3.5; Levine (Lex & Yacc)"
  },
  {
    "id": "L06-P070",
    "lessonId": "L06",
    "lessonTitle": "Lección 06 — Análisis Léxico",
    "topic": "Generadores",
    "points": 5,
    "questionText": "¿Qué generador de analizadores léxicos produce código Java?",
    "options": [
      {
        "id": "A",
        "text": "LEX",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "JFLEX",
        "explanation": "LEX → C; FLEX → C++; JFLEX → Java; TPLEX → Pascal; PLY → Python.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "FLEX",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "PLY",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "E",
        "text": "TPLEX",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "LEX → C; FLEX → C++; JFLEX → Java; TPLEX → Pascal; PLY → Python.",
    "sourceCatedra": "Banco Extra Cátedra L06 (P070) [K2]",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.1-3.5; Levine (Lex & Yacc)"
  },
  {
    "id": "L07-P071",
    "lessonId": "L07",
    "lessonTitle": "Lección 07 — PLY Lex y Autómatas con Pila",
    "topic": "PLY Lex",
    "points": 5,
    "questionText": "En PLY, ¿qué es lo que se genera como analizador léxico?",
    "options": [
      {
        "id": "A",
        "text": "Un archivo en C",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Un archivo ejecutable .exe",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Una tabla LL(1)",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Una función/objeto Python que recibe el programa fuente",
        "explanation": "A diferencia de otras versiones de Lex que generan un programa aparte, en PLY el analizador es una función que toma como entrada el fuente.",
        "isCorrect": true
      }
    ],
    "theorySummary": "A diferencia de otras versiones de Lex que generan un programa aparte, en PLY el analizador es una función que toma como entrada el fuente.",
    "sourceCatedra": "Banco Extra Cátedra L07 (P071) [K2]",
    "sourceBook": "Aho et al. Cap. 3; Beazley (PLY Documentation); Hopcroft & Ullman"
  },
  {
    "id": "L07-P072",
    "lessonId": "L07",
    "lessonTitle": "Lección 07 — PLY Lex y Autómatas con Pila",
    "topic": "PLY Lex",
    "points": 5,
    "questionText": "En PLY, ¿cómo se declara la lista de tokens?",
    "options": [
      {
        "id": "A",
        "text": "%token ID NUMERO",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "def tokens(): …",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "tokens = ['ID', 'NUMERO']",
        "explanation": "Variable 'tokens' con los nombres; cada token se define con una regla t_NOMBRE.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "lex.tokens(ID, NUMERO)",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Variable 'tokens' con los nombres; cada token se define con una regla t_NOMBRE.",
    "sourceCatedra": "Banco Extra Cátedra L07 (P072) [K3]",
    "sourceBook": "Aho et al. Cap. 3; Beazley (PLY Documentation); Hopcroft & Ullman"
  },
  {
    "id": "L07-P073",
    "lessonId": "L07",
    "lessonTitle": "Lección 07 — PLY Lex y Autómatas con Pila",
    "topic": "PLY Lex",
    "points": 5,
    "questionText": "¿Qué prefijo deben llevar las reglas que definen tokens en PLY?",
    "options": [
      {
        "id": "A",
        "text": "t_",
        "explanation": "Ej.: t_ID = r'[a-zA-Z][a-zA-Z0-9_]*', t_NUMERO = r'[0-9]+'. (p_ se usa en Yacc para reglas sintácticas).",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "tok_",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "lex_",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "p_",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Ej.: t_ID = r'[a-zA-Z][a-zA-Z0-9_]*', t_NUMERO = r'[0-9]+'. (p_ se usa en Yacc para reglas sintácticas).",
    "sourceCatedra": "Banco Extra Cátedra L07 (P073)",
    "sourceBook": "Aho et al. Cap. 3; Beazley (PLY Documentation); Hopcroft & Ullman"
  },
  {
    "id": "L07-P074",
    "lessonId": "L07",
    "lessonTitle": "Lección 07 — PLY Lex y Autómatas con Pila",
    "topic": "PLY Lex",
    "points": 2,
    "questionText": "¿Qué hace  t.lexer.skip(1)  dentro de t_error(t)?",
    "options": [
      {
        "id": "A",
        "text": "Vuelve un carácter atrás",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Saltea el carácter inválido y continúa",
        "explanation": "t_error informa el carácter no reconocido (t.value[0]) y skip(1) avanza un carácter para seguir analizando.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Ignora la línea entera",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Termina el análisis",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "t_error informa el carácter no reconocido (t.value[0]) y skip(1) avanza un carácter para seguir analizando.",
    "sourceCatedra": "Banco Extra Cátedra L07 (P074)",
    "sourceBook": "Aho et al. Cap. 3; Beazley (PLY Documentation); Hopcroft & Ullman"
  },
  {
    "id": "L07-P075",
    "lessonId": "L07",
    "lessonTitle": "Lección 07 — PLY Lex y Autómatas con Pila",
    "topic": "PLY Lex",
    "points": 5,
    "questionText": "¿Qué instrucción construye el analizador léxico en PLY?",
    "options": [
      {
        "id": "A",
        "text": "lexer = input()",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "lexer = lex.lex()",
        "explanation": "Luego se le pasa la entrada con lexer.input(data) y se recorren los tokens.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "lexer = yacc.yacc()",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "lexer = lex.build(tokens)",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Luego se le pasa la entrada con lexer.input(data) y se recorren los tokens.",
    "sourceCatedra": "Banco Extra Cátedra L07 (P075) [K3]",
    "sourceBook": "Aho et al. Cap. 3; Beazley (PLY Documentation); Hopcroft & Ullman"
  },
  {
    "id": "L07-P076",
    "lessonId": "L07",
    "lessonTitle": "Lección 07 — PLY Lex y Autómatas con Pila",
    "topic": "PLY Lex",
    "points": 5,
    "questionText": "¿Qué ER usa la cátedra en PLY para los identificadores?",
    "options": [
      {
        "id": "A",
        "text": "r'[a-z]+[0-9]'",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "r'.*'",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "r'[0-9]+'",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "r'[a-zA-Z][a-zA-Z0-9_]*'",
        "explanation": "Empieza con letra (mayúscula o minúscula) y sigue con letras, dígitos o guion bajo.",
        "isCorrect": true
      }
    ],
    "theorySummary": "Empieza con letra (mayúscula o minúscula) y sigue con letras, dígitos o guion bajo.",
    "sourceCatedra": "Banco Extra Cátedra L07 (P076)",
    "sourceBook": "Aho et al. Cap. 3; Beazley (PLY Documentation); Hopcroft & Ullman"
  },
  {
    "id": "L07-P077",
    "lessonId": "L07",
    "lessonTitle": "Lección 07 — PLY Lex y Autómatas con Pila",
    "topic": "PLY Lex",
    "points": 5,
    "questionText": "Lex se utiliza generalmente junto con:",
    "options": [
      {
        "id": "A",
        "text": "Un intérprete de BASIC",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Yacc, generador de analizadores sintácticos",
        "explanation": "Lex genera el léxico y Yacc el sintáctico; en el curso se usa PLY (Python Lex-Yacc).",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Un minimizador de AFD",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Una máquina de Turing",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Lex genera el léxico y Yacc el sintáctico; en el curso se usa PLY (Python Lex-Yacc).",
    "sourceCatedra": "Banco Extra Cátedra L07 (P077)",
    "sourceBook": "Aho et al. Cap. 3; Beazley (PLY Documentation); Hopcroft & Ullman"
  },
  {
    "id": "L08-P078",
    "lessonId": "L08",
    "lessonTitle": "Lección 08 — Gramáticas Libres de Contexto",
    "topic": "Autómatas con pila",
    "points": 5,
    "questionText": "¿Por qué un autómata finito no reconoce L = {x^ny^n | n ≥ 0}?",
    "options": [
      {
        "id": "A",
        "text": "Solo los no deterministas leen cadenas infinitas",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Debe contar una cantidad no acotada de x y solo tiene memoria finita (estados)",
        "explanation": "Lo mismo pasa con los paréntesis anidados: hace falta memoria para contar, y eso aporta la pila.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Las ER no admiten la letra y",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "El alfabeto no tiene suficientes símbolos",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Lo mismo pasa con los paréntesis anidados: hace falta memoria para contar, y eso aporta la pila.",
    "sourceCatedra": "Banco Extra Cátedra L08 (P078)",
    "sourceBook": "Aho et al. Cap. 4.1-4.3; Hopcroft, Motwani & Ullman Cap. 5-6"
  },
  {
    "id": "L08-P079",
    "lessonId": "L08",
    "lessonTitle": "Lección 08 — Gramáticas Libres de Contexto",
    "topic": "Autómatas con pila",
    "points": 5,
    "questionText": "¿Cuál NO es una de las acciones de una transición de un AP?",
    "options": [
      {
        "id": "A",
        "text": "Leer un símbolo de entrada (o ε)",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Mover la cabeza hacia la izquierda en la cinta",
        "explanation": "Moverse a izquierda/derecha es propio de la MT. El AP: lee, desapila, apila y cambia de estado.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Apilar símbolos (o ε)",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Extraer el tope de la pila (o ε)",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Moverse a izquierda/derecha es propio de la MT. El AP: lee, desapila, apila y cambia de estado.",
    "sourceCatedra": "Banco Extra Cátedra L08 (P079)",
    "sourceBook": "Aho et al. Cap. 4.1-4.3; Hopcroft, Motwani & Ullman Cap. 5-6"
  },
  {
    "id": "L08-P080",
    "lessonId": "L08",
    "lessonTitle": "Lección 08 — Gramáticas Libres de Contexto",
    "topic": "Autómatas con pila",
    "points": 2,
    "questionText": "Según la cátedra, un AP acepta una cadena cuando:",
    "options": [
      {
        "id": "A",
        "text": "Termina de leer la entrada aunque la pila no esté vacía",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Llega a un estado final aunque quede entrada",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "La pila contiene solo #",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Se leyó toda la entrada, está en estado final y la pila está vacía",
        "explanation": "Las tres condiciones a la vez. Si falta cualquiera, la cadena se rechaza.",
        "isCorrect": true
      }
    ],
    "theorySummary": "Las tres condiciones a la vez. Si falta cualquiera, la cadena se rechaza.",
    "sourceCatedra": "Banco Extra Cátedra L08 (P080)",
    "sourceBook": "Aho et al. Cap. 4.1-4.3; Hopcroft, Motwani & Ullman Cap. 5-6"
  },
  {
    "id": "L08-P081",
    "lessonId": "L08",
    "lessonTitle": "Lección 08 — Gramáticas Libres de Contexto",
    "topic": "Autómatas con pila",
    "points": 2,
    "questionText": "Sobre AP deterministas (APD) y no deterministas (APND):",
    "options": [
      {
        "id": "A",
        "text": "Los APD son más potentes",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Los APND no existen",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Existen lenguajes aceptados por APND que ningún APD acepta",
        "explanation": "APD ⊂ APND (a diferencia de AFD ≡ AFND). Los APND son la base formal del análisis sintáctico.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Tienen el mismo poder, como AFD y AFND",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "APD ⊂ APND (a diferencia de AFD ≡ AFND). Los APND son la base formal del análisis sintáctico.",
    "sourceCatedra": "Banco Extra Cátedra L08 (P081)",
    "sourceBook": "Aho et al. Cap. 4.1-4.3; Hopcroft, Motwani & Ullman Cap. 5-6"
  },
  {
    "id": "L08-P082",
    "lessonId": "L08",
    "lessonTitle": "Lección 08 — Gramáticas Libres de Contexto",
    "topic": "Autómatas con pila",
    "points": 2,
    "questionText": "En la definición formal del AP M = (Q, Σ, Γ, δ, q0, z, F), ¿qué es z?",
    "options": [
      {
        "id": "A",
        "text": "El alfabeto de la pila",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "El símbolo inicial de la pila (marca el fondo, ej. #)",
        "explanation": "Γ es el alfabeto de la pila; z (ej. #) marca el fondo: si está en el tope, la pila 'está vacía'.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "El estado final",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "El símbolo blanco",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Γ es el alfabeto de la pila; z (ej. #) marca el fondo: si está en el tope, la pila 'está vacía'.",
    "sourceCatedra": "Banco Extra Cátedra L08 (P082) [K2]",
    "sourceBook": "Aho et al. Cap. 4.1-4.3; Hopcroft, Motwani & Ullman Cap. 5-6"
  },
  {
    "id": "L08-P083",
    "lessonId": "L08",
    "lessonTitle": "Lección 08 — Gramáticas Libres de Contexto",
    "topic": "Autómatas con pila",
    "points": 2,
    "questionText": "La transición (p, a, s ; q, xyz) apila xyz. ¿Qué símbolo queda en el tope?",
    "options": [
      {
        "id": "A",
        "text": "z",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "s",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "y",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "x",
        "explanation": "Se apila de derecha a izquierda: primero z, luego y, luego x. x queda en la cima.",
        "isCorrect": true
      }
    ],
    "theorySummary": "Se apila de derecha a izquierda: primero z, luego y, luego x. x queda en la cima.",
    "sourceCatedra": "Banco Extra Cátedra L08 (P083)",
    "sourceBook": "Aho et al. Cap. 4.1-4.3; Hopcroft, Motwani & Ullman Cap. 5-6"
  },
  {
    "id": "L08-P084",
    "lessonId": "L08",
    "lessonTitle": "Lección 08 — Gramáticas Libres de Contexto",
    "topic": "Autómatas con pila",
    "points": 2,
    "questionText": "La transición (p, ε, s ; q, ε):",
    "options": [
      {
        "id": "A",
        "text": "Apila s",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Extrae s de la pila y cambia de estado sin consumir entrada",
        "explanation": "(p, ε, ε ; q, ε) solo cambia de estado; (p, x, ε ; q, a) lee x y apila a sin desapilar.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Lee s y apila ε",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Solo cambia de estado",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "(p, ε, ε ; q, ε) solo cambia de estado; (p, x, ε ; q, a) lee x y apila a sin desapilar.",
    "sourceCatedra": "Banco Extra Cátedra L08 (P084)",
    "sourceBook": "Aho et al. Cap. 4.1-4.3; Hopcroft, Motwani & Ullman Cap. 5-6"
  },
  {
    "id": "L08-P085",
    "lessonId": "L08",
    "lessonTitle": "Lección 08 — Gramáticas Libres de Contexto",
    "topic": "Autómatas con pila",
    "points": 8,
    "questionText": "Una traza de ejecución de un AP registra en cada paso:",
    "options": [
      {
        "id": "A",
        "text": "El contenido de la pila, la entrada que falta leer y la transición aplicada",
        "explanation": "Es la herramienta para verificar si una cadena es aceptada o rechazada.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Solo el estado actual",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "El árbol sintáctico",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Las producciones de la gramática",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Es la herramienta para verificar si una cadena es aceptada o rechazada.",
    "sourceCatedra": "Banco Extra Cátedra L08 (P085)",
    "sourceBook": "Aho et al. Cap. 4.1-4.3; Hopcroft, Motwani & Ullman Cap. 5-6"
  },
  {
    "id": "L08-P086",
    "lessonId": "L08",
    "lessonTitle": "Lección 08 — Gramáticas Libres de Contexto",
    "topic": "Autómatas con pila",
    "points": 2,
    "questionText": "El AP de la clase para L = {x^nyᵐx^n}, al leer las y del medio:",
    "options": [
      {
        "id": "A",
        "text": "Rechaza la cadena",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Apila una y por cada y",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Las lee sin tocar la pila",
        "explanation": "Apila las primeras x, lee las y sin modificar la pila y desapila con las x finales. Si m = 0 aparece el no determinismo.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Desapila una x por cada y",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Apila las primeras x, lee las y sin modificar la pila y desapila con las x finales. Si m = 0 aparece el no determinismo.",
    "sourceCatedra": "Banco Extra Cátedra L08 (P086)",
    "sourceBook": "Aho et al. Cap. 4.1-4.3; Hopcroft, Motwani & Ullman Cap. 5-6"
  },
  {
    "id": "L08-P087",
    "lessonId": "L08",
    "lessonTitle": "Lección 08 — Gramáticas Libres de Contexto",
    "topic": "GIC",
    "points": 8,
    "questionText": "En una producción A → α de una GIC, el lado izquierdo A:",
    "options": [
      {
        "id": "A",
        "text": "Puede ser cualquier cadena",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Contiene al menos un terminal y un no terminal",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Es exactamente un único no terminal",
        "explanation": "Por eso A se reemplaza 'independientemente del contexto'. Si fuera αAβ sería Tipo 1.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Es ε",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Por eso A se reemplaza 'independientemente del contexto'. Si fuera αAβ sería Tipo 1.",
    "sourceCatedra": "Banco Extra Cátedra L08 (P087)",
    "sourceBook": "Aho et al. Cap. 4.1-4.3; Hopcroft, Motwani & Ullman Cap. 5-6"
  },
  {
    "id": "L08-P088",
    "lessonId": "L08",
    "lessonTitle": "Lección 08 — Gramáticas Libres de Contexto",
    "topic": "GIC",
    "points": 8,
    "questionText": "¿Qué GIC genera L = {x^ny^n | n ≥ 0}?",
    "options": [
      {
        "id": "A",
        "text": "S → Sxy | ε",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "S → xy | ε",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "S → xS | yS | ε",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "S → xSy | ε",
        "explanation": "Cada aplicación de S → xSy agrega una x y una y balanceadas; S → ε termina (incluye n = 0).",
        "isCorrect": true
      }
    ],
    "theorySummary": "Cada aplicación de S → xSy agrega una x y una y balanceadas; S → ε termina (incluye n = 0).",
    "sourceCatedra": "Banco Extra Cátedra L08 (P088)",
    "sourceBook": "Aho et al. Cap. 4.1-4.3; Hopcroft, Motwani & Ullman Cap. 5-6"
  },
  {
    "id": "L08-P089",
    "lessonId": "L08",
    "lessonTitle": "Lección 08 — Gramáticas Libres de Contexto",
    "topic": "GIC",
    "points": 8,
    "questionText": "¿Qué GIC genera L = {x^nyᵐ | n ≥ m ≥ 0}?",
    "options": [
      {
        "id": "A",
        "text": "S → xSy | ε",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "S → xS | yS | ε",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "S → xSy | xS | ε",
        "explanation": "xSy agrega pares balanceados y xS agrega x extra, así que nunca hay más y que x.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "S → xSyy | ε",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "xSy agrega pares balanceados y xS agrega x extra, así que nunca hay más y que x.",
    "sourceCatedra": "Banco Extra Cátedra L08 (P089) [K2]",
    "sourceBook": "Aho et al. Cap. 4.1-4.3; Hopcroft, Motwani & Ullman Cap. 5-6"
  },
  {
    "id": "L08-P090",
    "lessonId": "L08",
    "lessonTitle": "Lección 08 — Gramáticas Libres de Contexto",
    "topic": "GIC",
    "points": 8,
    "questionText": "En la gramática  S → (L) | a ;  L → L,S | S , los terminales son:",
    "options": [
      {
        "id": "A",
        "text": "( ) , a",
        "explanation": "T = { (, ), ',', a }; N = {S, L}; símbolo inicial S.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "a",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "( )",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "S, L",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "T = { (, ), ',', a }; N = {S, L}; símbolo inicial S.",
    "sourceCatedra": "Banco Extra Cátedra L08 (P090) [K1]",
    "sourceBook": "Aho et al. Cap. 4.1-4.3; Hopcroft, Motwani & Ullman Cap. 5-6"
  },
  {
    "id": "L08-P091",
    "lessonId": "L08",
    "lessonTitle": "Lección 08 — Gramáticas Libres de Contexto",
    "topic": "Derivaciones",
    "points": 8,
    "questionText": "En una derivación por la izquierda, en cada paso se reemplaza:",
    "options": [
      {
        "id": "A",
        "text": "El no terminal de más a la izquierda",
        "explanation": "Ej.: S ⇒L zMNz ⇒L zaMaNz ⇒L … La derivación por derecha reemplaza siempre el NT de más a la derecha.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "El símbolo inicial",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "El no terminal de más a la derecha",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Cualquier terminal",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Ej.: S ⇒L zMNz ⇒L zaMaNz ⇒L … La derivación por derecha reemplaza siempre el NT de más a la derecha.",
    "sourceCatedra": "Banco Extra Cátedra L08 (P091)",
    "sourceBook": "Aho et al. Cap. 4.1-4.3; Hopcroft, Motwani & Ullman Cap. 5-6"
  },
  {
    "id": "L08-P092",
    "lessonId": "L08",
    "lessonTitle": "Lección 08 — Gramáticas Libres de Contexto",
    "topic": "Ambigüedad",
    "points": 8,
    "questionText": "Que una cadena tenga una derivación por izquierda y otra por derecha distintas:",
    "options": [
      {
        "id": "A",
        "text": "Prueba que la gramática es ambigua",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Es imposible en una GIC",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "No implica ambigüedad: pueden corresponder al mismo árbol",
        "explanation": "La ambigüedad requiere dos árboles distintos, no dos derivaciones.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Prueba que la gramática es regular",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "La ambigüedad requiere dos árboles distintos, no dos derivaciones.",
    "sourceCatedra": "Banco Extra Cátedra L08 (P092) [K1]",
    "sourceBook": "Aho et al. Cap. 4.1-4.3; Hopcroft, Motwani & Ullman Cap. 5-6"
  },
  {
    "id": "L08-P093",
    "lessonId": "L08",
    "lessonTitle": "Lección 08 — Gramáticas Libres de Contexto",
    "topic": "Ambigüedad",
    "points": 8,
    "questionText": "Para la gramática E → E+E | E×E | (E) | nro, la cadena 5×2+9:",
    "options": [
      {
        "id": "A",
        "text": "Solo tiene derivación por izquierda",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "No pertenece al lenguaje",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Tiene dos árboles (5×(2+9) = 55 y (5×2)+9 = 19): la gramática es ambigua",
        "explanation": "Se corrige con niveles de NT: E → E+T | T ; T → T×F | F ; F → (E) | nro.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Tiene un único árbol",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Se corrige con niveles de NT: E → E+T | T ; T → T×F | F ; F → (E) | nro.",
    "sourceCatedra": "Banco Extra Cátedra L08 (P093)",
    "sourceBook": "Aho et al. Cap. 4.1-4.3; Hopcroft, Motwani & Ullman Cap. 5-6"
  },
  {
    "id": "L08-P094",
    "lessonId": "L08",
    "lessonTitle": "Lección 08 — Gramáticas Libres de Contexto",
    "topic": "Ambigüedad",
    "points": 8,
    "questionText": "¿Qué gramática de expresiones NO es ambigua y respeta que × tenga más precedencia que +?",
    "options": [
      {
        "id": "A",
        "text": "E → E+E | E×E | (E) | nro",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "E → T+E | E ;  T → nro",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "E → E×E | nro",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "E → E+T | T ;  T → T×F | F ;  F → (E) | nro",
        "explanation": "La jerarquía E/T/F fuerza que la multiplicación quede más abajo en el árbol (se evalúa primero).",
        "isCorrect": true
      }
    ],
    "theorySummary": "La jerarquía E/T/F fuerza que la multiplicación quede más abajo en el árbol (se evalúa primero).",
    "sourceCatedra": "Banco Extra Cátedra L08 (P094) [K1]",
    "sourceBook": "Aho et al. Cap. 4.1-4.3; Hopcroft, Motwani & Ullman Cap. 5-6"
  },
  {
    "id": "L08-P095",
    "lessonId": "L08",
    "lessonTitle": "Lección 08 — Gramáticas Libres de Contexto",
    "topic": "Ambigüedad",
    "points": 2,
    "questionText": "El problema del \"dangling else\" es un ejemplo de:",
    "options": [
      {
        "id": "A",
        "text": "Ambigüedad",
        "explanation": "En 'if c1 then if c2 then a1 else a2' el else puede asociarse a cualquiera de los if. C/Java lo asocian al if más cercano.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Recursividad por la izquierda",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Error léxico",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Símbolo inaccesible",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "En 'if c1 then if c2 then a1 else a2' el else puede asociarse a cualquiera de los if. C/Java lo asocian al if más cercano.",
    "sourceCatedra": "Banco Extra Cátedra L08 (P095) [K3]",
    "sourceBook": "Aho et al. Cap. 4.1-4.3; Hopcroft, Motwani & Ullman Cap. 5-6"
  },
  {
    "id": "L08-P096",
    "lessonId": "L08",
    "lessonTitle": "Lección 08 — Gramáticas Libres de Contexto",
    "topic": "Ambigüedad",
    "points": 8,
    "questionText": "Según el apunte de la cátedra, determinar si una GIC es ambigua es:",
    "options": [
      {
        "id": "A",
        "text": "Siempre decidible con un algoritmo",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Indecidible: no existe un algoritmo general que lo determine",
        "explanation": "La propiedad de ambigüedad es indecidible. Hay incluso lenguajes que no tienen gramática no ambigua (intrínsecamente ambiguos).",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Posible solo para gramáticas regulares",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Trivial con la tabla LL(1)",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "La propiedad de ambigüedad es indecidible. Hay incluso lenguajes que no tienen gramática no ambigua (intrínsecamente ambiguos).",
    "sourceCatedra": "Banco Extra Cátedra L08 (P096)",
    "sourceBook": "Aho et al. Cap. 4.1-4.3; Hopcroft, Motwani & Ullman Cap. 5-6"
  },
  {
    "id": "L08-P097",
    "lessonId": "L08",
    "lessonTitle": "Lección 08 — Gramáticas Libres de Contexto",
    "topic": "GIC ↔ AP",
    "points": 8,
    "questionText": "Para construir un AP desde una GIC (método de la cátedra), ¿cuántos estados se usan?",
    "options": [
      {
        "id": "A",
        "text": "2",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "4: i, p, q, f",
        "explanation": "(i,ε,ε;p,#), (p,ε,ε;q,S), (q,ε,A;q,w) por cada A → w, (q,x,x;q,ε) por cada terminal y (q,ε,#;f,ε).",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "3",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Uno por cada no terminal",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "(i,ε,ε;p,#), (p,ε,ε;q,S), (q,ε,A;q,w) por cada A → w, (q,x,x;q,ε) por cada terminal y (q,ε,#;f,ε).",
    "sourceCatedra": "Banco Extra Cátedra L08 (P097) [K3]",
    "sourceBook": "Aho et al. Cap. 4.1-4.3; Hopcroft, Motwani & Ullman Cap. 5-6"
  },
  {
    "id": "L08-P098",
    "lessonId": "L08",
    "lessonTitle": "Lección 08 — Gramáticas Libres de Contexto",
    "topic": "GIC ↔ AP",
    "points": 8,
    "questionText": "En ese AP, cada producción A → w de la gramática se convierte en:",
    "options": [
      {
        "id": "A",
        "text": "(q, w, w ; q, ε)",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "(q, A, ε ; q, w)",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "(p, w, A ; q, ε)",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "(q, ε, A ; q, w)",
        "explanation": "Si el tope es el NT A, se reemplaza por w (apilada de derecha a izquierda). El AP simula una derivación por izquierda.",
        "isCorrect": true
      }
    ],
    "theorySummary": "Si el tope es el NT A, se reemplaza por w (apilada de derecha a izquierda). El AP simula una derivación por izquierda.",
    "sourceCatedra": "Banco Extra Cátedra L08 (P098)",
    "sourceBook": "Aho et al. Cap. 4.1-4.3; Hopcroft, Motwani & Ullman Cap. 5-6"
  },
  {
    "id": "L08-P099",
    "lessonId": "L08",
    "lessonTitle": "Lección 08 — Gramáticas Libres de Contexto",
    "topic": "GIC ↔ AP",
    "points": 8,
    "questionText": "¿Por qué el AP construido desde S → zMNz ; M → aMa | z ; N → bNb | z es no determinista?",
    "options": [
      {
        "id": "A",
        "text": "Porque lee la entrada de izquierda a derecha",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Porque usa #",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Porque con M en el tope hay dos transiciones posibles (M → aMa y M → z)",
        "explanation": "El AP 'prueba' ambas alternativas y acepta si alguna conduce al éxito.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Porque tiene 4 estados",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "El AP 'prueba' ambas alternativas y acepta si alguna conduce al éxito.",
    "sourceCatedra": "Banco Extra Cátedra L08 (P099)",
    "sourceBook": "Aho et al. Cap. 4.1-4.3; Hopcroft, Motwani & Ullman Cap. 5-6"
  },
  {
    "id": "L09-P100",
    "lessonId": "L09",
    "lessonTitle": "Lección 09 — Máquinas de Turing",
    "topic": "Máquina de Turing",
    "points": 5,
    "questionText": "¿Cuál es el autómata más simple que reconoce L = {a^nb^nc^n}?",
    "options": [
      {
        "id": "A",
        "text": "Autómata con pila",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Autómata finito",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Expresión regular",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Máquina de Turing",
        "explanation": "aⁿbⁿcⁿ y ww no son independientes del contexto: ningún AP los reconoce. Una MT sí (marcando símbolos en la cinta).",
        "isCorrect": true
      }
    ],
    "theorySummary": "aⁿbⁿcⁿ y ww no son independientes del contexto: ningún AP los reconoce. Una MT sí (marcando símbolos en la cinta).",
    "sourceCatedra": "Banco Extra Cátedra L09 (P100) [K1]",
    "sourceBook": "Linz (Formal Languages and Automata) Cap. 9-11; Sipser Cap. 3"
  },
  {
    "id": "L09-P101",
    "lessonId": "L09",
    "lessonTitle": "Lección 09 — Máquinas de Turing",
    "topic": "Máquina de Turing",
    "points": 5,
    "questionText": "En la definición M = (Q, Σ, Γ, δ, q0, □, F), ¿qué es □?",
    "options": [
      {
        "id": "A",
        "text": "El estado inicial",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "El estado final",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "El símbolo blanco (celda vacía)",
        "explanation": "□ ∈ Γ y □ ∉ Σ: los blancos delimitan la entrada en la cinta, por eso no se usan como parte de la entrada.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "El alfabeto de la cinta",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "□ ∈ Γ y □ ∉ Σ: los blancos delimitan la entrada en la cinta, por eso no se usan como parte de la entrada.",
    "sourceCatedra": "Banco Extra Cátedra L09 (P101) [K3]",
    "sourceBook": "Linz (Formal Languages and Automata) Cap. 9-11; Sipser Cap. 3"
  },
  {
    "id": "L09-P102",
    "lessonId": "L09",
    "lessonTitle": "Lección 09 — Máquinas de Turing",
    "topic": "Máquina de Turing",
    "points": 2,
    "questionText": "δ(q1, a) = (q2, b, R) significa:",
    "options": [
      {
        "id": "A",
        "text": "Lee b y escribe a",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "En q2 leyendo b: vuelve a q1",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Apila b y desapila a",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "En q1 leyendo a: pasa a q2, escribe b y mueve la cabeza a la derecha",
        "explanation": "En los diagramas se escribe 'a, b, R' (leído, escrito, movimiento).",
        "isCorrect": true
      }
    ],
    "theorySummary": "En los diagramas se escribe 'a, b, R' (leído, escrito, movimiento).",
    "sourceCatedra": "Banco Extra Cátedra L09 (P102)",
    "sourceBook": "Linz (Formal Languages and Automata) Cap. 9-11; Sipser Cap. 3"
  },
  {
    "id": "L09-P103",
    "lessonId": "L09",
    "lessonTitle": "Lección 09 — Máquinas de Turing",
    "topic": "Máquina de Turing",
    "points": 2,
    "questionText": "Sobre el determinismo de la máquina de Turing estándar:",
    "options": [
      {
        "id": "A",
        "text": "Es siempre no determinista",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Admite varias transiciones para el mismo (estado, símbolo)",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Solo admite transiciones vacías",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Es determinista y no admite transiciones vacías",
        "explanation": "Para cada (q, a) hay como mucho una transición; δ es una función parcial.",
        "isCorrect": true
      }
    ],
    "theorySummary": "Para cada (q, a) hay como mucho una transición; δ es una función parcial.",
    "sourceCatedra": "Banco Extra Cátedra L09 (P103) [K2]",
    "sourceBook": "Linz (Formal Languages and Automata) Cap. 9-11; Sipser Cap. 3"
  },
  {
    "id": "L09-P104",
    "lessonId": "L09",
    "lessonTitle": "Lección 09 — Máquinas de Turing",
    "topic": "Máquina de Turing",
    "points": 5,
    "questionText": "¿Cuándo para (se detiene) una máquina de Turing?",
    "options": [
      {
        "id": "A",
        "text": "Cuando llega a una configuración para la cual δ no está definida",
        "explanation": "Además no se definen transiciones desde los estados finales, así que siempre para al llegar a un estado final.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Después de n pasos",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Cuando la cinta se llena",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Cuando lee un blanco",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Además no se definen transiciones desde los estados finales, así que siempre para al llegar a un estado final.",
    "sourceCatedra": "Banco Extra Cátedra L09 (P104)",
    "sourceBook": "Linz (Formal Languages and Automata) Cap. 9-11; Sipser Cap. 3"
  },
  {
    "id": "L09-P105",
    "lessonId": "L09",
    "lessonTitle": "Lección 09 — Máquinas de Turing",
    "topic": "Máquina de Turing",
    "points": 2,
    "questionText": "Una MT rechaza una cadena si:",
    "options": [
      {
        "id": "A",
        "text": "Para en un estado no final o entra en un bucle infinito",
        "explanation": "Aceptar exige parar en un estado final.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Escribe un blanco",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Mueve la cabeza a la izquierda",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Para en un estado final",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Aceptar exige parar en un estado final.",
    "sourceCatedra": "Banco Extra Cátedra L09 (P105) [K1]",
    "sourceBook": "Linz (Formal Languages and Automata) Cap. 9-11; Sipser Cap. 3"
  },
  {
    "id": "L09-P106",
    "lessonId": "L09",
    "lessonTitle": "Lección 09 — Máquinas de Turing",
    "topic": "Máquina de Turing",
    "points": 2,
    "questionText": "En la descripción instantánea  a1 a2 … ak-1 q ak … an , la cabeza está sobre:",
    "options": [
      {
        "id": "A",
        "text": "ak-1",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "ak",
        "explanation": "El estado se escribe inmediatamente a la izquierda del símbolo que se está leyendo. ⊢ indica un movimiento y ⊢* varios.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "a1",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "an",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "El estado se escribe inmediatamente a la izquierda del símbolo que se está leyendo. ⊢ indica un movimiento y ⊢* varios.",
    "sourceCatedra": "Banco Extra Cátedra L09 (P106)",
    "sourceBook": "Linz (Formal Languages and Automata) Cap. 9-11; Sipser Cap. 3"
  },
  {
    "id": "L09-P107",
    "lessonId": "L09",
    "lessonTitle": "Lección 09 — Máquinas de Turing",
    "topic": "Máquina de Turing",
    "points": 5,
    "questionText": "La MT con δ(q0,a) = (q0,b,R), δ(q0,b) = (q0,b,R), δ(q0,□) = (q1,□,L) y F = {q1}, partiendo de 'aa':",
    "options": [
      {
        "id": "A",
        "text": "Rechaza la cadena",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Deja 'aa' sin cambios",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Entra en bucle infinito",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Termina con 'bb' en la cinta y acepta",
        "explanation": "Reemplaza cada a por b moviéndose a la derecha; al ver □ pasa a q1 (final): q0aa ⊢ bq0a ⊢ bbq0□ ⊢ bq1b.",
        "isCorrect": true
      }
    ],
    "theorySummary": "Reemplaza cada a por b moviéndose a la derecha; al ver □ pasa a q1 (final): q0aa ⊢ bq0a ⊢ bbq0□ ⊢ bq1b.",
    "sourceCatedra": "Banco Extra Cátedra L09 (P107)",
    "sourceBook": "Linz (Formal Languages and Automata) Cap. 9-11; Sipser Cap. 3"
  },
  {
    "id": "L09-P108",
    "lessonId": "L09",
    "lessonTitle": "Lección 09 — Máquinas de Turing",
    "topic": "Máquina de Turing",
    "points": 5,
    "questionText": "La MT de la cátedra para a^nb^n usa la cinta para:",
    "options": [
      {
        "id": "A",
        "text": "Apilar las a",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Contar en binario",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Marcar cada a como x y su b correspondiente como y, yendo y volviendo",
        "explanation": "Cuando no quedan a sin marcar verifica que no queden b; si hay más a que b para en un estado no final.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Borrar toda la cinta",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Cuando no quedan a sin marcar verifica que no queden b; si hay más a que b para en un estado no final.",
    "sourceCatedra": "Banco Extra Cátedra L09 (P108)",
    "sourceBook": "Linz (Formal Languages and Automata) Cap. 9-11; Sipser Cap. 3"
  },
  {
    "id": "L09-P109",
    "lessonId": "L09",
    "lessonTitle": "Lección 09 — Máquinas de Turing",
    "topic": "Máquina de Turing",
    "points": 5,
    "questionText": "Una MT transductora:",
    "options": [
      {
        "id": "A",
        "text": "No tiene estados finales",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Calcula una función: lo que queda en la cinta al parar es f(w)",
        "explanation": "q0w ⊢* qf f(w). Una función es Turing-computable si existe una MT que la calcula para todo w del dominio.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Solo dice si una cadena pertenece o no al lenguaje",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Solo trabaja con pila",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "q0w ⊢* qf f(w). Una función es Turing-computable si existe una MT que la calcula para todo w del dominio.",
    "sourceCatedra": "Banco Extra Cátedra L09 (P109)",
    "sourceBook": "Linz (Formal Languages and Automata) Cap. 9-11; Sipser Cap. 3"
  },
  {
    "id": "L09-P110",
    "lessonId": "L09",
    "lessonTitle": "Lección 09 — Máquinas de Turing",
    "topic": "Máquina de Turing",
    "points": 5,
    "questionText": "En la MT de suma unaria (x0y), con entrada 111 0 11 (3 + 2), al terminar la cinta contiene:",
    "options": [
      {
        "id": "A",
        "text": "1110110",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "111011",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "111110",
        "explanation": "Reemplaza el 0 separador por 1 (concatena), va al final y convierte el último 1 en 0: x+y = 5 unos seguidos de 0.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "11111",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Reemplaza el 0 separador por 1 (concatena), va al final y convierte el último 1 en 0: x+y = 5 unos seguidos de 0.",
    "sourceCatedra": "Banco Extra Cátedra L09 (P110)",
    "sourceBook": "Linz (Formal Languages and Automata) Cap. 9-11; Sipser Cap. 3"
  },
  {
    "id": "L09-P111",
    "lessonId": "L09",
    "lessonTitle": "Lección 09 — Máquinas de Turing",
    "topic": "Máquina de Turing",
    "points": 2,
    "questionText": "La Tesis de Turing (Church-Turing):",
    "options": [
      {
        "id": "A",
        "text": "Es el problema de la parada",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Es una conjetura/definición aceptada: toda computación mecánica puede hacerla una MT",
        "explanation": "No puede demostrarse (habría que formalizar 'medios mecánicos'); se toma como definición de computación mecánica.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Dice que las MT son menos potentes que las computadoras",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Es un teorema demostrado en 1936",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "No puede demostrarse (habría que formalizar 'medios mecánicos'); se toma como definición de computación mecánica.",
    "sourceCatedra": "Banco Extra Cátedra L09 (P111)",
    "sourceBook": "Linz (Formal Languages and Automata) Cap. 9-11; Sipser Cap. 3"
  },
  {
    "id": "L09-P112",
    "lessonId": "L09",
    "lessonTitle": "Lección 09 — Máquinas de Turing",
    "topic": "Máquina de Turing",
    "points": 2,
    "questionText": "Un problema es decidible si:",
    "options": [
      {
        "id": "A",
        "text": "Existe una MT que a veces no se detiene",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Tiene una gramática regular",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Existe una MT que, para cualquier entrada, se detiene y responde sí o no correctamente",
        "explanation": "Si no existe tal MT es indecidible (ej.: problema de la parada; ambigüedad de una GIC).",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Puede resolverse con un AF",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Si no existe tal MT es indecidible (ej.: problema de la parada; ambigüedad de una GIC).",
    "sourceCatedra": "Banco Extra Cátedra L09 (P112)",
    "sourceBook": "Linz (Formal Languages and Automata) Cap. 9-11; Sipser Cap. 3"
  },
  {
    "id": "L09-P113",
    "lessonId": "L09",
    "lessonTitle": "Lección 09 — Máquinas de Turing",
    "topic": "Máquina de Turing",
    "points": 2,
    "questionText": "¿Qué implica el problema de la parada para los compiladores?",
    "options": [
      {
        "id": "A",
        "text": "Que solo se usan autómatas finitos",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Que es imposible un compilador que detecte en general si cualquier programa entrará en un bucle infinito",
        "explanation": "Turing demostró (1936) que no existe una MT que decida si cualquier MT para con cualquier entrada.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Que no se puede traducir a código máquina",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Que no se puede optimizar código",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Turing demostró (1936) que no existe una MT que decida si cualquier MT para con cualquier entrada.",
    "sourceCatedra": "Banco Extra Cátedra L09 (P113)",
    "sourceBook": "Linz (Formal Languages and Automata) Cap. 9-11; Sipser Cap. 3"
  },
  {
    "id": "L09-P114",
    "lessonId": "L09",
    "lessonTitle": "Lección 09 — Máquinas de Turing",
    "topic": "Máquina de Turing",
    "points": 2,
    "questionText": "Las máquinas de Turing pueden combinarse para tareas complejas mediante:",
    "options": [
      {
        "id": "A",
        "text": "Diagramas de bloques, macroinstrucciones y subprogramas",
        "explanation": "Ej.: comparador + sumador + borrador para f(x,y) = x+y si x ≥ y, 0 si x < y.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Expresiones regulares",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Solo una gran tabla de transiciones",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Autómatas con pila",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Ej.: comparador + sumador + borrador para f(x,y) = x+y si x ≥ y, 0 si x < y.",
    "sourceCatedra": "Banco Extra Cátedra L09 (P114) [K1]",
    "sourceBook": "Linz (Formal Languages and Automata) Cap. 9-11; Sipser Cap. 3"
  },
  {
    "id": "L09-P115",
    "lessonId": "L09",
    "lessonTitle": "Lección 09 — Máquinas de Turing",
    "topic": "Máquina de Turing",
    "points": 2,
    "questionText": "La MT de la cátedra que acepta 00* sobre Σ = {0,1}, si encuentra un 1:",
    "options": [
      {
        "id": "A",
        "text": "No tiene transición definida y para en q0, que no es final: rechaza",
        "explanation": "Avanza a la derecha mientras lee 0; si llega al blanco habiendo visto solo 0s, acepta.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Entra en bucle",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Lo cambia por 0 y sigue",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Acepta",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Avanza a la derecha mientras lee 0; si llega al blanco habiendo visto solo 0s, acepta.",
    "sourceCatedra": "Banco Extra Cátedra L09 (P115)",
    "sourceBook": "Linz (Formal Languages and Automata) Cap. 9-11; Sipser Cap. 3"
  },
  {
    "id": "L10-P116",
    "lessonId": "L10",
    "lessonTitle": "Lección 10 — Análisis Sintáctico y Limpieza de Gramáticas",
    "topic": "Análisis sintáctico",
    "points": 8,
    "questionText": "¿Cuál es la tarea principal del analizador sintáctico?",
    "options": [
      {
        "id": "A",
        "text": "Optimizar el código",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Agrupar caracteres en tokens",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Generar código máquina",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Determinar si la cadena de tokens puede ser generada por la gramática y construir el árbol",
        "explanation": "Además reporta errores sintácticos. Recibe los tokens del léxico, pidiéndolos a demanda.",
        "isCorrect": true
      }
    ],
    "theorySummary": "Además reporta errores sintácticos. Recibe los tokens del léxico, pidiéndolos a demanda.",
    "sourceCatedra": "Banco Extra Cátedra L10 (P116)",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.2-4.4; Louden Cap. 4"
  },
  {
    "id": "L10-P117",
    "lessonId": "L10",
    "lessonTitle": "Lección 10 — Análisis Sintáctico y Limpieza de Gramáticas",
    "topic": "Análisis sintáctico",
    "points": 8,
    "questionText": "El análisis sintáctico descendente construye el árbol:",
    "options": [
      {
        "id": "A",
        "text": "De las hojas a la raíz",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Sin construir árbol",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "De la raíz a las hojas",
        "explanation": "Parte del símbolo inicial y expande NT. El ascendente va de las hojas (tokens) a la raíz y acepta más gramáticas.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Por niveles desde el medio",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Parte del símbolo inicial y expande NT. El ascendente va de las hojas (tokens) a la raíz y acepta más gramáticas.",
    "sourceCatedra": "Banco Extra Cátedra L10 (P117)",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.2-4.4; Louden Cap. 4"
  },
  {
    "id": "L10-P118",
    "lessonId": "L10",
    "lessonTitle": "Lección 10 — Análisis Sintáctico y Limpieza de Gramáticas",
    "topic": "Análisis sintáctico",
    "points": 8,
    "questionText": "¿Cuál es la principal desventaja del descenso recursivo con retroceso?",
    "options": [
      {
        "id": "A",
        "text": "Su alto costo computacional (exponencial en el peor caso): reexamina tokens",
        "explanation": "También dificulta emitir mensajes de error precisos. Por eso no se usa en la práctica: se prefieren parsers predictivos.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Necesita una MT",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "No admite gramáticas con terminales",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "No construye árboles",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "También dificulta emitir mensajes de error precisos. Por eso no se usa en la práctica: se prefieren parsers predictivos.",
    "sourceCatedra": "Banco Extra Cátedra L10 (P118)",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.2-4.4; Louden Cap. 4"
  },
  {
    "id": "L10-P119",
    "lessonId": "L10",
    "lessonTitle": "Lección 10 — Análisis Sintáctico y Limpieza de Gramáticas",
    "topic": "Análisis sintáctico",
    "points": 8,
    "questionText": "Con S → cAd ;  A → ab | a  y la entrada cad, el parser con retroceso:",
    "options": [
      {
        "id": "A",
        "text": "Rechaza la cadena",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Acepta con A → ab directamente",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Entra en bucle infinito",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Prueba A → ab, falla en d ≠ b, retrocede y acepta con A → a",
        "explanation": "Es el ejemplo de la cátedra para mostrar el retroceso.",
        "isCorrect": true
      }
    ],
    "theorySummary": "Es el ejemplo de la cátedra para mostrar el retroceso.",
    "sourceCatedra": "Banco Extra Cátedra L10 (P119)",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.2-4.4; Louden Cap. 4"
  },
  {
    "id": "L10-P120",
    "lessonId": "L10",
    "lessonTitle": "Lección 10 — Análisis Sintáctico y Limpieza de Gramáticas",
    "topic": "Descenso recursivo",
    "points": 8,
    "questionText": "En el descenso recursivo, cada no terminal se traduce en:",
    "options": [
      {
        "id": "A",
        "text": "Un estado del AFD",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Un token",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Una fila de la tabla M",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Un procedimiento/función",
        "explanation": "Los terminales se traducen en llamadas a parea(t) y el preanálisis decide qué alternativa aplicar.",
        "isCorrect": true
      }
    ],
    "theorySummary": "Los terminales se traducen en llamadas a parea(t) y el preanálisis decide qué alternativa aplicar.",
    "sourceCatedra": "Banco Extra Cátedra L10 (P120)",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.2-4.4; Louden Cap. 4"
  },
  {
    "id": "L10-P121",
    "lessonId": "L10",
    "lessonTitle": "Lección 10 — Análisis Sintáctico y Limpieza de Gramáticas",
    "topic": "Descenso recursivo",
    "points": 2,
    "questionText": "La función parea(t):",
    "options": [
      {
        "id": "A",
        "text": "Compara t con el preanálisis; si coincide avanza al siguiente token, si no da error",
        "explanation": "preanalisis := siguiente_token si coinciden; si no, error sintáctico.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Apila t",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Construye la tabla LL(1)",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Elimina la recursividad",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "preanalisis := siguiente_token si coinciden; si no, error sintáctico.",
    "sourceCatedra": "Banco Extra Cátedra L10 (P121)",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.2-4.4; Louden Cap. 4"
  },
  {
    "id": "L10-P122",
    "lessonId": "L10",
    "lessonTitle": "Lección 10 — Análisis Sintáctico y Limpieza de Gramáticas",
    "topic": "Descenso recursivo",
    "points": 8,
    "questionText": "En el descenso recursivo, una producción A → ε se traduce en:",
    "options": [
      {
        "id": "A",
        "text": "Una llamada a parea(ε)",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Una llamada recursiva a A",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Un error",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "No hacer nada (pass o retorno directo)",
        "explanation": "Receta de la cátedra: NT → función; terminal → parea; secuencia → llamadas consecutivas; alternativas → if según PRIMERO; ε → nada.",
        "isCorrect": true
      }
    ],
    "theorySummary": "Receta de la cátedra: NT → función; terminal → parea; secuencia → llamadas consecutivas; alternativas → if según PRIMERO; ε → nada.",
    "sourceCatedra": "Banco Extra Cátedra L10 (P122) [K1]",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.2-4.4; Louden Cap. 4"
  },
  {
    "id": "L10-P123",
    "lessonId": "L10",
    "lessonTitle": "Lección 10 — Análisis Sintáctico y Limpieza de Gramáticas",
    "topic": "Descenso recursivo",
    "points": 5,
    "questionText": "En la gramática de tipos Pascal, PRIMERO(simple) es:",
    "options": [
      {
        "id": "A",
        "text": "{[, ]}",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "{↑, array}",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "{integer, char, num}",
        "explanation": "simple → integer | char | num puntopunto num. Por eso tipo llama a simple si preanalisis ∈ {integer, char, num}.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "{id}",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "simple → integer | char | num puntopunto num. Por eso tipo llama a simple si preanalisis ∈ {integer, char, num}.",
    "sourceCatedra": "Banco Extra Cátedra L10 (P123) [K2]",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.2-4.4; Louden Cap. 4"
  },
  {
    "id": "L10-P124",
    "lessonId": "L10",
    "lessonTitle": "Lección 10 — Análisis Sintáctico y Limpieza de Gramáticas",
    "topic": "Recursividad por la izquierda",
    "points": 2,
    "questionText": "¿Por qué un parser descendente recursivo no puede procesar E → E + T?",
    "options": [
      {
        "id": "A",
        "text": "El + no lo reconoce el léxico",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Requiere un AFD",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "proc_E() se llamaría a sí misma infinitamente sin consumir tokens",
        "explanation": "No se ejecuta ningún parea antes de la llamada recursiva: bucle infinito / desbordamiento de pila.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "parea() solo procesa números",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "No se ejecuta ningún parea antes de la llamada recursiva: bucle infinito / desbordamiento de pila.",
    "sourceCatedra": "Banco Extra Cátedra L10 (P124)",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.2-4.4; Louden Cap. 4"
  },
  {
    "id": "L10-P125",
    "lessonId": "L10",
    "lessonTitle": "Lección 10 — Análisis Sintáctico y Limpieza de Gramáticas",
    "topic": "Recursividad por la izquierda",
    "points": 8,
    "questionText": "La forma equivalente sin recursividad izquierda de  A → Aα | β  es:",
    "options": [
      {
        "id": "A",
        "text": "A → αA | β",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "A → βA′ ;  A′ → αA′ | ε",
        "explanation": "Genera β seguida de cero o más α, igual que la original, pero recursiva por la derecha.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "A → αβ",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "A → β | ε",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Genera β seguida de cero o más α, igual que la original, pero recursiva por la derecha.",
    "sourceCatedra": "Banco Extra Cátedra L10 (P125) [K3]",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.2-4.4; Louden Cap. 4"
  },
  {
    "id": "L10-P126",
    "lessonId": "L10",
    "lessonTitle": "Lección 10 — Análisis Sintáctico y Limpieza de Gramáticas",
    "topic": "Recursividad por la izquierda",
    "points": 2,
    "questionText": "Eliminando la recursividad de  E → E + T | T  se obtiene:",
    "options": [
      {
        "id": "A",
        "text": "E → E′T ;  E′ → +E′ | ε",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "E → +TE | T",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "E → TE′ ;  E′ → +TE′ | ε",
        "explanation": "Con α = +T y β = T.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "E → T + E",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Con α = +T y β = T.",
    "sourceCatedra": "Banco Extra Cátedra L10 (P126) [K1]",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.2-4.4; Louden Cap. 4"
  },
  {
    "id": "L10-P127",
    "lessonId": "L10",
    "lessonTitle": "Lección 10 — Análisis Sintáctico y Limpieza de Gramáticas",
    "topic": "Recursividad por la izquierda",
    "points": 2,
    "questionText": "¿Cuántas reglas recursivas por la izquierda tiene  E → E + T | E − T | T ?",
    "options": [
      {
        "id": "A",
        "text": "3",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "1",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "0",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "2",
        "explanation": "E → E+T y E → E−T (directas). Se transforma en E → TE′, E′ → +TE′ | −TE′ | ε.",
        "isCorrect": true
      }
    ],
    "theorySummary": "E → E+T y E → E−T (directas). Se transforma en E → TE′, E′ → +TE′ | −TE′ | ε.",
    "sourceCatedra": "Banco Extra Cátedra L10 (P127) [K3]",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.2-4.4; Louden Cap. 4"
  },
  {
    "id": "L10-P128",
    "lessonId": "L10",
    "lessonTitle": "Lección 10 — Análisis Sintáctico y Limpieza de Gramáticas",
    "topic": "Recursividad por la izquierda",
    "points": 5,
    "questionText": "El algoritmo de eliminación de recursividad izquierda (Aho) exige como entrada una gramática:",
    "options": [
      {
        "id": "A",
        "text": "Sin ciclos ni reglas ε",
        "explanation": "Por eso la limpieza (eliminar ε, etc.) va antes que la eliminación de recursividad.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Ya factorizada",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Regular",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Ambigua",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Por eso la limpieza (eliminar ε, etc.) va antes que la eliminación de recursividad.",
    "sourceCatedra": "Banco Extra Cátedra L10 (P128) [K1]",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.2-4.4; Louden Cap. 4"
  },
  {
    "id": "L10-P129",
    "lessonId": "L10",
    "lessonTitle": "Lección 10 — Análisis Sintáctico y Limpieza de Gramáticas",
    "topic": "Recursividad por la izquierda",
    "points": 8,
    "questionText": "Aplicando el algoritmo a  S → Aa | b ;  A → Ac | Sd  (orden S, A) se obtiene:",
    "options": [
      {
        "id": "A",
        "text": "S → bS′ ;  S′ → aS′ | ε",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "S → Aa ;  A → Sd",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "A → Ac | Aad | bd (sin más cambios)",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "S → Aa | b ;  A → bdA′ ;  A′ → cA′ | adA′ | ε",
        "explanation": "Se sustituye S en A → Sd (A → Ac | Aad | bd) y luego se elimina la recursividad directa de A.",
        "isCorrect": true
      }
    ],
    "theorySummary": "Se sustituye S en A → Sd (A → Ac | Aad | bd) y luego se elimina la recursividad directa de A.",
    "sourceCatedra": "Banco Extra Cátedra L10 (P129) [K2]",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.2-4.4; Louden Cap. 4"
  },
  {
    "id": "L10-P130",
    "lessonId": "L10",
    "lessonTitle": "Lección 10 — Análisis Sintáctico y Limpieza de Gramáticas",
    "topic": "Factorización",
    "points": 5,
    "questionText": "¿Por qué hay que factorizar por la izquierda?",
    "options": [
      {
        "id": "A",
        "text": "Porque lo exige el léxico",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Para eliminar símbolos inaccesibles",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Para eliminar la recursividad",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Porque con dos alternativas con el mismo prefijo, un token de preanálisis no alcanza para elegir",
        "explanation": "Se posterga la decisión hasta haber visto el prefijo común.",
        "isCorrect": true
      }
    ],
    "theorySummary": "Se posterga la decisión hasta haber visto el prefijo común.",
    "sourceCatedra": "Banco Extra Cátedra L10 (P130)",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.2-4.4; Louden Cap. 4"
  },
  {
    "id": "L10-P131",
    "lessonId": "L10",
    "lessonTitle": "Lección 10 — Análisis Sintáctico y Limpieza de Gramáticas",
    "topic": "Factorización",
    "points": 5,
    "questionText": "Factorizando  P → if E then P else P | if E then P  se obtiene:",
    "options": [
      {
        "id": "A",
        "text": "P → if E P′ ;  P′ → then P",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "No se puede factorizar",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "P → if E then P P′ ;  P′ → else P | ε",
        "explanation": "Se elige el prefijo común más largo (if E then P).",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "P → P′ else P",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Se elige el prefijo común más largo (if E then P).",
    "sourceCatedra": "Banco Extra Cátedra L10 (P131)",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.2-4.4; Louden Cap. 4"
  },
  {
    "id": "L10-P132",
    "lessonId": "L10",
    "lessonTitle": "Lección 10 — Análisis Sintáctico y Limpieza de Gramáticas",
    "topic": "Factorización",
    "points": 2,
    "questionText": "Factorizando  sec_sent → sent ; sec_sent | sent  se obtiene:",
    "options": [
      {
        "id": "A",
        "text": "sec_sent → sec′ sent",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "sec_sent → ε",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "sec_sent → sent ;",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "sec_sent → sent sec′ ;  sec′ → ; sec_sent | ε",
        "explanation": "Prefijo común: sent.",
        "isCorrect": true
      }
    ],
    "theorySummary": "Prefijo común: sent.",
    "sourceCatedra": "Banco Extra Cátedra L10 (P132)",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.2-4.4; Louden Cap. 4"
  },
  {
    "id": "L10-P133",
    "lessonId": "L10",
    "lessonTitle": "Lección 10 — Análisis Sintáctico y Limpieza de Gramáticas",
    "topic": "Limpieza",
    "points": 8,
    "questionText": "Las reglas de la forma A → B (A y B no terminales) se llaman:",
    "options": [
      {
        "id": "A",
        "text": "De redenominación",
        "explanation": "A → A son innecesarias; A → ε se llaman borradoras.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Innecesarias",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Recursivas",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Inaccesibles",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "E",
        "text": "Borradoras",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "A → A son innecesarias; A → ε se llaman borradoras.",
    "sourceCatedra": "Banco Extra Cátedra L10 (P133) [K3]",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.2-4.4; Louden Cap. 4"
  },
  {
    "id": "L10-P134",
    "lessonId": "L10",
    "lessonTitle": "Lección 10 — Análisis Sintáctico y Limpieza de Gramáticas",
    "topic": "Limpieza",
    "points": 2,
    "questionText": "Una regla es inaccesible cuando:",
    "options": [
      {
        "id": "A",
        "text": "Es recursiva por la izquierda",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Su NT izquierdo no aparece en el lado derecho de ninguna regla (no puede alcanzarse)",
        "explanation": "Esos símbolos nunca participan en una derivación desde S y se eliminan.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Deriva ε",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Tiene factores comunes",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Esos símbolos nunca participan en una derivación desde S y se eliminan.",
    "sourceCatedra": "Banco Extra Cátedra L10 (P134)",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.2-4.4; Louden Cap. 4"
  },
  {
    "id": "L10-P135",
    "lessonId": "L10",
    "lessonTitle": "Lección 10 — Análisis Sintáctico y Limpieza de Gramáticas",
    "topic": "Limpieza",
    "points": 8,
    "questionText": "Eliminando B → ε de  S → SaB ;  B → Ba | ε  se obtiene:",
    "options": [
      {
        "id": "A",
        "text": "S → Sa ;  B → Ba",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "S → SaB ;  B → a",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "S → SaB | ε ;  B → Ba",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "S → SaB | Sa ;  B → Ba | a",
        "explanation": "Se copian las reglas con B a la derecha borrando B (SaB → Sa; Ba → a) y se borra B → ε.",
        "isCorrect": true
      }
    ],
    "theorySummary": "Se copian las reglas con B a la derecha borrando B (SaB → Sa; Ba → a) y se borra B → ε.",
    "sourceCatedra": "Banco Extra Cátedra L10 (P135)",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.2-4.4; Louden Cap. 4"
  },
  {
    "id": "L10-P136",
    "lessonId": "L10",
    "lessonTitle": "Lección 10 — Análisis Sintáctico y Limpieza de Gramáticas",
    "topic": "Limpieza",
    "points": 8,
    "questionText": "Al eliminar A → ε, si A es el símbolo inicial y aparece en el lado derecho de alguna regla:",
    "options": [
      {
        "id": "A",
        "text": "Se elimina A",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "No se puede eliminar",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Se crea un nuevo inicial A′ con A′ → A | ε",
        "explanation": "Así ε sigue perteneciendo al lenguaje y el nuevo inicial no aparece a la derecha.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Se agrega A → A",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Así ε sigue perteneciendo al lenguaje y el nuevo inicial no aparece a la derecha.",
    "sourceCatedra": "Banco Extra Cátedra L10 (P136) [K2]",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.2-4.4; Louden Cap. 4"
  },
  {
    "id": "L10-P137",
    "lessonId": "L10",
    "lessonTitle": "Lección 10 — Análisis Sintáctico y Limpieza de Gramáticas",
    "topic": "Preparación de gramáticas",
    "points": 5,
    "questionText": "Para usar una gramática con análisis descendente, el orden general es:",
    "options": [
      {
        "id": "A",
        "text": "Factorizar → limpiar → eliminar recursión",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "No importa el orden",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Limpiar → eliminar recursión izquierda → factorizar",
        "explanation": "Diapositiva 'Gramáticas para AS Descendente': aplicar en ese orden.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Eliminar recursión → factorizar → limpiar",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Diapositiva 'Gramáticas para AS Descendente': aplicar en ese orden.",
    "sourceCatedra": "Banco Extra Cátedra L10 (P137)",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.2-4.4; Louden Cap. 4"
  },
  {
    "id": "L11-P138",
    "lessonId": "L11",
    "lessonTitle": "Lección 11 — Analizadores Sintácticos Predictivos LL(1)",
    "topic": "LL(1",
    "points": 5,
    "questionText": "En LL(1), la primera L, la segunda L y el 1 significan:",
    "options": [
      {
        "id": "A",
        "text": "Entrada de izquierda a derecha, derivación por izquierda, 1 token de preanálisis",
        "explanation": "LL(k) usa k tokens de preanálisis.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Derivación por derecha, 1 estado",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Lenguaje libre, 1 pila",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Lexer-Lexer-1 pasada",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "LL(k) usa k tokens de preanálisis.",
    "sourceCatedra": "Banco Extra Cátedra L11 (P138)",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.4; Louden Cap. 4.3"
  },
  {
    "id": "L11-P139",
    "lessonId": "L11",
    "lessonTitle": "Lección 11 — Analizadores Sintácticos Predictivos LL(1)",
    "topic": "LL(1",
    "points": 8,
    "questionText": "¿Qué reemplaza el analizador LL (no recursivo) respecto del descenso recursivo?",
    "options": [
      {
        "id": "A",
        "text": "Los terminales, por estados",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Las llamadas recursivas, por una pila explícita y una tabla M",
        "explanation": "Componentes: cinta de entrada terminada en $, pila, tabla M[A,a] y programa de control.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "La gramática, por una ER",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "El léxico, por una MT",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Componentes: cinta de entrada terminada en $, pila, tabla M[A,a] y programa de control.",
    "sourceCatedra": "Banco Extra Cátedra L11 (P139)",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.4; Louden Cap. 4.3"
  },
  {
    "id": "L11-P140",
    "lessonId": "L11",
    "lessonTitle": "Lección 11 — Analizadores Sintácticos Predictivos LL(1)",
    "topic": "LL(1",
    "points": 2,
    "questionText": "Al iniciar el análisis LL(1), la pila contiene:",
    "options": [
      {
        "id": "A",
        "text": "Vacía",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Solo $",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "El símbolo inicial S sobre $",
        "explanation": "Y la entrada es la cadena de tokens seguida de $.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Todos los no terminales",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Y la entrada es la cadena de tokens seguida de $.",
    "sourceCatedra": "Banco Extra Cátedra L11 (P140)",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.4; Louden Cap. 4.3"
  },
  {
    "id": "L11-P141",
    "lessonId": "L11",
    "lessonTitle": "Lección 11 — Analizadores Sintácticos Predictivos LL(1)",
    "topic": "LL(1",
    "points": 2,
    "questionText": "Con la cima de la pila X y el token actual a, si X = a = $ el analizador:",
    "options": [
      {
        "id": "A",
        "text": "Anuncia éxito (acepta)",
        "explanation": "Si X = a ≠ $ saca X y avanza; si X es NT consulta M[X, a].",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Saca X y avanza",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Da error",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Consulta M[X, a]",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Si X = a ≠ $ saca X y avanza; si X es NT consulta M[X, a].",
    "sourceCatedra": "Banco Extra Cátedra L11 (P141)",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.4; Louden Cap. 4.3"
  },
  {
    "id": "L11-P142",
    "lessonId": "L11",
    "lessonTitle": "Lección 11 — Analizadores Sintácticos Predictivos LL(1)",
    "topic": "LL(1",
    "points": 2,
    "questionText": "Si M[X, a] = X → UVW, el parser saca X de la pila y apila:",
    "options": [
      {
        "id": "A",
        "text": "UVW como un solo símbolo",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "W, V, U (U queda en la cima)",
        "explanation": "Así el primer símbolo del lado derecho queda arriba para seguir la derivación por izquierda.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Solo U",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "U, V, W (W en la cima)",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Así el primer símbolo del lado derecho queda arriba para seguir la derivación por izquierda.",
    "sourceCatedra": "Banco Extra Cátedra L11 (P142) [K3]",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.4; Louden Cap. 4.3"
  },
  {
    "id": "L11-P143",
    "lessonId": "L11",
    "lessonTitle": "Lección 11 — Analizadores Sintácticos Predictivos LL(1)",
    "topic": "LL(1",
    "points": 2,
    "questionText": "Durante el análisis LL(1), si la celda M[X, a] está vacía:",
    "options": [
      {
        "id": "A",
        "text": "Se apila a",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Error sintáctico (rutina de recuperación de error)",
        "explanation": "Las celdas vacías representan error.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Se saca X y se sigue",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Se acepta",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Las celdas vacías representan error.",
    "sourceCatedra": "Banco Extra Cátedra L11 (P143)",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.4; Louden Cap. 4.3"
  },
  {
    "id": "L11-P144",
    "lessonId": "L11",
    "lessonTitle": "Lección 11 — Analizadores Sintácticos Predictivos LL(1)",
    "topic": "PRIMERO / SIGUIENTE",
    "points": 8,
    "questionText": "PRIMERO(α) es:",
    "options": [
      {
        "id": "A",
        "text": "El conjunto de producciones de α",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "El primer no terminal de α",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "El conjunto de terminales que pueden iniciar alguna cadena derivada de α (con ε si α ⇒* ε)",
        "explanation": "SIGUIENTE(A) es el conjunto de terminales (y $) que pueden aparecer inmediatamente a la derecha de A.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "El conjunto de terminales que pueden aparecer después de α",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "SIGUIENTE(A) es el conjunto de terminales (y $) que pueden aparecer inmediatamente a la derecha de A.",
    "sourceCatedra": "Banco Extra Cátedra L11 (P144)",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.4; Louden Cap. 4.3"
  },
  {
    "id": "L11-P145",
    "lessonId": "L11",
    "lessonTitle": "Lección 11 — Analizadores Sintácticos Predictivos LL(1)",
    "topic": "PRIMERO / SIGUIENTE",
    "points": 5,
    "questionText": "Sobre el conjunto SIGUIENTE, ¿qué afirmación es correcta?",
    "options": [
      {
        "id": "A",
        "text": "Solo contiene no terminales",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Es igual a PRIMERO",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Nunca contiene ε; puede contener $",
        "explanation": "Regla de oro: ε nunca se agrega a SIGUIENTE. $ se agrega a SIGUIENTE del símbolo inicial.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Puede contener ε",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Regla de oro: ε nunca se agrega a SIGUIENTE. $ se agrega a SIGUIENTE del símbolo inicial.",
    "sourceCatedra": "Banco Extra Cátedra L11 (P145)",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.4; Louden Cap. 4.3"
  },
  {
    "id": "L11-P146",
    "lessonId": "L11",
    "lessonTitle": "Lección 11 — Analizadores Sintácticos Predictivos LL(1)",
    "topic": "PRIMERO / SIGUIENTE",
    "points": 5,
    "questionText": "Si existe la producción B → αAγ con ε ∈ PRIMERO(γ), entonces:",
    "options": [
      {
        "id": "A",
        "text": "No se agrega nada",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Se agrega SIGUIENTE(B) a SIGUIENTE(A) (además de PRIMERO(γ) − {ε})",
        "explanation": "Lo mismo si B → αA (A al final).",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Se agrega ε a SIGUIENTE(A)",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Se agrega PRIMERO(A) a SIGUIENTE(B)",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Lo mismo si B → αA (A al final).",
    "sourceCatedra": "Banco Extra Cátedra L11 (P146)",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.4; Louden Cap. 4.3"
  },
  {
    "id": "L11-P147",
    "lessonId": "L11",
    "lessonTitle": "Lección 11 — Analizadores Sintácticos Predictivos LL(1)",
    "topic": "PRIMERO / SIGUIENTE",
    "points": 5,
    "questionText": "Para E → TE′ ; E′ → +TE′ | ε ; T → FT′ ; T′ → *FT′ | ε ; F → (E) | id, PRIMERO(E′) es:",
    "options": [
      {
        "id": "A",
        "text": "{), $}",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "{+, ε}",
        "explanation": "PRIMERO(E) = PRIMERO(T) = PRIMERO(F) = {(, id}; PRIMERO(T′) = {*, ε}.",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "{+}",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "{(, id}",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "PRIMERO(E) = PRIMERO(T) = PRIMERO(F) = {(, id}; PRIMERO(T′) = {*, ε}.",
    "sourceCatedra": "Banco Extra Cátedra L11 (P147) [K1]",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.4; Louden Cap. 4.3"
  },
  {
    "id": "L11-P148",
    "lessonId": "L11",
    "lessonTitle": "Lección 11 — Analizadores Sintácticos Predictivos LL(1)",
    "topic": "PRIMERO / SIGUIENTE",
    "points": 5,
    "questionText": "En esa misma gramática de expresiones, SIGUIENTE(F) es:",
    "options": [
      {
        "id": "A",
        "text": "{+, ), $}",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "{(, id}",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "{+, *, ), $}",
        "explanation": "SIGUIENTE(E) = SIGUIENTE(E′) = {), $}; SIGUIENTE(T) = SIGUIENTE(T′) = {+, ), $}.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "{), $}",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "SIGUIENTE(E) = SIGUIENTE(E′) = {), $}; SIGUIENTE(T) = SIGUIENTE(T′) = {+, ), $}.",
    "sourceCatedra": "Banco Extra Cátedra L11 (P148) [K2]",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.4; Louden Cap. 4.3"
  },
  {
    "id": "L11-P149",
    "lessonId": "L11",
    "lessonTitle": "Lección 11 — Analizadores Sintácticos Predictivos LL(1)",
    "topic": "PRIMERO / SIGUIENTE",
    "points": 8,
    "questionText": "En esa gramática, SIGUIENTE(T) es:",
    "options": [
      {
        "id": "A",
        "text": "{*, +}",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "{), $}",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "{+, ), $}",
        "explanation": "T va seguido de E′ (PRIMERO(E′) − ε = {+}) y, como E′ ⇒ ε, también SIGUIENTE(E′) = {), $}.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "{id}",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "T va seguido de E′ (PRIMERO(E′) − ε = {+}) y, como E′ ⇒ ε, también SIGUIENTE(E′) = {), $}.",
    "sourceCatedra": "Banco Extra Cátedra L11 (P149) [K3]",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.4; Louden Cap. 4.3"
  },
  {
    "id": "L11-P150",
    "lessonId": "L11",
    "lessonTitle": "Lección 11 — Analizadores Sintácticos Predictivos LL(1)",
    "topic": "PRIMERO / SIGUIENTE",
    "points": 8,
    "questionText": "Con  A → B | C | ε ;  B → xB | y ;  C → xC | z , PRIMERO(A) es:",
    "options": [
      {
        "id": "A",
        "text": "{x, y, z, ε}",
        "explanation": "PRIMERO(B) = {x, y}, PRIMERO(C) = {x, z}, y A → ε agrega ε.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "{x, z}",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "{x, y}",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "{y, z}",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "PRIMERO(B) = {x, y}, PRIMERO(C) = {x, z}, y A → ε agrega ε.",
    "sourceCatedra": "Banco Extra Cátedra L11 (P150) [K1]",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.4; Louden Cap. 4.3"
  },
  {
    "id": "L11-P151",
    "lessonId": "L11",
    "lessonTitle": "Lección 11 — Analizadores Sintácticos Predictivos LL(1)",
    "topic": "Tabla LL(1",
    "points": 8,
    "questionText": "Si ε ∈ PRIMERO(α), la producción A → α se coloca en M[A, b] para:",
    "options": [
      {
        "id": "A",
        "text": "Ninguna celda",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "b = ε",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Cada b ∈ PRIMERO(A)",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Cada b ∈ SIGUIENTE(A) (incluido $)",
        "explanation": "Además, para cada terminal a ∈ PRIMERO(α), A → α va en M[A, a].",
        "isCorrect": true
      }
    ],
    "theorySummary": "Además, para cada terminal a ∈ PRIMERO(α), A → α va en M[A, a].",
    "sourceCatedra": "Banco Extra Cátedra L11 (P151) [K1]",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.4; Louden Cap. 4.3"
  },
  {
    "id": "L11-P152",
    "lessonId": "L11",
    "lessonTitle": "Lección 11 — Analizadores Sintácticos Predictivos LL(1)",
    "topic": "Tabla LL(1",
    "points": 8,
    "questionText": "En la tabla LL(1) de la gramática de expresiones, ¿qué hay en M[E′, )]?",
    "options": [
      {
        "id": "A",
        "text": "E′ → +TE′",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "E → TE′",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "E′ → ε",
        "explanation": "E′ ⇒ ε y ')' ∈ SIGUIENTE(E′).",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Error",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "E′ ⇒ ε y ')' ∈ SIGUIENTE(E′).",
    "sourceCatedra": "Banco Extra Cátedra L11 (P152) [K2]",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.4; Louden Cap. 4.3"
  },
  {
    "id": "L11-P153",
    "lessonId": "L11",
    "lessonTitle": "Lección 11 — Analizadores Sintácticos Predictivos LL(1)",
    "topic": "Tabla LL(1",
    "points": 8,
    "questionText": "En la tabla LL(1) de la gramática de expresiones, ¿qué hay en M[T′, +]?",
    "options": [
      {
        "id": "A",
        "text": "T′ → ε",
        "explanation": "T′ ⇒ ε y '+' ∈ SIGUIENTE(T′) = {+, ), $}.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "T′ → *FT′",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Error",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "T → FT′",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "T′ ⇒ ε y '+' ∈ SIGUIENTE(T′) = {+, ), $}.",
    "sourceCatedra": "Banco Extra Cátedra L11 (P153) [K1]",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.4; Louden Cap. 4.3"
  },
  {
    "id": "L11-P154",
    "lessonId": "L11",
    "lessonTitle": "Lección 11 — Analizadores Sintácticos Predictivos LL(1)",
    "topic": "Gramáticas LL(1",
    "points": 8,
    "questionText": "¿Cuándo una gramática es LL(1)?",
    "options": [
      {
        "id": "A",
        "text": "Cuando es recursiva por la izquierda",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Cuando SIGUIENTE contiene ε",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Cuando su tabla M no tiene entradas múltiples (sin conflictos)",
        "explanation": "Equivale a: para A → α | β, PRIMERO(α) ∩ PRIMERO(β) = ∅ y, si X ⇒* ε, PRIMERO(X) ∩ SIGUIENTE(X) = ∅.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "Cuando es ambigua",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Equivale a: para A → α | β, PRIMERO(α) ∩ PRIMERO(β) = ∅ y, si X ⇒* ε, PRIMERO(X) ∩ SIGUIENTE(X) = ∅.",
    "sourceCatedra": "Banco Extra Cátedra L11 (P154)",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.4; Louden Cap. 4.3"
  },
  {
    "id": "L11-P155",
    "lessonId": "L11",
    "lessonTitle": "Lección 11 — Analizadores Sintácticos Predictivos LL(1)",
    "topic": "Gramáticas LL(1",
    "points": 8,
    "questionText": "La gramática  A → B | C ;  B → xB | y ;  C → xC | z :",
    "options": [
      {
        "id": "A",
        "text": "Es recursiva por la izquierda",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Es ambigua",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Es LL(1)",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "No es LL(1): PRIMERO(B) ∩ PRIMERO(C) = {x}",
        "explanation": "Al leer x no se sabe qué regla elegir. La equivalente A → xA | D ; D → y | z sí es LL(1).",
        "isCorrect": true
      }
    ],
    "theorySummary": "Al leer x no se sabe qué regla elegir. La equivalente A → xA | D ; D → y | z sí es LL(1).",
    "sourceCatedra": "Banco Extra Cátedra L11 (P155) [K3]",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.4; Louden Cap. 4.3"
  },
  {
    "id": "L11-P156",
    "lessonId": "L11",
    "lessonTitle": "Lección 11 — Analizadores Sintácticos Predictivos LL(1)",
    "topic": "Gramáticas LL(1",
    "points": 8,
    "questionText": "La gramática  S → AB | aB ;  A → cA | b | a ;  B → cB | a | b :",
    "options": [
      {
        "id": "A",
        "text": "Es LL(1)",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "No es LL(1): conflicto en M[S, a]",
        "explanation": "PRIMERO(AB) = {a, b, c} y PRIMERO(aB) = {a}: ambas producciones de S van a M[S, a].",
        "isCorrect": true
      },
      {
        "id": "C",
        "text": "Es regular",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "No es LL(1): conflicto en M[B, c]",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "PRIMERO(AB) = {a, b, c} y PRIMERO(aB) = {a}: ambas producciones de S van a M[S, a].",
    "sourceCatedra": "Banco Extra Cátedra L11 (P156) [K1]",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.4; Louden Cap. 4.3"
  },
  {
    "id": "L11-P157",
    "lessonId": "L11",
    "lessonTitle": "Lección 11 — Analizadores Sintácticos Predictivos LL(1)",
    "topic": "Gramáticas LL(1",
    "points": 8,
    "questionText": "En la gramática del if (S → I | otro ; I → if (E) S L ; L → else S | ε ; E → 0 | 1), M[L, else]:",
    "options": [
      {
        "id": "A",
        "text": "Tiene dos producciones (L → else S y L → ε): no es LL(1) por el dangling else",
        "explanation": "else ∈ PRIMERO(else S) y else ∈ SIGUIENTE(L) = {$, else}. En la práctica se elige L → else S (else con el if más cercano).",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Está vacía",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Tiene I → if (E) S L",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Tiene solo L → ε",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "else ∈ PRIMERO(else S) y else ∈ SIGUIENTE(L) = {$, else}. En la práctica se elige L → else S (else con el if más cercano).",
    "sourceCatedra": "Banco Extra Cátedra L11 (P157)",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.4; Louden Cap. 4.3"
  },
  {
    "id": "L11-P158",
    "lessonId": "L11",
    "lessonTitle": "Lección 11 — Analizadores Sintácticos Predictivos LL(1)",
    "topic": "LL(1",
    "points": 2,
    "questionText": "¿Por qué se estudia el analizador LL si casi no se usa en la práctica?",
    "options": [
      {
        "id": "A",
        "text": "Porque ayuda a entender los analizadores ascendentes, que son los que se usan",
        "explanation": "Lo dice la cátedra: el tabular LL no se usa en la práctica, pero prepara para los LR (Yacc/Bison).",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Porque reemplaza al léxico",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Porque es el más rápido",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Porque no necesita gramática",
        "explanation": "Opción incorrecta según la teoría y definiciones formales de la cátedra.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Lo dice la cátedra: el tabular LL no se usa en la práctica, pero prepara para los LR (Yacc/Bison).",
    "sourceCatedra": "Banco Extra Cátedra L11 (P158)",
    "sourceBook": "Aho et al. (Dragon Book) Cap. 4.4; Louden Cap. 4.3"
  },
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
    "questionText": "Dada la siguiente gramática:\n$$S \\to a A$$\n$$A \\to S b \\mid c$$\n¿Cuál de las siguientes afirmaciones es CORRECTA respecto a su estructura y lenguaje generado?",
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
    "questionText": "Dado un Autómata con Pila $M$ diseñado para reconocer el lenguaje de balanceo simétrico centrado en la letra 'c', $L = \\{ w c w^R \\mid w \\in \\{a, b\\}^* \\}$, ¿cuál de las siguientes cadenas pertenece al lenguaje aceptado por el autómata?",
    "options": [
      {
        "id": "A",
        "text": "`bacba`",
        "explanation": "Incorrecto: para la subcadena inicial $w = \\text{'ba'}$, su reflejo debe ser $w^R = \\text{'ab'}$, por lo que la cadena válida sería `bacab`, no `bacba`.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "`abc`",
        "explanation": "Incorrecto: la cadena carece de la parte derecha simétrica $w^R$ tras el marcador central 'c'.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "`bbcbb`",
        "explanation": "Correcto: tomando $w = \\text{'bb'}$, su reflejo exacto es $w^R = \\text{'bb'}$. Al unirlas alrededor del centinela central 'c' se obtiene la cadena simétrica `bbcbb`.",
        "isCorrect": true
      },
      {
        "id": "D",
        "text": "$\\epsilon$",
        "explanation": "Incorrecto: el lenguaje exige la presencia mínima del delimitador central 'c' (obtenido cuando $w = \\epsilon$).",
        "isCorrect": false
      }
    ],
    "theorySummary": "Para un lenguaje $L = \\{ w c w^R \\mid w \\in \\{a, b\\}^* \\}$, el símbolo 'c' actúa como marcador central determinista que indica al autómata cuándo dejar de apilar símbolos de $w$ y comenzar a desapilar para verificar la simetría de $w^R$. Con $w = \\text{'bb'}$, la cadena aceptada es `bbcbb`.",
    "sourceCatedra": "Diapositiva 7: Autómatas a Pila / PLY Lex (Cardoso/Tolaba)",
    "sourceBook": "Peter Linz Cap. 7; Dragon Book Cap. 3.5",
    "trapAnalysis": "Confundir el reflejo de la cadena $w^R$ con la misma cadena repetida, o no verificar que la inversión invierta el orden de los caracteres."
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
    "questionText": "Sea $\\Sigma = \\{a, b\\}$, la gramática:\n$$S \\to a P b$$\n$$P \\to \\epsilon \\mid a P b$$\ngenera el lenguaje:",
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
    "questionText": "El desarrollador Camilo está diseñando la gramática para el compilador de un lenguaje imperativo con la siguiente especificación de sentencias condicionales:\n$$S \\to \\text{if } C \\text{ then } S \\mid \\text{if } C \\text{ then } S \\text{ else } S \\mid a$$\nAl compilar la sentencia anidada:\n$$\\text{if } C_1 \\text{ then if } C_2 \\text{ then } a_1 \\text{ else } a_2$$\nCamilo observa que el compilador produce un conflicto de ambigüedad (*dangling-else*). ¿A qué se debe este problema?",
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
    "id": "L10-Q02",
    "lessonId": "L10",
    "lessonTitle": "Lección 10 — Análisis Sintáctico y Limpieza",
    "topic": "Pregunta Real de Parcial",
    "points": 8,
    "questionText": "Dada la siguiente gramática con prefijo común:\n$$A \\to \\alpha \\beta \\mid \\alpha \\gamma$$\nDespués de aplicar el algoritmo de factorización por la izquierda (*left factoring*) se obtiene exactamente:",
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
        "text": "Verdadera, porque $\\epsilon$ acompaña al centinela `$` en el fondo de la pila.",
        "explanation": "Incorrecto: el símbolo $\\epsilon$ jamás se añade a ningún conjunto SIGUIENTE. En el fondo de la pila solo se sitúa el centinela `$`, mientras que $\\epsilon$ no es un terminal almacenable.",
        "isCorrect": false
      },
      {
        "id": "B",
        "text": "Falsa, porque $\\epsilon$ NUNCA se añade a ningún conjunto SIGUIENTE; este conjunto solo puede contener terminales reales de $V_T$ y el marcador de fin de entrada `$`.",
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
        "text": "En las celdas de todos los símbolos terminales $b$ pertenecientes a $\\text{SIGUIENTE}(A)$ (incluyendo el marcador `$` si forma parte de él).",
        "explanation": "Correcto: si $\\epsilon \\in \\text{PRIMERO}(\\alpha)$, la producción $A \\to \\alpha$ debe añadirse a $M[A, b]$ para todo terminal $b \\in \\text{SIGUIENTE}(A)$. Si el símbolo `$` está en $\\text{SIGUIENTE}(A)$, también se añade a $M[A, \\$]$.",
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
    "id": "L05-SIM02",
    "lessonId": "L05",
    "lessonTitle": "Lección 05 — Gramáticas Regulares",
    "topic": "Gramáticas Lineales y Lenguajes Regulares",
    "points": 5,
    "questionText": "Respecto a las equivalencias y propiedades de la jerarquía de Chomsky, ¿cuál de las siguientes afirmaciones sobre los lenguajes generados por gramáticas regulares es CORRECTA?",
    "options": [
      {
        "id": "A",
        "text": "Se pueden representar equivalentemente mediante expresiones regulares y son reconocidos por autómatas finitos (AFD y AFND).",
        "explanation": "Correcto: por el Teorema de Kleene y los teoremas de equivalencia de Chomsky, la clase de lenguajes regulares (Tipo 3) coincide exactamente entre los generados por Gramáticas Regulares, representados por Expresiones Regulares y reconocidos por Autómatas Finitos.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "Incluyen estrictamente a todos los lenguajes generados por las gramáticas libres de contexto.",
        "explanation": "Incorrecto: la relación de inclusión es inversa. Las gramáticas regulares son un subconjunto estricto de las libres de contexto ($\\mathcal{L}_3 \\subsetneq \\mathcal{L}_2$).",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "Solo pueden ser reconocidos por autómatas finitos no deterministas (AFND), ya que los deterministas (AFD) carecen de poder computacional.",
        "explanation": "Incorrecto: los AFND y los AFD tienen exactamente el mismo poder computacional para reconocer lenguajes regulares (mediante la construcción de subconjuntos, todo AFND es convertible a un AFD equivalente).",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "Requieren de una pila auxiliar con operaciones push y pop para reconocer todas sus cadenas válidas.",
        "explanation": "Incorrecto: los autómatas con pila son necesarios para lenguajes independientes del contexto (Tipo 2). Los regulares se reconocen únicamente con estados finitos sin pila.",
        "isCorrect": false
      }
    ],
    "theorySummary": "Los lenguajes regulares (Tipo 3) forman la clase base de la jerarquía: son generados por gramáticas regulares, representados por expresiones regulares y reconocidos tanto por AFD como por AFND con idéntico poder computacional.",
    "sourceCatedra": "Diapositiva 6: Gramáticas Regulares (Cardoso/Tolaba) (Simulacro P2)",
    "sourceBook": "Aho et al. (Dragon Book 2da Ed) Cap. 3.3; Louden Cap. 2",
    "trapAnalysis": "Confundir la dirección de inclusión de la jerarquía de Chomsky (L3 está dentro de L2) o creer que los AFND reconocen más lenguajes que los AFD."
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
    "questionText": "Dado un Autómata con Pila diseñado para reconocer el lenguaje de palíndromos con centro explícito $L = \\{ w c w^R \\mid w \\in \\{a, b\\}^* \\}$, ¿cuál de las siguientes cadenas pertenece al lenguaje aceptado por el autómata?",
    "options": [
      {
        "id": "A",
        "text": "`c`",
        "explanation": "Correcto: para la palabra vacía $w = \\epsilon$, su reflejo es $w^R = \\epsilon$. Por lo tanto, $w c w^R = \\epsilon c \\epsilon = \\text{'c'}$, siendo la cadena de longitud mínima aceptada por el autómata.",
        "isCorrect": true
      },
      {
        "id": "B",
        "text": "`bacba`",
        "explanation": "Incorrecto: para $w = \\text{'ba'}$, su reflejo es $w^R = \\text{'ab'}$, formando `bacab`, no `bacba`.",
        "isCorrect": false
      },
      {
        "id": "C",
        "text": "`abc`",
        "explanation": "Incorrecto: la cadena no posee la componente refleja $w^R$ posterior al centinela 'c'.",
        "isCorrect": false
      },
      {
        "id": "D",
        "text": "$\\epsilon$",
        "explanation": "Incorrecto: la cadena vacía no pertenece al lenguaje pues se exige la presencia obligatoria del marcador central 'c'.",
        "isCorrect": false
      }
    ],
    "theorySummary": "La cadena más corta aceptada por $L = \\{ w c w^R \\mid w \\in \\{a, b\\}^* \\}$ corresponde a $w = \\epsilon$, resultando en la cadena unitaria `c`. Cualquier otra cadena debe poseer simetría estricta alrededor de 'c'.",
    "sourceCatedra": "Diapositiva 7: Autómatas a Pila / PLY Lex (Cardoso/Tolaba) (Simulacro P14)",
    "sourceBook": "Peter Linz Cap. 7; Dragon Book Cap. 3.5",
    "trapAnalysis": "Creer erróneamente que la cadena más corta es vacía (épsilon) o pasar por alto que para w = épsilon la cadena resultante es c."
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
        "text": "En la fila de $A$, para cada columna de los terminales pertenecientes a $\\text{SIGUIENTE}(A)$ (incluyendo el centinela `$` ).",
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
        "text": "La pila queda vacía únicamente con el centinela `$`. ",
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
  {
    "id": "L05",
    "title": "Lección 05 — Gramáticas Regulares",
    "badge": "GR / AF",
    "questionCount": 38
  },
  {
    "id": "L06",
    "title": "Lección 06 — Análisis Léxico",
    "badge": "Scanner",
    "questionCount": 28
  },
  {
    "id": "L07",
    "title": "Lección 07 — PLY Lex y AP",
    "badge": "PLY / Pila",
    "questionCount": 20
  },
  {
    "id": "L08",
    "title": "Lección 08 — Gramáticas Libres de Contexto",
    "badge": "GLC / Árboles",
    "questionCount": 38
  },
  {
    "id": "L09",
    "title": "Lección 09 — Máquinas de Turing",
    "badge": "Turing",
    "questionCount": 30
  },
  {
    "id": "L10",
    "title": "Lección 10 — Análisis Sintáctico y Limpieza",
    "badge": "Parser / Limpieza",
    "questionCount": 40
  },
  {
    "id": "L11",
    "title": "Lección 11 — Sintáctico Predictivo LL(1)",
    "badge": "LL(1) / FIRST-FOLLOW",
    "questionCount": 35
  }
];
