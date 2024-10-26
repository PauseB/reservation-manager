import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { supabase } from "@/supabase/client"
import { useEffect } from "react"

export default function IndexPage() {
  useEffect(() => {
    supabase.auth.getUser().then(user => {
      console.log(user)
    })
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>asdfadf</CardTitle>
        <CardDescription>asdfsdf</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <Button variant="destructive" onClick={() => supabase.auth.signOut()}>
          로그아웃
        </Button>
      </CardFooter>
    </Card>
  )
}