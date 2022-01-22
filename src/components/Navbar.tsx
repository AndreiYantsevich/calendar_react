import React, {FC} from 'react';
import {Layout, Menu, Row} from 'antd';
import {useNavigate} from 'react-router-dom';
import {RouteNames} from '../router';
import {useTypedSelector} from '../hooks/useTypedSelector';

const Navbar: FC = () => {
    const navigate = useNavigate();
    const isAuth = useTypedSelector(state => state.auth.isAuth)
    return (
        <Layout.Header>
            <Row justify="end">
                {isAuth ?
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