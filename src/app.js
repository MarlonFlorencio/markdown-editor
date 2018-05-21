'use strict'

import React, { Component } from 'react'
import marked from 'marked'
import MarkdownEditor from 'components/markdown-editor'

import('highlight.js').then((hljs) => {
  marked.setOptions({
    highlight: (code, lang) => {
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(lang, code).value
      }
      return hljs.highlightAuto(code).value
    }
  })
})

class App extends Component {
  constructor () {
    super()
    this.state = {
      value: '',
      isSaving: false
    }

    this.handleChange = (e) => {
      this.setState({
        value: e.target.value,
        isSaving: true
      })
    }

    this.handleSave = () => {
      localStorage.setItem('md', this.state.value)
      this.setState({ isSaving: false })
    }

    this.handleRemove = () => {
      console.log('ss')
    }

    this.handleCreate = () => {
      console.log('ss')
    }

    this.getMarkup = () => {
      return {__html: marked(this.state.value)}
    }
  }

  componentDidMount () {
    this.setState({
      value: localStorage.getItem('md')
    })
  }

  componentDidUpdate () {
    clearInterval(this.timer)
    this.timer = setTimeout(this.handleSave, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <MarkdownEditor
        value={this.state.value}
        isSaving={this.state.isSaving}
        handleRemove={this.handleRemove}
        handleCreate={this.handleCreate}
        handleChange={this.handleChange}
        getMarkup={this.getMarkup} />
    )
  }
}

export default App
