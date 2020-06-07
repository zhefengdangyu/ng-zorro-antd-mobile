---
category: Components
type: Data Entry
title: Checkbox
subtitle: 复选框
---

复选框

## API

### Checkbox

<<<<<<< HEAD
| 属性     | 说明                      | 类型                                                    | 默认值 |
| -------- | ------------------------- | ------------------------------------------------------- | ------ |
| name     | name                      | String                                                  | -      |
| value    | value                     | String                                                  | -      |
| checked  | 指定当前是否选中          | Boolean                                                 | 无     |
| disabled | 是否禁用                  | Boolean                                                 | false  |
| onChange | change 事件触发的回调函数 | (name: string, value: string, checked: boolean) => void | 无     |

### CheckboxItem

基于`ListItem`对`Checkbox`进行封装,`ListItem`的`thumb`属性固定传入`Checkbox`,其他属性和`ListItem`一致。

| 属性     | 说明                         | 类型                                                    | 默认值 |
| -------- | ---------------------------- | ------------------------------------------------------- | ------ |
| name     | name                         | String                                                  | -      |
| value    | value                        | String                                                  | -      |
| ngModel  | 指定当前是否选中，可双向绑定 | Boolean                                                 | false  |
| disabled | 是否禁用                     | Boolean                                                 | false  |
| onChange | change 事件触发的回调函数    | (name: string, value: string, checked: boolean) => void | 无     |
=======
| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ----- |
| `[name]` | name | `string` | - |
| `[value]` | value | `string` | - |
| `[checked]` | 指定当前是否选中 | `boolean` | - |
| `[disabled]` | 是否禁用 | `boolean` | false |
| `(onChange)` | change 事件触发的回调函数 | `EventEmitter<{name: string, value: string, checked: boolean}>` | - |

### CheckboxItem

基于`ListItem`对`Checkbox`进行封装,`ListItem`的`thumb`属性固定传入`Checkbox`,其他属性和`ListItem`一致(除了onClick回调事件，在这里它被onChange回调事件所替代)。

| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ----- |
| `[name]` | name | `string` | - |
| `[value]` | value | `string` | - |
| `[disabled]` | 是否禁用 | `boolean` | `false` |
| `[(ngModel)]` | 指定当前是否选中 | `boolean` | `false` |
| `(onChange)` | change 事件触发的回调函数 | `EventEmitter<{name: string, value: string, checked: boolean}>` | - |
>>>>>>> upstream/master

### AgreeItem

用于同意协议这种场景的复选框

<<<<<<< HEAD
| 属性     | 说明                         | 类型                                                    | 默认值 |
| -------- | ---------------------------- | ------------------------------------------------------- | ------ |
| name     | name                         | String                                                  | -      |
| value    | value                        | String                                                  | -      |
| ngModel  | 指定当前是否选中，可双向绑定 | Boolean                                                 | false  |
| disabled | 是否禁用                     | Boolean                                                 | false  |
| onChange | change 事件触发的回调函数    | (name: string, value: string, checked: boolean) => void | 无     |
=======
| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ----- |
| `[name]` | name | `string` | - |
| `[value]` | value | `string` | - |
| `[disabled]` | 是否禁用 | `boolean` | `false` |
| `[(ngModel)]` | 指定当前是否选中 | `boolean` | `false`  |
| `(onChange)` | change 事件触发的回调函数 | `EventEmitter<{name: string, value: string, checked: boolean}>` | - |
>>>>>>> upstream/master
