import { FormProvider,useForm} from 'react-hook-form'
import { DynamicFieldData } from '@/types/dynamic-form-types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import ValidationErrors from './ValidationErrors';
import DynamicControl  from './formControlFactory';

interface FormProps {
    key: string;
    fields: DynamicFieldData[];
    schema: any;
  }
const DynamicForm = ({ fields,schema }: FormProps):JSX.Element => {
    // console.log(yupSchema,schema,test)
    const formMethods = useForm({
        resolver: yupResolver(schema),
        shouldFocusError:false
      });
    const { formState: { errors },handleSubmit } = formMethods
    const onSubmit = (data: any) => {
        return console.log("SUBMITTED",data);
    };
    
    return (
        <>
        {Object.keys(errors).length > 0  ? <ValidationErrors errors={errors}  />: null}
        <form  onSubmit={handleSubmit(onSubmit)}>
          <FormProvider {...formMethods}>
            {fields.map((fieldData, i) => (
              <div key={i} className="row">
                <label htmlFor={fieldData.fieldName}>{fieldData.label}:</label>
                <DynamicControl {...fieldData} />
              </div>
            ))}
          </FormProvider>
          <div className='right' >
          <button type="submit">Submit</button>
          </div>
        </form></>
      );
}

export default DynamicForm