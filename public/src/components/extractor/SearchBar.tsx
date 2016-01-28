
import * as React from 'react';
import BaseComponent from '../../BaseComponent';
import { Input, Button } from 'amazeui-react';
import {changeUrl, submitExtractRequest} from "../../actions"
interface Props { url: string }

function onSubmit(url: string) {
    if(url){
      submitExtractRequest(url);
    }
}

function onChange(event: any) {
    changeUrl(event.target.value);
}

export const SearchBar = ({url}) => (
    <div>
        <Input type="input" label=""  value={url}  onChange={onChange} />
        <Button amStyle="primary" radius onClick={() => { onSubmit(url) } }>Get Data</Button>
    </div>
)
