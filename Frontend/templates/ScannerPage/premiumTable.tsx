import Box from '@mui/material/Box';
import { useState } from 'react';
import { getInitialValue, stockPrice } from './stock';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  DataGridPremium,
  GridToolbar,
  useGridApiRef,
  useKeepGroupedColumnsHidden,
} from '@mui/x-data-grid-premium';
import test from './test.json'
import { useDemoData } from '@mui/x-data-grid-generator';
import { useEffect } from 'react';

const darkTheme = createTheme({
  palette: {
    mode: 'dark', // Set theme mode to dark
  }
});



const DataGridPremiumDemo = () => {
  const [tableData, setTableData] = useState({...test, rows: []});

  const { data, loading } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 4,
    maxColumns: 4
  });

  useEffect(() => {
    const getInitialData = async () => {
      const dataValue: any = await getInitialValue(); // Ensure this returns the correct type
      setTableData({...test, rows: [...(dataValue as never[])]});
      console.log(stockPrice())
      const symbolList = dataValue.map((item: any) => {
      // loop for all of symbol
      });
    };
    
    getInitialData();
  }, []);

  
  console.log(data, tableData)

  
  return (
    <ThemeProvider theme={darkTheme}>
    <Box sx={{ height: '89.3vh', width: '100%' }}>
      <DataGridPremium
        {...tableData}
        loading={loading}
        checkboxSelection 
        slots={{ toolbar: GridToolbar }}
        getRowId={(row: any) => row.symbol}
      />
    </Box>
    </ThemeProvider>
  );
}

export {DataGridPremiumDemo}