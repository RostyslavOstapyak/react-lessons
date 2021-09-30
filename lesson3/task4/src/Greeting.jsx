import React from 'react';
import moment from 'moment';


const Greeting = (props)=>{
    const age = moment().diff(moment(props.birthDate), 'Years');
    return (
      <>
        <div className="greeting">
    {`My name is ${props.firstName} ${props.lastName}. I'm ${age} years old`}
</div>
      </>
    )
}

export default Greeting;