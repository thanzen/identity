//get array of property name from given object
export var interfacePropertyToStringArray = (property: (object: any) => void): string[] => {
    if (!property) return [];
    return Object.keys(property);
}

export interface IProperty { name: string; alias: string; selected?:boolean }

//get array of {name, alias, selected} from given object
export var interfacePropertyToObjectArray = (property: (object: IProperty) => void) => {
    var results: IProperty[] = [];
    if (!property) return [];
    for (var key in Object.keys(property)) {
        results.push({ name: key, alias: key, selected:true });
    }
    return results;
}
