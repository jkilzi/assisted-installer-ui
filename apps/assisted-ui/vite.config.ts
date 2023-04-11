import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import EnvironmentPlugin from 'vite-plugin-environment';
import 'zx/globals';

export const makeDynamicEnvVars = async () => {
  $.verbose = false;
  const commitSignature = (await $`git rev-parse --short HEAD`).toString().trim();

  return {
    AIUI_APP_API_ROOT: process.env.AIUI_APP_API_ROOT ?? '/api/assisted-install',
    AIUI_APP_IMAGE_REPO:
      process.env.AIUI_APP_IMAGE_REPO ?? 'quay.io/edge-infrastructure/assisted-installer-ui',
    AIUI_APP_GIT_SHA: process.env.AIUI_APP_GIT_SHA ?? commitSignature,
    AIUI_APP_VERSION: process.env.AIUI_APP_VERSION ?? `0.0.0+sha.${commitSignature}`,
  };
};

export default defineConfig(async ({ mode }) => {
  const envVarsPrefix = 'AIUI_';
  const env = loadEnv(mode, process.cwd(), envVarsPrefix);
  const dynamicEnvVars = await makeDynamicEnvVars();

  return {
    build: {
      emptyOutDir: true,
      outDir: 'build',
      sourcemap: true,
    },
    plugins: [
      EnvironmentPlugin(dynamicEnvVars, {
        prefix: envVarsPrefix,
        defineOn: 'process.env',
      }),
      react(),
    ],
    server: {
      proxy: {
        '/api': {
          target: env.AIUI_APP_API_URL,
          changeOrigin: true,
        },
      },
    },
  };
});
