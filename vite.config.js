import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  visualizer({
      open: true, // 开启此项：打包完成后，浏览器会自动打开分析页面
      filename: 'stats.html', // 分析图表生成的文件名（默认会生成在项目根目录）
      gzipSize: true, // 收集 gzip 压缩后的大小（更接近真实的上线体积）
      brotliSize: true // 收集 brotli 压缩后的大小
    })
  ],
  resolve: {
    alias: {
      // 2. 配置别名 '@' 指向 'src' 目录
      '@': path.resolve(__dirname, './src')
    }
  }

})
