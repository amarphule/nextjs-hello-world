import Counter from "./components/Counter";
import CounterTwo from "./components/CounterTwo";

export default function Home() {
  return (
    <main>
      <p>Hello World from server components</p>
      <Counter/>
      {/* CounterTwo component gives Error as we didn't add "use client" */}
      {/* <CounterTwo/> */}
    </main>
  )
}
