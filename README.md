# Servicio de Envío de Emails

## Descripción
Este proyecto es un servicio de envío de emails utilizando Resend. Actualmente está deployado en [Vercel](https://resend-five.vercel.app/).

## Configuración Local

### Prerequisitos
- Node.js
- npm

### Instalación
1. Clonar el repositorio
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Crear archivo `.env` con las siguientes variables:
   ```bash
   RESEND_API_KEY=tu_api_key_de_resend
   FRONTEND_URL=link_para_la_redirección
   ```
4. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Uso del API

### Endpoint: POST /api/send-email
Este endpoint está configurado para enviar un email con un link al formulario de customer scoops (En el caso del deploy el link es a: https://customer-scoops-form.vercel.app/).

#### Importante
Debido a las restricciones de Resend, actualmente solo se pueden enviar correos a distintos emails si se cuenta con un dominio verificado. Por el momento, el sistema está configurado para enviar correos a una dirección de email específica asociada a la cuenta de Resend utilizada.

## Mejoras a futuro
Sería bueno incorporar las siguientes funcionalidades al endpoint:

- Recibir como parte del body de la petición:
  - Nombre del destinatario
  - Email del destinatario
  - Link de redirección personalizado

Esto permitirá mayor flexibilidad y personalización en los envíos de correos.

## Tecnologías Utilizadas
- Node.js
- Express.js
- Resend
- Vercel (Deploy)
