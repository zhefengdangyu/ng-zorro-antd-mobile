---
category: Components
type: Data Entry
title: Checkbox
---

Checkbox

## API

### Checkbox

<<<<<<< HEAD
| Properties | Descrition                               | Type                                                    | Default        |
| ---------- | ---------------------------------------- | ------------------------------------------------------- | -------------- |
| name       | name                                     | String                                                  | -              |
| value      | value                                    | String                                                  | -              |
| checked    | whether is checked now (Controlled Mode) | Boolean                                                 | <span> </span> |
| disabled   | whether is been disabled                 | Boolean                                                 | false          |
| onChange   | callback when check status is changed    | (name: string, value: string, checked: boolean) => void | -              |
=======
| Properties | Descrition | Type | Default |
| ---------- | ---------- | ---- | ------- |
| `[name]` | name | `string` | - |
| `[value]` | value | `string` | - |
| `[checked]` | Whether is checked now (Controlled Mode) | `boolean` | - |
| `[disabled]` | Whether is been disabled | `boolean` | `false` |
| `(onChange)` | Callback when check status is changed | `EventEmitter<{name: string, value: string, checked: boolean}>` | - |
>>>>>>> upstream/master

### CheckboxItem

The encapsulation about `Checkbox` based on `ListItem`, the property `thumb` of `ListItem` will be passed to `Checkbox`, while other properties remain the same (except for onClick, which has been changed to onChange).

<<<<<<< HEAD
| Properties | Descrition                             | Type                                                    | Default              |
| ---------- | -------------------------------------- | ------------------------------------------------------- | -------------------- |
| name       | name                                   | String                                                  | -                    |
| value      | value                                  | String                                                  | -                    |
| ngModel    | whether is checked now, double binding | Boolean                                                 | <span> false </span> |
| disabled   | whether is been disabled               | Boolean                                                 | false                |
| onChange   | callback when check status is changed  | (name: string, value: string, checked: boolean) => void | -                    |
=======
| Properties | Descrition | Type | Default |
| ---------- | ---------- | ---- | ------- |
| `[name]` | name | `string` | - |
| `[value]` | value | `string` | - |
| `[disabled]` | Whether is been disabled | `boolean` | `false` 
| `[(ngModel)]` | Whether is checked now | `boolean` | `false` |
| `(onChange)` | Callback when check status is changed | `EventEmitter<{name: string, value: string, checked: boolean}>` | - |
>>>>>>> upstream/master

### AgreeItem

Almost the same as CheckboxItem and be used for special scenes. See demo for details.

<<<<<<< HEAD
| Properties | Descrition                             | Type                                                    | Default              |
| ---------- | -------------------------------------- | ------------------------------------------------------- | -------------------- |
| name       | name                                   | String                                                  | -                    |
| value      | value                                  | String                                                  | -                    |
| ngModel    | whether is checked now, double binding | Boolean                                                 | <span> false </span> |
| disabled   | whether is been disabled               | Boolean                                                 | false                |
| onChange   | callback when check status is changed  | (name: string, value: string, checked: boolean) => void | -                    |
=======
| Properties | Descrition | Type | Default |
| ---------- | ---------- | ---- | ------- |
| `[name]` | name | `string` | - |
| `[value]` | value | `string` | - |
| `[disabled]` | Whether is been disabled | `boolean` | `false` |
| `[(ngModel)]` | Whether is checked now | `boolean` | `false` |
| `(onChange)` | Callback when check status is changed | `EventEmitter<{name: string, value: string, checked: boolean}>` | - |
>>>>>>> upstream/master
