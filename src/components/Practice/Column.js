import React from 'react'
import styled from 'styled-components'
import Task from './Task'
import {Droppable } from 'react-beautiful-dnd'

const Container = styled.div`
margin : 8px;
width : 260px;

border-radius : 2px; 
display : flex;
flex-direction : column;

`;
const Title = styled.h3`
padding : 8px;

font-family: 'Ubuntu', sans-serif;
color : rgba(254, 254, 254, 0.539);;
font-weight: 400;
font-size: 26px;

border-radius : 5px;
`;
const TaskList = styled.div`
flex-grow : 1;
min-height : 300px;
border-radius : 5px;
padding : 8px;
background-color : ${props => (props.isDraggingOver ? 'rgba(231, 231, 231, 0.167);' : 'rgb(40,40,40)')}`;


export default class Column extends React.Component{

    render ()
    {
        return (
            <Container>
                <Title>{this.props.column.title}</Title>

                <Droppable droppableId={this.props.column.id}>

                    {(provided, snapshot) => (
                        <TaskList 
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        isDraggingOver={snapshot.isDraggingOver}
                        >
                            {this.props.tasks.map((task, index) => {
                                return <Task key={task.id} task={task} index={index}/>
                            })}
                            {provided.placeholder}
                        </TaskList>
                    )}

                </Droppable>
                
            </Container>
        )
    }

}