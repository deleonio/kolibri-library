# Stencil peproduction [#5358](https://github.com/ionic-team/stencil/issues/5358)

## Bug Report

We get the following error after updating Stencil to version 4.12:

```shell
[53:59.8]  @stencil/core
[54:00.3]  v4.12.2 🎯
[54:00.5]  testing spec files
[54:00.6]  jest args: --spec --json --outputFile dist/jest-test-results.json --max-workers=8
 FAIL  src/components/button/test/snapshot.spec.tsx
  ● Test suite failed to run

    ENOENT: no such file or directory, open 'node:crypto'

      at Runtime.readFile (../node_modules/.pnpm/jest-runtime@26.6.3/node_modules/jest-runtime/build/index.js:1987:21)
      at ../node_modules/.pnpm/@stencil+core@4.12.2/node_modules/@stencil/core/compiler/stencil.js:55:21
      at Object.<anonymous> (../node_modules/.pnpm/@stencil+core@4.12.2/node_modules/@stencil/core/compiler/stencil.js:277787:3)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        4.386 s
Ran all test suites.
Test results written to: dist/jest-test-results.json

 ELIFECYCLE  Test failed. See above for more details.
```

## Steps to reproduce

One-line command:

```shell
pnpm clean && pnpm i && pnpm i @stencil/core@4.11.0 && pnpm test && pnpm i @stencil/core@4.12.2 && pnpm test
```

1. Clone the repository: `git clone https://github.com/deleonio/kolibri-library.git`
2. Install the dependencies: `pnpm i`
3. Install Stencil to version 4.11: `pnpm i @stencil/core@4.11.0`
4. Run the tests: `pnpm test`
5. Update Stencil to version 4.12: `pnpm i @stencil/core@4.12.2`
6. Run the tests again: `pnpm test`
