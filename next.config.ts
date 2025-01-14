import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },

      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
    ],
  },

  env: {
    PRODUCT_API_URL: process.env.PRODUCT_API_URL,
    JSONPLACEHOLDER_API_URL: process.env.JSONPLACEHOLDER_API_URL
  },

  poweredByHeader: false, // Отключает заголовок 'X-Powered-By'
  experimental: {
    //она оптимизирует пакеты каторый находять внутри других пакетов
    //Опция optimizePackageImports в конфигурации, скорее всего, относится к оптимизации импорта пакетов в проекте, возможно, в контексте сборщика (например, Webpack или другой). В случае с @material-ui/core, эта настройка помогает минимизировать размер бандла, оптимизируя импорты внутри самого пакета
    //Извлекает только необходимые части: Например, вместо того чтобы импортировать весь @material-ui/core, она импортирует только те компоненты, которые реально используются, что снижает объем кода, который должен быть загружен
    optimizePackageImports: [ 
      "lucide-react"
    ]
  }
};

export default nextConfig;