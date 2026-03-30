# Bitcoin Growth - PRD

## Problema Original
Mini app web premium "Bitcoin Growth" en español para mostrar a un cliente pequeño inversionista cómo crece su dinero dentro de una operación base en Bitcoin.

## Arquitectura
- **Frontend**: Archivo HTML estático con CSS y JS embebidos
- **Backend**: FastAPI sirviendo el HTML y API proxy para CoinGecko
- **API Externa**: CoinGecko para precio BTC en tiempo real
- **Sin Base de Datos**: Autenticación en frontend con contraseñas fijas

## Usuarios
1. **Usuario 1**: Contraseña `mipapimartin` - Capital $100
2. **Usuario 2**: Contraseña `soytuperra` - Capital $100

## Características Implementadas
- [x] Pantalla de login con diseño de dos columnas
- [x] Dashboard con sidebar (desktop) y mobile header (mobile)
- [x] Métricas de inversión: BTC comprado, participación, ganancias
- [x] Simulador con 4 inputs + slider de precio
- [x] Botones: Recalcular, Escenario Alcista (+22%), Conservador (-7%), Restablecer
- [x] Botón "Precio Real" para obtener precio BTC de CoinGecko
- [x] Gráfica de líneas con Chart.js (Base vs Usuario)
- [x] Toggle de tema claro/oscuro
- [x] Diseño responsive (mobile y desktop)
- [x] Valores por defecto: Base $2000, Entrada $71500, Actual $82500, Usuario $100

## Backlog / Próximas Mejoras
- [ ] P1: Caché local del precio BTC para evitar rate limiting
- [ ] P1: Persistencia de preferencias (tema claro/oscuro)
- [ ] P2: Histórico de precios BTC para gráfica más detallada
- [ ] P2: Notificaciones de cambios significativos de precio
- [ ] P3: Exportar reporte en PDF

## URLs
- App: `/api/app`
- API Precio BTC: `/api/btc-price`

## Fecha de Implementación
Enero 2026
