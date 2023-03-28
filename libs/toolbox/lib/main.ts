#!/usr/bin/env node
import { argv } from 'zx';
import { ChokidarWatchOptions } from './@types/chokidar-type-aliases';
import { changedTool, watchTool } from './tools.js';
import { EC_MISSING_TOOL } from './constants.js';
import { error } from './logger.js';

async function main() {
  const cmd = argv._[0] as string | undefined;
  switch (cmd) {
    case 'watch': {
      await watchTool({
        ignored: argv.ignore as ChokidarWatchOptions['ignored'],
        jobs: argv._.slice(1),
        sourcesDir: argv.dir as string | readonly string[],
      });
      break;
    }
    case 'changed': {
      const cmd = argv._.slice(1)[0] as string | undefined;
      const dir = argv.dir as string;
      const verbose = argv.verbose as boolean;
      const excludePattern = argv.excludePattern as string | undefined;
      await changedTool(dir, verbose, excludePattern, cmd);
      break;
    }
    default: {
      if (!cmd) {
        error('Tool name is missing');
      } else {
        error(`No tool called ${cmd} in this toolbox yet.`);
      }
      process.exit(EC_MISSING_TOOL);
    }
  }
}

void main();
