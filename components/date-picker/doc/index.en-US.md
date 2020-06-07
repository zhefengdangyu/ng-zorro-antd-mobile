---
category: Components
type: Data Entry
title: DatePicker
---

Used to select a date or time.

### Rules
- A maximum of five independent rollers are shown, each of which represents a different value.


## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
<<<<<<< HEAD
| mode  | mode value, can be a `date` or `time` or `datetime` or `year` or `month` | String | `date` |
| ngModel | the currently selected value | Date | - |
| minDate   | minimum date | Date  |  2000-1-1  |
| maxDate   | maximum date | Date  |  2030-1-1  |
| minuteStep |   The amount of time, in minutes, between each minute item.    | Number | 1 |
| locale   | international, can override the configuration of the global `[LocaleProvider](https://ng.mobile.ant.design/components/locale-provider/en)` | Object: {DatePickerLocale: {year, month, day, hour, minute, am?, pm?}, okText, dismissText} |  -  |
| disabled   | set disabled  | Boolean |    false  |
| showErrorToast | Toast error message | Boolean | true |
| showErrorToastInterval | Toast error message interval | number | 2000 |
| onValueChange | fire when picker col change | ({date: any, index: number}) => void | - |
| title  | title | string/React.TemplateRef |  -  |
| onOk  | handler called when click ok | (val): void  |  - |
| onDismiss  | handler called when click cancel | (): void  |  -  |
=======
| `[mode]`| Mode value | `'year' \| 'month' \| 'date' \| 'time' \| 'datetime'` | `'date'` |
| `[minDate]` | Minimum date | `Date` | `2000-1-1` |
| `[maxDate]` | Maximum date | `Date` | `2030-1-1` |
| `[minuteStep]` | The amount of time, in minutes, between each minute item | `number` | `1` |
| `[locale]` | International, can override the configuration of the global `[LocaleProvider](https://ng.mobile.ant.design/components/locale-provider/en)` | `{DatePickerLocale: {year, month, day, hour, minute, am?, pm?}, okText, dismissText }` | - |
| `[disabled]` | Set disabled | `boolean` | `false`  |
| `[showErrorToast]` | Toast error message | `boolean` | `true` |
| `[showErrorToastInterval]` | Toast error message | `number` | `2000` |
| `[title]` | Title | `string \| TemplateRef` | - |
| `[(ngModel)]` | The currently selected value | `Date` | `new Date()` |
| `(onValueChange)` | Fire when picker col change | `EventEmitter<{date: object, index: string}>` | - |
| `(onOk)` | Handler called when click ok | `EventEmitter<Date>` | - |
| `(onDismiss)` | Handler called when click cancel | `EventEmitter<void>` | - |
>>>>>>> upstream/master

Note: The date strings have different implementations in different browsers. For example, `new Date ('2017-1-1')` is an Invalid Date on Safari but is parsed properly on Chrome.

Note: We suggest DatePicker's children to be `ListItem`, if not, you need to be a custom component which accept and handle `onClick` / `extra` / `chidlren` props)
