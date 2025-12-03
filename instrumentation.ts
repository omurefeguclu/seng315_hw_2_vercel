export async function register() {
    if (process.env.NEXT_RUNTIME === 'nodejs') {
        const { runWorker } = await import('./lib/worker');    

        if (process.env.NODE_ENV === 'development' && (global as {workerStarted?: boolean}).workerStarted) {
        return;
        }

        await runWorker();
        
        (global as {workerStarted?: boolean}).workerStarted = true;
    }
    else {
        console.log('Worker not started: Not running in Node.js environment., env:', process.env.NEXT_RUNTIME);
    }
}