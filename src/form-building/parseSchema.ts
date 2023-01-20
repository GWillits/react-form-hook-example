import { DynamicFieldData } from '@/types/dynamic-form-types';
import { buildYup } from 'schema-to-yup'
const processSchema = (formdata:any):any =>
{
    const formElements: DynamicFieldData[] = [];
    const key = Object.keys(formdata)[0]
    const fields = formdata[key].fields;
    const shape:any = {
        title: key,
        type: 'object',
        log: true,
        required: [],
        properties: {}
      }
    const config:any = { errMessages: {} }
    fields.forEach((field:any) => {
        let nullable = false
        const name = field.verb ? `${field.fieldname}__${field.verb}` : field.fieldName
          config.errMessages[name] = {}
          if (field.yup && field.yup.type) {
            shape.properties[name] = { type: field.yup.type }
            if (field.yup.required) {
                shape.required.push(name)
                config.errMessages[name].required = `${field.label} is required`
                config.errMessages[name].string = `${field.label} is required`
              } else {
                nullable = true
              }
            field.yup.checks.forEach((check:any) => {
              shape.properties[name][check.key] = check.val
              if (check.err) { config.errMessages[name][check.key] = check.err }
            })
            shape.properties[name].nullable = nullable || false
          }
          formElements.push(field)
      })
    delete fields.yup
    return {"key":key,"formElements":formElements,"schema":buildYup(shape, config)}
}

export default processSchema