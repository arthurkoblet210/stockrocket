import Box from '@mui/material/Box';
import { DataGridPro } from '@mui/x-data-grid-pro';
import { useDemoData } from '@mui/x-data-grid-generator';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const DataGridProDemo = () => {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 40,
    editable: false,
  });

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
    <Box sx={{ height: '90vh', width: '100%' }}>
      <DataGridPro
        {...data}
        loading={data.rows.length === 0}
        rowHeight={38}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    </ThemeProvider>
  );
}


export {DataGridProDemo}