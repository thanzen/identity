
import * as React from 'react';
import BaseComponent from '../../BaseComponent';
import { Input, Button, Grid, Col, Form } from 'amazeui-react';
import {changeUrl, submitExtractRequest} from "../../actions";
import history from "../../history";
interface Props { url: string }

function onSubmit(url: string, navUrl: string) {
    if (url) {
        submitExtractRequest(url);
    }
    if (navUrl) {
        history.replaceState(null, navUrl);
    }
}

const styles ={
  input:{
    width:"500px"
  },
  form:{
      width:"100%",
      marginBottom:"20px"
  }
}

function onChange(event: any) {
    changeUrl(event.target.value);
}

export const SearchBar = ({url, navUrl}) => (
         <Form inline  style={styles.form}>
            <Input type="input" label=""  value={url}  onChange={onChange}  style={styles.input}/>
            {'\u00a0'}
            <Button amStyle="primary" radius onClick={() => { onSubmit(url, navUrl); } }>Get Data</Button>
        </Form>
)
