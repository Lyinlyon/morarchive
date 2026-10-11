import '@mantine/core/styles.css';

import { AppShell, AppShellHeader, AppShellMain, Card, Center, DataList, DataListItem, MantineProvider } from '@mantine/core'
import FileList from './FileList';

function App(){
  

  return (
    <MantineProvider defaultColorScheme='dark'>
    <AppShell header={{height:60}}>
      <AppShellHeader>
        <Center>
          Hello world!
        </Center>
      </AppShellHeader>
      <AppShellMain>
        
        <FileList>
          
        </FileList> 
        
      </AppShellMain>
    </AppShell>
    </MantineProvider>
    
  )
}
export default App
