import React, {FC} from 'react';
import {Layout, Menu, Row} from 'antd';
import {useNavigate} from 'react-router-dom';
import {RouteNames} from '../router';

const Navbar: FC = () => {
    const navigate = useNavigate();
    const auth = true;
    return (
        <Layout.Header>
            <Row justify="end">
                {auth ?
                    <>
                        <div style={{color: 'white'}}>Andrei</div>
                        <Menu theme="dark" mode="horizontal" selectable={false}>
                            <Menu.Item onClick={() => console.log('Logout')}
                                       key={1}>Logout</Menu.Item>
                        </Menu>
                    </>
                    :
                    <Menu theme="dark" mode="horizontal" selectable={false}>
                        <Menu.Item onClick={() => navigate(RouteNames.LOGIN)} key={6} style={{fontSize: '15px'}}>
                            Login
                        </Menu.Item>
                    </Menu>
                }
            </Row>
        </Layout.Header>
    );
};

export default Navbar;