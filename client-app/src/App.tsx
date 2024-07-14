import { useState } from 'react'
import './App.css'
import axios from 'axios';
import useAsyncEffect from 'use-async-effect';
import { Header, List } from 'semantic-ui-react';

function App() {

    const [activities, setActivities] = useState([]);

    useAsyncEffect(async () => {
        try {
            var response = await axios.get('http://localhost:5000/api/activities');
            setActivities(response.data);
        } catch (e) {
            console.log(e);
        }
    }, []);

    return (
        <div>
            <Header as="h1" icon="users" content="Reactivities" />
            <List>
                {activities.map((activity: any) => (
                    <List.Item key={activity.id}>
                        {activity.title}
                    </List.Item>
                ))}
            </List>
        </div>
    )
}

export default App
