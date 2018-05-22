'use strict'

import React, { PropTypes } from 'react'
import SaveMessage from 'components/save-message'
import Button from 'components/button'

const MarkdownEditorHeader = ({isSaving, handleCreate, handleRemove}) => (
  <header className='editor-header'>
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
  handleRemove: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired
}

export default MarkdownEditorHeader
