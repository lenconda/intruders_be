module.exports = {
  apps: [{
    name: 'Intruders',
    script: 'node_modules/.bin/ts-node app/app.ts',
    env: {
      NODE_ENV: 'development'
    },
    env_production : {
      NODE_ENV: 'production'
    }
  }],
  extends: "tsconfig.json"
}
