
import { DataGridPro } from '@mui/x-data-grid-pro';
import { useDemoData } from '@mui/x-data-grid-generator';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import test from './test.json'
import Box from '@mui/material/Box';
import { TextsmsTwoTone } from '@mui/icons-material';


const DataGridProDemo = () => {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 2,
    editable: false,
  });
  console.log(data);

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
    <Box sx={{ height: '89.5vh', width: '100%' }}>
      <DataGridPro
        {...data}
        loading = {data.rows.length === 0}
        rowHeight={38}
        checkboxSelection
      />
    </Box>
    </ThemeProvider>
  );
}


export {DataGridProDemo}