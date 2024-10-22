"use client"

import { z } from "zod"

const UserValidations = z.object({
    profile_photo :z.string().url().nonempty(),
  name: z.string().min(2).max(30),
  username: z.string().min(2).max(30),
  bio: z.string().min(2).max(1000),
})


export default UserValidations
