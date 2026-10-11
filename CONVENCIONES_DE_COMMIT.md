# Convenciones de Commit - By Sofi World

Este proyecto sigue las **Conventional Commits** adaptadas al español para mantener un historial de cambios claro y estructurado.

## Formato General

```
tipo(ámbito opcional): descripción

[cuerpo opcional]

[pie opcional]
```

### Ejemplos
- `feat: añadir botón de historial`
- `fix: corregir error en temporizador al pausar`
- `docs: actualizar README con instrucciones de uso`
- `refactor: simplificar lógica de selección de temas`

---

## Tipos de Commit

| Tipo | Descripción | Ejemplo |
|------|-------------|---------|
| **feat** | Nueva funcionalidad | `feat: implementar ruleta de temas` |
| **fix** | Corrección de errores | `fix: solucionar fallo en guardado de notas` |
| **docs** | Cambios en documentación | `docs: añadir guía de contribución` |
| **style** | Cambios de formato/estilo | `style: ajustar espaciado en cards` |
| **refactor** | Reestructuración de código | `refactor: unificar manejo de estados` |
| **perf** | Mejoras de rendimiento | `perf: optimizar renderizado de chips` |
| **test** | Añadir o corregir pruebas | `test: añadir pruebas para temporizador` |
| **build** | Cambios en build/dependencias | `build: actualizar versión de Node` |
| **ci** | Configuración de CI/CD | `ci: añadir workflow de GitHub Actions` |
| **chore** | Tareas de mantenimiento | `chore: actualizar configuración de ESLint` |
| **revert** | Revertir commit | `revert: deshacer commit abc1234` |

---

## Reglas Adicionales

1. **Usar español claro y conciso** en las descripciones
2. **Máximo 72 caracteres** en la primera línea
3. **Separar la primera línea del cuerpo** con una línea en blanco
4. **Usar tiempo presente** (imperativo): "añadir", "corregir", "actualizar"
5. **Minúsculas** en la descripción (excepto nombres propios)
6. **Ámbito** entre paréntesis: `feat(history): `, `fix(timer): `, `docs(readme): `

---

## Ejemplos Completos

### Commit simple
```
feat: implementar sistema de historial
```

### Commit con ámbito
```
fix(timer): corregir desincronización al pausar
```

### Commit con cuerpo
```
feat(router): añadir navegación entre secciones

- Implementa transiciones suaves entre pantallas
- Mantiene el estado del tema seleccionado
- Responsive en todos los dispositivos
```

### Commit con pie
```
fix: solucionar error al guardar notas

Corrige el problema donde las notas no se persistían
al recargar la página.

Closes #123
```

---

## Patrones Recomendados

- ✅ **Específico**: `feat: añadir animación al girar ruleta`
- ❌ **Vago**: `feat: añadir cosas`
- ✅ **Descriptivo**: `fix: corregir fallo en temporizador cuando falta tiempo`
- ❌ **Ambiguo**: `fix: arreglar bug`

---

## Historia del Proyecto

Esta guía se crea para estandarizar las contribuciones al proyecto **By Sofi World**, una aplicación web educativa que convierte el tiempo de scroll en aprendizaje.

*Basado en [Conventional Commits](https://www.conventionalcommits.org/) v1.0.0*