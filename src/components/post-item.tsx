import '@/styles/post-item.scss'

import { DotIcon } from 'lucide-react'

import { Story } from '@/types'
import { convertDate } from '@/lib/utils'

import HoverCard from '@/components/hover-card'

export default function PostItem({ story }: { story: Story }) {
  return (
    <div className='post-item'>
      <img
        className='post-image'
        src='https://picsum.photos/1920/1080'
        alt='Random Image'
      />
      <div className='post-inner-container'>
        <div>
          <div className='post-info'>
            <span className='post-author'>
              {story.by}
              <HoverCard userId={story.by} />
            </span>
            <DotIcon size={24} />
            <span>{story.score} points</span>
            <DotIcon size={24} />
            <span>{convertDate(story.time)}</span>
          </div>

          <h3 className='post-title'>
            <a href={story.url} target='_blank'>
              {story.title}
            </a>
          </h3>
        </div>
        <a className='post-link' href={story.url} target='_blank'>
          Read More
        </a>
      </div>
    </div>
  )
}
