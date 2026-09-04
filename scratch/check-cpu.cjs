const { execSync } = require('child_process');

function getCpu() {
  const lines = execSync('wmic path Win32_PerfFormattedData_PerfProc_Process get IDProcess,Name,PercentProcessorTime', { encoding: 'utf8' }).trim().split('\n');
  const results = [];
  for (let i = 1; i < lines.length; i++) {
    const parts = lines[i].trim().split(/\s+/);
    if (parts.length >= 3) {
      const pid = parts[0];
      const name = parts.slice(1, parts.length - 1).join(' ');
      const cpu = parseInt(parts[parts.length - 1], 10);
      if (cpu > 0 && name !== '_Total' && name !== 'Idle') {
        results.push({ pid, name, cpu });
      }
    }
  }
  results.sort((a, b) => b.cpu - a.cpu);
  return results.slice(0, 10);
}

console.log(JSON.stringify(getCpu(), null, 2));
