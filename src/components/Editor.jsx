import React, { Component } from 'react'
import 'tui-editor/dist/tui-editor-extScrollSync.js'
require('codemirror/lib/codemirror.css'); // codemirror
require('tui-editor/dist/tui-editor.css'); // editor ui
require('tui-editor/dist/tui-editor-contents.css'); // editor content
require('highlight.js/styles/github.css'); // code block highlight

var tuiEditoe = require('tui-editor');


class Editor extends Component {

  componentDidMount() {
    tuiEditoe.factory({
      el: document.getElementById('MdEditor'),
      initialEditType: 'markdown',
      previewStyle: 'vertical',
      height: '100%',
      language:'zh_CN',
      exts:['scrollSync','colorSyntax',"chart"],
      initialValue: '### content to be rendered'
    });
  }

  render(){
    return(
      <div style={{height:"100%",width:"100%",overflow:"hidden"}} id="MdEditor"></div>
    )
  }
}

export default Editor