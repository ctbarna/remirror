# @remirror/extension-events

## 1.0.0-next.25

> 2020-08-23

### Patch Changes

- Updated dependencies [e37d64de]
- Updated dependencies [3f2625bf]
  - @remirror/core@1.0.0-next.25

## 1.0.0-next.24

> 2020-08-20

### Patch Changes

- Updated dependencies [65a7ea24]
  - @remirror/core@1.0.0-next.24

## 1.0.0-next.22

> 2020-08-17

### Patch Changes

- Updated dependencies [9ab1d0f3]
- Updated dependencies [45d82746]
  - @remirror/core@1.0.0-next.22
  - @remirror/pm@1.0.0-next.22

## 1.0.0-next.21

> 2020-08-15

### Patch Changes

- Updated dependencies [3673a0f0]
- Updated dependencies [8c34030e]
- Updated dependencies [baf3f56d]
  - @remirror/core@1.0.0-next.21
  - @remirror/pm@1.0.0-next.21

## 1.0.0-next.20

> 2020-08-14

### Patch Changes

- Updated dependencies [770e3d4a]
- Updated dependencies [92653907]
  - @remirror/pm@1.0.0-next.20
  - @remirror/core@1.0.0-next.20

## 1.0.0-next.17

> 2020-08-02

### Patch Changes

- Updated dependencies [898c62e0]
  - @remirror/core@1.0.0-next.17

## 1.0.0-next.16

> 2020-08-01

### Patch Changes

- a7037832: Use exact versions for `@remirror` package `dependencies` and `peerDepedencies`.

  Closes #435

- dcccc5fc: Add browser entrypoint to packages and shrink bundle size.
- 231f664b: Upgrade dependencies.
- 6c6d524e: Remove use of `export *` for better tree shaking.

  Closes #406

- Updated dependencies [f032db7e]
- Updated dependencies [a7037832]
- Updated dependencies [6e8b749a]
- Updated dependencies [dcccc5fc]
- Updated dependencies [231f664b]
- Updated dependencies [982a6b15]
- Updated dependencies [6c6d524e]
- Updated dependencies [6c6d524e]
- Updated dependencies [be9a9c17]
- Updated dependencies [720c9b43]
  - @remirror/core@1.0.0-next.16
  - @remirror/pm@1.0.0-next.16

## 1.0.0-next.15

> 2020-07-31

### Major Changes

- f91dcab1: 🎉 New extension `@remirror/extension-events`.

  This extension adds handlers for the events happening within the remirror editor. The extension is
  part of the `CorePreset` but it doesn't make it's handlers available to the preset. In order to
  use the handlers you will need direct access to the `EventsExtension`.

  ```ts
  import { EventsExtension } from 'remirror/extension-events';
  import { useExtension } from 'remirror/react';

  const Editor = () => {
    useExtension(
      EventsExtension,
      ({ addHandler }) => {
        addHandler('focus', () => log('focused'));
      },
      [],
    );
  };
  ```

  To begin with the only events added are `focus` and `blur`.

### Patch Changes

- Updated dependencies [cdc5b801]
- Updated dependencies [44516da4]
- Updated dependencies [e5ea0c84]
- Updated dependencies [a404f5a1]
- Updated dependencies [6c3b278b]
  - @remirror/core@1.0.0-next.15