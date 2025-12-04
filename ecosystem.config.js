module.exports = {
  apps: [{
    name: 'suncity-website',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/suncity-website',
    env: {
      NODE_ENV: 'production',
      PORT: 3001
    },
    instances: 1,
    exec_mode: 'fork',
    watch: false,
    max_memory_restart: '1G',
    error_file: '/var/log/pm2/suncity-website-error.log',
    out_file: '/var/log/pm2/suncity-website-out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true,
    autorestart: true,
    max_restarts: 10,
    min_uptime: '10s'
  }]
};

