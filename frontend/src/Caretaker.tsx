import { createContext, useEffect, useState } from 'react';
import readResponseStreamToCompletion from './CommunicationUtils';

export const Caretaker = createContext(new Array<Array<String>>());

type Props = {
    accountName: string,
    children: JSX.Element | JSX.Element[]
}

export function CaretakerProvider (props: Props) {

    const [directDepositAndChkAccount, setDirectDepositAndChkAccount] = useState(new Array<Array<string>>());
    function fetchReadParseAndSetDirectDepositAndChkAccount(): void {
        const promiseOfResponse = fetch('http://localhost:3001/get_account?name=' + props.accountName);
        function parseAndSetDirectDepositAndChkAccount (directDepositAndChkAccountAsString: string): void {
            const directDepositAndChkAccount: string[][] = JSON.parse(directDepositAndChkAccountAsString);
            setDirectDepositAndChkAccount(directDepositAndChkAccount);
        }
        promiseOfResponse.then(readResponseStreamToCompletion).then(parseAndSetDirectDepositAndChkAccount);
    }
    useEffect(() => { fetchReadParseAndSetDirectDepositAndChkAccount(); }, []);

    return (
        <Caretaker.Provider value = { directDepositAndChkAccount }>
            { props.children }
        </Caretaker.Provider>    
    );
}