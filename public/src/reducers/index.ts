import { combineReducers } from 'redux'
import { default as EventType } from '../eventType';
import {Xpath} from '../models/Xpath';
import {default as context} from '../context';
// import {indexOf} from '../utils';
// let content1 = "Rpeditor is a block editor based on quill.<br>React, Typescript and Redux are highly used in the code, and atom is the preferred IDE.<br>You can find source code in the <a href=\"https://github.com/thanzen/rpeditor\">github</a>";
// let content2 = "Features:<br>*  WYSWYG<br>*  BLOCK<br>*  PEVIEW<br>*  RESPONSIVE<br>*  CHANGE BLOCK POSITION";
// let content3 ="What I like?<br><img src=\"https://talks.golang.org/2014/readability/gopher-ok-no.png\">";
let initialState = {
    xpaths: [],
    url: ""
}

function getXPaths(state: Xpath[] = initialState.xpaths, action) {
    switch (action.type) {
        case EventType.GET_EXTRACT_REQUEST:
            return action.data;
        default:
            return state
    }
}

function changeUrl(state:string = initialState.url,action){
  if(action.type == EventType.URL_CHANGE){
    return action.url;
  }
  return state;
}
// function selectTab(state: number = initialState.selectedTab, action) {
//     if (action.type == EventType.QUILL_SELECT_TAB) {
//         return action.key;
//     }
//     return state;
// }
//
// function addBlock(state: Block[] = initialState.blocks, action) {
//     if (action.block.id == 0) {
//         if (!action.block.content) return state;
//         action.block.id = state.reduce((maxId, block) => Math.max(maxId, block.id), -1) + 1;
//     }
//     return [...state, action.block];
// }
//
// function deleteBlock(state: Block[] = initialState.blocks, action) {
//     return state.filter(block => block.id != action.block.id);
// }
//
// function changeQuillContent(state: string = "", action) {
//     if (action.type == EventType.QUILL_CONTENT_CHANGE) {
//         return action.content;
//     }
//     return state;
// }
//
// function submitBlockChange(state: Block[] = initialState.blocks, action) {
//     if (action.type == EventType.QUILL_SUBMIT_CHANGE) {
//         return state.map(block =>
//             block.id === action.block.id ? new Block(block.id, action.block.content) : block
//         );
//     }
//     return state;
// }
//
// function setQuillBlock(state: Block = null, action) {
//     if (action.type == EventType.BLOCK_SELECTED) {
//         return action.block;
//     }
//     return state;
// }
//
// function moveBlockUp(state: Block[] = initialState.blocks, action) {
//     if (action.type == EventType.BLOCK_MOVE_UP) {
//         let blocks: Block[] = [...context.store.getState().blocks];
//         let index = indexOf(blocks, action.block);
//         if (index > 0) {
//             blocks.splice(index, 1);
//             blocks.splice(index - 1, 0, action.block);
//             return blocks;
//         }
//     }
//     return state;
// }
//
// function moveBlockDown(state: Block[] = initialState.blocks, action) {
//     if (action.type == EventType.BLOCK_MOVE_DOWN) {
//         let blocks: Block[] = [...context.store.getState().blocks];;
//         let index = indexOf(blocks, action.block);
//         if (index < blocks.length - 1) {
//             blocks.splice(index, 1);
//             blocks.splice(index + 1, 0, action.block);
//             return blocks;
//         }
//     }
//     return state;
// }
//
// function mutateBlocks(state: Block[] = initialState.blocks, action) {
//     if (!action.block) return state;
//     switch (action.type) {
//         case EventType.BLOCK_ADD:
//             return addBlock(state, action);
//         case EventType.BLOCK_DELTE:
//             return deleteBlock(state, action);
//         case EventType.QUILL_SUBMIT_CHANGE:
//             return submitBlockChange(state, action);
//         case EventType.BLOCK_MOVE_UP:
//             return moveBlockUp(state, action);
//         case EventType.BLOCK_MOVE_DOWN:
//             return moveBlockDown(state, action);
//         default:
//             return state;
//     }
// }
//
const reducers = combineReducers({
  xpaths: getXPaths,
  url: changeUrl
})

export default reducers
