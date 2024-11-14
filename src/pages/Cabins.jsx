import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Cabins() {
  return (
    <Row>
      <Heading as="h1">All Cabins</Heading>
      <CabinTable />
    </Row>
  );
}

export default Cabins;
