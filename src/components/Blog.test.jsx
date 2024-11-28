import { render, screen } from '@testing-library/react'
import Blog from './Blog'
import userEvent from '@testing-library/user-event'

describe('<Blog />', async () => {
  let container
  const blog = {
    author: 'fulano',
    title: 'umblog',
    url: 'oblog.com',
    likes: 0,
    user: {
      username: 'testuser',
      name: 'Test User',
      id: '123',
    },
  }

  const mockLikeHandler = vi.fn()
  const mockToggleHandler = vi.fn()

  beforeEach(() => {
    container = render(
      <Blog
        blog={blog}
        handleLike={mockLikeHandler}
        user={{
          username: 'testuser',
          name: 'Test User',
        }}
        toggleVisibility={mockToggleHandler}
      />
    ).container

    screen.debug()
  })

  //   test('renders content', async () => {
  //     const user = userEvent.setup()

  //     const button = screen.getByText('hide')
  //     await user.click(button)

  //     expect(mockHandler.mock.calls).toHaveLength(1)

  //     const element = screen.getByText('umblog.com')

  //     screen.debug()

  //     expect(element).toBeDefined()
  //   })

  test('blog title and author show, but url and likes dont', async () => {
    const div = container.querySelector('.blogView')
    expect(div).toHaveTextContent('fulano')
    expect(div).toHaveTextContent('umblog')

    // const author = screen.getByText('fulano', { exact: false })
    //const title = screen.getByText('umblog', { exact: false })
    // const author = await screen.findByText('fulano')
    // const title = await screen.findByText('umblog')
    //const url = screen.queryByText('oblog.com')
    // const likes = screen.queryByText('0')

    //expect(author).toBeDefined()
    //expect(title).toBeDefined()

    //expect(url).toBeNull()
    // expect(likes).toBeNull()

    //const blogSummary = container.querySelector('.blogView')
    //expect(blogSummary).toBeDefined()

    const details = container.querySelector('.blogDetails')
    expect(details).toHaveStyle('display: none')

    // Verify URL and likes are in the document but not visible
    const url = screen.getByText(blog.url)
    const likes = screen.getByText('0', { exact: false })

    expect(url.parentElement).toHaveStyle('display: none')
    expect(likes.parentElement).toHaveStyle('display: none')

    //const blogDetails = container.querySelector('.blogDetails')
    //expect(blogDetails).toHaveStyle('display: none;')
  })

  test('url and likes are shown when show button is clicked', async () => {
    const mockHandler = vi.fn()
    const button = screen.getByText('view')
    const user = userEvent.setup()
    console.log(button)

    await user.click(button)

    const details = container.querySelector('.blogDetails')
    expect(details).not.toHaveStyle('display: none')

    // console.log(mockHandler)
    // console.log(mockToggleHandler)

    // expect(mockToggleHandler.mock.calls).toHaveLength(1)

    const url = screen.getByText(blog.url)
    const likes = screen.getByText('0', { exact: false })

    expect(url).toBeVisible()
    expect(likes).toBeVisible()
  })

  test('clicking like button twice calls event handler twice', async () => {
    const user = userEvent.setup()
    // First show the details
    const showButton = screen.getByText('view')
    await user.click(showButton)

    // Verify the like button is visible
    const likeButton = screen.getByText('like')
    console.log('Found like button:', likeButton)
    expect(likeButton).toBeVisible()

    // Click the like button
    await user.click(likeButton)
    await user.click(likeButton)

    // Log the mock calls for debugging
    console.log('Mock handler calls:', mockLikeHandler.mock.calls)
    console.log('Mock handler values:', mockLikeHandler.mock.calls[1][1].likes)

    expect(mockLikeHandler.mock.calls).toHaveLength(2)

    // expect(mockLikeHandler.mock.calls[1][1].likes).toBe(2)
  })
})
