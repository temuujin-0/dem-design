import React from 'react';
import { Paper, InputBase, IconButton } from "@mui/material";
import { makeStyles } from '@mui/styles'
import SearchIcon from '@mui/icons-material/Search';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles({
    root: {
        fontSize: '1rem !important',
        padding: '0px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 220,
        border: '1px solid #EBEDF2',
        boxShadow: 'none',
        borderRadius: 8,
        height: 35
    },
    input: {
        fontSize: '1rem !important',
        color: '#4e4e4e',
        marginLeft: 8,
        flex: 1,
        width: 200,
        fontFamily: 'Mulish'
    },
    iconButton: {
        padding: 8,
        color: '#32a9e2'
    },
});

const Search = ({
    onSearch,
    value,
    setter,
    rootStyle = null,
    showSearchButton = true
}) => {
    const { t } = useTranslation();
    const handleSearchClick = () => {
        onSearch(value);
    };

    const onHandlerKeyDown = (event) => {
        if (event.key == 'Enter') {
            onSearch(value);
        }
    }

    const classes = useStyles();
    return (
        <Paper className={classes.root} style={rootStyle || null}>
            <InputBase
                onKeyDown={onHandlerKeyDown}
                value={value}
                className={classes.input}
                placeholder={t('action.search')}
                inputProps={{
                    'aria-label': 'Search...'
                }}
                onChange={e => setter(e.target.value)}
            />
            {
                showSearchButton && <IconButton
                    className={classes.iconButton}
                    aria-label="Search"
                    onClick={handleSearchClick}
                >
                    <SearchIcon />
                </IconButton>
            }
        </Paper>
    )
};

export default Search;