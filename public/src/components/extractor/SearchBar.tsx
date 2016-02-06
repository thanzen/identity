
import * as React from 'react';
import BaseComponent from '../../BaseComponent';
import { Input, Button, Grid, Col, Form, FormGroup } from 'amazeui-react';
import {changeUrl, submitExtractRequest} from "../../actions";
import history from "../../history";

function onSubmit(url: string, navUrl: string) {
    if (url) {
        submitExtractRequest(url);
    }
    if (navUrl) {
        history.replaceState(null, navUrl);
    }
    return false;
}

const styles = {
    input: {
        width: "100%"
    },
    form: {
        width: "100%",
        marginBottom: "20px"
    }
}

function onChange(event: any) {
    changeUrl(event.target.value);
}

function getButton(isValidUrl: boolean, isExtracting: boolean, url: string, navUrl: string) {
    if (isValidUrl && !isExtracting) {
        return <Button amStyle="primary" radius type="submit" >Get Data</Button>
    }
    return <Button amStyle="primary" radius type="submit" disabled>Get Data</Button>;
}

export const SearchBar = ({isValidUrl, isExtracting, url, navUrl}) => (
    <Form inline style={styles.form} onSubmit={(e) => { e.preventDefault(); onSubmit(url, navUrl); } } className="searchbar-form">
        <Input type="input" label=""  value={url}  onChange={onChange}  style={styles.input} round icon="search"/>
        {'\u00a0'}
        {getButton(isValidUrl, isExtracting, url, navUrl) }
    </Form>
)
