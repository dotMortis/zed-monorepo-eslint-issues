Issue: https://github.com/zed-industries/zed/issues/39041#issuecomment-3355539944

1. Run `pnpm i`
2. Open Zed, or restart the LSPs
3. eslint does not report any issues to zed
4. Run `pnpm lint` -> shows all eslint issues

expected errors:

```
zed-monorepo-eslint-issues/packages/a/src/a.ts
│   5:9  warning  Unexpected console statement  no-console
│ ✖ 1 problem (0 errors, 1 warning)
zed-monorepo-eslint-issues/packages/b/src/b.ts
│   5:3  warning  Unexpected console statement  no-console
│ ✖ 1 problem (0 errors, 1 warning)
zed-monorepo-eslint-issues/apps/server/src/index.ts
│    8:7  warning  Unexpected console statement                                                               …
│   10:7  error    Promises must be awaited, end with a call to .catch, end with a call to .then with a reject…
│ ✖ 2 problems (1 error, 1 warning)
```
