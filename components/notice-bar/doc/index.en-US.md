---
category: Components
type: Data Display
title: NoticeBar
---

Component to display a system message, event notice and etc. Which is under the navigation bar.

### Rules

- Be used to attract user's attension, the importance level is lower than `Modal` and higher than `Toast`.

## API

## NoticeBar
Properties | Descrition | Type | Default
-----------|------------|------|--------
<<<<<<< HEAD
| option | NoticeBar params | Object | `{mode: '', icon: '', action: '', content: '', fontSize: '14px', scrolling: true, marqueeProps: { loop: true, leading: 500, trailing: 8000, fps: 200, style: {} },};`|
| mode    | Type of NoticeBar, options: `closable` `link`   | String |  ''  |
| icon    | Set the icon at the start position  |  TemplateRef | `<Icon type={require('./trips.svg')} size="xxs" />`|
| content | Set notice content | String| |
| onClick | A callback function, can be executed when you close the notice or click on the operating area   | (): void | <span> </span> |
| marqueeProps | marquee params       | Object | `{loop: false, leading: 500, trailing: 800, fps: 40, style: {}}`  |
| action | text which is used to replace icon | TemplateRef | <span> </span> |
=======
| `[option]` | NoticeBar params | `object` | `{ mode: '', icon: '', action: '', content: '', fontSize: '14px', scrolling: true, marqueeProps: { loop: true, leading: 500, trailing: 8000, fps: 200, style: {} } }` |
>>>>>>> upstream/master

## option NoticeBar params
Properties | Descrition | Type | Default
-----------|------------|------|--------
<<<<<<< HEAD
| mode    | Type of NoticeBar, options: `closable` `link`   | String |  ''  |
| icon    | Set the icon at the start position  |  TemplateRef | |
| action | text which is used to replace icon | TemplateRef | <span> </span> |
| fontSize | Set NoticeBar fontSize | String | `14px` |
| scrolling | Set NoticeBar scorlling or not | boolean | true |
| content | Set notice content | String| |
| onClick | A callback function, can be executed when you close the notice or click on the operating area   | (): void | <span> </span> |
| marqueeProps | marquee params       | Object | `{loop: false, leading: 500, trailing: 800, fps: 40, style: {}}`  |
=======
| `[mode]` | Type of NoticeBar | `'closable' \| 'link'` | - |
| `[icon]` | Set the icon at the start position | `TemplateRef` | - |
| `[action]` | Text which is used to replace icon | `TemplateRef` | - |
| `[content]` | Set notice content | `string`| |
| `[fontSize]`| Set NoticeBar fontSize | `string` | `14px` |
| `[scrolling]`| Set NoticeBar scorlling or not | `boolean` | `true` |
| `[marqueeProps]` | Marquee params | `object` | `{ loop: false, leading: 500, trailing: 800, fps: 40, style: {} }` |
| `(onClick)` | A callback function, can be executed when you close the notice or click on the operating area | `EventEmitter<void>` | - |
>>>>>>> upstream/master
