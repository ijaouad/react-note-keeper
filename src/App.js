import { Navbar } from "./components/Navbar"
import { NoteForm } from "./components/NoteForm"
import { NoteList } from "./components/NoteList"
import NoteContextProvider from "./contexts/NoteContext"

const App = () => {
  return (
    <div className="App">
      <NoteContextProvider>
        <Navbar />
        <NoteForm />
        <NoteList />
      </NoteContextProvider>
    </div>
  );
}

export default App;
