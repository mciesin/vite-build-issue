export default {
  plugins: [
    {
      name: 'slow-down',
      apply: 'build',
      enforce: 'pre',
      async resolveId() {
        await new Promise((r) =>
          setTimeout(r, 100)
        );
      },
    }
  ],
  build: {
    commonjsOptions: {
      include: [],
    },
    minify: false
  },
  optimizeDeps: {
    disabled: false
  },
};
