'use strict'

import React, { PropTypes } from 'react'
import Header from './header'

const MarkdownEditor = ({value, handleChange, getMarkup, textareaRef,
                          isSaving, handleRemove, handleCreate}) => (
  <section className='editor'>
    <Header isSaving={isSaving} handleRemove={handleRemove} handleCreate={handleCreate} />
    <textarea value={value} onChange={handleChange} autoFocus ref={textareaRef} />
    <article className='view' dangerouslySetInnerHTML={getMarkup()} />
  </section>
)

MarkdownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired,
  textareaRef: PropTypes.func.isRequired
}

export default MarkdownEditor
