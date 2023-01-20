import {Controller, useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import ValidationErrors from './ValidationErrors';
const schema = yup.object({
    firstName: yup.string().required('Please provide your first name'),
    age: yup.number().typeError('Age must be a number').positive().integer().required(),
  }).required();

const TestForm = ():JSX.Element => {

    const { register,formState: { errors },handleSubmit } = useForm({
        resolver: yupResolver(schema),
        shouldFocusError:false
      });
    const onSubmit = (data: any) => {
        return console.log(data);
    };
    
    return (
        <>
        {Object.keys(errors).length > 0  ? <ValidationErrors errors={errors}  />: null}
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='row'>
                <label>First Name:</label>
                <input {...register("firstName")} id="firstname" />
                <br />
            </div>
            <div className='row'>
                <label>Second Name:</label>
                <input {...register("lastName")} />
                <br />
            </div>
            <div className='row'>
                <label>Age:</label>
                <input type="number" {...register("age")} />
                <br />
            </div>
            <div className='row'>
                <label>Gender:</label>
                <select {...register("gender")}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>
                <br />
            </div>
            <div className='right'>
                <input type="submit" />
            </div>
        </form></>
      );
}

export default TestForm