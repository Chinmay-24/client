import { User } from '@/state/api'
import Image from 'next/image'
import React from 'react'

type Props = {
    user: User
}

const index = ({user}: Props) => {
  return (
    <div className="flex items-center rounded border p-4 shadow">
        {user.profilePictureUrl && (
            <Image
        )}
    </div>
  )
}

export default UserCard