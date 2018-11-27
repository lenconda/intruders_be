module.exports = {
  apps: [{
    name: 'Intruders',
    script: 'app/app.ts',
    env: {
      NODE_ENV: 'development'
    },
    env_production : {
      NODE_ENV: 'production'
    }
  }]
}
