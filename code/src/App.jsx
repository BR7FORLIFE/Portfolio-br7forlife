import '../global.css'
import Experience from './components/Experience';
import Header from './components/Header'
import Projects from './components/Projects'

function App() {
  return (
    <section className='w-screen h-screen p-0 m-0 overflow-x-hidden font-Geist'>
      <Header/>
      <main className='w-full h-auto mt-6 mx-3 pb-12'>
        <Projects/>
      </main>
    </section>
  )
}

export default App
