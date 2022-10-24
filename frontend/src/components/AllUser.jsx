import React, { useEffect, useState } from 'react'
import { Table, TableHead, TableBody, TableRow, TableCell, styled, Button} from '@mui/material'
//import { useNavigate } from 'react-router-dom'

import { getUsers } from '../service/api'

const StyledTable = styled(Table)`
    width: full;
    margin: 50px auto 0 auto;
`;

const THead = styled(TableRow)`
    background: #000000;
    & > th {
        color: #fff;
        font-size: 20px
    }
`;

const AllUser = () => {
    const [users, setUsers] = useState([]);
    //const navigate = useNavigate();

    useEffect(() => {
        getAllUsers();
    }, [])

    const getAllUsers = async () => {
       const response = await getUsers();
       setUsers(response.data)
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>email</TableCell>
                    <TableCell>Phone</TableCell> 
                    <TableCell></TableCell>                   
                </THead>
            </TableHead>
            <TableBody>
                {
                    users.map(user =>(
                        <TableRow>
                            <TableCell>{user._id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Button variant="contained" style={{marginRight: 10}}>Edit</Button>
                                <Button variant="contained" color="secondary">Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </StyledTable>
    )
}

export default AllUser
