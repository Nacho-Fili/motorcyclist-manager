import './App.css';
import Section                      from './components/Section'
import Header                       from './components/Header'
import { ThemeContextProvider }     from './context/ThemeContextProvider'
import { ResourceContextProvider }  from './context/ResourceContext'
import  { UserContextProvider }      from './context/UserContext'
import ResourcesRowContainer        from './components/ResourcesRowContainer'

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <ResourceContextProvider>
          <UserContextProvider>
            <Header/>
            <Section>
              <ResourcesRowContainer/>
            </Section>
          </UserContextProvider>
        </ResourceContextProvider>
      </ThemeContextProvider>
      <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
  );
}

export default App;
