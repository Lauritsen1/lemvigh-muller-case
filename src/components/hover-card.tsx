import { User } from '@/types'
import { convertDate } from '@/lib/utils'

import { getUser } from '@/lib/api'

export default async function HoverCard({ userId }: { userId: string }) {
  const user: User = await getUser(userId)
  return (
    <div className='hover-card'>
      <p className='hover-card-name'>{user.id}</p>
      <p className='hover-card-details'>Created: {convertDate(user.created)}</p>
      <p className='hover-card-details'>Karma: {user.karma}</p>
    </div>
  )
}
