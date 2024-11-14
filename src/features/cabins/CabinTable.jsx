import Table from "../../ui/Table";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import Spinner from "../../ui/Spinner";

function CabinTable() {
  const { cabins, isLoading, error } = useCabins();
  console.log(cabins, isLoading, error);
  if (isLoading) return <Spinner />;
  return (
    <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
      <Table.Header role="row">
        <div></div>
        <div>cabin</div>
        <div>capacity</div>
        <div>price</div>
        <div>discount</div>
        <div></div>
      </Table.Header>
      <Table.Body
        data={cabins}
        render={(cabin) => <CabinRow key={cabin.id} cabin={cabin} />}
      ></Table.Body>
    </Table>
  );
}

export default CabinTable;
