import { DeleteOutlined } from '@ant-design/icons';
import { Row, Tag, Checkbox, Tooltip } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { toggleTodoStatus } from '../../redux/actions';
import todoListSlice from '../TodoList/todoListSlice';

const priorityColorMapping = {
    High: 'red',
    Medium: 'blue',
    Low: 'gray',
};

export default function Todo({ todoId, name, priority, completed }) {
    const dispatch = useDispatch();
    const [checked, setChecked] = useState(completed);

    const toggleCheckbox = () => {
        setChecked(!checked);
        dispatch(todoListSlice.actions.toggleTodoStatus(todoId))
    };

    const deleteTodo = (todoId) => {
        dispatch(todoListSlice.actions.deleteTodo(todoId));
    }

    return (
        <Row
            justify='space-between'
            style={{
                marginBottom: 3,
                // ...(checked ? { opacity: 0.5 } : {}),
            }}
        >
            <Checkbox checked={checked} onChange={toggleCheckbox}>
                <span style={checked ? { textDecoration: 'line-through', opacity: 0.5 } : {}}>{name}</span>
            </Checkbox>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
                    {priority}
                </Tag>
                <div style={{ marginLeft: '8px', cursor: 'pointer' }} onClick={() => deleteTodo(todoId)}>
                    <Tooltip title="Delete this task">
                        <DeleteOutlined style={{ color: 'red', fontSize: '16px' }} />
                    </Tooltip>
                </div>
            </div>
        </Row>
    );
}