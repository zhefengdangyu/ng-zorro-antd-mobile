---
category: Components
type: Gesture
title: PullToRefresh
---

Instantly reload the content by triggering.

### Rules
- Can be used in conjunction with `ListView` or alone.
- Can be considered regular automatic refresh, e.g. login APP, automatically refresh the first page List.

## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
<<<<<<< HEAD
| direction  | pull direction, can be `up` or `down` | String | - |
| distanceToRefresh | distance to refresh | number | 25 |
| refreshing | Whether the view should be indicating an active refresh | bool | false |
| onRefresh | required, Called when the view starts refreshing. | () => void | - |
| ngModel | refresh state `{ currentState : deactivate , drag: false}` | Object | deactivate |
| headerIndicator  | header indicator config `{ activate: any, deactivate: any, release: any, finish: any }` | Object | - |
| footerIndicator  | footer indicator config `{ activate: any, deactivate: any, release: any, finish: any }` | Object | - |
| endReachedRefresh| refresh reached end （direction=down） | bool | false | 
=======
| `[direction]` | Pull direction | `'up' \| 'down'` | - |
| `[distanceToRefresh]` | Distance to refresh | `number` | `25` |
| `[refreshing]` | Whether the view should be indicating an active refresh | `boolean` | `false` |
| `[headerIndicator]` | Header indicator config `{ activate: any, deactivate: any, release: any, finish: any }` | `object` | - |
| `[footerIndicator]` | Footer indicator config `{ activate: any, deactivate: any, release: any, finish: any }` | `object` | - |
| `[endReachedRefresh]`| Refresh reached end（direction=down） | `boolean` | `false` | 
| `[(ngModel)]` | Refresh state `{ currentState : deactivate , drag: false}` | `object` | `{ currentState : deactivate , drag: false}` |
| `(onRefresh)` | Called when the view starts refreshing | `EventEmitter<void>` | - |

>>>>>>> upstream/master
> **Notice：** OnClose is invalid and Toast does not hide, If set duration = 0, toast will not auto hide, you have to manually do it.