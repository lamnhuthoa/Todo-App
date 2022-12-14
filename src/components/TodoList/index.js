import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
// import { addTodo } from '../../redux/actions';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { todosRemainingSelector } from '../../redux/selectors';
import todoListSlice from './todoListSlice';

export default function TodoList() {
    const [todoName, setTodoName] = useState('');
    const [priority, setPriority] = useState('Medium');
    const dispatch = useDispatch();

    const todoList = useSelector(todosRemainingSelector);

    const handleInputChange = (event) => {
        setTodoName(event.target.value);
    }

    const handlePriorityChange = (value) => {
        setPriority(value)
    }

    const handleAddTodo = () => {
        dispatch(todoListSlice.actions.addTodo({
            id: uuidv4(),
            name: todoName,
            priority: priority,
            completed: false,
        }))
        setTodoName('');
        setPriority('Medium');
    }

    return (
        <Row style={{ height: 'calc(100% - 40px)', position: 'relative', overflowY: 'hidden' }}>
            <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
                {todoList.map(todo =>
                    <Todo key={todo.id} todoId={todo.id} name={todo.name} priority={todo.priority} completed={todo.completed}/>
                )}
            </Col>
            <Col span={24} style={{position: 'absolute', bottom: '0', left: '0', right: '0'}}>
                <Input.Group style={{ display: 'flex' }} compact>
                    <Input value={todoName} onChange={handleInputChange} />
                    <Select defaultValue="Medium" value={priority} onChange={handlePriorityChange} style={{minWidth: '112px', textAlign: 'center'}}>
                        <Select.Option value='High' label='High'>
                            <Tag color='red'>High</Tag>
                        </Select.Option>
                        <Select.Option value='Medium' label='Medium'>
                            <Tag color='blue'>Medium</Tag>
                        </Select.Option>
                        <Select.Option value='Low' label='Low'>
                            <Tag color='gray'>Low</Tag>
                        </Select.Option>
                    </Select>
                    <Button type='primary' onClick={handleAddTodo}>
                        Add
                    </Button>
                </Input.Group>
            </Col>
        </Row>
    );
}