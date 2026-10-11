import { Card, DataList, DataListItem,  } from '@mantine/core';
import '@mantine/core/styles.css';
import { env } from 'cloudflare:workers';





async function  FileList(){
    const files = await env.archive_r2.list()

return(
<DataList>
{files.objects.map((item:R2Object)=>(
<DataListItem>
<Card>
 {item.key}  
</Card>
</DataListItem>
    


))}
</DataList>
)}
export default FileList







