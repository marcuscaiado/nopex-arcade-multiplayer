const { execSync } = require('child_process');

try {
  const output = execSync('powershell "Get-CimInstance Win32_Process | Where-Object { $_.CommandLine -like \'*remote-debugging-port*\' -or $_.CommandLine -like \'*temp-chrome*\' -or $_.CommandLine -like \'*temp-diag*\' } | Select-Object ProcessId, CommandLine | ConvertTo-Json"', { encoding: 'utf8' });
  if (output && output.trim()) {
    const procs = JSON.parse(output);
    const list = Array.isArray(procs) ? procs : [procs];
    for (const p of list) {
      try {
        process.kill(p.ProcessId, 'SIGKILL');
        console.log(`Successfully terminated test process ${p.ProcessId}`);
      } catch (e) {
        console.log(`Could not kill ${p.ProcessId}: ${e.message}`);
      }
    }
  } else {
    console.log('No orphaned test processes found.');
  }
} catch (err) {
  console.log('Error searching or no processes:', err.message);
}
