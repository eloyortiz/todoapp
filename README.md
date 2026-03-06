# Todoapp

Aplicación de gestión de tareas (To-Do) desarrollada con **Angular v17+** y la API de **Signals**. Sirve como repositorio de aprendizaje y experimentación con las funcionalidades modernas de Angular.

---

## Resumen ejecutivo

**Todoapp** es una SPA (Single Page Application) de gestión de tareas construida con Angular en modo *standalone* (sin NgModules). Su objetivo principal es demostrar el uso de las primitivas reactivas de Angular — `signal`, `computed` y `effect` — en un caso de uso real y cotidiano.

### Funcionalidades principales

#### Página principal — Gestión de tareas (`/`)

| Funcionalidad | Descripción |
|---|---|
| **Añadir tarea** | Campo de texto con validación (mínimo 3 caracteres, no puede empezar por espacios). Se confirma pulsando `Enter`. |
| **Completar tarea** | Checkbox individual por tarea para marcarla como completada / pendiente. |
| **Editar tarea** | Doble clic sobre el título de una tarea para editar el texto en línea. Se confirma con `Enter`. |
| **Eliminar tarea** | Botón de eliminación (×) visible al pasar el cursor sobre cada tarea. |
| **Marcar todas** | Checkbox global ("Mark all as complete") para completar o reabrir todas las tareas a la vez. |
| **Limpiar completadas** | Botón "Clear completed" para eliminar de un solo clic todas las tareas finalizadas. |
| **Filtros** | Vista filtrada por estado: **All** / **Pending** / **Completed**. |
| **Contador** | Indicador del número de tareas pendientes en tiempo real. |
| **Persistencia** | Las tareas se guardan automáticamente en `localStorage`, por lo que sobreviven a recargas de página. |

#### Página de laboratorio — Sandbox de Angular Signals (`/labs`)

Componente de experimentación para explorar las capacidades de Angular Signals de forma aislada: lista reactiva de tareas, binding bidireccional de nombre con `signal`, y control de color con Reactive Forms.

### Arquitectura técnica

- **Framework:** Angular v17+ con componentes *standalone*
- **Reactividad:** API nativa de Signals (`signal`, `computed`, `effect`)
- **Formularios:** Angular Reactive Forms (`FormControl`, validadores síncronos)
- **Routing:** Angular Router con dos rutas (`/` y `/labs`)
- **Persistencia:** `localStorage` del navegador, sincronizado mediante `effect()`
- **Modelo de datos:** Interfaz `Task` con campos `id`, `title`, `completed` y `editing` (opcional)
- **Estilos:** CSS puro con diseño responsivo (adaptado a móvil)

### Estructura del proyecto

```
src/
├── app/
│   ├── models/
│   │   └── task.model.ts        # Interfaz Task
│   ├── pages/
│   │   ├── home/                # Componente principal de gestión de tareas
│   │   └── labs/                # Sandbox de experimentación con Signals
│   ├── app.component.ts         # Componente raíz (router-outlet)
│   ├── app.config.ts            # Configuración de la aplicación
│   └── app.routes.ts            # Definición de rutas
└── main.ts                      # Bootstrap de la aplicación
```

---

## Desarrollo

### Servidor de desarrollo

```bash
ng serve
```

Navega a `http://localhost:4200/`. La aplicación se recarga automáticamente al modificar los fuentes.

### Generación de código

```bash
ng generate component component-name
```

También puedes generar directivas, pipes, servicios, clases, guards, interfaces, enums y módulos.

### Build

```bash
ng build
```

Los artefactos de build se almacenan en el directorio `dist/`.

### Tests unitarios

```bash
ng test
```

Ejecuta los tests unitarios con [Karma](https://karma-runner.github.io).

### Tests end-to-end

```bash
ng e2e
```

Requiere añadir previamente un paquete que implemente capacidades de testing e2e.

### Ayuda adicional

Usa `ng help` o consulta la [referencia de Angular CLI](https://angular.io/cli).
