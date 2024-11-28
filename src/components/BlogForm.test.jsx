import { render, screen } from '@testing-library/react'
import BlogForm from './BlogForm'
import userEvent from '@testing-library/user-event'

test('<BlogForm /> updates parent state and calls onSubmit', async () => {
  const createBlog = vi.fn()
  const user = userEvent.setup()

  render(<BlogForm createBlog={createBlog} />)

  //only one textbox
  // const input = screen.getByRole('textbox')

  //multiple text boxes
  //   const inputs = screen.getAllByRole('textbox')
  //   await user.type(inputs[0], 'testing a form...')

  //by id
  //   const { container } = render(<NoteForm createNote={createNote} />)
  //   const input = container.querySelector('#note-input')

  //element doesnt have the text but contains it
  //   const element = screen.getByText(
  //     'Does not work anymore :(', { exact: false }
  //   )
  //const element = await screen.findByText('Does not work anymore :(')

  const title_input = screen.getByPlaceholderText('write title here')
  const author_input = screen.getByPlaceholderText('write author here')
  const url_input = screen.getByPlaceholderText('write url here')

  const sendButton = screen.getByText('add')

  await user.type(title_input, 'some title')
  await user.type(author_input, 'some author')
  await user.type(url_input, 'someurl')
  await user.click(sendButton)

  console.log(createBlog.mock.calls)

  expect(createBlog.mock.calls).toHaveLength(1)
  expect(createBlog.mock.calls[0][0].url).toBe('someurl')
})
