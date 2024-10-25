const a: number = 3
const b: "12" = "12"
const c: null = null
const d: undefined = undefined

const e: number | null = 3 as number | null

type MaybeNumber = number | null

const f: MaybeNumber = 3
if (f != null){
  f
}

type Person = {
  name: string,
  age: number,
  job?: string,
}

const person: Person = {
  name: "김동영",
  age: 20,
}

if (person.job != null) {
  console.log('this man has a job ' + person.job)
}
else {
  console.log('이새끼백수련임' + person.job)
}


type NotStartedJob = {
  status: "not-started"
}
type OngoingJob = {
  status: "ongoing",
  progress: number,
}
type FinishedJob = {
  status: "finished",
  result: "success" | "fail"
}

type Job = NotStartedJob | OngoingJob | FinishedJob

const job: Job = 1 as unknown as Job
switch (job.status) {
  case "not-started":
    job
    break;
  case "ongoing":
    job.progress
    break;
  case "finished":
    job.result
    break;
}


function square(x: number) {
  if (x % 2 === 0) {
    return x
  }
  else {
    return x.toString()
  }
}


const returnValue = square(3)

const returnNumber = typeof returnValue === "string" ? Number(returnValue) : returnValue


function triple<T>(element: T) {
  return [element, element, element]
}

const g = triple(1) // [1, 1, 1]
const h = triple("asdf") // ["asdf", "asdf", "asdf"]


type Return<T> = T extends (...args: any[]) => infer R ? R : never

type A = Return<typeof square>