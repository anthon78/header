module.exports = {
  apps: [{
    name: 'header',
    script: 'server'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-34-227-159-100.compute-1.amazonaws.com',
      key: '~/.ssh/header.pem',
      ref: 'origin/master',
      repo: 'https://github.com/anthon78/header',
      path: '/home/ubuntu/header',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}