import {useState} from 'react';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid' 
import listPlugin from "@fullcalendar/list" 
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick

import { Box, List, ListItem, ListItemText,Typography, useTheme } from "@mui/material";
import { tokens } from '../../theme';
import Header from "../../components/Header";
import { formatDate } from '@fullcalendar/core';

const Calendar =() =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvents, setcurrentEvents] = useState([]);

    const handleDateClick = (selected) => {
        const title = prompt("Please enter a new title for your event");
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();
        if(title){
            calendarApi.addEvent({
                id:`${selected.dateStr}-${title}`,
                title,
                start:selected.startStr,
                end:selected.endStr,
                allDay:selected.allDay,
            })
        }
    };
    const handleEventClick = (selected) => {
        if(window.confirm(`Are you sure you want to delete the event '${selected.event.title}'?`)){
            selected.event.remove();
        }
    }

    const renderEventContent= (eventInfo) => {
        return (
            <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
            </>
        )
    }

    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">    
                <Header title="CALENDAR" subTitle="Your Calendar"/>
            </Box>
            <Box display="flex" justifyContent="space-between">
                {/* CALENDAR SIDEBAR */}
                <Box flex="1 1 20%" backgroundColor={colors.primary[400]} p="15px" borderRadius="4px">
                    <Typography variant='h5'>Events</Typography>
                    <List>
                        {currentEvents.map((event)=>(
                            <ListItem 
                                key={event.id}
                                sx={{
                                    backgroundColor: colors.greenAccent[500],
                                    margin:"10px 0",
                                    borderRadius:"2px",
                                }}
                            >
                                <ListItemText
                                    primary={event.title}
                                    secondary={
                                        <Typography>
                                            {formatDate(event.start,{
                                                year:"numeric",
                                                month:"short",
                                                day:"numeric"
                                            })}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>
                {/* Calendar  */}
                <Box flex="1 1 100%" ml="15px">
                    <FullCalendar
                        height='75vh'
                        plugins={[ dayGridPlugin,timeGridPlugin,interactionPlugin, listPlugin ]}
                        // eventContent={renderEventContent}
                        headerToolBar={{
                            left:"prev, next today",
                            center:"title",
                            right:"dayGridMonth,timeGridWeek,timeGridDay,listMonth"
                        }}
                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDateClick}
                        eventClick ={handleEventClick}
                        eventSet = {(events)=>setcurrentEvents(events)}
                        initialEvents={[
                            {id:"1234",title:"All day event",date:"2023-03-03"},
                            {id:"12345",title:"Timed event",date:"2023-03-07"},
                        ]}
                    />

                    {/* <FullCalendar
                        plugin={[
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                            listPlugin
                        ]}
                        height='75vh'
                        headerToolBar={{
                            left:"prev, next today",
                            center:"title",
                            right:"dayGridMonth,timeGridWeek,timeGridDay,listMonth"
                        }}
                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDateClick}
                        eventClick ={handleEventClick}
                        eventSet = {(events)=>setcurrentEvents(events)}
                        initialEvents={[
                            {id:"1234",title:"All day event",date:"2023-03-03"},
                            {id:"12345",title:"Timed event",date:"2023-03-07"},
                        ]}
                    /> */}
                </Box>
            </Box>
        </Box>
    )
}
export default Calendar;