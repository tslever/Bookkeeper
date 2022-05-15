import { Caretaker } from './Caretaker';
import { useContext } from 'react';
import TableDisplayer from "./TableDisplayer";

function AccountTableDisplayer (): JSX.Element {

    const directDepositAndChkAccount = useContext(Caretaker);

    return (
        <TableDisplayer
            headerData = { ["ID", "Date", "Name", "Account Associated With Value", "Complementary Account", "Value"] }
            bodyData = { directDepositAndChkAccount }
        />
    );
};

export default AccountTableDisplayer;