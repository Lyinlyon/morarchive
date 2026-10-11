import '@mantine/core/styles.css';
import { AppShell, AppShellHeader, AppShellMain, Card, Center, DataList, DataListItem, MantineProvider } from '@mantine/core'


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
        <DataList withDivider>
          <DataListItem>
            <Card>
            PDF1
          </Card>
          </DataListItem>
          <DataListItem>
            <Card>
            PDF2
          </Card>
          </DataListItem>
          <DataListItem>
            <Card>
            PDF3
          </Card>
          </DataListItem>
          
        </DataList>
      </AppShellMain>
    </AppShell>
    </MantineProvider>
    
  )
}
export default App
