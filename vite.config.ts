import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import tailwindcss from 'tailwindcss';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => {
  return defineConfig({
    plugins: [react()],
    css: {
      postcss: {
        plugins: [tailwindcss()]
      }
    },
    define: {
      'process.env': { ...process.env, ...loadEnv(mode, process.cwd()) }
    },
    server: {
      port: 3000,
      watch: {
        usePolling: true
      }
    },
    resolve: {
      alias: [
        { find: /^~/, replacement: '' },
        { find: '@api', replacement: resolve(__dirname, 'src', 'api') },
        { find: '@assets', replacement: resolve(__dirname, 'src', 'assets') },
        {
          find: '@authenticate',
          replacement: resolve(__dirname, 'src', 'authenticate')
        },
        {
          find: '@components',
          replacement: resolve(__dirname, 'src', 'components')
        },
        {
          find: '@constants',
          replacement: resolve(__dirname, 'src', 'constants')
        },
        { find: '@domain', replacement: resolve(__dirname, 'src', 'domain') },
        { find: '@hooks', replacement: resolve(__dirname, 'src', 'hooks') },
        { find: '@queries', replacement: resolve(__dirname, 'src', 'queries') },
        { find: '@routes', replacement: resolve(__dirname, 'src', 'routes') },
        { find: '@styles', replacement: resolve(__dirname, 'src', 'styles') },
        { find: '@utils', replacement: resolve(__dirname, 'src', 'utils') },
        {
          find: '@view',
          replacement: resolve(__dirname, 'src', 'view')
        }
      ]
    }
  });
};
