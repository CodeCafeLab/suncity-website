const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

async function killPort(port) {
  try {
    // Windows command to find and kill process on port
    const { stdout } = await execPromise(`netstat -ano | findstr :${port}`);
    const lines = stdout.trim().split('\n').filter(line => line.trim());
    
    if (lines.length === 0) {
      console.log(`✓ Port ${port} is free`);
      return;
    }
    
    const pids = new Set();
    lines.forEach(line => {
      const parts = line.trim().split(/\s+/);
      if (parts.length > 0) {
        const pid = parts[parts.length - 1];
        if (pid && !isNaN(pid)) {
          pids.add(pid);
        }
      }
    });

    if (pids.size === 0) {
      console.log(`✓ Port ${port} is free`);
      return;
    }

    console.log(`Found ${pids.size} process(es) on port ${port}, killing...`);
    for (const pid of pids) {
      try {
        await execPromise(`taskkill /F /PID ${pid}`);
        console.log(`✓ Killed process ${pid}`);
      } catch (error) {
        // Process might already be dead or require admin rights
        if (!error.message.includes('not found')) {
          console.log(`⚠ Could not kill process ${pid}: ${error.message}`);
        }
      }
    }
    console.log(`✓ Port ${port} is now free`);
  } catch (error) {
    // Port might not be in use
    if (error.message.includes('findstr')) {
      console.log(`✓ Port ${port} is free`);
    } else {
      console.log(`⚠ Error checking port ${port}: ${error.message}`);
    }
  }
}

const port = process.argv[2] || '9002';
killPort(port).catch(console.error);

