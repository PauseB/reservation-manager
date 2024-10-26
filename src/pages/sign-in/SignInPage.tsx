import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { SignInSchema, signInSchema } from './schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { supabase } from '@/supabase/client'
import { Spinner } from '@/components/custom/spinner'

export function SignIn() {
  const form = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema)
  })

  async function onSubmit(values: SignInSchema) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: values.username + "@example.com",
      password: values.password
    })
    if (error) {
      console.log("Error: ", error)
    }
    else {
      console.log("로그인 성공")
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-semibold text-center">로그인</h2>
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>아이디</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>비밀번호</FormLabel>
                  <FormControl>
                    <Input {...field} type="password"/>
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              { form.formState.isSubmitting ? <Spinner/> : "로그인" }
            </Button>
          </form>
        </Form>

        <p className="text-center text-sm text-gray-600">
          계정이 없으신가요?{" "}
          <Link to="/auth/sign-up" className="text-blue-600 hover:underline">
            회원가입
          </Link>
        </p>
      </div>
    </div>
  )
}