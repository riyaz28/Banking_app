import React, {useState} from 'react';
import { findAccount } from './UtilityFunctions';
import {BudgetApp} from './BudgetApp';
import {SideNavbar} from './SideNavbar';
import {TransferPage} from './TransferFund';
import {MainClientContent} from './UserHome';

export const UserDashboard = (props) => {
    const { logoutHandler, client, setClient } = props;
    const [users, setUsers] = useState(props.users);
    const [ page, setPage ] = useState('home');

    const changePageHandler = (pageName) => {
      setPage(pageName);
      const currentUser = findAccount(client.number);
      setClient(currentUser);
    }
  
    if(page === 'home') {
      return (
        <main>
          <SideNavbar changePage={changePageHandler} page={page} user={client} logoutHandler={logoutHandler} />
          <MainClientContent user={client} />
        </main>
      )
    }
  
    if(page === 'budget') {
      return (
        <main>
          <SideNavbar changePage={changePageHandler} page={page} user={client} logoutHandler={logoutHandler} />
          <BudgetApp client={client} />
        </main>
      )
    }
  
    if(page === 'transfer') {
      return (
        <main>
          <SideNavbar changePage={changePageHandler} page={page} user={client} logoutHandler={logoutHandler} />
          <TransferPage isClient="true" client={client} setClient={setClient} users={users} setUsers={setUsers}  />
        </main>
      )
    }
}
