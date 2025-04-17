const timestamp = new Date().toISOString().slice(0, 10);

module.exports = {
  apps: [
    {
      name: 'server_ec2',
      script: './backend/server.js',
      out_file: `./serverlogs/ec2_pm2-out-${timestamp}.log`,
      error_file: `./serverlogs/ec2_pm2-err-${timestamp}.log`,
      stop_exit_codes: [1]
    }
  ]
};
