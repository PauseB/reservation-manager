import { z } from "zod"

export const signInSchema = z.object({
  username: z.string({ required_error: "아이디를 입력해주세요." })
    .min(4, "비밀번호는 최소 4자입니다.")
    .max(16, "비밀번호는 최대 16자입니다."),
  password: z.string({ required_error: "비밀번호를 입력해주세요." })
    .min(6, "비밀번호는 최소 6자입니다."),
})

export type SignInSchema = z.infer<typeof signInSchema>