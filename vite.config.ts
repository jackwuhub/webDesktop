import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
      server: {
        port: 8080,
        open: false,
        // proxy: { // 配置本地代理地址
        //   '/dev': 'http://xxx.xxx.com/api'
        // }
     },
    plugins: [vue()],
    resolve: {
     alias: {
         "@": path.resolve(__dirname, 'src'),
        },
    },
})
