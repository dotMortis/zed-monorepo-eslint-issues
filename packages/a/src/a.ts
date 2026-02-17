export function DebugA(): Promise<void> {
        // should have 8 tab width
        // should warn -> Unexpected console statement. (eslint no-console)
        // should have single quotes
        console.log('hello from a');
        return Promise.resolve();
}
