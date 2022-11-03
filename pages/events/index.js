import { getAllEvents } from "../../dummy-data";
import { useRouter } from 'next/router';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/event-search';
import { Fragment } from "react";

function AllEventsPage () {
    const router = useRouter();
    const events = getAllEvents();

    function findEventsHandler(year, month) {
        const fullPath = `/events/${year}/${month}`;
        
        router.push(fullPath);
    }
    return (
        <Fragment>
            <EventsSearch onSearch={findEventsHandler}/>
            <EventList items={events} />
        </Fragment>
    )
}

export default AllEventsPage;