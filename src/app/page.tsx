import PostItem from '@/components/post-item'

import '@/styles/utils.scss'
import '@/styles/home.scss'

import { Story } from '@/types'

import { getRandomTopStories } from '@/lib/api'

export default async function Home() {
  const stories = await getRandomTopStories()

  return (
    <div className='post-item-container'>
      {stories.map((story: Story) => (
        <PostItem key={story.id} story={story} />
      ))}
    </div>
  )
}
