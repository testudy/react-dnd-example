# react-dnd-example
Created with CodeSandbox

https://codesandbox.io/s/github/annezhou920/react-dnd-example/

https://medium.com/kustomerengineering/building-complex-nested-drag-and-drop-user-interfaces-with-react-dnd-87ae5b72c803


index.js
example.jsx
|-----------------|--------------------------------------------------------------------|
|                 |  DropZone.jsx（下图的缝隙中都有DropZone组件）                      |
| SideBarItem.jsx |  |- Row.jsx ----------------------------------------------------|  |
|                 |  |                                                              |  |
|                 |  | |- Column.jsx -----| |-----------------| |-----------------| |  |
|                 |  | |                  | |                 | |                 | |  |
|                 |  | |  Component.jsx   | |                 | |                 | |  |
|                 |  | |                  | |                 | |                 | |  |
|                 |  | |------------------| |-----------------| |-----------------| |  |
|                 |  |                                                              |  |
|                 |  |--------------------------------------------------------------|  |
|                 |                                                                    |
|                 |--------------------------------------------------------------------|
|                 |                                                                    |
|                 |  TrashDropZone.jsx                                                 |
|                 |                                                                    |
|-----------------|--------------------------------------------------------------------|





helpers.js

constants.js
initial-data.js
styles.css
