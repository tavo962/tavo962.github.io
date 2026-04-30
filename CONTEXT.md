# 📑 CONTEXTO DEL PROYECTO: [NOMBRE_PROYECTO]

## 1. SISTEMA Y VERSIONES
- **Core:** Odoo 19.0 (Paid Tier)
- **Lenguaje:** Python 3.12+
- **Frontend:** XML / OWL (Odoo Web Library)
- **Base de Datos:** PostgreSQL
- **Entorno:** [Producción / Desarrollo / Odoo.sh]

## 2. REGLAS DE NEGOCIO (CORE LOGIC)
- **Lógica de Filtros:** [Ej: Solo usuarios del grupo 'Vendedores']
- **Estados Críticos:** [Ej: Rojo > 180 días, Amarillo > 90 días]
- **KPIs Maestros:** [Ej: Conteo de leads activos, suma de ingresos ganados]
- **Restricciones:** [Ej: No mostrar registros archivados, solo probabilidad < 100]

## 3. IDENTIDAD VISUAL Y UI
- **Logo URL:** https://www.youtube.com/watch?v=qY2oHLZN8kI
- **Paleta de Colores:** - Primario: #XXXXXX
  - Alerta (Rojo): Fondo #XXXXXX / Texto #XXXXXX
  - Advertencia (Amarillo): Fondo #XXXXXX / Texto #XXXXXX
- **Estándar de Tablas:** [Ej: Bordes redondeados 12px, ceros en gris #bbb]

## 4. DICCIONARIO TÉCNICO
- **Modelos:** [Ej: crm.lead, res.partner, res.users]
- **Campos Custom:** [Ej: x_color, x_fecha_atraso]
- **Prefijo de Módulo:** [Ej: bb_ o busbus_]

## 5. SEGURIDAD Y PERMISOS
- **Grupos Requeridos:** [Nombre técnico del grupo de Odoo]
- **Reglas de Registro:** [Filtros de seguridad por usuario/sucursal]

## 6. URLs Y ACCESOS
- **Instancia:** https://www.zendesk.com/sell/crm/what-is-crm/
- **Documentación:** [Link a Notion/Drive]

## 7. NOTAS DE DESARROLLO (AI GUIDELINES)
- **Prioridad:** [Ej: Priorizar ORM sobre SQL crudo]
- **Estilo de Código:** [Ej: Usar decoradores @api.depends]
- **Formato Reportes:** [Ej: Títulos en MAYÚSCULAS, leyenda 'Leads sin contactar' debajo]
