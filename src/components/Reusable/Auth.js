import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocalizedText from '../../i18n/localized';

const AuthButton = () => {
    const [showLoginButton, setShowLoginButton] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://weather-graphql.shouyicheng.com/oauth2/auth');
                if (response.status === 401) {
                    setShowLoginButton(true);
                } else if (response.status === 200) {
                    setShowLoginButton(false);
                }
            } catch (error) {
                console.error('error to fetch', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {showLoginButton ? (
                <Link
                    href="https://weather-graphql.shouyicheng.com"
                    target="_blank"
                    underline="none"
                    sx={{ display: 'flex' }}>
                    <Button variant="contained" color="primary">
                        {LocalizedText({ dataSource: 'labels', key: 'log-in' })}
                    </Button>
                </Link>

            ) : (
                <Link
                    href="https://github.com/wujun4code/the-weather-forecasting"
                    target="_blank"
                    underline="none"
                    sx={{ display: 'flex' }}>
                    <GitHubIcon
                        sx={{
                            fontSize: { xs: '20px', sm: '22px', md: '26px' },
                            color: 'white',
                            '&:hover': { color: '#2d95bd' },
                        }}
                    />
                </Link>
            )}
        </div>
    );
};

export default AuthButton;
