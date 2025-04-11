/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-require-imports */
// const { createProxyMiddleware } = require('http-proxy-middleware')

// module.exports = function (app: any) {
//   app.use(
//     '/api',
//     createProxyMiddleware({
//       target: 'http://localhost:8080',
//       changeOrigin: true,
//     }),
//   )
// }

// "proxy": "http://localhost:8080",

import { createProxyMiddleware } from "http-proxy-middleware";
import * as express from "express";
import { Express, Request, Response, NextFunction } from "express";

export default function setupProxy(app: Express): void {
  app.use(
    // "/products",
    createProxyMiddleware({
      target: "https://www.ikea.com/us/en/images/products",

      changeOrigin: true,
    })
  );
}

// const app = express();

// const proxyMiddleware = createProxyMiddleware<Request, Response>({
//     target: 'http://www.example.org/api',
//     changeOrigin: true,
//   }),

// app.use('/api', proxyMiddleware);
