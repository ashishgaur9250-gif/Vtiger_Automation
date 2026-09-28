module.exports = {
  default: {
    paths: ["Login.feature"],
    requireModule: ["tsx/cjs"],
    require: ["LoginFeature.ts", "support/**/*.ts"],
      require: ["LoginFeature.ts", "steps/**/*.ts", "support/**/*.ts"],
    format: ["progress"],
  },
};