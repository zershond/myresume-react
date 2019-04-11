const config = {
    proxyHost: 'http://localhost:9527',
    proxyTable: [
      {
        name: '/data-api',
        path: '/mock-api'
      }
    ]
}

export default config;
