'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import SaveMessage from 'components/save-message'
import Button from 'components/button'

const MarkdownEditorHeader = ({title, handleChange, isSaving, handleCreate, handleRemove}) => (
  <header className='editor-header'>
    <input type='text' value={title} onChange={handleChange('title')} placeholder='Sem título' />

    <SaveMessage isSaving={isSaving} />

    <Button onClick={handleCreate} kind='success'>
      Criar novo
    </Button>

    <Button onClick={handleRemove} kind='danger'>
      Remover
    </Button>
  </header>
)

MarkdownEditorHeader.propTypes = {
  title: PropTypes.string.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired
}

export default MarkdownEditorHeader
