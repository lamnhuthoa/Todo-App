import { Typography, Divider } from 'antd';
import './App.css';
import TodoList from './components/TodoList';
import Filters from './components/Filters';
import { useEffect, useState } from 'react';

const { Title } = Typography;

function App() {
    return (
        <div className="app-container">
            <Title style={{ textAlign: 'center' }}>MINI TODOS</Title>
            <Filters />
            <Divider />
            <TodoList/>
        </div>
    );
}

export default App;