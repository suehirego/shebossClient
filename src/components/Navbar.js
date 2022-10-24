import React from 'react';
import '../App.css';
import styled from 'styled-components';
import { IoIosSearch } from 'react-icons/io';
import { BsCart3 } from 'react-icons/bs';
import { Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/userRedux";
import media from '../media';
import { useHistory } from "react-router";


const Container = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    background-color: white;
    gap: 20px;
    border-bottom: 1px solid lightgray;
    color: #000000;
    padding: 10px 10px;
    ${media.desktop`
            padding: 0px 10px;
      `}
    ${media.tablet`
        display: flex;
        padding: 10px 10px;
    `}
    ${media.mobile`
        display: flex;
        padding: 10px 10px;
    `}
`;

//left
const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    gap: 20px;
      
`;
const Logo = styled.img`
    width: 120px; 
    ${media.tablet`
        width: 90px;
    `}
    ${media.mobile`
        margin-left: 20px;
        font-size: 11px;
        width: 90px;
    `}
`;

//center
const Center = styled.div`
    flex:4;  
    display: flex;
    align-items: center;
    justify-content: center;
    ${media.tablet`
        flex: 2.5
    `}
`;
const SearchContainer = styled.div`
    border:  0.5px solid teal;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-left: 10px;
    background-color: white;
    border-radius: 5px;
    ${media.tablet`
        display: none;
    `}
    ${media.mobile`
        display: none;
    `}
`;
const Input = styled.input`
    border: none;
    font-size: 13px;
    color: #282828;
    &:focus {
        outline: none
    }
    &:active {
        outline: none;
    }
`;
const SearchIcon = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    height: 100%;
    font-size: 16px;
    color: #fbfbfd;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 10px;
    background-color: teal;
`;

//right
const Right = styled.div`
    flex:2.5; 
    display: flex;
    gap:10px;
    align-items: center;
    justify-content: flex-end;
    ${media.tablet`
        flex: 4;
    `}
    ${media.mobile`
        margin-left: -10px;
        font-size: 11px;
    `}
`;
const Heading = styled.div`
    font-size: 13px; 
    ${media.mobile`
        font-size: 11px; 
    `}
`;
const Desc = styled.div`
    font-size: 17px; 
    font-weight: 500;
    ${media.mobile`
        font-size: 15px; 
    `}
`;
const MenuItem = styled.div`
    font-size: 13px;
    cursor: pointer;
    margin-left: 25px;
    ${media.tablet`
        margin-left: 35px;
    `}
    ${media.mobile`
        margin-left: 20px;
        font-size: 11px;
    `}
`;
const MenuItem2 = styled.div`
    font-size: 13px;
    cursor: pointer;
    margin-left: 25px;
    background-color: #f10088;
    color: white;
    padding: 10px;
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 3px;
`;

const Navbar = () => {

    const quantity = useSelector((state) => state.cart.quantity);

    const user = useSelector((state) => state.user.currentUser);

    const dispatch = useDispatch();
    const history = useHistory();


    const handleLogout = () => {
        dispatch(logoutUser(user))
        history.push("/");
    }



    return (

        <Container>

            <Left>
                <Link to="/" className='linkLogo'>
                    <Logo src={process.env.PUBLIC_URL + '/logo2.png'} alt="" />
                </Link>

            </Left>

            <Center>
                <SearchContainer>
                    <Input placeholder="Search for Products..." />
                    <SearchIcon>
                        <IoIosSearch />
                    </SearchIcon>
                </SearchContainer>
            </Center>

            <Right>

                <Link to="/login" style={{ color: "#191919", textDecoration: "none", cursor: "pointer" }}>
                    <MenuItem>
                        <p style={{ fontSize: 13 }}>Hi, {user ? user.details.firstname : "Sign in"}</p>
                        <p style={{ fontSize: 16, fontWeight: 500 }}>Account</p>
                    </MenuItem>
                </Link>


                <Link to="/login" style={{ color: "#191919", textDecoration: "none", cursor: "pointer" }}>
                    <MenuItem>
                        <Heading style={{ fontSize: 12 }}>Returns&</Heading>
                        <Desc>Orders</Desc>
                    </MenuItem>
                </Link>

                {user 
                    ?
                    <Link to="/cart" style={{ color: "#191919", textDecoration: 'none' }}>
                        <MenuItem>
                            <Badge
                                badgeContent={quantity} color="secondary"
                                style={{ marginLeft: 25, marginTop: 5, position: 'absolute' }}
                                sx={{
                                    "& .MuiBadge-badge": {
                                        color: "#FBFBFD",
                                        backgroundColor: "teal"
                                    }
                                }}
                            >
                            </Badge>
                            <BsCart3 style={{ fontSize: 28 }} />
                        </MenuItem>
                    </Link>
                    :
                    <Link to="/login" style={{ color: "#191919", textDecoration: 'none' }}>
                        <MenuItem>
                            <Badge
                                badgeContent={quantity} color="secondary"
                                style={{ marginLeft: 25, marginTop: 5, position: 'absolute' }}
                                sx={{
                                    "& .MuiBadge-badge": {
                                        color: "#FBFBFD",
                                        backgroundColor: "teal"
                                    }
                                }}
                            >
                            </Badge>
                            <BsCart3 style={{ fontSize: 28 }} />
                        </MenuItem>
                    </Link>
                }

                <MenuItem2 onClick={handleLogout}>
                    <p style={{ fontSize: 13 }}>Log Out</p>
                </MenuItem2>


            </Right>


        </Container>
    )
}

export default Navbar