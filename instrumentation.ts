import { main as worker } from './worker';
export async function register() {
    await worker();
}