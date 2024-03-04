import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocalizedText from '../../i18n/localized';

const AuthButton = () => {
    const [showLoginButton, setShowLoginButton] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://weather-graphql.shouyicheng.com/oauth2/auth', { credentials: 'include' });
                if (response.status === 401) {
                    setShowLoginButton(true);
                } else if (response.status > 199 && response.status < 300) {
                    setShowLoginButton(false);
                }
            } catch (error) {
                setShowLoginButton(true);
                console.error('error to fetch', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {showLoginButton === true && showLoginButton !== null && (
                <Link
                    href="https://weather-graphql.shouyicheng.com"
                    target="_blank"
                    underline="none"
                    sx={{ display: 'flex' }}>
                    <Button variant="contained" color="primary">
                        {LocalizedText({ dataSource: 'labels', key: 'log-in' })}
                    </Button>
                </Link>

            )}

            {showLoginButton === false && showLoginButton !== null && (
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
