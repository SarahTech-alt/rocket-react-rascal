import React from 'react';
import GyroscopicSensor from '../GyroscopicSensor/GyroscopicSensor.jsx';
import IonDriveSensor from '../IonDriveSensor/1onDriveSensor.jsx';
import FlameSensor from '../FlameSensor/FlameSensor.jsx'; // Your flames don't look very... flamey
import './Sensors.css';
// This used to look so pretty! What's the problem? Did you lose your sense of style?


function Sensors() {
    return (
        <div className='container'>
            <h2>Sensors</h2>
            <div className='sensor-container'>
                <GyroscopicSensor />
                <IonDriveSensor />
                {/* Oooops! Did someone steal your ion drive? Ion so sorry! */}
                <FlameSensor />
            </div>
        </div>
    );
}

export default Sensors;
