import { createSlice } from '@reduxjs/toolkit';

const machineSlice = createSlice({
  name: 'machine',
  initialState: {
    value: [],
  },
  reducers: {
    selectMachine: state => !state,
    runMachine: state => !state,
  }
})