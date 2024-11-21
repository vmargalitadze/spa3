import {

  LogoutButton,

} from "@/components/buttons.component";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Table, TableBody, TableCaption,  TableHeader, } from '@/components/ui/table';
import Info from "./Info";
import Row from "./Row";
export default async function Admin() {
  const session = await getServerSession(authOptions);
  

  if (!session) {
    redirect("/api/auth/signin");
  }



  return (
    <>
   
      <div className="mt-[180px] w-full sm:p-4">
  <Table className="w-full sm:p-4">
    <TableCaption>A list of recent Reservations</TableCaption>
    <TableHeader>
  <Row />
    </TableHeader>
    <TableBody>
     <Info />
    </TableBody>
  </Table>
          <LogoutButton />
</div>
    </>
  );
}
