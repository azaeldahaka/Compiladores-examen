import React from 'react';
import { Sparkles, ChevronRight, ShieldAlert } from 'lucide-react';
import type { LessonId } from '../types/question';
import { LESSONS_CONFIG } from '../data/questions';
import { MathText } from './MathText';

interface LessonsTabProps {
  onStartStudyLesson: (lessonId: LessonId) => void;
}

const LESSON_DETAILS: Record<string, { summary: string; goldenRule: string; topics: string[] }> = {
  L05: {
    summary: 'Gramáticas lineales a derecha/izquierda, autómatas finitos equivalentes y lema de bombeo.',
    goldenRule: 'Un lenguaje infinito como a^n b^n NO es regular porque un autómata finito no puede recordar un número n arbitrario.',
    topics: ['Equivalencia Kleene', 'Álgebra de Clausura', 'Límites de Estados']
  },
  L06: {
    summary: 'El scanner, búferes de entrada dobles con centinelas, diagramas de transición y tablas de símbolos.',
    goldenRule: 'El analizador léxico elimina espacios y comentarios, y maneja búferes dobles para evitar pérdidas de lectura con lookahead.',
    topics: ['Búferes Dobles', 'Centinelas', 'Tokens vs Lexemas', 'Manejo de Errores']
  },
  L07: {
    summary: 'Herramienta PLY Lex de Python y Autómatas a Pila deterministas (DPDA) y no deterministas (NPDA).',
    goldenRule: 'Los Autómatas con Pila Deterministas (DPDA) son ESTRICTAMENTE menos expresivos que los No Deterministas (NPDA).',
    topics: ['Especificación PLY', 'Reglas Lex', 'DPDA vs NPDA', 'Aceptación por Pila Vacía']
  },
  L08: {
    summary: 'Gramáticas libres de contexto (Tipo 2), árboles sintácticos concretos y ambigüedad.',
    goldenRule: 'La ambigüedad es una propiedad global de la gramática (si una cadena tiene ≥2 árboles), no de reglas aisladas.',
    topics: ['Derivaciones Más a la Izquierda', 'Árboles Concretos', 'Dangling Else', 'Ambigüedad']
  },
  L09: {
    summary: 'Máquinas de Turing estándar, modelo de Peter Linz, MT reconocedoras vs transductoras y decidibilidad.',
    goldenRule: 'La Máquina de Turing NO usa pila: usa una cinta infinita bidireccional y un cabezal de lectura/escritura.',
    topics: ['Cinta Infinita', 'MT Transductoras', 'Tesis de Church-Turing', 'Problema de la Parada']
  },
  L10: {
    summary: 'Descenso recursivo, limpieza de gramáticas (símbolos inútiles), recursión por izquierda y factorización.',
    goldenRule: 'El Descenso Recursivo entra en ciclo infinito ante recursión izquierda (A -> A alpha). Hay que eliminarla antes.',
    topics: ['Símbolos Inalcanzables', 'No Generativos', 'Recursión Izquierda', 'Factorización']
  },
  L11: {
    summary: 'Gramáticas LL(1), cálculo formal de PRIMERO y SIGUIENTE, construcción de la tabla M y parsing con pila.',
    goldenRule: 'El símbolo épsilon (ε) NUNCA pertenece a un conjunto SIGUIENTE. Si M[A, a] tiene ≥2 entradas, no es LL(1).',
    topics: ['Cálculo de PRIMERO', 'Cálculo de SIGUIENTE', 'Tabla M', 'Condición LL(1)']
  }
};

export const LessonsTab: React.FC<LessonsTabProps> = ({ onStartStudyLesson }) => {
  return (
    <div className="space-y-4 animate-fade-in-up">
      <div className="flex items-center justify-between px-1">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">Lecciones de Cátedra</h2>
          <p className="text-xs text-slate-500 dark:text-white/50">Temario oficial del 2do Parcial (Lic. Cardoso / Ing. Tolaba)</p>
        </div>
        <span className="text-xs font-mono text-indigo-600 dark:text-blue-400 font-semibold px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-blue-500/10 border border-indigo-200 dark:border-blue-500/20 shadow-xs">
          7 MÓDULOS
        </span>
      </div>

      <div className="space-y-3.5">
        {LESSONS_CONFIG.map((lesson) => {
          const details = LESSON_DETAILS[lesson.id];
          return (
            <div
              key={lesson.id}
              className="p-5 rounded-3xl bg-white dark:bg-[#131317] border border-slate-200/80 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-all space-y-3 shadow-xs dark:shadow-xl"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-blue-500/20 text-indigo-700 dark:text-blue-300 border border-indigo-200/60 dark:border-transparent">
                      {lesson.badge}
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-white/40 font-mono">
                      {lesson.questionCount} reactivos
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                    {lesson.title}
                  </h3>
                </div>
              </div>

              <div className="text-xs text-slate-600 dark:text-white/70 leading-relaxed">
                <MathText text={details?.summary || ''} />
              </div>

              {/* Golden Rule / Exam Tip */}
              <div className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200/80 dark:border-amber-500/20 text-[11px] leading-relaxed text-amber-900 dark:text-amber-200/90 flex items-start space-x-2">
                <ShieldAlert className="w-4 h-4 text-amber-500 dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-amber-800 dark:text-amber-300 block mb-0.5">Regla de Oro de Cátedra:</strong>
                  <MathText text={details?.goldenRule || ''} />
                </div>
              </div>

              {/* Topics chips */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {details?.topics.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-white/60 border border-slate-200/60 dark:border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Study Action */}
              <button
                onClick={() => onStartStudyLesson(lesson.id as LessonId)}
                className="w-full mt-2 py-3 px-4 rounded-2xl bg-slate-50 hover:bg-slate-100 dark:bg-white/5 dark:hover:bg-white/10 active:scale-98 border border-slate-200/80 dark:border-white/10 text-slate-800 dark:text-white font-semibold text-xs transition-all flex items-center justify-between cursor-pointer"
              >
                <span className="flex items-center space-x-2">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  <span>Practicar Lección con FSRS</span>
                </span>
                <ChevronRight className="w-4 h-4 text-slate-400 dark:text-white/40" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
