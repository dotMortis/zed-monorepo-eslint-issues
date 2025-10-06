Issue: https://github.com/zed-industries/zed/issues/39041#issuecomment-3355539944

1. Run `pnpm i`
2. Open Zed, or restart the LSPs with no files open
3. Open `packages/b/src/b.ts` **and** `packages/a/src/a.ts`
4. ESLint should work just fine
5. Restart Zed or the LSPs with both files open
6. ESLint should now show configuration errors
