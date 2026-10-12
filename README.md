# ⚡ Compiladores — Simulador de Examen y Entrenador de Estudio

> Plataforma web interactiva y **PWA offline** diseñada para preparar los exámenes finales y parciales de la materia **Compiladores** (Ingeniería en Informática, UCASAL).

[![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646cff?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-38bdf8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![KaTeX](https://img.shields.io/badge/KaTeX-LaTeX_Offline-00d1b2)](https://katex.org/)
[![PWA Ready](https://img.shields.io/badge/PWA-Offline_Ready-4f46e5?logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)

---

## 🎯 ¿Qué es este proyecto?

Esta aplicación fue creada por estudiantes y para estudiantes de la cátedra de **Compiladores** de la **Universidad Católica de Salta (UCASAL)**, siguiendo los lineamientos pedagógicos de los profesores **Ing. Cardoso** e **Ing. Tolaba**.

El objetivo es transformar el estudio teórico en un entrenamiento activo, combinando simulaciones de examen con tiempo límite, algoritmos de repetición espaciada y un banco de ejercicios prácticos rigurosos sustentados en la bibliografía oficial:
* 🐉 *Compiladores: Principios, Técnicas y Herramientas* (*Dragon Book*, 2.ª Ed.) — Aho, Lam, Sethi, Ullman.
* 📘 *Construcción de Compiladores: Principios y Práctica* — Kenneth C. Louden.
* 📕 *An Introduction to Formal Languages and Automata* — Peter Linz.

---

## 🚀 Funcionalidades Principales

### 1. ⏱️ Simulador de Examen Real (100 Puntos / 45 Minutos)
* Emula con fidelidad la estructura de evaluación de la cátedra.
* Selecciona **10 preguntas ponderadas** aleatoriamente:
  * **2 preguntas de 2 puntos** (conceptos base y definiciones clave).
  * **3 preguntas de 5 puntos** (análisis teórico intermedio y propiedades de clausura).
  * **5 preguntas de 8 puntos** (ejercicios prácticos complejos: eliminación de recursividad, factorización por izquierda, limpieza en dos fases, cálculo de conjuntos PRIMERO/SIGUIENTE y trazado de pilas LL(1)).
* **Criterio de aprobación:** $\ge 60$ puntos.
* Reporte final exhaustivo con desglose de aciertos, análisis de trampas conceptuales y referencias bibliográficas específicas.

### 2. 🧠 Estudio Activo con Repetición Espaciada (FSRS / Estilo Anki)
* Implementa el algoritmo moderno **FSRS (Free Spaced Repetition Scheduler)** para optimizar la memoria a largo plazo.
* Intervalos adaptativos según tu calificación:
  * 🔴 **Repetir** (`< 1 min`)
  * 🟠 **Difícil** (`10 min`)
  * 🔵 **Bien** (`1 día`)
  * 🟢 **Fácil** (`3 días`)
* **Feedback pedagógico inmediato:** resalta en verde esmeralda la opción correcta y en rojo carmesí los errores seleccionados.
* Explicación analítica para **todas las opciones**, detallando por qué los distractores son falsos y revelando las trampas clásicas de examen.
* Filtrado por lección individual o repaso general del banco.

### 3. 📐 Motor Matemático KaTeX Offline
* Renderizado nítido de notación formal para:
  * Gramáticas independientes del contexto y producciones ($S \to a A \mid \epsilon$).
  * Expresiones regulares y autómatas finitos.
  * Conjuntos directores: $\text{PRIMERO}(\alpha)$ y $\text{SIGUIENTE}(A)$.
  * Tablas de análisis predictivo $M[A, a]$ y cadenas con fin de entrada ($w = a c \$$).
* **Tipografías y fuentes empaquetadas localmente:** no requiere conexión a CDNs externas para visualizar las fórmulas.

### 4. 📲 Aplicación Web Progresiva (PWA Offline)
* **Instalable** en cualquier dispositivo móvil (Android, iPhone/iPad) y de escritorio (Windows, Mac, Linux).
* Service Worker con estrategia inteligente:
  * *Network-First* para la aplicación (recibe actualizaciones y nuevas preguntas automáticamente).
  * *Cache-First* para assets pesados, iconos y tipografías matemáticas.
* Permite estudiar en el colectivo, en la facultad o sin señal de internet.

### 5. 🤝 Sistema de Feedback y Colaboración en Vivo
* Cada tarjeta cuenta con un botón **"Sugerir corrección / Colaborar"**.
* Genera de forma automática un enlace a **GitHub Issues** prellenado con el ID de la tarjeta (`L10-PRAC01`), el enunciado y el contexto del problema para reportar erratas o proponer explicaciones alternativas con un solo clic.
* Opción de copiar el reporte al portapapeles para compartirlo por WhatsApp o correo.

---

## 📚 Temario Cubierto (74 Preguntas)

| Lección | Título Oficial | Badge | Preguntas | Temas Destacados |
| :---: | :--- | :---: | :---: | :--- |
| **L05** | Gramáticas Regulares | `GR / AF` | **10** | Lenguajes regulares, Teorema de Kleene, propiedades de clausura, autómatas finitos y límites de memoria. |
| **L06** | Análisis Léxico | `Scanner` | **10** | Tokens, patrones, lexemas, reglas de desambiguación (*longest match*, prioridad de palabras reservadas), buffers y generadores de scanners. |
| **L07** | PLY Lex y Autómatas a Pila | `PLY / Pila` | **11** | Manejo de tokens en Python con PLY Lex (`t_ignore`, manejo de errores), autómatas a pila por estado final vs pila vacía. |
| **L08** | Gramáticas Libres de Contexto | `GLC / Árboles` | **8** | Definición formal de GLC, derivaciones más a la izquierda, árboles sintácticos concretos, ambigüedad gramatical inherente. |
| **L09** | Máquinas de Turing | `Turing` | **10** | Modelo formal de Turing, cinta infinita, Tesis de Church-Turing, Jerarquía de Chomsky (Tipo 0 a Tipo 3), indecidibilidad. |
| **L10** | Análisis Sintáctico y Limpieza | `Parser / Limpieza` | **13** | Limpieza de gramáticas en 2 fases (inútiles y no alcanzables), eliminación de recursividad por izquierda (directa e indirecta), factorización por izquierda. |
| **L11** | Sintáctico Predictivo LL(1) | `LL(1) / FIRST-FOLLOW` | **12** | Algoritmo de cálculo de $\text{PRIMERO}$ y $\text{SIGUIENTE}$, construcción de la Tabla $M$, colisiones, simulación de pila no recursiva. |

---

## 🛠️ Tecnologías Empleadas

* **Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
* **Empaquetador:** [Vite 8](https://vitejs.dev/)
* **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Renderizado Matemático:** [KaTeX 0.19](https://katex.org/) + fuentes offline
* **Iconos:** [Lucide React](https://lucide.dev/)
* **Efectos Visuales:** [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
* **Linter:** [Oxlint](https://oxc.rs/)

---

## 💻 Instalación y Ejecución Local

Si deseas correr el proyecto en tu máquina para estudiar o desarrollar nuevas funciones:

### Prerrequisitos
* [Node.js](https://nodejs.org/) (versión 18 o superior recomendada).
* `npm` (incluido con Node.js).

### Pasos
1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/azaeldahaka/Compiladores-examen.git
   cd Compiladores-examen
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

4. **Compilar para producción:**
   ```bash
   npm run build
   ```

---

## 📲 Cómo Instalar la Aplicación en tu Dispositivo

La app cuenta con soporte **PWA**:

* **En Android (Chrome / Brave / Edge):**
  1. Abre el enlace de la aplicación.
  2. Toca en el menú de tres puntos (arriba a la derecha).
  3. Selecciona **"Instalar aplicación"** o **"Agregar a la pantalla principal"**.
* **En iPhone / iPad (Safari):**
  1. Abre el enlace en Safari.
  2. Presiona el botón de **Compartir** (ícono de cuadrado con flecha hacia arriba).
  3. Desplaza hacia abajo y selecciona **"Agregar al inicio"** (*Add to Home Screen*).
* **En Computadora (Chrome / Edge):**
  1. En la barra de direcciones verás un ícono de pantalla con una flecha hacia abajo.
  2. Haz clic en **"Instalar Compiladores Examen"**.

---

## 🤝 ¿Querés colaborar?

¡Todas las contribuciones de compañeros y docentes son bienvenidas! Si encontraste una errata en una pregunta, querés proponer un ejercicio nuevo de examen, o sumar una funcionalidad:

👉 Consulta la **[Guía de Contribución (CONTRIBUTING.md)](./CONTRIBUTING.md)** para conocer cómo crear ramas, el formato JSON de las preguntas y cómo enviar una Pull Request.

---

## 📄 Licencia y Reconocimientos

* Proyecto desarrollado para la comunidad académica de **Ingeniería en Informática — UCASAL**.
* Agradecimientos especiales a la cátedra de **Compiladores** por el material teórico y las guías prácticas.
