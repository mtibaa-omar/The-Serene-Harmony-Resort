import BookingTable from "../features/bookings/BookingTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Bookings() {
  return (
    <Row>
      <Heading as="h1">Bookings</Heading>
      <BookingTable />
    </Row>
  );
}

export default Bookings;
