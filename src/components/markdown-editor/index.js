'use strict'

import React, { PropTypes } from 'react'
import Header from './header'

const MarkdownEditor = ({value, handleChange, getMarkup, isSaving, handleRemove, handleCreate}) => (
  <section className='editor'>
    <Header isSaving={isSaving} handleRemove={handleRemove} handleCreate={handleCreate} />
    <textarea value={value} onChange={handleChange} autoFocus />
    <article className='view' dangerouslySetInnerHTML={getMarkup()} />
  </section>
)

MarkdownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired
}

export default MarkdownEditor
