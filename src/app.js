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
      if (this.state.isSaving) {
        localStorage.setItem('md', this.state.value)
        this.setState({ value: '' })
      }
    }

    this.handleRemove = () => {
      localStorage.removeItem('md')
      this.setState({ isSaving: false })
    }

    this.handleCreate = () => {
      console.log('create')
    }

    this.getMarkup = () => {
      return {__html: marked(this.state.value)}
    }
  }

  componentDidMount () {
    this.setState({
      value: localStorage.getItem('md') || ''
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
