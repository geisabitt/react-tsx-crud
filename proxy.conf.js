const PROXY_CONFIG = [
  {
    context: ["/api"],
    target: "http://teste-frontend.saperx.com.br",
    secure: false,
    logLevel: "debug",
  },
];

export default PROXY_CONFIG;
