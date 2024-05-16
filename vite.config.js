import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const path = require('path');

export default ({ mode }) => {
  return defineConfig({
    plugins: [react()],
    define: {
      "process.env.NODE_ENV": `"${mode}"`,
    },
    resolve: {
      alias: {
        'components': path.resolve('src/components/'),
        'pages': path.resolve('src/pages/'),
        'lib': path.resolve('src/lib/'),
        'hooks': path.resolve('src/hooks/'),
        'images': path.resolve('src/images/'),
      }
    },
    server: {
      host: '0.0.0.0', // Asegúrate de que la aplicación escucha en 0.0.0.0
      port: 5173, // Puedes especificar el puerto si es necesario
    }
  })
}
